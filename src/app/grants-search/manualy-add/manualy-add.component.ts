import { Component, OnInit } from '@angular/core';
import { ManualyAddService } from './manualy-add.service';
import { UserRoles } from '../../user-roles.enum';

@Component({
  selector: 'app-manualy-add',
  templateUrl: './manualy-add.component.html',
  styleUrls: ['./manualy-add.component.css']
})
export class ManualyAddComponent implements OnInit {

  roles = UserRoles;

  constructor(private manualyAddService: ManualyAddService) { }

  ngOnInit() {
  }

  checkRole() {
    const userRole = localStorage.getItem('userRole');
    return (this.roles[userRole] >= this.roles.moderator);
  }

  changeModalIsShow(flag: boolean) {
    this.manualyAddService.changeModalIsShow(flag);
  }
}
