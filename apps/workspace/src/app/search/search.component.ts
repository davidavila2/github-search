import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Users } from '@github-search/core-data';

@Component({
  selector: 'github-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  @Input() users!: Users;
  @Input() defaultSearch!: {
    name: string;
  };
  @Output() search = new EventEmitter();
  @Output() pageChange = new EventEmitter();

}
