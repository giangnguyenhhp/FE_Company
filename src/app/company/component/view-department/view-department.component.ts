import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {CompanyService} from '../../Service/company.service';

@Component({
  selector: 'app-view-department',
  templateUrl: './view-department.component.html',
  styleUrls: ['./view-department.component.scss']
})
export class ViewDepartmentComponent implements OnInit {
  departments: string[] = [];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private companyService: CompanyService
  ) {
  }

  ngOnInit(): void {
    this.companyService.getDepartmentByCompanyId(this.data.companyId).subscribe((res: any) => {
      this.departments = res;
    })
  }

}
