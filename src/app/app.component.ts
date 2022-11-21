import { Component } from '@angular/core';
import { UsersDataService } from './services/users-data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  panelOpenState = false;
  title = 'OCPI_UI';
  hits: any;
  keys: any = [];

  fields: any;
  users_data: any;
  searchText: string = '';
  enterdSeachValue: string = '';
  values: any;
  constructor(private userData: UsersDataService) {
    userData.users().subscribe((data) => {
      //console.warn('data', data);
      this.hits = JSON.parse(JSON.stringify(data));
      //this.keys = Object.keys(this.hits[0]);

      this.getFields(this.hits[0]);

      this.values = Object.values(this.hits[0]);
      this.fields = Object.keys(this.hits[0]['_source']['fields']);

      console.log(this.keys, this.fields);
    });
  }

  Search() {
    if (this.searchText == '') {
      this.ngOnInit();
    }
  }
  ngOnInit(): void {}

  getFields(fields: any, identifier?: string): any {
    let appendedFields: any[] = [];
    let tempKeys = Object.keys(fields);

    if (identifier)
      appendedFields = tempKeys.map((f) => (f = `${identifier}.${f}`));

    if (!identifier) Array.prototype.push.apply(this.keys, tempKeys);
    else Array.prototype.push.apply(this.keys, appendedFields);

    for (let key of tempKeys) {
      let obj = fields[key];
      if (obj && typeof obj === 'object') {
        this.getFields(obj, key);
      }
    }
  }
}
