import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { GrantsSearchService } from '../grants-search.service';

@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.css']
})
export class SearchFilterComponent implements OnInit {

    // isShow = false;
    isShow = true;

    grantees = [
        { name: 'НКО', checked: false },
        { name: 'Физическое лицо', checked: false },
        { name: 'Юридическое лицо', checked: false },
        { name: 'Государственная организация', checked: false }
    ];

    searchFilterForm: FormGroup;

    constructor(private grantsSearch: GrantsSearchService) { }

    onSearch() {
        const filters = {
            geoScale: this.searchFilterForm.value.geoScale,
            grantees: this.getGrantees()
        };
        console.log(filters);
        this.grantsSearch.getGrant(filters).subscribe(
            data => console.log(data),
            error => console.error(error)
        );
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

    ngOnInit() {
        this.searchFilterForm = new FormGroup({
            geoScale: new FormControl(null),
        });
    }

}
