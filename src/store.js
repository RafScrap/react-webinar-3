/**
 * Хранилище состояния приложения
 */
class Store {
  constructor(initState = {}) {
    this.state = initState;
    this.listeners = []; // Слушатели изменений состояния
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
   * Удаление записи по коду
   * @param code
   */
  deleteItem(code) {
    let sumCode = 0;
    let priceCode = 0;
    this.setState({
      ...this.state,
      list: this.state.list.map(item => {
        if (item.code === code) {
          // Смена выделения и подсчёт
          sumCode = item.count;
          priceCode = item.price;
          return {
            ...item,
            count: 0,
          };
        }
        // Сброс выделения если выделена
        return item;
      }),
    });
    this.setState({
      ...this.state,
      countSum: this.state.countSum - sumCode,
      priceSum: this.state.priceSum - sumCode * priceCode
    })
  }

  /**
   * Выделение записи по коду
   * @param code
   */
  selectItem(code) {
    let priceCode = 0;
    this.setState({
      ...this.state,
      countSum: this.state.countSum + 1,
      list: this.state.list.map(item => {
        if (item.code === code) {
          // Смена выделения и подсчёт
          priceCode = item.price;
          return {
            ...item,
            count: item.count + 1,
          };
        }
        // Сброс выделения если выделена
        return item;
      }),
    });
    this.setState({
      ...this.state,
      priceSum: this.state.priceSum + priceCode
    });
  }
}

export default Store;
