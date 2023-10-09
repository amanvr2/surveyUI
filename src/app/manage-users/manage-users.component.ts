import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators, AbstractControl, ValidationErrors, FormBuilder } from '@angular/forms';
import { User } from '../Model/User';
import { UserService } from '../service/user.service';


@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.css']
})
export class ManageUsersComponent implements OnInit {

  constructor(private userService: UserService, private fb:FormBuilder) { }

  users: User[]=[];
  updateForm!: FormGroup;
  selUserId!: number;
  user!: User;

  getUsers(): void{

    this.userService.getAllUsers().subscribe(data=>{

      this.users = data;
      console.log(this.users);
    })
  }

  ngOnInit() {

    this.getUsers();
    this.createUpdateForm();

  }

  deleteUser(id:number){

    this.userService.deleteUser(id).subscribe(res=>{
      this.getUsers();
      window.alert("User Deleted");
    })
  }

  createUpdateForm(){

    this.updateForm = this.fb.group({
      name: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
      mobile: new FormControl(null, [Validators.required, Validators.maxLength(10)])
    })


  }

  get name() {
    return this.updateForm.get('name') as FormControl;
  }

  get email() {
    return this.updateForm.get('email') as FormControl;
  }
  get password() {
    return this.updateForm.get('password') as FormControl;
  }

  get mobile() {
    return this.updateForm.get('mobile') as FormControl;
  }


  onEdit(user: any){
    this.selUserId = user.id;
    this.updateForm.controls['name'].setValue(user.name);
    this.updateForm.controls['email'].setValue(user.email);
    this.updateForm.controls['mobile'].setValue(user.mobile);
    this.updateForm.controls['password'].setValue(user.password);
  }

  userUpdateData(): User{

    return this.user={
      id: this.selUserId,
      name: this.name.value,
      email: this.email.value,
      mobile: this.mobile.value,
      password: this.password.value

    }
  }


  updateUser(){
    this.userService.updateUser(this.selUserId, this.userUpdateData()).subscribe(res=>{
      this.getUsers();
      window.alert("User updated");
    })
  }



}
