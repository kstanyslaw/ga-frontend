import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ManualyAddService {

  modalIsShow = false;

  constructor() { }

  changeModalIsShow(value: boolean) {
      this.modalIsShow = value;
  }
}
