# Умножайка
Offline-first Expo приложение для изучения таблицы умножения детьми 6–10 лет.

## Запуск
```bash
npm install
npm run start
npm run android
```

## Проверки
```bash
npm run typecheck
npm run lint
```

## Сборки EAS
```bash
npx eas build --platform android --profile preview     # APK
npx eas build --platform android --profile production  # AAB
```

## Реализовано
- Expo Router-навигация, splash и три экрана onboarding.
- Обучение таблицам ×1–×10 с визуальными группами и озвучиванием.
- Адаптивная тренировка, быстрый 60-секундный раунд, награды и AsyncStorage-персистентность.
- Четыре мини-игры, прогресс, достижения, защищённый родительский dashboard и настройки.

Следующая версия может добавить локальные аудиофайлы, персонажей/иллюстрации, несколько профилей и более сложные игровые механики.
