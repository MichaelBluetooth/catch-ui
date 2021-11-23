import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserProfile } from '../../models/user-profile';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.less']
})
export class UserFormComponent implements OnInit {

  @Input() user: UserProfile;
  form: FormGroup = new FormGroup({
    username: new FormControl('', Validators.required),
    // first_name: new FormControl(''),
    // last_name: new FormControl(''),
    email: new FormControl('', [Validators.required, Validators.email]),
    display_units: new FormControl('', [Validators.required]),
    about_me: new FormControl('')
  });

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.form.controls['username'].setValue(this.user.username)
    this.form.controls['email'].setValue(this.user.email)
    this.form.controls['about_me'].setValue(this.user.about_me)
    this.form.controls['display_units'].setValue(this.user.display_units)
    // this.form.controls['first_name'].setValue(this.user.first_name)
    // this.form.controls['last_name'].setValue(this.user.first_name)
  }

  saveChanges(){
    if(this.form.valid){
      this.userService.update(this.form.value);
    }
  }

}
