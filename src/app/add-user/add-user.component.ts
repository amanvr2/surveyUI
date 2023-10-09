import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormGroup, FormControl, Validators, AbstractControl, ValidationErrors, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserForRegister } from '../Model/UserForRegister';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  registerForm!: FormGroup;
  user!: UserForRegister;

  constructor(private router: Router, private userService: UserService,private fb:FormBuilder) { }

  ngOnInit() {
    this.createRegistrationForm();
  }

  createRegistrationForm(){

    this.registerForm = this.fb.group({
      name: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
      mobile: new FormControl(null, [Validators.required, Validators.maxLength(10)])
    })


  }

  get name() {
    return this.registerForm.get('name') as FormControl;
  }

  get email() {
    return this.registerForm.get('email') as FormControl;
  }
  get password() {
    return this.registerForm.get('password') as FormControl;
  }

  get mobile() {
    return this.registerForm.get('mobile') as FormControl;
  }


  userData(): UserForRegister{
    return this.user= {

      name:this.name.value,
      email:this.email.value,
      password:this.password.value,
      mobile:this.mobile.value,
    }
  }

  onSignup() {
    console.log(this.registerForm);

    if(this.registerForm.valid){

      this.userService.addUser(this.userData()).subscribe(()=>{
        this.registerForm.reset();
        window.alert("User Added");

      },
      error=>{
        console.log(error.error);
      }


      );

    }


  }
























  // onSignup(registerForm: NgForm) {

  //   console.log(registerForm.value);

  //   this.userService.addUser(registerForm.value).subscribe(()=>{

  //     registerForm.reset();
  //     console.log("cool");
  //   });


  // }

}
