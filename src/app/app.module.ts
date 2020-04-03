import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Making ajax requests with him HttpClientModule
import { HttpClientModule } from '@angular/common/http';//194.-service y HttpClientModule
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; //it's words with chu in databinden
import { routing, appRoutingProviders } from './app.routing';

import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { CreateComponent } from './components/create/create.component';
import { DetailComponent } from './components/detail/detail.component';
import { EditComponent } from './components/edit/edit.component';
import { ErrorComponent } from './components/error/error.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SliderComponent } from './components/slider/slider.component';
import * as  $ from 'jquery';
// import { ResaltadoDirective } from './resaltado.directive'; //for you to function the $ en jquery
 
@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    CreateComponent,
    DetailComponent,
    EditComponent,
    ErrorComponent,
    ProjectsComponent,
    SliderComponent
  ],
  imports: [
    BrowserModule,    
    routing,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
  appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
