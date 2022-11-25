import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';
import {User} from "../../model/User";
import {MatDialog} from "@angular/material/dialog";
import {RegisterForAdminComponent} from "../register-for-admin/register-for-admin.component";

@Component({
  selector: 'app-layout-user',
  templateUrl: './layout-user.component.html',
  styleUrls: ['./layout-user.component.scss']
})
export class LayoutUserComponent implements OnInit {

  users : User[] = []

  constructor(
    private userService: UserService,
    private dialog : MatDialog
  ) { }

  ngOnInit(): void {
    this.getAllUser()
  }

  UpdateUser(user: User) {

  }

  deleteUser(id: string) {
    let confirmResult = confirm("Are you sure you want to delete this user?")
    this.userService.deleteUser(id).subscribe(r=>{
      if(confirmResult){
        this.getAllUser()
      }
    })
  }

  openCreateAccountForAdminDialog() {
    this.dialog.open(RegisterForAdminComponent).afterClosed().subscribe(res=>{
      if(res){
        this.getAllUser()
        console.log(this.users)
      }
    })
  }

  private getAllUser() {
    this.userService.getUsers().subscribe(res=>{
      if (res)
        this.users = res;
      console.log(this.users)
    })
  }
}
