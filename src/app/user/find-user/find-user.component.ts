import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-find-user',
  templateUrl: './find-user.component.html',
  styleUrls: ['./find-user.component.css']
})
export class FindUserComponent {

show =false;
userData:any;
showError=false;
errorMessage:any;

  findUser = new FormGroup({
    userId:new FormControl('')
  })
  constructor(private user : UserService){}
  findUserById(formData:any){
    this.user.getById(formData.userId).subscribe({
      next:(data)=>{this.userData=data;
      this.show=true
      },
      error: (err : HttpErrorResponse)=>{
        this.showError=true
        this.errorMessage = err.error.Message
      }
    })
  }
}
