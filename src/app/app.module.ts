import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { FooterComponent } from './Components/footer/footer.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { ServiceComponent } from './Components/service/service.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { RouterModule } from '@angular/router';
import {MatSelectModule} from '@angular/material/select';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MainNavComponent } from './Components/main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { HomeComponent } from './Components/home/home.component';
import {MatDividerModule} from '@angular/material/divider';


@NgModule({
  declarations: [
    AppComponent,
     FooterComponent,
    ServiceComponent,
    ContactUsComponent,
    AboutUsComponent,
    MainNavComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,MatMenuModule,MatToolbarModule,MatButtonToggleModule,
    MatGridListModule,FlexLayoutModule,MatSidenavModule,MatListModule,MatFormFieldModule,MatButtonModule,
    MatInputModule,MatTableModule,MatSelectModule,
     FormsModule,ReactiveFormsModule,RouterModule, LayoutModule,MatDividerModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }    
