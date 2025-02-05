import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Hubs',
      links: [
        {
          text: 'Accounting',
          href: getPermalink('/accounting'),
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
          href: getPermalink('/property'),
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
};

export const footerData = {
  links: [
    {
      title: 'Hubs',
      links: [
        { text: 'Accounting', href: 'accounting' },
        { text: 'Admin', href: 'admin' },
        { text: 'Crafts', href: 'crafts' },
        { text: 'Property', href: 'property' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: 'about' },
        { text: 'Pricing', href: 'pricing' },
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
