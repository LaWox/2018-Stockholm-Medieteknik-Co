// Combine indata and make them to searchwords

var  characteristics, enviroment, interactions, skills, interests, values, hobbies, dreamjobs, fears, users, jobs

characteristics = [
    "Extrovert", "Introvert", "Noggrann", "Kreativ", "Snabbtänkt", "Självgående", "Stresstålig", "Flexibel", "Ansvarstagande", 
    "Har gärna tydliga uppgifter", "Målinriktad", "Positiv", "Riskmedveten", "Lösningsorienterad", "Tävlingsinriktad", "Serviceminded", 
    "Kan komma in på kort varsel", "Pålitlig", "Empatisk", "Bra på multitasking", "Behärskar konflikthantering", "Självsäker", 
    "Initiativtagande"]


enviroment = ["Mycket folk", "Lite folk", "Varierande arbetsplatser"]

interactions = ["Telefomsamtal", "Korta möten med olika människor", "Djupgående relation med kund", "Klagande kunder",
                "Otrevliga/ otacksamma kunder", "Ytterst få interaktioner med andra människor"]

skills = ["Programmering", "Bildredigering", "Videoredigering", "Matlagning"]

interests = ["Musik", "Film", "Matlagning", "Resa", "Serier", "Blommor", "Bakelser", "Träning", "Skidåkning", "Äventyr"]

values = ["Jämställdhet", "Acceptans", "Artighet", "Direkthet", "Diskretion", "Förstånd", "Frihet", "Mångfald", "Medkänsla", "Oräddhet", "Plikt", 
          "Popularitet", "Realism", "Spontanitet", "Status", "Sundhet", "Underhållning", "Uppriktighet", "Ödmjukhet"]

hobbies = ["Gitarr", "Piano", "Sång", "Schack", "Matlagning", "Odling", "Segling", "klättring", "Cykling", "Bakning"]

dreamjobs = ["Läkare", "Civilingenjör", "Advokat", "Lärare", "Säljare", "Programmerare"]

fears = ["Spindlar", "Trånga utrymmen", "Tala inför folk", "Döden", "Rädsla för höjder"]



jobs = [
        "Telefonsäljare", "Butikssäljare", "Personlig assistent", "Servicetekniker", "Takläggare", "Receptionist", "Lastbilschaffuör",
        "Köksbiträde", "Taxichaffuör", "Servitör", "Lagerarbetare", "Kassapersonal", "Truckförare", "Vaktmästare", "Brevbärare", "Budbilsförare", "Kock",
        "Städare", "Saneringsarbetare", "Snöskottare", "Barnvakt", "Elevassistent", "Lastbilschaffuör", "Tunneltågförare", "Pizzabagare"]


Telefonförsäljare = [
                        [/*Characteristics*/ "Extrovert", "Snabbtänkt", "Självgående", "Kreativ", "Målinriktad", "Positiv", "Tävlingsinriktad", "Serviceminded", "Självsäker"]
                        [/*Enviroment*/""]
                        [/*Interactions*/"Telefonsamtal", "Korta möten med olika människor", "Klagande kunder", "Otrevliga/ otacksamma kunder"]
                        [/*Skills*/""]
                        [/*Interests*/""]
                        [/*Values*/""]
                        [/*Hobbies*/""]
                        [/*Dreamjobs*/"Säljare"]
                        [/*Fears*/"Tala inför folk"]
                    ]


Städare =   [
                [/*Characteristics*/ "Introvert", "Noggrann", "Kan komma in på kort varsel", "Flexibel", ]
                [/*Enviroment*/ "Lite folk"]
                [/*Interactions*/ "Ytterst få interaktioner med andra människor"]
                [/*Skills*/""]
                [/*Interests*/""]
                [/*Values*/""]
                [/*Hobbies*/""]
                [/*Dreamjobs*/""]
                [/*Fears*/"Trånga utrymmen"]
            ]


Kock =  [
            [/*Characteristics*/    "Extrovert", "Noggrann", "Snabbtänkt", "Stresstålig", "Flexibel", "Har gärna tydliga uppgifter", "Positiv", 
                                    "Serviceminded", "Kan komma in på kort varsel", "Pålitlig", "Empatisk", "Bra på multitasking", 
                                    "Behärskar konflikthantering", "Initiativtagande"]
            [/*Enviroment*/ "Mycket folk"]
            [/*Interactions*/ "Otrevliga/ otacksamma kunder"]
            [/*Skills*/"Matlagning"]
            [/*Interests*/"Matlagning"]
            [/*Values*/"Jämställdhet", "Direkthet", "Ödmjukhet"]
            [/*Hobbies*/"Bakning"]
            [/*Dreamjobs*/""]
            [/*Fears*/"Trånga utrymmen"]
        ]


Taxichaffuör =  [
                    [/*Characteristics*/ "Flexibel", "Positiv", "Serviceminded", "Kan komma in på kort varsel"]
                    [/*Enviroment*/ ""]
                    [/*Interactions*/ "Otrevliga/ otacksamma kunder", "Otrevliga/ otacksamma kunder"]
                    [/*Skills*/""]
                    [/*Interests*/""]
                    [/*Values*/""]
                    [/*Hobbies*/""]
                    [/*Dreamjobs*/""]
                    [/*Fears*/""]
                ]


Personlig_assistent =   [
                            [/*Characteristics*/ "Stresstålig", "Flexibel", "Positiv", "Serviceminded", "Pålitlig", "Empatisk", ]
                            [/*Enviroment*/ "Djupgående relation med kund"]
                            [/*Interactions*/ "Otrevliga/ otacksamma kunder"]
                            [/*Skills*/""]
                            [/*Interests*/""]
                            [/*Values*/"Artighet", "Förstånd", "Medkänsla", "Ödmjukhet", ]
                            [/*Hobbies*/""]
                            [/*Dreamjobs*/"Läkare"]
                            [/*Fears*/"Döden"]                           
                        ]

for (i = 0; i < 5; i++) 
    {
        bollSpel(i)
    }


console.log(indata[1][0])

indata[1][0] = true

if(indata[1][0])
    {
        console.log("This person likes people")
    }