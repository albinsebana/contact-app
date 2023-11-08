import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ContactDetailsService } from 'src/app/service/contact-details.service';

@Component({
  selector: 'app-find-contact-details',
  templateUrl: './find-contact-details.component.html',
  styleUrls: ['./find-contact-details.component.css']
})
export class FindContactDetailsComponent {
  show = false;
  contactDetailsData: any;
  showError = false;
  errorMessage: any;

  findContactDetails = new FormGroup({
    detailId: new FormControl('')
  });

  constructor(private contactDetails: ContactDetailsService) {}

  findContactDetailsById(formData: any) {
    this.contactDetails.getById(formData.detailId).subscribe({
      next: (data) => {
        this.contactDetailsData = data;
        this.show = true;
      },
      error: (err: HttpErrorResponse) => {
        this.showError = true;
        this.errorMessage = err.error.Message;
      }
    });
  }
}