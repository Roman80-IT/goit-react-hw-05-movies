# Кінопошук

Створи базову маршрутизацію для застосунку пошуку і зберігання фільмів. Прев'ю
робочого застосунку
[дивись за посиланням](https://drive.google.com/file/d/1vR0hi3n1236Q5Bg4-se-8JVKD9UKSfId/view?usp=sharing).

### themoviedb.org API

Для бекенду використовуй themoviedb.org API. Необхідно зареєструватися (можна
ввести довільні дані) та отримати API-ключ. У цій роботі будуть
використовуватися наступні ендпоінти.

- /trending/get-trending список найпопулярніших фільмів на сьогодні для
  створення колекції на головній сторінці.
- /search/search-movies пошук фільму за ключовим словом на сторінці фільмів.
- /movies/get-movie-details запит повної інформації про фільм для сторінки
  кінофільму.
- /movies/get-movie-credits запит інформації про акторський склад для сторінки
  кінофільму.
- /movies/get-movie-reviews запит оглядів для сторінки кінофільму. Посилання на
  документацію

### Маршрути

У застосунку повинні бути такі маршрути. Якщо користувач зайшов за неіснуючим
маршрутом, його необхідно перенаправляти на домашню сторінку.

- `'/'` – компонент `Home`, домашня сторінка зі списком популярних кінофільмів.
- `/movies` – компонент `Movies`, сторінка пошуку кінофільмів за ключовим
  словом.
- `/movies/:movieId` – компонент MovieDetails, сторінка з детальною інформацією
  про кінофільм.
- `/movies/:movieId/cast` – компонент `Cast`, інформація про акторський склад.
  Рендериться на сторінці `MovieDetails`.
- `/movies/:movieId/reviews` – компонент `Reviews`, інформація про огляди.
  Рендериться на сторінці `MovieDetails`.

### Code Splitting (поділ коду)

Додай асинхронне завантаження JS-коду для маршрутів застосунку, використовуючи
React.lazy() і Suspense.

---

## Installation

Після виконнання команди `npm i` є такі помилки:

```
npm WARN deprecated source-map-resolve@0.6.0: See https://github.com/lydell/source-map-resolve#deprecated
npm WARN deprecated svgo@1.3.2: This SVGO version is no longer supported. Upgrade to v2.x.x.
```

Для оновлення:

```
npm install source-map-resolve@latest --save-dev

npm install svgo@latest --save-dev
```

### Підключення нормалайзеру (найоптимальніший варіант)

https://cdnjs.com/libraries/modern-normalize

```html
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/modern-normalize/2.0.0/modern-normalize.min.css"
  integrity="sha512-4xo8blKMVCiXpTaLzQSLSw3KFOVPWhm/TRtuPVc4WG6kUgjH6J03IBuG7JZPkcWMxJ5huwaBpOpnwYElP/m6wg=="
  crossorigin="anonymous"
  referrerpolicy="no-referrer"
/>
```

вставимо код в **index.html**

### Встановимо Styled Components:

`npm install styled-components`

є такі помилки:

```
npm WARN deprecated @babel/plugin-proposal-class-properties@7.18.6: This proposal has been merged to the ECMAScript standard and thus this plugin is no longer maintained. Please use @babel/plugin-transform-class-properties instead.

npm WARN deprecated @babel/plugin-proposal-object-rest-spread@7.20.7: This proposal has been merged to the ECMAScript standard and thus this plugin is no longer maintained. Please use @babel/plugin-transform-object-rest-spread instead.
```

Оновимо залежності Babel:

```
npm update @babel/core @babel/preset-env

npm install --save-dev @babel/plugin-transform-private-property-in-object
```

### Встановимо бібліотеку для маршрутизації (React Router)

`React Router` надає набір компонентів та хуків для створення маршрутизації,
управління історією навігації користувача та відображення різних компонетів в
залежності від поточного значення URL в адресному рядку браузера.

```
npm install react-router-dom
```

### axios:

[https://axios-http.com](https://axios-http.com/ru/docs/intro)

Встановлення:

```
$ npm install axios
```

# React homework template

Этот проект был создан при помощи
[Create React App](https://github.com/facebook/create-react-app). Для знакомства
и настройки дополнительных возможностей
[обратись к документации](https://facebook.github.io/create-react-app/docs/getting-started).

## Создание репозитория по шаблону

Используй этот репозиторий организации GoIT как шаблон для создания репозитория
своего проекта. Для этого нажми на кнопку `«Use this template»` и выбери опцию
`«Create a new repository»`, как показано на изображении.

![Creating repo from a template step 1](./assets/template-step-1.png)

На следующем шаге откроется страница создания нового репозитория. Заполни поле
его имени, убедись что репозиторий публичный, после чего нажми кнопку
`«Create repository from template»`.

![Creating repo from a template step 2](./assets/template-step-2.png)

После того как репозиторий будет создан, необходимо перейти в настройки
созданного репозитория на вкладку `Settings` > `Actions` > `General` как
показано на изображении.

![Settings GitHub Actions permissions step 1](./assets/gh-actions-perm-1.png)

Проскролив страницу до самого конца, в секции `«Workflow permissions»` выбери
опцию `«Read and write permissions»` и поставь галочку в чекбоксе. Это
необходимо для автоматизации процесса деплоя проекта.

![Settings GitHub Actions permissions step 2](./assets/gh-actions-perm-2.png)

Теперь у тебя есть личный репозиторий проекта, со структурой файлов и папок
репозитория-шаблона. Далее работай с ним как с любым другим личным репозиторием,
клонируй его себе на компьютер, пиши код, делай коммиты и отправляй их на
GitHub.

## Подготовка к работе

1. Убедись что на компьютере установлена LTS-версия Node.js.
   [Скачай и установи](https://nodejs.org/en/) её если необходимо.
2. Установи базовые зависимости проекта командой `npm install`.
3. Запусти режим разработки, выполнив команду `npm start`.
4. Перейди в браузере по адресу [http://localhost:3000](http://localhost:3000).
   Эта страница будет автоматически перезагружаться после сохранения изменений в
   файлах проекта.

## Деплой

Продакшн версия проекта будет автоматически проходить линтинг, собираться и
деплоиться на GitHub Pages, в ветку `gh-pages`, каждый раз когда обновляется
ветка `main`. Например, после прямого пуша или принятого пул-реквеста. Для этого
необходимо в файле `package.json` отредактировать поле `homepage`, заменив
`your_username` и `your_repo_name` на свои, и отправить изменения на GitHub.

```json
"homepage": "https://your_username.github.io/your_repo_name/"
```

Далее необходимо зайти в настройки GitHub-репозитория (`Settings` > `Pages`) и
выставить раздачу продакшн версии файлов из папки `/root` ветки `gh-pages`, если
это небыло сделано автоматически.

![GitHub Pages settings](./assets/repo-settings.png)

### Статус деплоя

Статус деплоя крайнего коммита отображается иконкой возле его идентификатора.

- **Желтый цвет** - выполняется сборка и деплой проекта.
- **Зеленый цвет** - деплой завершился успешно.
- **Красный цвет** - во время линтинга, сборки или деплоя произошла ошибка.

Более детальную информацию о статусе можно посмотреть кликнув по иконке, и в
выпадающем окне перейти по ссылке `Details`.

![Deployment status](./assets/deploy-status.png)

### Живая страница

Через какое-то время, обычно пару минут, живую страницу можно будет посмотреть
по адресу указанному в отредактированном свойстве `homepage`. Например, вот
ссылка на живую версию для этого репозитория
[https://goitacademy.github.io/react-homework-template](https://goitacademy.github.io/react-homework-template).

Если открывается пустая страница, убедись что во вкладке `Console` нет ошибок
связанных с неправильными путями к CSS и JS файлам проекта (**404**). Скорее
всего у тебя неправильное значение свойства `homepage` в файле `package.json`.

### Маршрутизация

Если приложение использует библиотеку `react-router-dom` для маршрутизации,
необходимо дополнительно настроить компонент `<BrowserRouter>`, передав в пропе
`basename` точное название твоего репозитория. Слеш в начале строки обязателен.

```jsx
<BrowserRouter basename="/your_repo_name">
  <App />
</BrowserRouter>
```

## Как это работает

![How it works](./assets/how-it-works.png)

1. После каждого пуша в ветку `main` GitHub-репозитория, запускается специальный
   скрипт (GitHub Action) из файла `.github/workflows/deploy.yml`.
2. Все файлы репозитория копируются на сервер, где проект инициализируется и
   проходит линтинг и сборку перед деплоем.
3. Если все шаги прошли успешно, собранная продакшн версия файлов проекта
   отправляется в ветку `gh-pages`. В противном случае, в логе выполнения
   скрипта будет указано в чем проблема.
