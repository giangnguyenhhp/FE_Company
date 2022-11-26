import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material/material.module';
import {MainLayoutComponent} from './Core/main-layout/main-layout.component';
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatListModule} from "@angular/material/list";
import {MatMenuModule} from "@angular/material/menu";
import {MatCardModule} from "@angular/material/card";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {MultilevelMenuService, NgMaterialMultilevelMenuModule} from "ng-material-multilevel-menu";
import {MatDialogModule} from "@angular/material/dialog";
import {LoginInterceptor} from "./Core/Interceptor/login.interceptor";
import {RoleModule} from "./role/role.module";
import {NgxPermissionsModule} from "ngx-permissions";
import { UnauthorizedComponent } from './Core/unauthorized/unauthorized.component';

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    UnauthorizedComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatCardModule,
    NgMaterialMultilevelMenuModule,
    MatDialogModule,
    NgxPermissionsModule.forRoot()
  ],
  providers: [
    {
      provide : HTTP_INTERCEPTORS,
      useClass : LoginInterceptor,
      multi: true
    },
    MultilevelMenuService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
