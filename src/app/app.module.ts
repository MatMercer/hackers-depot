import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BlinkingCharacterComponent } from './blinking-character/blinking-character.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BlinkingCharacterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
