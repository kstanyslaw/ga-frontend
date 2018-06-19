import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit {

  constructor(private route: ActivatedRoute, private authenticationService: AuthenticationService) { }

  ngOnInit() {
    const userId = this.route.snapshot.paramMap.get('id');
    this.authenticationService.confirmEmail(userId)
      .subscribe(
        data => console.log(data),
        error => console.error(error)
      );
  }

}
