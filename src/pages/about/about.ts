import {Component} from "@angular/core";
import {NavController, NavParams} from "ionic-angular";

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class About {

  slides = [
    {
      title: "1",
      description: "Take care",
      image: "heart-outline",
    },
    {
      title: "2",
      description: "Take care",
      image: "notifications-outline",
    },
    {
      title: "3",
      description: "Take care",
      image: "md-happy",
    }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

}
