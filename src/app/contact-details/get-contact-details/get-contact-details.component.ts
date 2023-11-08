import { Component } from '@angular/core';
import { ContactDetailsService } from 'src/app/service/contact-details.service';

@Component({
  selector: 'app-get-contact-details',
  templateUrl: './get-contact-details.component.html',
  styleUrls: ['./get-contact-details.component.css']
})
export class GetContactDetailsComponent {
  contactDetailsData: any;
  constructor(private contactDtl: ContactDetailsService){
    contactDtl.get().subscribe(data =>{
      this.contactDetailsData= data
      console.log(this.contactDetailsData)
    })
  }
}
