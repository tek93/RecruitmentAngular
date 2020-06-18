import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DriverListComponent } from './driver-list/driver-list.component';
import { CreateDriverComponent } from './create-driver/create-driver.component';
import { UpdateDriverComponent } from './update-driver/update-driver.component';
import { DriverDetailsComponent } from './driver-details/driver-details.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { DeletecategoryComponent } from './deletecategory/deletecategory.component';


const routes: Routes = [

  { path: '', redirectTo: 'driver', pathMatch: 'full' },
  { path: 'drivers', component: DriverListComponent },
  { path: 'add', component: CreateDriverComponent },
  { path: 'update/:id', component: UpdateDriverComponent },
  { path: 'details/:id', component: DriverDetailsComponent },
  {path: 'addcategory/:id', component: AddCategoryComponent },
  {path: 'deletecategory/:id', component: DeletecategoryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
