import {Component, OnInit} from '@angular/core';
import {MultilevelMenuService, MultilevelNodes} from "ng-material-multilevel-menu";
import {Router} from "@angular/router";
import {LoginService} from "../login/Service/login.service";
import {NgxPermissionsService} from "ngx-permissions";

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {


  constructor(
    private router: Router,
    private multiLevelMenuService: MultilevelMenuService,
    private permissionService: NgxPermissionsService,
    private loginService: LoginService
  ) {
  }

  ngOnInit(): void {
  }

  AppItems = [
    {
      label: 'Components',
      icon: 'grid_view',
      items: [
        {
          label: 'Company',
          link: 'company/layout-company',
          icon: 'group'
        },
        {
          label: 'Department',
          link: 'department/layout-department',
          icon: 'library_books',
        },
        {
          label: 'Employee',
          link: 'employee/layout-employee',
          icon: 'category',
        }
      ]
    },
    {
      label: 'Dashboard',
      link: '',
      icon: 'menu',
      items: [
        {
          label: 'Nhóm Quyền',
          link: 'role/layout-role',
          hidden: !this.hasPermission('AccessAdmin')
        },
        {
          label: 'Tài khoản người dùng',
          link: 'user/layout-user',
          hidden: !this.hasPermission('AccessAdmin')
        },
      ]
    }
  ];

  config = {
    paddingAtStart: true,
    interfaceWithRoute: true,
    classname: 'my-custom-class',
    // listBackgroundColor: `rgb(208, 241, 239)`,
    fontColor: `white`,
    // backgroundColor: `rgb(208, 241, 239)`,
    selectedListFontColor: `white`,
    highlightOnSelect: false,
    collapseOnSelect: true,
    useDividers: false,
    rtlLayout: false,
    customTemplate: false,
  };

  selectedItem(event: MultilevelNodes) {
    console.log(event);
  }

  logOut() {
    localStorage.removeItem("token");
    localStorage.removeItem('permission');
    this.router.navigate(['/login']).then(r => {
    });
  }

  setExpandCollapseStatus(type: any) {
    this.multiLevelMenuService.setMenuExapandCollpaseStatus(type);
  }

  private hasPermission(permission: string) {
    const listPermissions = this.loginService.permissions
    return listPermissions.includes(permission);
  }
}
