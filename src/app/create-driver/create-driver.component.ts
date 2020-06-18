import { Component, OnInit } from '@angular/core';
import { Driver } from '../driver';
import { DriverService } from '../driver.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-driver',
  templateUrl: './create-driver.component.html',
  styleUrls: ['./create-driver.component.css']
})
export class CreateDriverComponent implements OnInit {
  driver: Driver = new Driver();
  submitted = false;
  

  constructor(private  driverService:DriverService,
    private router:Router) { }

  ngOnInit(): void {
  }
  newEmployee(): void {
    this.submitted = false;
    this.driver = new Driver();
  }
  save() {
    this.driverService.createDriver(this.driver)
      .subscribe(data => console.log(data), error => console.log(error));
    this.driver = new Driver();
    this.gotoList();
  }
  onSubmit() {
    this.submitted = true;
    this.save();    
  }
  gotoList() {
    this.router.navigate(['/drivers']);
  }

}
