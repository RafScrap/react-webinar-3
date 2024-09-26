import { codeGenerator } from '../../utils';
import StoreModule from '../module';

class Catalog extends StoreModule {
  constructor(store, name) {
    super(store, name);
    this.generateCode = codeGenerator(0);
  }

  initState() {
    return {
      list: [],
      page: 0,
      limit: 10,
      countPages: 0
    };
  }

  async load(deltaPage) {
    const pageChanged = this.getState().page + deltaPage;
    const limit = this.getState().limit;
      const skip = pageChanged * limit;
      const response = await fetch('api/v1/articles?limit=' + limit + '&skip=' + skip + '&fields=items(*),count,madeIn(title,code),category(title)');
      const json = await response.json();
      this.setState(
        {
          ...this.getState(),
          list: json.result.items,
          page: pageChanged,
          countPages: Math.floor(json.result.count / limit) + (json.result.count % limit !== 0 ? 1 : 0)     
        },
        'Загружены товары из АПИ',
      );
  }
}

export default Catalog;
