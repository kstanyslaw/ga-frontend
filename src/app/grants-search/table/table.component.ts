import { Component, OnInit } from '@angular/core';

import { Grant } from '../../grant.model';
import { GrantsSearchService } from '../grants-search.service';
import { UserRoles } from '../../user-roles.enum';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  roles = UserRoles;

  grants: Grant[] = [];

  constructor(private grantsSearchService: GrantsSearchService) {}

  ngOnInit() {
    this.grantsSearchService.getGrant({})
    .subscribe(
      (grants: Grant[]) => {
        this.grants = grants;
        console.log(this.grantsSearchService.grants);
      }
    );
  }

  checkRole() {
    const userRole = localStorage.getItem('userRole');
    return (this.roles[userRole] >= this.roles.moderator);
  }

  deleteGrant(id: string) {
    this.grantsSearchService.deleteGrant(id)
    .subscribe(
      (data) => console.log(data),
      (error) => console.error(error)
    );
  }

}
