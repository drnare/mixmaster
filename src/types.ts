export interface MixpanelEventProperties {
  $browser: string;
  $browser_version: number;
  $current_url: string;
  $initial_referrer: string;
  $initial_referring_domain: string;
  $lib_version: string;
  $os: string;
  $screen_height: number;
  $screen_width: number;
  [key: string]: string | number;
}

export interface MixpanelEvent {
  created: Date;
  event: string;
  id: string;
  properties: MixpanelEventProperties;
}
