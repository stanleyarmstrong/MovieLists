import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AuthenticationService } from './service/auth.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { LoginComponent } from './login/login.component';
import { AddUserComponent } from './add-user/add-user.component';
import { ListUserComponent } from './list-user/list-user.component';
import { UserService } from './service/user.service';
import { HttpClientModule } from '@angular/common/http';
import { AddListComponent } from './add-list/add-list.component';
import { ListListsComponent } from './list-lists/list-lists.component';
import { EditListsComponent } from './edit-lists/edit-lists.component';
import { MovieListService } from './service/movie-list.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AddUserComponent,
    ListUserComponent,
    AddListComponent,
    ListListsComponent,
    EditListsComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [MovieListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
