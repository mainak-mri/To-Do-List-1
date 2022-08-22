import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'todo1';

  filter: 'all' | 'active' | 'done' = 'all';

  allItems = [];

  get items() {
    if (this.filter === 'all') {
      return this.allItems;
    }
    return this.allItems.filter(item => this.filter === 'done' ? item.done : !item.done);
  }

  addTitle(description) {
    this.allItems.unshift({
      description,
      done: false
    });
  }
/*
  addItem(description) {
    this.allItems.unshift({
      description,
      done: false
    });
  }
*/
  remove(item) {
    this.allItems.splice(this.allItems.indexOf(item), 1);
  }

}
