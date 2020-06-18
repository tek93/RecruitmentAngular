import { Component, OnInit } from '@angular/core';
import { Driver } from '../driver';

@Component({
  selector: 'app-category-driver',
  templateUrl: './category-driver.component.html',
  styleUrls: ['./category-driver.component.css']
})
export class CategoryDriverComponent implements OnInit {
  driver: Driver 
  constructor() { }

  ngOnInit(): void {
  }

}
