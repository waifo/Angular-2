import { Component, OnInit } from '@angular/core';
import { LibraryService } from '../../assets/InMemoryDb/libraryService';
// import { Router } from '@angular/router';
import { Router, ActivatedRoute } from '@angular/router';

// import { ActivatedRoute, ParamMap } from '@angular/router';
// import 'rxjs/add/operator/switchMap';
// import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-user-panel',
  providers: [LibraryService],
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.scss']
})
export class UserPanelComponent implements OnInit {
  // heroes$: Observable<Hero[]>;
  constructor(
    private libraryService: LibraryService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  // this.heroes$ = this.route.paramMap
  // .switchMap((params: ParamMap) => {
  //   // (+) before `params.get()` turns the string into a number
  //   this.selectedId = +params.get('id');
  //   return this.service.getHeroes();
  // });
  issuedBook: any;
  logs: any;
  currentPanel: any;
  userPanelModel = {
   'user': undefined,
    'booksData': undefined,
    'configuration': undefined,
    'issueMetadata': undefined
  };
  getInitData(): void {
    // BookLocation data is used @ time of issue. and then will be saved with issued book object.
    this.libraryService.getMetadataToIssue().subscribe((data) => {
      this.userPanelModel.issueMetadata = data;
    });
    this.libraryService.getBooks().then((data) => {
      this.userPanelModel.booksData = data;
    });
    this.libraryService.getConfiguration().then((data) => {
      this.userPanelModel.configuration = data;
    });
      this.libraryService.getInMemoryData('currentUser').then((data) => {
      this.userPanelModel.user = data;
      this.issuedBook = this.userPanelModel.user.issuedBooks;
      this.logs = this.userPanelModel.user.logs;
    }).catch((err) => {
      alert(err);
    });
  }
  ngOnInit() {
    this.getInitData();
    this.currentPanel = 'user-profile';
  }
  setCurrentPanel(panelName: string): void {
    this.currentPanel = panelName;
    }
  logOut(): void {
    sessionStorage.setItem('isUserLoogedIn', '0');
    this.router.navigate(['/login']);
  }
}
