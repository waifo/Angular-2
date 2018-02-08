import { Component, Input, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { LibraryService } from '../../assets/InMemoryDb/libraryService';

@Component({
  selector: 'app-admin-inventory-management-panel',
  providers: [LibraryService],
  templateUrl: './admin-inventory-management-panel.component.html',
  styleUrls: ['./admin-inventory-management-panel.component.scss']
})
export class AdminInventoryManagementPanelComponent implements OnInit {
  @Input() bookData;

  constructor(
    private libraryService: LibraryService
  ) { }

  books: any;
  filterValueArray = ['NA', 'Fiction', 'Horror', 'Technology'];
  filterValue: any;
  textFieldMode = [];
  ngOnInit() {
    this.filterValue = 'NA';
    this.books = this.bookData;
  }
  UpdateInfo(book): void {
    const bookData = {
      'title': book.title,
      'isbn': book.isbn,
      'author': book.author,
      'genre': book.genre,
      'totalPresent': book.totalPresent
    };
    this.libraryService.updateBooks(book.id, bookData).then(data => {
      alert('book Updated');
    }).catch(err => {
      alert(err);
    });
  }

}
