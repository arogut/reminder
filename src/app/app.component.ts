import {Component, ViewChild} from "@angular/core";
import {Nav, Platform} from "ionic-angular";
import {Home} from "../pages/home/home";
import {Storage} from '@ionic/storage';
import {Diary} from "../pages/diary/diary";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = Home;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, storage: Storage) {
    storage.ready().then(() => {
      storage.keys().then((keys) => {
        if (keys.indexOf("reminders") < 0) {
          storage.set("reminders", "[]").then(() => {
            console.log("Reminders initialized");
          });
        }
        if (keys.indexOf("measurements") < 0) {
          storage.set("measurements", "[]").then(() => {
            console.log("Measurements initialized");
          });
        }
      });
    });

    this.pages = [
      {title: 'Home', component: Home},
      //{title: 'Remiders', component: Reminders},
      {title: 'Diary', component: Diary}
    ];

  }

  openPage(page) {
    this.nav.push(page.component);
  }
}
