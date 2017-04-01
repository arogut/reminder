import {Component} from "@angular/core";
import {NavController} from "ionic-angular";
import {Diary} from "../diary/diary";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class Home {

  constructor(public navCtrl: NavController) {

  }

  openDiary(page) {
    this.navCtrl.push(Diary);
  }
}
