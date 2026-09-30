import { Injectable } from '@nestjs/common';

@Injectable()
export class JuegosService {
  private juegos = [
    { id: 1, titulo: 'Zelda: Breath of the Wild', genero: 'aventura' },
    { id: 2, titulo: 'Super Mario Odyssey', genero: 'plataformas' },
    { id: 3, titulo: 'Elden Ring', genero: 'rpg' },
    { id: 4, titulo: 'Uncharted 4', genero: 'aventura' },
  ];

  findAll(genero?: string) {
    if (!genero) {
      return this.juegos;
    }
    return this.juegos.filter((j) => j.genero.toLowerCase() === genero.toLowerCase());
  }
}