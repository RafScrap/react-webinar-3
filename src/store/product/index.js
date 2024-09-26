import StoreModule from '../module';

class Product extends StoreModule {
  constructor(store, name) {
    super(store, name);
  }

  initState() {
    return {
        information: {},
    };
  }

  async load(id) {
    const response = await fetch('/api/v1/articles/' + id + "?fields=*,madeIn(title,code),category(title)");
    const json = await response.json();
    this.setState(
      {
        ...this.getState(),
        information: json.result,
      },
      'Загружен товар',
    );
  }
}

export default Product;
