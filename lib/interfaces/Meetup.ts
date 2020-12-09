import { Venue } from './venue';
import { Group } from './group';

export interface Meetup {
  readonly created: number;
  readonly duration: number;
  readonly id: string;
  readonly name: string;
  readonly date_in_series_pattern: boolean;
  readonly status: string;
  readonly time: number;
  readonly local_date: string;
  readonly local_time: string;
  readonly updated: number;
  readonly utc_offset: number;
  readonly waitlist_count: number;
  readonly yes_rsvp_count: number;
  readonly venue: Venue;
  readonly is_online_event: boolean;
  readonly group: Group;
  readonly link: string;
  readonly description: string;
  readonly visibility: string;
  readonly member_pay_fee: boolean;
}
