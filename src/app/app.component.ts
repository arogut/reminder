import {Component, ViewChild} from "@angular/core";
import {Nav, Platform} from "ionic-angular";
import {StatusBar, Splashscreen, SQLite} from "ionic-native";
import {Home} from "../pages/home/home";
import {Reminders} from "../pages/reminders/reminders";
import {About} from "../pages/about/about";
import {Settings} from "../pages/settings/settings";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = Home;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      {title: 'Home', component: Home},
      {title: 'Remiders', component: Reminders},
      {title: 'About', component: About},
      {title: 'Settings', component: Settings}
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      let db = new SQLite();
      db.openDatabase({
        name: "data.db",
        location: "default"
      }).then(() => {
        db.executeSql(
          "DROP TABLE  reminder ", {}).then((data) => {
          console.log("TABLE DROPPED: ", data);
        }, (error) => {
          console.error("Unable to execute sql", error);
        }),
        db.executeSql(
          "CREATE TABLE IF NOT EXISTS reminder (" +
            "id INTEGER PRIMARY KEY AUTOINCREMENT," +
            "obj TEXT" +
          ")", {}).then((data) => {
          console.log("TABLE CREATED: ", data);
        }, (error) => {
          console.error("Unable to execute sql", error);
        })
      }, (error) => {
        console.error("Unable to open database", error);
      });
      Splashscreen.hide();
    });
  }

  openPage(page) {
    this.nav.push(page.component);
  }
}
