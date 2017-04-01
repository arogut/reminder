import {Component} from "@angular/core";
import {NavController, Events} from "ionic-angular";
import {Storage} from "@ionic/storage";
import {Reminder} from "../../domain/reminder";
import {LocalNotifications} from 'ionic-native';

@Component({
  selector: 'page-reminders-add',
  templateUrl: 'reminders-add.html'
})
export class RemindersAdd {

  reminder: Reminder = new Reminder(1, "", "", "");
  constructor(public navCtrl: NavController, public events: Events, private storage: Storage) {
  }

  createReminder() {
    this.add();
    this.navCtrl.pop();
  }

  public add() {
    this.storage.get("reminders").then((values) => {
      let arr: Array<Reminder> = JSON.parse(values);
      arr.push(this.reminder);
      this.storage.set("reminders", JSON.stringify(arr)).then(() => {
        console.log("Inserted successfully")
      });
      this.events.publish('reload-reminders');
    });
    LocalNotifications.schedule({
      id: 1,
      text: 'Single ILocalNotification',
    });
  }
}
