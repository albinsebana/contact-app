import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactService } from 'src/app/service/contact.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent {
  addContactForm = new FormGroup({
    firstName:new FormControl(''),
    lastName:new FormControl(''),
    userId:new FormControl(''),
    // isAdmin:new FormControl(''),
    isActive:new FormControl('')
  
  })
  constructor(private user : ContactService, private router:Router){}
  insert(data:any)
  {
    console.log(data);
    this.user.add(data).subscribe({
      next:(data)=>{
          alert("New Contact Is Added");
          this.router.navigateByUrl("/getContacts")
        },
        error:(errorResponse :HttpErrorResponse)=>{
          console.log(errorResponse)
        }
    })
  }
  }
  