import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

class Filterable {
  id: string;
  name: string;
}

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {

  @Input() category: string;
  @Input() selections: any;
  @Input() filterList: Array<Filterable>;

  constructor(private route: ActivatedRoute, private router: Router) {}

  deleteSelection(c: string) {
    this.selections[this.category] = this.selections[this.category].filter(function (item: any){
      return item !== c;
    });
    this.router.navigate(['.'], {queryParams: this.selections, relativeTo: this.route});
  }

  addSelection(e: string) {
    this.selections[this.category] = this.selections[this.category].concat(e);
    this.router.navigate(['.'], {queryParams: this.selections, relativeTo: this.route});
  }
}
