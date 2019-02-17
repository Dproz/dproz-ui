import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './shared/services/authentication.service';
import { StateService } from './shared/services/state.service';
import { Router } from '@angular/router';

@Component({
  selector: 'dproz-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private service: AuthenticationService, private state: StateService, private router: Router) { }
  title = 'app';

  ngOnInit() {
    if (window.localStorage.getItem('auth-token') && window.localStorage.getItem('user-reference')) {
      this.state.next({ loggedIn: true, authToken: window.localStorage.getItem('auth-token'),
        userReferenceId:  window.localStorage.getItem('user-reference') });
      this.service.getUser(this.state.getState().userReferenceId).subscribe(data => {
        this.state.setIdentity(data);
        // this.router.navigate(['../dproz/home']);
      }, error => {
        console.log(error);
        this.state.resetState();
        window.localStorage.removeItem('auth-token');
        window.localStorage.removeItem('user-reference');
        this.router.navigate(['../dproz/login']);
      });
    }
  }

}
