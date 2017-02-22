export default class Util {
  public static getPaddedString(num: number): string {
    let str = "" + num
    let pad = "00"
    let paddedString = pad.substring(0, pad.length - str.length) + str
    return paddedString
  }
}
