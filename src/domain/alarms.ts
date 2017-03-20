export class Alarm {
  id: number;
  type: AlarmType;
  time: { hour: number, minute: number};
  date: Date;
  duration: number;
  message: string
}

export enum AlarmType {
  OneTime, Repeating
}
