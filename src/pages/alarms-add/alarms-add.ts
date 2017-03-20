import {Component} from "@angular/core";
import {NavController, NavParams} from "ionic-angular";
import {AlarmType} from "../../domain/alarms";

@Component({
  selector: 'page-alarms-add',
  templateUrl: 'alarms-add.html'
})
export class AlarmsAdd {
  alarmType: AlarmType;
  selectedTime: Date;
  selectedDate: Date;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  createAlarm() {
    this.navCtrl.pop();
  }
}
