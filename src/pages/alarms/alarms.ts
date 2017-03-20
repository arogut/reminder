import {Component} from "@angular/core";
import {NavController, NavParams} from "ionic-angular";
import {AlarmsAdd} from "../alarms-add/alarms-add";

@Component({
  selector: 'page-alerts',
  templateUrl: 'alarms.html'
})
export class Alarms {
  alarms = [ "1", "2", "3" ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  addNewAlarm() {
    this.navCtrl.push(AlarmsAdd);
  }
}
