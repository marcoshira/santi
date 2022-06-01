import { ProductCardArrayProps } from '../../shared-types/shared-types';

export default {
  id: '3',
  attributes: {
    name: 'Breath of the Wild',
    description:
      'Entre num mundo de aventuras Esqueça tudo o que sabe sobre os jogos The legend of zelda. Entre num mundo de descoberta, exploração e aventura em The legend of zelda: Breath of the Wild, o novo título que quebra com padrões da série. Atravesse campos, florestas e montanhas para descobrir o que aconteceu ao reino arruinado de Hyrule nesta deslumbrante aventura ao ar livre. Explora Hyrule com total liberdade Escale torres e picos de montanhas em busca de novos destinos e defina seu próprio caminho para chegar lá e entrar na floresta. Enquanto isso combata inimigos gigantescos, cace bestas selvagens e reúna ingredientes para os alimentos e as poções que precisará para sobreviver nesta missão. Mais de 100 Shrines of Trials para descobrir e explorar Há santuários espalhados por todo o mundo de Hyrule, santuários esses que terá que descobrir e na ordem que quiser. Procure-os de diversas maneiras e em cada resolva uma variedade de quebra-cabeças.',
    price: 29999,
    stock: 29,
    cover: {
      data: {
        attributes: {
          url: 'https://res.cloudinary.com/djqrityvi/image/upload/v1652741206/botw_f71c3467c2.jpg',
        },
      },
    },
    product_type: {
      data: {
        id: '3',
        attributes: {
          title: 'Switch Game',
        },
      },
    },
  },
} as ProductCardArrayProps;
