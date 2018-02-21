const fs = require('fs-extra');

fs.move('web', '../../../../web', function(e){
  if(e) {
    console.error( "FEHLER: Verschieben von Templates und Ressourcen nicht moeglich!" );
    process.exit(1);
  }
});

fs.move('templates', '../../../../templates', function(e){
  if(e) {
    console.error( "FEHLER: Verschieben von Templates und Ressourcen nicht moeglich!" );
    process.exit(1);
  }
});

// ToDo: Auf korrekte Verzeichnisstruktur abfragen
// ToDo: Fehlermeldungen ordentlich ausgeben
// ToDo: _craftbase_ Verzeichnis automatisch loeschen
