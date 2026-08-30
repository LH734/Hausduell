// ============================================================
// HAUSDUELL - Konfiguration und Fragenpool
// Diese Datei ist die EINZIGE, die gepflegt werden muss.
// Fragen ergänzen: einen Block kopieren, Texte ändern, fertig.
// ============================================================

const KONFIG = {
  // Nach dem Firebase-Setup die sechs Zeilen aus der Firebase-Konsole
  // hier einfügen (Projekteinstellungen -> Meine Apps -> SDK-Konfiguration).
  // Solange firebase:null ist, läuft die App im Demo-Modus.
  firebase: {
    apiKey: "AIzaSyAHHK372VvjL0ryBWIaHNBxHgikxFG5aBY",
    authDomain: "hausduell-c96bb.firebaseapp.com",
    databaseURL: "https://hausduell-c96bb-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "hausduell-c96bb",
    storageBucket: "hausduell-c96bb.firebasestorage.app",
    messagingSenderId: "765487373707",
    appId: "1:765487373707:web:cc383fd0ad34e2e064e38e"
  },
  // Zum Zurückschalten in den Demo-Modus: den Block oben durch
  //   firebase: null,
  // ersetzen (die App läuft dann wieder nur auf diesem Gerät).

  lehrerPin: "3141",

  klassen: ["6a", "6b"],

  haeuser: [
    { id: "mechanica",      name: "Mechanica",      emoji: "⚙️", farbe: "#F5CB5E" },
    { id: "optica",         name: "Optica",         emoji: "👁️", farbe: "#B7E9E4" },
    { id: "thermodynamica", name: "Thermodynamica", emoji: "🔥", farbe: "#FFC9C9" },
    { id: "electra",        name: "Electra",        emoji: "⚡",       farbe: "#E2D4FE" }
  ],

  forschernamen: [
    "Curie", "Newton", "Einstein", "Meitner", "Galilei", "Kepler",
    "Hawking", "Noether", "Planck", "Röntgen", "Lovelace", "Tesla",
    "Bohr", "Heisenberg", "Faraday", "Maxwell", "Ohm", "Volta",
    "Ampère", "Pascal", "Archimedes", "da Vinci", "Hertz", "Celsius",
    "Kelvin", "Gauß", "Humboldt", "Franklin", "Herschel", "Kopernikus"
  ]
};

// ============================================================
// FRAGENPOOL
//   stunde:    Nummer der Stunde (für die Themenauswahl)
//   thema:     Anzeigename des Themengebiets
//   kategorie: "wissen" oder "konfusius"
//              (konfusius = Professor Konfusius behauptet ... ->
//               nach der Auflösung wird ein Kind für die
//               Begründung ausgelost, Bonuspunkte per Klick)
//   frage:     der Fragetext
//   antworten: 2 bis 4 Antwortmöglichkeiten
//   richtig:   Index der richtigen Antwort (0 = erste)
//   zeit:      Sekunden Antwortzeit
// ============================================================

const FRAGEN = [

  // ---------- Stunde 1: Die Naturwissenschaft Physik ----------
  { stunde: 1, thema: "Teilgebiete der Physik", kategorie: "wissen",
    frage: "Womit beschäftigt sich die Physik?",
    antworten: ["Mit Lebewesen und ihrem Verhalten",
                "Mit der unbelebten Natur und ihren messbaren Vorgängen",
                "Mit Stoffen und ihren Umwandlungen",
                "Mit Zahlen und Formen"],
    richtig: 1, zeit: 25 },

  { stunde: 1, thema: "Teilgebiete der Physik", kategorie: "wissen",
    frage: "Welches ist KEIN klassisches Teilgebiet der Physik?",
    antworten: ["Mechanik", "Optik", "Biologie", "Thermodynamik"],
    richtig: 2, zeit: 20 },

  { stunde: 1, thema: "Teilgebiete der Physik", kategorie: "wissen",
    frage: "Zu welchem klassischen Teilgebiet gehört der Magnetismus?",
    antworten: ["Mechanik", "Optik", "Thermodynamik", "Elektrizitätslehre"],
    richtig: 3, zeit: 20 },

  { stunde: 1, thema: "Teilgebiete der Physik", kategorie: "konfusius",
    frage: "„Die Physik kann auch erforschen, welche Musik am schönsten ist.“",
    antworten: ["Konfusius hat recht", "Konfusius irrt sich"],
    richtig: 1, zeit: 20 },

  // ---------- Stunde 2: Größen und Gesetze ----------
  { stunde: 2, thema: "Größen und Gesetze", kategorie: "wissen",
    frage: "Welche vier Angaben gehören zum Steckbrief einer physikalischen Größe?",
    antworten: ["Definition, Formelzeichen, Einheit, Messgerät",
                "Name, Farbe, Größe, Gewicht",
                "Definition, Beispiel, Skizze, Formel",
                "Formelzeichen, Einheit, Preis, Hersteller"],
    richtig: 0, zeit: 25 },

  { stunde: 2, thema: "Größen und Gesetze", kategorie: "wissen",
    frage: "Wann wird aus einer Vermutung ein physikalisches Gesetz?",
    antworten: ["Wenn sie in einem Buch steht",
                "Wenn die Mehrheit der Klasse zustimmt",
                "Wenn sie begründet ist und Experimente sie immer wieder bestätigen",
                "Wenn sie ein berühmter Forscher aufgestellt hat"],
    richtig: 2, zeit: 25 },

  { stunde: 2, thema: "Größen und Gesetze", kategorie: "wissen",
    frage: "Was ist der Unterschied zwischen einem Gesetz und einer Theorie?",
    antworten: ["Es gibt keinen Unterschied",
                "Ein Gesetz beschreibt, WAS immer passiert – eine Theorie erklärt mit einem Modell, WARUM",
                "Eine Theorie ist ein bewiesenes Gesetz",
                "Ein Gesetz gilt nur im Labor"],
    richtig: 1, zeit: 30 },

  { stunde: 2, thema: "Größen und Gesetze", kategorie: "wissen",
    frage: "Warum benutzen Forscher auf der ganzen Welt dieselben Einheiten?",
    antworten: ["Weil es das Gesetz vorschreibt",
                "Damit Messwerte überall verglichen werden können",
                "Weil Meter leichter zu messen ist als Fuß",
                "Damit die Zahlen kleiner werden"],
    richtig: 1, zeit: 25 },

  { stunde: 2, thema: "Größen und Gesetze", kategorie: "konfusius",
    frage: "„Wenn ein einziges Experiment meiner Vermutung widerspricht, ist das egal – Hauptsache, viele bestätigen sie.“",
    antworten: ["Konfusius hat recht", "Konfusius irrt sich"],
    richtig: 1, zeit: 20 },

  // ---------- Stunde 3: Längen messen ----------
  { stunde: 3, thema: "Längen messen", kategorie: "wissen",
    frage: "In welcher Reihenfolge stehen die Abschnitte eines Protokolls?",
    antworten: ["Auswertung – Messwerte – Aufgabenstellung",
                "Aufgabenstellung – Material – Vorbetrachtung – Durchführung – Messwerte – Auswertung",
                "Material – Auswertung – Durchführung – Messwerte",
                "Vorbetrachtung – Aufgabenstellung – Auswertung"],
    richtig: 1, zeit: 30 },

  { stunde: 3, thema: "Längen messen", kategorie: "wissen",
    frage: "Woran erkennt man die Messgenauigkeit eines Messmittels?",
    antworten: ["An seiner Länge",
                "An seinem Preis",
                "An der kleinsten Einheit, die man noch ablesen kann",
                "An seiner Farbe"],
    richtig: 2, zeit: 25 },

  { stunde: 3, thema: "Längen messen", kategorie: "wissen",
    frage: "Nach welchen Kriterien wählt man das passende Messmittel aus?",
    antworten: ["Nach Länge der Strecke, kleinster Messeinheit und Zuverlässigkeit",
                "Nach dem Aussehen des Messmittels",
                "Immer das längste Messmittel",
                "Immer das digitale Messmittel"],
    richtig: 0, zeit: 30 },

  { stunde: 3, thema: "Längen messen", kategorie: "wissen",
    frage: "Für welche Messung ist die iPad-App „Maßband“ die beste Wahl?",
    antworten: ["Die Dicke eines Hefters",
                "Die Länge des Schulflurs",
                "Die Breite eines Radiergummis",
                "Die Höhe eines Würfels"],
    richtig: 1, zeit: 25 },

  { stunde: 3, thema: "Längen messen", kategorie: "konfusius",
    frage: "„Ein Messfehler und eine Messungenauigkeit sind genau dasselbe.“",
    antworten: ["Konfusius hat recht", "Konfusius irrt sich"],
    richtig: 1, zeit: 20 },

  { stunde: 3, thema: "Längen messen", kategorie: "konfusius",
    frage: "„Wenn ich dreimal messe und dreimal dasselbe herauskommt, ist mein Ergebnis automatisch richtig.“",
    antworten: ["Konfusius hat recht", "Konfusius irrt sich"],
    richtig: 1, zeit: 25 },

  // ---------- Stunde 4: Sehen und Lichtmodelle ----------
  { stunde: 4, thema: "Sehen und Lichtmodelle", kategorie: "wissen",
    frage: "Wann können wir einen Körper sehen?",
    antworten: ["Wenn er groß genug ist",
                "Wenn Licht von ihm in unser Auge gelangt",
                "Wenn er sich bewegt",
                "Wenn er bunt ist"],
    richtig: 1, zeit: 25 },

  { stunde: 4, thema: "Sehen und Lichtmodelle", kategorie: "wissen",
    frage: "Auf welchen zwei Wegen kann Licht in unser Auge gelangen?",
    antworten: ["Nur direkt von der Lichtquelle",
                "Direkt von der Lichtquelle oder von einem Körper reflektiert",
                "Nur über einen Spiegel",
                "Durch geschlossene Augenlider"],
    richtig: 1, zeit: 25 },

  { stunde: 4, thema: "Sehen und Lichtmodelle", kategorie: "wissen",
    frage: "Mit welchen drei Modellen beschreibt die Physik das Licht?",
    antworten: ["Strahl, Welle, Teilchen",
                "Strahl, Kugel, Blitz",
                "Welle, Wind, Wärme",
                "Punkt, Linie, Fläche"],
    richtig: 0, zeit: 25 },

  { stunde: 4, thema: "Sehen und Lichtmodelle", kategorie: "wissen",
    frage: "Was besagt das Strahlenmodell?",
    antworten: ["Licht macht um Hindernisse einen Bogen",
                "Licht breitet sich geradlinig in alle Richtungen aus",
                "Licht fliegt im Zickzack",
                "Licht bleibt an der Lichtquelle stehen"],
    richtig: 1, zeit: 25 },

  { stunde: 4, thema: "Sehen und Lichtmodelle", kategorie: "wissen",
    frage: "Warum sieht man den Laserstrahl erst, wenn Nebel im Raum ist?",
    antworten: ["Der Nebel macht das Licht heller",
                "Die Tröpfchen reflektieren Licht in unser Auge",
                "Der Laser wird im Nebel stärker",
                "Nebel färbt das Licht rot"],
    richtig: 1, zeit: 30 },

  { stunde: 4, thema: "Sehen und Lichtmodelle", kategorie: "konfusius",
    frage: "„Katzen können auch in einem völlig dunklen Raum sehen.“",
    antworten: ["Konfusius hat recht", "Konfusius irrt sich"],
    richtig: 1, zeit: 20 },

  { stunde: 4, thema: "Sehen und Lichtmodelle", kategorie: "konfusius",
    frage: "„Man kann einen Lichtstrahl von der Seite sehen, während er durch klare Luft läuft.“",
    antworten: ["Konfusius hat recht", "Konfusius irrt sich"],
    richtig: 1, zeit: 25 }

];
