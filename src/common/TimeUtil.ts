export default class TimeUtil {
  public static getDate(timeText: string): Date {
    let hour: any = timeText.split(":")[0];
    let quarter: any = timeText.split(":")[1];
    let dateObj: Date = new Date(2000, 0, 1, hour, quarter);
    return dateObj
  }

  public static findTimeDifference(startDate: Date, endDate: Date): number {
    if (endDate < startDate) {
      endDate.setDate(endDate.getDate() + 1);
    }

    let diffInMs: number
    diffInMs = endDate.valueOf() - startDate.valueOf()
    return diffInMs
  }

  public static getMilliseconds(timeText: string): number {
    let hour: number = Number(timeText.split(":")[0])
    let quarter: number = Number(timeText.split(":")[1])
    return ((hour * 60 + quarter) * 60 * 1000)
  }
}
