# Express Blog - API CRUD (parte 1)

## Milestone 1

1. Come prima cosa, creiamo un controller per i nostri post, in una cartella `controllers`.

2. All’interno, prepariamo tutte le funzioni necessarie e copiamo in ciascuna la logica delle funzioni che attualmente si trovano nel router (al momento restituiscono solo dei messaggi). 

3. Poi torniamo sul file delle rotte. Qui importiamo le funzioni dichiarate nel controller e le associamo alle varie rotte, come visto in classe.

4. Testiamo su postman se chiamando gli endpoint riceviamo effettivamente le stesse risposte che avevamo prima.

## Milestone 2

1. Per iniziare, creiamo una cartella `data` in cui copiare l’array di posts. Importiamo questo file in cima al controller.

2. Ora passiamo ad implementare le logiche delle nostre CRUD:
    - Index dovrà restituire la lista dei post in formato JSON
    - Show dovrà restituire un singolo post in formato JSON
    - Destroy dovrà eliminare un singolo post dalla lista, stampare nel terminale (`console.log`) la lista aggiornata, e rispondere con uno stato 204 e nessun contenuto.


## Bonus 

- Implementare un filtro di ricerca nella index che mostri solo i post che hanno un determinato Tag
- In Show e Destroy, controllare se il parametro si riferisce ad un post esistente, in caso contrario, rispondere con uno stato 404 e un messaggio d’errore, sempre in formato JSON.