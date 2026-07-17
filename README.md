# SMART WorkshopStudio

Kostenlose, lokale Web-App zum Verwalten wiederverwendbarer Schulungsmodule, Zusammenstellen von Workshops und Präsentieren im Browser.

## Lokal starten

```bash
npm run dev
```

Danach `http://localhost:3000` öffnen.

## Funktionen

- Modul-Bibliothek mit Suche, Kategorien, Folien und Versionszähler
- Workshop-Builder mit Agenda, Reihenfolge und Zeitprüfung
- HTML-Präsentationsmodus mit Tastatur- und Funkmaus-Steuerung
- PDF-Ausgabe über den Druckdialog des Browsers
- Export einer eigenständigen HTML-Präsentation
- JSON-Datensicherung und Wiederherstellung
- Speicherung im lokalen Browser ohne Benutzerkonto

## Vercel

Das Repository kann als statische Website direkt in Vercel importiert werden. Es sind keine Build-Abhängigkeiten erforderlich.

Wichtig: Die Inhalte werden in `localStorage` gespeichert und gelten deshalb nur für den jeweiligen Browser. Vor einem Browserwechsel immer eine JSON-Datensicherung erstellen. Für geräteübergreifende Datenhaltung kann später eine kostenlose PostgreSQL-Anbindung ergänzt werden.

## PDF

Im Workshop-Builder oder in der Präsentation **PDF speichern** wählen. Im Systemdialog anschließend **Als PDF sichern** auswählen. Jede Folie wird als eigene A4-Querformatseite ausgegeben.
