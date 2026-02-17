import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { EditorComponent, TINYMCE_SCRIPT_SRC } from '@tinymce/tinymce-angular';

@Component({
  selector: 'app-root',
  imports: [EditorComponent],
  providers: [
    { provide: TINYMCE_SCRIPT_SRC, useValue: 'tinymce/tinymce.min.js' },
  ],
  template: `
    <p>At the beginning all of the editors work correctly. After hitting "Reverse the list" button first and last editor become unusable.</p>

    <button (click)="reverse()">Reverse the list</button>
    @for (animal of animals; track animal) {
      <section>
        <h2>{{ animal }}</h2>
        <p>Description of {{ animal }}</p>
        <editor />
      </section>
    }
  `,
})
export class App {
  animals = ['Cat', 'Dog', 'Fish'];

  reverse() {
    this.animals = [...this.animals.reverse()];
  }
}

bootstrapApplication(App);
