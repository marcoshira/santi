import { ProductCardArrayProps } from '../../shared-types/shared-types';

export default {
  id: '2',
  attributes: {
    name: 'PlayStation 5',
    description:
      'Jogar não tem Limites. Desfrute do carregamento extremamente rápido com o SSD de altíssima velocidade, uma imersão mais profunda com suporte a feedback tátil, gatilhos adaptáveis e áudio 3D, além de uma geração inédita de jogos incríveis para Console PlayStation®5 - PS5. Domine o poder de uma CPU e GPU personalizadas e o SSD com E/S integradas que redefinem as regras do que o console PlayStation 5 pode fazer. Descubra uma experiência de jogos mais profunda com compatibilidade com feedback tátil, disparadores adaptáveis e tecnologia de áudio 3D.',
    price: 479999,
    stock: 14,
    cover: {
      data: {
        attributes: {
          url: 'https://res.cloudinary.com/djqrityvi/image/upload/v1652740674/ps5_8a252e1eaa.jpg',
        },
      },
    },
    product_type: {
      data: {
        id: '2',
        attributes: {
          title: 'Console',
        },
      },
    },
  },
} as ProductCardArrayProps;
