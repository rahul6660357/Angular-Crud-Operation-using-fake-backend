import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {EmployeeService} from '../employee.service';
import {ActivatedRoute, Router} from '@angular/router';
import {query} from '@angular/animations';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.scss']
})
export class UpdateEmployeeComponent implements OnInit {
  userform = this.fb.group({
    firstname: ['', Validators.required],
    lastname: ['', Validators.required],
    designation: ['', Validators.required]
  })
 private empdata: any;
  private list: {id: number, firstname: string, lastname: string, designation: string};
  constructor(private http: HttpClient, private fb: FormBuilder, private empservice: EmployeeService,
              private activatedroute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    const userid = this.activatedroute.snapshot.queryParams.id;
    this.empservice.getById(userid).subscribe((data) => {
        this.empdata = data;
        console.log(this.empdata);
      });
  }

  updateuser() {
    this.empservice.Updateuser(this.empdata).subscribe((data) => {
      console.log(data);
      alert('data is Updated');
      this.router.navigate(['/employee']);
    });

  }

}
