export interface Group {
  readonly created: number;
  readonly name: string;
  readonly id: number;
  readonly join_mode: string;
  readonly lat: number;
  readonly lon: number;
  readonly urlname: string;
  readonly who: string;
  readonly localized_location: string;
  readonly state: string;
  readonly country: string;
  readonly region: string;
  readonly timezone: string;
}
