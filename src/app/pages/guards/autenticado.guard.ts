import { SpotifyService } from 'src/app/services/spotify.service';
import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment, UrlTree, RouterModule } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AutenticadoGuard implements CanLoad {

  constructor(
    private router: Router,
    private spotifyService: SpotifyService) {
  }

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const token = localStorage.getItem('token');
    if (!token){
      console.log('usuario nao auutenticado, token:', token)
      this.naoAutenticado();
    }

    return new Promise(async (res) => {
      const usuarioCriado = await this.spotifyService.inicializarUsuario();
      if (!usuarioCriado){
        res(true);
      }
      else {
      }
    });
  }

  naoAutenticado() {
    localStorage.clear();
    this.router.navigate(['/login']);
    return false;
  }
}
