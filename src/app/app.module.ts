import {NgModule, ErrorHandler} from "@angular/core";
import {IonicApp, IonicModule, IonicErrorHandler} from "ionic-angular";
import {MyApp} from "./app.component";
import {Home} from "../pages/home/home";
import {Reminders} from "../pages/reminders/reminders";
import {Settings} from "../pages/settings/settings";
import {About} from "../pages/about/about";
import {RemindersAdd} from "../pages/reminders-add/reminders-add";

@NgModule({
  declarations: [
    MyApp,
    Home,
    Reminders,
    RemindersAdd,
    About,
    Settings
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Home,
    Reminders,
    RemindersAdd,
    About,
    Settings
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {
}
