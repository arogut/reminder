import {Component} from "@angular/core";
import {NavController, Events} from "ionic-angular";
import {RemindersAdd} from "../reminders-add/reminders-add";
import {Reminder} from "../../domain/reminder";import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-reminders',
  templateUrl: 'reminders.html'
})
export class Reminders {

  public reminders: Array<Reminder>;

  constructor(public navCtrl: NavController, public events: Events, private storage: Storage) {
    this.getReminders();

    // this.events.subscribe('reload-reminders',() => {
    //    this.getReminders();
    // });
  }

  addNewReminder() {
    this.navCtrl.push(RemindersAdd);
  }

  getReminders() {
    this.storage.get("reminders").then((values) => {
      console.log(values);
      this.reminders = JSON.parse(values);
    })
  }
}
