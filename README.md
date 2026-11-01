# Architekci KP — nowa koncepcja strony

Autorska, statyczna strona prezentacyjna przygotowana przez 21project. Ta wersja zastępuje wcześniejszą koncepcję z pustymi ramkami.

## Uruchomienie

- `npm run dev` — podgląd pod http://127.0.0.1:4173
- `npm run check` — sprawdzenie lokalnych zasobów, odnośników i metadanych
- `npm run build` — gotowa strona w `dist/`

Node.js 20+; bez instalowania zależności. Strona działa także po otwarciu `index.html` z dysku. Na hostingu można serwować katalog główny albo `dist/` po zbudowaniu.

## Projekt

Ciepły off-white, kamienne szarości, Manrope i Newsreader. Struktura inspirowana rytmem monikaserbista.pl: hero, podejście, oferta, portfolio, cytat, pracownia, proces i kontakt. Własny układ i treści dopasowane do Architekci KP.

Hero wykorzystuje wariant AI salonu KIA w Bytomiu, delikatny ruch kadru i napis maskowany bryłą budynku. To animacja interfejsu, nie wygenerowany film. Ruch można wstrzymać; strona respektuje preferencję ograniczonego ruchu. Portfolio zawiera oryginalne wizualizacje, filtry i dostępne z klawiatury galerie w natywnym dialogu. Menu jest responsywne.

Kontakt prowadzi do e-maila, telefonu i mapy. Strona nie zbiera danych i nie udaje działającego formularza. To wstępna koncepcja, dlatego ma `noindex,nofollow`; przed docelowym uruchomieniem należy zatwierdzić treści i zmienić ustawienia indeksowania.

## Materiały

Źródła i sposób przygotowania hero opisano w [ASSETS.md](ASSETS.md). Fonty są lokalne; licencje OFL dołączono w `assets/`.

## Weryfikacja

Sprawdzono build, składnię JavaScript i dostępność zasobów. W przeglądarce sprawdzono desktop i telefon: filtry, galerie, rozwijanie oferty, menu oraz brak przewijania w poziomie.
