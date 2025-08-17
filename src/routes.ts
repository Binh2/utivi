import { type RouteConfig, route } from '@react-router/dev/routes';

// I know I can use index(), and prefix() but I want to keep it simple.

export default [
    route("/", "./App.tsx"),
    route("/test", "./test.tsx"),
] satisfies RouteConfig;