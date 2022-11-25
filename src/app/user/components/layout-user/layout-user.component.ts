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
    this.userService.getUsers().subscribe(res=>{
      if (res)
        this.users = res;
      console.log(this.users)
    })
  }

  UpdateUser(user: User) {

  }

  deleteUser(user: User) {

  }

  openCreateAccountForAdminDialog() {
    this.dialog.open(RegisterForAdminComponent).afterClosed().subscribe(res=>{
      if(res){
        this.userService.getUsers()
        console.log(this.users)
      }
    })
  }
}
