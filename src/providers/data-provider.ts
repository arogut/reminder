import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {SQLite} from "ionic-native";
import {Reminder} from "../domain/reminder";

@Injectable()
export class DataProvider {
  db: SQLite;

  constructor() {
    this.db = new SQLite();
  }
  public reminders: Array<Object>;

  public connectToDB(){
    return this.db.openDatabase({
      name: "data.db",
      location: "default"
    });
  }

  public saveReminder(reminder: Reminder) {
    this.db.executeSql("INSERT INTO reminders (name,type,message) VALUES (" + reminder.name + "," + reminder.type + "," + reminder.name + ")", [])
      .then((data) => {
      console.log("INSERTED: " + JSON.stringify(data))
    }, (error) => {
      console.log("ERROR: " + JSON.stringify(error.err))
    });
  }

  public loadReminders() : Array<Reminder> {
    let reminders: Array<Reminder> = [];
    this.db.executeSql("SELECT * FROM reminders",[]).then((data) => {
      if(data.rows.length > 0) {
        for(let i = 0; i < data.rows.length; i++) {
          let currentItem = data.rows.item(i);
          reminders.push(new Reminder(currentItem.id,currentItem.name,currentItem.type,currentItem.message))
        }
      }

    });
    return reminders;
  }
}
