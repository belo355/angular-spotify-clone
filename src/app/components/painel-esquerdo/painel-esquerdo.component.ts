import { SpotifyService } from 'src/app/services/spotify.service';
import { IPlaylist } from './../../interfaces/IPlaylist';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-painel-esquerdo',
  templateUrl: './painel-esquerdo.component.html',
  styleUrls: ['./painel-esquerdo.component.scss']
})
export class PainelEsquerdoComponent implements OnInit {

  // homeIcon = faHome;
  // pesquisarItem = faSearch;
  // artistaIcone = faGuitar;
  // playlist = faMusic;

  playlists: IPlaylist[]= [];

  menuSelecionado = "Home";

  constructor(private spotifyService: SpotifyService){ }

  ngOnInit(): void {
    this.buscarPlaylists();
  }

  botaoClick(botao: string){
    this.menuSelecionado = botao;
  }

  async buscarPlaylists() {
    this.playlists = await this.spotifyService.buscarPlaylistUsuario();
  }
}
