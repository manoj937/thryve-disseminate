import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WsiwygEditorComponent } from './wsiwyg-editor.component';

describe('WsiwygEditorComponent', () => {
  let component: WsiwygEditorComponent;
  let fixture: ComponentFixture<WsiwygEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WsiwygEditorComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WsiwygEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
