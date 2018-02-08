import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
// import { ngMaterial } from "../../node_modules/angular-material/angular-material.min"
import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';
import { BookDetailTileComponent } from './book-detail-tile/book-detail-tile.component';
import { BookDetailUserComponent } from './book-detail-user/book-detail-user.component';
import { LogInComponent } from './log-in/log-in.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { AdminConfigPanelComponent } from './admin-config-panel/admin-config-panel.component';
import { App404Component } from './404-not-found/404.component';
import { AdminInventoryManagementPanelComponent } from './admin-inventory-management-panel/admin-inventory-management-panel.component';
import { AdminTrackBooksPanelComponent } from './admin-track-books-panel/admin-track-books-panel.component';
import { UserPanelComponent } from './user-panel/user-panel.component';
import { LibraryService } from '../assets/InMemoryDb/libraryService';
import { AuthService } from '../assets/InMemoryDb/auth.service';
import { BookLogComponent } from './book-log/book-log.component';
import { FilterDataPipe } from './pipes/bookDataFilter.pipe';

import { AuthGuard } from '../assets/InMemoryDb/auth-guard.service';


// TODO: 1)
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// @NgModule({
//   imports: [
//     BrowserAnimationsModule


@NgModule({
  declarations: [
    AppComponent,
    BookDetailTileComponent,
    BookDetailUserComponent,
    LogInComponent,
    UserProfileComponent,
    AdminConfigPanelComponent,
    AdminPanelComponent,
    AdminInventoryManagementPanelComponent,
    AdminTrackBooksPanelComponent,
    UserPanelComponent,
    BookLogComponent,
    App404Component,
    FilterDataPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [LibraryService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
