import { Component, OnInit } from '@angular/core';
import { CardComponent } from './../card/card.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // display: boolean = false;

  constructor() { }


  ngOnInit(): void {
  }

  getAllPosts(){

  }
}
