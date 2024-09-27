import StoreModule from '../module';

class Product extends StoreModule {
  constructor(store, name) {
    super(store, name);
  }

  initState() {
    return {
        information: {},
        madeIn: {},
        category: {}
    };
  }

  async load(id) {
    const response = await fetch('/api/v1/articles/' + id + "?fields=*,madeIn(title,code),category(title)");
    const json = await response.json();
    this.setState(
      {
        ...this.getState(),
        information: json.result,
        madeIn: json.result.madeIn,
        category: json.result.category
      },
      'Загружен товар',
    );
  }
}

export default Product;
