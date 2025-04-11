import {
  type RouteConfig,
  index,
  route,
  layout,
} from '@react-router/dev/routes';

export default [
  layout('./routes/layout.tsx', [
    index('routes/home.tsx'),
    route('login', 'routes/login.tsx'),

    route('welcome', 'routes/protected.tsx'),
  ]),
  route('logout', 'routes/logout.tsx'),
] satisfies RouteConfig;
