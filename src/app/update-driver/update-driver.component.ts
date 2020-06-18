import { Component, OnInit } from '@angular/core';
import { Driver } from '../driver';
import { ActivatedRoute, Router } from '@angular/router';
import { DriverService } from '../driver.service';

@Component({
  selector: 'app-update-driver',
  templateUrl: './update-driver.component.html',
  styleUrls: ['./update-driver.component.css']
})
export class UpdateDriverComponent implements OnInit {
  id: number;
  driver: Driver;
  constructor(private route: ActivatedRoute,private router: Router,
    private driverService: DriverService) { }

  ngOnInit(): void {
    this.driver = new Driver();

    this.id = this.route.snapshot.params['id'];
    
    this.driverService.getDriver(this.id)
      .subscribe(data => {
        console.log(data)
        this.driver = data;
      }, error => console.log(error));
  }
  updateDriver() {
    this.driverService.updateDriver(this.id, this.driver)
      .subscribe(data => console.log(data), error => console.log(error));
    this.driver = new Driver();
    this.gotoList();
  }

  onSubmit() {
    this.updateDriver();    
  }

  gotoList() {
    this.router.navigate(['/drivers']);
  }

}
