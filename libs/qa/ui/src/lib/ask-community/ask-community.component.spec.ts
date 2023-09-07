import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AskCommunityComponent } from './ask-community.component';

describe('AskCommunityComponent', () => {
  let component: AskCommunityComponent;
  let fixture: ComponentFixture<AskCommunityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AskCommunityComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AskCommunityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
