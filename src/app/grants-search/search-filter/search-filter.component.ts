import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { GrantsSearchService } from '../grants-search.service';

@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.css']
})
export class SearchFilterComponent implements OnInit {

    isShow = false;

    searchFilterForm: FormGroup;

    constructor(private grantsSearch: GrantsSearchService) { }

    onSearch() {
        const filters = {
            geoScale: this.searchFilterForm.value.geoScale
        };
        this.grantsSearch.getGrant(filters).subscribe(
            data => console.log(data),
            error => console.error(error)
        );
    }

    ngOnInit() {
        this.searchFilterForm = new FormGroup({
            geoScale: new FormControl(null),
        });
    }

}
