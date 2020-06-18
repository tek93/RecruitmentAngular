import { Component, OnInit } from '@angular/core';
import { Driver } from '../driver';
import { DriverService } from '../driver.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Category } from '../category';
import { CategoryService } from '../category.service';
import { Identifiers, identifierModuleUrl } from '@angular/compiler';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
  
  
 
  id:number;
  driver_id:number;


  

  driver: Driver = new Driver();
  category:Category = new Category();
  submitted = false;
  
  
  

  constructor(private  driverService:DriverService,
    private categoryService:CategoryService,
    private router:Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.driver_id = this.route.snapshot.params['id'];
    console.log(this.id);
    console.log(this.driver_id);
  }
  createCategory(): void {
    this.submitted = false;
    this.driver = new Driver();
    this.category = new Category();
    
  }
  save() {
   
 

    this.id = this.route.snapshot.params['id'];
    this.categoryService.createCategory( this.category,this.driver_id,)
      .subscribe(data => console.log(data), error => console.log(error));
    this.category = new Category();
    console.log(this.id);
    this.gotoList(this.driver_id);
  }
  onSubmit() {
    this.submitted = true;
    this.save();    
  }
 

  gotoList(driver_id:number){
    this.router.navigate(['details',driver_id ]);
  }
  

}
