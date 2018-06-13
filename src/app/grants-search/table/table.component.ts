import { Component, OnInit } from '@angular/core';

import { Grant } from '../../grant.model';
import { GrantsSearchService } from '../grants-search.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  grants: Grant[] = [];

  constructor(private grantsSearchService: GrantsSearchService) {}

  ngOnInit() {
    this.grantsSearchService.getGrant({})
    .subscribe(
      (grants: Grant[]) => {
        this.grants = grants;
        // console.log(this.grants);
      }
    );
  }

  checkRole() {
      if (localStorage.getItem('userRole') !== 'administrator') {
        return false;
    } else {
        return true;
    }
  }

  deleteGrant(id: string) {
    this.grantsSearchService.deleteGrant(id)
    .subscribe(
      (data) => console.log(data),
      (error) => console.error(error)
    );
  }

}
