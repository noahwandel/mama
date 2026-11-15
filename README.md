# Website – Johanna Isaza, Psychologische Beratung

Statische Website (HTML/CSS/JS, kein Build nötig). Einfach `index.html` im Browser öffnen.

- `index.html` – Startseite (Hero, Themen, Angebot „Zwei Wege, ein Ziel“, Beratung in Bewegung, Über mich, Ablauf, Honorar, FAQ, Kontakt)
- `impressum.html`, `datenschutz.html` – Pflichtseiten
- `assets/` – CSS, JS, Bilder und lokal eingebundene Schriften (keine Google-Server → DSGVO)

**Ansprache:** durchgehend „Sie“. Angezeigt wird der Name „Johanna Isaza“; im Impressum und in der
Datenschutzerklärung steht der vollständige Name „Johanna Isaza Merchan“.

**Formate:** online, telefonisch, persönlich im Beratungsraum und als Beratung in Bewegung (Spaziergänge).
Das Kontaktformular fragt das gewünschte Format ab und öffnet das E-Mail-Programm der Besucherin bzw. des
Besuchers; es werden keine Daten über die Website übertragen.

## Vor dem Livegang

1. Gelb markierte Stellen (`class="ph"`) ersetzen: Ort, Adresse, Telefon, E-Mail, Preise, Dauer der
   Beratung in Bewegung, Treffpunkt, USt-Hinweis, Bildnachweis, Hosting-Anbieter, Videodienst, Aufsichtsbehörde.
   Alle noch offenen Stellen finden: `grep -n 'class="ph"' *.html`
2. Nicht gelb markiert, aber ebenfalls zu ersetzen:
   - `tel:+490000000000` in `index.html` (Kontaktbereich und „Anrufen“-Button auf dem Handy)
   - `mailto:kontakt@example.de` in `index.html`
   - `RECIPIENT` in `assets/js/main.js` (Empfänger des Kontaktformulars)
3. Das Entwurfs-Banner (`.draft-banner`) in allen drei HTML-Dateien entfernen.
4. In `index.html` die Zeile `<meta name="robots" content="noindex">` entfernen, damit Suchmaschinen die
   Startseite aufnehmen (Impressum und Datenschutz bleiben bewusst auf `noindex`).

## Hosting

Die Seite liegt auf Vercel im Projekt `johanna-isaza`: https://johanna-isaza.vercel.app
(keine Konfiguration nötig, statische Dateien). `.vercelignore` hält `README.md` und `DESIGN.md`
von der veröffentlichten Seite fern.

Neu veröffentlichen (im Projektordner, einmalig vorher `npx vercel link --project johanna-isaza`):

```bash
npx vercel deploy --prod
```

## Rechtlicher Rahmen

Als *geprüfte Psychologische Beraterin (VFP)* keine Begriffe wie „Therapie“, „Behandlung“, „Patient“,
„Diagnose“ oder „Psychologin“ für das eigene Angebot verwenden und keine Heilversprechen machen.
Der Hinweis „keine Psychotherapie / keine Heilkunde“ muss erhalten bleiben.
Aussagen über die Wirkung von Bewegung sind bewusst mit „kann“ formuliert (keine Wirkversprechen).
