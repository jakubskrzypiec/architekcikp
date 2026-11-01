# Materiały i hero AI

Materiały pracowni pobrano z publicznej strony https://architekci-kp.pl/ na potrzeby zamówionej wstępnej koncepcji dla Architekci KP. Nie stanowią licencjonowanego banku zdjęć do innych zastosowań.

## Oryginalne wizualizacje i identyfikacja

- Logo: https://architekci-kp.pl/wp-content/uploads/2021/11/Logo_01-v2.jpg
- Salon KIA: https://architekci-kp.pl/wp-content/uploads/2026/02/2_1_KIA-Bytom_WIZUALIZACJA-1.jpg oraz 2_2_KIA-Bytom_WIZUALIZACJA-1.jpg w tym samym katalogu.
- Żory: https://architekci-kp.pl/wp-content/uploads/2021/12/01_Dom_Zory_Czapli-2.jpg oraz 08_Dom_Zory_Czapli.jpg w tym samym katalogu.
- Katowice, Kukułek: https://architekci-kp.pl/wp-content/uploads/2023/07/Dom_Kukulek9_1.jpg oraz Dom_Kukulek9_3.jpg w tym samym katalogu.
- Orzesze: https://architekci-kp.pl/wp-content/uploads/2025/03/01_Przebudowa-z-lat-50-1_Orzesze.jpg oraz 03_Przebudowa-z-lat-50-3_Orzesze.jpg w tym samym katalogu.
- Portret: https://architekci-kp.pl/wp-content/uploads/2021/12/Aleksandra-Grundszok-Duda-v2.jpg
- Dane pracowni: https://architekci-kp.pl/o-nas/ oraz publiczne dane kontaktowe pracowni.

Zdjęcia skompresowano i przeskalowano do maks. 1800 px szerokości na potrzeby szybkości ładowania. Oryginalne wizualizacje nie były przekształcane generatywnie.

## Hero

Plik: `assets/hero.webp`. Wygenerowany wcześniej w tym czacie wbudowanym narzędziem imagegen, na podstawie pierwszej oryginalnej wizualizacji KIA. Dalsze przygotowanie: kompresja WebP. Duży napis i maskę budynku wykonano w SVG w kodzie strony. Wariant AI jest oznaczony w hero; galerie pokazują oryginalne materiały. To propozycja wizualna, nie dokumentacja zrealizowanego obiektu.

Prompt użyty do generacji:

> Use case: lighting-weather. Asset: panoramic architectural website hero, 16:9 or wider. Edit the supplied actual architectural visualization of the KIA showroom in Bytom, Poland, into a refined photorealistic architectural editorial photograph. Preserve the exact building architecture, black facade geometry, glazing layout and KIA signs, camera viewpoint and perspective. Widen composition with generous pale warm-grey overcast sky above (upper 40 percent), building anchored in lower 60 percent, complete building visible. Sophisticated subdued neutral color grading, soft early morning light, realistic dark metal, warm interior glow subtle, very light atmospheric haze, desaturated greenery. Reduce distracting cars to just two understated cars in foreground, clean paving. The image should feel quiet, premium and believable, not futuristic. No added text, no added studio logos, no watermarks. Keep building roofline crisp for a later foreground masking overlay.

## Fonty

Manrope i Newsreader pobrane z Google Fonts i serwowane lokalnie. Licencje: `assets/Manrope-OFL.txt` i `assets/Newsreader-OFL.txt`.

## Hero v2 — chmury i kolorowa noc

`assets/hero-clouds.webp` i `assets/hero-night-color.webp` wygenerowano wbudowanym narzędziem imagegen. Nocny wariant dopasowano do kompozycji dziennej, zachowując kolorowe światło oraz odbicia. Wersja monochromatyczna została odrzucona i nie jest częścią strony. Pliki końcowe skompresowano do WebP.

Warstwy nieba, napisu i budynku składa SVG. Maska odwzorowuje dach i bryłę budynku, a gradient łączy ruchome niebo z otoczeniem. Ruch chmur realizuje CSS, zmiana pory dnia jest obsługiwana lokalnie w JavaScript. Napis nie jest wtopiony w wizualizację.

Prompt finalnego wariantu kolorowego:

> Edit the supplied night architectural visualization to NATURAL RICH COLOR. It must NOT be monochrome. Preserve exact geometry, camera viewpoint, crop, building roofline positions, cars and all details. Keep the exact 1870x841 panoramic composition. Change only the color and lighting: deep midnight NAVY BLUE cloudy sky, warm AMBER and golden light glowing from inside the showroom and reflecting naturally onto the wet paving, dark graphite exterior facade with subtle cool blue reflections in the upper glazing, natural dark GREEN foliage, neutral silver cars, KIA logos illuminated clean white. Premium photorealistic architectural night photography. Elegant believable contrast of warm amber interior and cool blue night, visibly colorful but restrained and refined. No new text, no added elements, no watermark.

Prompt chmur:

> Use case: photorealistic-natural. Asset type: extra wide panoramic cloud sky texture for the animated background of an architecture website. Only a realistic bright overcast sky, wispy and soft layered silver-grey clouds with a little open pale grey sky between, sophisticated quiet editorial atmosphere, monochrome black and white. Wide composition 3:1 panorama. Uniform luminosity from left to right, soft variation from darker upper clouds to pale lower sky, no dramatic sun, no horizon, no ground, no buildings, no objects, no lettering, no watermarks. Photorealistic, elegant, diffuse light, cloud details clearly visible but restrained.
