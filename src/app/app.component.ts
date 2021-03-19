import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  favFlop = {
    title: "The Avengers",
    yearReleased: 1998,
    rating: 3.8,
    imdbLink: "https://www.imdb.com/title/tt0118661/"
  };
}
