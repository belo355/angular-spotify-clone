import { AppRotas } from './app.routes';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { BotaoMenuComponent } from './components/botao-menu/botao-menu.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRotas),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
