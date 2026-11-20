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

Alle Inhalte sind fertig. Domain: **coachingwalkandtalk.de** (Namecheap), Hosting: **Firebase Hosting**.
Die Startseite ist für Suchmaschinen freigegeben und verweist per `canonical` auf die Domain.

1. Firebase-Projekt anlegen (ohne Google Analytics, ohne Gemini), Data Processing and Security Terms akzeptieren.
2. Projekt-ID in `.firebaserc` eintragen und veröffentlichen (siehe „Hosting“).
3. In Firebase die Domain hinzufügen und die angezeigten DNS-Einträge bei Namecheap (Advanced DNS) eintragen.
4. Danach die Vercel-Vorschau löschen.
5. Empfohlen: Beratungsbedingungen einmal anwaltlich prüfen lassen; E-Mail-Dienst mit Vertrag zur
   Auftragsverarbeitung statt Gmail (siehe unten).
6. Falls das Finanzamt eine Wirtschafts-Identifikationsnummer zuteilt: im Impressum ergänzen.

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

**Live:** Firebase Hosting, Domain https://coachingwalkandtalk.de. `firebase.json` legt fest, dass nur die
Website veröffentlicht wird (nicht `README.md`, `DESIGN.md`, `vorlagen/`, `dokumente/`).

Veröffentlichen (einmalig Node.js installieren; im Projektordner):

```bash
npx firebase-tools login
```

```bash
npx firebase-tools deploy --only hosting
```

**Vorschau (alt):** https://johanna-isaza.vercel.app, nur zur Ansicht und mit `noindex`; wird nach dem
Livegang gelöscht. Der kostenlose Vercel-Tarif ist nicht für kommerzielle Nutzung gedacht.

## Rechtlicher Rahmen

Als *geprüfte Psychologische Beraterin (VFP)* keine Begriffe wie „Therapie“, „Behandlung“, „Patient“,
„Diagnose“ oder „Psychologin“ für das eigene Angebot verwenden und keine Heilversprechen machen.
Der Hinweis „keine Psychotherapie / keine Heilkunde“ muss erhalten bleiben.
Aussagen über die Wirkung von Bewegung sind bewusst mit „kann“ formuliert (keine Wirkversprechen).
