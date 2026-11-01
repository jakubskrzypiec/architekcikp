# Architekci KP — projekt strony

Statyczny projekt strony pracowni Architekci KP. Układ sekcji: hero, O nas, Nasze realizacje, niski przerywnik, Oferta, Wybrani inwestorzy, Kontakt, formularz i stopka.

## Aktualna wersja

- Hero: kolorowy dzień i noc, nieruchomy budynek, napis za dachem, większy tekst po lewej. Chmury przemieszczają się w spokojniejszym, 42-sekundowym cyklu. Napis za budynkiem jest biały również w dzień; przyciski nie mają strzałek, dodatkowe zdanie usunięto. Kontakt w nawigacji jest zwykłym odnośnikiem.
- Sześć tytułów sekcji używa jednej klasy `section-title`: Manrope 400, ten sam responsywny rozmiar i interlinia, bez pogrubienia.
- Przerywnik przedstawia wizualizację AI na podstawie projektu domu w Orzeszu. Pełna bryła mieści się w kadrze; hasło „Dobry projekt zaczyna się od Ciebie.” jest wyśrodkowane nad domem, bez cienia. Budynek pozostaje nieruchomy, a niebo porusza się niezależnie w 95-sekundowym cyklu. Osobna, gęstsza tekstura nieba zachowuje kontrast bez rozjaśniającego mieszania. Maska chroni dom i roślinność. Wysokość jest dopasowana do szerokości ekranu (400–650 px na komputerze, 300 px na telefonie). Pochodzenie AI opisano w dokumentacji materiałów, bez podpisu w przerywniku. Preferencja ograniczonego ruchu zatrzymuje animację; bez obsługi maski wyświetla się statyczna wizualizacja.
- Oferta: trzy prostokątne kafle — Architektura, Wnętrza i Usługi. Każdy zawiera jedno rzeczywiste ujęcie z portfolio pracowni. Kafle są wyższe: 620 px na desktopie, 520 px na telefonie. Najechanie lub fokus z klawiatury lekko przybliża to samo zdjęcie, bez zmiany kadru na inne ujęcie. Na telefonie zdjęcia i opisy są od razu widoczne. Kafle prowadzą do kontaktu. Opisy mają 14–15 px, zakresy 11–12 px i mocniejszy kontrast na zdjęciach.
- Inwestorzy: 10 podmiotów z oficjalnej listy pracowni: ING Bank Śląski, KIA Komfi, AWF Katowice, Euromedic, Studio Moderna, MedStyle, Rabis, Fayran, Sapia Investments i DDS Invest. Pierwsze sześć ma zweryfikowane oryginalne logotypy, pozostałe cztery są przedstawione czytelnymi nazwami — bez tworzenia zastępczych znaków graficznych. Oryginalne kolory, większy format, ciągła karuzela. Nagłówek i podpis nad karuzelą są wyśrodkowane. Źródła podano w `ASSETS.md`.
- Kontakt: trzy równe kafelki z e-mailem, telefonami i adresem.
- Formularz: wyśrodkowany wraz z nagłówkiem, powiększony do 1000 px szerokości i większych pól. Tylko imię i nazwisko, e-mail oraz wiadomość. Nadal demonstracyjny: bez endpointu, bez wysyłki i bez zapisu danych. Usunięto stały podpis demonstracyjny. Przycisk „Wyślij wiadomość” sprawdza pola; dopiero po kliknięciu informuje, że wysyłka będzie uruchomiona przy wdrożeniu, bez pozornego potwierdzenia wysłania.

Karuzela realizacji (pięć placeholderów) i miejsce na zdjęcie w sekcji O nas pozostają zgodne z poprzednim zakresem. Animacje respektują `prefers-reduced-motion`. Nocna wizualizacja jest kolorowa.

## Uruchomienie i sprawdzenie

- `npm run dev` — lokalny podgląd http://127.0.0.1:4173
- `npm run check` — zasoby, odnośniki, struktura i brak konfiguracji wysyłki formularza
- `npm run build` — gotowa strona w `dist/`

Bez zależności npm. Projekt nadal ma `noindex,nofollow` jako koncepcja do zatwierdzenia.
