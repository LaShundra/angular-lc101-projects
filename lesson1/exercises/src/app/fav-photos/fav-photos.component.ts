import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Favorite Photos';
  image1 = 'https://media.istockphoto.com/id/1282050925/vector/target-icon-on-transparent-background.jpg?s=612x612&w=0&k=20&c=SOu9ubbgNIjroLgZE_yIUvKGiZlnyFR1B5swsLRUwL8=';
  image2 = 'https://media.istockphoto.com/id/538872102/vector/zodiac-sign-libra.jpg?s=612x612&w=0&k=20&c=DrO0JWvQhF5QL9c-2__FNzG6ruoIF-9A-Fbh6QrkEas=';
  image3 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGEHk7Wdp77TetuoP6jhE9koEuUJVyjs7_vHS19HwN36-K-UwaYVnzyVPbQSbxKm2q7O0&usqp=CAU';

  constructor() { }

  ngOnInit() {
  }

}