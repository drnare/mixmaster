import * as fs from 'fs';
import { version } from '../../package.json';
import * as template from '../manifest.template.json';
import { MIXPANEL_HOST_NAMES } from '../constants';

const generateManifest = () => {
  const manifest = {
    ...template,
    version,
    host_permissions: MIXPANEL_HOST_NAMES.map((host) => `https://*.${host}/`)
  };

  return fs.writeFileSync(`${__dirname}/../manifest.json`, JSON.stringify(manifest));
};

export const build = () => {
  generateManifest();
};

build();
