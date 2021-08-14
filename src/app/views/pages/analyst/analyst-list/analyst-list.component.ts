import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-analyst-list',
  templateUrl: './analyst-list.component.html',
  styleUrls: ['./analyst-list.component.css']
})
export class AnalystListComponent implements OnInit {

  searchText:string = "";

  constructor() { }

  ngOnInit(): void {
  }

  startSearch(){

  }

  clearSearch(){

  }

}
