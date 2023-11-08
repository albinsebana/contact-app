import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactDetailsService } from 'src/app/service/contact-details.service';

@Component({
  selector: 'app-add-contact-details',
  templateUrl: './add-contact-details.component.html',
  styleUrls: ['./add-contact-details.component.css']
})
export class AddContactDetailsComponent {
  addContactDetailsForm = new FormGroup({
    contactId:new FormControl(''),
    type:new FormControl(''),
    numberOrEmail:new FormControl('')
  
  })
  constructor(private contactdtl:ContactDetailsService , private router:Router){}
  insert(data:any)
  {
    console.log(data);
    this.contactdtl.add(data).subscribe({
      next:(data)=>{
          alert("New Contact Is Added");
          this.router.navigateByUrl("/getContactDetails")
        },
        error:(errorResponse :HttpErrorResponse)=>{
          console.log(errorResponse)
        }
    })
  }
}
