import { Component, Input, OnInit } from '@angular/core';
import { Item } from '../item';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {

  filter: 'all' | 'active' | 'done' = 'all';
  @Input() item: Item;


  allItems = [];
  private _listSearch: string = '';
  get listSearch():string{
    return this.listSearch;
  }

  set listSearch(value:string){
    this._listSearch = value;
    console.log('In setter:',value);
  }
  get items() {
    if (this.filter === 'all') {
      return this.allItems;
    }
    return this.allItems.filter(item => this.filter === 'done' ? item.done : !item.done);
  }

  // addTitle(description: string) {
  //   this.allItems.unshift({
  //     description,
  //     done: false
  //   });
  // }

  // onSubmit(){
  //   const item = {
  //     title:this.title,
  //     desc: this.desc,
  //     done: false
  //   }
  // }
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

}
