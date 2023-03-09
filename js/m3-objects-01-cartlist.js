//  Работаем с коллекцией товаров в корзине:
// - getItems()
//  - add(product)
//  - remove(productName)
// - clear()
//  - countTotalPrice()
//  - countTotalPrice()
// - decreaseQuantity(productName)

// { name: 'apple', price: 50 }
// { name: 'berry', price: 70 }
// { name: 'lime', price: 60 }
// { name: 'tomato', price: 110 }

const cart = {
  items: [],
  getItems() {
    return this.items;
  },
  add(product) {
    for (const item of this.items) {
      if (item.name === product.name) {
        // console.log("This product is in items", product.name);
        item.quantity += 1;

        return;
      }
    }
    const newProduct = {
      ...product,
      quantity: 1,
    };

    this.items.push(newProduct);
  },
  remove(productName) {
    const { items } = this;

    for (let i = 0; i < items.length; i += 1) {
      // const item = this.items[i];
      const item = items[i];

      if (productName === item.name) {
        // console.log('Нашли такой продукт: ', productName);
        // console.log('индекс: ', i);
        items.splice(i, 1);
      }
    }
  },
  clear() {
    this.items = [];
  },
  countTotalPrice() {
    console.log(this.items);
    const { items } = this;
    let total = 0;

    for (const { price, quantity } of items) {
      total += price * quantity;
    }

    // for (const item of this.items) {
    //   total += item.price * item.quantity;
    // }

    return total;
  },
  increaseQuantity(productName) {
    for (const item of this.items) {
      if (item.name === productName) {
        item.quantity += 1;
      }
    }
  },
  decreaseQuantity(productName) {
    for (const item of this.items) {
      if (item.name === productName) {
        item.quantity -= 1;
      }
    }
  },
};

// console.log(cart.getItems());

cart.add({ name: "apple", price: 50 });
cart.add({ name: "apple", price: 50 });
cart.add({ name: "apple", price: 50 });
cart.add({ name: "berry", price: 70 });
cart.add({ name: "lime", price: 60 });
cart.add({ name: "tomato", price: 110 });

console.table(cart.getItems());

console.log("Total: ", cart.countTotalPrice());

cart.increaseQuantity("berry");
cart.increaseQuantity("lime");
cart.increaseQuantity("tomato");
cart.increaseQuantity("lime");

cart.decreaseQuantity("apple");
cart.decreaseQuantity("lime");

console.table(cart.getItems());

console.log("Total: ", cart.countTotalPrice());

// cart.remove("apple");
// console.table(cart.getItems());

// cart.clear();
// console.table(cart.getItems());
