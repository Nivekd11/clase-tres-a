import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ColorDirective } from './libs/directivas/color.directive';
import { PrimeroComponent } from './components/primero/primero.component';

@NgModule({
  declarations: [
    AppComponent,
    ColorDirective,
    PrimeroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
