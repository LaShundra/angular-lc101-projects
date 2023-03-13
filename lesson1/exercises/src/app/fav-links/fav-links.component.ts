import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {
  favLinks = ['https://www.youtube.com/movies', 'https://www.rottentomatoes.com/browse/movies_in_theaters',
'https://www.fandango.com/'];
  constructor() { }

  ngOnInit() {
  }

}
