# Architekci KP — koncepcja strony (etap 2)

Strona prezentacyjna pracowni Architekci KP zbudowana w czystym HTML, CSS i JavaScript. Układ: **hero → O pracowni → karuzela projektów → oferta → minimalistyczny kontakt**. Hero, jego obrazowanie i przełącznik dzień/noc są zachowane z wcześniejszej wersji.

## Uruchomienie

- `npm run dev` — lokalny podgląd na http://127.0.0.1:4173
- `npm run check` — weryfikacja zasobów, linków i struktury
- `npm run build` — eksport statycznej strony do `dist/`

Node.js 20+. Nie trzeba instalować zależności.

## Założenia graficzne

Minimalistyczny, spokojny projekt, którego typografia i tło nie konkurują ze zdjęciami realizacji. Cała strona korzysta z **Manrope**, bez kursywy. Paleta to off-white, ciepłe szarości i prawie czarny. Zdjęcie po prawej w sekcji „O nas” pochodzi z lokalnych zasobów pracowni (`assets/aleksandra.jpg`).

Karuzela projektów ma **5 świadomych placeholderów** „Do uzupełnienia”; nie dodajemy fotografii realizacji przed decyzją o ich doborze. Działa automatyczne przesuwanie co 4,8 sekundy, strzałki, przewijanie dotykowe, przeciąganie myszą i pauza podczas interakcji. Ustawienie ograniczonego ruchu wyłącza auto-przesuwanie.

Oferta ma sześć obszarów: Domy, Przebudowy, Kamienice, Analiza chłonności terenu, Usługi, Wnętrza.

Teksty „O nas” oraz zakres usług zostały opracowane na podstawie publicznej, istniejącej strony klientki: https://architekci-kp.pl/o-nas/ i https://architekci-kp.pl/.

Wersja pozostaje koncepcją z `noindex,nofollow`. Przed publikacją produkcyjną trzeba zatwierdzić zdjęcia, treści i dane kontaktowe oraz usunąć blokadę indeksowania.
