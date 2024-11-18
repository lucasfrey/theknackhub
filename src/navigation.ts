import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Services',
      links: [
        {
          text: 'Accounting',
          href: getPermalink('/about'),
        },
        {
          text: 'Airbnb management',
          href: getPermalink('/about'),
        },
        {
          text: 'Carpentry',
          href: getPermalink('/about'),
        },
        {
          text: 'Home renovation',
          href: getPermalink('/about'),
        },
      ],
    },
    {
      text: 'Pricing',
      href: '/pricing',
    },
  ],
  actions: [{ text: 'Download', href: 'https://github.com/onwidget/astrowind', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'Product',
      links: [
        { text: 'Accounting', href: '#' },
        { text: 'Airbnb', href: '#' },
        { text: 'Home renovation', href: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: '#' },
        { text: 'Blog', href: '#' },
        { text: 'Careers', href: '#' },
        { text: 'Press', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
  ],
};
