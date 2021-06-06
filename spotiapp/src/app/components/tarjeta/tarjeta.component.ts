import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent {

  @Input() items: any[] = [];

  @Input() artistas: any[] = [];

  constructor( private router: Router ) { }

  verArtista(item: any) {
    let artistaId;
    if(item.hasOwnProperty('artists')){
      artistaId = item.artists[0].id;
    }else{
      artistaId = item.id;
    }
    this.router.navigate([`artist/${artistaId}`]);
  }
}
