/**
 * Хранилище состояния приложения
 */
class Store {
  numberItem = 0;
  wasCodes;

  constructor(initState = {}) {
    this.state = initState;
    this.listeners = []; // Слушатели изменений состояния
    this.wasCodes = initState.list.map((item) => item.code);
  }

  /**
   * Подписка слушателя на изменения состояния
   * @param listener {Function}
   * @returns {Function} Функция отписки
   */
  subscribe(listener) {
    this.listeners.push(listener);
    // Возвращается функция для удаления добавленного слушателя
    return () => {
      this.listeners = this.listeners.filter(item => item !== listener);
    };
  }

  /**
   * Выбор состояния
   * @returns {Object}
   */
  getState() {
    return this.state;
  }

  /**
   * Установка состояния
   * @param newState {Object}
   */
  setState(newState) {
    this.state = newState;
    // Вызываем всех слушателей
    for (const listener of this.listeners) listener();
  }

  /**
   * Добавление новой записи
   */
  addItem() {
    do {
      this.numberItem++;
    } while (this.wasCodes.includes(this.numberItem))

    this.setState({
      ...this.state,
      list: [...this.state.list, { code: this.numberItem, title: 'Новая запись', sumSelected: 0, wordSelected: 'раз'}],
    });
  }

  /**
   * Удаление записи по коду
   * @param code
   */
  deleteItem(code) {
    this.setState({
      ...this.state,
      list: this.state.list.filter(item => item.code !== code),
    });
  }

  /**
   * Выделение записи по коду
   * @param code
   */
  selectItem(code) {
    this.setState({
      ...this.state,
      list: this.state.list.map(item => {
        if (item.code === code) {
          item.selected = !item.selected;
          if (item.selected) {
            item.sumSelected++;
            if (item.sumSelected % 10 >= 2 && item.sumSelected % 10 <= 4 && item.sumSelected % 100 != 12
              && item.sumSelected % 100 != 13 && item.sumSelected % 100 != 14) {
              item.wordSelected = 'раза';
            }
            else {
              item.wordSelected = 'раз';
            }
          }
        }
        else {
          if (item.selected) item.selected = false;
        }
        return item;
      }),
    });
  }
}

export default Store;
