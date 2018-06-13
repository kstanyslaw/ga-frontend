import { Component, OnInit } from '@angular/core';
import { ManualyAddService } from '../manualy-add.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  isShow: boolean;

  constructor(private manualyAddService: ManualyAddService) { }

  ngOnInit() {
  }

}
