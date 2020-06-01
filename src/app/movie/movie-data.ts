import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Movie } from './movie';

export class MovieData implements InMemoryDbService {

  createDb() {
    const movies: Movie[] = [
      {
        id: 1,
        approvalRating: 0.97,
        description: 'A meek hobbit of the Shire and eight companions set out on a journey to Mount Doom to destroy the One Ring and the dark lord Sauron.',
        director: 'Peter Jackson',
        imageurl: 'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_UY1200_CR89,0,630,1200_AL_.jpg',
        mpaa: 'pg-13',
        price: 12.95,
        releaseDate: '2001-12-19T00:00:00',
        starRating: 4.88,
        title: 'The Lord of the Rings: The Fellowship of the Ring',
        category: 'action',
        tags: ['action', 'adventure', 'hobbits']
      }
      ,
      {
        id: 2,
        director: 'Peter Jackson',
        description: 'While Frodo and Sam edge closer to Mordor with the help of the shifty Gollum, the divided fellowship makes a stand against Sauron\'s new ally, Saruman, and his hordes of Isengard.',
        imageurl: 'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY1200_CR96,0,630,1200_AL_.jpg',
        mpaa: 'pg-13',
        releaseDate: '2002-12-18T00:00:00',
        title: 'The Lord of the Rings: The Two Towers',
        price: 14.95,
        starRating: 4.2,
        approvalRating: 0.94,
        category: 'action',
        tags: ['action', 'adventure', 'hobbits']
      },
      {
        id: 3,
        director: 'Peter Jackson',
        description: 'Gandalf and Aragorn lead the World of Men against Sauron\'s army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.',
        imageurl: 'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY1200_CR90,0,630,1200_AL_.jpg',
        mpaa: 'pg-13',
        releaseDate: '2003-12-17T00:00:00',
        title: 'The Lord of the Rings: The Return of the King',
        price: 15.95,
        starRating: 4.5,
        approvalRating: 0.9895,
        category: 'action',
        tags: ['action', 'adventure', 'hobbits']
      },
      {
        id: 4,
        director: 'Quentin Tarantino',
        description: 'The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.',
        imageurl: 'https://upload.wikimedia.org/wikipedia/el/a/ad/Pulp_Fiction_film_poster.jpg',
        mpaa: 'pg-17',
        releaseDate: '1995-03-02T00:00:00',
        title: 'Pulp Fiction',
        price: 9.95,
        starRating: 4.9,
        approvalRating: 0.9295,
        category: 'crime',
        tags: ['action', 'animation']
      },
      {
        id: 5,
        director: 'Chris Columbus',
        description: 'When aliens misinterpret video feeds of classic arcade games as a declaration of war, they attack the Earth in the form of the video games.',
        imageurl: 'https://lh3.googleusercontent.com/XClfwJSkybp524JSEQZP_2deUdHnq7wDf1usoDCMhpNnqjA6cJyDAk75EBP6jRuWOogg',
        mpaa: 'pg-13',
        releaseDate: '2015-07-24T00:00:00',
        title: 'Pixels',
        price: 5.59,
        starRating: 2.7,
        approvalRating: 0.17,
        category: 'animation',
        tags: ['action', 'animation']
      }
    ];
    return { movies };
  }
}
