import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Pipe, Renderer2} from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterPipe } from './filter.pipe';
import { ClickOutsideModule } from 'ng-click-outside';

@NgModule({
  declarations: [
    AppComponent,
    FilterPipe,
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    HttpClientModule,
    ClickOutsideModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
