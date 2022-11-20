import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {CompanyService} from '../../Service/company.service';
import {AddCompanyRequest} from "../../Models/AddCompanyRequest";
import {MatDialogRef, MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
  selector: 'app-create-company',
  templateUrl: './create-company.component.html',
  styleUrls: ['./create-company.component.scss']
})
export class CreateCompanyComponent implements OnInit {

  addCompanyFormGroup = new FormGroup({
    nameCompany: new FormControl,
    address: new FormControl,
    description: new FormControl,
  })

  constructor(
    private companyService: CompanyService,
    public dialogRef: MatDialogRef<CreateCompanyComponent>
  ) {
  }

  ngOnInit(): void {
  }

  submit() {
    const request = <AddCompanyRequest> this.addCompanyFormGroup.value;
    this.companyService.AddCompany(request).subscribe(res => {
      this.dialogRef.close(true);
    })
    console.log(this.addCompanyFormGroup.value)
  }
}
