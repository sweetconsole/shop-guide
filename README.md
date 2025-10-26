# ShopGuide

Анимированный лендинг мобильного приложения, в котором можно не только смотреть цены в магазинах на React.

## Технологии

<div id="steck">
	<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" width="30" height="30" alt="Vite" />
	<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg" width="30" height="30" alt="React"/>
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" width="30" height="30" alt="TypeScript"/>
	<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg" width="30" height="30" alt="SASS"/>
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/framermotion/framermotion-original.svg" width="30" height="30" alt="Framer Motion" />
</div>

## Превью главной страницы

<img src="public/screenshot.png" >

## Архитектура проекта

```
├── dist - директория пользовательской версии сайта
├── public - директория для иконок и превью изображений
│ 
├── src - рабочая директория
│   ├── assets
│   │	├── fonts - директория шрифтов
│   │	├── images - директория изображений
│   │   └── styles
│   │       ├── fonts.scss - стили инициализация шрифтов
│   │       ├── general.scss - глобальные стили сайта
│   │       ├── reset.scss - файл сброса стилей браузеров
│   │       ├── swiper.scss - стили библиотеки swiper
│   │       └── variables.scss - файл переменных
│   │
│   ├── components - директория компонентов
│   │
│   ├── hooks - кастомные React хуки
│   │
│   ├── App.tsx -  корневой компонент проекта
│   ├── main.tsx - главный исполняемый файл
│   └── vite-env.d.ts - файл определения типов переменных окружения 
│
├── .gitignore
├── .prettierrc - конфигурация Prettier
├── .stylelintrc.json - конфигурация Stylelint
├── eslint.config.js - конфигурация eslint
├── index.html - корневая страница веб-приложения
├── package.json - файл управления зависимостями, метаданными проекта
├── README.md
├── tsconfig.app.json - настройки специфичных параметров
├── tsconfig.json - настройки проекта
├── tsconfig.node.json - настройки компилятора TypeScript
└── vite.config.ts - конфигурация сборщика проектов Vite
```

## Запуск проекта

Для запуска проекта необходимо выполнить следующие действия:

1. С клонировать проект на ваш компьютер с [Github](https://github.com/sweetconsole/simple) с помощью команды:
```
git clone https://github.com/sweetconsole/simple.git
```
2. Установить зависимости:<br>
```
npm install
```
3. Запустить проект:<br>
```
npm start
```