# Architekci KP — koncepcja high-end (iteracja 3)

Autorska, statyczna strona 21project. Obecne hero i przełącznik dzień/noc pozostają dokładnie bez zmian. Sekcje pod nim zostały uproszczone zgodnie z ostatnimi uwagami klienta:

- **O nas:** tylko duży nagłówek i opis po lewej; po prawej celowo puste miejsce na zdjęcie.
- **Nasze realizacje:** duże kwadratowe kafle „DO UZUPEŁNIENIA”, bez podpisów ani kategorii, branding „ARCHITEKCI KP” wyłącznie po najechaniu. Karuzela przesuwa się płynnie w pętli, bez skoków lub pauz. Strzałki chwilowo przyspieszają ruch w wybranym kierunku.
- **Oferta:** sześć kart z wizualizacjami i krótkimi opisami: domy, przebudowy, kamienice, analiza chłonności terenu, usługi (w tym salony samochodowe) i wnętrza.

## Grafiki w ofercie

Trzy obrazy są prawdziwymi realizacjami z wcześniej dodanych materiałów pracowni: dom w Żorach, przebudowa domu w Orzeszu, salon samochodowy KIA. Trzy dodatkowe obrazy (kamienice, analiza terenu, wnętrza) są **samodzielnie przygotowanymi ilustracjami koncepcyjnymi SVG**, a nie fotografiami. Pozwalają już obejrzeć gotowy układ, ale docelowo powinny zostać zastąpione zatwierdzonymi zdjęciami lub renderami (np. generowanymi wizualizacjami fotorealistycznymi). Zdjęcie O nas jest celowo puste.

## Uruchomienie

- `npm run dev` — podgląd pod http://127.0.0.1:4173
- `npm run check` — walidacja struktury, odnośników i plików
- `npm run build` — generuje statyczne `dist/` wraz z `premium-v2.css`

Node.js 20+, bez zależności zewnętrznych. `noindex,nofollow` pozostaje włączone, bo to wersja koncepcyjna.

Treści o pracowni zostały skrócone na podstawie oficjalnej strony: https://architekci-kp.pl/o-nas/.
