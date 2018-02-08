import { NgModule, OnInit } from '@angular/core';
import { RouterModule, Routes, NavigationEnd, ActivatedRoute, Router } from '@angular/router';

// User-Defined Components
import { AppComponent } from './app.component';
// import { BookDetailTileComponent } from './book-detail-tile/book-detail-tile.component'
// import { BookDetailUserComponent } from './book-detail-user/book-detail-user.component';
import { LogInComponent } from './log-in/log-in.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { UserPanelComponent } from './user-panel/user-panel.component';
import { App404Component } from './404-not-found/404.component';
import { AuthGuard } from '../assets/InMemoryDb/auth-guard.service';

const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login',  component: LogInComponent },
    { path: 'user', canActivate: [AuthGuard], component: UserPanelComponent, data: {id : null} },
    { path: 'admin', canActivate: [AuthGuard], component: AdminPanelComponent },
    { path: '**', component: App404Component}
  ];
@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule { }
