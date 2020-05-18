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
private empdata: [];
userid;

private list: {id: number, firstname: string, lastname: string, designation: string}
  constructor(private empservice: EmployeeService, private activatedroute: ActivatedRoute) { }

  ngOnInit() {
    this.empservice.getAllEmployees().subscribe((data) => {
      this.empdata = data;
      this.activatedroute.queryParams.subscribe(params => {
        this.userid = params.id;
        this.list = this.alldetails(this.userid);
        console.log(this.list);
      });
    });
  }

  private alldetails(userid: any) {
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.empdata.length; i++) {
      if (this.empdata[i].id == userid) {
        return this.empdata[i];
      }
    }
  }

  updateuser() {

  }
}
