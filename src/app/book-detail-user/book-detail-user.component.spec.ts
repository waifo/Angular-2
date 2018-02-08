import { ComponentFixture, TestBed, async, fakeAsync, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BookDetailUserComponent } from './book-detail-user.component';
import { LibraryService } from '../../assets/InMemoryDb/libraryService';
import { FilterDataPipe } from '../pipes/bookDataFilter.pipe';

describe('BookDetailUserComponent', () => {
  let fixture: ComponentFixture<BookDetailUserComponent>;
  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [BookDetailUserComponent, FilterDataPipe],
      imports: [HttpClientModule],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .createComponent(BookDetailUserComponent);
    fixture.detectChanges(); // initial binding
  });

});

