import React from 'react';
import { createRoot } from 'react-dom/client';
import { createElement } from './utils.js';
import App from './app.js';
import Store from './store.js';

const store = new Store({
  list: [
    { code: 9, title: 'Название элемента' , sumSelected: 0, wordSelected: 'раз'},
    { code: 10, title: 'Некий объект' , sumSelected: 0, wordSelected: 'раз'},
    { code: 3, title: 'Заголовок' , sumSelected: 0, wordSelected: 'раз'},
    { code: 4, title: 'Очень длинное название элемента из семи слов' , sumSelected: 0, wordSelected: 'раз'},
    { code: 8, title: 'Запись' , sumSelected: 0, wordSelected: 'раз'},
    { code: 6, title: 'Шестая запись', sumSelected: 0, wordSelected: 'раз'},
    { code: 7, title: 'Седьмая запись', sumSelected: 0, wordSelected: 'раз'},
  ],
});

const root = createRoot(document.getElementById('root'));

store.subscribe(() => {
  root.render(<App store={store} />);
});

// Первый рендер приложения
root.render(<App store={store} />);
