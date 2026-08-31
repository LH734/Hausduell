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
//   stufe:     Klassenstufe (6, 7, ...) - danach wählt die App
//              den passenden Teil des Katalogs für jede Klasse
//   stunde:    Nummer der Stunde (für die Themenauswahl)
//   thema:     Anzeigename des Themengebiets
//   kategorie: "wissen" oder "konfusius"
//              (konfusius = Professor Konfusius behauptet ... ->
//               nach der Auflösung wird ein Kind für die
//               Begründung ausgelost, Bonuspunkte per Klick)
//              WICHTIG: Konfusius soll manchmal auch recht haben,
//              sonst ist die Antwort zu leicht zu raten.
//   frage:     der Fragetext
//   antworten: 2 bis 4 Antwortmöglichkeiten
//   richtig:   Index der richtigen Antwort (0 = erste)
//   zeit:      Sekunden Antwortzeit
// ============================================================

const FRAGEN = [

  // ---------- Stunde 1: Die Naturwissenschaft Physik ----------
  { stufe: 6, stunde: 1, thema: "Teilgebiete der Physik", kategorie: "wissen",
    frage: "Womit beschäftigt sich die Physik?",
    antworten: ["Mit Lebewesen und ihrem Verhalten",
                "Mit der unbelebten Natur und ihren messbaren Vorgängen",
                "Mit Stoffen und ihren Umwandlungen",
                "Mit Zahlen und Formen"],
    richtig: 1, zeit: 25 },

  { stufe: 6, stunde: 1, thema: "Teilgebiete der Physik", kategorie: "wissen",
    frage: "Welches ist KEIN klassisches Teilgebiet der Physik?",
    antworten: ["Mechanik", "Optik", "Biologie", "Thermodynamik"],
    richtig: 2, zeit: 20 },

  { stufe: 6, stunde: 1, thema: "Teilgebiete der Physik", kategorie: "wissen",
    frage: "Zu welchem klassischen Teilgebiet gehört der Magnetismus?",
    antworten: ["Mechanik", "Optik", "Thermodynamik", "Elektrizitätslehre"],
    richtig: 3, zeit: 20 },

  { stufe: 6, stunde: 1, thema: "Teilgebiete der Physik", kategorie: "konfusius",
    frage: "„Die Physik kann auch erforschen, welche Musik am schönsten ist.“",
    antworten: ["Konfusius hat recht", "Konfusius irrt sich"],
    richtig: 1, zeit: 20 },

  { stufe: 6, stunde: 1, thema: "Teilgebiete der Physik", kategorie: "konfusius",
    frage: "„Auch der Regenbogen ist ein Thema für die Physik.“",
    antworten: ["Konfusius hat recht", "Konfusius irrt sich"],
    richtig: 0, zeit: 20 },

  { stufe: 6, stunde: 1, thema: "Teilgebiete der Physik", kategorie: "wissen",
    frage: "Ein Forscher untersucht, warum ein Eiswürfel in der Sonne schmilzt. Zu welchem Teilgebiet gehört das?",
    antworten: ["Mechanik", "Optik", "Thermodynamik", "Elektrizitätslehre"],
    richtig: 2, zeit: 25 },

  { stufe: 6, stunde: 1, thema: "Teilgebiete der Physik", kategorie: "wissen",
    frage: "Eine Forscherin untersucht, wie ein Regenbogen entsteht. In welchem Teilgebiet arbeitet sie?",
    antworten: ["Optik", "Thermodynamik", "Mechanik", "Magnetismus"],
    richtig: 0, zeit: 25 },

  { stufe: 6, stunde: 1, thema: "Teilgebiete der Physik", kategorie: "wissen",
    frage: "Ein Fahrrad bremst und kommt zum Stehen. Welches Teilgebiet untersucht die Kräfte dabei?",
    antworten: ["Optik", "Mechanik", "Elektrizitätslehre", "Thermodynamik"],
    richtig: 1, zeit: 25 },

  { stufe: 6, stunde: 1, thema: "Teilgebiete der Physik", kategorie: "wissen",
    frage: "Blitze und elektrischer Strom gehören zu welchem Teilgebiet?",
    antworten: ["Mechanik", "Thermodynamik", "Optik", "Elektrizitätslehre"],
    richtig: 3, zeit: 20 },

  { stufe: 6, stunde: 1, thema: "Teilgebiete der Physik", kategorie: "wissen",
    frage: "Welches gehört zu den MODERNEN Teilgebieten der Physik?",
    antworten: ["Mechanik", "Astrophysik", "Optik", "Thermodynamik"],
    richtig: 1, zeit: 25 },

  { stufe: 6, stunde: 1, thema: "Teilgebiete der Physik", kategorie: "konfusius",
    frage: "„Beim Fußballspielen kann man Physik beobachten.“",
    antworten: ["Konfusius hat recht", "Konfusius irrt sich"],
    richtig: 0, zeit: 20 },

  // ---------- Stunde 2: Größen und Gesetze ----------
  { stufe: 6, stunde: 2, thema: "Größen und Gesetze", kategorie: "wissen",
    frage: "Welche vier Angaben gehören zum Steckbrief einer physikalischen Größe?",
    antworten: ["Definition, Formelzeichen, Einheit, Messgerät",
                "Name, Farbe, Größe, Gewicht",
                "Definition, Beispiel, Skizze, Formel",
                "Formelzeichen, Einheit, Preis, Hersteller"],
    richtig: 0, zeit: 25 },

  { stufe: 6, stunde: 2, thema: "Größen und Gesetze", kategorie: "wissen",
    frage: "Wann wird aus einer Vermutung ein physikalisches Gesetz?",
    antworten: ["Wenn sie in einem Buch steht",
                "Wenn die Mehrheit der Klasse zustimmt",
                "Wenn sie begründet ist und Experimente sie immer wieder bestätigen",
                "Wenn sie ein berühmter Forscher aufgestellt hat"],
    richtig: 2, zeit: 25 },

  { stufe: 6, stunde: 2, thema: "Größen und Gesetze", kategorie: "wissen",
    frage: "Was ist der Unterschied zwischen einem Gesetz und einer Theorie?",
    antworten: ["Es gibt keinen Unterschied",
                "Ein Gesetz beschreibt, WAS immer passiert – eine Theorie erklärt mit einem Modell, WARUM",
                "Eine Theorie ist ein bewiesenes Gesetz",
                "Ein Gesetz gilt nur im Labor"],
    richtig: 1, zeit: 30 },

  { stufe: 6, stunde: 2, thema: "Größen und Gesetze", kategorie: "wissen",
    frage: "Warum benutzen Forscher auf der ganzen Welt dieselben Einheiten?",
    antworten: ["Weil es das Gesetz vorschreibt",
                "Damit Messwerte überall verglichen werden können",
                "Weil Meter leichter zu messen ist als Fuß",
                "Damit die Zahlen kleiner werden"],
    richtig: 1, zeit: 25 },

  { stufe: 6, stunde: 2, thema: "Größen und Gesetze", kategorie: "konfusius",
    frage: "„Wenn ein einziges Experiment meiner Vermutung widerspricht, ist das egal – Hauptsache, viele bestätigen sie.“",
    antworten: ["Konfusius hat recht", "Konfusius irrt sich"],
    richtig: 1, zeit: 20 },

  { stufe: 6, stunde: 2, thema: "Größen und Gesetze", kategorie: "konfusius",
    frage: "„Ein physikalisches Gesetz kann durch ein einziges neues Experiment ins Wanken geraten.“",
    antworten: ["Konfusius hat recht", "Konfusius irrt sich"],
    richtig: 0, zeit: 25 },

  { stufe: 6, stunde: 2, thema: "Größen und Gesetze", kategorie: "wissen",
    frage: "Welche davon ist eine physikalische Größe?",
    antworten: ["Die Freundlichkeit", "Die Länge", "Der Geschmack", "Das Glück"],
    richtig: 1, zeit: 20 },

  { stufe: 6, stunde: 2, thema: "Größen und Gesetze", kategorie: "wissen",
    frage: "Warum kann man Schönheit nicht physikalisch messen?",
    antworten: ["Weil sie zu groß ist",
                "Weil jeder sie anders beurteilt und es keinen Vergleichswert gibt",
                "Weil es kein Messgerät dafür zu kaufen gibt",
                "Weil sie sich zu schnell ändert"],
    richtig: 1, zeit: 25 },

  { stufe: 6, stunde: 2, thema: "Größen und Gesetze", kategorie: "wissen",
    frage: "Lisa vermutet: Schwere Körper fallen schneller als leichte. Was muss geschehen, damit daraus ein Gesetz werden könnte?",
    antworten: ["Sie muss die Vermutung aufschreiben",
                "Sie muss sie begründen und Experimente müssen sie immer wieder bestätigen",
                "Ihre Lehrerin muss zustimmen",
                "Sie muss sie im Internet veröffentlichen"],
    richtig: 1, zeit: 30 },

  { stufe: 6, stunde: 2, thema: "Größen und Gesetze", kategorie: "wissen",
    frage: "Ein wiederholbares Experiment widerspricht einem Gesetz. Was folgt daraus?",
    antworten: ["Das Experiment wird ignoriert",
                "Das Gesetz muss überprüft und vielleicht geändert werden",
                "Das Experiment war automatisch falsch",
                "Nichts, Gesetze gelten immer"],
    richtig: 1, zeit: 30 },

  { stufe: 6, stunde: 2, thema: "Größen und Gesetze", kategorie: "wissen",
    frage: "Wozu benutzt die Physik Modelle?",
    antworten: ["Zum Ausschmücken von Büchern",
                "Um komplizierte oder unsichtbare Dinge vereinfacht zu erklären",
                "Um Experimente zu ersetzen",
                "Um Messwerte schöner zu machen"],
    richtig: 1, zeit: 25 },

  { stufe: 6, stunde: 2, thema: "Größen und Gesetze", kategorie: "konfusius",
    frage: "„Auch eine berühmte Forscherin muss ihre Vermutung mit Experimenten belegen.“",
    antworten: ["Konfusius hat recht", "Konfusius irrt sich"],
    richtig: 0, zeit: 20 },

  // ---------- Stunde 3: Längen messen ----------
  { stufe: 6, stunde: 3, thema: "Längen messen", kategorie: "wissen",
    frage: "In welcher Reihenfolge stehen die Abschnitte eines Protokolls?",
    antworten: ["Auswertung – Messwerte – Aufgabenstellung",
                "Aufgabenstellung – Material – Vorbetrachtung – Durchführung – Messwerte – Auswertung",
                "Material – Auswertung – Durchführung – Messwerte",
                "Vorbetrachtung – Aufgabenstellung – Auswertung"],
    richtig: 1, zeit: 30 },

  { stufe: 6, stunde: 3, thema: "Längen messen", kategorie: "wissen",
    frage: "Woran erkennt man die Messgenauigkeit eines Messmittels?",
    antworten: ["An seiner Länge",
                "An seinem Preis",
                "An der kleinsten Einheit, die man noch ablesen kann",
                "An seiner Farbe"],
    richtig: 2, zeit: 25 },

  { stufe: 6, stunde: 3, thema: "Längen messen", kategorie: "wissen",
    frage: "Nach welchen Kriterien wählt man das passende Messmittel aus?",
    antworten: ["Nach Länge der Strecke, kleinster Messeinheit und Zuverlässigkeit",
                "Nach dem Aussehen des Messmittels",
                "Immer das längste Messmittel",
                "Immer das digitale Messmittel"],
    richtig: 0, zeit: 30 },

  { stufe: 6, stunde: 3, thema: "Längen messen", kategorie: "wissen",
    frage: "Für welche Messung ist die iPad-App „Maßband“ die beste Wahl?",
    antworten: ["Die Dicke eines Hefters",
                "Die Länge des Schulflurs",
                "Die Breite eines Radiergummis",
                "Die Höhe eines Würfels"],
    richtig: 1, zeit: 25 },

  { stufe: 6, stunde: 3, thema: "Längen messen", kategorie: "konfusius",
    frage: "„Ein Messfehler und eine Messungenauigkeit sind genau dasselbe.“",
    antworten: ["Konfusius hat recht", "Konfusius irrt sich"],
    richtig: 1, zeit: 20 },

  { stufe: 6, stunde: 3, thema: "Längen messen", kategorie: "konfusius",
    frage: "„Wer mehrmals misst, kann einen Messfehler leichter entdecken.“",
    antworten: ["Konfusius hat recht", "Konfusius irrt sich"],
    richtig: 0, zeit: 20 },

  { stufe: 6, stunde: 3, thema: "Längen messen", kategorie: "wissen",
    frage: "Du sollst die Dicke einer Münze messen. Welches Messmittel passt am besten?",
    antworten: ["Zollstock", "Lineal mit Millimeterstrichen",
                "iPad-App „Maßband“", "Schritte zählen"],
    richtig: 1, zeit: 25 },

  { stufe: 6, stunde: 3, thema: "Längen messen", kategorie: "wissen",
    frage: "Du sollst die Länge des Sportplatzes bestimmen. Welches Messmittel passt am besten?",
    antworten: ["Lineal", "Geodreieck", "iPad-App „Maßband“", "Daumenbreite"],
    richtig: 2, zeit: 25 },

  { stufe: 6, stunde: 3, thema: "Längen messen", kategorie: "wissen",
    frage: "Was gehört in den Abschnitt „Messwerte“ eines Protokolls?",
    antworten: ["Eine Tabelle mit allen gemessenen Werten",
                "Die Begründung der Vermutung",
                "Die Liste der Geräte",
                "Die Auswertung der Ergebnisse"],
    richtig: 0, zeit: 25 },

  { stufe: 6, stunde: 3, thema: "Längen messen", kategorie: "wissen",
    frage: "Wodurch entsteht ein Messfehler?",
    antworten: ["Durch die kleinste Einheit des Messmittels",
                "Durch schiefes Ansetzen oder falsches Ablesen",
                "Durch zu häufiges Messen",
                "Durch das Aufschreiben der Werte"],
    richtig: 1, zeit: 25 },

  { stufe: 6, stunde: 3, thema: "Längen messen", kategorie: "wissen",
    frage: "Warum misst man dieselbe Strecke am besten dreimal?",
    antworten: ["Damit die Stunde schneller vergeht",
                "Weil das Messmittel sich ausruhen muss",
                "Um Messfehler zu bemerken",
                "Damit die Zahl größer wird"],
    richtig: 2, zeit: 25 },

  { stufe: 6, stunde: 3, thema: "Längen messen", kategorie: "konfusius",
    frage: "„Auch mit einem sehr guten Messmittel bleibt eine kleine Messungenauigkeit.“",
    antworten: ["Konfusius hat recht", "Konfusius irrt sich"],
    richtig: 0, zeit: 25 },

  { stufe: 6, stunde: 3, thema: "Längen messen", kategorie: "konfusius",
    frage: "„Wenn ich dreimal messe und dreimal dasselbe herauskommt, ist mein Ergebnis automatisch richtig.“",
    antworten: ["Konfusius hat recht", "Konfusius irrt sich"],
    richtig: 1, zeit: 25 },

  // ---------- Stunde 4: Sehen und Lichtmodelle ----------
  { stufe: 6, stunde: 4, thema: "Sehen und Lichtmodelle", kategorie: "wissen",
    frage: "Wann können wir einen Körper sehen?",
    antworten: ["Wenn er groß genug ist",
                "Wenn Licht von ihm in unser Auge gelangt",
                "Wenn er sich bewegt",
                "Wenn er bunt ist"],
    richtig: 1, zeit: 25 },

  { stufe: 6, stunde: 4, thema: "Sehen und Lichtmodelle", kategorie: "wissen",
    frage: "Auf welchen zwei Wegen kann Licht in unser Auge gelangen?",
    antworten: ["Nur direkt von der Lichtquelle",
                "Direkt von der Lichtquelle oder von einem Körper reflektiert",
                "Nur über einen Spiegel",
                "Durch geschlossene Augenlider"],
    richtig: 1, zeit: 25 },

  { stufe: 6, stunde: 4, thema: "Sehen und Lichtmodelle", kategorie: "wissen",
    frage: "Mit welchen drei Modellen beschreibt die Physik das Licht?",
    antworten: ["Strahl, Welle, Teilchen",
                "Strahl, Kugel, Blitz",
                "Welle, Wind, Wärme",
                "Punkt, Linie, Fläche"],
    richtig: 0, zeit: 25 },

  { stufe: 6, stunde: 4, thema: "Sehen und Lichtmodelle", kategorie: "wissen",
    frage: "Was besagt das Strahlenmodell?",
    antworten: ["Licht macht um Hindernisse einen Bogen",
                "Licht breitet sich geradlinig in alle Richtungen aus",
                "Licht fliegt im Zickzack",
                "Licht bleibt an der Lichtquelle stehen"],
    richtig: 1, zeit: 25 },

  { stufe: 6, stunde: 4, thema: "Sehen und Lichtmodelle", kategorie: "wissen",
    frage: "Warum sieht man den Laserstrahl erst, wenn Nebel im Raum ist?",
    antworten: ["Der Nebel macht das Licht heller",
                "Die Tröpfchen reflektieren Licht in unser Auge",
                "Der Laser wird im Nebel stärker",
                "Nebel färbt das Licht rot"],
    richtig: 1, zeit: 30 },

  { stufe: 6, stunde: 4, thema: "Sehen und Lichtmodelle", kategorie: "konfusius",
    frage: "„Katzen können auch in einem völlig dunklen Raum sehen.“",
    antworten: ["Konfusius hat recht", "Konfusius irrt sich"],
    richtig: 1, zeit: 20 },

  { stufe: 6, stunde: 4, thema: "Sehen und Lichtmodelle", kategorie: "konfusius",
    frage: "„Man kann einen Lichtstrahl von der Seite sehen, während er durch klare Luft läuft.“",
    antworten: ["Konfusius hat recht", "Konfusius irrt sich"],
    richtig: 1, zeit: 25 },

  { stufe: 6, stunde: 4, thema: "Sehen und Lichtmodelle", kategorie: "konfusius",
    frage: "„In einem Raum ganz ohne Licht sieht auch der beste Mensch nichts – egal, wie lange er wartet.“",
    antworten: ["Konfusius hat recht", "Konfusius irrt sich"],
    richtig: 0, zeit: 25 },

  { stufe: 6, stunde: 4, thema: "Sehen und Lichtmodelle", kategorie: "wissen",
    frage: "Tina steht auf einer Bühne im Dunkeln, Marco im Scheinwerferlicht. Warum kann Tina Marco sehen, aber Marco Tina nicht?",
    antworten: ["Marco hat schlechtere Augen",
                "Von Tina gelangt kein Licht in Marcos Auge",
                "Tina ist zu weit weg",
                "Das Scheinwerferlicht blendet Tina"],
    richtig: 1, zeit: 30 },

  { stufe: 6, stunde: 4, thema: "Sehen und Lichtmodelle", kategorie: "wissen",
    frage: "Was kann mit Licht passieren, wenn es auf einen Körper trifft?",
    antworten: ["Es wird reflektiert oder absorbiert",
                "Es bleibt vor dem Körper stehen",
                "Es macht einen Bogen um den Körper",
                "Es wird immer schneller"],
    richtig: 0, zeit: 25 },

  { stufe: 6, stunde: 4, thema: "Sehen und Lichtmodelle", kategorie: "wissen",
    frage: "Wie zeichnet man einen Lichtstrahl richtig?",
    antworten: ["Als Wellenlinie",
                "Als gerade Linie mit Pfeilspitze, mit dem Lineal",
                "Als gestrichelten Kreis",
                "Als dicken gelben Balken"],
    richtig: 1, zeit: 25 },

  { stufe: 6, stunde: 4, thema: "Sehen und Lichtmodelle", kategorie: "wissen",
    frage: "Warum sieht man Sonnenstrahlen im Wald nur bei Frühnebel?",
    antworten: ["Die Sonne scheint dann stärker",
                "Die Nebeltröpfchen reflektieren Licht in unser Auge",
                "Die Bäume leuchten dann",
                "Ohne Nebel gibt es keine Sonnenstrahlen"],
    richtig: 1, zeit: 30 },

  { stufe: 6, stunde: 4, thema: "Sehen und Lichtmodelle", kategorie: "konfusius",
    frage: "„Ein Lichtstrahl macht von allein einen Bogen um Hindernisse herum.“",
    antworten: ["Konfusius hat recht", "Konfusius irrt sich"],
    richtig: 1, zeit: 25 },

  // ---------- Stunde 5: Lichtquellen ----------
  { stufe: 6, stunde: 5, thema: "Lichtquellen", kategorie: "wissen",
    frage: "Was ist eine Lichtquelle?",
    antworten: ["Ein Körper, der Licht aussendet",
                "Ein Körper, der Licht verschluckt",
                "Ein Körper, den man ansehen kann",
                "Ein Gerät mit Batterie"],
    richtig: 0, zeit: 25 },

  { stufe: 6, stunde: 5, thema: "Lichtquellen", kategorie: "wissen",
    frage: "Was ist eine direkte Lichtquelle?",
    antworten: ["Ein Körper, der Licht reflektiert",
                "Ein Körper, der von selbst leuchtet",
                "Ein Körper, der immer heiß ist",
                "Ein Körper, der Strom braucht"],
    richtig: 1, zeit: 25 },

  { stufe: 6, stunde: 5, thema: "Lichtquellen", kategorie: "wissen",
    frage: "Warum können wir den Mond sehen?",
    antworten: ["Er leuchtet von selbst",
                "Er reflektiert das Sonnenlicht",
                "Er ist eine heiße Lichtquelle",
                "Er brennt"],
    richtig: 1, zeit: 25 },

  { stufe: 6, stunde: 5, thema: "Lichtquellen", kategorie: "wissen",
    frage: "Welche Lichtquelle ist ein nichtthermischer Strahler (leuchtet ohne große Wärme)?",
    antworten: ["Kerze", "Glühlampe", "Glühwürmchen", "Feuer"],
    richtig: 2, zeit: 25 },

  { stufe: 6, stunde: 5, thema: "Lichtquellen", kategorie: "wissen",
    frage: "Welcher Körper ist eine indirekte Lichtquelle?",
    antworten: ["Blitz", "Warnweste", "LED", "Kerzenflamme"],
    richtig: 1, zeit: 20 },

  { stufe: 6, stunde: 5, thema: "Lichtquellen", kategorie: "konfusius",
    frage: "„Eine Warnweste leuchtet von selbst – deshalb sieht man sie im Dunkeln so gut.“",
    antworten: ["Konfusius hat recht", "Konfusius irrt sich"],
    richtig: 1, zeit: 25 },

  { stufe: 6, stunde: 5, thema: "Lichtquellen", kategorie: "konfusius",
    frage: "„Auch ein weißes Blatt Papier kann eine Lichtquelle sein, wenn Licht darauf fällt.“",
    antworten: ["Konfusius hat recht", "Konfusius irrt sich"],
    richtig: 0, zeit: 25 },

  { stufe: 6, stunde: 5, thema: "Lichtquellen", kategorie: "wissen",
    frage: "Warum funktioniert eine Warnweste ganz ohne Batterie?",
    antworten: ["Sie speichert tagsüber Sonnenlicht",
                "Sie reflektiert das Scheinwerferlicht in Richtung des Fahrers",
                "Sie leuchtet von selbst",
                "Sie wird vom Fahrtwind aufgeladen"],
    richtig: 1, zeit: 30 },

  { stufe: 6, stunde: 5, thema: "Lichtquellen", kategorie: "wissen",
    frage: "Welche Lichtquelle ist ein thermischer Strahler (leuchtet, weil sie heiß ist)?",
    antworten: ["LED", "Fernsehbildschirm", "Kerzenflamme", "Glühwürmchen"],
    richtig: 2, zeit: 25 },

  { stufe: 6, stunde: 5, thema: "Lichtquellen", kategorie: "wissen",
    frage: "Was ist das Katzenauge am Fahrrad?",
    antworten: ["Eine direkte Lichtquelle mit kleiner Lampe",
                "Eine indirekte Lichtquelle, die Scheinwerferlicht zurückwirft",
                "Ein Schmuckstück ohne Funktion",
                "Ein thermischer Strahler"],
    richtig: 1, zeit: 25 },

  { stufe: 6, stunde: 5, thema: "Lichtquellen", kategorie: "wissen",
    frage: "Sind die Sterne am Nachthimmel direkte Lichtquellen?",
    antworten: ["Nein, sie reflektieren wie der Mond nur Licht",
                "Ja, sie sind ferne Sonnen und leuchten selbst",
                "Nur die hellsten Sterne",
                "Nein, sie sind Löcher im Himmel"],
    richtig: 1, zeit: 25 },

  { stufe: 6, stunde: 5, thema: "Lichtquellen", kategorie: "wissen",
    frage: "Welche davon ist eine natürliche Lichtquelle?",
    antworten: ["Glühlampe", "Blitz", "LED", "Bildschirm"],
    richtig: 1, zeit: 20 },

  { stufe: 6, stunde: 5, thema: "Lichtquellen", kategorie: "konfusius",
    frage: "„Eine LED-Taschenlampe wird beim Leuchten glühend heiß.“",
    antworten: ["Konfusius hat recht", "Konfusius irrt sich"],
    richtig: 1, zeit: 25 }

];
