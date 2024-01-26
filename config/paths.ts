export type TPathRouteMap = {
  HOME: string;
  LOGIN: string;
};

export const PATHS: TPathRouteMap = {
  HOME: '/',
  LOGIN: '/login',
};

export const PATHS_FOR_SITEMAP = [PATHS.HOME, PATHS.LOGIN];
