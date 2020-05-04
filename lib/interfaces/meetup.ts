import { Venue } from './venue';
import { Group } from './group';

export interface Meetup {
  created: number;
  duration: number;
  id: string;
  name: string;
  date_in_series_pattern: boolean;
  status: string;
  time: number;
  local_date: string;
  local_time: string;
  updated: number;
  utc_offset: number;
  waitlist_count: number;
  yes_rsvp_count: number;
  venue: Venue;
  is_online_event: boolean;
  group: Group;
  link: string;
  description: string;
  visibility: string;
  member_pay_fee: boolean;
}
