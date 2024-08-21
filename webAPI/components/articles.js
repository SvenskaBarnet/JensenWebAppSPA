const articles = [
    {
        Title: "Inte klart med ersättare för Ribbenvik",
        Summary: "▸ Regeringen och SD har ännu inte hittat någon ersättare för Migrationsverkets avgående generaldirektör Mikael Ribbenvik.",
        Link: "https://www.aftonbladet.se/nyheter/a/8JWWL2/inte-klart-med-ersattare-for-ribbenvik",
        Published: new Date("2024-08-19T17:57:42+02:00"),
        Topic: ["SamhalleKonflikter"]
    },
    {
        Title: "Drogs in i inhägnad – dödades av 40 krokodiler",
        Summary: "▸ En 72-årig man har dödats av omkring 40 krokodiler sedan han dragits in i en inhägnad på familjens reptilfarm, enligt…",
        Link: "https://www.aftonbladet.se/nyheter/a/bgWW6e/drogs-in-i-inhagnad-dodades-av-40-krokodiler",
        Published: new Date("2024-08-16T13:28:45+02:00"),
        Topic: ["Ekonomi"]
    },
    {
        Title: "Regionpolitiker: Mer stöd från staten behövs",
        Summary: "▸ Regeringen behöver skjuta till pengar för att välfärden inte ska drabbas drastiskt.",
        Link: "https://www.aftonbladet.se/nyheter/a/y6XXyR/regionpolitiker-mer-stod-fran-staten-behovs",
        Published: new Date("2024-08-15T15:53:18+02:00"),
        Topic: ["Politik"]
    },
    {
        Title: "Två avlidna hittade i bostad i Sandviken",
        Summary: "▸ En man och en kvinna har hittats avlidna i en bostad i Sandviken, skriver polisen på sin hemsida. Dödsorsaken är oklar.",
        Link: "https://www.aftonbladet.se/nyheter/a/dwPPP1/tva-avlidna-hittade-i-bostad-i-sandviken",
        Published: new Date("2024-08-17T11:12:17+02:00"),
        Topic: ["Miljo"]
    },
    {
        Title: "Rekordmånga värnpliktiga – här rycker de in på Marinbasen",
        Summary: "▸ Antalet värnpliktiga som ska påbörja sin militärutbildning i Karlskrona har nått nya rekordsiffror, enligt Försvarsmakten. – Vi räknar med att växa mer, säger Henrik Eriksson, chef för Utbildningsbataljonen.",
        Link: "https://www.svt.se/nyheter/lokalt/blekinge/rekordmanga-varnpliktiga-har-rycker-de-in-pa-marinbasen",
        Published: new Date("2024-08-19T16:00:46+02:00"),
        Topic: ["Politik"]
    },
    {
        Title: "Studie visar: Stora mängder metan kvar i havet efter Nord Stream-läckan",
        Summary: "▸ Upp till 50 000 ton metan är kvar i Östersjön efter att Nord Stream-ledningen exploderade. Det visar en forskningsstudie.",
        Link: "https://www.svt.se/nyheter/lokalt/blekinge/studie-visar-stora-mangder-metan-kvar-i-havet-efter-nord-stream-lackan",
        Published: new Date("2024-08-19T09:40:47+02:00"),
        Topic: ["Miljo"]
    },
    {
        Title: "Vill återskapa våtmark – här är nya vandringsleden i Järnavik",
        Summary: "▸ I Järnaviks naturreservat ska en våtmark återigen bli en del av naturen. Då tvingas Kamrastigen att flytta – nu har en 90 meter lång ramp växt fram genom träden. – Det kommer vara som att gå över en vattenspegel, säger Stefan Rehnberg som arbetslett projektet.",
        Link: "https://www.svt.se/nyheter/lokalt/blekinge/vill-aterskapa-vatmark-har-ar-nya-vandringsleden-i-jarnavik",
        Published: new Date("2024-08-19T09:15:14+02:00"),
        Topic: ["Miljo"]
    },
    {
        Title: "Simhallsbygget går emot tjänstemännens rekommendation: ”Leder inte till någon förändring”",
        Summary: "▸ De styrande politikerna har beslutat att det ska byggas en ny simhall i Rödeby. Men enligt tjänstemännens förstudie så är den för liten.",
        Link: "https://www.svt.se/nyheter/lokalt/blekinge/simhallsbygget-gar-emot-tjanstemannens-rekommendation-leder-inte-till-nagon-forandring",
        Published: new Date("2024-08-19T05:30:03+02:00"),
        Topic: ["Politik"]
    },
    {
        Title: "Simsällskapet kritiskt till simhallsbygget i Rödeby",
        Summary: "▸ Om tre år ska Rödebys nya simhall stå klar, men det är något som oroar Karlskrona simsällskap. – Det behövs en simhall i kommunen som uppfyller alla behov, säger ordförande Jonas Rexeke.",
        Link: "https://www.svt.se/nyheter/lokalt/blekinge/simsallskapet-kritiskt-till-simhallsbygget-i-rodeby",
        Published: new Date("2024-08-19T05:30:03+02:00"),
        Topic: ["Politik"]
    },
    {
        Title: "Här hyllas legendarerna från 1979 – tog Mjällby till allsvenskan första gången",
        Summary: "▸ Allsvenskan firar 100 år. Därför hyllas nu spelarna som tog Mjällby AIF till högsta serien för första gången. I söndagsmatchen mot Elfsborg spelade Maif i retrotröjor, likt dem från 1979.",
        Link: "https://www.svt.se/nyheter/lokalt/blekinge/har-hyllas-legendarerna-fran-1979-tog-mjallby-till-allsvenskan-forsta-gangen",
        Published: new Date("2024-08-18T17:05:24+02:00"),
        Topic: ["Idrott"]
    },
    {
        Title: "Kompisarna hedrar Maja efter dödsolyckan – hästhoppning i hennes namn",
        Summary: "▸ Deras vän gick bort i en tragisk trafikolycka för bara två månader sedan. Nu hedras Maja av hästkompisarna på hopptävlingen Laxacupen i Mörrum, där en ponnyklass fått sitt namn efter henne.",
        Link: "https://www.svt.se/nyheter/lokalt/blekinge/kompisarna-hedrar-maja-efter-dodliga-bilolyckan-hasthoppning-i-hennes-namn",
        Published: new Date("2024-08-17T15:54:35+02:00"),
        Topic: ["Halsa"]
    },
    {
        Title: "Mjällbys tränare sjukskriven",
        Summary: "▸ Mjällbys huvudtränare Anders Torstensson kommer att vara sjukskriven ”en tid framöver”, skriver föreningen på sin hemsida.",
        Link: "https://www.svt.se/nyheter/lokalt/blekinge/mjallbys-tranare-sjukskriven",
        Published: new Date("2024-08-17T11:12:17+02:00"),
        Topic: ["Idrott"]
    },
    {
        Title: "Här är hundsporten som växer snabbast i Sverige",
        Summary: "▸ Nosework är hundsporten som är inspirerad av hur amerikansk polis och tullpersonal utbildar sina specialsökhundar. I Sverige ökar intresset och inte minst i Sölvesborgs brukshundsklubb. – Vi märker av att fler och fler vill hålla på med det, säger Marita Jönsson, instruktör.",
        Link: "https://www.svt.se/nyheter/lokalt/blekinge/hundsporten-som-vaxer-snabbast-i-sverige",
        Published: new Date("2024-08-17T05:30:00+02:00"),
        Topic: ["LivsstillFritt"]
    },
    {
        Title: "Nyheter från dagen: 16 augusti",
        Summary: "▸ Detta har hänt i Blekinge fredagen den 16 augusti.",
        Link: "https://www.svt.se/nyheter/lokalt/blekinge/nyheter-fran-dagen-16-augusti-s9v344",
        Published: new Date("2024-08-16T19:45:06+02:00"),
        Topic: ["SamhalleKonflikter"]
    },
    {
        Title: "Försökte råna pizzeria – häktas för flera våldtäkter",
        Summary: "▸ Mannen försökte råna en pizzeria i Olofström med ett pistolliknande föremål. Under fredagen så häktades han för grovt rånförsök – men även flera fall av våldtäkt.",
        Link: "https://www.svt.se/nyheter/lokalt/blekinge/forsokte-rana-butik-begars-haktad-for-flera-valdtakter",
        Published: new Date("2024-08-16T13:28:45+02:00"),
        Topic: ["SamhalleKonflikter"]
    },
    {
        Title: "Hund attackerad på utställning – ögat trycktes ut av bettet",
        Summary: "▸ Det blev ett tragiskt avslut på en hundutställning som pågick i västra Blekinge i helgen. En mindre tik blev biten av en stor hanhund – ett bett så kraftfullt att ögat trycktes ut.",
        Link: "https://www.svt.se/nyheter/lokalt/blekinge/hund-attackerad-pa-utstallning-ogat-trycktes-ut-av-bettet",
        Published: new Date("2024-08-16T12:58:58+02:00"),
        Topic: ["Halsa"]
    },
    {
        Title: "Efter OS-guldet: Volleybollen mot nya höjder i Karlshamn",
        Summary: "▸ Spelarna på volleybollplanen i Karlshamn har medvind efter svenska framgångarna i OS. Nu vill klubben satsa stenhårt – när man för första gången på 30 år har ett lag i division 3.",
        Link: "https://www.svt.se/nyheter/lokalt/blekinge/efter-os-guldet-volleybollen-mot-nya-hojder-i-karlshamn",
        Published: new Date("2024-08-16T10:06:35+02:00"),
        Topic: ["Idrott"]
    },
    {
        Title: "Snart kan Blekingetrafikens bussresenärer ”blippa” resan med sitt betalkort",
        Summary: "▸ Blekingetrafikens bussresenärer kommer snart kunna köpa biljett genom att ”blippa” kortet. Biljetten gäller för en vuxen och här hamnar ungdomar i kläm.",
        Link: "https://www.svt.se/nyheter/lokalt/blekinge/snart-kan-blekingetrafikens-bussresenarer-blippa-resan-med-sitt-betalkort",
        Published: new Date("2024-08-16T05:30:07+02:00"),
        Topic: ["SamhalleKonflikter"]
    },
    {
        Title: "Nyheter från dagen: 15 augusti",
        Summary: "▸ Detta har hänt i Blekinge torsdagen den 15 augusti.",
        Link: "https://www.svt.se/nyheter/lokalt/blekinge/nyheter-fran-dagen-15-augusti-jvas8x",
        Published: new Date("2024-08-15T19:59:20+02:00"),
        Topic: ["SamhalleKonflikter"]
    },
    {
        Title: "Här är första bilderna från SVT:s dramaserie om U 137",
        Summary: "▸ Dramaserien om den ryska ubåten U 137 som gick på grund i Blekinge skärgård 1981 har premiär på SVT lagom till jul. Nu har de första exklusiva bilderna släppts. Starta klippet ovan.",
        Link: "https://www.svt.se/nyheter/lokalt/blekinge/har-ar-forsta-bilderna-fran-svts-dramaserie-om-u-137",
        Published: new Date("2024-08-15T15:53:18+02:00"),
        Topic: ["Kultur"]
    },
    {
        Title: "Nord Stream: Besättningen tappade sprängladdning i Blekinges vatten",
        Summary: "▸ En ukrainsk grupp låg bakom sprängdådet mot Nord Stream-gasledningarna, berättar flera inblandade för Wall Street Journal. President Zelenskyj ska ha godkänt planerna och sedan försökt stoppa dem – men då var det för sent.",
        Link: "https://www.svt.se/nyheter/lokalt/blekinge/nord-stream-besattningen-tappade-sprangladdning-i-blekinges-vatten",
        Published: new Date("2024-08-15T13:48:07+02:00"),
        Topic: ["Politik"]
    },
    {
        Title: "Mamma sålde sexfilmer med sina barn – vill ha tillbaka vårdnaden",
        Summary: "▸ Mamman från Blekinge dömdes till fängelse för att sålt sexuella filmer av sina barn. Efter fängelsedomen förlorade hon vårdnaden – nu vill hon ha tillbaka den för ett av barnen.",
        Link: "https://www.svt.se/nyheter/lokalt/blekinge/mamma-salde-sexfilmer-med-sina-barn-vill-ha-tillbaka-vardnaden",
        Published: new Date("2024-08-15T09:55:53+02:00"),
        Topic: ["Halsa"]
    },
    {
        Title: "Producerar egen el i Strömsbergs kvarn – med anor från 1600-talet",
        Summary: "▸ Strömsbergs kvarn norr om Rödeby har anor från 1600-talet då ortens folk kom och malde sitt mjöl här. Nu äger Bengt Persson fastigheten och efter många investeringar producerar han nu el så det räcker och blir över. – Det räcker till 15-20 hushåll, säger han.",
        Link: "https://www.svt.se/nyheter/lokalt/blekinge/producerar-egen-el-i-stromsbergs-kvarn-med-anor-fran-1600-talet",
        Published: new Date("2024-08-15T05:30:03+02:00"),
        Topic: ["Miljo"]
    }

];

module.exports = articles;