import { Component } from '@angular/core';
import {NavController, Platform} from 'ionic-angular';
import { ReminderType } from "../../domain/reminder";
import {SQLite} from "ionic-native";

@Component({
  selector: 'page-reminders-add',
  templateUrl: 'reminders-add.html'
})
export class RemindersAdd {
  database: SQLite;
  reminderType: ReminderType;

  constructor(public navCtrl: NavController, public platform: Platform) {
    this.platform.ready().then(() => {
      this.database = new SQLite();
      this.database.openDatabase({
        name: "data.db",
        location: "default"
      }).then(() => {
        console.log("DB opened");
      }, (error) => {
        console.log("ERROR: ", error);
      });
    });
  }

  createReminder() {
    this.add();
    this.navCtrl.pop();
  }

  public add() {
    console.log('INSERT INTO reminder (obj) VALUES (\'' + JSON.stringify({id: "1", name: "2", type: "type", message: "message"}) + '\')');
    this.database.executeSql('INSERT INTO reminder (obj) VALUES (\'' + JSON.stringify({id: "1", name: "2", type: "type", message: "message"}) + '\')', []).then((data) => {
      console.log("INSERTED: " + JSON.stringify(data));
    }, (error) => {
      console.log(error);
    });
  }
}
