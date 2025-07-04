import type { Category } from "./categories";

export const defaultCategories: Category[] = [
  {
    id: "daily-check",
    title: "за добу",
    items: [
      { text: "Перевірити погоду", id: "check-weather" },
      { text: "Скоригувати гардероб", id: "adjust-wardrobe" },
      { text: "Завантажити карти на телефон", id: "download-maps" },
      { text: "Завантажити потрібні застосунки", id: "download-apps" },
      { text: "Роздрукувати квитки", id: "print-tickets" },
      { text: "Роздрукувати бронювання", id: "print-bookings" },
      { text: "Купити та роздрукувати страховку", id: "buy-insurance" },
      {
        text: "Дізнатись у своєму банку про обслуговування в цій країні",
        id: "check-bank",
      },
      { text: "Зняти трохи готівки $ €", id: "get-cash" },
      {
        text: "Спланувати шлях з аеропорту до готелю",
        id: "plan-transfer",
      },
      { text: "Зареєструватися на рейс", id: "check-in" },
      {
        text: "Купити грін-карту у разі автоподорожі",
        id: "buy-greencard",
      },
      { text: "Зарядити всі гаджети", id: "charge-gadgets" },
      { text: "Звільнити пам'ять у телефоні / камері", id: "free-memory" },
      { text: "Завантажити книги та статті в дорогу", id: "download-reading" },
    ],
  },
  {
    id: "most-important",
    title: "найважливіше",
    items: [
      { text: "Паспорт", id: "passport" },
      { text: "Квиток", id: "ticket" },
      { text: "Бронювання", id: "booking-confirm" },
      { text: "Страховка", id: "insurance-doc" },
      { text: "Гаманець", id: "wallet" },
      { text: "Телефон", id: "phone" },
      { text: "Зарядка", id: "phone-charger" },
      { text: "Навушники", id: "phone-headphones" },
      { text: "Павербанк", id: "powerbank" },
      { text: "Водійські права", id: "drivers-license" },
    ],
  },
  {
    id: "first-aid",
    title: "аптечка",
    items: [
      { text: "Знеболювальне", id: "painkillers" },
      { text: "Жарознижувальне", id: "fever-reducer" },
      { text: "Від застуди", id: "cold-meds" },
      { text: "Від алергії", id: "allergy-meds" },
      { text: "Антибіотик", id: "antibiotic" },
      { text: "Від забоїв", id: "bruise-meds" },
      { text: "Від захитування", id: "motion-sickness-meds" },
      { text: "При отруєннях", id: "poisoning-meds" },
      { text: "Від діареї", id: "diarrhea-meds" },
      { text: "Пластир", id: "plasters" },
      { text: "Антисептик", id: "antiseptic" },
    ],
  },
  {
    id: "gadgets",
    title: "гаджети",
    items: [
      { text: "Камера", id: "camera" },
      { text: "Карта пам'яті", id: "memory-card" },
      { text: "Зарядка", id: "gadget-charger" },
      { text: "Додатковий акумулятор", id: "extra-battery" },
      {
        text: "Навушники / розгалужувач для навушників",
        id: "headphones-splitter",
      },
      { text: "Електронна книга", id: "ebook-reader" },
      { text: "Адаптер для розетки", id: "adapter" },
    ],
  },
  {
    id: "dont-forget",
    title: "не забути",
    items: [
      { text: "Штопор", id: "corkscrew" },
      { text: "Парасоля", id: "umbrella" },
      { text: "Голка з ниткою", id: "sewing-kit" },
      { text: "Блокнот і ручка", id: "notebook-pen" },
      { text: "Сонцезахисні окуляри", id: "sunglasses" },
      { text: "Фумігатор", id: "fumigator" },
      { text: "Сушарка для взуття", id: "shoe-dryer" },
      { text: "Швейцарський ніж", id: "swiss-knife" },
    ],
  },
  {
    id: "cosmetics-carryon",
    title: "косметичка в ручну поклажу",
    items: [
      { text: "Вологі серветки", id: "wet-wipes" },
      { text: "Одноразові серветки", id: "tissues" },
      { text: "Дзеркальце", id: "mirror" },
      { text: "Зволожуючий крем", id: "moisturizer-carryon" },
      { text: "Краплі для очей", id: "eye-drops" },
      { text: "Засіб від захитування", id: "motion-sickness-carryon" },
      { text: "Антисептик для рук", id: "hand-sanitizer-carryon" },
      { text: "Гігієнічна помада", id: "lip-balm" },
    ],
  },
  {
    id: "clothing",
    title: "одяг",
    items: [
      { text: "Шкарпетки та білизна на кількість днів", id: "socks-underwear" },
      { text: "Футболки", id: "tshirts" },
      { text: "Сорочки", id: "shirts" },
      { text: "Сукні / спідниці", id: "dresses-skirts" },
      { text: "Джинси / штани", id: "jeans-pants" },
      { text: "Толстовка або теплий светр", id: "hoodie-sweater" },
      { text: "Вітрівка", id: "windbreaker" },
      { text: "Прикраси та аксесуари", id: "jewelry-accessories" },
      { text: "Одяг для сну", id: "sleepwear" },
      { text: "Ремінь", id: "belt" },
    ],
  },
  {
    id: "cosmetics-suitcase",
    title: "косметичка в чемодан",
    items: [
      { text: "Зубна паста і щітка", id: "toothpaste-brush" },
      { text: "Шампунь / кондиціонер", id: "shampoo-conditioner" },
      { text: "Гребінець", id: "hairbrush" },
      { text: "Зволожуючий крем", id: "moisturizer-suitcase" },
      { text: "Бритва та засіб для гоління", id: "razor-shaving" },
      { text: "Засіб для вмивання", id: "face-wash" },
      { text: "Тонік для обличчя", id: "face-tonic" },
      { text: "Дезодорант", id: "deodorant" },
      { text: "Манікюрний набір", id: "manicure-set" },
      { text: "Пінцет", id: "tweezers" },
      { text: "Ватні палички та диски", id: "cotton-swabs-pads" },
      { text: "Маленький флакон парфумів", id: "small-perfume" },
      { text: "Засоби гігієни", id: "hygiene-products" },
      { text: "Все для контактних лінз", id: "contact-lenses-stuff" },
      { text: "Резинки для волосся", id: "hair-ties" },
      { text: "Фен", id: "hair-dryer" },
      { text: "Рушник", id: "towel" },
      { text: "Сонцезахисний засіб", id: "sunscreen" },
    ],
  },
  {
    id: "before-leaving",
    title: "перед виходом з дому",
    items: [],
  },
];
