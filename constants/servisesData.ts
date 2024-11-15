import { button } from 'framer-motion/client';

type servicesType = {
  title: string;
  photo: string;
  vectorLeft: string;
  vectorRight: string;
};

export const servicesData: servicesType[] = [
  {
    title: 'NET ZERO',
    photo: '/assets/img/circular.png',
    vectorLeft: '/assets/img/Vector-left-up.webp',
    vectorRight: '/assets/img/Vector-right-up.webp',
  },
  {
    title: 'ESG',
    photo: '/assets/img/esg.webp',
    vectorLeft: '/assets/img/Vector-left-down.webp',
    vectorRight: '/assets/img/Vector-right-down.webp',
  },
  {
    title: 'Circular Economy',
    photo: '/assets/img/circular.webp',
    vectorLeft: '/assets/img/Vector-left-up.webp',
    vectorRight: '/assets/img/Vector-right-up.webp',
  },
];

type flayoutType = {
  titles: string[];
  button: string;
  Arrow: string;
};

export const flayoutData: flayoutType[] = [
  {
    titles: [
      'GHG inventory',
      'Green MM Budgeting',
      'Targrt Setting && Action Plan',
      'RE Strategy and implemantation',
      'Green pricing',
    ],
    button: 'Learn More',
    Arrow: '/assets/img/Arrow.svg',
  },
  {
    titles: [
      'Sustainable Solution & Products',
      'ESG Reporting',
      'Green Certifications',
      'RE Strategy and implemantation',
    ],
    button: 'Learn More',
    Arrow: '/assets/img/Arrow.svg',
  },
  {
    titles: [
      'Waste Management & Circular Economy Solutions',
      'Sustainable Transportation',
    ],
    button: 'Learn More',
    Arrow: '/assets/img/Arrow.svg',
  },
];
