# Architekci KP — high-end redesign (iteracja 4)

Aktualny zakres: **niezmienione hero → O nas → Nasze realizacje → Oferta → Wybrani inwestorzy → Kontakt**.

## O nas
Mniejszy, niepogrubiony nagłówek wyśrodkowany nad szerszym tekstem. Zdjęcie nadal jest tylko placeholderem. Na desktopie sekcja jest ograniczona do wysokości jednego ekranu po odjęciu nawigacji; na telefonie układa się naturalnie w pionie.

## Nasze realizacje
Pięć kwadratowych placeholderów, bez podpisów i bez strzałek. Płynny ruch w nieskończonej pętli, z nazwą ARCHITEKCI KP po najechaniu. Obsługa przeciągania myszą/dotykiem. Szanowanie prefers-reduced-motion.

## Oferta
Trzy proste białe karty inspirowane referencyjnym zrzutem: **Architektura, Wnętrza, Analizy i doradztwo**, z numerem, opisem, zakresem i linkiem kontaktowym. Brak fotografii, cennika i pogrubionych nagłówków.

## Wybrani inwestorzy
Niekończący się poziomy pasek marek, które pracownia wymienia na stronie https://architekci-kp.pl/inwestorzy/ :
ING Bank Śląski, KIA Komfi, AWF Katowice, Studio Moderna Polska, Euromedic, Rabis, MedStyle i Fayran. Do KIA podpięto lokalny znak SVG, a do ING aktualny plik graficzny z biura prasowego (Prowly). Pozostałe firmy są prezentowane typograficznymi nazwami zamiast niezweryfikowanych znaków graficznych. Zanim klient opublikuje wersję produkcyjną, należy potwierdzić uprawnienia do użycia znaków towarowych.

## Uruchomienie
`npm run dev`, `npm run check`, `npm run build`.

To nadal wersja koncepcyjna z meta `noindex,nofollow`.


## Iteracja 5 — przerywnik, kontakt, formularz, stopka

- Pełnoekranowy przerywnik **między realizacjami a ofertą**. Używa lokalnej wizualizacji `assets/dom-zory.jpg`, przyciemnionego gradientu i minimalistycznej typografii; nie zmienia hero.
- Po „Wybranych inwestorach” znajduje się sekcja **Kontakt** z oficjalnymi, zweryfikowanymi na `architekci-kp.pl/kontakt/` danymi: `architekci@architekci-kp.pl`, `+48 32 703 70 25`, `+48 507 061 155`, Plac Wolności 10A/2A, 40-078 Katowice.
- Pod danymi znajduje się responsywny **formularz kontaktowy**. Formularz działa w czystym HTML i wysyła metodą POST do `https://formsubmit.co/architekci@architekci-kp.pl`. Ma wymagane imię/nazwisko, e-mail, kategorię i wiadomość; telefon jest opcjonalny. Dodano antyspamowy honeypot, reCAPTCHA po stronie dostawcy oraz informację o zewnętrznej usłudze.
- **Przed produkcją konieczne:** właściciel skrzynki musi aktywować FormSubmit po pierwszej próbnej wysyłce, klikając link potwierdzający w wiadomości e-mail. Bez aktywacji nie można uważać formularza za uruchomiony. Dodatkowo należy przygotować/zweryfikować politykę prywatności i informacje RODO oraz zatwierdzić korzystanie z FormSubmit jako podmiotu zewnętrznego.
- Nowa, ciemna **stopka premium** z nazwą pracowni, nawigacją, danymi, CTA do formularza, rokiem aktualizowanym automatycznie i dyskretnym podpisem 21project.

Strona nadal ma `noindex,nofollow` jako projekt do zatwierdzenia.
