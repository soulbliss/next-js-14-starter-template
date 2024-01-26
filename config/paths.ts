export type TPathRouteMap = {
  HOME: string;
  LOGIN: string;
  DASHBOARD: string;
};

export const PATHS: TPathRouteMap = {
  HOME: '/',
  LOGIN: '/login',
  DASHBOARD: '/dashboard',
};

export const PATHS_FOR_SITEMAP = [PATHS.HOME, PATHS.LOGIN];
