import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ContactService } from 'src/app/service/contact.service';

@Component({
  selector: 'app-find-contact',
  templateUrl: './find-contact.component.html',
  styleUrls: ['./find-contact.component.css']
})
export class FindContactComponent {
  show = false;
  contactData: any;
  showError = false;
  errorMessage: any;

  findContact = new FormGroup({
    contactId: new FormControl('')
  });

  constructor(private contact: ContactService) {}

  findContactById(formData: any) {
    this.contact.getById(formData.contactId).subscribe({
      next: (data) => {
        this.contactData = data;
        this.show = true;
      },
      error: (err: HttpErrorResponse) => {
        this.showError = true;
        this.errorMessage = err.error.Message;
      }
    });
  }
}
