// Data
import { heroes } from '../data/heroes';

class Handler {
  static getHeroesByPublisher = publisher => {
    const publishers = ['DC Comics', 'Marvel Comics'];

    if(!publishers.includes(publisher)) {
      throw Error('Publisher not found.');
    }

    return heroes.filter(hero => (hero.publisher === publisher));
  }

  static getHeroById = id => heroes.find(hero => (hero.id === id));

  static getHeroByName = (name = '') => {
    if( name === '') return [];
    return heroes.filter(hero => hero.superhero.toLocaleLowerCase().includes(name.toLocaleLowerCase()));
  }
}

export default Handler;
