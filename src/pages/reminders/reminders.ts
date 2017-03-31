import {Component} from "@angular/core";
import {NavController, Platform} from "ionic-angular";
import {RemindersAdd} from "../reminders-add/reminders-add";
import {SQLite} from "ionic-native";
import {Reminder} from "../../domain/reminder";

@Component({
  selector: 'page-reminders',
  templateUrl: 'reminders.html'
})
export class Reminders {

  public database: SQLite;
  public reminders: Array<Reminder>;

  constructor(public navCtrl: NavController, private platform: Platform) {
    this.platform.ready().then(() => {
      this.database = new SQLite();
      this.database.openDatabase({
        name: "data.db",
        location: "default"
      }).then(() => {
        this.getReminders();
      }, (error) => {
        console.log("ERROR: ", error);
      });
  });
}

  addNewReminder() {
    this.navCtrl.push(RemindersAdd);
  }

  public getReminders() {
    this.database.executeSql("SELECT * FROM reminder", []).then((data) => {
      console.log(data);
      this.reminders = [];
      if (data.rows.length > 0) {
        for (var i = 0; i < data.rows.length; i++) {
          console.log(data.rows.item(i));
          let rem = JSON.parse(data.rows.item(i).obj);
          this.reminders.push({
            id: rem.id,
            name: rem.name,
            type: rem.type,
            message: rem.message
          });
        }
      }
    }, (error) => {
      console.log("ERROR: " + JSON.stringify(error));
    });
  }
}
