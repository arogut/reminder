import {Component} from "@angular/core";
import {SQLite} from "ionic-native"

@Component({
  selector: 'page-reminders',
  templateUrl: 'reminders.html'
})
export class Reminders {
  reminders = [ "1", "2", "3" ]
}
