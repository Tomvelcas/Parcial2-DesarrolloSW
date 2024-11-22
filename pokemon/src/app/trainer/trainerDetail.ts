import { Trainer } from './Trainer';
import { Pokemon } from '../pokemon/Pokemon';

export class TrainerDetail extends Trainer {
  experience: number;
  badges: number;

  public constructor(
    id: number,
    name: string,
    age: number,
    imageUrl: string,
    smallSnopsies: string,
    bigSnopsies: string,
    pokemons: Array<Pokemon>,
    experience: number,
    badges: number
  ) {
    super(id, name, age, imageUrl, smallSnopsies, bigSnopsies, pokemons);
    this.experience = experience;
    this.badges = badges;
  }
}
