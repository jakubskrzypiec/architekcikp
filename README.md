# Architekci KP — projekt strony

Statyczny projekt strony pracowni Architekci KP. Układ sekcji: hero, O nas, Nasze realizacje, niski przerywnik, Oferta, Wybrani inwestorzy, Kontakt, formularz i stopka.

## Aktualna wersja

- Hero: kolorowy dzień i noc, nieruchomy budynek, napis za dachem, większy tekst po lewej. Chmury przemieszczają się wyraźniej, w 28-sekundowym cyklu. Kontakt w nawigacji jest zwykłym odnośnikiem.
- Sześć tytułów sekcji używa jednej klasy `section-title`: Manrope 400, ten sam responsywny rozmiar i interlinia, bez pogrubienia.
- Przerywnik ma 300 px wysokości na desktopie i 240 px na telefonie. Cytat pochodzi z komunikacji pracowni; tło tworzy subtelnie animowany rysunek architektoniczny.
- Oferta: sześć zakresów (domy, przebudowy, kamienice, obiekty usługowe, wnętrza, analizy i doradztwo). Wybór myszą, dotykiem lub klawiaturą zmienia opis i podgląd prawdziwej realizacji z portfolio pracowni.
- Inwestorzy: lokalne, autentyczne logotypy ING Banku Śląskiego, KIA Komfi, AWF Katowice i Euromedic, wybranych z oficjalnej listy pracowni. Oryginalne kolory, większy format, ciągła karuzela. Źródła podano w `ASSETS.md`.
- Kontakt: trzy równe kafelki z e-mailem, telefonami i adresem.
- Formularz: tylko imię i nazwisko, e-mail oraz wiadomość. Nadal demonstracyjny: bez endpointu, bez wysyłki i bez zapisu danych. Przycisk sprawdza pola i wyświetla informację, że wiadomość nie została wysłana.

Karuzela realizacji (pięć placeholderów) i miejsce na zdjęcie w sekcji O nas pozostają zgodne z poprzednim zakresem. Animacje respektują `prefers-reduced-motion`. Nocna wizualizacja jest kolorowa.

## Uruchomienie i sprawdzenie

- `npm run dev` — lokalny podgląd http://127.0.0.1:4173
- `npm run check` — zasoby, odnośniki, struktura i brak konfiguracji wysyłki formularza
- `npm run build` — gotowa strona w `dist/`

Bez zależności npm. Projekt nadal ma `noindex,nofollow` jako koncepcja do zatwierdzenia.
