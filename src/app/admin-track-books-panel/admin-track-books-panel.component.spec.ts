import { ComponentFixture, TestBed, async, fakeAsync, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AdminTrackBooksPanelComponent } from './admin-track-books-panel.component';
import { LibraryService } from '../../assets/InMemoryDb/libraryService';
import { FilterDataPipe } from '../pipes/bookDataFilter.pipe';

describe('AdminTrackBooksPanelComponent', () => {
  let comp: AdminTrackBooksPanelComponent;
  let fixture: ComponentFixture<AdminTrackBooksPanelComponent>;
  let de: DebugElement;
  let el: HTMLElement;
  let libraryService;
  beforeEach(async(() => {
        TestBed.configureTestingModule({
          declarations: [
            AdminTrackBooksPanelComponent
          ],
          imports: [
            HttpClientModule
          ],
          providers: [LibraryService],
          schemas: [NO_ERRORS_SCHEMA]
        })
          .compileComponents()
          .then(() => {
            fixture = TestBed.createComponent(AdminTrackBooksPanelComponent); // returns a ComponentFixture
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

