import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { Birthday } from '../model/birthday';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../service/user.service';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  user: User;
  birthday: Birthday;
  days:Array<any> = [];
  years:Array<any> = [];
  login: boolean = false;
  validMobileNo: boolean = false;
  duplicateMobileNo: boolean = false;

  constructor(private route: ActivatedRoute, private router: Router, private userService: UserService) {
    this.user = new User;
    this.birthday = new Birthday;
    this.days = Array.from({length:31},(v,k)=>(k<9)? "0" + ( k+1) : k+1);
    this.years = Array.from({length:20},(v,k)=>k+1995);
  }

  onSubmit(userForm) {
    if(this.user.mobileNo.startsWith("+62")) {
      this.validMobileNo = true;
    }
    if(!userForm.valid){
      return;
    }
    var month = (this.birthday.month.length <2 ? "0" + ( this.birthday.month) : this.birthday.month);
    this.user.birthOfDate = this.birthday.year.concat("-").concat(month).concat("-").concat(this.birthday.day);
    this.userService.save(this.user).subscribe(result => {
      if(result.id == null)
        this.duplicateMobileNo = true;
      else
        this.login = true
    });
  }

  ngOnInit() {
  }

}
