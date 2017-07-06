import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './web/home/home.component';
import { NavbarComponent } from './partials/navbar/navbar.component';
import { LogoComponent } from './partials/logo/logo.component';
import { MenuComponent } from './partials/menu/menu.component';
import { AvatarComponent } from './partials/profile/avatar/avatar.component';
import { DropdownMenuComponent } from './partials/profile/dropdown-menu/dropdown-menu.component';
import { BodyComponent } from './partials/body/body.component';
import { NewPhotoComponent } from './partials/buttons/new-photo/new-photo.component';
import { PhotoComponent } from './partials/photos/photo/photo.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    LogoComponent,
    MenuComponent,
    AvatarComponent,
    DropdownMenuComponent,
    BodyComponent,
    NewPhotoComponent,
    PhotoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


