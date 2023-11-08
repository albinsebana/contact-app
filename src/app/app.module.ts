import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetUserComponent } from './user/get-user/get-user.component';
import{HttpClientModule} from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddUserComponent } from './user/add-user/add-user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { GetContactComponent } from './contact/get-contact/get-contact.component';
import { AddContactComponent } from './contact/add-contact/add-contact.component';
import { AddContactDetailsComponent } from './contact-details/add-contact-details/add-contact-details.component';
import { GetContactDetailsComponent } from './contact-details/get-contact-details/get-contact-details.component';
import { FindUserComponent } from './user/find-user/find-user.component';
import { FindContactComponent } from './contact/find-contact/find-contact.component';
import { FindContactDetailsComponent } from './contact-details/find-contact-details/find-contact-details.component';


@NgModule({
  declarations: [
    AppComponent,
    GetUserComponent,
    AddUserComponent,
    GetContactComponent,
    AddContactComponent,
    AddContactDetailsComponent,
    GetContactDetailsComponent,
    FindUserComponent,
    FindContactComponent,
    FindContactDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
