import {Component, ViewChild} from "@angular/core";
import {Nav, Platform} from "ionic-angular";
import {StatusBar, Splashscreen, SQLite} from "ionic-native";
import {Home} from "../pages/home/home";
import {Reminders} from "../pages/reminders/reminders";
import {Alerts} from "../pages/alerts/alerts";
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
      {title: 'Alerts', component: Alerts},
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
        db.executeSql("CREATE TABLE IF NOT EXISTS reminder (" +
            "id INTEGER PRIMARY KEY AUTOINCREMENT," +
            "name TEXT," +
            "type TEXT" +
            "message TEXT" +
          ")", {}).then((data) => {
          console.log("TABLE CREATED: ", data);
        }, (error) => {
          console.error("Unable to execute sql", error);
        })
        db.executeSql("CREATE TABLE IF NOT EXISTS alarm (" +
            "id INTEGER PRIMARY KEY AUTOINCREMENT," +
            "type TEXT," +
            "time TEXT" +
            "date TEXT" +
            "duration INTEGER" +
            "reminder_id" +
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
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
