import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetUserComponent } from './user/get-user/get-user.component';
import { AddUserComponent } from './user/add-user/add-user.component';
import { GetContactComponent } from './contact/get-contact/get-contact.component';
import { AddContactComponent } from './contact/add-contact/add-contact.component';
import { GetContactDetailsComponent } from './contact-details/get-contact-details/get-contact-details.component';
import { AddContactDetailsComponent } from './contact-details/add-contact-details/add-contact-details.component';
import { FindUserComponent } from './user/find-user/find-user.component';
import { FindContactComponent } from './contact/find-contact/find-contact.component';
import { FindContactDetailsComponent } from './contact-details/find-contact-details/find-contact-details.component';

const routes: Routes = [
  {
    path :"getUser",
    component : GetUserComponent
  },
  {
    path :"addUser",
    component : AddUserComponent
  },
  {
    path : "getContacts",
    component:GetContactComponent
  },
  {
    path : "addContacts",
    component:AddContactComponent
  },
  {
    path : "getContactDetails",
    component:GetContactDetailsComponent
  },
  {
    path : "findContact",
    component:FindContactComponent
  },
  {
    path : "findContactDetails",
    component:FindContactDetailsComponent
  },
  {
    path : "addContactDetails",
    component:AddContactDetailsComponent
  },
  {
    path : "findUser",
    component:FindUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
