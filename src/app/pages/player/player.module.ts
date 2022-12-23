import { BotaoMenuComponent } from './../../components/botao-menu/botao-menu.component';
import { PainelEsquerdoComponent } from './../../components/painel-esquerdo/painel-esquerdo.component';
import { PlayerRoutes } from './player-routes';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerComponent } from './player.component';
import { RouterModule } from '@angular/router';
// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    PlayerComponent,
    PainelEsquerdoComponent,
    BotaoMenuComponent
  ],
  imports: [
    CommonModule,
    // FontAwesomeModule,
    RouterModule.forChild(PlayerRoutes),
  ]
})
export class PlayerModule { }
