export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: 'Life goal tracker',
  url: 'http://localhost:3000',
  description: 'Description',
  mainNav: [
    {
      title: 'Home',
      href: '/',
    },
  ],
  links: {
    twitter: 'https://twitter.com/shadcn',
    github: 'https://github.com/shadcn/ui',
    docs: 'https://ui.shadcn.com',
  },
};
