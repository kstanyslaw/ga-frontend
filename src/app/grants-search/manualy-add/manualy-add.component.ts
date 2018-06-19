import { Component, OnInit } from '@angular/core';
import { ManualyAddService } from './manualy-add.service';

@Component({
  selector: 'app-manualy-add',
  templateUrl: './manualy-add.component.html',
  styleUrls: ['./manualy-add.component.css']
})
export class ManualyAddComponent implements OnInit {

  constructor(private manualyAddService: ManualyAddService) { }

  ngOnInit() {
  }

  checkRole() {
    if (localStorage.getItem('userRole') !== 'administrator') {
        return false;
    } else {
        return true;
    }
  }

  changeModalIsShow(flag: boolean) {
    this.manualyAddService.changeModalIsShow(flag);
  }
}
