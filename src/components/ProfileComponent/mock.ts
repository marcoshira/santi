import { UserProps } from '../../shared-types/shared-types';

export default {
  usersPermissionsUser: {
    data: {
      id: '2',
      attributes: {
        username: 'luisa',
        email: 'lulusantiago00@gmail.com',
        confirmed: false,
        address: 'Rua Barão de spdaksadopk',
        phone: '2222 2222',
        createdAt: '2022-05-16T21:40:09.110Z',
        cart_quantity: {
          data: {
            id: '6',
            attributes: {
              cartQuantity: [
                {
                  id: '11',
                  quantity: 5,
                  product: {
                    data: {
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
                    },
                  },
                },
                {
                  id: '10',
                  quantity: 5,
                  product: {
                    data: {
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
                    },
                  },
                },
              ],
            },
          },
        },
        favorite: {
          data: {
            id: '4',
            attributes: {
              products: {
                data: [
                  {
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
                  },
                  {
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
                  },
                  {
                    id: '5',
                    attributes: {
                      name: 'Pokémon Legends: Arceus',
                      description:
                        'Prepare-se para um novo tipo de grande aventura Pokémon em Pokémon™ Legends: Arceus, um jogo totalmente novo da Game Freak que combina ação e exploração com as raízes de RPG da série Pokémon. Embarque em missões de pesquisa na antiga região de Hisui. Explore extensões naturais para capturar Pokémon selvagens, aprendendo seu comportamento, aproximando-se sorrateiramente e jogando uma Poké Ball™ bem direcionada. Você também pode jogar a Poké Ball contendo seu Pokémon aliado perto de um Pokémon selvagem para entrar na batalha sem problemas.',
                      price: 34999,
                      stock: 16,
                      cover: {
                        data: {
                          attributes: {
                            url: 'https://res.cloudinary.com/djqrityvi/image/upload/v1652885725/pokemon_arc_6e9e8de332.jpg',
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
                  },
                ],
              },
            },
          },
        },
        puchase: {
          data: {
            id: '5',
            attributes: {
              Item: [
                {
                  id: '11',
                  Quantity: 2,
                  date: '2022-05-01',
                  product: {
                    data: {
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
                    },
                  },
                },
                {
                  id: '10',
                  Quantity: 2,
                  date: '2022-05-01',
                  product: {
                    data: {
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
                    },
                  },
                },
              ],
            },
          },
        },
      },
    },
  },
} as UserProps;
