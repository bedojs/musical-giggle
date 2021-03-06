import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngxs/store';
import { Authenticate, Logout } from './auth-lazy/state/auth.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngxs-store-error';
  form = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });
  constructor (private store: Store) { }
  login(): void{
    console.log(this.form.getRawValue());
    this.store.dispatch(new Authenticate(this.form.controls.username.value, this.form.controls.password.value))
  }
  logout() {
    this.store.dispatch(new Logout())
  }

}
