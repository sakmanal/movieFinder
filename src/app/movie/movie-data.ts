import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Movie } from './movie';

export class MovieData implements InMemoryDbService {

  createDb() {
    const movies: Movie[] = [
      {
        id: 1,
        approvalRating: 0.97,
        // tslint:disable-next-line: max-line-length
        description: 'A meek hobbit of the Shire and eight companions set out on a journey to Mount Doom to destroy the One Ring and the dark lord Sauron.',
        director: 'Peter Jackson',
        // tslint:disable-next-line: max-line-length
        imageurl: 'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_UY1200_CR89,0,630,1200_AL_.jpg',
        mpaa: 'PG-13',
        releaseDate: '2001-12-19T00:00:00',
        starRating: 4.88,
        title: 'The Lord of the Rings: The Fellowship of the Ring',
        category: 'Action',
        tags: ['Action', 'Adventure', 'Hobbits']
      },
      {
        id: 2,
        director: 'Quentin Tarantino',
        // tslint:disable-next-line: max-line-length
        description: 'The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.',
        // tslint:disable-next-line: max-line-length
        imageurl: 'https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY1200_CR97,0,630,1200_AL_.jpg',
        mpaa: 'R',
        releaseDate: '1995-03-01T00:00:00',
        title: 'Pulp Fiction',
        starRating: 4.5,
        approvalRating: 0.94,
        category: 'Crime',
        tags: ['Crime', 'Drama']
      },
      {
        id: 3,
        director: 'Luc Besson',
        // tslint:disable-next-line: max-line-length
        description: `Mathilda, a 12-year-old girl, is reluctantly taken in by Léon, a professional assassin, after her family is murdered. An unusual relationship forms as she becomes his protégée and learns the assassin's trade.`,
        // tslint:disable-next-line: max-line-length
        imageurl: 'https://m.media-amazon.com/images/M/MV5BODllNWE0MmEtYjUwZi00ZjY3LThmNmQtZjZlMjI2YTZjYmQ0XkEyXkFqcGdeQXVyNTc1NTQxODI@._V1_UY1200_CR88,0,630,1200_AL_.jpg',
        mpaa: 'R',
        releaseDate: '1995-04-06T00:00:00',
        title: 'Léon',
        starRating: 3.6,
        approvalRating: 0.64,
        category: 'Crime',
        tags: ['Action', 'Crime', 'Drama']
      },
      {
        id: 4,
        director: 'Tony Kaye',
        description: 'A former neo-nazi skinhead tries to prevent his younger brother from going down the same wrong path that he did.',
        // tslint:disable-next-line: max-line-length
        imageurl: 'https://m.media-amazon.com/images/M/MV5BZjA0MTM4MTQtNzY5MC00NzY3LWI1ZTgtYzcxMjkyMzU4MDZiXkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_UY1200_CR90,0,630,1200_AL_.jpg',
        mpaa: 'K-17',
        releaseDate: '1998-12-18T00:00:00',
        title: 'American History X',
        starRating: 3.7,
        approvalRating: 0.62,
        category: 'Drama',
        tags: ['Drama']
      },
      {
        id: 5,
        director: 'Roman Polanski',
        description: 'A Polish Jewish musician struggles to survive the destruction of the Warsaw ghetto of World War II.',
        // tslint:disable-next-line: max-line-length
        imageurl: 'https://m.media-amazon.com/images/M/MV5BOWRiZDIxZjktMTA1NC00MDQ2LWEzMjUtMTliZmY3NjQ3ODJiXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UY1200_CR119,0,630,1200_AL_.jpg',
        mpaa: 'R',
        releaseDate: '2002-10-19T00:00:00',
        title: 'The Pianist',
        starRating: 3.7,
        approvalRating: 0.85,
        category: 'Drama',
        tags: ['Biography', 'Drama', 'Music' ]
      },
      {
        id: 6,
        director: 'Martin Scorsese',
        // tslint:disable-next-line: max-line-length
        description: 'An undercover cop and a mole in the police attempt to identify each other while infiltrating an Irish gang in South Boston.',
        imageurl: 'https://m.media-amazon.com/images/M/MV5BMTI1MTY2OTIxNV5BMl5BanBnXkFtZTYwNjQ4NjY3._V1_.jpg',
        mpaa: 'K-13',
        releaseDate: '2006-11-23T00:00:00',
        title: 'The Departed',
        starRating: 3.7,
        approvalRating: 0.85,
        category: 'Crime',
        tags: ['Crime', 'Drama', 'Thriller']
      },
      {
        id: 7,
        director: 'Christopher Nolan',
        // tslint:disable-next-line: max-line-length
        description: 'After a tragic accident, two stage magicians engage in a battle to create the ultimate illusion while sacrificing everything they have to outwit each other.',
        imageurl: 'https://m.media-amazon.com/images/M/MV5BMjA4NDI0MTIxNF5BMl5BanBnXkFtZTYwNTM0MzY2._V1_.jpg',
        mpaa: 'PG-13',
        releaseDate: '2006-12-26T00:00:00',
        title: 'The Prestige',
        starRating: 3.8,
        approvalRating: 0.66,
        category: 'Mystery',
        tags: ['Drama', 'Mystery', 'Sci-Fi' ]
      },
      {
        id: 8,
        director: 'Todd Phillips',
        // tslint:disable-next-line: max-line-length
        description: 'In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime. This path brings him face-to-face with his alter-ego: the Joker.',
        // tslint:disable-next-line: max-line-length
        imageurl: 'https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UY1200_CR90,0,630,1200_AL_.jpg',
        mpaa: 'A-18',
        releaseDate: '2019-10-03T00:00:00',
        title: 'Joker',
        starRating: 3.8,
        approvalRating: 0.59,
        category: 'Drama',
        tags: ['Crime', 'Drama', 'Thriller']
      },
      {
        id: 9,
        director: 'Jonathan Demme',
        // tslint:disable-next-line: max-line-length
        description: 'A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer, a madman who skins his victims.',
        // tslint:disable-next-line: max-line-length
        imageurl: 'https://m.media-amazon.com/images/M/MV5BNjNhZTk0ZmEtNjJhMi00YzFlLWE1MmEtYzM1M2ZmMGMwMTU4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UY1200_CR91,0,630,1200_AL_.jpg',
        mpaa: 'NC-17',
        releaseDate: '1991-03-22T00:00:00',
        title: 'The Silence of the Lambs',
        starRating: 3.9,
        approvalRating: 0.85,
        category: 'Thriller',
        tags: ['Crime', 'Drama', 'Thriller']
      },
      {
        id: 10,
        director: 'David Fincher',
        description: 'Two detectives, a rookie and a veteran, hunt a serial killer who uses the seven deadly sins as his motives.',
        // tslint:disable-next-line: max-line-length
        imageurl: 'https://m.media-amazon.com/images/M/MV5BOTUwODM5MTctZjczMi00OTk4LTg3NWUtNmVhMTAzNTNjYjcyXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UY1200_CR69,0,630,1200_AL_.jpg',
        mpaa: 'R',
        releaseDate: '1996-02-09T00:00:00',
        title: 'Seven',
        starRating: 3.9,
        approvalRating: 0.65,
        category: 'Crime',
        tags: ['Crime', 'Drama', 'Mystery']
      },
      {
        id: 11,
        director: 'Frank Darabont',
        // tslint:disable-next-line: max-line-length
        description: 'The lives of guards on Death Row are affected by one of their charges: a black man accused of child murder and rape, yet who has a mysterious gift.',
        imageurl: 'https://m.media-amazon.com/images/M/MV5BMTUxMzQyNjA5MF5BMl5BanBnXkFtZTYwOTU2NTY3._V1_.jpg',
        mpaa: 'R',
        releaseDate: '2000-02-11T00:00:00',
        title: 'The Green Mile',
        starRating: 4.0,
        approvalRating: 0.61,
        category: 'Drama',
        tags: ['Crime', 'Drama', 'Fantasy']
      },
      {
        id: 12,
        director: 'Steven Spielberg',
        // tslint:disable-next-line: max-line-length
        description: 'Following the Normandy Landings, a group of U.S. soldiers go behind enemy lines to retrieve a paratrooper whose brothers have been killed in action.',
        // tslint:disable-next-line: max-line-length
        imageurl: 'https://m.media-amazon.com/images/M/MV5BZjhkMDM4MWItZTVjOC00ZDRhLThmYTAtM2I5NzBmNmNlMzI1XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_UY1200_CR93,0,630,1200_AL_.jpg',
        mpaa: 'R',
        releaseDate: '1998-10-16T00:00:00',
        title: 'Saving Private Ryan',
        starRating: 4.0,
        approvalRating: 0.91,
        category: 'Drama',
        tags: ['Drama', 'War']
      },
      {
        id: 13,
        director: 'Fernando Meirelles',
        description: 'In the slums of Rio, two kids paths diverge as one struggles to become a photographer and the other a kingpin.',
        // tslint:disable-next-line: max-line-length
        imageurl: 'https://m.media-amazon.com/images/M/MV5BOTMwYjc5ZmItYTFjZC00ZGQ3LTlkNTMtMjZiNTZlMWQzNzI5XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY1200_CR87,0,630,1200_AL_.jpg',
        mpaa: 'R',
        releaseDate: '2003-01-31T00:00:00',
        title: 'City of God',
        starRating: 4.0,
        approvalRating: 0.79,
        category: 'Crime',
        tags: ['Crime', 'Drama']
      },
      {
        id: 14,
        director: 'Christopher Nolan',
        description: `A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.`,
        // tslint:disable-next-line: max-line-length
        imageurl: 'https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UY1200_CR90,0,630,1200_AL_.jpg',
        mpaa: 'PG-13',
        releaseDate: '2014-11-06T00:00:00',
        title: 'Interstellar',
        starRating: 4.1,
        approvalRating: 0.74,
        category: 'Adventure',
        tags: ['Adventure', 'Drama', 'Sci-Fi']
      },
      {
        id: 15,
        director: 'Peter Jackson',
        // tslint:disable-next-line: max-line-length
        description: 'Gandalf and Aragorn lead the World of Men against Sauron\'s army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.',
        // tslint:disable-next-line: max-line-length
        imageurl: 'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY1200_CR90,0,630,1200_AL_.jpg',
        mpaa: 'PG-13',
        releaseDate: '2003-12-17T00:00:00',
        title: 'The Lord of the Rings: The Return of the King',
        starRating: 4.5,
        approvalRating: 0.98,
        category: 'Action',
        tags: ['Action', 'Adventure', 'Hobbits']
      },
      {
        id: 16,
        director: 'Bong Joon Ho',
        // tslint:disable-next-line: max-line-length
        description: 'Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.',
        // tslint:disable-next-line: max-line-length
        imageurl: 'https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_UY1200_CR90,0,630,1200_AL_.jpg',
        mpaa: 'R',
        releaseDate: '2019-10-17T00:00:00',
        title: 'Parasite',
        starRating: 4.1,
        approvalRating: 0.96,
        category: 'Comedy',
        tags: ['Comedy', 'Drama', 'Thriller' ]
      },
      {
        id: 17,
        director: 'Irvin Kershner',
        // tslint:disable-next-line: max-line-length
        description: 'After the Rebels are brutally overpowered by the Empire on the ice planet Hoth, Luke Skywalker begins Jedi training with Yoda, while his friends are pursued by Darth Vader and a bounty hunter named Boba Fett all over the galaxy.',
        // tslint:disable-next-line: max-line-length
        imageurl: 'https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY1200_CR70,0,630,1200_AL_.jpg',
        mpaa: 'PG',
        releaseDate: '1980-12-19T00:00:00',
        title: 'Star Wars: Episode V - The Empire Strikes Back',
        starRating: 4.2,
        approvalRating: 0.82,
        category: 'Action',
        tags: ['Action', 'Adventure', 'Fantasy']
      },
      {
        id: 18,
        director: 'Martin Scorsese',
        // tslint:disable-next-line: max-line-length
        description: 'The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners Jimmy Conway and Tommy DeVito in the Italian-American crime syndicate.',
        // tslint:disable-next-line: max-line-length
        imageurl: 'https://m.media-amazon.com/images/M/MV5BY2NkZjEzMDgtN2RjYy00YzM1LWI4ZmQtMjIwYjFjNmI3ZGEwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY1200_CR85,0,630,1200_AL_.jpg',
        mpaa: 'K-16',
        releaseDate: '1990-10-11T00:00:00',
        title: 'Goodfellas',
        starRating: 4.3,
        approvalRating: 0.9,
        category: 'Biography',
        tags: ['Biography', 'Crime', 'Drama' ]
      },
      {
        id: 19,
        director: 'Lana Wachowski ',
        // tslint:disable-next-line: max-line-length
        description: 'When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence.',
        // tslint:disable-next-line: max-line-length
        imageurl: 'https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UY1200_CR84,0,630,1200_AL_.jpg',
        mpaa: 'K-8',
        releaseDate: '1999-08-20T00:00:00',
        title: 'The Matrix',
        starRating: 4.3,
        approvalRating: 0.73,
        category: 'Action',
        tags: ['Action', 'Sci-Fi']
      },
      {
        id: 20,
        director: 'Robert Zemeckis',
        // tslint:disable-next-line: max-line-length
        description: 'The presidencies of Kennedy and Johnson, the events of Vietnam, Watergate and other historical events unfold through the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.',
        // tslint:disable-next-line: max-line-length
        imageurl: 'https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UY1200_CR99,0,630,1200_AL_.jpg',
        mpaa: 'PG-13',
        releaseDate: '1994-10-13T00:00:00',
        title: 'Forrest Gump',
        starRating: 4.4,
        approvalRating: 0.82,
        category: 'Drama',
        tags: ['Drama', 'Romance']
      },
      {
        id: 21,
        director: 'David Fincher',
        // tslint:disable-next-line: max-line-length
        description: 'An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.',
        // tslint:disable-next-line: max-line-length
        imageurl: 'https://m.media-amazon.com/images/M/MV5BMmEzNTkxYjQtZTc0MC00YTVjLTg5ZTEtZWMwOWVlYzY0NWIwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY1200_CR85,0,630,1200_AL_.jpg',
        mpaa: 'R',
        releaseDate: '2000-02-18T00:00:00',
        title: 'Fight Club',
        starRating: 4.4,
        approvalRating: 0.66,
        category: 'Drama',
        tags: ['Drama']
      },
      {
        id: 22,
        director: 'Christopher Nolan',
        // tslint:disable-next-line: max-line-length
        description: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.',
        imageurl: 'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg',
        mpaa: 'PG-13',
        releaseDate: '2010-08-24T00:00:00',
        title: 'Inception',
        starRating: 4.5,
        approvalRating: 0.74,
        category: 'Action',
        tags: [ 'Action', 'Adventure', 'Sci-Fi' ]
      },
      {
        id: 23,
        director: 'Christopher Nolan',
        // tslint:disable-next-line: max-line-length
        description: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
        imageurl: 'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_UY1200_CR90,0,630,1200_AL_.jpg',
        mpaa: 'K-13',
        releaseDate: '2008-07-17T00:00:00',
        title: 'The Dark Knight',
        starRating: 4.8,
        approvalRating: 0.84,
        category: 'Action',
        tags: [ 'Action', 'Crime', 'Drama' ]
      },
      {
        id: 24,
        director: 'Francis Ford Coppola',
        description: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
        // tslint:disable-next-line: max-line-length
        imageurl: 'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY1200_CR107,0,630,1200_AL_.jpg',
        mpaa: 'R',
        releaseDate: '1972-09-29T00:00:00',
        title: 'The Godfather',
        starRating: 4.8,
        approvalRating: 1.0,
        category: 'Crime',
        tags: ['Crime', 'Drama']
      },
      {
        id: 25,
        director: 'Frank Darabont',
        // tslint:disable-next-line: max-line-length
        description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
        // tslint:disable-next-line: max-line-length
        imageurl: 'https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UY1200_CR89,0,630,1200_AL_.jpg',
        mpaa: 'R',
        releaseDate: '1995-04-07T00:00:00',
        title: 'The Shawshank Redemption',
        starRating: 4.9,
        approvalRating: 0.8,
        category: 'Drama',
        tags: ['Drama']
      },
      {
        id: 26,
        director: 'Peter Jackson',
        // tslint:disable-next-line: max-line-length
        description: 'While Frodo and Sam edge closer to Mordor with the help of the shifty Gollum, the divided fellowship makes a stand against Sauron\'s new ally, Saruman, and his hordes of Isengard.',
        // tslint:disable-next-line: max-line-length
        imageurl: 'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY1200_CR96,0,630,1200_AL_.jpg',
        mpaa: 'PG-13',
        releaseDate: '2002-12-18T00:00:00',
        title: 'The Lord of the Rings: The Two Towers',
        starRating: 4.2,
        approvalRating: 0.94,
        category: 'Action',
        tags: ['Action', 'Adventure', 'Hobbits']
      },
      {
        id: 27,
        director: 'Roberto Benigni',
        // tslint:disable-next-line: max-line-length
        description: 'When an open-minded Jewish librarian and his son become victims of the Holocaust, he uses a perfect mixture of will, humor, and imagination to protect his son from the dangers around their camp.',
        imageurl: 'https://images-na.ssl-images-amazon.com/images/I/51hjmAYvbKL._SX323_BO1,204,203,200_.jpg',
        mpaa: 'K-12',
        releaseDate: '1998-11-06T00:00:00',
        title: 'La vita è bella',
        starRating: 3.9,
        approvalRating: 0.59,
        category: 'Comedy',
        tags: ['Comedy', 'Drama', 'Romance']
      },
      {
        id: 28,
        director: 'Robert Zemeckis',
        // tslint:disable-next-line: max-line-length
        description: 'Marty McFly, a 17-year-old high school student, is accidentally sent thirty years into the past in a time-traveling DeLorean invented by his close friend, the eccentric scientist Doc Brown.',
        // tslint:disable-next-line: max-line-length
        imageurl: 'https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UY1200_CR71,0,630,1200_AL_.jpg',
        mpaa: 'K-12',
        releaseDate: '1985-08-05T00:00:00',
        title: 'Back to the Future',
        starRating: 3.5,
        approvalRating: 0.87,
        category: 'Comedy',
        tags: ['Adventure', 'Comedy', 'Sci-Fi' ]
      },
      {
        id: 29,
        director: 'Frank Darabont',
        // tslint:disable-next-line: max-line-length
        description: `With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.`,
        imageurl: 'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_UY1200_CR90,0,630,1200_AL_.jpg',
        mpaa: 'K-12',
        releaseDate: '2019-04-24T00:00:00',
        title: 'Avengers: Endgame',
        starRating: 3.8,
        approvalRating: 0.78,
        category: 'Action',
        tags: ['Action', 'Adventure', 'Drama']
      },
      {
        id: 30,
        director: 'Ridley Scott',
        // tslint:disable-next-line: max-line-length
        description: `After a space merchant vessel receives an unknown transmission as a distress call, one of the crew is attacked by a mysterious life form and they soon realize that its life cycle has merely begun.`,
        // tslint:disable-next-line: max-line-length
        imageurl: 'https://m.media-amazon.com/images/M/MV5BMmQ2MmU3NzktZjAxOC00ZDZhLTk4YzEtMDMyMzcxY2IwMDAyXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY1200_CR92,0,630,1200_AL_.jpg',
        mpaa: 'K-16',
        releaseDate: '1979-11-05T00:00:00',
        title: 'Alien',
        starRating: 3.5,
        approvalRating: 0.89,
        category: 'Horror',
        tags: ['Horror', 'Sci-Fi']
      },
      {
        id: 31,
        director: 'Quentin Tarantino',
        // tslint:disable-next-line: max-line-length
        description: `In Nazi-occupied France during World War II, a plan to assassinate Nazi leaders by a group of Jewish U.S. soldiers coincides with a theatre owner's vengeful plans for the same.`,
        // tslint:disable-next-line: max-line-length
        imageurl: 'https://m.media-amazon.com/images/M/MV5BOTJiNDEzOWYtMTVjOC00ZjlmLWE0NGMtZmE1OWVmZDQ2OWJhXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_UY1200_CR90,0,630,1200_AL_.jpg',
        mpaa: 'R',
        releaseDate: '2009-08-20T00:00:00',
        title: 'Inglourious Basterds',
        starRating: 3.8,
        approvalRating: 0.69,
        category: 'Adventure',
        tags: ['Adventure', 'Drama', 'War']
      },
      {
        id: 32,
        director: 'Sam Mendes',
        // tslint:disable-next-line: max-line-length
        description: `A sexually frustrated suburban father has a mid-life crisis after becoming infatuated with his daughter's best friend.`,
        // tslint:disable-next-line: max-line-length
        imageurl: 'https://m.media-amazon.com/images/M/MV5BNTBmZWJkNjctNDhiNC00MGE2LWEwOTctZTk5OGVhMWMyNmVhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg',
        mpaa: 'R',
        releaseDate: '2000-02-18T00:00:00',
        title: 'American Beauty',
        starRating: 3.3,
        approvalRating: 0.84,
        category: 'Drama',
        tags: ['Drama']
      },
      {
        id: 33,
        director: 'James Cameron',
        // tslint:disable-next-line: max-line-length
        description: 'A cyborg, identical to the one who failed to kill Sarah Connor, must now protect her teenage son, John Connor, from a more advanced and powerful cyborg.',
        // tslint:disable-next-line: max-line-length
        imageurl: 'https://m.media-amazon.com/images/M/MV5BMGU2NzRmZjUtOGUxYS00ZjdjLWEwZWItY2NlM2JhNjkxNTFmXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UY1200_CR88,0,630,1200_AL_.jpg',
        mpaa: 'R',
        releaseDate: '1991-12-12T00:00:00',
        title: 'Terminator 2: Judgment Day',
        starRating: 3.5,
        approvalRating: 0.75,
        category: 'Sci-Fi',
        tags: ['Action', 'Sci-Fi']
      },
    ];
    return { movies };
  }
}
