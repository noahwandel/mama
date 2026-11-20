# Website – Johanna Isaza, Psychologische Beratung

Statische Website (HTML/CSS/JS, kein Build nötig). Einfach `index.html` im Browser öffnen.

- `index.html` – Startseite (Hero, Themen, Angebot „Zwei Wege, ein Ziel“, Beratung in Bewegung, Über mich, Ablauf, Honorar, FAQ, Kontakt)
- `impressum.html`, `datenschutz.html`, `beratungsbedingungen.html` – Pflichtseiten und Beratungsbedingungen (inkl. Widerrufsbelehrung)
- `vorlagen/` – E-Mail-Vorlagen für Terminvereinbarungen (nicht Teil der Website)
- `dokumente/` – Erklärung der Website für Johanna auf Spanisch (PDF, nicht Teil der Website)
- `assets/` – CSS, JS, Bilder und lokal eingebundene Schriften (keine Google-Server → DSGVO)

**Ansprache:** durchgehend „Sie“. Angezeigt wird der Name „Johanna Isaza“; im Impressum, in der
Datenschutzerklärung und in den Beratungsbedingungen steht der vollständige Name „Johanna Isaza Merchan“.

**Formate:** online, telefonisch und als Beratung in Bewegung (Spaziergänge in Bremen). Kein Beratungsraum.
Das Kontaktformular fragt das gewünschte Format ab und öffnet das E-Mail-Programm der Besucherin bzw. des
Besuchers; es werden keine Daten über die Website übertragen.

## Vor dem Livegang

Alle Inhalte sind fertig: keine gelben Platzhalter und kein Entwurfs-Banner mehr. Offen ist nur die
Veröffentlichung:

1. Endgültigen Hoster und Domain festlegen; Abschnitt „Hosting“ in der Datenschutzerklärung anpassen
   (derzeit Vercel, nur als Vorschau).
2. In `index.html` die Zeile `<meta name="robots" content="noindex">` entfernen, sobald die Seite unter der
   endgültigen Domain liegt (die Rechtstexte bleiben bewusst auf `noindex`).
3. Empfohlen: Beratungsbedingungen einmal anwaltlich prüfen lassen; E-Mail-Dienst mit Vertrag zur
   Auftragsverarbeitung statt Gmail (siehe unten).
4. Falls das Finanzamt eine Wirtschafts-Identifikationsnummer zuteilt: im Impressum ergänzen.

## Im Alltag (rechtlich wichtig)

- **Termine per E-Mail vereinbaren** mit den Vorlagen in `vorlagen/terminvorschlag.md`: Terminvorschlag mit
  den Beratungsbedingungen, der Widerrufsbelehrung und dem Muster-Widerrufsformular **im Text oder als
  PDF-Anhang** (ein Link genügt nicht), dann Bestätigung. Liegt der Termin innerhalb von 14 Tagen, muss die
  Klientin bzw. der Klient den vorzeitigen Beginn ausdrücklich verlangen (Satz steht in der Vorlage).
- **Videodienst:** Vor dem ersten Online-Termin mitteilen, welcher Dienst genutzt wird und ob Daten
  außerhalb der EU verarbeitet werden. Am besten einen Dienst mit Sitz in der EU, Verschlüsselung und
  Vertrag zur Auftragsverarbeitung wählen.
- **Einwilligung für Gesundheitsdaten** (Art. 9 DSGVO) von Klientinnen und Klienten schriftlich einholen.
- **E-Mail:** Die Seite nennt eine Gmail-Adresse. Für Klientendaten ist ein E-Mail-Dienst mit Vertrag zur
  Auftragsverarbeitung (z. B. eine eigene Domain bei einem EU-Anbieter) die bessere Wahl; dann
  Datenschutzerklärung, Impressum, Kontaktbereich und `RECIPIENT` in `assets/js/main.js` anpassen.

## Hosting

**Vorschau:** https://johanna-isaza.vercel.app (Vercel-Projekt `johanna-isaza`), nur damit Johanna den
Entwurf ansehen kann; nicht von Suchmaschinen erfasst. Die eigentliche Veröffentlichung folgt separat
(keine Konfiguration nötig, statische Dateien). `.vercelignore` hält `README.md` und `DESIGN.md`
von der veröffentlichten Seite fern.

**Für die Veröffentlichung:** Der kostenlose Hobby-Tarif von Vercel ist nur für private, nicht kommerzielle
Nutzung erlaubt. Die öffentliche Praxis-Website also bei Vercel Pro oder einem (EU-)Webhoster mit eigener
Domain veröffentlichen und den Abschnitt „Hosting“ in der Datenschutzerklärung anpassen.

Vorschau aktualisieren (im Projektordner, einmalig vorher `npx vercel link --project johanna-isaza`):

```bash
npx vercel deploy --prod
```

## Rechtlicher Rahmen

Als *geprüfte Psychologische Beraterin (VFP)* keine Begriffe wie „Therapie“, „Behandlung“, „Patient“,
„Diagnose“ oder „Psychologin“ für das eigene Angebot verwenden und keine Heilversprechen machen.
Der Hinweis „keine Psychotherapie / keine Heilkunde“ muss erhalten bleiben.
Aussagen über die Wirkung von Bewegung sind bewusst mit „kann“ formuliert (keine Wirkversprechen).
