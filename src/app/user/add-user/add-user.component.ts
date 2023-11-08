import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
addUserForm = new FormGroup({
  firstName:new FormControl(''),
  lastName:new FormControl(''),
  isAdmin:new FormControl(''),
  isActive:new FormControl('')

})
constructor(private user : UserService, private router:Router){}
insert(data:any)
{
  console.log(data);
  this.user.add(data).subscribe({
    next:(data)=>{
        alert("New User Is Added");
        this.router.navigateByUrl("/getUser")
      },
      error:(errorResponse :HttpErrorResponse)=>{
        console.log(errorResponse)
      }
  })
}
}
