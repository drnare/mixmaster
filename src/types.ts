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
  distinct_id: string;
  journey: string;
  mp_lib: string;
  token: string;
  url: string;
}

export interface MixpanelEvent {
  created: Date;
  event: string;
  properties: MixpanelEventProperties;
}
