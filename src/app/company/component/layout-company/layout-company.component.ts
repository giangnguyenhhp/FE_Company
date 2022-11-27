import {Component, Inject, OnInit} from '@angular/core';
import {Company} from "../../Models/company";
import { CompanyService } from '../../Service/company.service';
import {MatDialog} from "@angular/material/dialog";
import {CreateCompanyComponent} from "../create-company/create-company.component";
import {UpdateCompanyComponent} from "../update-company/update-company.component";
import {ViewDepartmentComponent} from "../view-department/view-department.component";
import {ViewEmployeeComponent} from "../view-employee/view-employee.component";

@Component({
  selector: 'app-layout-company',
  templateUrl: './layout-company.component.html',
  styleUrls: ['./layout-company.component.scss']
})
export class LayoutCompanyComponent implements OnInit {

  companies: Company[] = [];

  constructor(
    private companyService: CompanyService,
    private dialog : MatDialog,

  ) { }

  ngOnInit(): void {
    this.getAllCompanies();
  }

  getAllCompanies(){
    this.companyService.getAllCompany().subscribe(res=>{
      if(res){
        this.companies = res;
        console.log(this.companies);
      }
    })
  }

  OpenUpdateCompanyDialog(company: Company) {
    this.dialog.open(UpdateCompanyComponent,{data:company}).afterClosed().subscribe(res=>{
      if(res){
        return this.getAllCompanies();
      }
    })
  }

  DeleteCompany(companyId: number) {
    let confirmResult = confirm("Are you sure want to delete?")
    if(confirmResult){
      this.companyService.deleteCompany(companyId).subscribe(res=>{
        if(res){
          this.getAllCompanies();
        }
      })
    }
  }

  OpenCreateCompanyDialog() {
    this.dialog.open(CreateCompanyComponent).afterClosed().subscribe(res=>{
      if(res){
        this.getAllCompanies();
      }
    })
  }

  openDialogViewDepartment(company:Company) {
    this.dialog.open(ViewDepartmentComponent,{data:company}).afterClosed().subscribe(res=>{
      if(res){
        this.getAllCompanies();
      }
    })
  }

  openDialogViewEmployee(company: Company) {
    this.dialog.open(ViewEmployeeComponent,{data:company}).afterClosed().subscribe(res=>{
      if(res){
        this.getAllCompanies();
      }
    })
  }
}
