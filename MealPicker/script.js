// Factory function for creating different restaurant menu objects
const restMenu = (name) => {
	return {
  	_name: name,
    _courses: {
    	_appetizers: [],
      _mains: [],
      _desserts: [],
      get appetizers() {
        return this._appetizers;
      },
      set appetizers(dish) {
        this._appetizers.push(dish);
      },
      get mains() {
        return this._mains;
      },
      set mains(dish) {
        this._mains.push(dish);
      },
      get desserts() {
        return this._desserts;
      },
      set desserts(dish) {
        this._desserts.push(dish)
      }
    },
    get name() {
      return this._name;
    },
    get courses() {
      return {
        appetizers: this._courses.appetizers,
        mains: this._courses.mains,
        desserts: this._courses.desserts
      };
    },
    addDishToCourse(courseName, dishName, dishPrice) {
      const dish = { name: dishName, price: dishPrice };
      if (courseName.toLowerCase() === 'appetizers' ||
          courseName.toLowerCase() === 'mains' ||
          courseName.toLowerCase() === 'desserts') {
            this._courses[courseName] = dish;
          } else { console.log('Invalid course name') };
    },
    getRandomDishFromCourse(courseName) {
      const dishes = this.courses[courseName];
      const index = Math.floor(Math.random() * dishes.length);
      return dishes[index];
    },
    generateRandomMeal() {
      const app = this.getRandomDishFromCourse('appetizers');
      const main = this.getRandomDishFromCourse('mains');
      const dessert = this.getRandomDishFromCourse('desserts');
      const subtotal = app.price + main.price + dessert.price;
      const tax = subtotal * .08875;
      const tip = (subtotal + tax) * .25;
      const total = subtotal + tax + tip;
      return `*****${this.name}*****\nYour random meal: \nAppetizer: ${app.name} \t$${app.price.toFixed(2)} \nMain: ${main.name} \t\t$${main.price.toFixed(2)} \nDessert: ${dessert.name} \t$${dessert.price.toFixed(2)} \nSubtotal: \t$${subtotal.toFixed(2)} \nTax: \t$${tax.toFixed(2)} \nTip: \t$${tip.toFixed(2)} \nTotal: \t$${total.toFixed(2)}`
    }
  };
};

const mamasushi = restMenu('Mamasushi');

mamasushi.addDishToCourse('appetizers',
                     'Gyoza “Dumplings”',
                     12);
mamasushi.addDishToCourse('appetizers',
                     'Satay Trio (Skewers)',
                     16);
mamasushi.addDishToCourse('appetizers',
                     'Baby Back Ribs',
                     14);
mamasushi.addDishToCourse('appetizers',
                     'Panko Chicken',
                     14);

mamasushi.addDishToCourse('mains',
                     'Villa Mella',
                     14);
mamasushi.addDishToCourse('mains',
                     'Conuco',
                     16);
mamasushi.addDishToCourse('mains',
                     'El Campesino',
                     14);
mamasushi.addDishToCourse('mains',
                     'El Fuerte',
                     17);
mamasushi.addDishToCourse('mains',
                     'El Montro',
                     17);
mamasushi.addDishToCourse('mains',
                     'Villa Mella',
                     14);
mamasushi.addDishToCourse('mains',
                     'Jack Veneno',
                     16);
mamasushi.addDishToCourse('mains',
                     'Tre Golpe',
                     18);
mamasushi.addDishToCourse('mains',
                     'El Tolete',
                     20);

mamasushi.addDishToCourse('desserts',
                     'Crispy Cheesecake Roll',
                     10);
mamasushi.addDishToCourse('desserts',
                     'Red Velvet Cake',
                     10);
mamasushi.addDishToCourse('desserts',
                     'Coconut Flan',
                     10);

console.log(mamasushi.generateRandomMeal())






// without getters and setters
const restMenu1 = (name) => {
	return {
  	_name: name,
    _courses: {
    	appetizers: [],
      mains: [],
      desserts: [],
    },
    get name() {
      return this._name;
    },
    get courses() {
      return {
        appetizers: this._courses.appetizers,
        mains: this._courses.mains,
        desserts: this._courses.desserts
      };
    },
    addDishToCourse(courseName, name, price) {
      if (courseName.toLowerCase() === 'appetizers' ||
          courseName.toLowerCase() === 'mains' ||
          courseName.toLowerCase() === 'desserts') {
            this._courses[courseName].push( { name, price } );
          } else { console.log('Invalid course name') };
    },
    getRandomDishFromCourse(courseName) {
      const dishes = this.courses[courseName];
      const index = Math.floor(Math.random() * dishes.length);
      return dishes[index];
    },
    generateRandomMeal() {
      const app = this.getRandomDishFromCourse('appetizers');
      const main = this.getRandomDishFromCourse('mains');
      const dessert = this.getRandomDishFromCourse('desserts');
      const subtotal = app.price + main.price + dessert.price;
      const tax = subtotal * .08875;
      const tip = (subtotal + tax) * .25;
      const total = subtotal + tax + tip;
      return `*****${this.name}*****\nYour random meal: \nAppetizer: ${app.name} \t$${app.price.toFixed(2)} \nMain: ${main.name} \t\t$${main.price.toFixed(2)} \nDessert: ${dessert.name} \t$${dessert.price.toFixed(2)} \nSubtotal: \t$${subtotal.toFixed(2)} \nTax: \t$${tax.toFixed(2)} \nTip: \t$${tip.toFixed(2)} \nTotal: \t$${total.toFixed(2)}`
    }
  };
};

const hi = restMenu1('hi');
hi.addDishToCourse('appetizers',
                     'Gyoza “Dumplings”',
                     12);
hi.addDishToCourse('appetizers',
                     'Satay Trio (Skewers)',
                     16);
hi.addDishToCourse('appetizers',
                     'Baby Back Ribs',
                     14);
hi.addDishToCourse('appetizers',
                     'Panko Chicken',
                     14);

hi.addDishToCourse('mains',
                     'Villa Mella',
                     14);
hi.addDishToCourse('mains',
                     'Conuco',
                     16);
hi.addDishToCourse('mains',
                     'El Campesino',
                     14);
hi.addDishToCourse('mains',
                     'El Fuerte',
                     17);
hi.addDishToCourse('mains',
                     'El Montro',
                     17);
hi.addDishToCourse('mains',
                     'Villa Mella',
                     14);
hi.addDishToCourse('mains',
                     'Jack Veneno',
                     16);
hi.addDishToCourse('mains',
                     'Tre Golpe',
                     18);
hi.addDishToCourse('mains',
                     'El Tolete',
                     20);

hi.addDishToCourse('desserts',
                     'Crispy Cheesecake Roll',
                     10);
hi.addDishToCourse('desserts',
                     'Red Velvet Cake',
                     10);
hi.addDishToCourse('desserts',
                     'Coconut Flan',
                     10);

console.log(hi.generateRandomMeal());
