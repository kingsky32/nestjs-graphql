import { registerAs } from '@nestjs/config';
export default registerAs('graphql', () => ({
  debug: process.env.GRAPHQL_DEBUG,
  playground: process.env.GRAPHQL_PLAYGROUND,
}));
