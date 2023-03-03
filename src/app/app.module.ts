import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileModule } from './profile/profile.module';
import { HttpClientModule } from '@angular/common/http';

//Material
//Tailwind Hamburgers Plugin !!

//mockAPI returns wrong response for yearsOfExperience - certificateCount - numberOfInternships  --> ten thousand numbers 

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProfileModule,
    HttpClientModule
  ],
  providers: [
    {
      //MockAPI Request Endpoint      
      provide: "mockApiUrl", useValue: "https://6255745f52d8738c6922364f.mockapi.io/users", multi : false
    },
    {
      provide : Window , useValue: "window", multi: false
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

//bu ne sikim iştir
