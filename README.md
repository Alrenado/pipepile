# Pipepile

Корпоративный сайт компании. Стек: [Astro](https://astro.build) + SCSS (BEM), двуязычный (UA / EN), деплой на GitHub Pages.

---

## Команды

```bash
  npm install       # установить зависимости
  npm run dev       # dev-сервер → http://localhost:4321/pipepile
  npm run build     # production-сборка в dist/
  npm run preview   # предпросмотр сборки локально
  npm run deploy    # сборка + push в ветку gh-pages
```

> Требуется Node.js ≥ 22.12.0

---

## Структура

```
src/
├── components/
│   ├── common/       # переиспользуемые: AppImage, Carousel, Lightbox, Title…
│   ├── gallery/      # блоки страницы gallery
│   ├── index/        # блоки главной страницы
│   ├── manufacturing/
│   ├── contacts/
│   ├── documentation/
│   └── layout/       # Header, Footer, Logo
├── locales/
│   ├── ua.json       # украинский
│   └── en.json       # английский
├── pages/            # contacts, documentation, gallery, index, manufacturing
├── scripts/
│   ├── i18n.ts       # SSR-функция useTranslations()
│   └── translations.ts # клиентское переключение языка
└── styles/
    ├── abstracts/    # _variables.scss, _mixins.scss
    ├── base/         # _reset.scss, _typography.scss
    ├── components/   # зеркалит структуру src/components/
    ├── layout/       # _header.scss, _footer.scss, _grid.scss
    └── global.scss   # точка входа, @use всех модулей
```

---

## Локализация

Переводы хранятся в `src/locales/ua.json` и `src/locales/en.json`.

- **SSR (`.astro`-шаблоны)** — использовать `useTranslations(lang)` из `src/scripts/i18n.ts`
- **Клиент (динамический текст)** — атрибуты `data-i18n` и `data-i18n-html` на элементах; `translations.ts` подставляет значения при переключении языка

Язык по умолчанию: `ua`.

---

## Новая страница

1. Создать `src/pages/name.astro`
2. Добавить `<Title ... level="h1" />` — на каждой странице должен быть ровно один `h1`
3. Создать `src/styles/components/name/_block.scss`, подключить в `global.scss` через `@use`
4. Добавить ссылку в `src/components/layout/Header.astro` и `Footer.astro`

---

## Деплой

Сайт деплоится в ветку `gh-pages` командой `npm run deploy`. Скрипт:

1. Собирает `dist/` с `NODE_ENV=production`
2. Добавляет `.nojekyll` (GitHub Pages не игнорирует папки с `_`)
3. Делает `git subtree push --prefix dist origin gh-pages`
