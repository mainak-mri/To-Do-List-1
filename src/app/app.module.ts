import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ItemComponent } from './item/item.component';
import { WelcomeComponent } from './home/welcome/welcome.component';
import { RouterModule, Routes } from '@angular/router';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './home/search/search.component';

const appRoutes: Routes = [
  {path: 'welcome', component: WelcomeComponent},
  {path: 'item', component: TodoItemComponent },
  {path: '',redirectTo: 'welcome', pathMatch: 'full'},
  {path: '**',redirectTo: 'welcome', pathMatch: 'full'}
];
@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    WelcomeComponent,
    TodoItemComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
