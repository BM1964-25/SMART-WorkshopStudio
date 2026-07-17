const STORAGE_KEY = "workshop-studio-v1";

const HELP_SECTIONS = [
  {
    id: "overview",
    title: "Überblick",
    eyebrow: "SMART WORKSHOPSTUDIO VERSTEHEN",
    content: `<p>SMART WorkshopStudio verwaltet wiederverwendbare Schulungsmodule und setzt sie zu vollständigen Workshops zusammen. Module können Folien, Moderationsnotizen, Zeitangaben, Kategorien und Schlagwörter enthalten.</p><p>Fertige Schulungen lassen sich direkt als HTML-Präsentation vorführen, mit einer Funkmaus steuern, in einer separaten Referentenansicht begleiten sowie als PDF oder eigenständige HTML-Datei ausgeben.</p><div class="help-callout"><strong>Ohne KI nutzbar:</strong> Alle derzeit vorhandenen Funktionen laufen vollständig ohne KI-Dienst, Lizenzschlüssel oder API-Key.</div>`
  },
  {
    id: "setup",
    title: "Einrichtung & Zugang",
    eyebrow: "ZUGANG UND OPTIONALE KI",
    content: `<h4>Aktueller Status dieser App</h4><p>Diese lokale Version benötigt weder einen Lizenzschlüssel noch einen API-Key. Es gibt deshalb derzeit bewusst kein Eingabefeld dafür. Ein Schlüssel sollte niemals in ein allgemeines Textfeld oder eine Folie kopiert werden.</p><h4>a) Lizenzschlüssel aktivieren</h4><p>Wenn eine spätere kommerzielle Version eine Lizenzprüfung erhält, wird dafür ein eindeutig gekennzeichneter Bereich „Einstellungen → Zugang“ vorgesehen. Der Lizenzschlüssel muss vor der ersten lizenzpflichtigen Nutzung aktiviert werden und schaltet ausschließlich die Nutzung der Software frei. Er ersetzt keinen API-Key.</p><h4>b) Anthropic API-Key erstellen</h4><ol><li>Anthropic Console unter <strong>console.anthropic.com</strong> öffnen.</li><li>Konto erstellen oder einloggen.</li><li>Den Bereich <strong>API Keys</strong> öffnen.</li><li>Einen neuen API-Key mit passender Bezeichnung erstellen.</li><li>Den Key direkt kopieren und sicher verwahren – er wird häufig nur einmal vollständig angezeigt.</li><li>Den Key nur in ein dafür vorgesehenes, geschütztes Einstellungsfeld der App eintragen.</li></ol><div class="help-warning"><strong>Sicherheitshinweis:</strong> Diese statische App besitzt derzeit kein geschütztes API-Key-Feld. Ein geheimer Key darf nicht im Quellcode, in localStorage, in Modulen oder in exportierten HTML-Dateien gespeichert werden.</div><h4>c) Warum ein API-Key erforderlich wäre</h4><p>Optionale KI-Funktionen würden Claude über die Anthropic API aufrufen. Der API-Key verbindet diese Anfragen mit dem persönlichen Anthropic-Konto, ordnet Nutzung und Kosten zu und ermöglicht erst die technische Ausführung.</p><h4>d) Warum auch bei bezahltem App-Abo ein API-Key nötig wäre</h4><p>App-Lizenz und KI-Nutzung sind getrennt: Die Lizenz bezahlt die Software; die API-Nutzung wird separat über das Anthropic-Konto verarbeitet und abgerechnet.</p><div class="help-callout"><strong>Lizenzschlüssel und API-Key erfüllen unterschiedliche Aufgaben:</strong><br><br>Der Lizenzschlüssel aktiviert die Nutzung dieser App. Er bestätigt, dass Sie berechtigt sind, die Software zu verwenden.<br><br>Der API-Key verbindet die App mit Ihrem Anthropic-Konto. Er ist erforderlich, damit KI-Funktionen ausgeführt werden können. Auch bei einer bezahlten App-Lizenz wird ein eigener API-Key benötigt, weil die Nutzung der KI-Modelle technisch und abrechnungstechnisch getrennt über Anthropic erfolgt.</div><h4>e) Warum Anthropic für eine optionale Erweiterung?</h4><p>Claude-Modelle eignen sich besonders für strukturiertes Arbeiten, Textanalyse, Zusammenfassungen, längere Dokumente und professionelle Workflows. Anthropic betont Sicherheit, Zuverlässigkeit und verantwortungsvolle KI-Nutzung. Über einen eigenen API-Key behält der Nutzer die Kontrolle über Nutzung und Abrechnung.</p>`
  },
  {
    id: "quickstart",
    title: "Schnellstart",
    eyebrow: "IN FÜNF SCHRITTEN",
    content: `<ol><li><strong>Zugang prüfen:</strong> In dieser Version sind weder Lizenz noch API-Key erforderlich. Bei einer späteren KI-Erweiterung zuerst „Einrichtung & Zugang“ lesen.</li><li><strong>Modul anlegen:</strong> „+ Neues Modul“ wählen und Grunddaten, Folien und Moderationsnotizen erfassen.</li><li><strong>Schulung erstellen:</strong> „+ Neue Schulung“ wählen und Eckdaten festlegen.</li><li><strong>Module zusammenstellen:</strong> Im Workshop-Builder Module hinzufügen, sortieren und die geplante Dauer prüfen.</li><li><strong>Ergebnis nutzen:</strong> Präsentation starten, Referentenansicht öffnen und bei Bedarf PDF oder HTML exportieren.</li></ol>`
  },
  {
    id: "interface",
    title: "Bedienoberfläche",
    eyebrow: "ORIENTIERUNG",
    content: `<h4>Übersicht</h4><p>Zeigt Kennzahlen, zuletzt bearbeitete Module und den direkten Einstieg in eine neue Schulung.</p><h4>Modul-Bibliothek</h4><p>Hier werden Module gesucht, gefiltert, angesehen, bearbeitet und dupliziert.</p><h4>Schulungen</h4><p>Verwaltet konkrete Veranstaltungen und öffnet Workshop-Builder, Präsentation oder PDF-Ausgabe.</p><h4>Datensicherung</h4><p>Exportiert sämtliche lokalen Inhalte als JSON-Datei. „Sicherung laden“ stellt einen zuvor exportierten Stand wieder her.</p>`
  },
  {
    id: "features",
    title: "Wichtige Funktionen",
    eyebrow: "DAS KANN DIE APP",
    content: `<ul class="help-feature-list"><li><strong>Modulverwaltung</strong><br>Folien, Dauer, Kategorien und Notizen pflegen.</li><li><strong>Workshop-Builder</strong><br>Module hinzufügen, sortieren und Zeitrahmen prüfen.</li><li><strong>Modulvorschau</strong><br>Einzelne Module ohne Workshop präsentieren.</li><li><strong>Referentenansicht</strong><br>Aktuelle und nächste Folie, Notizen und Timer separat anzeigen.</li><li><strong>PDF-Ausgabe</strong><br>Folien als A4-Querformat sichern.</li><li><strong>HTML-Export</strong><br>Eigenständige, offline nutzbare Präsentation erzeugen.</li><li><strong>Datensicherung</strong><br>Lokalen Bestand exportieren und wiederherstellen.</li><li><strong>Funkmaus-Steuerung</strong><br>Pfeile, Leertaste und Page Up/Down verwenden.</li></ul><h4>Grafische Folienlayouts</h4><p>Im Folieneditor stehen Standard, 2 Spalten, 3 Spalten, Kacheln, Kennzahlen und Tabelle zur Auswahl. Bei Spalten und Kacheln trennt eine eigene Zeile mit <strong>---</strong> die Bereiche. In einer Tabelle werden Zellen mit <strong>|</strong> getrennt; die erste Zeile bildet die Tabellenüberschrift.</p><h4>Optional denkbare KI-Aufgaben – derzeit nicht aktiviert</h4><ul><li>Modulgliederungen und Lernziele vorschlagen</li><li>Ausgangstexte in Folienentwürfe umwandeln</li><li>Inhalte kürzen, strukturieren oder zusammenfassen</li><li>Übungen, Reflexionsfragen und Moderationsnotizen entwerfen</li><li>Workshop-Agenden passend zu Zielgruppe und Zeitrahmen vorschlagen</li><li>Varianten für unterschiedliche Zielgruppen erzeugen</li><li>Qualitätsprüfung auf Redundanz, Verständlichkeit und Zeitbedarf unterstützen</li></ul><p>Diese Aufgaben wären Assistenzfunktionen. Inhalte müssen fachlich und rechtlich durch einen Menschen geprüft werden.</p>`
  },
  {
    id: "workflow",
    title: "Typischer Workflow",
    eyebrow: "VON DER IDEE ZUM VORTRAG",
    content: `<ol><li>Bestehende Bibliothek durchsuchen.</li><li>Fehlendes Modul neu anlegen oder eine Vorlage duplizieren.</li><li>Folien und Moderationsnotizen bearbeiten.</li><li>Eine Schulung mit Kunde, Termin und Zeitfenster anlegen.</li><li>Module im Builder auswählen und in Reihenfolge bringen.</li><li>Zeitüberschreitung oder Reserve prüfen.</li><li>Modulvorschau und vollständige Präsentation testen.</li><li>Referentenansicht auf dem Notebook und Vollbild auf dem Beamer öffnen.</li><li>PDF- und HTML-Sicherung erstellen.</li><li>Nach der Veranstaltung Inhalte überarbeiten und Daten sichern.</li></ol>`
  },
  {
    id: "data",
    title: "Eingaben & Daten",
    eyebrow: "SPEICHERUNG UND SICHERHEIT",
    content: `<p>Module, Schulungen und Einstellungen werden aktuell im lokalen Speicher des verwendeten Browsers abgelegt. Sie werden nicht automatisch an einen Server oder KI-Anbieter übertragen.</p><ul><li>Browserdaten gelten nur für dieses Browserprofil und dieses Gerät.</li><li>Vor Browserwechsel, Zurücksetzen oder Gerätewechsel eine Datensicherung erzeugen.</li><li>Keine Passwörter, Lizenzschlüssel oder API-Keys in Folien und Moderationsnotizen speichern.</li><li>Personenbezogene und vertrauliche Inhalte vor Export und Weitergabe prüfen.</li><li>Exportierte HTML- und JSON-Dateien können sämtliche eingegebenen Inhalte enthalten.</li></ul>`
  },
  {
    id: "results",
    title: "Ergebnisse verstehen",
    eyebrow: "VORSCHAU UND EXPORT",
    content: `<h4>HTML-Präsentation</h4><p>Die Präsentation zeigt die gespeicherten Folien in der Reihenfolge des Workshops. Änderungen an Modulen können sich auf darauf basierende Schulungen auswirken.</p><h4>PDF</h4><p>„PDF speichern“ öffnet den Systemdruckdialog. Dort „Als PDF sichern“ und A4-Querformat verwenden. Vor Weitergabe Seitenumbrüche und Vollständigkeit prüfen.</p><h4>Referentenansicht</h4><p>Sie ist ein separates Fenster für Notebook oder zweiten Bildschirm. Nur das Präsentationsfenster gehört auf den Beamer.</p><h4>Zeitberechnung</h4><p>Die angezeigte Dauer ist die Summe der Modulzeiten. Pausen, Diskussionen und organisatorische Übergänge sollten zusätzlich eingeplant werden.</p>`
  },
  {
    id: "troubleshooting",
    title: "Fehler & Lösungen",
    eyebrow: "SCHNELLE HILFE",
    content: `<h4>Neue Inhalte erscheinen nicht</h4><p>Die App einmal vollständig neu laden.</p><h4>Daten sind in einem anderen Browser nicht sichtbar</h4><p>Die JSON-Sicherung im ursprünglichen Browser exportieren und im Zielbrowser über „Sicherung laden“ importieren.</p><h4>Referentenansicht öffnet sich nicht</h4><p>Pop-ups für die App erlauben und erneut auf „Referentenansicht“ klicken.</p><h4>Funkmaus schaltet nicht weiter</h4><p>Präsentationsfenster anklicken und prüfen, ob der Presenter Pfeiltasten, Leertaste oder Page Up/Down sendet.</p><h4>PDF ist abgeschnitten</h4><p>A4-Querformat, 100 % Skalierung und möglichst keine zusätzlichen Browser-Kopf- oder Fußzeilen wählen.</p><h4>Inhalte wurden versehentlich gelöscht</h4><p>Die letzte JSON-Sicherung laden. Ohne Sicherungsdatei ist eine Wiederherstellung möglicherweise nicht möglich.</p>`
  },
  {
    id: "version",
    title: "Version & Hinweise",
    eyebrow: "TECHNISCHER STAND",
    content: `<p><strong>SMART WorkshopStudio 1.0</strong><br>Lokale MVP-Version · Stand Juli 2026</p><ul><li>Keine Benutzerkonten</li><li>Keine aktive Lizenzprüfung</li><li>Keine aktive Anthropic- oder andere KI-API</li><li>Speicherung im lokalen Browser</li><li>Statisches Deployment auf GitHub/Vercel möglich</li></ul><div class="help-callout">Die Hilfe unterscheidet bewusst zwischen dem aktuellen Funktionsumfang und möglichen späteren Lizenz- oder KI-Erweiterungen. Dadurch entstehen keine falschen Erwartungen über bereits vorhandene Zugänge oder Kosten.</div>`
  }
];

const seedState = {
  modules: [
    {
      id: "mod-ki-tools-praxiseinsatz",
      title: "Leistungsstarke KI-Tools im Praxiseinsatz",
      category: "KI-Werkzeuge",
      level: "Anwender & Entscheider",
      duration: 210,
      tags: ["KI-Tools", "Recherche", "Office", "Medien", "Entwicklung", "Automatisierung"],
      description: "Praxisorientierter Vergleich leistungsstarker KI-Werkzeuge – mit passenden Einsatzgebieten, konkreten Beispielen und Auswahlkriterien.",
      version: 3,
      updatedAt: "2026-07-17",
      slides: [
        { id: "kit-1", type: "title", layout: "standard", title: "Leistungsstarke KI-Tools im Praxiseinsatz", body: "Das passende Werkzeug für Recherche, Dokumente, Daten, Medien, Entwicklung und Automatisierung\n\nPraxisworkshop mit konkreten Anwendungsbeispielen", notes: "Einstiegsfrage: Welches KI-Werkzeug verwenden die Teilnehmenden heute am häufigsten – und für welche Aufgabe?" },
        { id: "kit-2", type: "content", layout: "tiles", title: "Am Ende steht eine begründete Werkzeugwahl", body: "EINORDNEN\nWichtige KI-Werkzeuge nach Aufgabenklasse unterscheiden\n---\nAUSWÄHLEN\nStärke, Integration, Daten und Kosten gemeinsam bewerten\n---\nANWENDEN\nFür jedes Werkzeug einen sinnvollen Praxisfall formulieren\n---\nKOMBINIEREN\nMehrstufige Arbeitsabläufe mit klaren Kontrollen entwerfen", notes: "Die Schulung vermittelt keine Rangliste. Ziel ist, Werkzeug und Aufgabe sauber zusammenzubringen." },
        { id: "kit-3", type: "content", layout: "two-column", title: "Das stärkste Tool hängt von der Aufgabe ab", body: "FALSCHE FRAGE\n„Welche KI ist insgesamt die beste?“ vermischt Recherche, Text, Daten, Programmierung, Medien und Automatisierung.\n---\nBESSERE FRAGE\n„Welches Werkzeug liefert für diese Aufgabe mit diesen Daten, Kontrollen und Schnittstellen das beste überprüfbare Ergebnis?“", notes: "Ein Generalist kann mehrere Aufgaben gut abdecken. Spezialisierte Werkzeuge sind häufig stärker, wenn ein bestimmtes Ausgabeformat oder eine tiefe Integration erforderlich ist." },
        { id: "kit-4", type: "content", layout: "three-column", title: "Sechs Aufgabenklassen geben Orientierung", body: "DENKEN & SCHREIBEN\nAnalysieren, strukturieren, formulieren\n---\nRECHERCHIEREN\nAktuelle Quellen finden und vergleichen\n---\nWISSEN NUTZEN\nEigene Dokumente quellengebunden erschließen\n---\nARBEIT INTEGRIEREN\nOffice, Kommunikation und Unternehmensdaten\n---\nMEDIEN ERZEUGEN\nPräsentation, Design, Bild, Video und Sprache\n---\nUMSETZEN\nSoftware entwickeln und Prozesse automatisieren", notes: "Mehrere Werkzeuge überschneiden sich. Die Kategorie beschreibt den häufig stärksten Einstiegspunkt, keine technische Ausschließlichkeit." },
        { id: "kit-5", type: "content", layout: "table", title: "Fünf Kriterien verhindern Fehlentscheidungen", body: "Kriterium | Leitfrage | Warnsignal\nAufgabenfit | Unterstützt das Tool den konkreten Arbeitsschritt? | Auswahl nur nach Bekanntheit\nBelegbarkeit | Lassen sich Quellen und Zwischenschritte prüfen? | überzeugende Antwort ohne Nachweis\nIntegration | Arbeitet es in den vorhandenen Systemen? | ständiger manueller Medienbruch\nDatenkontrolle | Passen Konto, Vertrag und Berechtigungen? | sensible Daten im offenen Consumer-Chat\nWirtschaftlichkeit | Rechtfertigen Qualität und Zeitgewinn die Gesamtkosten? | nur Abopreis statt Prozesskosten", notes: "Die Kriterien später für die Abschlussübung wiederverwenden. Preise und Tarife ändern sich schnell und sind deshalb nicht der alleinige Fokus." },
        { id: "kit-6", type: "content", layout: "two-column", title: "ChatGPT ist ein vielseitiger Arbeitsraum", body: "SINNVOLLER EINSATZ\nEntwürfe, Datenanalyse, Dateiarbeit, Recherche, Canvas sowie schrittweise Bearbeitung komplexer Aufgaben in einem allgemeinen Assistenten.\n---\nPRAXISBEISPIEL\nEine anonymisierte CSV mit Reklamationen auswerten: Fehlerarten gruppieren, Häufigkeiten berechnen, ein Diagramm erzeugen und daraus drei überprüfbare Verbesserungsmaßnahmen formulieren.", notes: "Kontrolle: Berechnungen, Gruppierung und Ausgangsdaten stichprobenartig prüfen. Deep Research eignet sich für umfangreichere Recherche mit Quellen; Canvas für iterative Text- oder Codearbeit." },
        { id: "kit-7", type: "content", layout: "two-column", title: "Claude eignet sich für umfangreiche Wissensarbeit", body: "SINNVOLLER EINSATZ\nLange Dokumente analysieren, Argumente entwickeln, Texte überarbeiten, Projekte strukturieren und interaktive Artefakte oder Dateien erzeugen.\n---\nPRAXISBEISPIEL\nDrei Vertragsentwürfe vergleichen: Abweichungen bei Haftung, Fristen und Kündigung tabellarisch darstellen, jede Feststellung belegen und offene Rechtsfragen für die Fachprüfung markieren.", notes: "Kontrolle: Die juristische Bewertung bleibt bei qualifizierten Personen. Projekte, Research, Artifacts, Skills und Integrationen sind konto- und tarifabhängig." },
        { id: "kit-8", type: "content", layout: "two-column", title: "Gemini verbindet Recherche mit Google-Diensten", body: "SINNVOLLER EINSATZ\nMultimodale Aufgaben, Deep Research, wiederkehrende Rollen über Gems und – je nach Konto – Arbeit mit Gmail, Drive, Docs, Sheets und weiteren Google-Diensten.\n---\nPRAXISBEISPIEL\nEine Marktanalyse erstellen, die öffentliche Wettbewerberdaten mit freigegebenen Drive-Dokumenten und relevanten E-Mail-Verläufen abgleicht; Annahmen und Quellen getrennt ausweisen.", notes: "Kontrolle: Vor der Nutzung verbundener Dienste Berechtigungen, Quellenauswahl und Kontotyp prüfen. Nicht jede Funktion steht in jedem Konto oder jeder Region zur Verfügung." },
        { id: "kit-9", type: "content", layout: "two-column", title: "NotebookLM macht eigene Quellen nutzbar", body: "SINNVOLLER EINSATZ\nPDFs, Webseiten, Office-Dateien, Audio und weitere Quellen in einem abgegrenzten Notebook analysieren; Antworten mit Fundstellen und Studio-Ergebnisse erzeugen.\n---\nPRAXISBEISPIEL\nAus einer freigegebenen Richtlinie, Prozessbeschreibung und FAQ ein Mitarbeiter-Briefing, eine Fragenliste und ein Lernquiz erstellen – anschließend jede Kernaussage über die Zitate kontrollieren.", notes: "NotebookLM antwortet im Notebook quellengebunden. Quellenqualität, Aktualität und Vollständigkeit bleiben entscheidend. Für Details auf das eigene NotebookLM-Modul verweisen." },
        { id: "kit-10", type: "content", layout: "two-column", title: "Perplexity beschleunigt aktuelle Recherche", body: "SINNVOLLER EINSATZ\nWebrecherche mit sichtbaren Quellen, vertiefende Research-Berichte, Dokumentanalyse und – tarifabhängig – Auswahl unterschiedlicher Modelle oder Premium-Datenquellen.\n---\nPRAXISBEISPIEL\nFür die Anschaffung einer Wärmepumpe aktuelle Förderbedingungen, Herstellerangaben und unabhängige Prüfberichte recherchieren; Aussagen nach Primärquelle, Aktualität und regionaler Gültigkeit sortieren.", notes: "Kontrolle: Zitate öffnen und Primärquellen bevorzugen. Rechercheberichte können Quellen falsch gewichten oder wichtige Gegenpositionen auslassen." },
        { id: "kit-11", type: "content", layout: "two-column", title: "Microsoft 365 Copilot wirkt direkt im Office-Prozess", body: "SINNVOLLER EINSATZ\nDokumente in Word bearbeiten, Daten in Excel analysieren, Präsentationen in PowerPoint entwickeln, E-Mails in Outlook verarbeiten und Meetings in Teams zusammenfassen.\n---\nPRAXISBEISPIEL\nNach einer Teams-Besprechung Entscheidungen und Aufgaben erfassen, daraus in Word ein Projektprotokoll erstellen und die aktualisierten Kennzahlen in Excel für den Lenkungskreis aufbereiten.", notes: "Kontrolle: Copilot übernimmt vorhandene Zugriffsrechte nicht als Qualitätsprüfung. Falsch oder zu weit freigegebene Microsoft-365-Inhalte können in Antworten einfließen." },
        { id: "kit-12", type: "content", layout: "two-column", title: "GitHub Copilot unterstützt den Entwicklungszyklus", body: "SINNVOLLER EINSATZ\nCodevorschläge, Chat im Entwicklungswerkzeug, Planung, Änderungen, Pull Requests und Code Reviews mit Repository-Kontext.\n---\nPRAXISBEISPIEL\nFür eine bestehende Web-App einen CSV-Export ergänzen: zuerst Umsetzung planen, Tests schreiben, Änderungen in einem separaten Branch erzeugen und den Pull Request zusätzlich durch Copilot und einen Menschen prüfen lassen.", notes: "Kontrolle: Tests, Sicherheitsprüfung und menschliches Review bleiben erforderlich. Copilot ist laut GitHub nicht garantiert vollständig oder fehlerfrei." },
        { id: "kit-13", type: "content", layout: "two-column", title: "Gamma erzeugt schnell visuelle Erstfassungen", body: "SINNVOLLER EINSATZ\nAus Prompt, Gliederung, Text, Datei oder URL Präsentationen, Dokumente und Webseiten strukturieren; als Weblink teilen oder in gängige Formate exportieren.\n---\nPRAXISBEISPIEL\nEinen freigegebenen Projektstatusbericht importieren und daraus eine zehnteilige Management-Präsentation mit klarer Entscheidungsvorlage erzeugen; Zahlen und Botschaft anschließend manuell schärfen.", notes: "Kontrolle: KI-Layouts sind ein Entwurf. Storyline, Zahlen, Quellen, Corporate Design und mögliche Abweichungen beim PowerPoint-Export prüfen." },
        { id: "kit-14", type: "content", layout: "two-column", title: "Canva verbindet KI mit visueller Kommunikation", body: "SINNVOLLER EINSATZ\nPräsentationen, Social-Media-Inhalte und kurze Videos entwerfen, Texte und Medien erzeugen, Formate anpassen, übersetzen und Markenbausteine anwenden.\n---\nPRAXISBEISPIEL\nAus einem freigegebenen Veranstaltungsbriefing ein konsistentes Paket erstellen: Präsentationscover, LinkedIn-Grafik, Bildschirmbanner und kurze Videoankündigung in passenden Abmessungen.", notes: "Kontrolle: Markenrichtlinien, Bildrechte, Lesbarkeit und Übersetzungen prüfen. Verfügbare Magic-Studio-Funktionen und Kontingente sind tarifabhängig." },
        { id: "kit-15", type: "content", layout: "two-column", title: "Adobe Firefly passt in professionelle Kreativprozesse", body: "SINNVOLLER EINSATZ\nBilder und Videos generieren oder bearbeiten und Ergebnisse in Adobe-Anwendungen wie Photoshop, Express oder Premiere Pro weiterverarbeiten.\n---\nPRAXISBEISPIEL\nFür eine Kampagne drei freigestellte Produktmotive in unterschiedlichen Umgebungen entwickeln, Licht und Hintergrund variieren und die ausgewählte Variante in Photoshop final retuschieren.", notes: "Kontrolle: Nur freigegebene, nicht als Beta gekennzeichnete Funktionen nach den jeweils geltenden Nutzungsbedingungen kommerziell einsetzen. Marken-, Persönlichkeits- und Urheberrechte prüfen." },
        { id: "kit-16", type: "content", layout: "two-column", title: "Runway spezialisiert sich auf generatives Video", body: "SINNVOLLER EINSATZ\nText- und Bildideen in Videoclips überführen sowie vorhandenes Material per Prompt bearbeiten, Hintergründe, Objekte, Stil oder einzelne Bildelemente verändern.\n---\nPRAXISBEISPIEL\nAus einem freigegebenen Produktfoto einen kurzen Kameraflug für eine Messewand erzeugen und störende Elemente im Ausgangsclip entfernen; anschließend Schnitt und Markenelemente finalisieren.", notes: "Kontrolle: Konsistenz zwischen Einzelbildern, physikalische Fehler, Rechte am Ausgangsmaterial und Kennzeichnungspflichten prüfen. Modelle und Funktionen ändern sich schnell." },
        { id: "kit-17", type: "content", layout: "two-column", title: "ElevenLabs erzeugt und lokalisiert Sprache", body: "SINNVOLLER EINSATZ\nText in Sprache umwandeln, Stimmen gestalten oder mit Einwilligung klonen, Audio transkribieren, Inhalte synchronisieren und sprachbasierte Assistenten entwickeln.\n---\nPRAXISBEISPIEL\nEine Sicherheitseinweisung als deutsche Audiospur produzieren und für internationale Teams in weitere Sprachen synchronisieren; Fachbegriffe und Aussprache je Sprachversion abnehmen lassen.", notes: "Kontrolle: Stimme nur mit klarer Berechtigung verwenden. Übersetzung, Aussprache, emotionale Wirkung und mögliche Wasserzeichen oder Tarifbedingungen prüfen." },
        { id: "kit-18", type: "content", layout: "two-column", title: "n8n verbindet KI mit wiederkehrenden Abläufen", body: "SINNVOLLER EINSATZ\nDienste, Datenquellen und KI-Schritte in visuellen Workflows verbinden; Regeln, Werkzeuge, Speicher und menschliche Freigaben gezielt kombinieren.\n---\nPRAXISBEISPIEL\nEingehende Support-E-Mails klassifizieren, Kundennummer und Anliegen extrahieren, einen Antwortentwurf erzeugen und erst nach menschlicher Freigabe im Ticketsystem speichern.", notes: "Kontrolle: Fehlerpfade, Berechtigungen, Protokollierung, Kostenlimits und Human-in-the-loop vor Produktivbetrieb definieren. Automatisierung erhöht auch die Geschwindigkeit von Fehlern." },
        { id: "kit-19", type: "content", layout: "table", title: "Aufgabe und Werkzeug müssen zusammenpassen", body: "Aufgabe | Guter Startpunkt | Sinnvolle Alternative\nAllgemeine Analyse und Entwurf | ChatGPT oder Claude | Gemini\nQuellengebundene interne Wissensarbeit | NotebookLM | Claude-Projekt\nAktuelle Webrecherche | Perplexity | ChatGPT oder Gemini Deep Research\nMicrosoft-Office-Prozess | Microsoft 365 Copilot | allgemeiner Assistent mit freigegebenen Dateien\nSoftwareentwicklung | GitHub Copilot | Claude oder ChatGPT als Entwicklungsassistent\nPräsentation und Design | Gamma oder Canva | Microsoft 365 Copilot\nBild, Video und Sprache | Firefly, Runway oder ElevenLabs | Canva Magic Studio\nProzessautomatisierung | n8n | vorhandene Automationsplattform", notes: "Die Tabelle ist ein Startpunkt, keine dauerhafte Rangliste. Eigenes Testset, Datenschutz und vorhandene Systemlandschaft können zu einer anderen Wahl führen." },
        { id: "kit-20", type: "content", layout: "three-column", title: "Ein guter Werkzeugmix folgt dem Arbeitsfluss", body: "1 · RECHERCHIEREN\nPerplexity oder Deep Research sammelt aktuelle Quellen\n---\n2 · VERDICHTEN\nChatGPT, Claude oder Gemini strukturiert Erkenntnisse\n---\n3 · BELEGEN\nNotebookLM prüft Aussagen gegen freigegebene Quellen\n---\n4 · GESTALTEN\nGamma, Canva, Firefly oder Runway erzeugt Medienentwürfe\n---\n5 · VERTONEN\nElevenLabs erstellt freigegebene Sprachversionen\n---\n6 · VERANKERN\nn8n überführt geprüfte Schritte in einen kontrollierten Ablauf", notes: "Nicht jede Aufgabe benötigt alle sechs Stufen. Jeder Medienbruch und jede zusätzliche Plattform erzeugt auch Aufwand und Datenschutzfragen." },
        { id: "kit-21", type: "content", layout: "two-column", title: "Praxisfall: eine Schulungskampagne entwickeln", body: "AUSGANGSLAGE\nEine neue interne Richtlinie soll erklärt, geschult und international ausgerollt werden. Quellen sind Richtlinie, Prozessbeschreibung und freigegebene FAQ.\n---\nWERKZEUGKETTE\nNotebookLM erstellt belegtes Briefing und Quiz. Gamma oder Canva erzeugt die Präsentation. ElevenLabs produziert freigegebene Sprachversionen. n8n verteilt erst nach dokumentierter Freigabe.", notes: "Das Beispiel zeigt sinnvolle Spezialisierung. Ein allgemeiner Assistent kann Teile übernehmen; die endgültige Auswahl hängt von vorhandenen Lizenzen und Systemen ab." },
        { id: "kit-22", type: "content", layout: "two-column", title: "Ein schlechter Prozess bleibt auch mit KI schlecht", body: "SCHWACHER ANSATZ\nUnklare Aufgabe, ungeprüfte Daten, beliebiges Tool, ein einziger Prompt und direkte Weitergabe des Ergebnisses.\n---\nBELASTBARER ANSATZ\nZiel und Risiko klären, Quellen freigeben, passendes Tool testen, Ergebnis belegen, fachlich prüfen und erst danach veröffentlichen oder automatisieren.", notes: "Technische Leistungsfähigkeit ersetzt keine Prozessverantwortung. Bei hohen Auswirkungen müssen Kontrollen stärker sein als bei einem unverbindlichen Entwurf." },
        { id: "kit-23", type: "content", layout: "tiles", title: "Vier Datenfragen kommen vor dem ersten Prompt", body: "WELCHE DATEN?\nPersonenbezug, Geschäftsgeheimnis und Schutzklasse bestimmen\n---\nWELCHES KONTO?\nConsumer, Business, Enterprise und Vertrag unterscheiden\n---\nWER DARF ZUGREIFEN?\nBerechtigungen, Connectors und Freigaben kontrollieren\n---\nWAS BLEIBT GESPEICHERT?\nTraining, Aufbewahrung, Protokolle und Löschung getrennt prüfen", notes: "Keine pauschale Datenschutzfreigabe für einen Produktnamen erteilen. Kontotyp, Tarif, Einstellungen, Vertrag, Region und konkrete Funktion gemeinsam bewerten." },
        { id: "kit-24", type: "content", layout: "table", title: "Die menschliche Kontrolle richtet sich nach dem Risiko", body: "Ergebnis | Mögliche Folge | Mindestkontrolle\nIdeensammlung | geringe unmittelbare Wirkung | Plausibilitätscheck\nInterner Textentwurf | Missverständnis oder Reputationsrisiko | fachliche Redaktion\nÖffentliche Recherche | falsche oder veraltete Aussage | Primärquellen und Datum prüfen\nVertrags- oder Finanzanalyse | rechtliche oder wirtschaftliche Folgen | qualifizierte Fachprüfung\nCodeänderung | Sicherheits- oder Betriebsstörung | Tests, Review und Freigabe\nAutomatisierte Kommunikation | Fehler in großer Stückzahl | Stichprobe, Limits, Monitoring und Abbruchweg", notes: "Die Matrix mit den eigenen Risikoklassen der Organisation abgleichen. Sie ist eine didaktische Orientierung, kein Ersatz für formale Vorgaben." },
        { id: "kit-25", type: "content", layout: "table", title: "Übung: den passenden Werkzeugmix entwerfen", body: "Schritt | Arbeitsauftrag | Ergebnis\n1 · Aufgabe | realen Prozess und gewünschtes Ergebnis beschreiben | klarer Anwendungsfall\n2 · Daten | Quellen, Sensibilität und Berechtigungen bestimmen | Datenrahmen\n3 · Auswahl | zwei geeignete Tools mit Kriterien vergleichen | begründete Entscheidung\n4 · Beispiel | konkreten Prompt und Beispielausgabe skizzieren | testbarer Ablauf\n5 · Kontrolle | Prüfer, Belege und Freigabepunkt festlegen | Sicherheitsnetz\n6 · Erfolg | Qualität, Zeit, Kosten und Fehler messen | Pilotkennzahlen", notes: "30 Minuten Gruppenarbeit und 15 Minuten Präsentation. Die Gruppen sollen nicht nur ein Tool nennen, sondern ihre Auswahl mit den fünf Kriterien aus Folie 5 begründen." },
        { id: "kit-26", type: "content", layout: "three-column", title: "Ein Pilot trennt Wirkung von Begeisterung", body: "1 · TESTSET\nReale, anonymisierte Beispiele und erwartete Ergebnisse festlegen\n---\n2 · VERGLEICH\nQualität, Belege, Nacharbeit, Zeit und Kosten erfassen\n---\n3 · ENTSCHEIDEN\nEinführen, begrenzen, nachbessern oder verwerfen\n---\n4 · REGELN\nZulässige Daten, Rollen und Freigaben dokumentieren\n---\n5 · SCHULEN\nGute Beispiele und typische Fehler weitergeben\n---\n6 · ÜBERWACHEN\nÄnderungen bei Funktionen, Preisen und Bedingungen verfolgen", notes: "Produktankündigungen sind kein Qualitätsnachweis für den eigenen Prozess. Vorher definierte Erfolgskriterien verhindern Schönfärberei." },
        { id: "kit-27", type: "content", layout: "tiles", title: "Fünf Regeln für den Werkzeugalltag", body: "AUFGABE VOR TOOL\nVom gewünschten Ergebnis ausgehen\n---\nQUELLE VOR ANTWORT\nBelegbare Informationen bevorzugen\n---\nSPEZIALIST VOR GEWOHNHEIT\nDas passende Format und die richtige Integration wählen\n---\nPRÜFUNG VOR WEITERGABE\nFolgen bestimmen den Kontrollaufwand\n---\nPILOT VOR ROLLOUT\nMit eigenen Fällen messen und lernen", notes: "Abschlussrunde: Jede Person nennt ein Werkzeug, einen sinnvollen Beispielprozess und die wichtigste Kontrolle." },
        { id: "kit-28", type: "content", layout: "table", title: "Produktquellen und Aktualität", body: "Primärquelle des Anbieters | Verwendeter Schwerpunkt\nOpenAI und Anthropic Help Center | ChatGPT, Research, Canvas und Claude-Funktionen\nGoogle Gemini- und NotebookLM-Hilfe | Gemini, Gems, Deep Research und NotebookLM\nMicrosoft Support und GitHub Docs | Microsoft 365 Copilot und GitHub Copilot\nPerplexity, Gamma und Canva Help Center | Recherche, Präsentation und Design\nAdobe, Runway und ElevenLabs Docs | Bild, Video und Sprache\nn8n Docs | KI-Workflows und menschliche Freigaben\nStand | 17. Juli 2026 – Funktionen und Tarife erneut prüfen", notes: "Anbieterdokumentation ist die Primärquelle für den aktuellen Funktionsumfang, aber kein unabhängiger Qualitätsvergleich. Leistungsbehauptungen nur mit eigenen Testfällen übernehmen." }
      ]
    },
    {
      id: "mod-notebooklm",
      title: "NotebookLM praxisnah einsetzen",
      category: "KI-Werkzeuge",
      level: "Einsteiger & Anwender",
      duration: 180,
      tags: ["NotebookLM", "Recherche", "Quellen", "Wissensmanagement", "Google"],
      description: "Praxisworkshop zu Funktionsweise, Quellenarbeit, Chat, Studio-Ergebnissen und verantwortlicher Nutzung von NotebookLM.",
      version: 2,
      updatedAt: "2026-07-17",
      slides: [
        { id: "nlm-1", type: "title", layout: "standard", title: "NotebookLM praxisnah einsetzen", body: "Quellen analysieren, Wissen prüfen und Ergebnisse erzeugen\n\nPraxisworkshop für Recherche, Lernen und Wissensarbeit", notes: "Einstiegsfrage: Bei welcher Aufgabe müssen die Teilnehmenden regelmäßig viele Dokumente lesen, vergleichen oder zusammenfassen?" },
        { id: "nlm-2", type: "content", layout: "tiles", title: "Am Ende entsteht ein prüfbarer Arbeitsablauf", body: "EINORDNEN\nNotebookLM von einem allgemeinen KI-Chat unterscheiden\n---\nAUFBAUEN\nEin Notebook mit geeigneten Quellen strukturieren\n---\nANWENDEN\nChat und Studio zielgerichtet nutzen\n---\nPRÜFEN\nZitate, Datenschutz und Ergebnisqualität kontrollieren", notes: "Die Lernziele kurz vorstellen. Der Workshop kombiniert Demonstration, Einzelarbeit und eine Transferübung." },
        { id: "nlm-3", type: "content", layout: "two-column", title: "NotebookLM arbeitet mit einem abgegrenzten Wissensraum", body: "ALLGEMEINER KI-CHAT\nAntwortet aus Modellwissen, Gesprächskontext und – je nach Produkt – zusätzlichen Werkzeugen oder Websuche.\n---\nNOTEBOOKLM\nBeantwortet Fragen im Notebook quellengebunden. Hochgeladene und ausgewählte Quellen bilden den Arbeitskontext; Antworten enthalten Verweise auf Fundstellen.", notes: "Quellengebunden bedeutet nicht automatisch fehlerfrei. Auswahl, Aktualität und Qualität der Quellen bestimmen die mögliche Antwortqualität." },
        { id: "nlm-4", type: "content", layout: "three-column", title: "Drei Bereiche prägen die Arbeit", body: "QUELLEN\nDokumente hinzufügen, auswählen, ordnen und einzeln öffnen\n---\nCHAT\nFragen stellen, vergleichen, erklären und mit Zitaten prüfen\n---\nSTUDIO\nQuellen in Berichte, Audio, Video, Lernhilfen und weitere Formate überführen", notes: "Die Oberfläche live zeigen. Je nach Bildschirmgröße können die Bereiche ein- oder ausgeblendet werden." },
        { id: "nlm-5", type: "content", layout: "three-column", title: "So entsteht eine Antwort", body: "1 · QUELLEN IMPORTIEREN\nNotebookLM erstellt aus den bereitgestellten Inhalten einen nutzbaren Wissenskontext\n---\n2 · PASSAGEN FINDEN\nZur Frage passende Abschnitte werden aus den aktiven Quellen herangezogen\n---\n3 · ANTWORT FORMULIEREN\nDas Modell erzeugt eine Antwort und verbindet Aussagen mit anklickbaren Fundstellen", notes: "Vereinfacht als Retrieval-plus-Generierung erklären. NotebookLM verändert die Originaldateien in Google Drive nicht." },
        { id: "nlm-6", type: "content", layout: "table", title: "Viele Quellenformate lassen sich kombinieren", body: "Quellengruppe | Beispiele | Typische Nutzung\nDokumente | PDF, DOCX, TXT, Markdown, ePub | Berichte und Richtlinien\nOffice-Daten | Google Docs, Slides, Sheets, PPTX, CSV | Projekt- und Unternehmenswissen\nMedien | Audio, Bilder, öffentliche YouTube-Videos | Interviews, Vorträge, Abbildungen\nWeb | Webseiten und recherchierte Webquellen | Markt- und Themenrecherche\nDirekte Eingabe | kopierter Text, Gemini-Chats | Notizen und vorhandene Dialoge", notes: "Stand 17.07.2026. Bei Webseiten wird im Wesentlichen der Text importiert; bei YouTube das verfügbare Transkript. Unterstützte Formate und Limits können sich ändern." },
        { id: "nlm-7", type: "content", layout: "two-column", title: "Ein Notebook braucht eine klare Fragestellung", body: "ZU BREIT\n„Alles zum Projekt, zur Branche und zum Kunden“ erzeugt einen unübersichtlichen Quellenbestand mit widersprüchlichen Perspektiven.\n---\nBESSER ABGEGRENZT\n„Welche vertraglichen Pflichten, Termine und offenen Entscheidungen betreffen Projektphase 2?“ gibt Auswahl und Fragen eine klare Richtung.", notes: "Ein Notebook ist meist für ein Thema, Projekt oder Ergebnis gedacht. Getrennte Zwecke besser in getrennten Notebooks bearbeiten." },
        { id: "nlm-8", type: "content", layout: "tiles", title: "Gute Quellen schlagen große Quellenmengen", body: "RELEVANT\nDie Quelle beantwortet tatsächlich einen Teil der Leitfrage\n---\nAUTORITATIV\nHerausgeber, Urheber und Verbindlichkeit sind bekannt\n---\nAKTUELL\nVersion, Gültigkeit und Veröffentlichungsdatum sind geprüft\n---\nZULÄSSIG\nNutzungsrechte, Vertraulichkeit und Datenschutz sind geklärt", notes: "Garbage in, garbage out greift zu kurz: Auch widersprüchliche oder veraltete Quellen können einzeln gut geschrieben sein. Deshalb Metadaten und Zweck prüfen." },
        { id: "nlm-9", type: "content", layout: "three-column", title: "Quellen lassen sich gezielt aktivieren", body: "GESAMTBLICK\nAlle relevanten Quellen auswählen, um übergreifende Muster zu erkennen\n---\nVERGLEICH\nNur die zu vergleichenden Versionen oder Positionen aktivieren\n---\nEINZELPRÜFUNG\nEine Quelle auswählen, um Zusammenfassung und konkrete Aussagen zu kontrollieren", notes: "Live zeigen, wie sich dieselbe Frage mit unterschiedlicher Quellenauswahl verändert. In der Frage zusätzlich eindeutige Quellennamen nennen." },
        { id: "nlm-10", type: "content", layout: "table", title: "Präzise Fragen führen zu nutzbaren Ergebnissen", body: "Ziel | Schwache Frage | Präzisere Frage\nZusammenfassen | Worum geht es? | Fasse die fünf Kernaussagen für die Projektleitung zusammen.\nVergleichen | Was ist anders? | Vergleiche Version A und B nach Terminen, Pflichten und Haftung.\nExtrahieren | Nenne die Daten. | Erstelle eine Tabelle mit Frist, Verantwortlichem und Fundstelle.\nPrüfen | Ist das riskant? | Welche Aussagen widersprechen sich? Belege jede Feststellung.\nLernen | Erkläre das. | Erkläre Kapitel 3 für Einsteiger und stelle drei Kontrollfragen.", notes: "Die Struktur Ziel, Gegenstand, Kriterien, Ausgabeformat und Beleganforderung als einfaches Fragemuster herausarbeiten." },
        { id: "nlm-11", type: "content", layout: "two-column", title: "Zitate machen Antworten nachvollziehbar", body: "PRÜFSCHRITT 1\nFundstelle öffnen: Stützt die Passage wirklich die konkrete Aussage?\n\nPRÜFSCHRITT 2\nKontext lesen: Wurden Einschränkungen, Ausnahmen oder Definitionen ausgelassen?\n---\nPRÜFSCHRITT 3\nQuelle bewerten: Ist sie aktuell, verbindlich und für die Frage maßgeblich?\n\nPRÜFSCHRITT 4\nLücken markieren: Fehlender Beleg ist kein Beweis für das Gegenteil.", notes: "Eine Antwort mit mehreren Zitaten gemeinsam prüfen. Ein Zitat belegt zunächst nur, dass die Passage in einer Quelle steht – nicht, dass die Quelle sachlich richtig ist." },
        { id: "nlm-12", type: "content", layout: "tiles", title: "Der Chat unterstützt vier Arbeitsweisen", body: "ORIENTIEREN\nThemen, Begriffe und Zusammenhänge erschließen\n---\nVERDICHTEN\nKernaussagen, Entscheidungen und offene Punkte zusammenführen\n---\nVERGLEICHEN\nPositionen, Versionen oder Dokumente nach Kriterien gegenüberstellen\n---\nERZEUGEN\nTabellen, Briefings, Fragenlisten und Entwürfe aus den Quellen ableiten", notes: "NotebookLM bleibt Assistenz: Verbindliche Interpretation, fachliche Bewertung und Freigabe verbleiben beim Menschen." },
        { id: "nlm-13", type: "content", layout: "three-column", title: "Notizen sichern wichtige Erkenntnisse", body: "FESTHALTEN\nGute Antworten oder eigene Gedanken als Notiz speichern\n---\nSTRUKTURIEREN\nErkenntnisse nach Entscheidung, Risiko, Frage oder Aufgabe ordnen\n---\nWEITERVERWENDEN\nNotizen als Arbeitsstand nutzen und bei Bedarf wieder als Quelle einbeziehen", notes: "Zwischen automatisch erzeugter Antwort und eigener Bewertung unterscheiden. Aussagekräftige Titel und eine einheitliche Struktur verwenden." },
        { id: "nlm-14", type: "content", layout: "three-column", title: "Das Studio übersetzt Wissen in neue Formate", body: "VERSTEHEN\nMindmap, Bericht, Infografik oder Folienübersicht\n---\nLERNEN\nLernleitfaden, Karteikarten, Quiz und Audio- oder Videoüberblick\n---\nKOMMUNIZIEREN\nBriefing, Präsentationsentwurf oder zielgruppengerechte Zusammenfassung", notes: "Die verfügbaren Studio-Formate können je Konto, Region, Sprache und Tarif variieren. Ergebnisse immer als Entwurf behandeln." },
        { id: "nlm-15", type: "content", layout: "table", title: "Das Ausgabeformat folgt dem Arbeitsziel", body: "Arbeitsziel | Passendes Format | Qualitätsfrage\nSchnell einsteigen | Kurzzusammenfassung oder Mindmap | Sind die Schwerpunkte ausgewogen?\nUnterwegs lernen | Audio- oder Videoüberblick | Werden wichtige Einschränkungen genannt?\nWissen prüfen | Karteikarten oder Quiz | Sind Fragen eindeutig und belegt?\nEntscheidung vorbereiten | Briefing oder Bericht | Sind Optionen, Risiken und Lücken sichtbar?\nInhalte vermitteln | Infografik oder Foliensatz | Passen Auswahl, Sprache und Detailgrad zur Zielgruppe?", notes: "Nicht jedes attraktive Format verbessert die Arbeit. Zuerst Zweck und Zielgruppe festlegen, dann Format wählen." },
        { id: "nlm-16", type: "content", layout: "two-column", title: "Audio Overviews lassen sich gezielt steuern", body: "ANPASSEN\nFormat, Sprache, Länge, Schwerpunkt und Kenntnisniveau festlegen. Mögliche Formate umfassen vertiefendes Gespräch, Kurzüberblick, Kritik und Debatte.\n---\nPRÜFEN\nAudio kann Ungenauigkeiten oder Audiostörungen enthalten. Vor Veröffentlichung Kernaussagen mit Quellen abgleichen und sensible Inhalte berücksichtigen.", notes: "Interaktiver Modus ist laut Google derzeit nur englisch verfügbar. Funktionsumfang auf Mobilgeräten kann eingeschränkt sein." },
        { id: "nlm-17", type: "content", layout: "two-column", title: "Recherche erweitert den Quellenbestand bewusst", body: "FAST RESEARCH\nSucht passende Quellen im Web oder in zugänglichen Drive-Dateien. Treffer werden vor dem Import ausgewählt.\n---\nDEEP RESEARCH\nErstellt zu einer Forschungsfrage einen umfangreicheren Bericht und sammelt zahlreiche Webquellen. Bericht und Quellen müssen anschließend geprüft und gezielt importiert werden.", notes: "Rechercheergebnisse sind Vorschläge, keine automatisch vertrauenswürdige Bibliografie. Primärquellen, Aktualität und Interessenkonflikte prüfen." },
        { id: "nlm-18", type: "content", layout: "three-column", title: "Praxisfall: eine Richtlinie verständlich machen", body: "1 · VORBEREITEN\nAktuelle Richtlinie, FAQ und freigegebene Prozessbeschreibung importieren\n---\n2 · ANALYSIEREN\nPflichten, Ausnahmen, Rollen und offene Widersprüche mit Zitaten herausarbeiten\n---\n3 · VERMITTELN\nBriefing, Fragenliste und Lernquiz für eine definierte Zielgruppe erzeugen", notes: "Alternativ einen eigenen Fall der Gruppe nutzen. Keine vertraulichen Echtunterlagen in einer offenen Demo verwenden." },
        { id: "nlm-19", type: "content", layout: "table", title: "Arbeitsauftrag: ein belastbares Notebook bauen", body: "Phase | Aufgabe | Ergebnis\n1 · Ziel | Leitfrage und Zielgruppe formulieren | klarer Arbeitsauftrag\n2 · Quellen | drei bis fünf geeignete Quellen auswählen | begründeter Quellenbestand\n3 · Chat | fünf strukturierte Fragen stellen | Antworten mit Fundstellen\n4 · Prüfung | zwei Kernaussagen anhand der Quellen kontrollieren | Prüfnotiz\n5 · Studio | ein passendes Ergebnis erzeugen | nutzbarer Entwurf\n6 · Reflexion | Grenzen und nächste Schritte benennen | Freigabeentscheidung", notes: "Für die Übung etwa 35 Minuten vorsehen, anschließend 15 Minuten Auswertung. Bei fehlendem Zugang kann die Struktur gemeinsam anhand einer Demo bearbeitet werden." },
        { id: "nlm-20", type: "content", layout: "tiles", title: "Vier typische Fehler mindern den Nutzen", body: "QUELLEN-SAMMELBECKEN\nZu viele Dokumente ohne Leitfrage\n---\nBLINDES VERTRAUEN\nAntworten übernehmen, ohne Fundstellen zu lesen\n---\nFORMAT VOR ZWECK\nAudio oder Folien erzeugen, bevor das Ergebnis klar ist\n---\nSENSIBLE DATEN\nInhalte hochladen, ohne Freigabe und Kontoregeln zu prüfen", notes: "Die Gruppe je Fehler eine konkrete Gegenmaßnahme formulieren lassen." },
        { id: "nlm-21", type: "content", layout: "two-column", title: "Datenschutz hängt auch vom Kontotyp ab", body: "PERSÖNLICHES KONTO\nInhalte werden laut Google nicht direkt zum Training der Basismodelle genutzt, außer wenn Feedback gegeben wird. Feedback kann den zugehörigen Kontext einer menschlichen Prüfung zugänglich machen.\n---\nWORKSPACE ODER EDUCATION\nGoogle erklärt, dass Uploads, Fragen und Antworten nicht menschlich geprüft und nicht zum Modelltraining verwendet werden. Zusätzlich gelten Organisationsvertrag, Freigaben und Einstellungen.", notes: "Stand 17.07.2026. Keine Rechtsberatung. Vor sensibler Nutzung Kontotyp, Vertrag, Speicherorte, Freigaben, Datenklassifikation und interne Richtlinien prüfen." },
        { id: "nlm-22", type: "content", layout: "three-column", title: "Teilen braucht einen eigenen Kontrollschritt", body: "ZUGRIFF\nNur erforderliche Personen als Betrachter oder Bearbeiter zulassen\n---\nINHALT\nQuellen, Chat-Ergebnisse und Studio-Artefakte auf vertrauliche Angaben prüfen\n---\nRECHTE\nUrheberrecht, Nutzungsrechte und zulässige Weitergabe vor Veröffentlichung klären", notes: "Öffentliche Freigaben sind laut Google nicht in allen Kontoarten verfügbar. Beim Entzug von Drive-Zugriffen können importierte Quellen unzugänglich werden." },
        { id: "nlm-23", type: "content", layout: "table", title: "Für diese Aufgaben ist NotebookLM unterschiedlich geeignet", body: "Aufgabe | Eignung | Begründung\nQuellen zusammenfassen | gut | klarer, prüfbarer Dokumentenbestand\nDokumentversionen vergleichen | gut | Kriterien und Quellen lassen sich eingrenzen\nLernmaterial erzeugen | gut mit Prüfung | viele Formate, aber mögliche Auslassungen\nAktuelle offene Webrecherche | bedingt | Recherche und Quellenbewertung erforderlich\nVerbindliche Rechtsbewertung | nicht allein | fachliche und rechtliche Prüfung notwendig\nEntscheidung automatisch freigeben | ungeeignet | Verantwortung und Kontrolle fehlen", notes: "Die Bewertung hängt von Daten, Folgen und Qualitätsanforderungen ab. 'Gut' bedeutet nicht automatisch ohne Kontrolle." },
        { id: "nlm-24", type: "content", layout: "tiles", title: "Die Qualitätskontrolle folgt dem Vier-Augen-Prinzip", body: "QUELLEN-CHECK\nRelevanz, Autorität, Aktualität und Vollständigkeit\n---\nBELEG-CHECK\nFundstellen tragen die formulierten Aussagen\n---\nERGEBNIS-CHECK\nFormat, Zielgruppe und gewünschter Detailgrad passen\n---\nFREIGABE-CHECK\nVerantwortliche Person entscheidet über Nutzung und Weitergabe", notes: "Bei folgenreichen Ergebnissen zusätzliche Fachprüfung, dokumentierte Freigabe und gegebenenfalls Datenschutz- oder Rechtsprüfung einplanen." },
        { id: "nlm-25", type: "content", layout: "three-column", title: "Der Transfer beginnt mit einem kleinen Pilot", body: "1 · AUSWÄHLEN\nWiederkehrende, überschaubare Aufgabe mit verfügbaren Quellen wählen\n---\n2 · TESTEN\nNutzen, Belegtreue, Nacharbeit und Risiken an echten Testfällen messen\n---\n3 · STANDARDISIEREN\nQuellregeln, Fragevorlagen, Prüfschritte und Freigabe dokumentieren", notes: "Keinen flächendeckenden Rollout aus einer einzelnen Demo ableiten. Erfolgskriterien vor dem Pilot festlegen." },
        { id: "nlm-26", type: "content", layout: "tiles", title: "Fünf Regeln für die tägliche Nutzung", body: "FRAGE VOR QUELLE\nDas gewünschte Ergebnis zuerst klären\n---\nAUSWAHL VOR MENGE\nNur relevante und zulässige Quellen hinzufügen\n---\nBELEG VOR ÜBERNAHME\nKernaussagen an Fundstellen prüfen\n---\nZWECK VOR FORMAT\nStudio-Ergebnis passend zur Aufgabe wählen\n---\nMENSCH VOR FREIGABE\nVerantwortung und Entscheidung bleiben geklärt", notes: "Abschlussrunde: Jede Person nennt einen Pilotfall, eine geeignete Quelle und einen notwendigen Prüfschritt." },
        { id: "nlm-27", type: "content", layout: "table", title: "Produktquellen und Aktualität", body: "Google-Primärquelle | Schwerpunkt\nLearn about NotebookLM | Funktionsprinzip, Sprachen und Datenhinweise\nAdd or discover new sources | Formate, Limits, Synchronisierung und Recherche\nUse chat in NotebookLM | Quellenbindung, Auswahl und Zitate\nAudio Overviews | Formate, Anpassung und Einschränkungen\nPrivacy and Terms of Use | Feedback, Training und Kontotypen\nNotebookLM Help Center | aktuelle Studio-Funktionen\nStand | 17. Juli 2026 – vor jeder Schulung erneut prüfen", notes: "Offizielle Einstiegsadresse: support.google.com/notebooklm. Historische KI-Quellen sind für dieses reine Produktmodul nicht beweistragend; der aktuelle Funktionsumfang wird direkt aus der Google-Dokumentation belegt." }
      ]
    },
    {
      id: "mod-ki-grundlagen",
      title: "Grundlagen der künstlichen Intelligenz",
      category: "Künstliche Intelligenz",
      level: "Einsteiger",
      duration: 90,
      tags: ["KI", "Grundlagen", "Machine Learning", "LLM", "Verantwortung"],
      description: "Fundierter Einstieg in Begriffe, Funktionsweise, Fähigkeiten, Grenzen und verantwortliche Nutzung künstlicher Intelligenz.",
      version: 5,
      updatedAt: "2026-07-17",
      slides: [
        { id: "ki-1", type: "title", layout: "standard", title: "Grundlagen der künstlichen Intelligenz", body: "KI verstehen, sinnvoll einsetzen und Ergebnisse verantwortlich prüfen.\n\nStand: 17. Juli 2026", notes: "Mit einer kurzen Abfrage beginnen: Wo begegnet den Teilnehmenden KI bereits im Alltag oder Beruf?" },
        { id: "ki-2", type: "content", layout: "tiles", title: "Lernziele", body: "EINORDNEN\nKI, Machine Learning und generative KI unterscheiden\n---\nVERSTEHEN\nTraining, Inferenz, Tokens und Wahrscheinlichkeiten erklären\n---\nANWENDEN\nGeeignete Aufgaben und Grenzen erkennen\n---\nVERANTWORTEN\nErgebnisse prüfen und Risiken beherrschen", notes: "Die Ziele kurz vorstellen und Schwerpunkte der Gruppe erfragen." },
        { id: "ki-3", type: "content", layout: "two-column", title: "Was ist künstliche Intelligenz?", body: "ARBEITSDEFINITION\nEin maschinenbasiertes System leitet aus Eingaben Vorhersagen, Inhalte, Empfehlungen oder Entscheidungen ab und beeinflusst damit reale oder virtuelle Umgebungen.\n---\nWICHTIGE EINORDNUNG\nKI ist kein einzelnes Programm und kein Bewusstsein. Der Begriff umfasst unterschiedliche Verfahren, Modelle und Anwendungen mit verschiedenem Autonomiegrad.", notes: "Die Definition ist bewusst an OECD und NIST angelehnt. Anthropomorphe Formulierungen vermeiden." },
        { id: "ki-4", type: "content", layout: "metrics", title: "Meilensteine der KI", body: "1950\nTurings Imitation Game\n---\n1955/56\nDartmouth-Projekt prägt den Begriff\n---\n2012\nDeep Learning gewinnt stark an Bedeutung\n---\n2017+\nTransformer und generative Modelle", notes: "KI entwickelte sich in Wellen. Forschungsfortschritt, Daten, Rechenleistung und Investitionen beeinflussten die Geschwindigkeit." },
        { id: "ki-5", type: "content", layout: "three-column", title: "Die technologische Landkarte", body: "KÜNSTLICHE INTELLIGENZ\nOberbegriff für maschinenbasierte Systeme mit intelligent wirkenden Fähigkeiten\n---\nMACHINE LEARNING\nModelle lernen Muster aus Daten, statt jede Regel einzeln vorgegeben zu bekommen\n---\nDEEP LEARNING\nMehrschichtige neuronale Netze lernen komplexe nichtlineare Muster\n---\nGENERATIVE KI\nErzeugt neue Texte, Bilder, Audio, Video oder Code\n---\nSPRACHMODELLE\nSchätzen Wahrscheinlichkeiten für Tokenfolgen und erzeugen daraus Sprache\n---\nMULTIMODALE MODELLE\nVerarbeiten oder erzeugen mehrere Medientypen in einem System", notes: "Die Begriffe sind nicht sechs konkurrierende Kategorien. Mehrere davon können gleichzeitig auf ein System zutreffen." },
        { id: "ki-6", type: "content", layout: "two-column", title: "Programmieren oder lernen?", body: "KLASSISCHE SOFTWARE\nMenschen definieren Regeln und Abläufe. Gleiche Eingabe und gleiche Regeln führen typischerweise zum gleichen Ergebnis.\n---\nMACHINE LEARNING\nEin Trainingsverfahren passt Modellparameter anhand von Beispieldaten an. Das Modell verallgemeinert anschließend auf neue Eingaben.", notes: "Auch ML-Systeme enthalten klassische Software. Der Unterschied liegt darin, wie ein Teil des Verhaltens entsteht." },
        { id: "ki-7", type: "content", layout: "three-column", title: "Wie ein Sprachmodell Text erzeugt", body: "1 · TOKENISIEREN\nText wird in Wörter, Wortteile, Zeichen oder andere Einheiten zerlegt\n---\n2 · KONTEXT NUTZEN\nDas Modell berücksichtigt die verfügbaren Eingaben und bisherigen Token\n---\n3 · FORTSETZEN\nFür mögliche nächste Token werden Wahrscheinlichkeiten berechnet und eine Fortsetzung gewählt", notes: "Nicht sagen, das Modell suche fertige Sätze in einer Datenbank. Es berechnet eine neue Ausgabe aus gelernten Parametern und Kontext." },
        { id: "ki-8", type: "content", layout: "two-column", title: "Training und Inferenz", body: "TRAINING\nGroße Datenmengen, Optimierungsverfahren und Rechenleistung passen Modellparameter an. Ziel ist, Vorhersagefehler über viele Beispiele zu reduzieren.\n---\nINFERENZ\nDas trainierte Modell verarbeitet eine konkrete Eingabe und erzeugt eine Ausgabe. Prompt, Kontext, Modellversion und Einstellungen beeinflussen das Ergebnis.", notes: "Training und Nutzung klar trennen. Ein Chat lernt nicht automatisch dauerhaft aus jeder einzelnen Nachricht." },
        { id: "ki-9", type: "content", layout: "table", title: "Wofür KI geeignet sein kann", body: "Aufgabenklasse | Typische Beispiele | Menschliche Aufgabe\nErzeugen | Entwürfe, Varianten, Zusammenfassungen | Ziel und Qualität festlegen\nAnalysieren | Muster, Kategorien, Vergleiche | Datenbasis und Schlussfolgerung prüfen\nExtrahieren | Felder, Tabellen, Kernaussagen | Vollständigkeit kontrollieren\nTransformieren | Übersetzen, umformulieren, strukturieren | Ton, Bedeutung und Fachsprache prüfen\nAssistieren | Recherchefragen, Ideen, Arbeitsschritte | Quellen und Entscheidungen verantworten", notes: "„Kann“ bedeutet nicht automatisch „darf“, „ist wirtschaftlich“ oder „ist zuverlässig genug“." },
        { id: "ki-10", type: "content", layout: "two-column", title: "Leistungsfähig ist nicht gleich wahr", body: "WARUM FEHLER ENTSTEHEN\nSprachmodelle optimieren plausible Fortsetzungen. Fehlender Kontext, mehrdeutige Aufgaben, Datenlücken oder falsche Annahmen können zu überzeugend formulierten Fehlern führen.\n---\nWAS DARAUS FOLGT\nFakten, Zahlen, Zitate und Quellen prüfen. Bei hohen Auswirkungen zusätzliche Kontrollen, dokumentierte Freigaben und gegebenenfalls fachliche oder rechtliche Prüfung vorsehen.", notes: "Den Begriff Halluzination erklären; NIST verwendet im GenAI-Profil auch „Confabulation“ für überzeugend präsentierte falsche Inhalte." },
        { id: "ki-11", type: "content", layout: "tiles", title: "Vier zentrale Risikofelder", body: "FEHLINFORMATION\nFalsche oder unbelegte Aussagen\n---\nVERZERRUNG\nUnfaire Muster aus Daten, Design oder Nutzung\n---\nDATENSCHUTZ\nUnzulässige oder unnötige Verarbeitung sensibler Daten\n---\nAUTOMATION BIAS\nMenschen vertrauen einer maschinellen Empfehlung zu schnell", notes: "Risiken immer an konkrete Anwendung, Betroffene und Schadenshöhe koppeln." },
        { id: "ki-12", type: "content", layout: "three-column", title: "Der verantwortliche KI-Workflow", body: "1 · MINIMIEREN\nNur erforderliche und freigegebene Daten verwenden\n---\n2 · PRÜFEN\nAusgaben mit Quellen, Regeln und Fachwissen abgleichen\n---\n3 · ENTSCHEIDEN\nVerantwortung, Freigabe und Eskalation bei Menschen belassen", notes: "Bei sensiblen oder folgenreichen Anwendungen zusätzlich Datenschutz, Informationssicherheit, Mitbestimmung und Rechtslage prüfen." },
        { id: "ki-13", type: "content", layout: "three-column", title: "Übung: Ist KI hier sinnvoll?", body: "FALL AUSWÄHLEN\nEine reale wiederkehrende Aufgabe aus dem Arbeitsalltag beschreiben\n---\nNUTZEN & RISIKO\nZeitgewinn, Qualitätschance, Daten und mögliche Schäden bewerten\n---\nKONTROLLE PLANEN\nPrüfschritte, Freigabe, Abbruchkriterien und Verantwortliche festlegen", notes: "15 Minuten in Kleingruppen. Ergebnis als kurze Go-, Pilot- oder No-Go-Entscheidung vorstellen lassen." },
        { id: "ki-14", type: "content", layout: "table", title: "Wissenstest", body: "Aussage | Richtig oder falsch?\nMachine Learning ist ein Teilgebiet der KI | Richtig\nEin Sprachmodell speichert immer fertige Antworten | Falsch\nPlausibel formulierte Ausgaben können falsch sein | Richtig\nMehr Daten bedeuten automatisch faire Ergebnisse | Falsch\nBei hohen Auswirkungen reicht eine Stichprobe | Falsch", notes: "Antworten zunächst verdecken oder mündlich abstimmen lassen. Jede falsche Aussage kurz korrigieren." },
        { id: "ki-15", type: "content", layout: "tiles", title: "Das Wichtigste in vier Sätzen", body: "MUSTER STATT MAGIE\nKI leitet Ausgaben aus Daten, Parametern und Kontext ab\n---\nWERKZEUG STATT AUTORITÄT\nEine überzeugende Antwort ist noch kein Beleg\n---\nAUFGABE STATT BERUF\nEignung wird für konkrete Arbeitsschritte bewertet\n---\nVERANTWORTUNG BLEIBT\nMenschen definieren Ziele, Kontrollen und Freigaben", notes: "Zum Abschluss jede Person einen Anwendungsfall und eine notwendige Kontrolle nennen lassen." },
        { id: "ki-16", type: "content", layout: "table", title: "Historische Primärquellen", body: "Originalquelle | Beitrag\nMcCulloch & Pitts, 1943 | formales Modell künstlicher Neuronen\nTuring, Mind 1950 | Imitation Game und Maschinenintelligenz\nMcCarthy et al., Dartmouth Proposal 1955 | Begriff und Forschungsprogramm KI\nRosenblatt, Psychological Review 1958 | Perceptron und Lernen\nRumelhart, Hinton & Williams, Nature 1986 | Backpropagation in mehrschichtigen Netzen\nVaswani et al., NeurIPS 2017 | Transformer-Architektur", notes: "Primärquelle bedeutet: die ursprüngliche Veröffentlichung selbst. Im Vortrag zwischen dem damaligen Anspruch der Autoren und späterer historischer Einordnung unterscheiden." },
        { id: "ki-17", type: "content", layout: "table", title: "Aktuelle Fachquellen", body: "Quelle | Verwendung\nOECD.AI – Definition eines KI-Systems | Begriffe und Einordnung\nNIST AI RMF 1.0 | vertrauenswürdige Gestaltung und Risikomanagement\nNIST GenAI Profile 2024 | besondere Risiken generativer KI\nStanford HAI: AI Index 2026 | beobachtete Fähigkeiten, Nutzung und Vorfälle\nInternational AI Safety Report 2026 | aktueller Forschungsstand zu Fähigkeiten und Risiken\nStand | 17. Juli 2026", notes: "Stabile Grundlagen und veränderliche Gegenwart trennen. Zahlen, Rechtslage und Produktfähigkeiten vor jeder Durchführung aktualisieren." }
      ]
    },
    {
      id: "mod-ki-entwicklung-zukunft",
      title: "Die Entwicklung der künstlichen Intelligenz",
      category: "Künstliche Intelligenz",
      level: "Alle",
      duration: 180,
      tags: ["KI-Geschichte", "Zukunft", "Szenarien", "Technologie", "Strategie"],
      description: "Von Turing und Dartmouth über Deep Learning und generative KI bis zu belastbaren Zukunftsszenarien für 2030.",
      version: 4,
      updatedAt: "2026-07-17",
      slides: [
        { id: "ez-1", type: "title", layout: "standard", title: "Die Entwicklung der künstlichen Intelligenz", body: "Wie aus einer Forschungsfrage eine globale Basistechnologie wurde – und welche Zukunftspfade bis 2030 plausibel sind.\n\nStand: 17. Juli 2026", notes: "Zum Einstieg fragen: Welches Ereignis verbinden die Teilnehmenden persönlich mit dem Durchbruch der KI?" },
        { id: "ez-2", type: "content", layout: "tiles", title: "Der Weg durch dieses Modul", body: "URSPRÜNGE\nWie Denken zu einer technischen Forschungsfrage wurde\n---\nDURCHBRÜCHE\nWelche Ideen, Daten und Rechner neue Fähigkeiten ermöglichten\n---\nGEGENWART\nWo KI 2026 tatsächlich steht – ohne Marketingübertreibung\n---\nZUKUNFT\nWelche Szenarien, Treiber und Warnsignale bis 2030 relevant sind", notes: "Historie und Zukunft bewusst verbinden: Jeder frühere Boom hatte technische Treiber, aber auch falsche Erwartungen." },
        { id: "ez-3", type: "content", layout: "table", title: "Fünf Kräfte treiben den Fortschritt", body: "Kraft | Bedeutung\nAlgorithmen | neue Lernverfahren und Modellarchitekturen\nDaten | Beispiele, Feedback und digitale Wissensbestände\nRechenleistung | schnellere Chips, größere Systeme und günstigere Inferenz\nKapital & Infrastruktur | Rechenzentren, Forschungsteams und Plattformen\nAnwendungen | konkrete Probleme, Nutzerfeedback und wirtschaftlicher Nutzen", notes: "Kein Faktor erklärt die Entwicklung allein. Fortschritt beschleunigt sich, wenn mehrere Kräfte gleichzeitig zusammenwirken." },
        { id: "ez-4", type: "content", layout: "metrics", title: "Vor dem Begriff künstliche Intelligenz", body: "1943\nFormales Modell künstlicher Neuronen\n---\n1950\nTuring formuliert das Imitation Game\n---\n1951/52\nFrühe lernende Spielprogramme\n---\n1955\nDartmouth-Vorschlag benennt das Feld", notes: "Turing ersetzte die schwer beantwortbare Frage „Können Maschinen denken?“ durch einen beobachtbaren Verhaltenstest. Das war kein Beweis für Bewusstsein." },
        { id: "ez-5", type: "content", layout: "two-column", title: "1955/56: Dartmouth gibt dem Feld einen Namen", body: "DIE HYPOTHESE\nLernen, Sprache, Abstraktion und Problemlösen könnten so genau beschrieben werden, dass Maschinen sie simulieren.\n---\nDIE WIRKUNG\nDer Workshop bündelte zuvor getrennte Forschungsrichtungen unter „Artificial Intelligence“. Die Erwartungen waren ambitioniert – der Weg erwies sich als deutlich länger.", notes: "Der Vorschlag stammt von 1955, das Forschungsprojekt fand 1956 statt. Diese Unterscheidung sauber erläutern." },
        { id: "ez-6", type: "content", layout: "three-column", title: "1956–1973: Die Ära der symbolischen KI", body: "LOGIK & REGELN\nWissen wird als Symbole, Regeln und Suchräume dargestellt\n---\nERSTE ERFOLGE\nProgramme lösen algebraische Aufgaben, spielen Spiele und beweisen Sätze\n---\nDIE GRENZE\nAlltagswissen, Mehrdeutigkeit und reale Umgebungen lassen sich kaum vollständig in Regeln fassen", notes: "Symbolische KI ist nicht verschwunden. Regeln, Planung und Wissensrepräsentation werden bis heute mit lernenden Verfahren kombiniert." },
        { id: "ez-7", type: "content", layout: "two-column", title: "1974–1980: Der erste KI-Winter", body: "ÜBERHÖHTE ERWARTUNGEN\nFrühe Demonstrationen wurden auf allgemeine Intelligenz hochgerechnet. Rechenleistung, Daten und Methoden reichten für robuste Alltagssysteme nicht aus.\n---\nDIE FOLGE\nFörderung und Aufmerksamkeit gingen zurück. Der Begriff KI verlor zeitweise an Attraktivität, während Teilgebiete weiterforschten.", notes: "Ein KI-Winter bedeutet nicht, dass Forschung stoppte. Finanzierung und öffentliche Erwartungen kühlten ab." },
        { id: "ez-8", type: "content", layout: "two-column", title: "1980er: Expertensysteme und zweiter Winter", body: "NEUER BOOM\nExpertensysteme bilden Fachregeln ab und unterstützen eng definierte Entscheidungen. Unternehmen investieren in Wissensbasen und spezialisierte Hardware.\n---\nERNEUTE ERNÜCHTERUNG\nRegelpflege ist teuer, Systeme sind spröde und schwer übertragbar. Spezialhardware verliert gegen allgemeine Rechner; der Markt bricht ein.", notes: "Die Managementlektion: Eine beeindruckende Demo ist noch kein wartbares Produktionssystem." },
        { id: "ez-9", type: "content", layout: "three-column", title: "1990–2011: Statistik ersetzt viele Handregeln", body: "DATEN STATT NUR REGELN\nModelle lernen Wahrscheinlichkeiten und Muster aus Beispielen\n---\nDIGITALE SPUREN\nInternet, Sensoren und Unternehmenssoftware erzeugen große Datenbestände\n---\nMESSBARE ERFOLGE\nSpracherkennung, Suche, Empfehlungen und Bilderkennung werden schrittweise besser", notes: "Der Begriff Machine Learning rückt in den Vordergrund. Viele Produkte nutzten KI, ohne sie im Marketing so zu nennen." },
        { id: "ez-10", type: "content", layout: "two-column", title: "2012: Deep Learning wird praktisch überlegen", body: "DER DURCHBRUCH\nAlexNet senkt den Fehler bei der ImageNet-Bilderkennung deutlich. Tiefe neuronale Netze, große Datensätze und GPUs zeigen gemeinsam ihre Stärke.\n---\nDIE KONSEQUENZ\nForschung und Industrie investieren massiv. Bild, Sprache und später Text profitieren von lernenden Repräsentationen statt handgebauter Merkmale.", notes: "Nicht behaupten, Deep Learning sei 2012 erfunden worden. Entscheidend war der sichtbare Leistungssprung im Wettbewerb." },
        { id: "ez-11", type: "content", layout: "three-column", title: "2017: Der Transformer verändert Sprachmodelle", body: "ATTENTION\nDas Modell gewichtet Beziehungen zwischen Teilen einer Eingabe\n---\nPARALLELISIERUNG\nTraining lässt sich effizienter auf spezialisierter Hardware verteilen\n---\nSKALIERBARKEIT\nDie Architektur wird zur Grundlage vieler großer Sprach- und multimodaler Modelle", notes: "Das Paper „Attention Is All You Need“ entstand zunächst für maschinelle Übersetzung. Die Tragweite zeigte sich erst in den Folgejahren." },
        { id: "ez-12", type: "content", layout: "two-column", title: "2020: Skalierung und Lernen aus Beispielen", body: "WAS SICH ÄNDERT\nGroße vortrainierte Sprachmodelle bearbeiten viele Aufgaben ohne separates Training. Anweisungen und wenige Beispiele im Kontext steuern das Verhalten.\n---\nWAS OFFEN BLEIBT\nGröße allein löst Zuverlässigkeit, Bias, Aktualität, Belegbarkeit und Kosten nicht. Fähigkeiten bleiben ungleichmäßig verteilt.", notes: "GPT-3 war ein sichtbarer Meilenstein für Few-shot-Verhalten. Das Modul bleibt bewusst bei der Entwicklungslinie statt bei Produktwerbung." },
        { id: "ez-13", type: "content", layout: "three-column", title: "2022–2024: Generative KI erreicht den Alltag", body: "NATÜRLICHE OBERFLÄCHE\nMenschen steuern Modelle im Dialog statt über Spezialsoftware\n---\nMULTIMODALITÄT\nText, Bild, Audio und Video wachsen in gemeinsamen Systemen zusammen\n---\nMASSENADOPTION\nUnternehmen, Bildung und Öffentlichkeit testen KI in bisher unerreichter Breite", notes: "Der Durchbruch war nicht nur technisch. Niedrige Zugangshürden und direkte Rückmeldung machten die Fähigkeiten massenhaft erfahrbar." },
        { id: "ez-14", type: "content", layout: "tiles", title: "2025–2026: Von Antworten zu Arbeitsschritten", body: "REASONING\nModelle lösen längere mathematische, wissenschaftliche und planerische Aufgaben\n---\nAGENTEN\nSysteme nutzen Werkzeuge, bearbeiten Dateien und führen mehrstufige Abläufe aus\n---\nMULTIMODALE ARBEIT\nDokumente, Bilder, Sprache und Bildschirmaktionen werden verbunden\n---\nSICHERHEIT & GOVERNANCE\nEvaluierung, Transparenz und Kontrolle werden zum eigenen Entwicklungsfeld", notes: "Agent bedeutet nicht autonomes Bewusstsein. Gemeint ist ein System, das Ziele über mehrere Schritte mit Werkzeugen verfolgt." },
        { id: "ez-15", type: "content", layout: "metrics", title: "KI im Jahr 2026", body: "88 %\nOrganisationen mit KI-Nutzung laut AI Index\n---\n53 %\nGenAI-Bevölkerungsadoption in drei Jahren\n---\n> 90 %\nAnteil der Industrie an bemerkenswerten Frontier-Modellen 2025\n---\n362\ndokumentierte KI-Vorfälle im aktuellen Berichtszeitraum", notes: "Zahlen stammen aus dem Stanford AI Index 2026 und hängen von Definitionen und Datengrundlage ab. Sie zeigen Größenordnungen, keine universelle Wirksamkeit." },
        { id: "ez-16", type: "content", layout: "two-column", title: "Die gezackte Leistungsgrenze", body: "SEHR STARK\nWettbewerbsmathematik, wissenschaftliche Fragen, Code, Übersetzung und multimodale Analyse erreichen in Benchmarks teilweise menschliches Spitzenniveau.\n---\nÜBERRASCHEND SCHWACH\nEinfache visuelle, räumliche oder alltägliche Aufgaben können weiterhin scheitern. Agenten versagen in strukturierten Computertests noch regelmäßig.", notes: "Der AI Index nennt als Beispiel hohe Mathematikleistung bei gleichzeitig schwacher analoger Uhrenerkennung. Fähigkeiten nicht pauschal verallgemeinern." },
        { id: "ez-17", type: "content", layout: "three-column", title: "Warum der Fortschritt weitergehen kann", body: "MEHR EFFIZIENZ\nBessere Algorithmen und Hardware liefern mehr Leistung pro Euro und Watt\n---\nMEHR WERKZEUGE\nSuche, Code, Datenbanken und Fachsoftware erweitern die Modellfähigkeiten\n---\nMEHR FEEDBACK\nNutzung, Evals und synthetische Trainingsumgebungen liefern neue Lernsignale\n---\nMEHR SPEZIALISIERUNG\nKleine und große Modelle werden gezielter kombiniert\n---\nMEHR INVESTITION\nStaaten und Unternehmen bauen Infrastruktur und Talente aus\n---\nMEHR ANWENDUNG\nReale Prozesse erzeugen wirtschaftlichen Druck zur Verbesserung", notes: "Treiber sind plausibel, aber nicht unbegrenzt. Die nächste Folie behandelt Unsicherheiten und Bremsen." },
        { id: "ez-18", type: "content", layout: "two-column", title: "Zukunft ist ein Szenario, keine Gerade", body: "WARUM PROGNOSEN SCHEITERN\nTechnische Engpässe, Durchbrüche, Regulierung, Energie, Kapital, gesellschaftliche Akzeptanz und geopolitische Konflikte beeinflussen sich gegenseitig.\n---\nBESSERER ANSATZ\nMehrere konsistente Zukunftsbilder entwickeln, Frühindikatoren beobachten und Entscheidungen so treffen, dass sie in mehreren Szenarien tragfähig bleiben.", notes: "Die OECD arbeitet für 2030 ebenfalls mit vier möglichen Trajektorien, weil Geschwindigkeit und Reichweite der Entwicklung unsicher sind." },
        { id: "ez-19", type: "content", layout: "table", title: "Vier plausible KI-Szenarien bis 2030", body: "Szenario | Technische Entwicklung | Typische Folge\nPlateau | Fortschritt verlangsamt sich deutlich | Fokus auf Optimierung bestehender Systeme\nKontinuierlich | Fähigkeiten und Effizienz steigen stetig | breite Assistenz in vielen Berufen\nBeschleunigt | Agenten werden zuverlässiger und günstiger | schnelle Prozessautomatisierung und Umbau von Arbeit\nDurchbruch | große Sprünge bei Planung, Forschung oder Robotik | erhebliche Chancen, Risiken und Anpassungsdruck", notes: "Keine Eintrittswahrscheinlichkeiten erfinden. Das Ziel ist strategische Vorbereitung, nicht die Auswahl einer Lieblingsprognose." },
        { id: "ez-20", type: "content", layout: "tiles", title: "Wahrscheinliche technische Richtungen", body: "AGENTISCHE SYSTEME\nLängere Aufgaben mit Planung, Werkzeugen und Kontrollpunkten\n---\nKLEINERE MODELLE\nMehr lokale, günstigere und spezialisierte Verarbeitung\n---\nMULTIMODALE ASSISTENZ\nSprache, Kamera, Dokumente und Anwendungen in einem Arbeitsfluss\n---\nWISSENSVERANKERUNG\nStärkere Verbindung mit Quellen, Datenbanken und überprüfbaren Berechnungen", notes: "„Wahrscheinlich“ bezieht sich auf sichtbare Entwicklungsrichtungen, nicht auf garantierte Leistungsniveaus oder Termine." },
        { id: "ez-21", type: "content", layout: "three-column", title: "Von Assistenten zu digitalen Arbeitsketten", body: "HEUTE\nEin Mensch stellt eine Frage und prüft eine Antwort\n---\nNÄCHSTE STUFE\nEin System plant Teilaufgaben, nutzt Werkzeuge und legt Zwischenergebnisse vor\n---\nZIELBILD\nMenschen definieren Ziele, Rechte, Budgets und Freigaben; mehrere spezialisierte Modelle führen kontrollierte Schritte aus", notes: "Das Zielbild ist nur tragfähig, wenn Protokollierung, Berechtigungen, Tests und Stopppunkte technisch durchgesetzt werden." },
        { id: "ez-22", type: "content", layout: "three-column", title: "Wissenschaft, Medizin und Robotik", body: "WISSENSCHAFT\nModelle unterstützen Hypothesen, Simulation, Literaturauswertung und Experimentplanung\n---\nMEDIZIN\nDokumentation, Bildanalyse und Entscheidungsunterstützung wachsen – unter hohen Evidenzanforderungen\n---\nROBOTIK\nMultimodale Modelle können Wahrnehmung, Sprache und Handlungsplanung stärker verbinden", notes: "In regulierten und physischen Bereichen ist die Umsetzung langsamer als eine reine Softwaredemo: Sicherheit, Daten und Validierung sind entscheidend." },
        { id: "ez-23", type: "content", layout: "two-column", title: "Wie sich Arbeit voraussichtlich verändert", body: "AUFGABEN WERDEN NEU VERTEILT\nEntwurf, Suche, Dokumentation und Standardanalyse werden stärker automatisiert. Menschen übernehmen Zielsetzung, Ausnahmefälle, Beziehung, Urteil und Verantwortung.\n---\nPROZESSE WERDEN NEU GEBAUT\nDer größte Nutzen entsteht nicht durch ein zusätzliches Chatfenster, sondern durch veränderte Abläufe, Datenqualität, Rollen und messbare Kontrollen.", notes: "Nicht behaupten, KI ersetze grundsätzlich keine oder alle Berufe. Auswirkungen unterscheiden sich nach Aufgabe, Branche, Qualifikation und Institution." },
        { id: "ez-24", type: "content", layout: "tiles", title: "Infrastruktur wird zum strategischen Faktor", body: "CHIPS\nSpitzentechnologie und Lieferketten konzentrieren sich auf wenige Akteure\n---\nENERGIE\nRechenzentren erhöhen Bedarf an Strom, Netzen und Kühlung\n---\nDATEN\nQualität, Rechte und Zugang werden zum Wettbewerbsvorteil\n---\nSOUVERÄNITÄT\nStaaten und Unternehmen wollen kritische KI-Fähigkeiten kontrollieren", notes: "Der Stanford AI Index 2026 hebt die Konzentration von Rechenzentren und führender Chipfertigung ausdrücklich hervor." },
        { id: "ez-25", type: "content", layout: "tiles", title: "Risiken wachsen nicht automatisch gleichmäßig", body: "MISSBRAUCH\nBetrug, Desinformation, Cyberangriffe und gefährliche Fachunterstützung\n---\nSYSTEMFEHLER\nUnzuverlässige oder manipulierte Ausgaben in wichtigen Prozessen\n---\nMACHTKONZENTRATION\nAbhängigkeit von wenigen Modellen, Plattformen und Infrastrukturen\n---\nKONTROLLVERLUST\nZunehmende Autonomie erschwert Aufsicht und rechtzeitiges Eingreifen", notes: "Der Internationale KI-Sicherheitsbericht 2026 betont: Fähigkeiten steigen schneller als viele erwartet hatten; Risikomanagement verbessert sich, ist aber noch unzureichend." },
        { id: "ez-26", type: "content", layout: "table", title: "Was die Entwicklung bremsen kann", body: "Bremse | Mögliche Wirkung\nEnergie und Chips | höhere Kosten oder begrenzte Skalierung\nDaten und Urheberrecht | weniger frei nutzbare Trainingsbestände\nZuverlässigkeit | langsame Freigabe in kritischen Prozessen\nWirtschaftlichkeit | Pilotprojekte liefern keinen dauerhaften Nutzen\nRegulierung und Haftung | höhere Prüf- und Dokumentationspflichten\nAkzeptanz und Vertrauen | Widerstand bei intransparenten oder unfairen Anwendungen", notes: "Bremsen können Fortschritt verlangsamen oder in andere Richtungen lenken; sie bedeuten nicht zwingend Stillstand." },
        { id: "ez-27", type: "content", layout: "table", title: "Frühindikatoren für den tatsächlichen Pfad", body: "Indikator | Beobachtungsfrage\nReale Aufgabenlänge | Wie lange arbeiten Agenten zuverlässig ohne Eingriff?\nPreis-Leistung | Wie schnell sinken Kosten bei gleicher Qualität?\nFehler und Vorfälle | Steigen Schäden langsamer oder schneller als Nutzung?\nUnternehmensnutzen | Werden Piloten in messbar bessere Prozesse überführt?\nEnergie und Hardware | Reicht Infrastruktur für weiteres Wachstum?\nGovernance | Halten Evaluierung und Kontrollen mit Fähigkeiten Schritt?", notes: "Diese Indikatoren jährlich oder halbjährlich aktualisieren. Einzelne Benchmarks reichen für strategische Entscheidungen nicht aus." },
        { id: "ez-28", type: "content", layout: "three-column", title: "Was Organisationen jetzt tun sollten", body: "1 · LERNEN\nFähigkeiten, Grenzen und relevante Entwicklungen systematisch beobachten\n---\n2 · TESTEN\nWenige wertvolle Prozesse mit Messgrößen, Datenregeln und Kontrollpunkten pilotieren\n---\n3 · BEFÄHIGEN\nMitarbeitende in Aufgabenklärung, Prüfung und sicherer Anwendung schulen\n---\n4 · ABSICHERN\nRollen, Verträge, Datenschutz, Sicherheit und Freigaben definieren\n---\n5 · FLEXIBEL BLEIBEN\nKeine Architektur dauerhaft an ein einzelnes Modell binden\n---\n6 · SZENARIEN NUTZEN\nInvestitionen gegen mehrere Zukunftspfade testen", notes: "Der Schwerpunkt liegt auf robuster Handlungsfähigkeit statt auf einer perfekten Vorhersage." },
        { id: "ez-29", type: "content", layout: "three-column", title: "Übung: Ihre KI-Welt im Jahr 2030", body: "SZENARIO WÄHLEN\nPlateau, kontinuierlich, beschleunigt oder Durchbruch\n---\nAUSWIRKUNG BESCHREIBEN\nKunden, Leistungen, Prozesse, Rollen und Risiken betrachten\n---\nENTSCHEIDUNG TREFFEN\nEine Maßnahme festlegen, die heute sinnvoll und in mehreren Szenarien robust ist", notes: "25 Minuten Gruppenarbeit. Jede Gruppe nennt zusätzlich zwei Frühindikatoren, die ihr Szenario bestätigen oder widerlegen würden." },
        { id: "ez-30", type: "content", layout: "three-column", title: "Sechs Erkenntnisse zum Mitnehmen", body: "FORTSCHRITT KOMMT IN WELLEN\nBoom, Ernüchterung und neue Ansätze wechseln sich ab\n---\nINFRASTRUKTUR ZÄHLT\nAlgorithmen allein erzeugen noch keinen Durchbruch\n---\nOBERFLÄCHEN BESCHLEUNIGEN NUTZUNG\nZugang kann so wichtig sein wie Modellleistung\n---\nFÄHIGKEITEN BLEIBEN UNEBEN\nSpitzenleistung und einfache Fehler existieren gleichzeitig\n---\nZUKUNFT BLEIBT OFFEN\nSzenarien sind belastbarer als ein fixes Datum\n---\nGESTALTUNG IST MÖGLICH\nTechnik, Regeln und Organisation bestimmen gemeinsam die Wirkung", notes: "Abschlussrunde: Welche der sechs Erkenntnisse verändert die eigene Sicht am stärksten?" },
        { id: "ez-31", type: "content", layout: "table", title: "Historische Primärquellen", body: "Originalquelle | Historischer Beitrag\nMcCulloch & Pitts, 1943 | formale künstliche Neuronen\nTuring: Computing Machinery and Intelligence, 1950 | Imitation Game\nDartmouth Proposal, 1955 | Begriff und Forschungsprogramm KI\nRumelhart, Hinton & Williams, 1986 | Backpropagation\nKrizhevsky, Sutskever & Hinton, 2012 | ImageNet-Durchbruch\nVaswani et al., 2017 | Transformer-Architektur\nBrown et al., 2020 | große Sprachmodelle und Few-shot-Lernen", notes: "Originalaufsätze und Projektanträge als Primärquellen lesen. Spätere Begriffe wie „Durchbruch“ sind historische Einordnungen und nicht automatisch Aussagen der damaligen Autoren." },
        { id: "ez-32", type: "content", layout: "table", title: "Quellen zur Gegenwart und Zukunft", body: "Quelle | Evidenzart | Verwendung\nStanford HAI: AI Index 2026 | beobachtete Daten | Fähigkeiten, Nutzung, Infrastruktur und Vorfälle\nOECD: AI Trajectories through 2030, 2026 | vier Szenarien | mögliche Entwicklungspfade und Bremsen\nInternational AI Safety Report 2026 | Forschungsübersicht | Fähigkeiten, Risiken und Gegenmaßnahmen\nNIST AI RMF und GenAI Profile | Rahmenwerk | vertrauenswürdige Gestaltung und Kontrollen\nEU-Verordnung 2024/1689 | Rechtsquelle | risikobasierte Anforderungen in der EU\nStand: 17. Juli 2026 | Aktualitätsgrenze | Prognosen nicht als Gewissheit darstellen", notes: "Daten, Szenarien, Syntheseberichte, Normen und Rechtsquellen nicht vermischen. Zukunftsfolien mindestens jährlich und Frühindikatoren halbjährlich aktualisieren." }
      ]
    },
    {
      id: "mod-ki-werkzeuge",
      title: "KI-Werkzeuge gezielt einsetzen",
      category: "Künstliche Intelligenz",
      level: "Anwender & Entscheider",
      duration: 210,
      tags: ["KI-Werkzeuge", "Skills", "Connectors", "Automationen", "Agenten", "MCP"],
      description: "Praxisorientierte Entscheidungshilfe für Chat, Artefakte, Skills, Systemzugriffe, Automationen und KI-Agenten.",
      version: 4,
      updatedAt: "2026-07-17",
      slides: [
        { id: "kw-1", type: "title", layout: "standard", title: "KI-Werkzeuge gezielt einsetzen", body: "Vom Chat über Skills und Systemzugriffe bis zu Automationen und Agenten\n\nPraxisworkshop für einen produktiven und kontrollierten Einsatz", notes: "Einstiegsfrage: Bei welcher wiederkehrenden Aufgabe verlieren die Teilnehmenden aktuell am meisten Zeit?" },
        { id: "kw-2", type: "content", layout: "tiles", title: "Was Sie nach diesem Modul können", body: "EINORDNEN\nDie wichtigsten KI-Bausteine klar unterscheiden\n---\nAUSWÄHLEN\nFür eine Aufgabe das passende Werkzeug bestimmen\n---\nKOMBINIEREN\nMehrere Bausteine zu einem belastbaren Ablauf verbinden\n---\nABSICHERN\nDaten, Berechtigungen und Freigaben angemessen gestalten", notes: "Das Ziel ist keine Produktkunde. Die Teilnehmenden sollen eine wiederverwendbare Entscheidungslogik mitnehmen." },
        { id: "kw-3", type: "content", layout: "two-column", title: "KI wird erst mit Werkzeugen arbeitsfähig", body: "DAS SPRACHMODELL\nVersteht Aufträge, verarbeitet Inhalte und erzeugt Entwürfe. Ohne Kontext kennt es jedoch weder Ihre Regeln noch Ihre Systeme.\n---\nDIE WERKZEUGE\nLiefern Fachwissen, Datenzugriff, Berechnungen, Dateien und Auslöser. Erst damit entsteht ein kontrollierter Arbeitsprozess.", notes: "Vergleich: Ein neuer Mitarbeiter kann viel, benötigt aber Arbeitsmittel, Fachregeln, Zugriffsrechte und klare Freigaben." },
        { id: "kw-4", type: "content", layout: "three-column", title: "Sechs Bausteine der KI-Werkzeuglandschaft", body: "ARTEFAKTE\nVerwendbare Ergebnisse und Dokumente\n---\nSKILLS\nWiederverwendbare Regeln und Vorgehensweisen\n---\nCONNECTORS\nKontrollierter Zugang zu Daten und Systemen\n---\nTOOLS & PLUGINS\nZusätzliche Fähigkeiten wie Suche oder Berechnung\n---\nAUTOMATIONEN\nFeste Abläufe mit einem definierten Auslöser\n---\nAGENTEN\nZielorientierte, mehrschrittige Delegation", notes: "Die Begriffe unterscheiden sich je Plattform. Entscheidend ist die Funktion, nicht der Produktname." },
        { id: "kw-5", type: "content", layout: "table", title: "Die Delegation steigt stufenweise", body: "Stufe | Mensch bestimmt | KI übernimmt\nChat | jede einzelne Frage | Antwort oder Entwurf\nSkill | Ziel und Anwendung | standardisierte Methode\nTool-Aufruf | Freigabe und Parameter | einzelne externe Aktion\nAutomation | Regel und Kontrollpunkt | wiederkehrende Schrittfolge\nAgent | Ziel, Grenzen und Freigaben | Planung und mehrere Aktionen", notes: "Mit wachsender Autonomie müssen Beobachtbarkeit, Berechtigungen, Tests und Abbruchmöglichkeiten ebenfalls wachsen." },
        { id: "kw-6", type: "content", layout: "two-column", title: "Artefakte liefern direkt nutzbare Ergebnisse", body: "GEEIGNET FÜR\nBerichte, Protokolle, Präsentationen, Tabellen, Kalkulationen, HTML-Seiten und Entscheidungsvorlagen.\n---\nWENIGER GEEIGNET FÜR\nWiederkehrende Abläufe, die jedes Mal identisch geprüft, gestartet und dokumentiert werden müssen.", notes: "Ein Artefakt ist das Ergebnis, nicht zwingend der gesamte Prozess. Es kann anschließend geprüft, überarbeitet und exportiert werden." },
        { id: "kw-7", type: "content", layout: "three-column", title: "Praxisfall: Bericht aus einem Gutachten", body: "1 · INPUT\nGutachten und gewünschte Berichtstruktur bereitstellen\n---\n2 · VERARBEITUNG\nFeststellungen, Fristen und Verantwortlichkeiten extrahieren\n---\n3 · ERGEBNIS\nGeprüfter Bericht mit Management-Zusammenfassung und Mängeltabelle", notes: "Keine pauschalen Zeit- oder Qualitätsversprechen machen. Nutzen hängt von Dokumentqualität, Umfang, Modell und Prüfprozess ab." },
        { id: "kw-8", type: "content", layout: "two-column", title: "Skills machen Facharbeit wiederholbar", body: "DAS STECKT DARIN\nRolle, Prüfschritte, Fachregeln, Ausgabeformat, Qualitätskriterien, Beispiele und Eskalationen.\n---\nDAS ENTSTEHT\nMehr Konsistenz über Personen und Fälle hinweg – bei weiterhin notwendiger fachlicher Kontrolle.", notes: "Ein Skill ersetzt kein Fachwissen. Er übersetzt vorhandenes Fachwissen in eine wiederverwendbare Arbeitsanweisung." },
        { id: "kw-9", type: "content", layout: "table", title: "Wann lohnt sich ein Skill?", body: "Prüffrage | Signal\nKommt die Aufgabe regelmäßig vor? | Wiederverwendung ist wahrscheinlich\nGibt es eine fachlich richtige Reihenfolge? | Prüfschritte lassen sich beschreiben\nSoll das Ergebnis einheitlich aussehen? | Ausgabeformat kann standardisiert werden\nTreten typische Fehler wiederholt auf? | Kontrollen können eingebaut werden\nÄndern sich Regeln häufig? | Pflege und Verantwortliche festlegen", notes: "Praxisregel: Wenn Mitarbeitende regelmäßig fragen, wie eine Aufgabe korrekt ausgeführt wird, ist sie ein guter Skill-Kandidat." },
        { id: "kw-10", type: "content", layout: "three-column", title: "Ein belastbarer Skill entsteht in drei Schritten", body: "1 · BESCHREIBEN\nGute bisherige Vorgehensweise und Qualitätsmaßstab dokumentieren\n---\n2 · TESTEN\nReale Normal-, Grenz- und Fehlerfälle prüfen\n---\n3 · BETREIBEN\nVersion, Verantwortliche und regelmäßige Aktualisierung festlegen", notes: "Nicht mit einem riesigen Regelwerk starten. Zunächst einen klar abgegrenzten Prozess und zehn repräsentative Testfälle verwenden." },
        { id: "kw-11", type: "content", layout: "two-column", title: "Connectors erschließen vorhandene Systeme", body: "MÖGLICHE QUELLEN\nDokumentenmanagement, SharePoint, Cloud-Speicher, E-Mail, Kalender, CRM, ERP oder Projektmanagement.\n---\nENTSCHEIDENDE FRAGEN\nWelche Daten dürfen gelesen oder verändert werden? Wer autorisiert den Zugriff? Was wird protokolliert?", notes: "Ein Connector ist keine pauschale Freigabe. Rechte sollten nach Zweck, Person, Datenbereich und Aktion begrenzt werden." },
        { id: "kw-12", type: "content", layout: "three-column", title: "Praxisfall: Verträge gezielt durchsuchen", body: "1 · BERECHTIGUNG\nNur freigegebene Vertragsordner lesend anbinden\n---\n2 · ABFRAGE\nAuslaufende Verträge und relevante Klauseln ermitteln\n---\n3 · KONTROLLE\nFundstellen verlinken und Ergebnis fachlich bestätigen", notes: "Bei Vertragsinformationen immer die Fundstelle mitliefern lassen. Antworten ohne überprüfbaren Bezug zum Original sind nicht freigabefähig." },
        { id: "kw-13", type: "content", layout: "two-column", title: "Tools und Plugins erweitern Fähigkeiten", body: "TYPISCHE FÄHIGKEITEN\nWebrecherche, Berechnungen, Code-Ausführung, Dateiverarbeitung, Diagramme, Bildanalyse oder Karten.\n---\nWICHTIGE KONTROLLE\nQuelle, Eingaben, Tool-Ergebnis und Übertragung in die Antwort müssen nachvollziehbar bleiben.", notes: "Ein Tool kann leistungsfähig sein und dennoch falsche Parameter erhalten. Nicht nur das Werkzeug, sondern auch seinen Aufruf prüfen." },
        { id: "kw-14", type: "content", layout: "table", title: "Connector und Tool lösen andere Probleme", body: "Kriterium | Connector | Tool oder Plugin\nHauptzweck | Zugang zu einem System | zusätzliche Fähigkeit\nBeispiel | Verträge aus SharePoint lesen | Szenarien berechnen\nDatenbasis | eigene freigegebene Daten | übergebene oder externe Daten\nRisiko | zu breite Berechtigung | falscher Aufruf oder unklare Quelle\nKontrolle | Rechte und Protokollierung | Parameter und Ergebnisprüfung", notes: "In realen Abläufen werden beide oft kombiniert: Der Connector liefert Daten, das Tool verarbeitet oder analysiert sie." },
        { id: "kw-15", type: "content", layout: "two-column", title: "Entwicklungsassistenten bauen dauerhafte Lösungen", body: "CHAT-ARTEFAKT\nSchneller Prototyp oder Einzelergebnis innerhalb einer Unterhaltung.\n---\nENTWICKLUNGSASSISTENT\nArbeitet mit echten Dateien, Versionskontrolle, Tests und einem bestehenden Softwareprojekt.", notes: "Sobald mehrere Personen entwickeln, Kundendaten verarbeitet werden oder ein Werkzeug dauerhaft betrieben wird, sind Repository, Tests und Deployment erforderlich." },
        { id: "kw-16", type: "content", layout: "two-column", title: "MCP standardisiert Werkzeugverbindungen", body: "DIE IDEE\nDas Model Context Protocol beschreibt, wie KI-Anwendungen Werkzeuge, Datenquellen und vorbereitete Ressourcen einheitlich ansprechen können.\n---\nDER NUTZEN\nIntegrationen werden austauschbarer und müssen nicht für jede Kombination vollständig neu entwickelt werden.", notes: "MCP ist ein technisches Protokoll, keine automatische Sicherheitsgarantie. Authentifizierung, Berechtigungen und sichere Tool-Definitionen bleiben erforderlich." },
        { id: "kw-17", type: "content", layout: "two-column", title: "Automationen folgen einer festen Logik", body: "DAS PRINZIP\nEin Zeitplan, Ereignis oder Grenzwert startet eine definierte Schrittfolge. Regeln und Kontrollpunkte sind im Voraus festgelegt.\n---\nGUTE KANDIDATEN\nHäufige, stabile Prozesse mit klaren Eingaben, bekannten Ausnahmen und messbarem Ergebnis.", notes: "Eine Automation sollte bei unklaren oder riskanten Fällen stoppen und an eine verantwortliche Person eskalieren." },
        { id: "kw-18", type: "content", layout: "three-column", title: "Drei Arten von Auslösern", body: "ZEITGESTEUERT\nMontagsbericht, Monatsabschluss oder tägliche Prüfung\n---\nEREIGNISBASIERT\nNeue E-Mail, neues Dokument oder erreichter Termin\n---\nBEDINGUNGSBASIERT\nGrenzwert, Risiko-Score oder Vertragsfrist", notes: "Die Gruppe soll je Auslöser ein Beispiel aus dem eigenen Arbeitsumfeld nennen." },
        { id: "kw-19", type: "content", layout: "table", title: "Skill und Automation ergänzen sich", body: "Frage | Skill | Automation\nWofür? | fachlich richtige Bearbeitung | selbstständiger Prozessstart\nDefiniert | Methode und Qualitätsregeln | Auslöser und Schrittfolge\nOhne Ergänzung | Nutzer muss aktiv starten | fachliche Methode bleibt variabel\nGemeinsam | Ereignis startet geprüfte Bearbeitung nach festem Regelwerk |", notes: "Beispiel: Ein neues Nachtragsdokument löst die Automation aus; der Skill definiert die fachlichen Prüfschritte; ein Artefakt ist der Prüfvermerk." },
        { id: "kw-20", type: "content", layout: "two-column", title: "Agenten bearbeiten Ziele statt Schrittfolgen", body: "AUTOMATION\nDer Weg ist vorgegeben. Das System führt eine bekannte Abfolge aus.\n---\nAGENT\nDas Ziel ist vorgegeben. Das System plant Zwischenschritte, wählt Werkzeuge und reagiert auf Ergebnisse.", notes: "Agenten sind sinnvoll, wenn mehrere Wege möglich sind. Bei stabilen Standardprozessen ist eine einfache Automation meist leichter prüfbar und günstiger." },
        { id: "kw-21", type: "content", layout: "table", title: "Autonomie braucht passende Leitplanken", body: "Autonomie | Geeignete Kontrolle\nAntwort entwerfen | menschliche Prüfung vor Nutzung\nDaten lesen | minimale Leserechte und Quellenbezug\nBerechnung ausführen | Parameter und Plausibilität prüfen\nDatei verändern | Vorschau, Versionierung und Rollback\nNachricht senden | ausdrückliche Freigabe vor Versand\nProzess steuern | Limits, Monitoring, Eskalation und Abbruch", notes: "Je schwerer eine Aktion rückgängig zu machen ist, desto näher muss der Freigabepunkt an der tatsächlichen Ausführung liegen." },
        { id: "kw-22", type: "content", layout: "three-column", title: "Ein vollständiger Werkzeugfluss", body: "1 · CONNECTOR\nHolt freigegebene Dokumente aus dem System\n---\n2 · SKILL\nPrüft Inhalte nach dem festgelegten Verfahren\n---\n3 · TOOL\nBerechnet Auswirkungen und Szenarien\n---\n4 · AUTOMATION\nStartet bei einem Ereignis und überwacht Status\n---\n5 · ARTEFAKT\nErzeugt den prüfbaren Ergebnisbericht\n---\n6 · MENSCH\nBewertet, entscheidet und gibt frei", notes: "Ein Agent kann Teile dieses Flusses planen. Die Freigabe folgenreicher Entscheidungen bleibt bewusst beim Menschen." },
        { id: "kw-23", type: "content", layout: "table", title: "Welcher Baustein passt zur Aufgabe?", body: "Aufgabe | Passender Startpunkt\nEinmaligen Bericht erstellen | Artefakt\nRegelmäßig gleichartig prüfen | Skill\nEigene Systeme durchsuchen | Connector\nRechnen, suchen oder visualisieren | Tool oder Plugin\nProzess automatisch starten | Automation\nKomplexes Ziel mehrschrittig verfolgen | Agent\nDauerhafte Anwendung entwickeln | Entwicklungsassistent", notes: "Die Tabelle zeigt den Startpunkt. Viele produktive Lösungen kombinieren anschließend mehrere Bausteine." },
        { id: "kw-24", type: "content", layout: "three-column", title: "Vier Fragen führen zur richtigen Auswahl", body: "ERGEBNIS\nWelches konkrete Arbeitsergebnis wird benötigt?\n---\nWIEDERHOLUNG\nEinzelfall, Standardaufgabe oder dauerhafter Prozess?\n---\nDATEN & AKTIONEN\nWelche Quellen und Veränderungen sind erforderlich?\n---\nRISIKO\nWas darf ohne menschliche Freigabe passieren?", notes: "Diese vier Fragen vor jeder Produktentscheidung beantworten. Erst danach konkrete Plattformen und Tarife vergleichen." },
        { id: "kw-25", type: "content", layout: "three-column", title: "Arbeitsbeispiel: Vertrag prüfen", body: "1 · ARTEFAKT\nEinmalige Analyse mit Fundstellen und Risikotabelle\n---\n2 · SKILL\nPrüfschema, Kategorien und Ausgabeformat standardisieren\n---\n3 · CONNECTOR\nVerträge und Anlagen kontrolliert aus dem DMS laden\n---\n4 · TOOL\nFristen, Beträge und Szenarien berechnen\n---\n5 · AUTOMATION\nNeue Verträge automatisch zur Vorprüfung einreihen\n---\n6 · FREIGABE\nJuristische und kaufmännische Entscheidung dokumentieren", notes: "Übung: Die Teilnehmenden markieren, an welcher Stelle ein Fehler den größten Schaden verursachen könnte und welche Kontrolle dort notwendig ist." },
        { id: "kw-26", type: "content", layout: "metrics", title: "Vier Phasen zum produktiven Einsatz", body: "1\nEinzelaufgabe mit Artefakt testen\n---\n2\nWiederholbare Methode als Skill sichern\n---\n3\nBenötigte Systeme kontrolliert anbinden\n---\n4\nStabilen Ablauf automatisieren und überwachen", notes: "Nicht mit maximaler Autonomie beginnen. Jede Phase braucht ein messbares Qualitäts- und Nutzenkriterium." },
        { id: "kw-27", type: "content", layout: "three-column", title: "Übung: Ihren Werkzeugfluss entwerfen", body: "AUFGABE WÄHLEN\nEinen häufigen, zeitintensiven Arbeitsprozess beschreiben\n---\nBAUSTEINE ZUORDNEN\nInput, Skill, Connector, Tool, Auslöser und Ergebnis festlegen\n---\nKONTROLLEN PLANEN\nBerechtigungen, Prüfpunkte, Eskalation und Verantwortliche definieren", notes: "30 Minuten Gruppenarbeit. Ergebnis als einfacher Ablauf mit maximal sechs Schritten vorstellen lassen." },
        { id: "kw-28", type: "content", layout: "three-column", title: "Sechs Regeln für den Werkzeugalltag", body: "VOM PROBLEM STARTEN\nNicht vom neuesten Produkt\n---\nEINFACH BEGINNEN\nNur notwendige Bausteine einsetzen\n---\nQUELLEN SICHTBAR MACHEN\nErgebnisse überprüfbar halten\n---\nRECHTE MINIMIEREN\nNur nötige Daten und Aktionen freigeben\n---\nAUTONOMIE VERDIENEN\nErst testen, dann schrittweise delegieren\n---\nVERANTWORTUNG KLÄREN\nMenschen entscheiden und geben frei", notes: "Abschlussrunde: Welcher bestehende Prozess eignet sich für einen risikoarmen Pilotversuch in den nächsten 30 Tagen?" },
        { id: "kw-29", type: "content", layout: "table", title: "Fach- und Primärquellen", body: "Quelle | Typ | Verwendung\nSheridan & Verplank, 1978 | historischer Forschungsbericht | Stufen der Mensch-Maschine-Automation\nParasuraman & Riley, 1997 | Primärforschung | Fehlgebrauch und Nichtnutzung von Automation\nModel Context Protocol Specification | technische Primärquelle | MCP-Konzept und Schnittstellen\nNIST AI RMF und OWASP GenAI Project | Rahmenwerk und Fachstandard | Risiken, Kontrollen und Aufsicht\nAktuelle Anbieter-Dokumentationen | Produktprimärquelle | Funktionen, Berechtigungen und Grenzen\nStand: 17. Juli 2026 | Aktualitätsgrenze | vor jeder Schulung erneut prüfen", notes: "Historische Automationsforschung liefert das Grundprinzip der abgestuften Delegation; aktuelle Produktaussagen werden dagegen aus der jeweiligen technischen Dokumentation belegt." }
      ]
    },
    {
      id: "mod-prompting",
      title: "Professionelles Prompt Engineering",
      category: "Methoden",
      level: "Anwender & Entwickler",
      duration: 150,
      tags: ["Prompt Engineering", "Vertragsprüfung", "Praxisbeispiel", "Qualität", "Übung"],
      description: "Professionelles Prompt Engineering als durchgängiger Praxisfall: vom schwachen Auftrag zur belegten Vertrags- und Risikoanalyse.",
      version: 6,
      updatedAt: "2026-07-17",
      slides: [
        { id: "pe-1", type: "title", layout: "standard", title: "Professionelles Prompt Engineering", body: "Vom unklaren Auftrag zur nachvollziehbaren Vertrags- und Risikoanalyse.\n\nEin durchgängiger Praxisfall · Stand: 17. Juli 2026", notes: "Den roten Faden ankündigen: Ein Vertrag, ein schlechter Prompt, ein unbrauchbares Ergebnis und anschließend der gemeinsame Aufbau einer professionellen Fassung." },
        { id: "pe-2", type: "content", layout: "tiles", title: "Was Sie am Ende beherrschen", body: "PROMPTS LESEN\nStärken und Lücken eines Arbeitsauftrags erkennen\n---\nPROMPTS BAUEN\nZiel, Kontext, Regeln und Ausgabe präzise verbinden\n---\nERGEBNISSE PRÜFEN\nBelege, Unsicherheit und Vollständigkeit kontrollieren\n---\nPROMPTS VERBESSERN\nSchwache Ausgaben gezielt diagnostizieren und korrigieren", notes: "Lernziele auf das konkrete Vertragsbeispiel beziehen. Die Methodik lässt sich danach auf andere Aufgaben übertragen." },
        { id: "pe-3", type: "content", layout: "three-column", title: "Unser Praxisfall: Vertrag prüfen", body: "EINGABE\nEin umfangreicher Bauvertrag mit Anlagen, Terminen und Vergütungsregeln\n---\nAUFGABE\nRisiken, Fristen, Kostenlogik und fehlende Unterlagen strukturiert erkennen\n---\nERGEBNIS\nBelegte Managementübersicht mit Prioritäten und konkreten Klärungsfragen", notes: "Es handelt sich um ein Schulungsbeispiel und keine Rechtsberatung. Die beigefügte Vertragsanalyse dient als gestalterische und fachliche Orientierung." },
        { id: "pe-4", type: "content", layout: "two-column", title: "Der schlechte Ausgangsprompt", body: "PROMPT\n„Prüfe den Vertrag. Welche Risiken gibt es?“\n---\nWAS FEHLT?\nPerspektive · Prüffelder · Belegpflicht · Risikologik · Umgang mit Lücken · Ausgabeformat · Zielgruppe · rechtliche Grenze", notes: "Den Prompt zunächst ohne Bewertung zeigen und die Gruppe die fehlenden Angaben sammeln lassen." },
        { id: "pe-5", type: "content", layout: "two-column", title: "Das Ergebnis des schlechten Prompts", body: "TYPISCHE ANTWORT\n„Der Vertrag enthält Risiken bei Terminen, Vergütung und Haftung. Achten Sie auf Vertragsstrafen, Nachträge und Gewährleistung. Lassen Sie kritische Klauseln rechtlich prüfen.“\n---\nWARUM UNBRAUCHBAR?\nKeine Fundstelle · keine Belege · keine Priorität · keine konkrete Wirkung · keine Dokumentenlücke · keine belastbare nächste Handlung", notes: "Klarstellen: Der Text klingt vernünftig, ist aber für eine Entscheidung kaum nutzbar. Sprachliche Sicherheit ist kein Qualitätsbeleg." },
        { id: "pe-6", type: "content", layout: "tiles", title: "Vier Ursachen für schwache Ergebnisse", body: "ZU WENIG KONTEXT\nDas Modell muss Zweck und Perspektive erraten\n---\nKEINE GRENZEN\nFakten, Annahmen und Empfehlungen vermischen sich\n---\nKEIN FORMAT\nDie Antwort bleibt allgemein und schlecht vergleichbar\n---\nKEINE PRÜFLOGIK\nVollständigkeit und Qualität sind nicht messbar", notes: "Nicht sofort am Wortlaut feilen. Erst die Fehlerursache bestimmen." },
        { id: "pe-7", type: "content", layout: "three-column", title: "Sechs Bausteine eines Profi-Prompts", body: "1 · ROLLE & PERSPEKTIVE\nWer prüft für wen?\n---\n2 · ZIEL\nWelche Entscheidung soll vorbereitet werden?\n---\n3 · KONTEXT\nWelche Dokumente und Rahmenbedingungen gelten?\n---\n4 · PRÜFFELDER\nWelche Themen müssen vollständig untersucht werden?\n---\n5 · REGELN\nWie werden Belege, Lücken und Unsicherheit behandelt?\n---\n6 · AUSGABE\nWelche Felder, Reihenfolge und Priorität werden erwartet?", notes: "Die sechs Bausteine bilden den roten Faden der folgenden Folien." },
        { id: "pe-8", type: "content", layout: "table", title: "Kurzzeichen und Strukturmarker", body: "Zeichen oder Muster | Typische Wirkung\n# und ## | Überschriften und Hierarchie sichtbar machen\n- oder • | einzelne Regeln und Prüfpunkte trennen\n1. 2. 3. | Reihenfolge oder Arbeitsschritte verdeutlichen\n<vertrag>…</vertrag> | Quelldokument klar von Anweisungen abgrenzen\n<<< TEXT >>> | Beginn und Ende eines Datenblocks markieren\n{{variable}} | austauschbare Platzhalter kennzeichnen\nMarkdown-Tabelle | gewünschte Spalten und Vergleichsstruktur vormachen", notes: "Wichtig: Diese Zeichen sind keine geheimen Befehle und garantieren kein bestimmtes Ergebnis. Sie reduzieren Mehrdeutigkeit und machen die Struktur für Mensch und Modell leichter erkennbar." },
        { id: "pe-9", type: "content", layout: "two-column", title: "Unstrukturiert oder klar gegliedert?", body: "UNSTRUKTURIERT\nPrüfe den Vertrag aus AN-Sicht auf Termine Kosten Nachträge und Haftung und nenne Stellen und Maßnahmen aber erfinde nichts.\n---\nSTRUKTURIERT\n# Ziel\nRisiken aus AN-Sicht erkennen\n# Prüffelder\n- Termine\n- Vergütung\n- Nachträge\n# Regeln\n- jede Aussage belegen\n- Unsicherheit markieren", notes: "Der Inhalt ist ähnlich. Die sichtbare Hierarchie erleichtert Pflege, Diskussion und zuverlässige Interpretation." },
        { id: "pe-10", type: "content", layout: "tiles", title: "Der Arbeitsfluss der Vertragsprüfung", body: "1 · AUFTRAG KLÄREN\nPerspektive, Ziel und Grenze festlegen\n---\n2 · DOKUMENTE ORDNEN\nVertrag, Anlagen und fehlende Unterlagen erfassen\n---\n3 · RISIKEN PRÜFEN\nKlauseln belegen, Wirkung bewerten, Lücken markieren\n---\n4 · ENTSCHEIDUNG BAUEN\nPrioritäten, Fragen und Maßnahmen ausgeben", notes: "Diese vier Phasen sind zugleich die Struktur des späteren Gesamtprompts." },
        { id: "pe-11", type: "content", layout: "two-column", title: "Schritt 1: Ziel und Perspektive", body: "ZU ALLGEMEIN\n„Analysiere den Vertrag.“\n---\nPRÄZISE\n„Erstelle eine vorläufige Risikoanalyse aus Sicht des Auftragnehmers für die kaufmännische und technische Projektleitung. Ziel ist eine priorisierte Klärungsliste vor Vertragsfreigabe.“", notes: "Perspektive verändert, welche Folgen und Handlungsmöglichkeiten relevant sind. Die KI übernimmt dabei keine verbindliche Rechtsprüfung." },
        { id: "pe-12", type: "content", layout: "table", title: "Schritt 2: Prüffelder festlegen", body: "Prüffeld | Leitfrage\nVertragsgrundlagen | Sind alle genannten Anlagen vorhanden und eindeutig?\nVergütung | Sind Preisbasis, Zuschläge und Kostendeckel klar?\nTermine | Welche Basistermine, Fristen und Vertragsstrafen gelten?\nNachträge | Welche Anzeige-, Prüf- und Freigabeschritte sind einzuhalten?\nAbnahme | Welche Dokumente und Vorläufe sind erforderlich?\nHaftung & Sicherheiten | Welche Pflichten, Grenzen und Bürgschaften bestehen?", notes: "Eine Prüffeldliste erhöht die Vollständigkeit. Sie sollte an Vertragstyp und Organisation angepasst werden." },
        { id: "pe-13", type: "content", layout: "two-column", title: "Schritt 3: Belege und Unsicherheit", body: "BELEGPFLICHT\nJeden Befund mit Klausel, Seite und kurzem Textbeleg ausgeben. Befund, Interpretation und Empfehlung voneinander trennen.\n---\nSTOPPREGEL\nFehlt eine Anlage oder ist eine Aussage nicht belegbar, nicht raten. Status „nicht prüfbar“ setzen und eine konkrete Klärungsfrage formulieren.", notes: "Diese Regeln bekämpfen das häufigste Problem der Vertragsanalyse: plausibel klingende Verallgemeinerungen ohne belastbare Fundstelle." },
        { id: "pe-14", type: "content", layout: "table", title: "Schritt 4: Das gewünschte Ergebnis", body: "Ausgabefeld | Inhalt\nFundstelle | Klausel, Anlage und Seite\nBefund | sachliche Aussage aus dem Dokument\nRisiko | mögliche technische, kaufmännische oder terminliche Wirkung\nPriorität | kritisch, hoch, mittel oder niedrig – mit Begründung\nMaßnahme | konkrete Prüfung, Verhandlung oder Absicherung\nKlärungsfrage | offen formulierte Frage an zuständige Stelle", notes: "Diese Folie ersetzt die frühere abstrakte Prompt-Vorlage. Jetzt ist sichtbar, was das Modell konkret liefern soll und wozu jedes Feld dient." },
        { id: "pe-15", type: "content", layout: "two-column", title: "Der Profi-Prompt – Auftrag und Kontext", body: "# ROLLE\nDu unterstützt eine fachliche Erstprüfung von Bauverträgen. Du ersetzt keine Rechtsberatung.\n\n# AUFTRAG\nAnalysiere den Vertrag aus Sicht des Auftragnehmers. Erstelle eine priorisierte Klärungsliste für Projektleitung und Einkauf.\n---\n# PRÜFFELDER\n- Vertragsgrundlagen und Anlagen\n- Vergütung und Kostenlogik\n- Termine und Vertragsstrafe\n- Nachträge und Anzeigen\n- Abnahme, Haftung und Sicherheiten", notes: "Erster Teil des vollständigen Musterprompts. Bei einem eigenen Prompt des Referenten kann dieser Abschnitt direkt ersetzt und gemeinsam analysiert werden." },
        { id: "pe-16", type: "content", layout: "two-column", title: "Der Profi-Prompt – Regeln und Ausgabe", body: "# REGELN\n- nutze ausschließlich bereitgestellte Dokumente\n- belege jeden Befund mit Fundstelle\n- trenne Befund, Interpretation und Empfehlung\n- markiere fehlende Anlagen als „nicht prüfbar“\n- erfinde keine Klauseln oder Tatsachen\n---\n# AUSGABE\nErstelle zuerst eine Risikotabelle mit Fundstelle, Befund, Wirkung, Priorität, Maßnahme und Klärungsfrage. Fasse danach die fünf wichtigsten Managemententscheidungen zusammen.", notes: "Den Vertrag anschließend klar abgrenzen, zum Beispiel mit <vertrag>…</vertrag>. Sensible Dokumente nur in einem freigegebenen System verwenden." },
        { id: "pe-17", type: "content", layout: "table", title: "Das Ergebnis des Profi-Prompts", body: "Fundstelle | Befund | Risiko | Priorität | Klärungsfrage\nAnlage 6a/6b | Termin- und Zahlungsplan genannt, aber nicht vorgelegt | Baseline und Zahlungsbezug nicht prüfbar | kritisch | Welche unterschriebene Fassung gilt?\n§ 10 | Vertragsstrafe 0,2 % je Werktag, maximal 5 % | erhebliche Terminexponierung | hoch | Auf welche Vergütungsbasis bezieht sich die Strafe?\n§ 6.1 | Zuschlag für definierte Gewerke erwähnt | Gesamtsumme und Fee-Basis unklar | hoch | Ist die Fee zusätzlich oder im Zielbudget enthalten?", notes: "Fiktiv verkürztes Schulungsresultat auf Basis des Vertragsanalyse-Beispiels. Entscheidend sind Beleg, Wirkung, Priorität und nächste Frage – nicht nur mehr Text." },
        { id: "pe-18", type: "content", layout: "two-column", title: "Schlecht gegen professionell", body: "SCHLECHTER PROMPT\nAllgemeine Risiken\nkeine Fundstellen\nkeine Priorität\nkeine belastbare Aktion\nErgebnis klingt richtig, hilft aber kaum\n---\nPROFI-PROMPT\nfestgelegte Perspektive\ndefinierte Prüffelder\nBelege und Stoppregeln\nvergleichbares Ausgabeformat\nErgebnis unterstützt konkrete Entscheidungen", notes: "Die Gruppe bewerten lassen, welches Ergebnis in einer Besprechung tatsächlich weiterverwendet werden kann." },
        { id: "pe-19", type: "content", layout: "three-column", title: "Gute Folgeprompts statt Neustart", body: "VOLLSTÄNDIGKEIT\n„Prüfe, welche definierten Prüffelder noch nicht behandelt wurden.“\n---\nGEGENPRÜFUNG\n„Suche zu jedem hohen Risiko eine entlastende oder widersprechende Klausel.“\n---\nENTSCHEIDUNG\n„Verdichte nur belegte kritische und hohe Risiken zu einer Agenda mit Verantwortlichen.“", notes: "Folgeprompts sollten eine klar definierte Zusatzaufgabe haben. Nicht einfach „Mach es besser“ schreiben." },
        { id: "pe-20", type: "content", layout: "three-column", title: "Übung: Ihren Prompt weiterentwickeln", body: "1 · MITBRINGEN\nEigenen Prompt oder eine reale Aufgabe anonymisiert bereitstellen\n---\n2 · DIAGNOSTIZIEREN\nFehlende Bausteine, Mehrdeutigkeit und gewünschte Ausgabe markieren\n---\n3 · VERGLEICHEN\nAlte und neue Fassung mit demselben Dokument testen und Ergebnis bewerten", notes: "Hier kann der eigene Vertragsprüfungs-Prompt des Referenten vollständig übernommen werden. 30 Minuten Arbeitszeit plus gemeinsame Auswertung." },
        { id: "pe-21", type: "content", layout: "tiles", title: "Qualitätscheck vor der Nutzung", body: "BELEGT\nSind Aussagen und Zahlen auf Fundstellen zurückführbar?\n---\nVOLLSTÄNDIG\nWurden alle vereinbarten Prüffelder bearbeitet?\n---\nNACHVOLLZIEHBAR\nSind Befund, Bewertung und Empfehlung getrennt?\n---\nVERANTWORTET\nSind Fachprüfung, Datenschutz und Freigabe geregelt?", notes: "Ein guter Prompt reduziert Risiken, beseitigt sie aber nicht. Die fachliche Verantwortung bleibt beim Menschen." },
        { id: "pe-22", type: "content", layout: "table", title: "Forschungs- und Primärquellen", body: "Originalarbeit | Beitrag\nBrown et al., 2020: Language Models are Few-Shot Learners | In-Context- und Few-shot-Lernen\nWei et al., 2022: Chain-of-Thought Prompting | Zwischenschritte bei komplexen Aufgaben\nReynolds & McDonell, 2021: Prompt Programming | Prompts als Steuerungs- und Programmierform\nWhite et al., 2023: Prompt Pattern Catalog | wiederverwendbare Promptmuster\nNIST GenAI Profile 2024 | Belegbarkeit, Confabulation und menschliche Aufsicht", notes: "Forschungsergebnisse sind modell-, aufgaben- und testabhängig. Kein Promptmuster als universellen Geheimcode darstellen." },
        { id: "pe-23", type: "content", layout: "table", title: "Aktuelle Praxisquellen", body: "Quelle | Verwendung\nOpenAI Prompt Engineering Guide | klare Anweisungen, Struktur und Beispiele\nOpenAI Model Optimization | Testfälle, Evals und systematische Iteration\nOpenAI Reasoning Best Practices | modellabhängige Hinweise\nAnthropic Prompt Engineering Overview | Erfolgskriterien und empirische Tests\nEigene freigegebene Testfälle | fachliche Korrektheit und Prozessnutzen\nStand | 17. Juli 2026 – bei Modellwechsel neu evaluieren", notes: "Anbieterleitfäden dokumentieren die aktuelle Produktpraxis. Der belastbare Nachweis entsteht erst durch wiederholbare Tests mit den eigenen Aufgaben und Qualitätskriterien." }
      ]
    },
    {
      id: "mod-transfer",
      title: "Transfer in den Arbeitsalltag",
      category: "Transfer",
      level: "Alle",
      duration: 30,
      tags: ["Transfer", "Reflexion"],
      description: "Konkrete nächste Schritte, Verantwortlichkeiten und sichere Anwendung festlegen.",
      version: 3,
      updatedAt: "2026-07-17",
      slides: [
        { id: "s-7", type: "title", title: "Transfer in den Arbeitsalltag", body: "Aus Erkenntnissen werden konkrete nächste Schritte.", notes: "Auf realistische kleine Schritte fokussieren." },
        { id: "s-8", type: "content", title: "Start – Stop – Continue", body: "START: Was probiere ich neu aus?\n\nSTOP: Was sollte ich nicht mehr tun?\n\nCONTINUE: Was funktioniert bereits gut?", notes: "Stillarbeit, anschließend Austausch zu zweit." },
        { id: "s-9", type: "content", layout: "three-column", title: "Aus einer Absicht wird ein überprüfbarer Schritt", body: "WENN\nkonkreter Zeitpunkt oder Auslöser\n---\nDANN\nkleine beobachtbare Handlung\n---\nPRÜFEN\nErgebnis, Risiko und nächste Entscheidung", notes: "Eine Umsetzungsvorsatz-Form verwenden: Wenn Situation X eintritt, führe ich Handlung Y aus und prüfe Ergebnis Z." },
        { id: "s-10", type: "content", layout: "table", title: "Quellen für sicheren Transfer", body: "Quelle | Typ | Beitrag\nGollwitzer, 1999: Implementation Intentions | Primärforschung | konkrete Wenn-dann-Pläne\nParasuraman & Riley, 1997 | Primärforschung | Fehlgebrauch und Nichtnutzung von Automation\nNIST AI RMF 1.0 | Rahmenwerk | Rollen, Messung und Risikomanagement\nNIST GenAI Profile 2024 | Fachprofil | besondere Risiken generativer KI\nEigene Pilotdaten | Primärdaten der Organisation | Nutzen, Fehler und Nacharbeit\nStand: 17. Juli 2026 | Aktualitätsgrenze | Maßnahmen regelmäßig überprüfen", notes: "Transfer nicht nur über Selbsteinschätzung bewerten. Ein kleiner Pilot benötigt vorab definierte Qualitäts-, Risiko- und Abbruchkriterien." }
      ]
    },
    {
      id: "mod-chatgpt-claude-web-api",
      title: "ChatGPT vs. Claude – Web/App und API im Vergleich",
      category: "KI & Datenschutz",
      level: "Entscheider & Anwender",
      duration: 75,
      tags: ["ChatGPT", "Claude", "API", "Datenschutz", "DSGVO"],
      description: "Praxisorientierte Entscheidungshilfe für den professionellen Einsatz von ChatGPT und Claude – vom Consumer-Chat bis zum kontrollierten API-Prozess.",
      version: 2,
      updatedAt: "2026-07-17",
      slides: [
        { id: "cc-1", type: "title", title: "ChatGPT vs. Claude", body: "Web/App und API im Vergleich\n\nWelche Zugangsform passt zu welchem professionellen Einsatz?", notes: "Zum Einstieg abfragen: Wer nutzt Web/App, wer bereits eine API?" },
        { id: "cc-2", type: "content", title: "Lernziele", body: "Nach diesem Modul können Sie …\n\n• Web/App und API klar unterscheiden\n• ChatGPT und Claude entlang sachlicher Kriterien vergleichen\n• Datenschutz- und Aufbewahrungsfragen einordnen\n• für einen Anwendungsfall einen geeigneten Zugangsweg auswählen", notes: "Es geht nicht um einen pauschalen Testsieger, sondern um eine belastbare Auswahl." },
        { id: "cc-3", type: "content", title: "Vier Optionen – nicht nur zwei Anbieter", body: "1. ChatGPT Web/App\n2. Claude Web/App\n3. OpenAI API\n4. Anthropic API\n\nDie wichtigste Entscheidung lautet häufig zuerst: interaktiver Chat oder kontrollierter Prozess?", notes: "Consumer-, Business- und Enterprise-Tarife nicht vermischen. Regeln können je Tarif abweichen." },
        { id: "cc-4", type: "content", title: "Web/App: schnell, direkt, personenbezogen", body: "Typische Stärken\n• sofort nutzbare Bedienoberfläche\n• Dialog, Dateien und integrierte Werkzeuge\n• Verlauf, Projekte und Personalisierung – tarifabhängig\n\nTypische Grenzen\n• manuelle Einzelnutzung\n• weniger technische Prozesskontrolle\n• Einstellungen und Vertragslage müssen bewusst geprüft werden", notes: "Konkrete Produktfunktionen ändern sich schnell. Im Training keine dauerhafte Funktionsparität behaupten." },
        { id: "cc-5", type: "content", title: "API: Integration statt Chatfenster", body: "Typische Stärken\n• Einbindung in eigene Anwendungen und Arbeitsabläufe\n• definierte Eingaben, Ausgaben und Rollenrechte\n• zentrale Protokollierung, Kostenkontrolle und Qualitätssicherung\n• besser steuerbare Datenflüsse\n\nDafür erforderlich\n• Entwicklung, Betrieb, Tests und Sicherheitskonzept", notes: "API bedeutet nicht automatisch datenschutzkonform. Die konkrete Implementierung entscheidet mit." },
        { id: "cc-6", type: "content", title: "Welche Zugangsform passt?", body: "WEB/APP bevorzugen\n• Recherche und Ideengenerierung\n• persönliche, situative Aufgaben\n• anonymisierte oder unkritische Inhalte\n\nAPI bevorzugen\n• wiederkehrende Produktionsprozesse\n• Integration in Fachsysteme\n• Rollen, Protokollierung und Freigaben\n• vertrauliche Daten unter vertraglich und technisch kontrollierten Bedingungen", notes: "Grenzfälle gemeinsam besprechen: Ein einmaliger Chat mit anonymisierten Daten kann sinnvoller sein als eine unnötige Integration." },
        { id: "cc-7", type: "content", title: "Consumer-Chats: Training bewusst steuern", body: "ChatGPT Web/App\n• Modellverbesserung kann in den Data Controls deaktiviert werden\n• Temporary Chats erscheinen nicht im Verlauf, erzeugen keine Memory und werden nicht zum Training genutzt\n\nClaude Web/App\n• Nutzung zur Modellverbesserung hängt von Zustimmung und Einstellungen ab\n• Incognito Chats erscheinen nicht im Verlauf und werden nicht für Memory verwendet", notes: "Stand 17.07.2026. Sicherheits- und Missbrauchsprüfungen bleiben mögliche Ausnahmen." },
        { id: "cc-8", type: "content", title: "APIs: Standardmäßig kein Modelltraining", body: "OpenAI API\n• API-Daten werden standardmäßig nicht zum Training genutzt – außer bei ausdrücklichem Opt-in\n\nAnthropic API\n• Eingaben und Ausgaben kommerzieller Produkte werden standardmäßig nicht zum Training genutzt\n• Feedback und freiwillige Freigaben können Ausnahmen sein\n\nWichtig: Kein Training bedeutet nicht automatisch keine Speicherung.", notes: "Den letzten Satz hervorheben: Training und Aufbewahrung sind getrennte Prüffragen." },
        { id: "cc-9", type: "content", title: "Aufbewahrung und Zero Data Retention", body: "• Temporäre bzw. Inkognito-Chats: grundsätzlich bis zu 30 Tage, mit möglichen Ausnahmen\n• API-Missbrauchsüberwachung: häufig bis zu 30 Tage\n• einzelne Endpoints, Dateien, Caches und gespeicherte Zustände können abweichen\n• Zero Data Retention ist kein Consumer-Schalter\n• ZDR erfordert Eignung, Vereinbarung bzw. Genehmigung und eine passende technische Konfiguration", notes: "Keine pauschale ZDR-Zusage machen. Immer Endpoint, Modell, Tool und Vertrag gemeinsam prüfen." },
        { id: "cc-10", type: "content", title: "Praxisregel für sensible Daten", body: "Keine ungeschwärzten Personen-, Vertrags-, Finanz- oder vertraulichen Projektdaten in Consumer-Chats eingeben.\n\nBevorzugter Weg:\n• Daten minimieren oder pseudonymisieren\n• DPA/AVV und Transfers prüfen\n• kontrolliertes API-Projekt mit getrennten Schlüsseln\n• Rollen, Protokollierung und Löschung dokumentieren\n• bei hohem Risiko DSFA und Rechtsberatung einbeziehen", notes: "Hinweis: praxisorientierte Entscheidungshilfe, keine Rechtsberatung." },
        { id: "cc-11", type: "content", title: "Übung: Den richtigen Weg auswählen", body: "Bewerten Sie einen konkreten Anwendungsfall:\n\n1. Welche Daten werden verarbeitet?\n2. Wie sensibel und identifizierbar sind sie?\n3. Einmalige Nutzung oder wiederkehrender Prozess?\n4. Welche Verträge und Kontrollen bestehen?\n5. Web/App, API – oder vorerst gar kein KI-Einsatz?\n\nBegründen Sie Ihre Entscheidung in drei Sätzen.", notes: "15 Minuten Gruppenarbeit. Beispiele: Vertragsprüfung, allgemeine Recherche, Protokollzusammenfassung, Angebotsentwurf." },
        { id: "cc-12", type: "content", title: "Entscheidungscheck vor der Freigabe", body: "✓ Zweck und Rechtsgrundlage geklärt\n✓ Daten minimiert und klassifiziert\n✓ Tarif, Vertrag und DPA/AVV geprüft\n✓ Modell, Endpoint, Tools, Dateien und Caches bewertet\n✓ Training und Aufbewahrung getrennt geprüft\n✓ Zugriffsrechte, Protokollierung und Löschung geregelt\n✓ Ergebnisqualität und menschliche Freigabe definiert", notes: "Die Teilnehmenden markieren, welche Punkte in ihrer Organisation bereits geregelt sind." },
        { id: "cc-13", type: "content", layout: "table", title: "Produkt- und Rechtsquellen", body: "Primärquelle | Verwendung\nOpenAI Help: Data Controls und Temporary Chat | Consumer-Einstellungen und Verlauf\nOpenAI API Docs: Your data / Data controls | API-Training, Speicherung und ZDR\nAnthropic Privacy Center | Training und Aufbewahrung\nClaude Help Center: Incognito Chats | Verlauf, Memory und Nutzung\nEU-Verordnung 2024/1689 und DSGVO | rechtlicher Rahmen in der EU\nStand | 17. Juli 2026 – Tarif, Endpoint und Vertrag erneut prüfen", notes: "Produktregeln aus den aktuellen Anbieterquellen belegen; rechtliche Bewertung getrennt durchführen. Historische KI-Quellen tragen keine Aussage zu heutigen Datenschutzbedingungen." }
      ]
    },
    {
      id: "mod-ki-modelle-vergleich",
      title: "KI-Modelle im Vergleich – Welches Modell für welche Aufgabe?",
      category: "KI & Architektur",
      level: "Entwickler & Entscheider",
      duration: 90,
      tags: ["Modelle", "Tokens", "API-Kosten", "Routing"],
      description: "Praxisorientierte Übersicht für Auswahl, Entwicklung und Betrieb von KI-Anwendungen – mit Tokens, Kosten, Modellklassen und intelligentem Routing.",
      version: 3,
      updatedAt: "2026-07-17",
      slides: [
        { id: "km-1", type: "title", layout: "standard", title: "KI-Modelle im Vergleich", body: "Welches Modell eignet sich für welche Aufgabe?\n\nEine praxisorientierte Übersicht für KI-Anwendungen\nStand: 17. Juli 2026", notes: "Zu Beginn klären: Modellwahl ist eine Systementscheidung, kein Beliebtheitsvergleich." },
        { id: "km-2", type: "content", layout: "tiles", title: "Lernziele", body: "TOKENS\nInput und Output erklären\n---\nKOSTEN\nAPI-Kosten überschlägig berechnen\n---\nMODELLE\nQualität, Latenz und Kosten einordnen\n---\nROUTING\nEinen mehrstufigen Modell-Router skizzieren", notes: "Der Schwerpunkt liegt auf einer überprüfbaren Auswahlmethodik statt auf pauschalen Ranglisten." },
        { id: "km-3", type: "content", title: "Was sind Tokens?", body: "Ein Token ist eine Verarbeitungseinheit eines Sprachmodells.\n\nEin Token entspricht nicht zuverlässig einem Wort: Es kann ein Wort, Wortfragment, Satzzeichen oder anderes Zeichenmuster abbilden.\n\nTokenisierung hängt von Sprache, Modellfamilie und Tokenizer ab. Deshalb sind Seiten- und Wortangaben immer Näherungswerte.", notes: "Mit einem Tokenizer-Demo-Tool lässt sich zeigen, dass zusammengesetzte deutsche Wörter anders zerlegt werden können." },
        { id: "km-4", type: "content", layout: "metrics", title: "Text zu Tokens – grobe Orientierung", body: "1–2\n„Hallo“\n---\n2–4\n„Guten Morgen“\n---\n700–900\n1 DIN-A4-Textseite\n---\n1.100–1.400\nTextseiten je 1 Mio. Tokens", notes: "Nicht als garantierte Umrechnung darstellen. Vor einer Kalkulation echte Beispieldokumente mit dem Zielmodell messen." },
        { id: "km-5", type: "content", layout: "table", title: "Dokumente im Vergleich", body: "Dokument | Planungsannahme\nKurze E-Mail | ≈ 150 Tokens\nBrief | ≈ 500 Tokens\nVertrag, 30 Seiten | ≈ 25.000 Tokens\nBauvertrag, 300 Seiten | ≈ 180.000–250.000 Tokens\nFachbuch, 300 Seiten | ≈ 220.000–300.000 Tokens", notes: "Die Gruppe schätzen lassen, wie viele Dokumente pro Monat verarbeitet werden." },
        { id: "km-6", type: "content", layout: "two-column", title: "Input und Output", body: "INPUT – was gesendet wird\nPrompts · Dokumenttexte · PDFs · OCR-Texte · Bilder · Verlauf · Tool-Ergebnisse\n---\nOUTPUT – was das Modell erzeugt\nAntworten · Analysen · Tabellen · Berichte · Zusammenfassungen · Tool-Aufrufe", notes: "Kostenformel ergänzen: Input plus Output plus mögliche Tool- und Speicherkosten." },
        { id: "km-7", type: "content", title: "Aktueller Modellstand – wichtige Korrektur", body: "OpenAI\nGPT-5.6 ist seit 9. Juli 2026 die aktuelle Familie: Sol, Terra und Luna. GPT-5.5 bleibt ein Vorgänger, ist aber nicht mehr die aktuelle Referenz.\n\nAnthropic\nFable 5, Opus 4.8, Sonnet 5 und Haiku 4.5 bilden unterschiedliche Qualitäts-, Latenz- und Kostenklassen.\n\nModellnamen, Preise und Verfügbarkeit vor produktivem Einsatz erneut prüfen.", notes: "Explizit erläutern, warum Schulungsunterlagen zu Modellen ein Aktualisierungsdatum benötigen." },
        { id: "km-8", type: "content", title: "OpenAI API – Preise pro 1 Mio. Tokens", body: "GPT-5.6 SOL – Flagship\nInput $5 · Cached Input $0,50 · Output $30\n\nGPT-5.6 TERRA – ausgewogen\nInput $2,50 · Cached Input $0,25 · Output $15\n\nGPT-5.6 LUNA – hohes Volumen\nInput $1 · Cached Input $0,10 · Output $6\n\nStand: 17.07.2026 · Standardverarbeitung · Toolkosten nicht enthalten", notes: "Sol für komplexe professionelle Arbeit, Terra für Balance, Luna für kostenkritische Standardprozesse als Ausgangshypothese." },
        { id: "km-9", type: "content", title: "Claude API – Preise pro 1 Mio. Tokens", body: "CLAUDE FABLE 5 – höchste verfügbare Fähigkeit\nInput $10 · Output $50\n\nCLAUDE OPUS 4.8 – komplexe agentische Arbeit\nInput $5 · Output $25\n\nCLAUDE SONNET 5 – ausgewogen\nEinführung bis 31.08.2026: Input $2 · Output $10\nDanach Standard: Input $3 · Output $15\n\nCLAUDE HAIKU 4.5 – schnell und günstig\nInput $1 · Output $5", notes: "Haiku wurde gegenüber der Ausgangsvorlage auf die aktuellen offiziellen $1/$5 korrigiert." },
        { id: "km-10", type: "content", title: "Prompt-Caching richtig einordnen", body: "Bei wiederkehrenden langen Prompt-Präfixen können Cache-Treffer Inputkosten deutlich reduzieren.\n\n• Cache-Lesezugriffe sind häufig etwa 90 % günstiger als normaler Input\n• Cache-Schreibvorgänge werden separat beziehungsweise mit Aufschlag berechnet\n• nur tatsächlich wiederverwendete Präfixe profitieren\n• Cache-Rate, Mindestlänge und Lebensdauer sind anbieterspezifisch\n\nCaching ist eine Architekturentscheidung – kein pauschaler Rabatt auf alle Eingaben.", notes: "Ein stabiles Systemprompt- und Richtlinienpaket ist ein typischer Cache-Kandidat; individuelle Dokumente meist nicht vollständig." },
        { id: "km-11", type: "content", title: "Kostenbeispiel: großer Bauvertrag", body: "Annahme pro Analyse\n250.000 Input-Tokens + 5.000 Output-Tokens, ohne Cache und Tools\n\nGPT-5.6 Sol          ≈ $1,40\nGPT-5.6 Terra        ≈ $0,70\nGPT-5.6 Luna         ≈ $0,28\nClaude Fable 5       ≈ $2,75\nClaude Opus 4.8      ≈ $1,38\nClaude Sonnet 5      ≈ $0,55 Einführung / $0,83 Standard\nClaude Haiku 4.5     ≈ $0,28", notes: "Kosten sind nicht gleich Wirtschaftlichkeit. Fehler, Nacharbeit, Latenz und menschliche Prüfung gehören in die Gesamtrechnung." },
        { id: "km-12", type: "content", layout: "two-column", title: "Keine Sternchen ohne eigene Evals", body: "EIGENE TESTFÄLLE\nOCR · Baupläne · Handschrift · Verträge · Leistungsverzeichnisse\n---\nMESSGRÖSSEN\nKorrektheit · Belegtreue · strukturierte Ausgabe · Latenz · Kosten · Stabilität", notes: "Die ursprünglich vorgeschlagene Sterne-Matrix wird als Testhypothese behandelt, nicht als belegte Tatsache." },
        { id: "km-13", type: "content", layout: "tiles", title: "Kandidaten nach Aufgabenklasse", body: "HOHES VOLUMEN\nGPT-5.6 Luna oder Claude Haiku 4.5\n---\nDOKUMENTE & BALANCE\nGPT-5.6 Terra oder Claude Sonnet 5\n---\nKOMPLEXE ANALYSE\nGPT-5.6 Sol oder Claude Opus 4.8\n---\nHÖCHSTE FÄHIGKEIT\nClaude Fable 5 oder GPT-5.6 Sol", notes: "Nicht jedes Dokument benötigt das teuerste Modell. Auswahl immer anhand eigener Evals bestätigen." },
        { id: "km-14", type: "content", layout: "two-column", title: "Vision, OCR und Baupläne", body: "PRÜFFELDER\n• gedruckter Text und Handschrift\n• Tabellenstruktur und Positionsbezüge\n• Planlegenden, Maße und räumliche Beziehungen\n---\nTESTDESIGN\n• mehrseitige Konsistenz\n• Verweise zwischen Bild und Vertragstext\n• identisches anonymisiertes Testset mit gezielten Fehlerfällen", notes: "Keine pauschale Aussage „Modell X ist immer besser bei Handschrift“ ohne eigene Messung verwenden." },
        { id: "km-15", type: "content", layout: "three-column", title: "Intelligenter Modell-Router", body: "1 · KLASSIFIZIEREN\nDatenart, Sensibilität und Aufgabe bestimmen\n---\n2 · VERARBEITEN\nExtraktion, Dokumentanalyse und Synthese passend verteilen\n---\n3 · ABSICHERN\nBei Risiko eskalieren, gegenprüfen und Qualität protokollieren", notes: "Routerentscheidungen müssen protokollierbar und testbar sein. Datenschutzvorgaben können eine Route ausschließen." },
        { id: "km-16", type: "content", title: "Beispielroute: Vertragsprüfung", body: "HAIKU 4.5 / GPT-5.6 LUNA\nOCR bereinigen, Seiten und Klauseln klassifizieren\n\nSONNET 5 / GPT-5.6 TERRA\nDokument strukturieren, relevante Passagen extrahieren\n\nGPT-5.6 SOL / OPUS 4.8\nRisiken bewerten, Widersprüche erklären, Empfehlungen formulieren\n\nFABLE 5 ODER ZWEITMODELL\nNur bei besonders komplexen oder kritischen Fällen\n\nMENSCHLICHE FREIGABE\nVerbindliche Entscheidung und Kommunikation", notes: "Das ist ein Architekturbeispiel, keine Rechtsberatung oder automatische Freigabe." },
        { id: "km-17", type: "content", layout: "two-column", title: "Übung: Router für eine KI-Anwendung", body: "AUSGANGSLAGE\n1. Eingabedaten und Tokenmenge\n2. Qualitäts- und Sicherheitsanforderungen\n3. Start- und Eskalationsmodell\n---\nABSICHERUNG\n4. messbare Eskalationskriterien\n5. Fallback bei Fehlern\n6. Testset und Erfolgsmetriken\n7. menschliche Freigabepunkte", notes: "20 Minuten Gruppenarbeit, anschließend Routen vergleichen und mögliche Fehlanreize diskutieren." },
        { id: "km-18", type: "content", layout: "table", title: "Aktuelle Produktquellen", body: "Anbieter-Primärquelle | Verwendung\nOpenAI: Latest model guide und Model Catalog | Modellnamen und Fähigkeiten\nOpenAI API Pricing | Input-, Cache-, Output- und Toolpreise\nAnthropic: Models overview | Modellklassen und Kontextgrenzen\nAnthropic Pricing und Release Notes | Preise, Caching und Verfügbarkeit\nEigene API-Messungen | Tokenmenge, Latenz, Fehler und Gesamtkosten\nStand | 17. Juli 2026 – vor jeder Kalkulation erneut prüfen", notes: "Anbieterpreise und Modellnamen sind stark veränderlich. Keine Kalkulation ohne erneute Prüfung der offiziellen Preis- und Modellseiten freigeben." },
        { id: "km-19", type: "content", layout: "table", title: "Technische Primärquellen", body: "Originalarbeit | Beitrag\nVaswani et al., 2017 | Transformer-Architektur\nBrown et al., 2020 | Skalierung und Few-shot-Lernen\nKaplan et al., 2020 | empirische Skalierungsgesetze\nHoffmann et al., 2022 | Verhältnis von Modellgröße und Trainingsdaten\nOuyang et al., 2022 | Instruction Tuning mit menschlichem Feedback\nLiang et al., 2022: HELM | mehrdimensionale Modellevaluation", notes: "Primärforschung erklärt technische Grundlagen, belegt aber nicht automatisch die Qualität eines aktuellen Produktmodells. Aktuelle Modelle mit eigenen Evals prüfen." }
      ]
    }
  ],
  workshops: [
    {
      id: "ws-ki-kompakt",
      title: "KI-Kompaktworkshop",
      client: "Beispielorganisation",
      date: "2026-08-14",
      targetMinutes: 180,
      description: "Praxisnaher Einstieg in generative KI für Mitarbeitende.",
      moduleIds: ["mod-ki-grundlagen", "mod-prompting", "mod-transfer"],
      updatedAt: "2026-07-15"
    }
  ]
};

let state = loadState();
let currentView = "dashboard";
let editingWorkshopId = null;
let presentation = null;
let presenterWindow = null;

const viewRoot = document.querySelector("#viewRoot");
const modalRoot = document.querySelector("#modalRoot");
const presentationRoot = document.querySelector("#presentationRoot");
const pageTitle = document.querySelector("#pageTitle");
const pageEyebrow = document.querySelector("#pageEyebrow");

function loadState() {
  try {
    const stored = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (stored?.modules && stored?.workshops) {
      const requiredLibraryModuleIds = ["mod-ki-tools-praxiseinsatz", "mod-notebooklm", "mod-ki-grundlagen", "mod-ki-entwicklung-zukunft", "mod-ki-werkzeuge", "mod-prompting", "mod-transfer", "mod-chatgpt-claude-web-api", "mod-ki-modelle-vergleich"];
      let libraryChanged = false;
      requiredLibraryModuleIds.forEach((moduleId) => {
        const libraryModule = seedState.modules.find((module) => module.id === moduleId);
        const storedIndex = stored.modules.findIndex((module) => module.id === moduleId);
        if (libraryModule && storedIndex === -1) {
          stored.modules.unshift(structuredClone(libraryModule));
          libraryChanged = true;
        } else if (libraryModule && Number(stored.modules[storedIndex]?.version || 0) < Number(libraryModule.version || 0)) {
          stored.modules[storedIndex] = structuredClone(libraryModule);
          libraryChanged = true;
        }
      });
      if (libraryChanged) localStorage.setItem(STORAGE_KEY, JSON.stringify(stored));
      return stored;
    }
    return structuredClone(seedState);
  } catch {
    return structuredClone(seedState);
  }
}

function saveState(message = "Änderungen gespeichert") {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  if (message) toast(message);
}

function uid(prefix) {
  return `${prefix}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`;
}

function escapeHtml(value = "") {
  return String(value).replace(/[&<>"]/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[char]);
}

function formatDate(value) {
  if (!value) return "Ohne Termin";
  return new Intl.DateTimeFormat("de-DE", { day: "2-digit", month: "long", year: "numeric" }).format(new Date(`${value}T12:00:00`));
}

function shortDateParts(value) {
  if (!value) return { day: "–", month: "offen" };
  const date = new Date(`${value}T12:00:00`);
  return {
    day: new Intl.DateTimeFormat("de-DE", { day: "2-digit" }).format(date),
    month: new Intl.DateTimeFormat("de-DE", { month: "short" }).format(date).replace(".", "")
  };
}

function minutesLabel(minutes) {
  if (minutes < 60) return `${minutes} Min.`;
  const hours = Math.floor(minutes / 60);
  const rest = minutes % 60;
  return rest ? `${hours} Std. ${rest} Min.` : `${hours} Std.`;
}

function workshopDuration(workshop) {
  return workshop.moduleIds.reduce((sum, id) => sum + (state.modules.find((module) => module.id === id)?.duration || 0), 0);
}

function toast(message) {
  const node = document.createElement("div");
  node.className = "toast";
  node.textContent = message;
  document.querySelector("#toastRoot").append(node);
  setTimeout(() => node.remove(), 2700);
}

function openHelpModal() {
  modalRoot.innerHTML = `<div class="modal-backdrop"><div class="modal help-modal" role="dialog" aria-modal="true" aria-label="Hilfe und Bedienungsanleitung">
    <div class="modal-header"><h2>Hilfe & Bedienungsanleitung</h2><button class="close-button" data-close-modal aria-label="Hilfe schließen">×</button></div>
    <div class="modal-body">
      <div class="help-status"><span class="help-status-icon">✓</span><div><strong>Ohne KI nutzbar</strong><span>Alle aktuellen Funktionen arbeiten lokal und benötigen weder Lizenzschlüssel noch API-Key.</span></div></div>
      <div class="help-search"><input id="helpSearch" type="search" placeholder="Hilfe durchsuchen …" aria-label="Hilfe durchsuchen" /></div>
      <div class="help-layout"><nav class="help-nav" id="helpNav" aria-label="Hilfekapitel"></nav><article class="help-content" id="helpArticle"></article></div>
    </div>
  </div></div>`;
  renderHelpNavigation("", "overview");
  modalRoot.querySelector("#helpSearch").addEventListener("input", (event) => {
    renderHelpNavigation(event.target.value, null);
  });
}

function helpPlainText(section) {
  const container = document.createElement("div");
  container.innerHTML = section.content;
  return `${section.title} ${section.eyebrow} ${container.textContent}`.toLowerCase();
}

function renderHelpNavigation(query = "", preferredId = null) {
  const nav = modalRoot.querySelector("#helpNav");
  const article = modalRoot.querySelector("#helpArticle");
  if (!nav || !article) return;
  const normalized = query.trim().toLowerCase();
  const matches = HELP_SECTIONS.filter((section) => !normalized || helpPlainText(section).includes(normalized));
  if (!matches.length) {
    nav.innerHTML = "";
    article.innerHTML = `<div class="help-no-results"><strong>Keine passenden Hilfetexte</strong><p>Versuchen Sie einen anderen Suchbegriff.</p></div>`;
    return;
  }
  const currentActive = modalRoot.querySelector("[data-help-section].active")?.dataset.helpSection;
  const activeId = matches.some((section) => section.id === preferredId) ? preferredId : matches.some((section) => section.id === currentActive) ? currentActive : matches[0].id;
  nav.innerHTML = matches.map((section) => `<button class="${section.id === activeId ? "active" : ""}" data-help-section="${section.id}">${escapeHtml(section.title)}</button>`).join("");
  renderHelpSection(activeId);
}

function renderHelpSection(id) {
  const section = HELP_SECTIONS.find((item) => item.id === id);
  const article = modalRoot.querySelector("#helpArticle");
  if (!section || !article) return;
  modalRoot.querySelectorAll("[data-help-section]").forEach((button) => button.classList.toggle("active", button.dataset.helpSection === id));
  article.innerHTML = `<h3>${escapeHtml(section.eyebrow)}</h3><h2>${escapeHtml(section.title)}</h2>${section.content}`;
  modalRoot.querySelector(".modal")?.scrollTo?.({ top: 0, behavior: "smooth" });
}

function setView(view, workshopId = null) {
  currentView = view;
  editingWorkshopId = workshopId;
  document.querySelectorAll("[data-nav]").forEach((button) => button.classList.toggle("active", button.dataset.nav === view));
  render();
}

function render() {
  const configs = {
    dashboard: ["DEIN ARBEITSBEREICH", "Guten Tag, Bernhard"],
    modules: ["INHALTE ORGANISIEREN", "Modul-Bibliothek"],
    workshops: ["PLANEN & DURCHFÜHREN", "Deine Schulungen"],
    builder: ["SCHULUNG ZUSAMMENSTELLEN", "Workshop-Builder"]
  };
  [pageEyebrow.textContent, pageTitle.textContent] = configs[currentView] || configs.dashboard;
  if (currentView === "dashboard") renderDashboard();
  if (currentView === "modules") renderModules();
  if (currentView === "workshops") renderWorkshops();
  if (currentView === "builder") renderBuilder(editingWorkshopId);
}

function moduleCard(module, compact = false) {
  return `<article class="content-card">
    <div class="tag-row">
      <span class="tag">${escapeHtml(module.category)}</span>
      <span class="tag neutral">v${module.version}</span>
    </div>
    <h3>${escapeHtml(module.title)}</h3>
    <p>${escapeHtml(module.description)}</p>
    <div class="card-meta"><span>◷ ${minutesLabel(module.duration)}</span><span>▤ ${module.slides.length} Folien</span><span>${escapeHtml(module.level)}</span></div>
    <div class="card-actions"><button class="button primary small" data-preview-module="${module.id}">▶ Vorschau</button><button class="button secondary small" data-edit-module="${module.id}">Bearbeiten</button>${compact ? "" : `<button class="button ghost small" data-duplicate-module="${module.id}">Duplizieren</button>`}</div>
  </article>`;
}

function renderDashboard() {
  const totalMinutes = state.modules.reduce((sum, module) => sum + module.duration, 0);
  const recent = state.modules.slice().sort((a, b) => b.updatedAt.localeCompare(a.updatedAt)).slice(0, 3);
  viewRoot.innerHTML = `
    <div class="hero-grid">
      <article class="hero-card">
        <span class="kicker">SMART WORKSHOPSTUDIO</span>
        <h2>Von deinen Modulen zur fertigen Schulung.</h2>
        <p>Baue wiederverwendbare Inhalte auf, kombiniere sie passend zum Auftrag und präsentiere direkt aus dem Browser – inklusive PDF-Sicherung.</p>
        <button class="button" data-start-workshop>Schulung zusammenstellen →</button>
      </article>
      <div class="stat-stack">
        <article class="stat-card"><span class="stat-icon">▦</span><strong>${state.modules.length}</strong><span>Module in deiner Bibliothek</span></article>
        <article class="stat-card"><strong>${state.workshops.length}</strong><span>Schulungen</span></article>
        <article class="stat-card"><strong>${Math.round(totalMinutes / 60 * 10) / 10} h</strong><span>verfügbarer Inhalt</span></article>
      </div>
    </div>
    <div class="section-header"><h2>Zuletzt bearbeitete Module</h2><button class="text-link" data-show-modules>Alle Module ansehen →</button></div>
    <div class="card-grid">${recent.map((module) => moduleCard(module, true)).join("")}</div>
  `;
}

function renderModules(query = "", category = "alle") {
  const categories = [...new Set(state.modules.map((module) => module.category))].sort();
  const filtered = state.modules.filter((module) => {
    const haystack = `${module.title} ${module.description} ${module.tags.join(" ")}`.toLowerCase();
    return haystack.includes(query.toLowerCase()) && (category === "alle" || module.category === category);
  });
  viewRoot.innerHTML = `
    <div class="toolbar">
      <div class="search"><input id="moduleSearch" type="search" value="${escapeHtml(query)}" placeholder="Module, Themen oder Schlagwörter suchen …" /></div>
      <select id="categoryFilter"><option value="alle">Alle Kategorien</option>${categories.map((item) => `<option ${item === category ? "selected" : ""}>${escapeHtml(item)}</option>`).join("")}</select>
      <button class="button primary" data-new-module>+ Modul</button>
    </div>
    ${filtered.length ? `<div class="card-grid">${filtered.map((module) => moduleCard(module)).join("")}</div>` : `<div class="empty-state"><strong>Keine passenden Module</strong><p>Ändere den Suchbegriff oder lege ein neues Modul an.</p></div>`}
  `;
  document.querySelector("#moduleSearch")?.addEventListener("input", (event) => renderModules(event.target.value, document.querySelector("#categoryFilter").value));
  document.querySelector("#categoryFilter")?.addEventListener("change", (event) => renderModules(document.querySelector("#moduleSearch").value, event.target.value));
}

function renderWorkshops() {
  const sorted = state.workshops.slice().sort((a, b) => (a.date || "9999").localeCompare(b.date || "9999"));
  viewRoot.innerHTML = `
    <div class="toolbar"><div class="search"><input id="workshopSearch" type="search" placeholder="Schulungen durchsuchen …" /></div><button class="button primary" data-new-workshop>+ Neue Schulung</button></div>
    <div class="workshop-list">
      ${sorted.length ? sorted.map((workshop) => {
        const date = shortDateParts(workshop.date);
        const duration = workshopDuration(workshop);
        return `<article class="workshop-row" data-workshop-row="${workshop.id}">
          <div class="date-tile"><div><strong>${date.day}</strong><small>${date.month}</small></div></div>
          <div><h3>${escapeHtml(workshop.title)}</h3><p>${escapeHtml(workshop.client || "Ohne Auftraggeber")} · ${workshop.moduleIds.length} Module · ${minutesLabel(duration)}</p></div>
          <div class="workshop-row-actions"><button class="button secondary small" data-edit-workshop="${workshop.id}">Bearbeiten</button><button class="button ghost small" data-present="${workshop.id}">▶ Präsentieren</button><button class="button ghost small" data-pdf="${workshop.id}">PDF</button></div>
        </article>`;
      }).join("") : `<div class="empty-state"><strong>Noch keine Schulung</strong><p>Stelle deine erste Schulung aus vorhandenen Modulen zusammen.</p><button class="button primary" data-new-workshop>Jetzt beginnen</button></div>`}
    </div>`;
  document.querySelector("#workshopSearch")?.addEventListener("input", (event) => {
    const q = event.target.value.toLowerCase();
    document.querySelectorAll("[data-workshop-row]").forEach((row) => {
      const workshop = state.workshops.find((item) => item.id === row.dataset.workshopRow);
      row.hidden = !`${workshop.title} ${workshop.client}`.toLowerCase().includes(q);
    });
  });
}

function renderBuilder(id) {
  const workshop = state.workshops.find((item) => item.id === id);
  if (!workshop) return setView("workshops");
  const selectedModules = workshop.moduleIds.map((moduleId) => state.modules.find((module) => module.id === moduleId)).filter(Boolean);
  const duration = workshopDuration(workshop);
  viewRoot.innerHTML = `
    <div class="builder">
      <section class="panel">
        <div class="panel-head"><div><h2>Modul-Bibliothek</h2><p>Per Klick zur Agenda hinzufügen</p></div></div>
        <div class="module-pick-list">${state.modules.map((module) => `<div class="module-pick"><div><strong>${escapeHtml(module.title)}</strong><small>${minutesLabel(module.duration)} · ${module.slides.length} Folien</small></div><button class="button secondary small" data-add-to-workshop="${module.id}">+</button></div>`).join("")}</div>
      </section>
      <section class="panel">
        <div class="panel-head"><div><h2>${escapeHtml(workshop.title)}</h2><p>${escapeHtml(workshop.client || "Eigene Schulung")} · ${formatDate(workshop.date)}</p></div><button class="button secondary small" data-workshop-settings="${workshop.id}">Einstellungen</button></div>
        <div class="agenda">${selectedModules.length ? selectedModules.map((module, index) => `<div class="agenda-item"><span class="agenda-number">${index + 1}</span><div><strong>${escapeHtml(module.title)}</strong><small>Version ${module.version} · ${minutesLabel(module.duration)} · ${module.slides.length} Folien</small></div><div class="agenda-actions"><button data-move-module="${index}" data-direction="-1" title="Nach oben">↑</button><button data-move-module="${index}" data-direction="1" title="Nach unten">↓</button><button data-remove-from-workshop="${index}" title="Entfernen">×</button></div></div>`).join("") : `<div class="empty-state"><strong>Die Agenda ist noch leer</strong><p>Füge links Module hinzu.</p></div>`}</div>
        <div class="time-summary"><span>Geplante Inhalte<br><strong>${minutesLabel(duration)}</strong></span><span>Zeitfenster<br><strong>${minutesLabel(workshop.targetMinutes)}</strong></span><span>${duration > workshop.targetMinutes ? `⚠ ${duration - workshop.targetMinutes} Min. zu lang` : `✓ ${workshop.targetMinutes - duration} Min. Reserve`}</span></div>
        <div class="card-actions"><button class="button primary" data-present="${workshop.id}">▶ Präsentation starten</button><button class="button secondary" data-pdf="${workshop.id}">PDF speichern</button><button class="button ghost" data-export-html="${workshop.id}">HTML exportieren</button></div>
      </section>
    </div>`;
}

function openModuleModal(moduleId = null) {
  const original = state.modules.find((module) => module.id === moduleId);
  const draft = original ? structuredClone(original) : {
    id: uid("mod"), title: "", category: "Allgemein", level: "Alle", duration: 30, tags: [], description: "", version: 1, updatedAt: new Date().toISOString().slice(0, 10), slides: [{ id: uid("slide"), type: "title", layout: "standard", title: "", body: "", notes: "" }]
  };

  const renderModal = () => {
    modalRoot.innerHTML = `<div class="modal-backdrop"><div class="modal wide" role="dialog" aria-modal="true" aria-label="Modul bearbeiten">
      <div class="modal-header"><h2>${original ? "Modul bearbeiten" : "Neues Modul"}</h2><button class="close-button" data-close-modal>×</button></div>
      <form id="moduleForm">
        <div class="modal-body">
          <div class="form-grid">
            <div class="field full"><label>Titel</label><input name="title" required value="${escapeHtml(draft.title)}" placeholder="z. B. Konfliktgespräche sicher führen" /></div>
            <div class="field"><label>Kategorie</label><input name="category" required value="${escapeHtml(draft.category)}" /></div>
            <div class="field"><label>Zielgruppe / Niveau</label><input name="level" value="${escapeHtml(draft.level)}" /></div>
            <div class="field"><label>Dauer in Minuten</label><input name="duration" type="number" min="5" step="5" required value="${draft.duration}" /></div>
            <div class="field"><label>Schlagwörter, mit Komma getrennt</label><input name="tags" value="${escapeHtml(draft.tags.join(", "))}" /></div>
            <div class="field full"><label>Kurzbeschreibung</label><textarea name="description">${escapeHtml(draft.description)}</textarea></div>
          </div>
          <div class="section-header"><h2>Folien</h2><button type="button" class="button secondary small" data-add-slide>+ Folie</button></div>
          <div class="slide-editor-list">${draft.slides.map((slide, index) => `<div class="slide-editor" data-slide-index="${index}">
            <div class="slide-editor-head"><strong>Folie ${index + 1}</strong><button type="button" class="button danger small" data-remove-slide="${index}">Entfernen</button></div>
            <div class="slide-editor-grid">
              <div class="field"><label>Folientitel</label><input data-slide-field="title" value="${escapeHtml(slide.title)}" required /></div>
              <div class="field"><label>Folientyp</label><select data-slide-field="type"><option value="content" ${slide.type === "content" ? "selected" : ""}>Inhalt</option><option value="title" ${slide.type === "title" ? "selected" : ""}>Titel / Trenner</option></select></div>
              <div class="field full"><label>Darstellung</label><select data-slide-field="layout"><option value="standard" ${(slide.layout || "standard") === "standard" ? "selected" : ""}>Standard</option><option value="two-column" ${slide.layout === "two-column" ? "selected" : ""}>2 Spalten</option><option value="three-column" ${slide.layout === "three-column" ? "selected" : ""}>3 Spalten</option><option value="tiles" ${slide.layout === "tiles" ? "selected" : ""}>Kacheln</option><option value="metrics" ${slide.layout === "metrics" ? "selected" : ""}>Kennzahlen</option><option value="table" ${slide.layout === "table" ? "selected" : ""}>Tabelle</option></select><small>Spalten und Kacheln mit einer Zeile <strong>---</strong> trennen. Tabellenzellen mit <strong>|</strong>.</small></div>
              <div class="field body-field"><label>Inhalt</label><textarea data-slide-field="body" placeholder="Absätze und Aufzählungen …">${escapeHtml(slide.body)}</textarea></div>
              <div class="field body-field"><label>Moderationsnotizen (nicht auf der PDF-Folie)</label><textarea data-slide-field="notes">${escapeHtml(slide.notes)}</textarea></div>
            </div>
          </div>`).join("")}</div>
        </div>
        <div class="modal-footer">${original ? `<button type="button" class="button danger" data-delete-module="${draft.id}">Modul löschen</button>` : ""}<div class="footer-right"><button type="button" class="button secondary" data-close-modal>Abbrechen</button><button class="button primary" type="submit">Modul speichern</button></div></div>
      </form>
    </div></div>`;

    modalRoot.querySelectorAll("[data-slide-field]").forEach((field) => field.addEventListener("input", (event) => {
      const index = Number(event.target.closest("[data-slide-index]").dataset.slideIndex);
      draft.slides[index][event.target.dataset.slideField] = event.target.value;
    }));
    modalRoot.querySelector("[data-add-slide]").addEventListener("click", () => {
      syncDraftFields();
      draft.slides.push({ id: uid("slide"), type: "content", layout: "standard", title: "Neue Folie", body: "", notes: "" });
      renderModal();
      modalRoot.querySelector(".modal").scrollTop = modalRoot.querySelector(".modal").scrollHeight;
    });
    modalRoot.querySelectorAll("[data-remove-slide]").forEach((button) => button.addEventListener("click", () => {
      if (draft.slides.length === 1) return toast("Ein Modul benötigt mindestens eine Folie");
      syncDraftFields();
      draft.slides.splice(Number(button.dataset.removeSlide), 1);
      renderModal();
    }));
    modalRoot.querySelector("#moduleForm").addEventListener("submit", (event) => {
      event.preventDefault();
      syncDraftFields();
      if (!draft.title.trim()) return;
      draft.updatedAt = new Date().toISOString().slice(0, 10);
      if (original) {
        draft.version = original.version + 1;
        state.modules[state.modules.findIndex((module) => module.id === original.id)] = draft;
      } else state.modules.unshift(draft);
      saveState(original ? `Modul als Version ${draft.version} gespeichert` : "Modul angelegt");
      closeModal();
      setView("modules");
    });
    modalRoot.querySelector("[data-delete-module]")?.addEventListener("click", () => deleteModule(draft.id));
  };

  const syncDraftFields = () => {
    const form = modalRoot.querySelector("#moduleForm");
    if (!form) return;
    const data = new FormData(form);
    draft.title = data.get("title");
    draft.category = data.get("category");
    draft.level = data.get("level");
    draft.duration = Number(data.get("duration"));
    draft.tags = data.get("tags").split(",").map((tag) => tag.trim()).filter(Boolean);
    draft.description = data.get("description");
  };
  renderModal();
}

function openWorkshopModal(workshopId = null) {
  const original = state.workshops.find((workshop) => workshop.id === workshopId);
  modalRoot.innerHTML = `<div class="modal-backdrop"><div class="modal" role="dialog" aria-modal="true" aria-label="Schulung anlegen">
    <div class="modal-header"><h2>${original ? "Schulung bearbeiten" : "Neue Schulung"}</h2><button class="close-button" data-close-modal>×</button></div>
    <form id="workshopForm"><div class="modal-body"><div class="form-grid">
      <div class="field full"><label>Titel der Schulung</label><input name="title" required value="${escapeHtml(original?.title || "")}" placeholder="z. B. KI-Praxistag" /></div>
      <div class="field"><label>Auftraggeber / Kunde</label><input name="client" value="${escapeHtml(original?.client || "")}" /></div>
      <div class="field"><label>Termin</label><input name="date" type="date" value="${original?.date || ""}" /></div>
      <div class="field"><label>Zeitfenster in Minuten</label><input name="targetMinutes" type="number" min="15" step="15" value="${original?.targetMinutes || 180}" /></div>
      <div class="field full"><label>Beschreibung / Ziel</label><textarea name="description">${escapeHtml(original?.description || "")}</textarea></div>
    </div></div><div class="modal-footer">${original ? `<button type="button" class="button danger" data-delete-workshop="${original.id}">Schulung löschen</button>` : ""}<div class="footer-right"><button type="button" class="button secondary" data-close-modal>Abbrechen</button><button class="button primary" type="submit">Weiter zum Builder</button></div></div></form>
  </div></div>`;
  modalRoot.querySelector("#workshopForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    const workshop = {
      id: original?.id || uid("ws"), title: data.get("title"), client: data.get("client"), date: data.get("date"), targetMinutes: Number(data.get("targetMinutes")), description: data.get("description"), moduleIds: original?.moduleIds || [], updatedAt: new Date().toISOString().slice(0, 10)
    };
    if (original) state.workshops[state.workshops.findIndex((item) => item.id === original.id)] = workshop;
    else state.workshops.unshift(workshop);
    saveState(original ? "Schulung aktualisiert" : "Schulung angelegt");
    closeModal();
    setView("builder", workshop.id);
  });
  modalRoot.querySelector("[data-delete-workshop]")?.addEventListener("click", () => {
    if (!confirm("Diese Schulung wirklich löschen?")) return;
    state.workshops = state.workshops.filter((workshop) => workshop.id !== original.id);
    saveState("Schulung gelöscht"); closeModal(); setView("workshops");
  });
}

function deleteModule(id) {
  const used = state.workshops.filter((workshop) => workshop.moduleIds.includes(id));
  if (used.length) return toast(`Modul wird noch in ${used.length} Schulung(en) verwendet`);
  if (!confirm("Dieses Modul endgültig löschen?")) return;
  state.modules = state.modules.filter((module) => module.id !== id);
  saveState("Modul gelöscht"); closeModal(); render();
}

function closeModal() { modalRoot.innerHTML = ""; }

function duplicateModule(id) {
  const source = state.modules.find((module) => module.id === id);
  if (!source) return;
  const copy = structuredClone(source);
  copy.id = uid("mod"); copy.title = `${source.title} (Kopie)`; copy.version = 1; copy.updatedAt = new Date().toISOString().slice(0, 10);
  copy.slides.forEach((slide) => slide.id = uid("slide"));
  state.modules.unshift(copy); saveState("Modul dupliziert"); render();
}

function addToWorkshop(workshopId, moduleId) {
  const workshop = state.workshops.find((item) => item.id === workshopId);
  workshop.moduleIds.push(moduleId); workshop.updatedAt = new Date().toISOString().slice(0, 10);
  saveState("Modul zur Agenda hinzugefügt"); renderBuilder(workshopId);
}

function moveWorkshopModule(workshopId, index, direction) {
  const workshop = state.workshops.find((item) => item.id === workshopId);
  const next = index + direction;
  if (next < 0 || next >= workshop.moduleIds.length) return;
  [workshop.moduleIds[index], workshop.moduleIds[next]] = [workshop.moduleIds[next], workshop.moduleIds[index]];
  saveState(""); renderBuilder(workshopId);
}

function workshopSlides(workshop) {
  const slides = [{ id: "opening", type: "title", title: workshop.title, body: `${workshop.client || ""}${workshop.date ? `\n${formatDate(workshop.date)}` : ""}`, notes: workshop.description || "" }];
  workshop.moduleIds.forEach((moduleId) => {
    const module = state.modules.find((item) => item.id === moduleId);
    if (module) slides.push(...module.slides.map((slide) => ({ ...slide, moduleTitle: module.title })));
  });
  return slides;
}

function slideTitleClass(title = "") {
  if (title.length > 70) return "title-xs";
  if (title.length > 52) return "title-sm";
  if (title.length > 36) return "title-md";
  return "";
}

function renderTextBlock(value = "") {
  const lines = value.split("\n").map((line) => line.trim()).filter(Boolean);
  if (!lines.length) return "";
  const [heading, ...rest] = lines;
  return `<div class="block-heading">${escapeHtml(heading)}</div>${rest.length ? `<div class="block-copy">${rest.map((line) => escapeHtml(line)).join("<br>")}</div>` : ""}`;
}

function renderSlideBody(slide) {
  const layout = slide.layout || "standard";
  const blocks = slide.body.split(/\n\s*---\s*\n/).map((part) => part.trim()).filter(Boolean);
  if (layout === "two-column" || layout === "three-column") {
    const count = layout === "three-column" ? 3 : 2;
    return `<div class="slide-columns columns-${count} ${blocks.length > count ? "multi-row" : ""}">${blocks.map((block, index) => `<section class="slide-column tone-${index % 3}">${renderTextBlock(block)}</section>`).join("")}</div>`;
  }
  if (layout === "tiles" || layout === "metrics") {
    return `<div class="slide-tiles ${layout === "metrics" ? "metric-grid" : ""}">${blocks.map((block, index) => `<section class="slide-tile tone-${index % 3}">${renderTextBlock(block)}</section>`).join("")}</div>`;
  }
  if (layout === "table") {
    const rows = slide.body.split("\n").map((row) => row.split("|").map((cell) => cell.trim())).filter((row) => row.some(Boolean));
    const [head = [], ...body] = rows;
    return `<div class="slide-table-wrap"><table class="slide-table"><thead><tr>${head.map((cell) => `<th>${escapeHtml(cell)}</th>`).join("")}</tr></thead><tbody>${body.map((row) => `<tr>${row.map((cell) => `<td>${escapeHtml(cell)}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`;
  }
  return `<div class="standard-copy">${escapeHtml(slide.body).replace(/\n/g, "<br>")}</div>`;
}

function renderSlide(slide, index, total, className = "presentation-slide") {
  const dense = slide.body.length > 420 || slide.body.split("\n").length > 10;
  return `<article class="${className} ${slide.type === "title" ? "title-slide" : ""} layout-${slide.layout || "standard"} ${dense ? "dense" : ""}">
    <div class="slide-kicker">${escapeHtml(slide.moduleTitle || "SMART WorkshopStudio")}</div>
    <h1 class="${slideTitleClass(slide.title)}">${escapeHtml(slide.title)}</h1>
    <div class="slide-body">${renderSlideBody(slide)}</div>
    <span class="slide-number">${index + 1} / ${total}</span>
  </article>`;
}

function startPresentation(workshopId) {
  const workshop = state.workshops.find((item) => item.id === workshopId);
  if (!workshop) return;
  presentation = { workshopId, moduleId: null, title: workshop.title, slides: workshopSlides(workshop), index: 0, startedAt: Date.now() };
  renderPresentation();
}

function startModulePreview(moduleId) {
  const module = state.modules.find((item) => item.id === moduleId);
  if (!module) return;
  presentation = {
    moduleId,
    workshopId: null,
    title: module.title,
    slides: module.slides.map((slide) => ({ ...slide, moduleTitle: module.title })),
    index: 0,
    startedAt: Date.now()
  };
  renderPresentation();
}

function renderPresentation() {
  if (!presentation) return;
  const slide = presentation.slides[presentation.index];
  presentationRoot.innerHTML = `<div class="presentation">
    <div class="presentation-stage" data-stage>
      ${renderSlide(slide, presentation.index, presentation.slides.length)}
    </div>
    <div class="presentation-controls"><div class="group"><button data-close-presentation>× Beenden</button><span class="hint">Pfeile / Leertaste / Funkmaus</span></div><div class="group"><button data-prev-slide>←</button><span class="presentation-progress">${presentation.index + 1} von ${presentation.slides.length}</span><button data-next-slide>→</button></div><div class="group"><button data-open-presenter>▣ Referentenansicht</button>${presentation.workshopId ? `<button data-pdf="${presentation.workshopId}">PDF</button>` : `<button data-pdf-module="${presentation.moduleId}">PDF</button>`}<button data-fullscreen>Vollbild</button></div></div>
  </div>`;
  renderPresenterWindow();
}

function changeSlide(delta) {
  if (!presentation) return;
  presentation.index = Math.max(0, Math.min(presentation.slides.length - 1, presentation.index + delta));
  renderPresentation();
}

function closePresentation() {
  presentation = null;
  presentationRoot.innerHTML = "";
  if (presenterWindow && !presenterWindow.closed) presenterWindow.close();
  presenterWindow = null;
}

function openPresenterView() {
  if (!presentation) return;
  if (!presenterWindow || presenterWindow.closed) {
    presenterWindow = window.open("", "smart-workshopstudio-presenter", "popup=yes,width=1280,height=820");
  }
  if (!presenterWindow) return toast("Bitte Pop-up-Fenster für die Referentenansicht erlauben");
  renderPresenterWindow(true);
  presenterWindow.focus();
}

function presenterSlideMarkup(slide, label) {
  if (!slide) return `<div class="empty-preview">Ende der Präsentation</div>`;
  return `<div class="presenter-slide ${slide.type === "title" ? "title" : ""}"><small>${escapeHtml(label)}</small><h2 class="${slideTitleClass(slide.title)}">${escapeHtml(slide.title)}</h2><div class="slide-body">${renderSlideBody(slide)}</div></div>`;
}

function renderPresenterWindow(force = false) {
  if (!presentation || !presenterWindow || presenterWindow.closed) return;
  const current = presentation.slides[presentation.index];
  const next = presentation.slides[presentation.index + 1];
  const title = escapeHtml(presentation.title || "SMART WorkshopStudio");
  const label = current?.moduleTitle || presentation.title || "SMART WorkshopStudio";
  const nextLabel = next?.moduleTitle || presentation.title || "SMART WorkshopStudio";
  const html = `<!doctype html><html lang="de"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width"><title>Referentenansicht – ${title}</title><style>
    :root{font-family:Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;color:#e9eef7;background:#080f1e}*{box-sizing:border-box}body{margin:0;min-height:100vh;background:#080f1e}.shell{min-height:100vh;display:grid;grid-template-rows:auto 1fr auto}.top{display:flex;justify-content:space-between;align-items:center;padding:18px 24px;border-bottom:1px solid #26334b;background:#0d1930}.eyebrow{color:#9db8dc;font-size:11px;font-weight:800;letter-spacing:.14em}.top h1{margin:4px 0 0;font:500 24px Georgia,serif}.stats{display:flex;gap:24px;text-align:right}.stat strong,.stat span{display:block}.stat strong{font-size:20px}.stat span{color:#93a2b8;font-size:10px;text-transform:uppercase;letter-spacing:.08em}.grid{display:grid;grid-template-columns:minmax(0,1.35fr) minmax(300px,.65fr);gap:18px;padding:18px;min-height:0}.panel{min-height:0;padding:14px;border:1px solid #26334b;border-radius:14px;background:#101a2c}.panel-label{margin:0 0 10px;color:#91a6c5;font-size:10px;font-weight:800;letter-spacing:.12em;text-transform:uppercase}.right{display:grid;grid-template-rows:minmax(220px,.9fr) minmax(210px,1.1fr);gap:18px;min-height:0}.presenter-slide{height:100%;padding:6%;overflow:auto;color:#172033;background:#fdfdfb}.presenter-slide.title{color:#fff;background:#14213d}.presenter-slide small{color:#2d4f7c;font-size:10px;font-weight:800;letter-spacing:.12em;text-transform:uppercase}.presenter-slide.title small{color:#a9c9ee}.presenter-slide h2{margin:7% 0 4%;font:500 clamp(21px,3vw,48px)/1.08 Georgia,serif;white-space:nowrap}.presenter-slide h2.title-md{font-size:clamp(19px,2.6vw,40px)}.presenter-slide h2.title-sm{font-size:clamp(17px,2.2vw,34px)}.presenter-slide h2.title-xs{font-size:clamp(15px,1.8vw,28px)}.presenter-slide .slide-body{color:#4d596c;font-size:clamp(12px,1.25vw,18px);line-height:1.4}.presenter-slide.title .slide-body{color:#cbd9ea}.slide-columns,.slide-tiles{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px}.columns-3{grid-template-columns:repeat(3,minmax(0,1fr))}.slide-column,.slide-tile{padding:14px;border:1px solid #dce4ee;border-left:4px solid #2d4f7c;background:#f5f8fb}.tone-1{border-left-color:#6686ad}.tone-2{border-left-color:#173a64}.block-heading{color:#14213d!important;font-weight:800}.block-copy{margin-top:7px}.metric-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.metric-grid .block-heading{font-size:1.8em}.slide-table{width:100%;border-collapse:collapse}.slide-table th,.slide-table td{padding:7px;border:1px solid #d5dee9;text-align:left}.slide-table th{color:#fff;background:#14213d}.next .presenter-slide h2{font-size:clamp(18px,2vw,30px)}.next .presenter-slide .slide-body{font-size:clamp(10px,1vw,14px)}.notes{height:100%;padding:18px;overflow:auto;border-radius:9px;color:#dce6f4;background:#17243b;font-size:16px;line-height:1.55;white-space:pre-line}.notes.empty{color:#7f8da2;font-style:italic}.empty-preview{display:grid;place-items:center;height:100%;color:#76849a;background:#111c2f}.controls{display:flex;justify-content:space-between;align-items:center;gap:12px;padding:14px 20px;border-top:1px solid #26334b;background:#0d1930}.controls button{padding:11px 15px;border:1px solid #34445f;border-radius:9px;color:#fff;background:#172b4d;font-weight:700;cursor:pointer}.controls button:hover{background:#233e69}.keys{color:#8fa0b8;font-size:12px}@media(max-width:850px){.grid{grid-template-columns:1fr}.right{grid-template-columns:1fr 1fr;grid-template-rows:320px}.stats{gap:10px}.keys{display:none}}
  </style></head><body><div class="shell"><header class="top"><div><div class="eyebrow">REFERENTENANSICHT</div><h1>${title}</h1></div><div class="stats"><div class="stat"><strong>${presentation.index + 1} / ${presentation.slides.length}</strong><span>Folie</span></div><div class="stat"><strong id="timer">00:00</strong><span>Vortragszeit</span></div></div></header><main class="grid"><section class="panel"><p class="panel-label">Aktuelle Folie</p>${presenterSlideMarkup(current, label)}</section><div class="right"><section class="panel next"><p class="panel-label">Nächste Folie</p>${presenterSlideMarkup(next, nextLabel)}</section><section class="panel"><p class="panel-label">Moderationsnotizen</p><div class="notes ${current?.notes ? "" : "empty"}">${current?.notes ? escapeHtml(current.notes) : "Für diese Folie sind keine Moderationsnotizen hinterlegt."}</div></section></div></main><footer class="controls"><div><button onclick="opener.workshopPresenterCommand('prev')">← Zurück</button> <button onclick="opener.workshopPresenterCommand('next')">Weiter →</button></div><span class="keys">Pfeiltasten · Leertaste · Page Up/Down</span><button onclick="opener.workshopPresenterCommand('closePresenter')">Referentenansicht schließen</button></footer></div><script>
    const startedAt=${presentation.startedAt};function updateTimer(){const seconds=Math.floor((Date.now()-startedAt)/1000);const m=String(Math.floor(seconds/60)).padStart(2,'0');const s=String(seconds%60).padStart(2,'0');document.getElementById('timer').textContent=m+':'+s}updateTimer();setInterval(updateTimer,1000);addEventListener('keydown',e=>{if(['ArrowRight','PageDown',' '].includes(e.key)){e.preventDefault();opener.workshopPresenterCommand('next')}if(['ArrowLeft','PageUp'].includes(e.key)){e.preventDefault();opener.workshopPresenterCommand('prev')}if(e.key==='Escape')opener.workshopPresenterCommand('closePresenter')});
  <\/script></body></html>`;
  presenterWindow.document.open();
  presenterWindow.document.write(html);
  presenterWindow.document.close();
}

window.workshopPresenterCommand = (command) => {
  if (command === "next") changeSlide(1);
  if (command === "prev") changeSlide(-1);
  if (command === "closePresenter" && presenterWindow && !presenterWindow.closed) {
    presenterWindow.close();
    presenterWindow = null;
  }
};

function preparePrint(workshopId) {
  const workshop = state.workshops.find((item) => item.id === workshopId);
  if (!workshop) return;
  printSlides(workshopSlides(workshop));
}

function prepareModulePrint(moduleId) {
  const module = state.modules.find((item) => item.id === moduleId);
  if (!module) return;
  printSlides(module.slides.map((slide) => ({ ...slide, moduleTitle: module.title })));
}

function printSlides(slides) {
  document.querySelector("#printDeck")?.remove();
  const deck = document.createElement("div");
  deck.id = "printDeck"; deck.className = "print-deck";
  deck.innerHTML = slides.map((slide, index) => renderSlide(slide, index, slides.length, "print-slide")).join("");
  document.body.append(deck);
  toast("Im Druckdialog „Als PDF sichern“ wählen");
  setTimeout(() => window.print(), 100);
}

function exportHtml(workshopId) {
  const workshop = state.workshops.find((item) => item.id === workshopId);
  const slides = workshopSlides(workshop);
  const slideMarkup = slides.map((slide, index) => {
    const dense = slide.body.length > 420 || slide.body.split("\n").length > 10;
    return `<section class="slide ${slide.type === "title" ? "title" : ""} ${dense ? "dense" : ""}"><small>${escapeHtml(slide.moduleTitle || "SMART WorkshopStudio")}</small><h1 class="${slideTitleClass(slide.title)}">${escapeHtml(slide.title)}</h1><div class="slide-body">${renderSlideBody(slide)}</div><footer>${index + 1} / ${slides.length}</footer></section>`;
  }).join("");
  const html = `<!doctype html><html lang="de"><meta charset="utf-8"><meta name="viewport" content="width=device-width"><title>${escapeHtml(workshop.title)}</title><style>*{box-sizing:border-box}body{margin:0;background:#080f1e;color:#172033;font-family:Arial,sans-serif}.slide{display:none;position:fixed;inset:4vh 4vw;padding:6vh 6vw;background:#fdfdfb}.slide.active{display:block}.slide.title{color:white;background:#14213d}.slide small{color:#2d4f7c;font-weight:bold;letter-spacing:.15em;text-transform:uppercase}.slide.title small{color:#a9c9ee}h1{width:100%;margin:5vh 0 3vh;font:700 clamp(32px,4.5vw,64px)/1.05 Arial,sans-serif;white-space:nowrap;border-bottom:1px solid #dbe2ea;padding-bottom:2.2vh}.title-md{font-size:clamp(28px,3.8vw,54px)}.title-sm{font-size:clamp(24px,3.2vw,45px)}.title-xs{font-size:clamp(20px,2.6vw,36px)}.slide-body{width:100%;font-size:clamp(15px,1.65vw,24px);line-height:1.4;color:#4d596c}.slide.dense .slide-body{font-size:clamp(13px,1.35vw,19px)}.slide.title .slide-body{color:#cbd9ea}.slide-columns,.slide-tiles{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:2vw}.columns-3{grid-template-columns:repeat(3,minmax(0,1fr))}.slide-column,.slide-tile{min-height:18vh;padding:2vw;border:1px solid #dce4ee;border-left:6px solid #2d4f7c;background:#f5f8fb}.tone-1{border-left-color:#6686ad}.tone-2{border-left-color:#173a64}.block-heading{color:#14213d;font-weight:800}.block-copy{margin-top:1.2vh}.metric-grid{grid-template-columns:repeat(4,minmax(0,1fr))}.metric-grid .block-heading{font-size:1.8em}.slide-table{width:100%;border-collapse:collapse}.slide-table th,.slide-table td{padding:1.1vh 1vw;border:1px solid #d5dee9;text-align:left}.slide-table th{color:#fff;background:#14213d}footer{position:absolute;bottom:3vh;color:#7d899c}.hint{position:fixed;right:2vw;bottom:1vh;color:#9cacc2;font-size:12px}@media print{@page{size:A4 landscape;margin:0}.slide{display:block!important;position:relative;inset:auto;width:297mm;height:210mm;break-after:page}.hint{display:none}}</style><body>${slideMarkup}<div class="hint">← → Leertaste · F Vollbild · P PDF</div><script>const s=[...document.querySelectorAll('.slide')];let i=0;function show(n){i=Math.max(0,Math.min(s.length-1,n));s.forEach((x,j)=>x.classList.toggle('active',j===i))}addEventListener('keydown',e=>{if(['ArrowRight','PageDown',' '].includes(e.key))show(i+1);if(['ArrowLeft','PageUp'].includes(e.key))show(i-1);if(e.key.toLowerCase()==='f')document.documentElement.requestFullscreen?.();if(e.key.toLowerCase()==='p')print()});addEventListener('click',e=>show(i+(e.clientX>innerWidth/2?1:-1)));show(0)<\/script></body></html>`;
  download(`${slugify(workshop.title)}.html`, html, "text/html");
  toast("Eigenständige HTML-Präsentation exportiert");
}

function slugify(value) { return value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""); }
function download(filename, content, type) {
  const link = document.createElement("a");
  link.href = URL.createObjectURL(new Blob([content], { type })); link.download = filename; link.click();
  setTimeout(() => URL.revokeObjectURL(link.href), 1000);
}

function backupData() { download(`smart-workshopstudio-sicherung-${new Date().toISOString().slice(0,10)}.json`, JSON.stringify(state, null, 2), "application/json"); toast("Datensicherung erstellt"); }

document.addEventListener("click", (event) => {
  const target = event.target.closest("button, a, label");
  if (!target) return;
  if (target.dataset.nav) { event.preventDefault(); setView(target.dataset.nav); }
  if (target.id === "helpButton") openHelpModal();
  if (target.dataset.helpSection) renderHelpSection(target.dataset.helpSection);
  if (target.id === "newModuleButton" || target.matches("[data-new-module]")) openModuleModal();
  if (target.id === "newWorkshopButton" || target.matches("[data-new-workshop], [data-start-workshop]")) openWorkshopModal();
  if (target.matches("[data-show-modules]")) setView("modules");
  if (target.dataset.editModule) openModuleModal(target.dataset.editModule);
  if (target.dataset.previewModule) startModulePreview(target.dataset.previewModule);
  if (target.dataset.duplicateModule) duplicateModule(target.dataset.duplicateModule);
  if (target.dataset.editWorkshop) setView("builder", target.dataset.editWorkshop);
  if (target.dataset.workshopSettings) openWorkshopModal(target.dataset.workshopSettings);
  if (target.dataset.addToWorkshop) addToWorkshop(editingWorkshopId, target.dataset.addToWorkshop);
  if (target.dataset.moveModule) moveWorkshopModule(editingWorkshopId, Number(target.dataset.moveModule), Number(target.dataset.direction));
  if (target.dataset.removeFromWorkshop) {
    const workshop = state.workshops.find((item) => item.id === editingWorkshopId);
    workshop.moduleIds.splice(Number(target.dataset.removeFromWorkshop), 1); saveState("Modul entfernt"); renderBuilder(editingWorkshopId);
  }
  if (target.dataset.present) startPresentation(target.dataset.present);
  if (target.dataset.pdf) preparePrint(target.dataset.pdf);
  if (target.dataset.pdfModule) prepareModulePrint(target.dataset.pdfModule);
  if (target.dataset.exportHtml) exportHtml(target.dataset.exportHtml);
  if (target.matches("[data-close-modal]")) closeModal();
  if (target.matches("[data-close-presentation]")) closePresentation();
  if (target.matches("[data-prev-slide]")) changeSlide(-1);
  if (target.matches("[data-next-slide]")) changeSlide(1);
  if (target.matches("[data-open-presenter]")) openPresenterView();
  if (target.matches("[data-fullscreen]")) document.querySelector(".presentation")?.requestFullscreen?.();
});

document.addEventListener("click", (event) => {
  if (!presentation || !event.target.closest("[data-stage]")) return;
  changeSlide(event.clientX > window.innerWidth / 2 ? 1 : -1);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") { if (presentation) closePresentation(); else closeModal(); return; }
  if (!presentation) return;
  if (["ArrowRight", "PageDown", " "].includes(event.key)) { event.preventDefault(); changeSlide(1); }
  if (["ArrowLeft", "PageUp"].includes(event.key)) { event.preventDefault(); changeSlide(-1); }
  if (event.key === "Home") { presentation.index = 0; renderPresentation(); }
  if (event.key === "End") { presentation.index = presentation.slides.length - 1; renderPresentation(); }
  if (event.key.toLowerCase() === "f") document.querySelector(".presentation")?.requestFullscreen?.();
});

document.querySelector("#backupButton").addEventListener("click", backupData);
document.querySelector("#importInput").addEventListener("change", async (event) => {
  const file = event.target.files[0];
  if (!file) return;
  try {
    const imported = JSON.parse(await file.text());
    if (!Array.isArray(imported.modules) || !Array.isArray(imported.workshops)) throw new Error();
    state = imported; saveState("Datensicherung geladen"); render();
  } catch { toast("Diese Sicherungsdatei ist ungültig"); }
  event.target.value = "";
});

render();
