import { Component,OnInit} from '@angular/core';
import { FormBuilder,FormGroup,Validators,NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from '../services/account.service';
import { UsersService } from '../services/users.service';
import { Iuser } from '../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  submitted: boolean = false;
  userForm: FormGroup;
  users: Iuser[] = [];

  constructor(
    private _accountService: AccountService,
    private _usersService: UsersService,
    private _router: Router,
    private _formBuilder: FormBuilder
  ) {
    this.userForm = this._formBuilder.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
    if (this._accountService.isLoggedIn()) this._router.navigate(['/home']);
  }
  ngOnInit() {
    // this._usersService.getUsers().subscribe((users) => (this.users = users));
    // console.log(this.users);
    // localStorage.setItem('usersarray', JSON.stringify(this.users));
  }
  get f() {
    return this.userForm.controls;
  }

  userObj: any = {
    username: '',
    password: '',
  };

  login()
  // login() 
  {
   
    if (this.userObj.username != '' && this.userObj.password != '') {
      if (
        this._accountService.login(this.userObj.username, this.userObj.password)
      ) {
        if (localStorage.getItem('user') == 'admin') {
          this._router.navigate(['/food-list']);
        } else this._router.navigate(['/home']);
      }
    } else {
      alert('Invalid Credentials. Please Register!!!');
      this._router.navigate(['/register']);
    }
  }

  // onLogin(loginForm:NgForm){
  //   console.log(loginForm.value);
  // }
}
