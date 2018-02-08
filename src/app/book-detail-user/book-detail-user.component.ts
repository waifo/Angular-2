import { Component, Input, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';


@Component({
  selector: 'app-book-detail-user',
  templateUrl: './book-detail-user.component.html',
  styleUrls: ['./book-detail-user.component.scss']
})
export class BookDetailUserComponent implements OnInit {
  @Input() bookData;
  @Input() issuedBook;
  @Input() getBookPlace;
   searchVal: any;

  filterValueArray = ['NA', 'Fiction', 'Horror', 'Technology'];
  filterValue: any;
  constructor() { }
  ngOnInit() {
    this.filterValue = 'NA';
  }
}
