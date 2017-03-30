
export interface MdoDictionary {
  [index: string]: Mdo;
}

export class Mdo {
  public m: number;
  public d: number;
  public o: number;
  public label: string;

  constructor(data: any = {}) {
    this.m = data.multiplication_factor || data.m;
    this.d = data.division_factor || data.d;
    this.o = data.offset || data.o;
    if (data.mdo_label) {
      this.label = data.mdo_label;
    }
  }

  private _retr_dec(num: number): number {
    // let numberFixedDecimal = num.toFixed(10);
    let numberString = num.toString();
    let decimalLength: number = (numberString.split(".")[1] || []).length;
    if (decimalLength > 8) {
      // Limit number of decimals to 8
      decimalLength = 8;
    }
    return decimalLength;
  }

  public computeValue(value: number): number {
    let result: number = value;
    if (this.m) {
      result = result * this.m;
    }
    if (this.d) {
      result = result / this.d;
    }
    if (this.o) {
      result += this.o;
    }
    return result;
  }

  public setFromMdo(src: Mdo): void {
    if (src.m) {
      this.m = src.m;
    }
    if (src.d) {
      this.d = src.d;
    }
    if (src.o) {
      this.o = src.o;
    }
    if (src.label) {
      this.label = src.label;
    }
  }

  public setFromFactor(factor: number, invert: boolean): void {
    let decimals: number = this._retr_dec(factor);
    let multiplication_factor: number = Math.pow(10, decimals);

    this.o = 0.0;
    if (invert) {
      this.d = Math.round(factor * multiplication_factor);
      this.m = multiplication_factor;
    } else {
      this.m = Math.round(factor * multiplication_factor);
      this.d = multiplication_factor;
    }
  }

  public getPatchPayload(): any {
    let payload: any = {
      multiplication_factor: this.m,
      division_factor: this.d,
      offset: this.o
    }
    if (this.label) {
      payload['mdo_label'] = this.label;
    }
    return payload;
  }
}