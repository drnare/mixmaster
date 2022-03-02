# MixMaster

Chrome DevTools extension for logging Mixpanel events.

Save yourself a trip to the Mixpanel site to verify that an event has been tracked. If you have PiHole or other adblocking software this extension will still log the event from the failed network request so you don't have to whitelist Mixpanel or turn off your adblocker.

## Install

Find it on the Chrome Extension store

## Build

```
yarn
yarn build
```

Open your favourite Chromium-based browser, go to extensions, enable Developer Mode. Click 'Load unpacked' and select the `dist` directory.

Tested with Vivaldi.

## Privacy & Permissions

The extension may ask to run on every site you visit.
The extension does NOT store any events. It does NOT share your data with any service.
