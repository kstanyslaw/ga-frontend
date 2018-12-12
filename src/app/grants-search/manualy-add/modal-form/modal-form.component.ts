import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Grant } from '../../../grant.model';
import { GrantsSearchService } from '../../grants-search.service';
import { CITIES } from './cities';


@Component({
  selector: 'app-modal-form',
  templateUrl: './modal-form.component.html',
  styleUrls: ['./modal-form.component.css']
})
export class ModalFormComponent implements OnInit {

  documents = [];

  cities = CITIES;

  grantForm: FormGroup;

  regionCities = [''];

  fileName = 'Нажмите, чтобы выбрать файл';

  private cityPickEnable = false;

  grantees = [
    { name: 'НКО', checked: false },
    { name: 'Физическое лицо', checked: false },
    { name: 'Юридическое лицо', checked: false },
    { name: 'Государственная организация', checked: false }
  ];

  constructor(private grantsSearchService: GrantsSearchService) {}

  onSubmit() {
    const grant = new Grant(
      null,
      this.grantForm.value.name,
      this.grantForm.value.grantor,
      this.grantForm.value.url,
      this.grantForm.value.dateStart,
      this.grantForm.value.deadline,
      this.grantForm.value.price,
      this.grantForm.value.geoScale,
      this.getGrantees(),
      this.cities[this.grantForm.value.region].region,
      this.grantForm.value.city,
      this.grantForm.value.description,
      this.grantForm.value.categories,
      this.documents
    );
    this.grantsSearchService.addGrant(grant)
      .subscribe(
          data => console.log(data),
          error => console.error(error)
        );
    this.grantForm.reset();
  }

  setRegion() {
    this.regionCities = this.cities[this.grantForm.value.region].city;
    this.grantForm.get('city').enable();
  }

  setGrantee(i) {
    this.grantees[i].checked = !this.grantees[i].checked;
  }

  getGrantees() {
    const result: Array<string> = [];
    this.grantees.forEach(grantee => {
      if (grantee.checked) {
        result.push(grantee.name);
      }
    });
    return result;
  }

  onDocumentPicked(event: Event) {
    const file = (event.target as HTMLInputElement).files;
    for (let i = 0; i < file.length; i++) {
      this.documents.push(file[i]);
    }
    console.log('FilesArray:', this.documents);
    const reader = new FileReader();
  }

  onDocumentDelete(i) {
    this.documents.splice(i, 1);
    console.log(this.documents);
  }

  ngOnInit() {
    this.grantForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      grantor: new FormControl(null, Validators.required),
      url: new FormControl(null, Validators.required),
      dateStart: new FormControl(null, Validators.required),
      deadline: new FormControl(null, Validators.required),
      price: new FormControl(null, Validators.required),
      geoScale: new FormControl(null, Validators.required),
      description: new FormControl(null),
      categories: new FormControl(null),
      region: new FormControl(null),
      city: new FormControl(null),
      documents: new FormControl(null)
    });
    this.grantForm.get('city').disable();
  }
}
