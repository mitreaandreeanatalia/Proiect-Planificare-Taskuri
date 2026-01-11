Documentatie Proiect - Aplicatie pentru Planificarea Task-urilor

Descrierea Solutiei si Obiective Proiectul vizeaza dezvoltarea unei platforme web moderne pentru managementul activitatilor in cadrul unei organizatii. Obiectivul principal este crearea unui mediu digital care sa permita monitorizarea clara a sarcinilor, de la stadiul de planificare pana la cel de finalizare si arhivare. Aplicatia va fi o experienta de tip Single Page Application (SPA), asigurand o navigare rapida si o interfata care se adapteaza pe desktop, tablete si dispozitive mobile.

Arhitectura Tehnica Sistemul este construit pe o arhitectura de tip Client-Server, utilizand urmatoarea stiva tehnologica:

Frontend: React.js. Am ales acest framework bazat pe componente pentru a asigura o interfata modulara si usor de intretinut.

Backend: Node.js cu interfata RESTful. Acesta va gestiona logica de business si va comunica cu baza de date prin mesaje de tip JSON.

Persistenta datelor: O baza de date relationala (MySQL sau PostgreSQL). Accesul si manipularea datelor se vor face prin intermediul unui ORM (Sequelize), eliminand necesitatea scrierii directe de interogari SQL si crescand securitatea aplicatiei.

Servicii externe: Aplicatia va integra date expuse de un serviciu extern (ex: notificari sau API-uri de utilitate) pentru a adauga functionalitati suplimentare.

Roluri si Functionalitati Core Sistemul este structurat pe trei niveluri de acces, fiecare avand responsabilitati bine definite:

Administrator: Gestioneaza baza de utilizatori a platformei. Acesta poate adauga manageri sau executanti si realizeaza structura ierarhica prin alocarea executantilor catre manageri specifici.

Manager: Este responsabil de crearea task-urilor (status OPEN). Acesta poate delega task-ul unui utilizator din subordine, moment in care statusul devine PENDING. Managerul are vizibilitate asupra intregii liste de task-uri create si este singurul care poate marca un task finalizat ca fiind inchis (CLOSED).

Executant: Poate consulta lista de sarcini alocate si are puterea de a schimba stadiul acestora in finalizat (COMPLETED) dupa indeplinirea cerintelor. De asemenea, poate accesa propriul istoric de activitati.

Modelarea Datelor

Utilizatori: Vor contine informatii despre nume, email, parola (stocata securizat) si rolul detinut. Fiecare executant va avea o referinta directa catre managerul alocat.

Task-uri: Vor include o descriere detaliata, statusul curent (OPEN, PENDING, COMPLETED, CLOSED) si legaturi catre managerul care a creat task-ul si executantul care il proceseaza.

Plan de Proiect si Livrabile

Etapa 1: Finalizarea specificatiilor detaliate, proiectarea bazei de date si configurarea repository-ului Git cu primele commit-uri incrementale.

Etapa 2: Implementarea serviciului RESTful functional in Node.js, configurarea ORM-ului si a rutelor de acces la date.

Etapa 3: Dezvoltarea interfetei in React, integrarea cu backend-ul, testarea functionalitatilor si deployment-ul aplicatiei pe un server cloud (ex: Azure sau AWS).