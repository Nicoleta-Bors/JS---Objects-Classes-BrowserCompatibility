//Parent class
class Media {
  constructor(title) {
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }
  get title() {
    return this._title;
  }
  get ratings() {
    return this._ratings;
  }
  get isCheckedOut() {
    return this._isCheckedOut;
  }
  set isCheckedOut(arg) {
    this._isCheckedOut = arg;
  }
  toggleCheckOutStatus() {
    this._isCheckedOut ? (this._isCheckedOut = false) : (this._isCheckedOut = true);
  }
  getAverageRating() {
    return (
      this._ratings.reduce((prevValue, curentValue) => prevValue + curentValue) /
      this._ratings.length
    ).toFixed(2);
  }
  addRating(arg) {
    this._ratings.push(arg);
  }
}

//Book class
class Book extends Media {
  constructor(title, author, pages) {
    super(title);
    this._author = author;
    this._pages = pages;
  }
  get author() {
    return this._author;
  }
  get pages() {
    return this._pages;
  }
}

//Movie class
class Movie extends Media {
  constructor(title, director, runTime) {
    super(title);
    this._director = director;
    this._runTime = runTime;
  }
  get director() {
    return this._director;
  }
  get runTime() {
    return this._runTime;
  }
}

//Artist class
class Artist extends Media {
  constructor(title, artist, songs) {
    super(title);
    this._artist = artist;
    this._songs = songs;
  }
  get artist() {
    return this._artist;
  }
  get songs() {
    return this._songs;
  }
  set songs(song) {
    this._songs.push(song);
  }
}

//an object of the Book class
const historyOfEverything = new Book('A Short History of Nearly Everything', 'Bill Bryson', 544);

historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything.isCheckedOut);

historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);

console.log(historyOfEverything.getAverageRating());

//an object of the Movie class
const speed = new Movie('Speed', 'Jan de Bont', 116);

speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut);

speed.addRating(1);
speed.addRating(1);
speed.addRating(5);

console.log(speed.getAverageRating());
