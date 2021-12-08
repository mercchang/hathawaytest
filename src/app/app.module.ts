import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { PrimeNGModule } from '../app/PrimeNG.module'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotebookComponent } from './features/notebook/notebook.component';
import { PageContentComponent } from './features/page-content/page-content.component';

@NgModule({
  declarations: [
    AppComponent,
    NotebookComponent,
    PageContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    PrimeNGModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
