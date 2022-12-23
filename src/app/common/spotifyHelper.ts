import { IPlaylist } from './../interfaces/IPlaylist';
import { IUsuario } from './../interfaces/IUsuario';

export function SpotifyUserParaUsuarios(user: SpotifyApi.CurrentUsersProfileResponse): IUsuario {
  return {
    id: user.id,
    nome: user.display_name,
    imagemUrl: user.images.pop().url
  }
}

export function SpotifyPlaylistParaIPlaylist(playlist: SpotifyApi.PlaylistObjectSimplified): IPlaylist {
  return {
    id: playlist.id,
    nome: playlist.name,
    imageUrl: playlist.images.pop().url
  }
}
