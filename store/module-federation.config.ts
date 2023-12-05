import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'store',
  remotes: ['product', 'checkout'],
};

export default config;
