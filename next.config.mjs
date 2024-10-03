// next.config.mjs

import {withPigment} from '@pigment-css/nextjs-plugin';

const nextConfig = {
  // ...Your nextjs config.
}

/**
 * @type {import('@pigment-css/nextjs-plugin').PigmentOptions}
 */
const pigmentConfig = {
  transformLibraries: ['@mui/material'],
}

export default withPigment(nextConfig, pigmentConfig);
