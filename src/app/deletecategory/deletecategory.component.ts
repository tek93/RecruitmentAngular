import { Component, OnInit } from '@angular/core';
import { DriverService } from '../driver.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from '../category.service';
import { Driver } from '../driver';
import { Category } from '../category';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-deletecategory',
  templateUrl: './deletecategory.component.html',
  styleUrls: ['./deletecategory.component.css']
})
export class DeletecategoryComponent implements OnInit {
  driver_id: number;
  driver_id2: number;
  driver: Driver;
  category:Category;
  category_id:number;
  categorys: Observable<Driver[]>;
  
  constructor(private route: ActivatedRoute,private router: Router,
    private driverService: DriverService,
    private categoryService:CategoryService) { }

  ngOnInit(): void {
    this.driver_id = this.route.snapshot.params['id'];
    this.driver_id2 = this.route.snapshot.params['id'];
    this.category_id = this.route.snapshot.params['category_id'];
   

    this.category = new Category();
    this.categorys = this.categoryService.getCategoryByDriver(this.driver_id);


    
    console.log(this.driver_id);
   
    
    
    this.categoryService.getCategoryByDriver(this.driver_id)
      .subscribe(data =>{
         console.log(data)
        this.category = data;
      }, error=>console.log(error));
     

  }

  readlod(id: number){
    
    this.router.navigate(['deletecategory', this.driver_id]);
  }
  deleteCategory(id:number) {
   console.log(id);
    
    this.categoryService.deleteCategory(id)
      .subscribe(
        data => {
          console.log(data);
       
          this.readlod(this.driver_id);
         
        },
        error => console.log(error));
  }



}
