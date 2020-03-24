import * as moment from 'moment';
import { unitOfTime } from 'moment';

export class DateHelper {
  public static dateToStringFormat(date: Date, format: string): string {
    return moment(date).format(format);
  }

  public static getCurrentDate(): Date{
    return moment().toDate();
  }

  public static addDays(date: Date, day: number): Date{
    return moment(date).add(day, 'days').toDate();
  }
}
