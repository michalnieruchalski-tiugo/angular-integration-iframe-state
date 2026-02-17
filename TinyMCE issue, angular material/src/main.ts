import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { EditorComponent, TINYMCE_SCRIPT_SRC } from '@tinymce/tinymce-angular';
import { MatTabsModule } from '@angular/material/tabs';
import { provideAnimations } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-root',
  imports: [EditorComponent, MatTabsModule],
  providers: [
    { provide: TINYMCE_SCRIPT_SRC, useValue: 'tinymce/tinymce.min.js' },
  ],
  template: `
    <p>At the beginning "Header" editor work correctly. Go to "Body" tab and then go back to "Header" tab. The editor is not usable anymore</p>
    <mat-tab-group>
      <mat-tab label="Header">
        <h1>Header</h1>
        <editor />
      </mat-tab>
      <mat-tab label="Body">
        <h1>Body</h1>
        <editor />
      </mat-tab>
      <mat-tab label="Footer">
        <h1>Footer</h1>
        <editor />
      </mat-tab>
    </mat-tab-group>
  `,
})
export class App {}

bootstrapApplication(App, {
  providers: [provideAnimations()],
});
