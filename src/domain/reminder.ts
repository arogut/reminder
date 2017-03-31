import { Alarm } from "./alarms"

export class Reminder {
  id: number;
  name: string;
  type: ReminderType;
  message: string;

  constructor(id: number, name: string, type: ReminderType, message: string) {
    this.id = id;
    this.name = name;
    this.type = type;
    this.message = message;
  }
}

export enum ReminderType {
  DoctorVisit, MeasurementTime, PillTime
}
