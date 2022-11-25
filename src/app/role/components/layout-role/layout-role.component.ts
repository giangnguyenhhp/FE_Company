import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {Role} from "../../models/role";
import {RoleService} from "../../service/role.service";
import {MatTableDataSource} from "@angular/material/table";
import {MatSort} from "@angular/material/sort";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {CreateRoleComponent} from "../create-role/create-role.component";
import {UpdateRoleComponent} from "../update-role/update-role.component";
import {SetPermissionsComponent} from "../set-permissions/set-permissions.component";

@Component({
  selector: 'app-layout-role',
  templateUrl: './layout-role.component.html',
  styleUrls: ['./layout-role.component.scss']
})
export class LayoutRoleComponent implements OnInit, AfterViewInit {

  dataSource = new MatTableDataSource<Role>();
  displayedColumns = ['name', 'normalizedName', 'concurrencyStamp', 'id', 'SetPermissions', 'update', 'delete'];
  @ViewChild(MatSort) sort!: MatSort;


  constructor(
    private roleService: RoleService,
    private dialog: MatDialog
  ) {
  }

  ngOnInit(): void {
    this.getRoles();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }


  private getRoles() {
    this.roleService.getAllRoles().subscribe(res => {
      if (res) {
        this.dataSource.data = res as Role[];
        console.log(this.dataSource);
      }
    })
  }

  applyFilter(event: KeyboardEvent) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  OpenUpdateRoleDialog(role: Role) {
    this.dialog.open(UpdateRoleComponent, {data: role}).afterClosed().subscribe(r => {
      if (r) {
        this.getRoles();
      }
    })
  }

  OpenDeleteRoleDialog(role: Role) {
    let confirmResult = confirm("Are you sure you want to delete this role ?")
    if (confirmResult) {

      this.roleService.DeleteRole(role).subscribe(res => {
        if (res) {
          this.getRoles();
        }
      })
    }
  }

  OpenCreateRoleDialog() {
    this.dialog.open(CreateRoleComponent).afterClosed().subscribe(res => {
      if (res) {
        this.getRoles();
      }
    })
  }

  openSetPermissionsDialog(role: Role){
    const cfg = new MatDialogConfig();
    cfg.data = {
      role: role
    }
    this.dialog.open(SetPermissionsComponent,cfg).afterClosed().subscribe(res=>{
      if (res) {
        this.getRoles();
      }
    })
  }
}
