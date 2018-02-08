import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { UserProfileComponent } from './user-profile.component';
import { LibraryService } from '../../assets/InMemoryDb/libraryService';

describe('UserProfileComponent', () => {
  let comp: UserProfileComponent;
  let fixture: ComponentFixture<UserProfileComponent>;
  let de: DebugElement;
  let el: HTMLElement;
  let libraryService;
  let getInitSpy;
  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [
        UserProfileComponent
      ],
      imports: [
        HttpClientModule
      ],
      providers: [LibraryService],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(UserProfileComponent); // returns a ComponentFixture
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

  it('should call service methods after initialized', () => {
    getInitSpy = spyOn(comp, 'getInitData');
    fixture.detectChanges();
    expect(getInitSpy).toHaveBeenCalled();
  });

});
