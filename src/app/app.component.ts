import { Component } from '@angular/core';
import {UsersDataService} from './services/users-data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  panelOpenState = false;
  title = 'OCPI_UI';
  hits:any;
  keys:any;
  fields:any
  constructor(private userData: UsersDataService)
  {
    userData.users().subscribe((data)=>{
      console.warn("data",data);
      this.hits = JSON.parse(JSON.stringify(data))
      this.keys = Object.keys(this.hits[0])
      this.fields = Object.keys(this.hits[0]["_source"]["fields"])
      console.log(this.keys,this.fields)
    } );
  }
}
