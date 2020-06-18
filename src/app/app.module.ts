import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DriverListComponent } from './driver-list/driver-list.component';
import { CreateDriverComponent } from './create-driver/create-driver.component';
import { DriverDetailsComponent } from './driver-details/driver-details.component';
import { FormsModule } from '@angular/forms';
import { UpdateDriverComponent } from './update-driver/update-driver.component';
import { HttpClientModule } from '@angular/common/http';
import { CategoryDriverComponent } from './category-driver/category-driver.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { DeletecategoryComponent } from './deletecategory/deletecategory.component';


@NgModule({
  
  declarations: [
    AppComponent,
    DriverListComponent,
    CreateDriverComponent,
    DriverDetailsComponent,
    
   
    UpdateDriverComponent,
    
   
    CategoryDriverComponent,
    
   
    AddCategoryComponent,
    
   
    DeletecategoryComponent,
    
   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
