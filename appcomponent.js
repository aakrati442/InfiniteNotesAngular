import { Component } from '@angular/core';

interface Note {
  content: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  notes: Note[] = [];

  addNote() {
    this.notes.push({ content: '' });
  }

  deleteNote(note: Note) {
    const index = this.notes.indexOf(note);
    if (index > -1) {
      this.notes.splice(index, 1);
    }
  }
}
