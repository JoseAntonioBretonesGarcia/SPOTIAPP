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
      'Authorization' : 'Bearer BQD1Ees-vimOx3Q_F4dJSxjldan49XWpYLWNAu1-1ubkn4QU1GZA1VGI_opCuiuG--svQ6To1MrCesfICpE'
    });
    return this.http.get(url , {headers});
  }

  getNewReleases(){

    return this.getQuery('browse/new-releases')
               .pipe( map(data => data['albums'].items ));

  }

  getArtista (termino : string) {

    return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
               .pipe( map(data => data['artists'].items ));

  }
}
