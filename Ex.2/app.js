let menu = {
  _courses: {
    _appetizers: [],
    _mains: [],
    _desserts: [],

    get appetizers() {
      return this._appetizers;
    },
    get mains() {
      return this._mains;
    },
    get desserts() {
      return this._desserts;
    },
  },

  get courses() {
    return {
      first: this._courses._appetizers,
      second: this._courses._mains,
      third: this._courses._desserts,
    };
  },

  addDishToCourse(courseName, dishName, dishPrice) {
    let dish = {
      name: dishName,
      price: dishPrice,
    };
    this._courses[courseName].push(dish);
  },

  getRandomDishFromCourse(courseName) {
    let dishes = this._courses[courseName];
    let randomIndex = Math.floor(Math.random() * dishes.length);

    return this._courses[courseName][randomIndex];
  },

  generateRandomMeal() {
    let appetizer = this.getRandomDishFromCourse('appetizers');
    let main = this.getRandomDishFromCourse('mains');
    let dessert = this.getRandomDishFromCourse('desserts');

    let totalPrice = appetizer.price + main.price + dessert.price;

    return `The random menu includes:\n${appetizer.name}\t${appetizer.price}$\n${main.name}\t${main.price}$\n${dessert.name}\t${dessert.price}$\nTotal price: ${totalPrice}$`;
  },
};

//Creating menu
menu.addDishToCourse('appetizers', 'nuts', 10);
menu.addDishToCourse('appetizers', 'peanuts', 15);
menu.addDishToCourse('appetizers', 'honey', 30);

menu.addDishToCourse('mains', 'soup', 40);
menu.addDishToCourse('mains', 'carbonara', 50);
menu.addDishToCourse('mains', 'lasagna', 60);

menu.addDishToCourse('desserts', 'cake', 50);
menu.addDishToCourse('desserts', 'ice cream', 30);
menu.addDishToCourse('desserts', 'chocolate', 20);
//--------------

meal = menu.generateRandomMeal();
console.log(meal);
