import { Injectable } from '@nestjs/common';

@Injectable()
export class MascotasService {
  private mascotas = [
    { id: 1, nombre: 'Firulais', especie: 'Perro' },
    { id: 2, nombre: 'Michi', especie: 'Gato' },
    { id: 3, nombre: 'Pipo', especie: 'Loro' },
    { id: 4, nombre: 'Nemo', especie: 'Pez' },
    { id: 5, nombre: 'Bugs Bunny', especie: 'Conejo' },
  ];

  findOne(id: number) {
    return this.mascotas.find((m) => m.id === id);
  }
}