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
    <button (click)="reverse()">Reverse the list</button>
    @for (animal of animals; track animal) {
      <section>
        <h2>{{ animal.name }}</h2>
        <p>Description of {{ animal.name }}</p>
        <editor />
      </section>
    }
  `,
})
export class App {
  animals = [{ name: 'Cat' }, { name: 'Dog' }, { name: 'Fish' }];

  reverse() {
    this.animals = [...this.animals.reverse().map((animal) => ({ ...animal }))];
  }
}

bootstrapApplication(App);
