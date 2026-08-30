# Hausduell – Anleitung

Live-Quiz der Physikalischen Akademie: Schüler wählen sich mit Raumcode,
Forschername und Haus ein und antworten auf ihren Tablets; die Punkte laufen
dauerhaft auf Haus- und Forscherkonten — getrennt je Klasse.

## Die drei Dateien

| Datei | Zweck |
|---|---|
| `index.html` | die App (nie anfassen) |
| `fragen.js` | **alles Pflegbare**: Fragen, Klassen, PIN, Firebase-Zugang |
| `ANLEITUNG.md` | dieses Dokument |

## Erstes Ausprobieren (ohne alles)

`index.html` doppelklicken → Lehrerbereich → PIN `3141` → „Demo-Runde
(mit Übungsrobotern)". Es läuft der komplette Ablauf mit acht Robotern.
Im Demo-Modus bleibt alles nur auf diesem Gerät.

## Einmaliges Setup für den echten Betrieb (ca. 15 min)

1. https://console.firebase.google.com öffnen, mit Google-Konto anmelden,
   **„Projekt hinzufügen"** (Name z. B. `hausduell`), Google Analytics AUS.
2. Links **Build → Realtime Database → Datenbank erstellen**.
   Als Standort **`europe-west1` (Belgien)** wählen. „Gesperrter Modus" wählen.
3. Reiter **„Regeln"** öffnen, alles ersetzen durch:

   ```json
   {
     "rules": {
       "duell": {
         ".read": true,
         ".write": true
       }
     }
   }
   ```

   „Veröffentlichen" klicken. (Die Daten sind ausschließlich Spielstände
   unter Pseudonymen — deshalb ist diese einfache Regel vertretbar.)
4. Zahnrad oben links → **Projekteinstellungen** → unten „Meine Apps" →
   **Web-App** (`</>`-Symbol) anlegen (Name egal, kein Hosting). Firebase
   zeigt einen Block `const firebaseConfig = { … }`.
5. Diese Zeilen in `fragen.js` bei `firebase:` eintragen (das Beispiel dort
   zeigt das Format). Diese Werte sind öffentlich — kein Geheimnis.
6. Ordner `Hausduell` ins GitHub-Repository hochladen (wie die Spiele),
   QR-Code auf die Adresse erzeugen. Fertig — der QR-Code bleibt für immer
   derselbe.

## Ablauf im Unterricht

1. Lehrergerät: Seite öffnen → Lehrerbereich → PIN → Klasse wählen →
   Themengebiete ankreuzen → Fragenanzahl → **Runde starten**.
2. Beamer zeigt den vierstelligen Raumcode. Schüler scannen den QR-Code,
   geben den Code ein, wählen Forschername und (beim ersten Mal) ihr Haus.
   Ab dann ist der Name fest mit dem Haus verbunden.
3. **Duell beginnen** — Fragen laufen automatisch: Countdown, Auflösung mit
   Antwortverteilung. Bei Konfusius-Fragen lost die App ein Kind aus, das
   die Begründung liefert („Begründung sitzt" = +250 Punkte).
4. Endstand: Hauspunkte der Runde = **Mittelwert der angetretenen
   Mitglieder** (faire Wertung bei Kranken). **„Punkte auf die Jahreskonten
   übertragen"** klicken — sonst verfällt die Runde.

Die Haustafel mit den Jahresständen steht jederzeit im Lehrerbereich.
Einzelpunkte der Forscher sieht nur der Lehrerbereich, nie die Klasse.

## Fragen ergänzen oder ändern

`fragen.js` in einem Texteditor öffnen, einen Fragenblock kopieren und
anpassen — das Format ist oben in der Datei erklärt (stunde, thema,
kategorie wissen/konfusius, 2–4 Antworten, `richtig` = Index der richtigen
Antwort, ab 0 gezählt). Datei speichern, neu ins Repository hochladen —
Konten und QR-Code bleiben unberührt. Bei jedem neuen Stundenbau liefert
Claude die passenden neuen Fragenblöcke mit.

## Klassen, Namen, PIN

Alles oben in `fragen.js` unter `KONFIG`: `klassen` erweitern (z. B. "6c"),
`lehrerPin` ändern, `forschernamen` austauschen. Je Klasse werden eigene
Konten geführt; die Forschernamen-Liste gilt für alle Klassen (derselbe Name
kann in 6a und 6b von verschiedenen Kindern geführt werden).

## Datenschutz

In der Datenbank stehen ausschließlich Forschernamen (Pseudonyme), Häuser
und Punktzahlen — keine Klarnamen, keine Geräte- oder Kontaktdaten. Die
Zuordnungsliste Forschername ↔ Kind führst du nur auf Papier. Serverstandort
ist die EU (Belgien).
