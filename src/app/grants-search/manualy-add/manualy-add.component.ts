import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manualy-add',
  templateUrl: './manualy-add.component.html',
  styleUrls: ['./manualy-add.component.css']
})
export class ManualyAddComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  checkRole() {
    if (localStorage.getItem('userRole') !== 'administrator') {
        return false;
    } else {
        return true;
    }
  }
}
