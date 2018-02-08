import { Component, Input, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { LibraryService } from '../../assets/InMemoryDb/libraryService';
// import {ViewChild, ElementRef } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-book-detail-tile',
  // inputs: ['bookData','issuedBook','getBookPlace'],
  providers: [LibraryService],
  templateUrl: './book-detail-tile.component.html',
  styleUrls: ['./book-detail-tile.component.scss']
})
export class BookDetailTileComponent implements OnInit {
  constructor(
    private libraryService: LibraryService
  ) { }
  @Input() bookData;
  @Input() issuedBook;
  @Input() getBookPlace;
  @Input() ind;
  modalId: any;
  targetModalId: any;
  private bookGenre: string;
  private bookTitleFirstLetter: string;
  private perIssueDays: any;
  booksPerUser: any;

  bookLocation = {
    'block': undefined,
    'shelf': undefined
  };
  issuedBookIdArray: any;
  todaysDate = new Date();
  getDueDate(currentDate, perIssueDays): any {
    const date = new Date();
    const res = date.setTime(date.getTime() + (perIssueDays * 24 * 60 * 60 * 1000));
    return (new Date(res));
  }
  getBookIdsInArray(booksAlreadyIssued): void {
    this.issuedBookIdArray = [];
    if (booksAlreadyIssued.length > 0) {
      for (let counter = 0; counter < booksAlreadyIssued.length; counter++) {
        this.issuedBookIdArray.push(booksAlreadyIssued[counter].id);
      }
    }
  }
  getBookLocation(bookPlaceMetadata, genre, titleLetter): void {
    let letters;
    const indexGenre = bookPlaceMetadata.map((data) => {
      return data.genre;
    }).indexOf(genre);
    this.bookLocation.block = bookPlaceMetadata[indexGenre].block;
    for (let counter = 0; counter < bookPlaceMetadata[indexGenre].titleStart.length; counter++) {
      letters = bookPlaceMetadata[indexGenre].titleStart[counter].letters;
      if (letters.match(titleLetter)) {
        this.bookLocation.shelf = bookPlaceMetadata[indexGenre].titleStart[counter].place;
        break;
      }
    }
  }
  ngOnInit() {
    this.modalId = 'issueBookModal' + (this.ind + 1);
    this.targetModalId = '#' + this.modalId;
    this.bookGenre = this.bookData.genre;
    this.bookTitleFirstLetter = this.bookData.title.substring(0, 1);
    this.getBookLocation(this.getBookPlace, this.bookGenre, this.bookTitleFirstLetter);
    this.getBookIdsInArray(this.issuedBook);
    this.libraryService.getConfiguration().then((data) => {
      this.perIssueDays = data.maxDaysPerIssue;
      this.booksPerUser = data.maxBooksPerUser;
    });
  }
  issueBook(book): void {
    if (this.issuedBook.length >= this.booksPerUser || this.issuedBookIdArray.indexOf(book.id) > -1) {
      return;
    } else {
      const issuedBookObj = {
        'id': book.id,
        'title': book.title,
        'author': book.author,
        'fromDate': this.todaysDate,
        'dueDate': this.getDueDate(this.todaysDate, this.perIssueDays),
        'toDate': undefined,
        'block': this.bookLocation.block,
        'shelf': this.bookLocation.shelf,
        'rating': 0
      };
      this.libraryService.issueTheBook(book.id, issuedBookObj).then((res) => {
        this.issuedBook.push(issuedBookObj);
        this.issuedBookIdArray.push(book.id);
        console.log('book issued', this.issuedBook);
      }).catch(err => {
        alert(err);
      });
    }
  }
}
