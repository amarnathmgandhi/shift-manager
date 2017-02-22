import { Component } from '@angular/core';
import * as moment from 'moment';
import { NavController } from 'ionic-angular';
import TimeUtil from '../../common/TimeUtil';
import Util from '../../common/Util';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  private date: any;

  private showDatePicker: boolean;
  private showTimePicker: boolean = false;
  private moment: Date;
  private defaultShiftValuesFixture: any = {
    startTime: '07:30',
    endTime: '17:30',
    lunchDuration: '00:30',
  }
  private defaultShiftValues: any
  private shift: any

  constructor(public navCtrl: NavController) {
    this.defaultShiftValues = this.defaultShiftValuesFixture
    this.shift = {
      startTime: this.defaultShiftValues.startTime,
      endTime: this.defaultShiftValues.endTime,
      lunchDuration: '00:00',
    }
  }

  calculateDuration(): void {

    let shift: any = this.shift;
    if (shift.startTime && shift.endTime) {

      let startDate:Date = TimeUtil.getDate(shift.startTime);
      let endDate:Date = TimeUtil.getDate(shift.endTime);

      let diffInMs: number = TimeUtil.findTimeDifference(startDate, endDate);

      if (shift.lunchDuration) {
        let lunchInMs: number = TimeUtil.getMilliseconds(shift.lunchDuration);
        diffInMs -= lunchInMs
      }

      let hours: number = Math.floor(diffInMs / 1000 / 60 / 60);
      let remainingMinutes: number = diffInMs - hours * 1000 * 60 * 60;
      var mins: number = Math.floor(remainingMinutes / 1000 / 60);

      this.shift.shiftDuration =  Util.getPaddedString(hours)+":"+Util.getPaddedString(mins)
    }
  }


}
