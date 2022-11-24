import {Component, Inject, OnInit} from '@angular/core';
import {Company} from "../../Models/company";
import { CompanyService } from '../../Service/company.service';
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";
import {CreateCompanyComponent} from "../create-company/create-company.component";
import {UpdateCompanyComponent} from "../update-company/update-company.component";
import {createMessageDiagnostic} from "@angular/compiler-cli/src/transformers/util";
import {Department} from "../../../department/models/Department";
import { DepartmentService } from 'src/app/department/service/department.service';

@Component({
  selector: 'app-layout-company',
  templateUrl: './layout-company.component.html',
  styleUrls: ['./layout-company.component.scss']
})
export class LayoutCompanyComponent implements OnInit {

  companies: Company[] = [];
  departments : Department[] = [];

  constructor(
    private companyService: CompanyService,
    private dialog : MatDialog,
    private departmentService: DepartmentService

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

}
