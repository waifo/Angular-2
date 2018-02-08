import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import { LibraryService } from '../../assets/InMemoryDb/libraryService';
import { AuthService } from '../../assets/InMemoryDb/auth.service';

@Component({
  selector: 'app-log-in',
  providers: [LibraryService],
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

  constructor(
    private router: Router,
    private libraryService: LibraryService,
    private authService: AuthService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
  }

  logIn(user, pass):  void {
    this.authService.logIn1(user, pass).then(res => {
    console.log(res);
    if  (res.access === 'AdminAccess') {
    sessionStorage.setItem('isUserLoogedIn', '0');
    sessionStorage.setItem('isAdminLoogedIn', '1');
    this.router.navigate(['/admin']);
    } else if  (res.access === 'UserAccess') {
    this.libraryService.setCurrentUser(res.data);
    sessionStorage.setItem('isUserLoogedIn', '1');
    sessionStorage.setItem('isAdminLoogedIn', '0');
    this.router.navigate(['/user']);
    }
    // else {
    // alert("");
    // }
    }).catch(err => {
    alert(err);
    });
    }
}
