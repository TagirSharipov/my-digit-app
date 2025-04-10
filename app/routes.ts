import { type RouteConfig, index, route } from '@react-router/dev/routes';

export default [
  index('routes/home.tsx'),
  route('login', 'routes/login.tsx'),

  route('welcome', 'routes/welcome.tsx'),

  route('logout', 'routes/logout.ts'),
] satisfies RouteConfig;
