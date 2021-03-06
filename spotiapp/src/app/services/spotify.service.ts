import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http : HttpClient ) { }

  getQuery( query : string){
    const url = `https://api.spotify.com/v1/${ query }`;
    const headers = new HttpHeaders ({
      'Authorization' : 'Bearer BQAMbHerJMdjh2ZEnLr0Ihw1AJXbKkstowOVDWUWDVo_N7UmI36lt7uLJZ6wjyaqrTbsiitBg1vHIvdTUuQ'
    });
    return this.http.get(url , {headers});
  }

  getNewReleases(){

    return this.getQuery('browse/new-releases')
               .pipe( map(data => data['albums'].items ));

  }

  getArtistas (termino : string) {

    return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
               .pipe( map(data => data['artists'].items ));

  }

  getArtista (id : string) {

    return this.getQuery(`artists/${id}`);
               /* .pipe( map(artista => data['artists'].items )); */
  }

  getTopTracks (id : string) {

    return this.getQuery(`artists/${id}/top-tracks?country=us`)
               .pipe( map(topTracks => topTracks['tracks']));
  }

}
