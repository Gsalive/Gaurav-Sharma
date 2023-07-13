import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  coverhunt,
  dcc,
  kelhel,
  microverse,
  java,
  python,
  needrestaurant,
  planner,
  oldport,
  fraud,
  smartparking

} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Java',
    icon: frontend,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'UI/UX Design',
    icon: ux,
  },
  {
    title: 'Software Prototyping',
    icon: prototyping,
  },
];

const technologies = [
  {
    name:'JAVA',
    icon: java,
  },
  {
    name:'PYHTON',
    icon:python,
  },
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  
  {
    name: 'React JS',
    icon: reactjs,
  },

  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  
 
  {
    name: 'git',
    icon: git,
  },
 

];


const projects = [
  {
    id: 'project-1',
    name: 'Expense Tracker',
    description: 'A simple website to maintain your expenses',
    tags: [
      {
        name: '.net',
        color: 'blue-text-gradient',
      },
    ],
    image: planner,
    repo: 'https://github.com/Gsalive/Expense-Tracker',
    demo: '',
  },
  {
    id: 'project-2',
    name: 'NEED-the food calls',
    description:
      'A website for restaurant named "NeeD" , which enables user to easily reserve table and more ..',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'express',
        color: 'green-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'pink-text-gradient',
      },
      {
        name: 'nodejs',
        color: 'pink-text-gradient',
      },
    ],
    image: needrestaurant,
    repo: 'https://github.com/Gsalive/Restaurant-Reservation-System',
    demo: 'https://gsalive.github.io/Restaurant-Reservation-System/',
  },
  {
    id: 'project-3',
    name: 'Old Portfolio',
    description: 'My old portfolio',
    tags: [
      {
        name: 'Reactjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'bootstrap',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: oldport,
    repo: 'https://github.com/Gsalive/Protfolio',
    demo: 'https://gsalive.github.io/Protfolio/',
  },
  {
    id: 'project-4',
    name: 'fraud detection',
    description: `A modeled designed with serveral liberies to detect fraudulant transactions .`,
    tags: [
      {
        name: 'R',
        color: 'blue-text-gradient',
      },
    ],
    image: fraud,
    repo: 'https://github.com/Gsalive/Credit-Card-Fraud-Detection-Using-R',
  
  },
  {
    id: 'project-5',
    name: 'Smart-Parking System',
    description:
      'A Parking system with integrated license plate detection and navigation system to ease the parking process.',
    tags: [
      {
        name: 'c,python',
        color: 'blue-text-gradient',
      },
    ],
    image: smartparking,
    repo: 'https://github.com/Gsalive/Smart-parking-system-with-license-plate-detection-',
  
  },
];

export { services, technologies, projects };
