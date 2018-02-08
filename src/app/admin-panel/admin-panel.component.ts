import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { LibraryService } from '../../assets/InMemoryDb/libraryService';

@Component({
  selector: 'app-admin-panel',
  providers: [LibraryService],
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.scss']
})
export class AdminPanelComponent implements OnInit {
  currentPanel;
  constructor(
    private router: Router,
    private http: HttpClient,
    private libraryService: LibraryService
  ) { }

  users: any;
  booksData: any;
  inventory: any;
  titleG = false;
  getInitData(): void {
    this.libraryService.getBooks().then((data) => {
      this.booksData = data;
      console.log(this.booksData);
    });
  }
  ngOnInit() {
    this.getInitData();
    // this.currentPanel = 'config-panel';
    this.currentPanel = 'track-books';
  }

  setCurrentPanel(panelName: string): void {
    this.currentPanel = panelName;
  }
  logOut(): void {
    sessionStorage.setItem('isAdminLoogedIn', '0');
    this.router.navigate(['/login']);
  }
}
