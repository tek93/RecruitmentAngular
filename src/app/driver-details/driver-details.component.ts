import { Component, OnInit } from '@angular/core';
import { Driver } from '../driver';
import { Router, ActivatedRoute } from '@angular/router';
import { DriverService } from '../driver.service';
import { Category } from '../category';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-driver-details',
  templateUrl: './driver-details.component.html',
  styleUrls: ['./driver-details.component.css']
})
export class DriverDetailsComponent implements OnInit {
  id: number;
  driver: Driver;
  category:Category;
  categorys : any;
  constructor(private route: ActivatedRoute,private router: Router,
    private driverService: DriverService,
    private categoryService:CategoryService) { }

  ngOnInit(): void {
    this.driver = new Driver();
    this.category = new Category();


    this.id = this.route.snapshot.params['id'];
    this.driver.id = this.route.snapshot.params['id'];
    
    this.driverService.getDriver(this.id)
      .subscribe(data => {
        // console.log(data)
        this.driver = data;
        this.driver.category = this.category;
       
      }, error => console.log(error));


      this.categoryService.getCategoryByDriver(this.id)
      .subscribe(data =>{
         console.log(data)
        this.categorys = data;
      }, error=>console.log(error));
  }
  


  list(){
    this.router.navigate(['drivers']);
  }
  
  addcategory(id: number){
    this.router.navigate(['addcategory', id]);
  }
  removecategory(id: number){
    
    this.router.navigate(['deletecategory', id]);
  }

}
