import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { routing } from './app.routing';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { ProfileComponent } from './components/profile.component';

@NgModule({
  //add routing to imports
  imports: [ BrowserModule, HttpModule ],
  declarations: [ AppComponent,
                  ProfileComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
