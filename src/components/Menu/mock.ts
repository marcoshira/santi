import { MenuProps } from '.';

export default {
  menuLink: [
    {
      link: 'https://marcoshirazawa.netlify.app/',
      text: 'Contato',
      newTab: true,
      id: '1',
    },
    {
      link: 'https://landing-page-next-mmh.vercel.app/#home',
      text: 'Último projeto',
      newTab: true,
      id: '2',
    },
    {
      link: '/home/1',
      text: 'Sobre',
      newTab: false,
      id: '3',
    },
    {
      link: '/home/3',
      text: 'Serviços',
      newTab: false,
      id: '4',
    },
    {
      link: '/home/4',
      text: 'Javascript',
      newTab: false,
      id: '5',
    },
  ],
  blogName: 'Blog Project',
  logo: {
    data: {
      id: '15',
      attributes: {
        url: 'https://images.unsplash.com/photo-1648656433573-ab565ff450c0?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=800&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1MDM5MjgwMA&ixlib=rb-1.2.1&q=80&w=800',
        alternativeText: 'logo.png',
      },
    },
  },
} as MenuProps;
