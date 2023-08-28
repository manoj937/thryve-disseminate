import { Component } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';

@Component({
  selector: 'thryve-disseminate-wsiwyg-editor',
  templateUrl: './wsiwyg-editor.component.html',
  styleUrls: ['./wsiwyg-editor.component.scss'],
})
export class WsiwygEditorComponent {
  htmlContent: any;
  config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '15rem',
    minHeight: '5rem',
    placeholder: 'Enter text here...',
    translate: 'no',
    defaultParagraphSeparator: 'p',
    defaultFontName: 'Arial',
    toolbarHiddenButtons: [
      [
    'undo',
    'redo',
    'removeFormat',
    'insertVideo',
    'insertHorizontalRule'

      ]
      ],
    customClasses: [
      {
        name: "quote",
        class: "quote",
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: "titleText",
        class: "titleText",
        tag: "h1",
      },
    ]
  };
}
