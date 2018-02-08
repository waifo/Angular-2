import { ComponentFixture, TestBed, async, fakeAsync, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { BookLogComponent } from './book-log.component';
import { LibraryService } from '../../assets/InMemoryDb/libraryService';

describe('BookLogComponent', () => {
  let comp: BookLogComponent;
  let fixture: ComponentFixture<BookLogComponent>;
  let de: DebugElement;
  let el: HTMLElement;
  let libraryService;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        BookLogComponent
      ],
      imports: [
        HttpClientModule
      ],
      providers: [LibraryService],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents()
    .then(() => {
      fixture = TestBed.createComponent(BookLogComponent); // returns a ComponentFixture
      // The fixture provides access to the component instance itself
      // and to the DebugElement, which is a handle on the component's DOM element.
      comp = fixture.componentInstance; // BannerComponent test instance
      de = fixture.debugElement; // throught this we can handle dom element.
      el = de.nativeElement;
      libraryService = TestBed.get(LibraryService);
    });
  }));

  it('should not call service methods before OnInit', () => {
      expect(libraryService).toBeDefined();
  });

});
