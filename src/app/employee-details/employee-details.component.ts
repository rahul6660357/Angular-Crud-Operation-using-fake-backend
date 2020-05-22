import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../employee.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit {
private empdata;
userid;

private list: any
  constructor(private empservice: EmployeeService, private activatedroute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.empservice.getAllEmployees().subscribe((data) => {
      this.empdata = data;
      const id = this.activatedroute.snapshot.queryParams.id;
      console.log(id);
      this.empservice.getById(id).subscribe((data1) => {
        this.list = data1;
      });
    });
  }

  deleteemployee(id: number) {
    this.empservice.DeleteEmployee(id).subscribe((data2) => {
     this.empdata = data2 ;
     this.router.navigate(['/employee']);
    });
  }
}
