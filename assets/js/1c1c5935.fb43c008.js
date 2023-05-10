"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[16729],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>g});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),s=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},v={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),u=s(a),g=r,m=u["".concat(l,".").concat(g)]||u[g]||v[g]||i;return a?n.createElement(m,o(o({ref:t},p),{},{components:a})):n.createElement(m,o({ref:t},p))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=u;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d.mdxType="string"==typeof e?e:r,o[1]=d;for(var s=2;s<i;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},27275:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>g,frontMatter:()=>d,metadata:()=>s,toc:()=>v});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),o=["components"],d={id:"datasets_AddingDatasets",title:"Datasets toevoegen",sidebar_label:"Datasets toevoegen"},l=void 0,s={unversionedId:"datasets_AddingDatasets",id:"version-4.1.0/datasets_AddingDatasets",title:"Datasets toevoegen",description:"Het aanmaken van een dataset is de eerste stap in het toevoegen van nieuwe data. De tweede stap is het toevoegen van een databron.",source:"@site/i18n/nl/docusaurus-plugin-content-docs-dataplatform/version-4.1.0/dataplatform_DATASETS_AddingDatasets.md",sourceDirName:".",slug:"/datasets_AddingDatasets",permalink:"/dataplatform/4.1.0/datasets_AddingDatasets",draft:!1,editUrl:"https://github.com/CivityNL/civity-docs-edit/edit/drafts/website/i18n/nl/docusaurus-plugin-content-docs-dataplatform/version-4.1.0/dataplatform_DATASETS_AddingDatasets.md",tags:[],version:"4.1.0",lastUpdatedAt:1660229181,formattedLastUpdatedAt:"11-8-2022",frontMatter:{id:"datasets_AddingDatasets",title:"Datasets toevoegen",sidebar_label:"Datasets toevoegen"},sidebar:"dataplatform",previous:{title:"Gebruikers verwijderen",permalink:"/dataplatform/4.1.0/user_DeletingUsers"},next:{title:"Databronnen toevoegen",permalink:"/dataplatform/4.1.0/datasets_AddingDatasources"}},p={},v=[{value:"DataPlatform-metadataschema",id:"dataplatform-metadataschema",level:2},{value:"Bouwstenen",id:"bouwstenen",level:3},{value:"CKAN",id:"ckan",level:4},{value:"DCAT",id:"dcat",level:4},{value:"NGR",id:"ngr",level:4},{value:"Overzicht van metadatavelden",id:"overzicht-van-metadatavelden",level:2},{value:"Titel en URL",id:"titel-en-url",level:3},{value:"Omschrijving",id:"omschrijving",level:3},{value:"Organisatie",id:"organisatie",level:3},{value:"Zichtbaarheid",id:"zichtbaarheid",level:3},{value:"Licentie",id:"licentie",level:3},{value:"Trefwoorden",id:"trefwoorden",level:3},{value:"Taal",id:"taal",level:3},{value:"Metadata Taal",id:"metadata-taal",level:3},{value:"Thema",id:"thema",level:3},{value:"Subthema",id:"subthema",level:3},{value:"Verstrekker/Publiceerder",id:"verstrekkerpubliceerder",level:3},{value:"Registratiehouder / Data-eigenaar",id:"registratiehouder--data-eigenaar",level:3},{value:"Type contactpunt",id:"type-contactpunt",level:3},{value:"Naam contactpunt",id:"naam-contactpunt",level:3},{value:"E-mail contactpunt",id:"e-mail-contactpunt",level:3},{value:"Telefoon contactpunt",id:"telefoon-contactpunt",level:3},{value:"Locatie",id:"locatie",level:3},{value:"Einddatum",id:"einddatum",level:3},{value:"Geografisch gebied",id:"geografisch-gebied",level:3},{value:"Toegangsrechten/openbaarheid",id:"toegangsrechtenopenbaarheid",level:3},{value:"Status",id:"status",level:3},{value:"Uitgiftedatum",id:"uitgiftedatum",level:3},{value:"Type verandering",id:"type-verandering",level:3},{value:"Geplande datum",id:"geplande-datum",level:3},{value:"Updatefrequentie",id:"updatefrequentie",level:3},{value:"Versie",id:"versie",level:3},{value:"Versietoelichting",id:"versietoelichting",level:3},{value:"Ruimtelijk referentiesysteem",id:"ruimtelijk-referentiesysteem",level:3},{value:"Omgrenzende rechthoek",id:"omgrenzende-rechthoek",level:3},{value:"Resolutie",id:"resolutie",level:3},{value:"Toepassingsschaal",id:"toepassingsschaal",level:3},{value:"Publiceren Geoserver",id:"publiceren-geoserver",level:3},{value:"Publiceren Geonetwork (NGR)",id:"publiceren-geonetwork-ngr",level:3},{value:"Publiceren DONL (niet via NGR)",id:"publiceren-donl-niet-via-ngr",level:3},{value:"Opslaan",id:"opslaan",level:2}],u={toc:v};function g(e){var t=e.components,d=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},u,d,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Het aanmaken van een dataset is de eerste stap in het toevoegen van nieuwe data. De tweede stap is ",(0,i.kt)("a",{parentName:"p",href:"datasets_AddingDatasources"},"het toevoegen van een databron"),"."),(0,i.kt)("p",null,"Ga naar het tabblad 'DATASETS'. Als je rechten hebt om datasets toe te voegen, zul je boven de zoekbalk een knop zien met 'Dataset toevoegen'. Door op die knop te klikken begin je met het toevoegen van een dataset."),(0,i.kt)("h2",{id:"dataplatform-metadataschema"},"DataPlatform-metadataschema"),(0,i.kt)("p",null,"DataPlatform ondersteunt meerdere metadataschema's. Welke velden aanwezig zijn in het metadataschema wordt beheerd met behulp van JSON-configuratiebestanden. Het metadataschema bestaat uit een aantal bouwstenen. Deze bouwstenen kunnen worden gecombineerd tot een compleet schema. Aangezien DataPlatform onderdeel moet kunnen zijn van een federatief systeem van metadatacatalogi, dienen de DataPlatform-metadata te voldoen aan een bepaalde standaard, bij voorkeur een landspecifiek DCAT-toepassingsprofiel."),(0,i.kt)("p",null,"Het opzetten van het metadataschema voor DataPlatform wordt gedaan door Civity."),(0,i.kt)("h3",{id:"bouwstenen"},"Bouwstenen"),(0,i.kt)("h4",{id:"ckan"},"CKAN"),(0,i.kt)("p",null,"De eerste (en enige verplichte bouwsteen) bevat de door CKAN vereiste velden. Deze omvatten bijvoorbeeld een titel, beschrijving, trefwoorden en een licentie."),(0,i.kt)("h4",{id:"dcat"},"DCAT"),(0,i.kt)("p",null,"De tweede belangrijke bouwsteen bevat de DCAT-velden. Momenteel is deze bouwsteen verreweg de grootste bouwsteen, die meer velden definieert dan welke andere bouwsteen dan ook. Voor verschillende landen zijn verschillende DCAT-toepassingsprofielen gemaakt die in DataPlatform kunnen worden ge\xefmplementeerd. Momenteel zijn ",(0,i.kt)("a",{href:"https://docs.dataportal.se/dcat/en/",target:"_blank",rel:"noreferrer noopener"},"DCAT-AP-SE (Zweden)")," en ",(0,i.kt)("a",{href:"https://dcat-ap-donl.readthedocs.io/en/latest/",target:"_blank",rel:"noreferrer noopener"},"DCAT-AP-DONL (Nederland)")," beschikbaar."),(0,i.kt)("h4",{id:"ngr"},"NGR"),(0,i.kt)("p",null,"Voor Nederlandse klanten is een bouwsteen aanwezig om de informatie te verzamelen die het Nationaal Georegister (NGR) nodig heeft."),(0,i.kt)("h2",{id:"overzicht-van-metadatavelden"},"Overzicht van metadatavelden"),(0,i.kt)("p",null,"Binnen het metadataschema zijn veel verschillende velden aanwezig die kunnen worden ingevuld. Velden met een asterisk zijn verplicht om in te vullen. Hieronder volgt een overzicht van de metadatavelden binnen het DataPlatform metadata schema."),(0,i.kt)("img",{class:"imageStyle",alt:"image: Adding Datasets",src:a(23785).Z}),(0,i.kt)("h3",{id:"titel-en-url"},"Titel en URL"),(0,i.kt)("p",null,"De titel die je kiest, wordt weergegeven als onderdeel van de URL van de dataset. De URL wordt gegenereerd in het volgende formaat: ",(0,i.kt)("inlineCode",{parentName:"p"},"ckan-dataplatform-nl.dataplatform.nl/dataset/{dataset_id}"),". Wanneer de titel wordt gegenereerd in een URL, worden hoofdletters omgezet in kleine letters en worden spaties vervangen door koppeltekens (",(0,i.kt)("inlineCode",{parentName:"p"},"-"),")."),(0,i.kt)("p",null,"Een titel is een unieke identificatie - deze moet kort en specifiek zijn. Zo is \u201c",(0,i.kt)("strong",{parentName:"p"},"Sportevenementen 2016 Utrecht"),"\u201d veel specifieker dan \u201c",(0,i.kt)("strong",{parentName:"p"},"Sportevenementen"),".\u201d Voor de beste resultaten geef je de locatie van de dataset in de titel op, omdat gebruikers hierdoor jouw dataset beter kunnen vinden op het ",(0,i.kt)("a",{parentName:"p",href:"portal_Overview"},"open data portaal")),(0,i.kt)("p",null,"Een goede naamgevingsrichtlijn om te volgen bij het maken van een titel:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"Basis_categorie - onderwerp - locatie:jaar - versie:nummer\n")),(0,i.kt)("p",null,"Een voorbeeld aan de hand van onze naamgevingsrichtlijn:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"Sport - Sportevenementen - Utrecht 2019 - Versie 1\n")),(0,i.kt)("img",{class:"imageStyle shadowing",alt:"SCREENCAST: adding a title",src:a(85671).Z}),(0,i.kt)("h3",{id:"omschrijving"},"Omschrijving"),(0,i.kt)("p",null,"Dit veld vertegenwoordigt een overzicht van jouw dataset. Jouw beschrijving moet de volgende vragen beantwoorden:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Waar gaan de gegevens over?"),(0,i.kt)("li",{parentName:"ul"},"Waar komen de gegevens vandaan?"),(0,i.kt)("li",{parentName:"ul"},"Wat is de kwaliteit van de data?"),(0,i.kt)("li",{parentName:"ul"},"Over welke periode of periode werden de gegevens geregistreerd?")),(0,i.kt)("p",null,"Je kunt ",(0,i.kt)("a",{href:"https://www.markdownguide.org/basic-syntax",target:"_blank",rel:"noreferrer noopener"},"Markdown syntax")," in het beschrijvingsveld.\nHiermee kun je kopteksten, lijsten, ",(0,i.kt)("strong",{parentName:"p"},"vet")," en ",(0,i.kt)("em",{parentName:"p"},"cursief")," gebruiken."),(0,i.kt)("p",null,"Als voorbeeld, de volgende Markdown syntax.."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"* **Beschrijving:** Sportevenementen Utrecht\n* **Bron:** Afdeling Vergunningen\n* **Doel:** Inzicht geven in gebeurtenissen vanuit de gemeente\n* **Beperkingen:** Deze dataset mag niet worden gebruikt voor juridische doeleinden\n* **Mogelijkheden:** Deze dataset kan gebruikt worden voor inzicht in locaties op een kaart\n* * Co\xf6rdinaten systeem: * * WGS84 *\n")),(0,i.kt)("p",null,"..wordt weergegeven als:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Beschrijving:")," Sportevenementen Utrecht"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Bron:")," Afdeling Vergunningen"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Doel:")," Inzicht geven in gebeurtenissen vanuit de gemeente"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Beperkingen:")," Deze dataset mag niet worden gebruikt voor juridische doeleinden"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Mogelijkheden:")," Deze dataset kan gebruikt worden voor inzicht in locaties op een kaart"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Co\xf6rdinaten systeem:")," ",(0,i.kt)("em",{parentName:"li"},"WGS84"))),(0,i.kt)("h3",{id:"organisatie"},"Organisatie"),(0,i.kt)("p",null,"Als je deel uitmaakt van een organisatie, mag je alleen datasets en databronnen toevoegen en beheren die zijn verbonden met die organisatie. dit veld wordt automatisch ingevuld."),(0,i.kt)("h3",{id:"zichtbaarheid"},"Zichtbaarheid"),(0,i.kt)("p",null,"In DataPlatform zijn er twee soorten zichtbaarheidsopties: 'Priv\xe9' en 'Publiek'. Datasets die als 'Priv\xe9' zijn ingesteld, kunnen binnen DataPlatform alleen worden bekeken door gebruikers met de juiste organisatierechten. Daarnaast is de dataset niet zichtbaar op het Open Data Portaal."),(0,i.kt)("p",null,"De zichtbaarheidsstatus van je dataset wordt aangegeven door een label in de rechterbovenhoek."),(0,i.kt)("img",{class:"imageStyle",alt:"image: Dataset - Private Flag",src:a(7066).Z}),(0,i.kt)("h3",{id:"licentie"},"Licentie"),(0,i.kt)("p",null,"Licenties bepalen hoe jouw dataset mag worden gebruikt. Informatie over open data licenties vind je op ",(0,i.kt)("a",{href:"http://opendefinition.org/licenses/",target:"_blank",rel:"noreferrer noopener"},"Open Definition"),"."),(0,i.kt)("p",null,"Licenties worden geselecteerd via een dropdownmenu; je moet een optie selecteren."),(0,i.kt)("p",null,"De standaardlicentie voor open data is 'Creative Commons CCZero'. Dit betekent dat de dataset onbeperkt gebruikt mag worden. Met de licentie \"Creative Commons Attribution\" kunnen gebruikers jouw gegevens vrij gebruiken, maar ze moeten verwijzen naar de bron van de gegevens."),(0,i.kt)("h3",{id:"trefwoorden"},"Trefwoorden"),(0,i.kt)("p",null,"Het is raadzaam om trefwoorden in te voeren die niet voorkomen in de omschrijving of titel van jouw dataset. Dataplatform indexeert namelijk al de trefwoorden in de velden Titel en Omschrijving."),(0,i.kt)("p",null,"Trefwoorden be\xefnvloeden zoektermen. Het gebruik van trefwoorden maakt jouw datasets gemakkelijker te vinden. Door de eerste paar letters van jouw beoogde tag in te voeren, zoekt Dataplatform naar de dichtstbijzijnde bestaande overeenkomst - als deze overeenkomt, klik je op het trefwoord in het dropdownmenu."),(0,i.kt)("p",null,'Als jouw beoogde trefwoord niet overeenkomt met bestaande vermeldingen, vul je het hele woord in en druk je op de enter-toets. Zodra jouw nieuwe trefwoord is ingevoerd, is het nu mogelijk om deze als een bestaand trefwoord te gebruiken. Als je het verkeerde trefwoord selecteert, kun je deze verwijderen door op het kruisje "X" voor het woord te klikken.'),(0,i.kt)("h3",{id:"taal"},"Taal"),(0,i.kt)("p",null,"De standaardtaal is ingesteld op Nederlands, maar extra opties zijn beschikbaar via het dropdownmenu. Andere opties zijn: Engels, Fries en Duits."),(0,i.kt)("h3",{id:"metadata-taal"},"Metadata Taal"),(0,i.kt)("p",null,"De standaardtaal is ingesteld op Nederlands, maar extra opties zijn beschikbaar via het dropdownmenu."),(0,i.kt)("h3",{id:"thema"},"Thema"),(0,i.kt)("p",null,"Thema's zijn vooraf gedefinieerd op basis van de ",(0,i.kt)("a",{parentName:"p",href:"https://waardelijsten.dcat-ap-donl.nl/overheid_taxonomiebeleidsagenda.json"},"Overheid:TaxonomieBeleidsagenda waardelijst"),". Daarnaast is er de optie om 'Geen Thema' te kiezen. Wanneer je voor 'Geen Thema' kiest zal er een defaultwaarde (Bestuur) worden ingevuld wanneer de data wordt doorgezet naar data.overheid.nl."),(0,i.kt)("h3",{id:"subthema"},"Subthema"),(0,i.kt)("p",null,"Subthema's zijn gekoppeld aan het thema wat erboven gekozen is."),(0,i.kt)("h3",{id:"verstrekkerpubliceerder"},"Verstrekker/Publiceerder"),(0,i.kt)("p",null,"Hier kies je de organisatie die verantwoordelijk is voor het beschikbaar stellen van de dataset. De lijst is op basis van de ",(0,i.kt)("a",{parentName:"p",href:"https://waardelijsten.dcat-ap-donl.nl/donl_organization.json"},"DONL:Organization waardelijst")),(0,i.kt)("h3",{id:"registratiehouder--data-eigenaar"},"Registratiehouder / Data-eigenaar"),(0,i.kt)("p",null,"Hier kies je de organisatie die verantwoordelijk is voor de dataset. De lijst is op basis van de ",(0,i.kt)("a",{parentName:"p",href:"https://waardelijsten.dcat-ap-donl.nl/donl_organization.json"},"DONL:Organization waardelijst")),(0,i.kt)("h3",{id:"type-contactpunt"},"Type contactpunt"),(0,i.kt)("p",null,"Dit veld geeft aan of een contactpunt een persoon of organisatie is"),(0,i.kt)("h3",{id:"naam-contactpunt"},"Naam contactpunt"),(0,i.kt)("p",null,"De eigenaar van de dataset, meestal is dit een organisatie (provincie, ministerie, gemeente, etc)."),(0,i.kt)("h3",{id:"e-mail-contactpunt"},"E-mail contactpunt"),(0,i.kt)("p",null,"Dit is de e-mail van de organisatie, waarmee gebruikers contact kunnen opnemen als ze vragen of opmerkingen hebben. Dit is meestal een algemeen e-mailadres."),(0,i.kt)("h3",{id:"telefoon-contactpunt"},"Telefoon contactpunt"),(0,i.kt)("p",null,"Telefoonnummer van contactpersoon. Optioneel veld."),(0,i.kt)("h3",{id:"locatie"},"Locatie"),(0,i.kt)("p",null,"Keuze van locatie van de dataset."),(0,i.kt)("h3",{id:"einddatum"},"Einddatum"),(0,i.kt)("p",null,"Einddatum van de dataset."),(0,i.kt)("h3",{id:"geografisch-gebied"},"Geografisch gebied"),(0,i.kt)("p",null,"Opties zijn afhankelijk van de gekozen waarde bij het veld Locatie."),(0,i.kt)("h3",{id:"toegangsrechtenopenbaarheid"},"Toegangsrechten/openbaarheid"),(0,i.kt)("p",null,"Toegangsrechten kunnen informatie bevatten over toegang of beperkingen op basis van privacy-, beveiligings- of ander beleid."),(0,i.kt)("p",null,"De lijst is op basis van de ",(0,i.kt)("a",{parentName:"p",href:"https://waardelijsten.dcat-ap-donl.nl/overheid_openbaarheidsniveau.json"},"Overheid:Openbaarheidsniveau waardelijst")),(0,i.kt)("h3",{id:"status"},"Status"),(0,i.kt)("p",null,"Status van de dataset. De lijst is op basis van de ",(0,i.kt)("a",{parentName:"p",href:"https://waardelijsten.dcat-ap-donl.nl/overheid_dataset_status.json"},"Overheid:DatasetStatus waardelijst")),(0,i.kt)("h3",{id:"uitgiftedatum"},"Uitgiftedatum"),(0,i.kt)("p",null,"Datum waarop de dataset is gepubliceerd."),(0,i.kt)("h3",{id:"type-verandering"},"Type verandering"),(0,i.kt)("p",null,"Laatste type bewerking van de dataset. De lijst is op basis van de ",(0,i.kt)("a",{parentName:"p",href:"https://waardelijsten.dcat-ap-donl.nl/adms_changetype.json"},"ADMS:Changetype waardelijst")),(0,i.kt)("h3",{id:"geplande-datum"},"Geplande datum"),(0,i.kt)("p",null,"Datum waarop dataset beschikbaar komt."),(0,i.kt)("h3",{id:"updatefrequentie"},"Updatefrequentie"),(0,i.kt)("p",null,"Hiermee stel je de updatefrequentie van je dataset in. De lijst is op basis van de ",(0,i.kt)("a",{parentName:"p",href:"https://waardelijsten.dcat-ap-donl.nl/overheid_frequency.json"},"Overheid:Frequency waardelijst")),(0,i.kt)("h3",{id:"versie"},"Versie"),(0,i.kt)("p",null,"Een versienummer of een andere versie-aanduiding voor de dataset."),(0,i.kt)("h3",{id:"versietoelichting"},"Versietoelichting"),(0,i.kt)("p",null,"Bevat een beschrijving van de verschillen tussen deze versie en een eerdere versie van de dataset."),(0,i.kt)("h3",{id:"ruimtelijk-referentiesysteem"},"Ruimtelijk referentiesysteem"),(0,i.kt)("p",null,"Co\xf6rdinaatstelsel databron. Geo-veld voor NGR."),(0,i.kt)("h3",{id:"omgrenzende-rechthoek"},"Omgrenzende rechthoek"),(0,i.kt)("p",null,"Omgrenzende rechthoek. Geo-veld voor NGR."),(0,i.kt)("h3",{id:"resolutie"},"Resolutie"),(0,i.kt)("p",null,"De resolutie van de schaal in meters. Geo-veld voor NGR."),(0,i.kt)("h3",{id:"toepassingsschaal"},"Toepassingsschaal"),(0,i.kt)("p",null,"De beoogde schaal waarop het bestand waarheidsgetrouw gebruikt mag worden. Dit moet een positief numeriek getal zijn. Geo-veld voor NGR."),(0,i.kt)("h3",{id:"publiceren-geoserver"},"Publiceren Geoserver"),(0,i.kt)("p",null,"Als de dataset geografische gegevens bevat, kunnen deze worden doorgezet naar GeoServer."),(0,i.kt)("h3",{id:"publiceren-geonetwork-ngr"},"Publiceren Geonetwork (NGR)"),(0,i.kt)("p",null,"Werkt alleen als het 'Publiceren Geoserver'-veld op 'Ja' is gezet. De NGR-informatie moet correct zijn ingesteld in de metadata van de organisatie."),(0,i.kt)("h3",{id:"publiceren-donl-niet-via-ngr"},"Publiceren DONL (niet via NGR)"),(0,i.kt)("p",null,"Deze optie wordt genegeerd als de optie geonetwerk is ingeschakeld. NGR zal in dat geval publiceren naar DONL."),(0,i.kt)("h2",{id:"opslaan"},"Opslaan"),(0,i.kt)("p",null,"Onderaan het metadataschema staan twee opties voor het opslaan van de gemaakte metadata. De opties zijn 'Opslaan zonder data' of 'Volgende: Data toevoegen'."),(0,i.kt)("p",null,"Met de eerste optie, 'Opslaan zonder data', sla je de dataset met alleen de metadata op. Er wordt geen databron bijgevoegd."),(0,i.kt)("p",null,"Met de tweede optie, 'Volgende: Data toevoegen', is er de mogelijkheid om de databronnen toe te voegen. Dit kan middels een externe URL of door een bestand toe te voegen."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Save",src:a(75313).Z,width:"232",height:"88"})))}g.isMDXComponent=!0},85671:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/dataplatform_user_addingDatasets_AddTitle-09cd8cbbf665aa8599f1d3a6c8f96e1e.gif"},23785:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/dataplatform_user_addingDatasets_Overview-30289ccf9a15a1e569111dc94c3f193f.png"},7066:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/dataplatform_user_addingDatasets_priveIndicator-ec05365d661a91d4dbaae1d61bbc8528.png"},75313:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/save-1e7bfb1fee8ae1f1875a7affa2a2e4ab.JPG"}}]);