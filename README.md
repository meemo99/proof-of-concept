Ontwerp en maak een data driven online concept voor een opdrachtgever

De instructies voor deze opdracht staan in: [docs/INSTRUCTIONS.md](https://github.com/fdnd-task/proof-of-concept/blob/main/docs/INSTRUCTIONS.md)

# Dashboard Coding the Curbs
<!-- Geef je project een titel en schrijf in één zin wat het is -->


## Inhoudsopgave

  * [Beschrijving](#beschrijving)
  * [Gebruik](#gebruik)
  * [Kenmerken](#kenmerken)
  * [Installatie](#installatie)
  * [Bronnen](#bronnen)
  * [Licentie](#licentie)

## Beschrijving
Dit [project](https://proof-of-concept-5k9s.onrender.com/) is een dashboard voor Coding the Curbs, een startup dat zich bezig houdt met het dynamisch maken van de openbare gedeelde ruimte. De gebruikers kunnen op de site zogehete QuickScans per stad bekijken en per locatie observaties toevoegen.
<!-- Bij Beschrijving staat kort beschreven wat voor project het is en wat je hebt gemaakt -->
<!-- Voeg een mooie poster visual toe 📸 -->
<!-- Voeg een link toe naar Github Pages 🌐-->

De website bestaat uit 3 verschillende pagina's;
- de Home pagina
- De Dashboard pagina per stad
- Een Detailpagina per locatie in een stad


### Mobiel
<img width="243" height="495" alt="image" src="https://github.com/user-attachments/assets/08c9e264-355b-43f1-83f4-7fb0cf555575" />
<img width="243" height="495" alt="image" src="https://github.com/user-attachments/assets/1a8ca542-4a7a-4504-8536-3a8a928bb6ca" />
<img width="243" height="495" alt="image" src="https://github.com/user-attachments/assets/140a6e6e-4474-4eb9-a4a6-17ca39197a6e" />
<img width="243" height="495" alt="image" src="https://github.com/user-attachments/assets/2fc3fcf1-b503-471d-b536-f4b845591b91" />

### Desktop
<img width="630" height="333" alt="image" src="https://github.com/user-attachments/assets/7f0a2515-da3b-440c-b707-ddb2a05ec281" />
<img width="630" height="333" alt="image" src="https://github.com/user-attachments/assets/ca244a54-2e31-4c0b-b82d-1579f6147983" />
<img width="630" height="333" alt="image" src="https://github.com/user-attachments/assets/eb924341-6da4-4671-9be5-4f450521ec66" />
<img width="630" height="333" alt="image" src="https://github.com/user-attachments/assets/eb916b00-2a73-4efe-8610-a2b2714b78cd" />









## Gebruik
<!-- Bij Gebruik staat de user story, hoe het werkt en wat je er mee kan. -->

##### Dynamische Data
Op de dashboardpagina staat een card-component waarin data is ingeladen om overzicht te houden hoeveel locaties geschikt zijn voor monitoring en voor een smartzone. Hierbij hoort ook een cirkeldiagram waarbij het percentage geschiktheid te zien is van Monitoring en Smartzone

<img width="709" height="739" alt="image" src="https://github.com/user-attachments/assets/ba1a0e1d-5264-4aba-b20a-ab1edd8e5bd9" />


##### Tab-navigatie
Bij dit component hoort ook de tab-navigatie, waarbij je kan switchen tussen de "Analytics" en "Locaties".

https://github.com/user-attachments/assets/28a50096-cea3-4639-a2cd-9528c59624f5




## Kenmerken
<!-- Bij Kenmerken staat welke technieken zijn gebruikt en hoe. Wat is de HTML structuur? Wat zijn de belangrijkste dingen in CSS? Wat is er met JS gedaan en hoe? Misschien heb je iets met NodeJS gedaan, of heb je een framwork of library gebruikt? -->

Voor de [Loading State](https://github.com/meemo99/proof-of-concept/blob/main/public/scripts/client-side.js) is gebruik gemaakt van JS om het formulier te enhancen.

https://github.com/user-attachments/assets/303d4895-a8fa-49a5-bc0b-e30dd91bc165



## Installatie
<!-- Bij Instalatie staat hoe een andere developer aan jouw repo kan werken -->

1. Ga naar nodejs.org en installeer Node.js 24.13.0 LTS (Long Term Support).

2. Fork de repository en open het project in VSCodium.

3. Open de terminal in VSCodium en voer het volgende commando uit: npm install

Start het project met: npm start Het project is nu bereikbaar op http://localhost:8000.

Wanneer je klaar bent, stop je de server met Control + C in de terminal.

## Bronnen

## Licentie

This project is licensed under the terms of the [MIT license](./LICENSE).
