import { NgModule } from '@angular/core';
import {RouterModule, Routes } from '@angular/router';
import { ListListsComponent } from './list-lists/list-lists.component';
import { AddListComponent } from './add-list/add-list.component';
import { EditListsComponent } from './edit-lists/edit-lists.component';

const routes: Routes = [
  {path: 'add-list', component: AddListComponent},
  {path: 'edit-lists', component: EditListsComponent},
  {path: '', component: ListListsComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports : [ RouterModule]
})

export class AppRoutingModule {
}
