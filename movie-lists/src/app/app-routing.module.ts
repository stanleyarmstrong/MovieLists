import { NgModule } from '@angular/core';
import {RouterModule, Routes } from '@angular/router';
import { CreateListsComponent } from './create-lists/create-lists.component';

const routes: Routes = [
  {path: 'createList', component: CreateListsComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports : [ RouterModule]
})

export class AppRoutingModule {
}
