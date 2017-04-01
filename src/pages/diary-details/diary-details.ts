import {Component} from "@angular/core";
import {NavParams, ViewController, Events} from "ionic-angular";
import {Measurement} from "../../domain/measurement";
import {Storage} from "@ionic/storage"

@Component({
  selector: 'page-diary-details',
  templateUrl: 'diary-details.html'
})
export class DiaryDetails {

  measurement : Measurement;

  constructor(public viewCtrl: ViewController, public navParams: NavParams, private storage: Storage, public events: Events) {
    this.measurement = this.navParams.data;
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  deleteMeasurement() {
    this.storage.get("measurements").then((values) => {
      let arr: Array<Measurement> = JSON.parse(values);
      arr.forEach((x,index) => {
        if(x.id === this.measurement.id) {
          console.log(x.id);
          arr.splice(index,1);
        }
      });

      this.storage.set("measurements", JSON.stringify(arr)).then((x) => {
        console.log("Removed successfully");
      });
      this.events.publish('reload-diary');
    });
    this.dismiss();
  }
}
