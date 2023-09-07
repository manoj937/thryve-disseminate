import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommunityQuestionsComponent } from './community-questions.component';

describe('CommunityQuestionsComponent', () => {
  let component: CommunityQuestionsComponent;
  let fixture: ComponentFixture<CommunityQuestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CommunityQuestionsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CommunityQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
