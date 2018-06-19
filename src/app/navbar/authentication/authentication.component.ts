import { Component, OnInit, ElementRef, HostListener } from '@angular/core';
import { AuthenticationService } from './authentication.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

  public elementRef;

    isShow = false;

    dropdownShow = false;

    activeTab = 'login';

    constructor(private authenticationService: AuthenticationService, private eRef: ElementRef) {}

    isLoggedIn() {
        return this.authenticationService.IsLoggedIn();
    }

    logout() {
        this.dropdownShow = false;
        this.authenticationService.logout();
    }

    @HostListener('document:click', ['$event']) clickout(event) {
        if (!this.eRef.nativeElement.contains(event.target)) {
            this.dropdownShow = false;
        }
    }

  ngOnInit() {
  }

}
