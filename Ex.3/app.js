let team = {
  _players: [
    { firstName: 'Pablo', lastName: 'Sanchez', age: 34 },
    { firstName: 'Lionel', lastName: 'Messi', age: 23 },
    { firstName: 'Cristiano', lastName: 'Ronaldo', age: 27 },
  ],
  _games: [
    { opponent: 'Broncos', teamPoints: 42, opponentPoints: 27 },
    { opponent: 'NBA 2K21', teamPoints: 98, opponentPoints: 32 },
    { opponent: 'Madden NFL 21', teamPoints: 39, opponentPoints: 38 },
  ],

  get players() {
    return this._players;
  },

  get games() {
    return this._games;
  },

  addPlayer(firstName, lastName, age) {
    let player = {
      firstName: firstName,
      lastName: lastName,
      age: age,
    };

    this._players.push(player);
  },

  addGame(opponent, teamPoints, opponentPoints) {
    let game = {
      opponent: opponent,
      teamPoints: teamPoints,
      opponentPoints: opponentPoints,
    };

    this._games.push(game);
  },
};

team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie ', 44);
team.addPlayer('Bugs', 'Bunny ', 76);

team.addGame('Rocket League', 78, 43);
team.addGame('FIFA 21', 20, 76);
team.addGame('PGA Tour 2K21', 47, 20);

console.log(team);
