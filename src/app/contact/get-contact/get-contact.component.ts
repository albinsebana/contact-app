import { Component } from '@angular/core';
import { ContactService } from 'src/app/service/contact.service';

@Component({
  selector: 'app-get-contact',
  templateUrl: './get-contact.component.html',
  styleUrls: ['./get-contact.component.css']
})
export class GetContactComponent {
  contactData: any;
  constructor(private contact: ContactService){
    contact.get().subscribe(data =>{
      this.contactData= data
      console.log(this.contactData)
    })
  }
}