import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { Router } from '@angular/router';
import { StorageService } from '../_services/storage.service';
import { TokenStorageService } from '../_services/token-storage.service';
import { SignupService } from '../_services/signup.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: any = {
    username: null,
    email: null,
    password: null
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService, private _router: Router, private storageService: StorageService, private tokenStorageService: TokenStorageService, private signupService: SignupService) { }

  ngOnInit(): void {
  }

//   onSubmit(): void {
//     const { username, email, password } = this.form;

//     this.authService.register(username, email, password).subscribe({
//       next: data => {
//         console.log(data);
//         this.isSuccessful = true;
//         this.isSignUpFailed = false;
//       },
//       error: err => {
//         this.errorMessage = err.error.message;
//         this.isSignUpFailed = true;
//       }
//     });
//   }
// }


onSubmit(): void {
  const { username, email, password } = this.form;

  this.signupService.signUp(username, email, password).subscribe({
    next: data => {
      // this.storageService.saveUser(data);

      // this.isLoginFailed = false;
      // this.isLoggedIn = true;
      // this.roles = this.storageService.getUser().roles;
      // this.reloadPage();
      // redirect to dashboard
      // console.log(data)
      // this._router.navigate(['profile']);
      if(data.status === 'success') {
        console.log('Account setup request sent!')
      this._router.navigate(['login']);
      }
      else {
        console.log('signup failed')
      }
    },
    error: err => {
      this.errorMessage = err.error.message;
      this.isSignUpFailed = true;
    }
  });
}
}
