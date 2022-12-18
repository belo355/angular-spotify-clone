import { SpotifyConfiguration } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { IUsuario } from '../interfaces/IUsuario';
import { SpotifyUserParaUsuarios } from '../common/spotifyHelper';
import Spotify from 'spotify-web-api-js';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  spotifyApi: Spotify.SpotifyWebApiJs = null;
  usuario: IUsuario;

  constructor() {
    this.spotifyApi = new Spotify();
  }

  async inicializarUsuario() {
    if (!!this.usuario)
      return true

    const token = localStorage.getItem('token');

    if (!token)
      return false;

    try {
      this.definirAcessToken(token);
      await this.obterSpotifyUsuario();
      return true;

    } catch (ex) {
      return false;
    }
  }

  async obterSpotifyUsuario() {
    const userInfo = await this.spotifyApi.getMe();
    this.usuario = SpotifyUserParaUsuarios(userInfo);
  }

  obterUrlLogin() {
    const authEndpoint = `${SpotifyConfiguration.authEndpoint}?`;
    const clientId = `client_id=${SpotifyConfiguration.clientId}&`;
    const redictUrl = `redirect_uri=${SpotifyConfiguration.redirectUrl}&`;
    const scopes = `scope=${SpotifyConfiguration.scopes.join('%20')}&`;
    const responseType = `response_type=token&show_dialog=true`;
    return authEndpoint + clientId + redictUrl + scopes + responseType;
  }

  obterTokenUrlCallback() {
    if (!window.location.hash)
      return '';
    const params = window.location.hash.substring(1).split('&');
    return params[0].split('=')[1];
  }

  definirAcessToken(token: string) {
    this.spotifyApi.setAccessToken(token);
    localStorage.setItem('token', token);
  }

}
