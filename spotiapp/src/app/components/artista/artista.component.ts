import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
})
export class ArtistaComponent {

  idArtista: string;
  artista: any;
  loadingArtista: boolean = true;
  topTracks: any[] = [];

  constructor(private spotifyService : SpotifyService, private router : ActivatedRoute) {
    this.router.params.subscribe(params =>{
          this.idArtista = params['id'];
    this.getArtista(this.idArtista);
    this.getTopTracks(this.idArtista);
    })
  }

  getArtista(id :string){
    this.loadingArtista = true;
    this.spotifyService.getArtista(id).subscribe(artista => {
      this.artista = artista;
      this.loadingArtista = false;
    });

  }

  getTopTracks(id :string){
   this.spotifyService.getTopTracks(id).subscribe(topTracks => {
      this.topTracks = topTracks
      console.log(this.topTracks);
   });
  }


}
