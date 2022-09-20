
import { Component, Input, OnInit,EventEmitter,Output } from '@angular/core';
import { Item } from '../item';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {

  filter: 'all' | 'active' | 'done' = 'all';
  @Input() item: Item;

  allItems = [];

  get items() {
    if (this.filter === 'all') {
      return this.allItems;
    }
    return this.allItems.filter(item => this.filter === 'done' ? item.done : !item.done);
  }

  addItem(title:string,description: string) {
    this.allItems.unshift({
      title,
      description,
      done: false
    });
    console.log(this.allItems);
  }

  remove(item) {
    this.allItems.splice(this.allItems.indexOf(item), 1);
  }
  searchText: string = '';
  @Output() onSearchTextChanged = new EventEmitter<string>();
  onSearchTextEntered(searchValue:string){
    this.searchText = searchValue;
    console.log(this.searchText);
  }

  drop(event: CdkDragDrop<string[]>) {
    // console.log("previous index = ", event.previousIndex);
    // console.log("current index = ", event.currentIndex);
    moveItemInArray(this.allItems, event.previousIndex, event.currentIndex);
  }
}
