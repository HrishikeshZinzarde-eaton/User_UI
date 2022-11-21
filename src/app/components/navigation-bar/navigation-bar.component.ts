
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {UsersDataService} from '../../services/users-data.service';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {
  users:any;
  constructor(private userData: UsersDataService) {
    {
      userData.users().subscribe((data)=>{
        console.warn("data",data);
        this.users = data
      } );
   }
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  // enterdSeachValue: string = '';

  // @Output()
  // searchTextChanged: EventEmitter<string> = new EventEmitter<string>();

  // onSearchTextChanged(){
  //   this.searchTextChanged.emit(this.enterdSeachValue);
  // }
}
