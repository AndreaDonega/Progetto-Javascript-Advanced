# Progetto-Javascript-Advanced

Progetto javascript avanzato realizzato per start2impact

Quality of life indicator è una web app realizzata con javascript che riceve in input il nome di una città (in inglese) e restituisce una descrizione seguita da un punteggio per diversi parametri come sicurezza, sanità, possibilità di business ecc.

L'applicazione funziona tramite le API del servizio Teleport. Viene effettuata la richiesta con il metodo fetch e per ogni campo viene generato un nuovo paragrafo
mediante la manipolazione del DOM.
Per ridurre la rindondanza del codice sono stati utilizzati dei metodi che renderizzano i paragrafi come GenerateParameters(), oltre ai metodi GetCity e
GetbackgroundImage.

Gli errori in fase di ricerca vengono segnalati in caso il nome della città non fosse presente nel database.
