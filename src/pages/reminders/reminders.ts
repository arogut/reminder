import {Component} from "@angular/core";
import {NavController, NavParams} from "ionic-angular";
import {RemindersAdd} from "../reminders-add/reminders-add";

@Component({
  selector: 'page-reminders',
  templateUrl: 'reminders.html'
})
export class Reminders {
  reminders = [ "1", "2", "3" ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  addNewReminder() {
    this.navCtrl.push(RemindersAdd);
  }
}
