import { Component, OnInit } from '@angular/core';
import { DriverService } from '../driver.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Driver } from "../driver";
import { Category } from '../category';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-driver-list',
  templateUrl: './driver-list.component.html',
  styleUrls: ['./driver-list.component.css']
})
export class DriverListComponent implements OnInit {
  
  drivers: Observable<Driver[]>;
  category:Observable<Category[]>;
  categoryService: CategoryService;
  id_driver:number;
  

  constructor(private driverService: DriverService,
    categoryService:CategoryService,
    private router: Router) { }

  ngOnInit(): void {
    this.reloadData();
  }
  reloadData() {
    this.drivers = this.driverService.getDriversList();
    //this.category = this.categoryService.getCategoryByDriver(this.id_driver);
  }
  
  deleteDriver(id: number) {
   
    this.driverService.deleteDriver(id)
    this.categoryService.getCategoryByDriver(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }
  getbyid(id: number) {
    this.categoryService.getCategoryByDriver(id)
      .subscribe(
        data => {
          console.log(data);
          this.category = this.category;
        },
        error => console.log(error));
  }

  driverDetails(id: number){
    this.router.navigate(['details', id]);
  }
  updateDriver(id: number){
    this.router.navigate(['update', id]);
  }
 

}
