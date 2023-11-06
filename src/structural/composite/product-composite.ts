export abstract class ProductComponent {
  abstract getPrice(): number;
  add(product: ProductComponent): void {}
  remove(product: ProductComponent): void {}
}

export class ProductLeaf extends ProductComponent {
  constructor(public name: string, public price: number) {
    super();
  }

  getPrice(): number {
    return this.price;
  }
}

export class ProductComposite extends ProductComponent {
  private children: ProductComponent[] = [];

  add(...products: ProductComponent[]): void {
    products.forEach((product) => this.children.push(product));
    // this.children.push(product);
  }
  remove(product: ProductComponent): void {
    const productIndex = this.children.indexOf(product);
    if (productIndex !== -1) this.children.splice(productIndex, 1);
  }
  getPrice(): number {
    return this.children.reduce((sum, child) => sum + child.getPrice(), 0);
  }

  constructor() {
    super();
  }
}

// Client Code
const pen = new ProductLeaf("Pen", 1);
const smartphone = new ProductLeaf("Smarthphone", 1_000);
const shirt = new ProductLeaf("Shirt", 40);
const productBox = new ProductComposite();
productBox.add(pen, smartphone, shirt);
console.log(productBox);
console.log(productBox.getPrice());

const tablet = new ProductLeaf("Tablet", 2_000);
const kindle = new ProductLeaf("Kindle", 300);
const anotherProductBox = new ProductComposite();
anotherProductBox.add(tablet, kindle);
console.log(anotherProductBox);
console.log(anotherProductBox.getPrice());

productBox.add(anotherProductBox);
console.log(productBox);
console.log(productBox.getPrice());
