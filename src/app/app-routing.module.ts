import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EmployeeComponent} from './employee/employee.component';
import {EmployeeDetailsComponent} from './employee-details/employee-details.component';
import {AddEmployeeComponent} from './add-employee/add-employee.component';
import {UpdateEmployeeComponent} from './update-employee/update-employee.component';


const routes: Routes = [
  {path: 'employee', component: EmployeeComponent},
  {path: 'details', component: EmployeeDetailsComponent },
  {path: 'add', component: AddEmployeeComponent},
  {path: 'update', component: UpdateEmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
