import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GasesComponent } from './components/gases/gases.component';
import { VisorComponent } from './components/visor/visor.component';

@NgModule({
  declarations: [
    AppComponent,
    GasesComponent,
    VisorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
