import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AppConstant } from 'src/app/app.constants';
import { AuthService } from 'src/app/services/auth.service';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm = this.fb.group(
    {
      username: ["", [Validators.required]],
      password: ["", [Validators.required]],
      rememberMe: [false],
    }
  );

  constructor(private fb: FormBuilder, private utilService: UtilService, private authService: AuthService) { }
  private isRememberMe: any = false;

  ngOnInit() {
    this.setUserLogin();
  }

  performLogin() {
    console.log("Login Parameters: ", this.loginForm.value);
    const isRememderMe = this.loginForm.value["rememberMe"];
    if(isRememderMe) {
      this.utilService.setItemLocally(AppConstant.keys.rememberMe, isRememderMe);
      this.utilService.setItemLocally(AppConstant.keys.userDetails, this.loginForm.value);
    }
    this.authService.login();
    this.utilService.navigatePage('/home');
  }

  async setUserLogin() {
    this.isRememberMe = await this.utilService.getItemLocally(AppConstant.keys.rememberMe);
    if(this.isRememberMe) {
      const userDetails = await this.utilService.getItemLocally(AppConstant.keys.userDetails)
      this.loginForm.patchValue(userDetails);
    }
  }

}
