import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LibraryService } from '../../assets/InMemoryDb/libraryService';

@Component({
  selector: 'app-user-profile',
  providers: [LibraryService],
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  @Input() userData;
  constructor(
    private http: HttpClient,
    private libraryService: LibraryService
  ) { }

  users: any;
  books: any;
  inventory: any;
  localUser: any;
  getInitData(): void {
    this.libraryService.getBooks().then((data) => {
      this.books = data;
    });
  }

  ngOnInit(): void {
    this.getInitData();
  }

}
