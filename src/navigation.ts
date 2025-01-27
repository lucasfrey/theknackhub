import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Hubs',
      links: [
        {
          text: 'Accounting',
          href: getPermalink('/about'),
        },
        {
          text: 'Admin',
          href: getPermalink('/admin'),
        },
        {
          text: 'Crafts',
          href: getPermalink('/crafts'),
        },
        {
          text: 'Property',
          href: getPermalink('/about'),
        },
      ],
    },
    {
      text: 'Pricing',
      href: '/pricing',
    },
    {
      text: 'Contact',
      href: '/contact',
    },
  ],
  actions: [{ text: 'Download', href: 'https://github.com/onwidget/astrowind', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'Product',
      links: [
        { text: 'Account', href: '#' },
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
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/theknackhub/' },
  ],
};
