import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { AppComponent } from './app.component';
import { ItemComponent } from './item/item.component';
import { WelcomeComponent } from './home/welcome/welcome.component';
import { RouterModule, Routes } from '@angular/router';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './home/search/search.component';
import { RegisterComponent } from './home/register/register.component';

const appRoutes: Routes = [
  {path: 'register', component: RegisterComponent},
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
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    DragDropModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
