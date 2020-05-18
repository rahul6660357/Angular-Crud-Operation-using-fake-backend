import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../employee.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  constructor( private empservice: EmployeeService, private router: Router) { }
private empdata: [];
  ngOnInit() {
    this.empservice.getAllEmployees().subscribe((data) => {
      this.empdata = data;
    });
  }

  gotodeatils(id1: any) {
    this.router.navigate(['/details'], {queryParams: {id: id1}});
  }

  goupdate(id1: any) {
    this.router.navigate(['/update'], id1);
  }
}
