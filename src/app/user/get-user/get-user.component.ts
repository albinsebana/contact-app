import { Component } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-get-user',
  templateUrl: './get-user.component.html',
  styleUrls: ['./get-user.component.css']
})
export class GetUserComponent {
  userData: any;
  constructor(private user: UserService){
    user.get().subscribe(data =>{
      this.userData= data
      console.log(this.userData)
    })
  }
}
