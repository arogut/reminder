import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ReminderType } from "../../domain/reminder";

@Component({
  selector: 'page-reminders-add',
  templateUrl: 'reminders-add.html'
})
export class RemindersAdd {
  reminderType: ReminderType;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  createReminder() {
    this.navCtrl.pop();
  }
}
