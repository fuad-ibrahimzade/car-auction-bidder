// const fetch = require('node-fetch');
const puppeteer = require('puppeteer')
const ALLCarModels={
  "Audi":{"2":"100","3":"200","5":"80","6":"90","25":"A1","7":"A2","8":"A3","9":"A4","33":"A4 Allroad","31":"A5",
    "10":"A6","12":"A6 Allroad","34":"A7","11":"A8","13":"Cabriolet","14":"Coupé","45":"Q2","37":"Q3","32":"Q5",
    "15":"Q7","46":"Q8","16":"QUATTRO","29":"R8","26":"RS2","36":"RS3","27":"RS4","17":"RS5","28":"RS6","40":"RS7",
    "41":"RSQ3","42":"S1","18":"S2","19":"S3","20":"S4","30":"S5","21":"S6","38":"S7","22":"S8","47":"SQ2","39":"SQ5",
    "44":"SQ7","23":"TT - TT","35":"TT - TT RS","4":"TT - TTS","24":"V8","1":"Andere"},
  "BMW":{"73":"1er Reihe - 114","2":"1er Reihe - 116","3":"1er Reihe - 118","4":"1er Reihe - 120","59":"1er Reihe - 123",
    "61":"1er Reihe - 125","5":"1er Reihe - 130","58":"1er Reihe - 135","87":"1er Reihe - 1er M Coupé","71":"2002",
    "110":"2er Reihe - 214 Active Tourer","116":"2er Reihe - 214 Gran Tourer","106":"2er Reihe - 216",
    "111":"2er Reihe - 216 Active Tourer","114":"2er Reihe - 216 Gran Tourer","90":"2er Reihe - 218",
    "107":"2er Reihe - 218 Active Tourer","112":"2er Reihe - 218 Gran Tourer","84":"2er Reihe - 220",
    "108":"2er Reihe - 220 Active Tourer","113":"2er Reihe - 220 Gran Tourer","91":"2er Reihe - 225",
    "109":"2er Reihe - 225 Active Tourer","104":"2er Reihe - 228","125":"2er Reihe - 230","7":"3er Reihe - 315",
    "8":"3er Reihe - 316","9":"3er Reihe - 318","75":"3er Reihe - 318 Gran Turismo","10":"3er Reihe - 320",
    "76":"3er Reihe - 320 Gran Turismo","11":"3er Reihe - 323","12":"3er Reihe - 324","13":"3er Reihe - 325",
    "88":"3er Reihe - 325 Gran Turismo","14":"3er Reihe - 328","77":"3er Reihe - 328 Gran Turismo",
    "15":"3er Reihe - 330","103":"3er Reihe - 330 Gran Turismo","56":"3er Reihe - 335",
    "78":"3er Reihe - 335 Gran Turismo","118":"3er Reihe - 340","130":"3er Reihe - 340 Gran Turismo",
    "72":"3er Reihe - ActiveHybrid 3","115":"4er Reihe - 418","98":"4er Reihe - 418 Gran Coupé",
    "80":"4er Reihe - 420","99":"4er Reihe - 420 Gran Coupé","102":"4er Reihe - 425","124":"4er Reihe - 425 Gran Coupé",
    "81":"4er Reihe - 428","100":"4er Reihe - 428 Gran Coupé","83":"4er Reihe - 430","105":"4er Reihe - 430 Gran Coupé",
    "82":"4er Reihe - 435","101":"4er Reihe - 435 Gran Coupé","120":"4er Reihe - 440","121":"4er Reihe - 440 Gran Coupé",
    "16":"5er Reihe - 518","17":"5er Reihe - 520","74":"5er Reihe - 520 Gran Turismo","18":"5er Reihe - 523",
    "19":"5er Reihe - 524","20":"5er Reihe - 525","21":"5er Reihe - 528","22":"5er Reihe - 530",
    "65":"5er Reihe - 530 Gran Turismo","23":"5er Reihe - 535","66":"5er Reihe - 535 Gran Turismo",
    "24":"5er Reihe - 540","25":"5er Reihe - 545","26":"5er Reihe - 550","67":"5er Reihe - 550 Gran Turismo",
    "70":"5er Reihe - ActiveHybrid 5","27":"6er Reihe - 628","28":"6er Reihe - 630","127":"6er Reihe - 630 Gran Turismo",
    "29":"6er Reihe - 633","30":"6er Reihe - 635","68":"6er Reihe - 640","94":"6er Reihe - 640 Gran Coupé",
    "128":"6er Reihe - 640 Gran Turismo","31":"6er Reihe - 645","32":"6er Reihe - 650","95":"6er Reihe - 650 Gran Coupé",
    "33":"7er Reihe - 725","34":"7er Reihe - 728","35":"7er Reihe - 730","36":"7er Reihe - 732","37":"7er Reihe - 735",
    "38":"7er Reihe - 740","39":"7er Reihe - 745","40":"7er Reihe - 750","41":"7er Reihe - 760",
    "63":"7er Reihe - ActiveHybrid 7","42":"840","43":"850","79":"i3","89":"i8","69":"M-Modelle - M135",
    "122":"M-Modelle - M140i","117":"M-Modelle - M2","85":"M-Modelle - M235","123":"M-Modelle - M240i",
    "45":"M-Modelle - M3","93":"M-Modelle - M4","46":"M-Modelle - M5","86":"M-Modelle - M550","47":"M-Modelle - M6",
    "126":"M-Modelle - M760","140":"M-Modelle - M850","64":"X-Reihe - ActiveHybrid X6","6":"X-Reihe - X1",
    "129":"X-Reihe - X2","48":"X-Reihe - X3","92":"X-Reihe - X4","119":"X-Reihe - X4 M40","49":"X-Reihe - X5",
    "53":"X-Reihe - X5 M","96":"X-Reihe - X5 M50","60":"X-Reihe - X6","62":"X-Reihe - X6 M","97":"X-Reihe - X6 M50",
    "50":"Z-Reihe - Z1","51":"Z-Reihe - Z3","57":"Z-Reihe - Z3 M","52":"Z-Reihe - Z4","55":"Z-Reihe - Z4 M",
    "54":"Z-Reihe - Z8","1":"Andere"},
  "Chevrolet":{"2":"2500","3":"Alero","4":"Astro","5":"Avalanche","45":"Aveo","7":"Beretta","8":"Blazer","9":"C1500",
    "10":"Camaro","11":"Caprice","47":"Captiva","12":"Cavalier","43":"Chevelle","14":"Chevy Van","15":"Citation",
    "48":"Colorado","16":"Corsica","51":"Cruze","20":"El Camino","49":"Epica","21":"Evanda","18":"Express","22":"G",
    "50":"HHR","23":"Impala","24":"K1500","25":"K30","26":"Kalos","27":"Lacetti","28":"Lumina","29":"Malibu",
    "30":"Matiz","40":"Niva","32":"Nubira","17":"Orlando","33":"Rezzo","34":"S-10","35":"Silverado","13":"Spark",
    "36":"SSR","37":"Suburban","39":"Tahoe","41":"Trailblazer","42":"Trans Sport","38":"Traverse","31":"Trax",
    "44":"Venture","19":"Volt","1":"Andere"},
  "Citroen":{"2":"2 CV","4":"AX","5":"Berlingo","6":"BX","7":"C1","9":"C2","11":"C3","41":"C3 Aircross","8":"C3 Picasso",
    "12":"C4","36":"C4 Aircross","37":"C4 Cactus","32":"C4 Picasso","43":"C4 SpaceTourer","13":"C5","14":"C6","15":"C8",
    "33":"C-Crosser","38":"C-Elysée","16":"CX","31":"C-Zero","17":"DS","20":"DS3","22":"DS4","40":"DS4 Crossback",
    "35":"DS5","42":"E-MEHARI","18":"Evasion","34":"Grand C4 Picasso","19":"GSA","10":"Jumper","21":"Jumpy","3":"Nemo",
    "23":"SAXO","24":"SM","39":"SpaceTourer","25":"Visa","26":"Xantia","27":"XM","28":"Xsara","29":"Xsara Picasso",
    "30":"ZX","1":"Andere"},
  "Dacia":{"5":"Dokker","2":"Duster","3":"Lodgy","6":"Logan","4":"Logan Pick-Up","7":"Pick Up","24":"Sandero",
    "1":"Andere"},
  "Fiat":{"2":"124","54":"124 Spider","4":"126","5":"127","6":"130","7":"131","9":"500","49":"500C","48":"500L",
    "60":"500L Cross","51":"500L Living","52":"500L Trekking","59":"500L Urban","58":"500L Wagon","57":"500S",
    "53":"500X","25":"Albea","10":"Barchetta","11":"Brava","12":"Bravo","14":"Cinquecento","15":"Coupe","16":"Croma",
    "17":"Dino","18":"Doblo","19":"Ducato","21":"Fiorino","47":"Freemont","55":"Fullback","44":"Grande Punto","22":"Idea",
    "46":"Linea","23":"Marea","24":"Marengo","26":"Multipla","50":"New Panda","27":"Palio","28":"Panda","30":"Punto",
    "38":"Punto Evo","13":"Qubo","31":"Regata","32":"Ritmo","33":"Scudo","45":"Sedici","34":"Seicento","29":"Siena",
    "35":"Spider Europa","36":"Stilo","37":"Strada","56":"Talento","39":"Tempra","40":"Tipo","41":"Ulysse","42":"Uno",
    "43":"X 1/9","1":"Andere"},
  "Ford":{"2":"Aerostar","54":"B-Max","3":"Bronco","4":"Capri","52":"C-Max","5":"Cougar","6":"Courier","7":"Crown",
    "8":"Econoline","9":"Econovan","56":"EcoSport","48":"Edge","10":"Escape","11":"Escort","12":"Excursion",
    "13":"Expedition","14":"Explorer","15":"Express","63":"F 100","16":"F 150","17":"F 250","18":"F 350",
    "45":"Fairlane","46":"Falcon","19":"Fiesta","53":"Flex","20":"Focus","22":"Fusion","23":"Galaxy","24":"Granada",
    "50":"Grand C-Max","59":"Grand Tourneo","44":"GT","25":"Ka/Ka+","49":"Kuga","27":"Maverick","28":"Mercury",
    "29":"Mondeo","30":"Mustang","31":"Orion","32":"Probe","33":"Puma","34":"Ranger","55":"Raptor","35":"Scorpio",
    "36":"Sierra","47":"S-Max","26":"Sportka","37":"Streetka","38":"Taunus","39":"Taurus","40":"Thunderbird",
    "41":"Tourneo - Tourneo","61":"Tourneo - Tourneo Connect","60":"Tourneo - Tourneo Courier",
    "62":"Tourneo - Tourneo Custom","42":"Transit - Transit","51":"Transit - Transit Connect",
    "58":"Transit - Transit Courier","57":"Transit - Transit Custom","43":"Windstar","1":"Andere"},
  "Honda":{"2":"Accord","21":"Aerodeck","22":"City","3":"Civic","25":"Clarity","4":"Concerto","5":"CR-V","6":"CRX",
    "24":"CR-Z","7":"Element","8":"FR-V","9":"HR-V","10":"Insight","11":"Integra","12":"Jazz","13":"Legend","14":"Logo",
    "15":"NSX","16":"Odyssey","23":"Pilot","17":"Prelude","26":"Ridgeline","18":"S2000","19":"Shuttle","20":"Stream",
    "1":"Andere"},
  "Hyundai":{"2":"Accent","3":"Atos","24":"Azera","4":"Coupe","5":"Elantra","6":"Excel","7":"Galloper","15":"Genesis",
    "8":"Getz","9":"Grandeur","38":"Grand Santa Fe","13":"H-1","10":"H 100","14":"H-1 Starex","11":"H 200","39":"H350",
    "31":"i10","32":"i20","30":"i30","33":"i40","34":"i50","40":"IONIQ","36":"ix20","12":"ix35","35":"ix55","41":"Kona",
    "16":"Lantra","17":"Matrix","18":"Pony","19":"Santa Fe","20":"Santamo","22":"S-Coupe","23":"Sonata","25":"Terracan",
    "26":"Trajet","27":"Tucson","37":"Veloster","21":"Veracruz","28":"XG 30","29":"XG 350","1":"Andere"},
  "Kia":{"2":"Besta","28":"Borrego","3":"Carens","4":"Carnival","26":"cee'd","31":"cee'd Sportswagon","5":"Cerato",
    "6":"Clarus","7":"Elan","8":"Joice","9":"K2500","10":"K2700","11":"Leo","12":"Magentis","13":"Mentor","30":"Mini",
    "34":"Niro","14":"Opirus","33":"Optima","15":"Picanto","16":"Pregio","17":"Pride","27":"pro_cee'd","18":"Retona",
    "19":"Rio","20":"Roadster","21":"Rocsta","22":"Sephia","23":"Shuma","24":"Sorento","29":"Soul","25":"Sportage",
    "35":"Stinger","36":"Stonic","32":"Venga","1":"Andere"},
  "Mazda":{"2":"121","3":"2","4":"3","5":"323","6":"5","7":"6","8":"626","9":"929","23":"Bongo","10":"B series",
    "28":"BT-50","34":"CX-3","33":"CX-5","26":"CX-7","27":"CX-9","11":"Demio","12":"E series","24":"Millenia",
    "13":"MPV","14":"MX-3","15":"MX-5","16":"MX-6","17":"Premacy","25":"Protege","18":"RX-6","19":"RX-7",
    "20":"RX-8","21":"Tribute","22":"Xedos","1":"Andere"},
  "Mercedes-Benz":{"126":"190","127":"200","128":"220","129":"230","130":"240","131":"250","132":"260","133":"270",
    "134":"280","135":"290","136":"300","137":"320","138":"350","139":"380","140":"400","141":"416","142":"420",
    "143":"450","144":"500","145":"560","146":"600","2":"A-Klasse - A 140","3":"A-Klasse - A 150","4":"A-Klasse - A 160",
    "5":"A-Klasse - A 170","6":"A-Klasse - A 180","7":"A-Klasse - A 190","8":"A-Klasse - A 200","9":"A-Klasse - A 210",
    "221":"A-Klasse - A 220","220":"A-Klasse - A 250","298":"A-Klasse - A 35 AMG","229":"A-Klasse - A 45 AMG",
    "12":"B-Klasse - B 150","11":"B-Klasse - B 160","13":"B-Klasse - B 170","14":"B-Klasse - B 180",
    "15":"B-Klasse - B 200","222":"B-Klasse - B 220","223":"B-Klasse - B 250","241":"B-Klasse - B Electric Drive",
    "32":"CE-Klasse - CE 200","167":"CE-Klasse - CE 220","216":"CE-Klasse - CE 230","217":"CE-Klasse - CE 280",
    "33":"CE-Klasse - CE 300","234":"CE-Klasse - CE 320","224":"Citan","16":"C-Klasse - C 160","17":"C-Klasse - C 180",
    "18":"C-Klasse - C 200","19":"C-Klasse - C 220","20":"C-Klasse - C 230","21":"C-Klasse - C 240",
    "22":"C-Klasse - C 250","23":"C-Klasse - C 270","24":"C-Klasse - C 280","44":"C-Klasse - C 300",
    "25":"C-Klasse - C 30 AMG","27":"C-Klasse - C 320","26":"C-Klasse - C 32 AMG","28":"C-Klasse - C 350",
    "29":"C-Klasse - C 36 AMG","245":"C-Klasse - C 400","30":"C-Klasse - C 43 AMG","246":"C-Klasse - C 450 AMG",
    "31":"C-Klasse - C 55 AMG","198":"C-Klasse - C 63 AMG","225":"CLA-Klasse - CLA 180",
    "255":"CLA-Klasse - CLA 180 Shooting Brake","226":"CLA-Klasse - CLA 200","256":"CLA-Klasse - CLA 200 Shooting Brake",
    "227":"CLA-Klasse - CLA 220","257":"CLA-Klasse - CLA 220 Shooting Brake","228":"CLA-Klasse - CLA 250",
    "258":"CLA-Klasse - CLA 250 Shooting Brake","230":"CLA-Klasse - CLA 45 AMG",
    "259":"CLA-Klasse - CLA 45 AMG Shooting Brake","248":"CLA-Klasse - CLA Shooting Brake","46":"CLC-Klasse - CLC 160",
    "200":"CLC-Klasse - CLC 180","201":"CLC-Klasse - CLC 200","202":"CLC-Klasse - CLC 220","203":"CLC-Klasse - CLC 230",
    "107":"CLC-Klasse - CLC 250","204":"CLC-Klasse - CLC 350","168":"CLK-Klasse - CLK 200","169":"CLK-Klasse - CLK 220",
    "186":"CLK-Klasse - CLK 230","187":"CLK-Klasse - CLK 240","188":"CLK-Klasse - CLK 270","170":"CLK-Klasse - CLK 280",
    "171":"CLK-Klasse - CLK 320","172":"CLK-Klasse - CLK 350","173":"CLK-Klasse - CLK 430","174":"CLK-Klasse - CLK 500",
    "45":"CLK-Klasse - CLK 55 AMG","189":"CLK-Klasse - CLK 63 AMG","210":"CL-Klasse - CL 160","35":"CL-Klasse - CL 180",
    "36":"CL-Klasse - CL 200","37":"CL-Klasse - CL 220","38":"CL-Klasse - CL 230","211":"CL-Klasse - CL 320",
    "39":"CL-Klasse - CL 420","40":"CL-Klasse - CL 500","41":"CL-Klasse - CL 55 AMG","42":"CL-Klasse - CL 600",
    "197":"CL-Klasse - CL 63 AMG","43":"CL-Klasse - CL 65 AMG","240":"CLS-Klasse - CLS 220",
    "260":"CLS-Klasse - CLS 220 Shooting Brake","212":"CLS-Klasse - CLS 250","261":"CLS-Klasse - CLS 250 Shooting Brake",
    "205":"CLS-Klasse - CLS 280","117":"CLS-Klasse - CLS 300","147":"CLS-Klasse - CLS 320","148":"CLS-Klasse - CLS 350",
    "262":"CLS-Klasse - CLS 350 Shooting Brake","239":"CLS-Klasse - CLS 400","263":"CLS-Klasse - CLS 400 Shooting Brake",
    "289":"CLS-Klasse - CLS 450","149":"CLS-Klasse - CLS 500","264":"CLS-Klasse - CLS 500 Shooting Brake",
    "297":"CLS-Klasse - CLS 53 AMG","150":"CLS-Klasse - CLS 55 AMG","176":"CLS-Klasse - CLS 63 AMG",
    "265":"CLS-Klasse - CLS 63 AMG Shooting Brake","249":"CLS-Klasse - CLS Shooting Brake","47":"E-Klasse - E 200",
    "48":"E-Klasse - E 220","49":"E-Klasse - E 230","50":"E-Klasse - E 240","51":"E-Klasse - E 250",
    "52":"E-Klasse - E 260","53":"E-Klasse - E 270","54":"E-Klasse - E 280","55":"E-Klasse - E 290",
    "56":"E-Klasse - E 300","57":"E-Klasse - E 320","58":"E-Klasse - E 350","59":"E-Klasse - E 36 AMG",
    "60":"E-Klasse - E 400","61":"E-Klasse - E 420","62":"E-Klasse - E 430","272":"E-Klasse - E 43 AMG",
    "177":"E-Klasse - E 50","64":"E-Klasse - E 500","296":"E-Klasse - E 53 AMG","178":"E-Klasse - E 55 AMG",
    "66":"E-Klasse - E 60 AMG","179":"E-Klasse - E 63 AMG","152":"G-Klasse - G 230","151":"G-Klasse - G 240",
    "153":"G-Klasse - G 250","154":"G-Klasse - G 270","155":"G-Klasse - G 280","156":"G-Klasse - G 290",
    "157":"G-Klasse - G 300","158":"G-Klasse - G 320","160":"G-Klasse - G 350","159":"G-Klasse - G 400",
    "161":"G-Klasse - G 500","68":"G-Klasse - G 55 AMG","218":"G-Klasse - G 63 AMG","219":"G-Klasse - G 65 AMG",
    "238":"GLA-Klasse - GLA 180","231":"GLA-Klasse - GLA 200","232":"GLA-Klasse - GLA 220","233":"GLA-Klasse - GLA 250",
    "236":"GLA-Klasse - GLA 45 AMG","253":"GLC-Klasse - GLC 220","254":"GLC-Klasse - GLC 250",
    "284":"GLC-Klasse - GLC 300","278":"GLC-Klasse - GLC 350","279":"GLC-Klasse - GLC 43 AMG",
    "283":"GLC-Klasse - GLC 63 AMG","266":"GLE-Klasse - GLE 250","251":"GLE-Klasse - GLE 350",
    "252":"GLE-Klasse - GLE 400","280":"GLE-Klasse - GLE 43 AMG","243":"GLE-Klasse - GLE 450 AMG",
    "267":"GLE-Klasse - GLE 500","250":"GLE-Klasse - GLE 63 AMG","175":"GLK-Klasse - GLK 200",
    "206":"GLK-Klasse - GLK 220","63":"GLK-Klasse - GLK 250","207":"GLK-Klasse - GLK 280","65":"GLK-Klasse - GLK 300",
    "208":"GLK-Klasse - GLK 320","209":"GLK-Klasse - GLK 350","180":"GL-Klasse - GL 320","166":"GL-Klasse - GL 350",
    "244":"GL-Klasse - GL 400","181":"GL-Klasse - GL 420","182":"GL-Klasse - GL 450","183":"GL-Klasse - GL 500",
    "196":"GL-Klasse - GL 55 AMG","195":"GL-Klasse - GL 63 AMG","268":"GLS-Klasse - GLS 350",
    "269":"GLS-Klasse - GLS 400","270":"GLS-Klasse - GLS 500","271":"GLS-Klasse - GLS 63","242":"GT-Klasse - AMG GT",
    "282":"GT-Klasse - AMG GT C","281":"GT-Klasse - AMG GT R","247":"GT-Klasse - AMG GT S","70":"MB 100",
    "71":"ML-Klasse - ML 230","215":"ML-Klasse - ML 250","72":"ML-Klasse - ML 270","73":"ML-Klasse - ML 280",
    "67":"ML-Klasse - ML 300","74":"ML-Klasse - ML 320","75":"ML-Klasse - ML 350","76":"ML-Klasse - ML 400",
    "192":"ML-Klasse - ML 420","77":"ML-Klasse - ML 430","69":"ML-Klasse - ML 450","78":"ML-Klasse - ML 500",
    "79":"ML-Klasse - ML 55 AMG","162":"ML-Klasse - ML 63 AMG","190":"R-Klasse - R 280","92":"R-Klasse - R 300",
    "80":"R-Klasse - R 320","81":"R-Klasse - R 350","82":"R-Klasse - R 500","184":"R-Klasse - R 63 AMG",
    "213":"S-Klasse - S 250","185":"S-Klasse - S 260","83":"S-Klasse - S 280","84":"S-Klasse - S 300",
    "85":"S-Klasse - S 320","86":"S-Klasse - S 350","87":"S-Klasse - S 400","88":"S-Klasse - S 420",
    "89":"S-Klasse - S 430","191":"S-Klasse - S 450","90":"S-Klasse - S 500","91":"S-Klasse - S 55",
    "193":"S-Klasse - S 550","285":"S-Klasse - S 560","93":"S-Klasse - S 600","194":"S-Klasse - S 63 AMG",
    "294":"S-Klasse - S 650","94":"S-Klasse - S 65 AMG","274":"SLC-Klasse - SLC 180","275":"SLC-Klasse - SLC 200",
    "273":"SLC-Klasse - SLC 250","288":"SLC-Klasse - SLC 280","276":"SLC-Klasse - SLC 300",
    "277":"SLC-Klasse - SLC 43 AMG","108":"SLK-Klasse - SLK 200","109":"SLK-Klasse - SLK 230",
    "214":"SLK-Klasse - SLK 250","110":"SLK-Klasse - SLK 280","10":"SLK-Klasse - SLK 300","112":"SLK-Klasse - SLK 320",
    "111":"SLK-Klasse - SLK 32 AMG","113":"SLK-Klasse - SLK 350","114":"SLK-Klasse - SLK 55 AMG",
    "95":"SL-Klasse - SL 280","96":"SL-Klasse - SL 300","97":"SL-Klasse - SL 320","98":"SL-Klasse - SL 350",
    "99":"SL-Klasse - SL 380","237":"SL-Klasse - SL 400","100":"SL-Klasse - SL 420","101":"SL-Klasse - SL 450",
    "102":"SL-Klasse - SL 500","103":"SL-Klasse - SL 55 AMG","104":"SL-Klasse - SL 560","105":"SL-Klasse - SL 600",
    "163":"SL-Klasse - SL 60 AMG","199":"SL-Klasse - SL 63 AMG","106":"SL-Klasse - SL 65 AMG",
    "164":"SL-Klasse - SL 70 AMG","165":"SL-Klasse - SL 73 AMG","115":"SLR","34":"SLS AMG","116":"Sprinter",
    "122":"Vaneo","123":"Vario","124":"Viano","125":"Vito","118":"V-Klasse - V 200","119":"V-Klasse - V 220",
    "120":"V-Klasse - V 230","235":"V-Klasse - V 250","121":"V-Klasse - V 280","286":"X-Klasse - X 220",
    "287":"X-Klasse - X 250","1":"Andere"},
  "Mitsubishi":{"2":"3000 GT","21":"ASX","4":"Canter","5":"Carisma","6":"Colt","7":"Cordia","8":"Cosmos",
    "32":"Diamante","9":"Eclipse","36":"Eclipse Cross","25":"Electric Vehicle (i-MiEV)","10":"Galant","11":"Galloper",
    "12":"Grandis","13":"L200","14":"L300","15":"L400","16":"Lancer","34":"Mirage","17":"Montero","18":"Outlander",
    "19":"Pajero","20":"Pajero Pinin","33":"Pick-up","35":"Plug-in Hybrid Outlander","22":"Santamo","23":"Sapporo",
    "24":"Sigma","26":"Space Gear","27":"Space Runner","28":"Space Star","29":"Space Wagon","30":"Starion",
    "31":"Tredia","1":"Andere"},
  "Nissan":{"42":"100 NX","43":"200 SX","44":"240 SX","4":"280 ZX","5":"300 ZX","6":"350Z","26":"370Z","7":"Almera",
    "8":"Almera Tino","45":"Altima","9":"Armada","10":"Bluebird","11":"Cabstar","12":"Cargo","13":"Cherry","3":"Cube",
    "59":"e-NV200","57":"Evalia","14":"Frontier","49":"GT-R","15":"Interstar","52":"Juke","16":"King Cab",
    "17":"Kubistar","18":"Laurel","53":"Leaf","19":"Maxima","20":"Micra","21":"Murano","22":"Navara","23":"Note",
    "2":"NP 300","54":"NV200","60":"NV300","56":"NV400","24":"Pathfinder","25":"Patrol","55":"PickUp","36":"Pixo",
    "27":"Prairie","28":"Primastar","29":"Primera","58":"Pulsar","47":"Qashqai","50":"Qashqai+2","30":"Quest",
    "46":"Sentra","31":"Serena","32":"Silvia","33":"Skyline","34":"Sunny","35":"Terrano","48":"Tiida","37":"Titan",
    "38":"Trade","39":"Urvan","40":"Vanette","41":"X-Trail","1":"Andere"},
  "Opel":{"38":"Adam","2":"Agila","28":"Ampera","45":"Ampera-e","34":"Antara","3":"Arena","4":"Ascona","5":"Astra",
    "6":"Calibra","7":"Campo","39":"Cascada","32":"Cavalier","8":"Combo","9":"Commodore","10":"Corsa","42":"Crossland X",
    "11":"Diplomat","12":"Frontera","43":"Grandland X","13":"GT","35":"Insignia","40":"Insignia CT","14":"Kadett",
    "41":"Karl","15":"Manta","16":"Meriva","37":"Mokka","44":"Mokka X","17":"Monterey","18":"Monza","19":"Movano",
    "33":"Nova","20":"Omega","21":"Pick Up Sportscap","22":"Rekord","23":"Senator","24":"Signum","25":"Sintra",
    "26":"Speedster","27":"Tigra","29":"Vectra","30":"Vivaro","31":"Zafira","36":"Zafira Tourer","1":"Andere"},
  "Peugeot":{"2":"1007","3":"104","4":"106","5":"107","47":"108","46":"2008","6":"204","7":"205","8":"206","30":"207",
    "43":"208","26":"3008","45":"301","9":"304","10":"305","11":"306","12":"307","32":"308","13":"309","31":"4007",
    "44":"4008","14":"404","15":"405","16":"406","17":"407","35":"5008","18":"504","19":"505","42":"508","20":"604",
    "21":"605","22":"607","23":"806","24":"807","33":"Bipper","39":"Bipper Tepee","25":"Boxer","27":"Expert",
    "40":"Expert Tepee","38":"iOn","28":"J5","29":"Partner","41":"Partner Tepee","36":"RCZ","49":"Rifter","34":"TePee",
    "48":"Traveller","1":"Andere"},
  "Renault":{"50":"Alaskan","40":"Alpine A110","2":"Alpine A310","4":"Alpine V6","5":"Avantime","47":"Captur",
    "6":"Clio","7":"Coupe","8":"Espace","9":"Express","36":"Fluence","10":"Fuego","11":"Grand Espace",
    "42":"Grand Modus","12":"Grand Scenic","48":"Kadjar","13":"Kangoo","41":"Koleos","14":"Laguna",
    "44":"Latitude","15":"Mascott","16":"Master","17":"Megane","18":"Modus","19":"P 1400","20":"R 11","21":"R 14",
    "22":"R 18","23":"R 19","24":"R 20","25":"R 21","26":"R 25","27":"R 30","28":"R 4","29":"R 5","30":"R 6",
    "31":"R 9","32":"Rapid","33":"Safrane","34":"Scenic","35":"Spider","49":"Talisman","37":"Trafic","38":"Twingo",
    "45":"Twizy","39":"Vel Satis","43":"Wind","46":"ZOE","1":"Andere"},
  "Saab":{"2":"90","3":"900","4":"9000","5":"9-3","10":"9-4X","6":"9-5","7":"96","8":"9-7X","9":"99","1":"Andere"},
  "Seat":{"2":"Alhambra","3":"Altea","16":"Arona","4":"Arosa","13":"Ateca","5":"Cordoba","6":"Exeo","7":"Ibiza",
    "8":"Inca","9":"Leon","10":"Malaga","11":"Marbella","12":"Mii","17":"Tarraco","14":"Terra","15":"Toledo","1":"Andere"},
  "Skoda":{"2":"105","3":"120","4":"130","5":"135","17":"Citigo","6":"Fabia","7":"Favorit","8":"Felicia","9":"Forman",
    "20":"Karoq","19":"Kodiaq","10":"Octavia","14":"Pick-up","16":"Praktik","18":"Rapid","13":"Roomster","12":"Superb",
    "15":"Yeti","1":"Andere"},
  "Subaru":{"4":"B9 Tribeca","5":"Baja","12":"BRZ","7":"Forester","8":"Impreza","9":"Justy","10":"Legacy","17":"Levorg",
    "11":"Libero","13":"OUTBACK","14":"SVX","3":"Trezia","2":"Tribeca","15":"Vivio","18":"WRX STI","16":"XT","6":"XV",
    "1":"Andere"},
  "Suzuki":{"2":"Alto","3":"Baleno","4":"Cappuccino","5":"Carry","13":"Celerio","6":"Grand Vitara","7":"Ignis",
    "14":"iK-2","8":"Jimny","11":"Kizashi","9":"Liana","10":"LJ","17":"SJ Samurai","24":"Splash","18":"Super-Carry",
    "19":"Swift","23":"SX4","12":"SX4 S-Cross","20":"Vitara","21":"Wagon R+","22":"X-90","1":"Andere"},
  "Toyota":{"2":"4-Runner","47":"Alphard","39":"Auris","43":"Auris Touring Sports","3":"Avalon","4":"Avensis",
    "14":"Avensis Verso","5":"Aygo","6":"Camry","7":"Carina","8":"Celica","48":"C-HR","9":"Corolla",
    "40":"Corolla Verso","10":"Cressida","11":"Crown","12":"Dyna","45":"FCV","38":"FJ","49":"Fortuner","31":"GT86",
    "16":"Hiace","15":"Highlander","17":"Hilux","41":"IQ","19":"Land Cruiser","21":"Lite-Ace","18":"Matrix",
    "46":"Mirai","22":"MR 2","23":"Paseo","25":"Picnic","26":"Previa","27":"Prius","42":"Prius+","44":"Proace",
    "28":"RAV 4","29":"Sequoia","30":"Sienna","32":"Starlet","33":"Supra","37":"Tacoma","34":"Tercel","35":"Tundra",
    "13":"Urban Cruiser","20":"Verso","24":"Verso-S","36":"Yaris","1":"Andere"},
  "Volkswagen":{"2":"181","5":"Amarok","64":"Arteon","10":"Beetle","6":"Bora","7":"Buggy","9":"Caddy","19":"CC",
    "12":"Corrado","3":"Crafter","41":"Eos","13":"Fox","14":"Golf - Golf","55":"Golf - Golf Plus",
    "40":"Golf - Golf Sportsvan","15":"Iltis","16":"Jetta","17":"Käfer","18":"Karmann Ghia","20":"LT","21":"Lupo",
    "24":"New Beetle","25":"Passat - Passat","62":"Passat - Passat Alltrack","4":"Passat - Passat CC",
    "63":"Passat - Passat Variant","26":"Phaeton","27":"Polo","8":"Routan","28":"Santana","29":"Scirocco",
    "30":"Sharan","42":"T1","31":"T2","46":"T3 - T3 andere","44":"T3 - T3 Caravelle","22":"T3 - T3 Kombi",
    "45":"T3 - T3 Multivan","49":"T4 - T4 andere","33":"T4 - T4 California","47":"T4 - T4 Caravelle",
    "23":"T4 - T4 Kombi","48":"T4 - T4 Multivan","53":"T5 - T5 andere","34":"T5 - T5 California",
    "50":"T5 - T5 Caravelle","32":"T5 - T5 Kombi","51":"T5 - T5 Multivan","52":"T5 - T5 Shuttle",
    "61":"T5 - T5 Transporter","59":"T6 - T6 andere","58":"T6 - T6 California","56":"T6 - T6 Caravelle",
    "57":"T6 - T6 Kombi","43":"T6 - T6 Multivan","60":"T6 - T6 Transporter","35":"Taro","54":"Tiguan",
    "66":"Tiguan Allspace","36":"Touareg","37":"Touran","65":"T-Roc","11":"up!","39":"Vento","38":"XL1","1":"Andere"},
  "Volvo":{"2":"240","3":"244","4":"245","5":"262","6":"264","7":"340","8":"360","9":"440","10":"460","11":"480",
    "12":"740","13":"744","14":"745","15":"760","17":"780","18":"850","19":"855","20":"940","21":"944","22":"945",
    "23":"960","24":"965","38":"Amazon","39":"C30","25":"C70","26":"Polar","27":"S40","28":"S60",
    "42":"S60 Cross Country","29":"S70","30":"S80","31":"S90","32":"V40","41":"V40 Cross Country","33":"V50",
    "16":"V60","43":"V60 Cross Country","34":"V70","35":"V90","44":"V90 Cross Country","45":"XC40","40":"XC60",
    "36":"XC70","37":"XC90","1":"Andere"}
  }
const ALLCarMarks={"3500":"Beliebig","140":"Abarth","203":"AC","375":"Acura","800":"Aixam","900":"Alfa Romeo",
  "1100":"ALPINA","121":"Artega","1750":"Asia Motors","1700":"Aston Martin","1900":"Audi","2000":"Austin",
  "1950":"Austin Healey","3100":"Bentley","3500":"BMW","3850":"Borgward","4025":"Brilliance","4350":"Bugatti",
  "4400":"Buick","4700":"Cadillac","112":"Casalini","5300":"Caterham","83":"Chatenet","5600":"Chevrolet",
  "5700":"Chrysler","5900":"Citroen","6200":"Cobra","6325":"Corvette","6600":"Dacia","6800":"Daewoo","7000":"Daihatsu",
  "7400":"DeTomaso","7700":"Dodge","255":"Donkervoort","235":"DS Automobiles","8600":"Ferrari","8800":"Fiat",
  "172":"Fisker","9000":"Ford","205":"GAC Gonow","204":"Gemballa","9900":"GMC","122":"Grecav","186":"Hamann",
  "10850":"Holden","11000":"Honda","11050":"Hummer","11600":"Hyundai","11650":"Infiniti","11900":"Isuzu","12100":"Iveco",
  "12400":"Jaguar","12600":"Jeep","13200":"Kia","13450":"Koenigsegg","13900":"KTM","14400":"Lada","14600":"Lamborghini",
  "14700":"Lancia","14800":"Land Rover","14845":"Landwind","15200":"Lexus","15400":"Ligier","15500":"Lincoln",
  "15900":"Lotus","16200":"Mahindra","16600":"Maserati","16700":"Maybach","16800":"Mazda","137":"McLaren",
  "17200":"Mercedes-Benz","17300":"MG","30011":"Microcar","17500":"MINI","17700":"Mitsubishi","17900":"Morgan",
  "18700":"Nissan","18875":"NSU","18975":"Oldsmobile","19000":"Opel","149":"Pagani","19300":"Peugeot","19600":"Piaggio",
  "19800":"Plymouth","20000":"Pontiac","20100":"Porsche","20200":"Proton","20700":"Renault","21600":"Rolls-Royce",
  "21700":"Rover","125":"Ruf","21800":"Saab","22000":"Santana","22500":"Seat","22900":"Skoda","23000":"Smart",
  "188":"speedART","100":"Spyker","23100":"Ssangyong","23500":"Subaru","23600":"Suzuki","23800":"Talbot","23825":"Tata",
  "189":"TECHART","135":"Tesla","24100":"Toyota","24200":"Trabant","24400":"Triumph","24500":"TVR","25200":"Volkswagen",
  "25100":"Volvo","25300":"Wartburg","113":"Westfield","25650":"Wiesmann","1400":"Andere"}
  
var cartvLoginLink='https://websky.cartv.de/Default.aspx'
// cartvLoginLink='https://websky.cartv.de/'
// cartvLoginLink='https://www.cartv.eu/de/log-in/cartv-websky/'
var custemerIDsel='#ctl00_MainContent_ASPxRoundPanelLogin_TextBoxKdNr'
var passwordsel='#ctl00_MainContent_ASPxRoundPanelLogin_TextBoxPassword'
var loginButtonsel='#ctl00_MainContent_ASPxRoundPanelLogin_ASPxButtonLogin'
var cid=process.env.cartv_id;
var cpass=process.env.cartv_password;
var Unfallfahrzeuge_eigene_sel='#ctl00_h_main_DXI0_T > span'
var distanceFilter_sel='#ctl00_m_a_DXFREditorcol33_I'
var firstCarROW_sel='#ctl00_m_a_DXDataRow0'
var firstCarManufacturers_sel='#ctl00_m_a_DXDataRow0 > td:nth-child(5)'
// #ctl00_m_a_tccell0_19 > table > tbody > tr > td:nth-child(2)
var firstDamagedPriceInput='#ctl00_m_a_tccell0_9 > table > tbody > tr > td:nth-child(2) > input[type="text"]'
var firstDamagedPriceConfirmButton='#ctl00_m_a_tccell0_9 > table > tbody > tr > td:nth-child(3) > button'
// nth-child(8)
var listNextButton_sel='#ctl00_m_a_DXPagerBottom > a:last-child'
var listPageXofX_sel='#ctl00_m_a_DXPagerBottom > b.dxp-lead.dxp-summary'
var listFirstButton_sel='#ctl00_m_a_DXPagerBottom > a:nth-child(3)'


// var descriptionLoading1='#ctl00_m_ASPxLoadingPanelDetail2_TL'
// var descriptionLoading2diplaynone='#ctl00_m_ASPxLoadingPanelDetail2'
// var UrlCarManufs_URL='https://m.mobile.de/svc/r/makes/Car?_jsonp=_loadMakes&_lang=de'
// var UrlCarModels_URL_begin='https://m.mobile.de/svc/r/models/'
// 3500?_jsonp=_loadModels&_lang=de

const cheerio = require('cheerio');
var cheerioSearchURL=0
let datamMobileDE=0
let datamCarTVPage=0
var listCARTV={
  carOfferBID:[],
  carBidWinningOffer:[],
  carAdId:[],
  carManufacturer:[],
  carModel:[],
  carIRegYear:[],
  carEnginePetrolDiesel:[],
  carMillYol:[],

  carLocationZipcode:[],
  carWB_Kosten:[],
  carRepair_Kosten:[],
  carMindesAngebot:[],
  carExpirationAblauf:[],
  carServiceID:[],
  carMotorHubraum:[],
  carMotorLeistung:[],

  carMobileDEPrice:[],
  botCanDo:[]
}
// carDoors:[],
// cardBescreibungDesc:[],
// cardKalkulation:[],
// cardDamageBericht:[],
// carPrevDamageSchaden:[],
// carNOImaggesExist:[],
// carNODamageWarning:[],

const Heroku = require('heroku-client')
const main_this_heroku_token=process.env.main_this_heroku_token;
const heroku = new Heroku({ token: main_this_heroku_token });
const sgMail = require('@sendgrid/mail');
const sendgrid_api=process.env.sendgrid_api;
sgMail.setApiKey(sendgrid_api);
var Excel = require('exceljs')
var workbook = new Excel.Workbook();
var worksheet = workbook.addWorksheet('Cars');

// add column headers
worksheet.columns = [
    { header: 'Hersteller', key: 'carManufacturer'},
    { header: 'Modell', key: 'carModel'},
    { header: 'Angebot', key: 'carOfferBID'},
    { header: 'Höchstgebot', key: 'carBidWinningOffer'},
    { header: 'Preis Prog.', key: 'carMobileDEPrice'},
    { header: 'WB-Wert', key: 'carWB_Kosten'},
    { header: 'Rep. Kosten', key: 'carRepair_Kosten'},
    { header: 'Mindestgebot', key: 'carMindesAngebot'},
    { header: 'AdId', key: 'carAdId'},
    { header: 'ServiceID', key: 'carServiceID'},
    { header: 'PLZ', key: 'carLocationZipcode'},
    { header: 'Erstzulassung', key: 'carIRegYear'},
    { header: 'Laufleistung', key: 'carMillYol'},
    { header: 'Hubraum', key: 'carMotorHubraum'},
    { header: 'Leistung', key: 'carMotorLeistung'}
];
// { header: 'carNOImaggesExist', key: 'carNOImaggesExist'},
// { header: 'carNODamageWarning', key: 'carNODamageWarning'},
// { header: 'botCanDo', key: 'botCanDo'}

// var errorHappens=false
var lastCarServiceID=0
// var lastCardMileage=0
// var lastListPageXofX=1
var lastListIndexToGo=0
var canStayInDamagedCars=true
var canBidPrices=false
var canCallOtherFunc=true
var canGoTOCARTVagain=true
var countOfNull=0
var countSecond=0
// let page=0
// bis 200 km
var distanceFilter='bis 200 km'
// var fs = require('fs');
const botqiymetversin=process.env.botqiymetversin
function main(browser){
  (async () => {
    if(String(botqiymetversin).toLowerCase()=='ok' || String(botqiymetversin).toLowerCase()=='true'){canBidPrices=true}
    else{canBidPrices=false}
    var lastCardMileage=0
    var lastListPageXofX=1
    var lastCarAdIdIndex=0
    let browser2= 0

    let page = 0
    if(canGoTOCARTVagain){
      try {
        page=await browser.newPage();
      } catch (error) {
        console.log(error)
      }
    }
    var waitedForNavigation=false
    // countOfNull=0
    countOfNull+=1
    while (!waitedForNavigation && canGoTOCARTVagain) {
        lastListIndexToGo=0
      try {
        await timeout(1000) 
      } catch (error) {
        
      }
      try {
        waitedForNavigation=await page.goto(cartvLoginLink);

      } catch (error) {
        waitedForNavigation=false
        // canGoTOCARTVagain=true
      }
      // if(!waitedForNavigation)canGoTOCARTVagain=true;
    }

    if(canGoTOCARTVagain){
      try {
        await page.waitForSelector(custemerIDsel,{visible:true}) 
      } catch (error) {
        console.log(error)
      }
      try {
        await page.$eval(custemerIDsel, (el, value) => el.value = value, cid); 
      } catch (error) {
        console.log(error)
      }

      try {
        await page.$eval(passwordsel, (el, value) => el.value = value, cpass); 
      } catch (error) {
        console.log(error)
      }

      try {
        await page.$eval(loginButtonsel, el => el.click()); 
      } catch (error) {
        console.log(error)
      }
    }
    waitedForNavigation=false

    let urlum= page.url()

    countOfNull+=1
    while(!urlum || (urlum&&urlum.indexOf('https://websky.cartv.de/PagedList.aspx')==-1)){

      try {
        await page.waitFor(1000) 
      } catch (error) {
        
      }
      try {
        await timeout(1000) 
      } catch (error) {
        
      }
      urlum= page.url()
    }
    console.log('New Page URL:', urlum);
    
    if(canGoTOCARTVagain){
      var amInOwnVehicles=false
      let Unfallfahrzeuge_eigene_sel_element=0
      try {
        Unfallfahrzeuge_eigene_sel_element=await page.$(Unfallfahrzeuge_eigene_sel)
      } catch (error) {
        console.log(error)
      }
      // countOfNull=0
      countOfNull+=1
      while (!Unfallfahrzeuge_eigene_sel_element) {

        try {
          await timeout(1000)
        } catch (error) {
          
        }
        try {
          Unfallfahrzeuge_eigene_sel_element=await page.$(Unfallfahrzeuge_eigene_sel)
        } catch (error) {
          Unfallfahrzeuge_eigene_sel_element=false
        }
      }
      if(!canStayInDamagedCars){
        let Unfallfahrzeuge_eigeneText = 0
        try {
          Unfallfahrzeuge_eigeneText=await page.evaluate(el => el.textContent, Unfallfahrzeuge_eigene_sel_element);
        } catch (error) {
          console.log(error)
        }
        if(Unfallfahrzeuge_eigeneText.indexOf('Unfallfahrzeuge')>-1){amInOwnVehicles=true}
        else if(Unfallfahrzeuge_eigeneText.indexOf('igene')>-1){amInOwnVehicles=false}
        if(!amInOwnVehicles){
          let Unfallfahrzeuge_eigene_sel_gotFromPage=0
          try {
            Unfallfahrzeuge_eigene_sel_gotFromPage=await page.$(Unfallfahrzeuge_eigene_sel)
          } catch (error) {
            console.log(error)
          }
          try {
            await page.evaluate(el => el.click(), Unfallfahrzeuge_eigene_sel_gotFromPage);
          } catch (error) {
            console.log(error)
          }
          // await page.evaluate(el => el.click(), await page.$(Unfallfahrzeuge_eigene_sel));
          // await page.waitForNavigation()
          Unfallfahrzeuge_eigene_sel_element=0
          try {
            Unfallfahrzeuge_eigene_sel_element=await page.$(Unfallfahrzeuge_eigene_sel)
          } catch (error) {
            
          }
          try {
            await page.waitForSelector(Unfallfahrzeuge_eigene_sel, {visible: true}); 
          } catch (error) {
            
          }
          try {
            let Unfallfahrzeuge_eigeneText = await page.evaluate(el => el.textContent, Unfallfahrzeuge_eigene_sel_element); 
          } catch (error) {
            
          }
        }
      }
      if(canStayInDamagedCars){
        let Unfallfahrzeuge_eigeneText = 0
        try {
          Unfallfahrzeuge_eigeneText=await page.evaluate(el => el.textContent, Unfallfahrzeuge_eigene_sel_element);
        } catch (error) {
          console.log(error)
        }
        if(Unfallfahrzeuge_eigeneText.indexOf('Unfallfahrzeuge')>-1){
          try {
            await page.evaluate(el => el.click(), Unfallfahrzeuge_eigene_sel_element);
          } catch (error) {
            console.log(error)
          }
          // await page.evaluate(el => el.click(), await page.$(Unfallfahrzeuge_eigene_sel));
          try {
            Unfallfahrzeuge_eigene_sel_element=await page.$(Unfallfahrzeuge_eigene_sel) 
          } catch (error) {
            console.log(error)
          }
          try {
            await page.waitForSelector(Unfallfahrzeuge_eigene_sel, {visible: true}); 
          } catch (error) {
            console.log(error)
          }
          try {
            let Unfallfahrzeuge_eigeneText = await page.evaluate(el => el.textContent, Unfallfahrzeuge_eigene_sel_element); 
          } catch (error) {
            console.log(error)
          }
        }
      }
    }
    
    
    let firstCarManufacturers_sel_element=0
    try {
      firstCarManufacturers_sel_element=await page.$(firstCarManufacturers_sel)
    } catch (error) {
      console.log(error)
    }
    // countOfNull=0
    countOfNull+=1
    while (!firstCarManufacturers_sel_element) {

      try {
        await timeout(1000)
      } catch (error) {

      }
      try {
        firstCarManufacturers_sel_element=await page.$(firstCarManufacturers_sel) 
      } catch (error) {
        console.log(error)
      }
    }
    try {
      await page.waitForSelector(distanceFilter_sel,{visible:true}) 
    } catch (error) {
      console.log(error)
    }
    // var distanceFilter='bis 200 km'
    // bis 200 km
    let distanceFilter_sel_element=0
    try {
      distanceFilter_sel_element=await page.$(distanceFilter_sel)
    } catch (error) {
      console.log(error)
    }
    // countOfNull=0
    countOfNull+=1
    while (!distanceFilter_sel_element) {

      try {
        await timeout(1000)
      } catch (error) {
        
      }
      try {
        distanceFilter_sel_element=await page.$(distanceFilter_sel)
      } catch (error) {
        distanceFilter_sel_element=false
      }
    }
    if((distanceFilter!=' ') && canGoTOCARTVagain){
      try {
        await page.type(distanceFilter_sel,distanceFilter)
      } catch (error) {
        console.log(error)
      }
      try {
        await page.type(distanceFilter_sel,String.fromCharCode(13))
      } catch (error) {
        console.log(error)
      }
      // canGoTOCARTVagain=false
    }
    try {
      await page.waitFor(1000) 
    } catch (error) {
      
    }

    // datamCarTVPage = 0
    try {
      datamCarTVPage=await page.evaluate(() => document.body.outerHTML);
    } catch (error) {
      console.log(error)
    }
    // countOfNull=0
    countOfNull+=1
    while (datamCarTVPage.length == 0 || datamCarTVPage.indexOf('HG_Label_')==-1) {

      try {
        await page.waitFor(1000)
      } catch (error) {
        
      }
      try {
        await timeout(1000)
      } catch (error) {
        
      }
      try {
        datamCarTVPage = await page.evaluate(() => document.body.outerHTML);
      } catch (error) {
        console.log(error)
      }
    }
    
    var distancesNotLoaded=true
    // countOfNull=0
    countOfNull+=1
    while (distancesNotLoaded) {

      try {
        await page.waitFor(1000)
      } catch (error) {
        
      }
      try {
        await timeout(1000) 
      } catch (error) {
        
      }
      distancesNotLoaded=false
      try {
        datamCarTVPage = await page.evaluate(() => document.body.outerHTML); 
      } catch (error) {
        console.log(error)
      }
      if(datamCarTVPage.indexOf('id="ctl00_m_p_d1_ASPxLabelHersteller"></span>')>-1){
        distancesNotLoaded=true
        continue
      }
      $ = cheerio.load(datamCarTVPage)
      var indivudDist=0
      if(distanceFilter!=' '){
        $('tr.dxgvDataRow').each(function(i, element){
          // .replace(/[^\d.-]/g, '')  for floats with dot
          indivudDist=parseInt($(element).find('td:nth-child(13)').text().replace(/\D/g,''))
          if(canStayInDamagedCars){indivudDist=parseInt($(element).find('td:nth-child(18)').text().replace(/\D/g,''))}
          console.log(indivudDist,parseInt(distanceFilter.replace(/\D/g,'')))
          // coxlu distance reqemleri atir consoleye
          if(indivudDist && indivudDist>parseInt(distanceFilter.replace(/\D/g,''))){
            distancesNotLoaded=true
            return false
          }
        }) 
      }
    }

    firstCarManufacturers_sel_element=0
    // countOfNull=0
    countOfNull+=1
    while (!firstCarManufacturers_sel_element || firstCarManufacturers_sel_element==0) {

      try {
        await timeout(1000)
      } catch (error) {

      }
      try {
        firstCarManufacturers_sel_element=await page.$(firstCarManufacturers_sel) 
      } catch (error) {
        console.log(error)
      }
    }

    let listNextButton_sel_element=0
    // countOfNull=0
    countOfNull+=1
    while (!listNextButton_sel_element||listNextButton_sel_element==0) {

      try {
        listNextButton_sel_element=await page.$(listNextButton_sel);
      } catch (error) {
        console.log(error)
      }
      try {
        await timeout(1000)
      } catch (error) {
        
      }
    }

            // }
    let listPageXofX_sel_elementTemp=0
    // countOfNull=0
    countOfNull+=1
    while (!listPageXofX_sel_elementTemp||listPageXofX_sel_elementTemp==0) {

      try {
        listPageXofX_sel_elementTemp=await page.$(listPageXofX_sel);
      } catch (error) {
        console.log(error)
      }
      try {
        await timeout(1000)
      } catch (error) {
        
      }
    }
    let listPageXofX_textTemp=0
    // countOfNull=0
    countOfNull+=1
    while (listPageXofX_textTemp==0 || !listPageXofX_textTemp) {

      try {
        listPageXofX_textTemp=await page.evaluate( (listPageXofX_sel_elementTemp) => listPageXofX_sel_elementTemp.textContent, listPageXofX_sel_elementTemp); 
      } catch (error) {
        console.log(error)
      }
      try {
        await timeout(1000)
      } catch (error) {
        
      } 
    }
    var listPageXTotalTemp=listPageXofX_textTemp.slice(listPageXofX_textTemp.indexOf('von ')+4,listPageXofX_textTemp.indexOf(' ('))
    var listPageXCurrentTemp=listPageXofX_textTemp.slice(listPageXofX_textTemp.indexOf('Seite ')+6,listPageXofX_textTemp.indexOf(' von'))
    listPageXTotalTemp=parseInt(listPageXTotalTemp)
    listPageXCurrentTemp=parseInt(listPageXCurrentTemp)
    // if(lastListIndexToGo==-1)lastListIndexToGo=listPageXTotalTemp-2
    console.log('lastListIndexToGo CHANGED',lastListIndexToGo);
    for (let listIndex = 0; listIndex < listPageXTotalTemp; listIndex++) {

      lastListPageXofX=lastListIndexToGo+1
      if(lastListIndexToGo!=0){
        // lastListPageXofX+=1
        // var templistIndex=0
        if (lastListIndexToGo!=listIndex || true) {
          console.log(lastListIndexToGo,listIndex);
         
          listNextButton_sel_element=0
          // countOfNull=0
          countOfNull+=1
          while (!listNextButton_sel_element||listNextButton_sel_element==0) {

            try {
              listNextButton_sel_element=await page.$(listNextButton_sel);
            } catch (error) {
              console.log(error)
            }
            try {
              await timeout(1000)
            } catch (error) {
              
            }
          }
          try {
            await page.click(listNextButton_sel) 
          } catch (error) {
            
          }
          // await page.$eval(listNextButton_sel, el => el.click())
          try {
            await page.waitFor(1000) 
          } catch (error) {
            
          }
          try {
            await timeout(1000) 
          } catch (error) {
            
          } 
        }
      }
      {
        firstCarROW_sel='#ctl00_m_a_DXDataRow'+String((lastListPageXofX-1)*100)
        firstCarManufacturers_sel=firstCarROW_sel+' > td:nth-child(5)'

        let listPageXofX_sel_element=0
        // countOfNull=0
        countOfNull+=1
        while (!listPageXofX_sel_element||listPageXofX_sel_element==0) {

          try {
            listPageXofX_sel_element=await page.$(listPageXofX_sel);
          } catch (error) {
            console.log(error)
          }
          try {
            await timeout(1000)
          } catch (error) {
            
          }
        }
        let listPageXofX_text=0
        // countOfNull=0
        countOfNull+=1
        while (listPageXofX_text==0 || !listPageXofX_text) {

          try {
            listPageXofX_text=await page.evaluate( (listPageXofX_sel_element) => listPageXofX_sel_element.textContent, listPageXofX_sel_element); 
          } catch (error) {
            console.log(error)
          }
          try {
            await timeout(1000)
          } catch (error) {
            
          } 
        }
        var listPageXTotal=listPageXofX_text.slice(listPageXofX_text.indexOf('von ')+4,listPageXofX_text.indexOf(' ('))
        var listPageXCurrent=listPageXofX_text.slice(listPageXofX_text.indexOf('Seite ')+6,listPageXofX_text.indexOf(' von'))
        listPageXTotal=parseInt(listPageXTotal)
        listPageXCurrent=parseInt(listPageXCurrent)
        
        // countOfNull=0
        countOfNull+=1
        while (listPageXCurrent!=lastListPageXofX) {

          listPageXofX_sel_element=0
          // countOfNull=0
          countOfNull+=1
          while (!listPageXofX_sel_element||listPageXofX_sel_element==0) {

            try {
              listPageXofX_sel_element=await page.$(listPageXofX_sel);
            } catch (error) {
              console.log(error)
            }
            try {
              await timeout(1000)
            } catch (error) {
              
            }
          }
          try {
            await timeout(1000)
          } catch (error) {
  
          }
          try {
            listPageXofX_text=await page.evaluate( (listPageXofX_sel_element) => listPageXofX_sel_element.textContent, listPageXofX_sel_element); 
          } catch (error) {
            console.log(error)
          }
          listPageXTotal=listPageXofX_text.slice(listPageXofX_text.indexOf('von ')+4,listPageXofX_text.indexOf(' ('))
          listPageXCurrent=listPageXofX_text.slice(listPageXofX_text.indexOf('Seite ')+6,listPageXofX_text.indexOf(' von'))
          listPageXTotal=parseInt(listPageXTotal)
          listPageXCurrent=parseInt(listPageXCurrent)
          try {
            await timeout(1000)
          } catch (error) {
            
          }
          console.log('hele 1ci SEH',listPageXCurrent)
          // if(lastListPageXofX==listPageXCurrent && !listPageXCurrent)lastListPageXofX=listPageXCurrent;
        }
        console.log(listPageXofX_text,listPageXCurrent,listPageXTotal)
        {
        datamCarTVPage = 0
        try {
          datamCarTVPage=await page.evaluate(() => document.body.outerHTML);
        } catch (error) {
          console.log(error)
        }
        // countOfNull=0
        countOfNull+=1
        while (datamCarTVPage.length == 0 || datamCarTVPage.indexOf('HG_Label_')==-1) {

          try {
            await page.waitFor(1000)
          } catch (error) {
            
          }
          try {
            await timeout(1000)
          } catch (error) {
            
          }
          try {
            datamCarTVPage = await page.evaluate(() => document.body.outerHTML);
          } catch (error) {
            console.log(error)
          }
          console.log('HG_Label_')
        }
        
        distancesNotLoaded=true
        // countOfNull=0
        countOfNull+=1
        while (distancesNotLoaded) {

          try {
            await page.waitFor(1000)
          } catch (error) {
            
          }
          try {
            await timeout(1000) 
          } catch (error) {
            
          }
          distancesNotLoaded=false
          try {
            datamCarTVPage = await page.evaluate(() => document.body.outerHTML); 
          } catch (error) {
            console.log(error)
          }
          if(datamCarTVPage.indexOf('id="ctl00_m_p_d1_ASPxLabelHersteller"></span>')>-1){
            distancesNotLoaded=true
            continue
          }
          $ = cheerio.load(datamCarTVPage)
          var indivudDist=0
          if(distanceFilter!=' '){
            $('tr.dxgvDataRow').each(function(i, element){
              // .replace(/[^\d.-]/g, '')  for floats with dot
              indivudDist=parseInt($(element).find('td:nth-child(13)').text().replace(/\D/g,''))
              if(canStayInDamagedCars){indivudDist=parseInt($(element).find('td:nth-child(18)').text().replace(/\D/g,''))}
              console.log(indivudDist,parseInt(distanceFilter.replace(/\D/g,'')))
              // coxlu distance reqemleri atir consoleye
              if(indivudDist && indivudDist>parseInt(distanceFilter.replace(/\D/g,''))){
                distancesNotLoaded=true
                return false
              }
            }) 
          }
          console.log('distancesNotLoaded');
        }
  
        firstCarManufacturers_sel_element=0
        // countOfNull=0
        countOfNull+=1
        while (!firstCarManufacturers_sel_element || firstCarManufacturers_sel_element==0) {

          try {
            firstCarManufacturers_sel_element=await page.$(firstCarManufacturers_sel) 
          } catch (error) {
            console.log(error)
          }
          try {
            await timeout(2000)
          } catch (error) {
  
          }
          console.log('firstCarManufacturers_sel_element');
          // await page.screenshot({path: 'C:/Users/user2/Desktop/cartv sual/screenshot-full.png', fullPage: true});
        }
        }
        datamCarTVPageTemp=0
        try {
          datamCarTVPageTemp=await page.evaluate(() => document.body.outerHTML)
        } catch (error) {
          console.log(error)
        }
        // countOfNull=0
        countOfNull+=1
        while (datamCarTVPageTemp.indexOf('<div id="ctl00_m_a_LP" align="center" style="left:0px;top:0px;z-index:30000;display:none;">')>-1) {

          try {
            await timeout(1000)
          } catch (error) {
            
          }
          try {
            datamCarTVPageTemp=await page.evaluate(() => document.body.outerHTML) 
          } catch (error) {
            
          }
          // await page.screenshot({path: 'C:/Users/user2/Desktop/cartv sual/screenshot-full.png', fullPage: true});
          console.log('yet loading')
        }
        // lastListPageXofX=listPageXCurrent
        
        $ = cheerio.load(datamCarTVPage)
        $('tr.dxgvDataRow').each(function(i, element){
          var test_carAdId=$(element).find('label').attr('id')
          test_carAdId=test_carAdId.slice(test_carAdId.indexOf('HG_Label_')+9,)
          // listCARTV.carOfferBID.push($(element).find('input[type="text"]').text())
          var test_carOfferBID=$(element).find('input[type="text"]').attr('onfocus')
          listCARTV.carOfferBID.push(test_carOfferBID.slice(test_carOfferBID.indexOf('"cpBetragMin":')+14,test_carOfferBID.indexOf(',"cpRWMin"')))
          listCARTV.carBidWinningOffer.push($(element).find('label').text())
          listCARTV.carAdId.push(test_carAdId)
        })
        // console.log(listCARTV.carOfferBID)
        // return
        // '#ctl00_m_a_DXDataRow'+String((lastListPageXofX-1)*100)
        try {
          await page.waitForSelector(firstCarROW_sel,{visible:true}) 
        } catch (error) {
          console.log(error)
        }
        // const firstCarinList = await page.$(firstCarROW_sel);
        // let next = await page.$(nextim);
        // let next = await page.evaluateHandle(el => el.nextElementSibling, firstCarinList);
        var next=0
        let respClickedCarDesc=0
        let descriptionJson=0
        var fromLastCarAdId=listCARTV.carAdId.length-listCARTV.carAdId.indexOf(lastCarAdIdIndex)
        for (let index = 0; index < listCARTV.carAdId.length; index++) {

          next='#ctl00_m_a_DXDataRow'+String((lastListPageXofX-1)*100+index)
          // next=firstCarROW_sel.slice(0,firstCarROW_sel.length-1)+String(16+index)
          try {
            await page.waitForSelector(next,{visible:true})
          } catch (error) {
            console.log(error)
          }

          try {
            await page.$eval(next, el => el.click())
          } catch (error) {
            
          }
          try {
            await page.waitFor(5000) 
          } catch (error) {
            
          }
          try {
            await timeout(5000) 
          } catch (error) {
            
          }

      
          let datamCarTVPageTemp=0
          try {
            datamCarTVPageTemp=await page.evaluate(() => document.body.outerHTML)
          } catch (error) {
            console.log(error)
          }
          // countOfNull=0
          countOfNull+=1
          while(datamCarTVPageTemp.indexOf('id="ctl00_m_p_d1_ASPxLabelHersteller"></span>')>-1){

            try {
              await timeout(1000)
            } catch (error) {
              
            }
            try {
              await page.waitFor(1000) 
            } catch (error) {
              
            }
            try {
              datamCarTVPageTemp=await page.evaluate(() => document.body.outerHTML) 
            } catch (error) {
              console.log(error)
            }
          }
          $ = cheerio.load(datamCarTVPageTemp)
  
          if(distanceFilter!=' '){
            distancesNotLoaded=true
            // countOfNull=0
            countOfNull+=1
            while (distancesNotLoaded) {

              distancesNotLoaded=false
              $('tr.dxgvDataRow').each(function(i, element){
                // .replace(/[^\d.-]/g, '')  for floats with dot
                indivudDist=parseInt($(element).find('td:nth-child(13)').text().replace(/\D/g,''))
                if(canStayInDamagedCars){indivudDist=parseInt($(element).find('td:nth-child(18)').text().replace(/\D/g,''))}
                if(indivudDist && indivudDist>parseInt(distanceFilter.replace(/\D/g,''))){
                  distancesNotLoaded=true
                  return false
                }
              })
              if(distancesNotLoaded){
                // index-=1
                try {
                  datamCarTVPageTemp=await page.evaluate(() => document.body.outerHTML) 
                } catch (error) {
                  console.log(error)
                }
                try {
                  await timeout(1000) 
                } catch (error) {
                  
                }
                $ = cheerio.load(datamCarTVPageTemp)
                continue
              }        
            }
          }
  
          var clickedMileage_sel=next+'> td:nth-child(9)'
          var lastCardMileageSame=true
          // countOfNull=0
          countOfNull+=1
          while (lastCardMileageSame) {

            let clickedMileage_sel_element=0
            // countOfNull=0
            countOfNull+=1
            while (clickedMileage_sel_element==0 || !clickedMileage_sel_element) {

              try {
                clickedMileage_sel_element=await page.$(clickedMileage_sel)
              } catch (error) {
                console.log(error)
              }
              try {
                await timeout(1000)
              } catch (error) {
                
              } 
              console.log('clickedMileage_sel null PROBLEM');
            }
            let clickedMileageString=0
            try {
              clickedMileageString=await page.evaluate((clickedMileage_sel_element) => clickedMileage_sel_element.textContent,clickedMileage_sel_element)
            } catch (error) {
              console.log(error);
            }
            // console.log(clickedMileageString)
            lastCardMileageSame= (clickedMileageString) && (lastCardMileage==clickedMileageString)
            if(!lastCardMileageSame && clickedMileageString){lastCardMileage=clickedMileageString}
            if(!clickedMileageString)lastCardMileageSame=true
            try {
              await timeout(1000)
            } catch (error) {
              
            }
          }
          
          // listCARTV.botCanDo.push(clickedYearAndPriceMet)
          listCARTV.carManufacturer.push($('#ctl00_m_p_d1_ASPxLabelHersteller').text().trim())
          listCARTV.carModel.push($('#ctl00_m_p_d1_ASPxLabelModell').text().trim())
          listCARTV.carIRegYear.push($('#ctl00_m_p_d1_ASPxLabelErstzulassung').text().split('/')[1])
          listCARTV.carEnginePetrolDiesel.push($('#ctl00_m_p_d1_ASPxLabelMotorart').text())
          listCARTV.carMillYol.push(parseInt($('#ctl00_m_p_d1_ASPxLabelKilometerstand').text()))
          listCARTV.carLocationZipcode.push($('#ctl00_m_p_d1_ASPxLabelPLZ').text())
          var test_carWB_Kosten=$('#ctl00_m_p_d1_ASPxLabelWiederbeschaffung').text()
          test_carWB_Kosten= test_carWB_Kosten.indexOf('.')>-1 ? parseFloat(test_carWB_Kosten):parseFloat(test_carWB_Kosten)/1000
          test_carWB_Kosten= (!test_carWB_Kosten) ? 0:test_carWB_Kosten
          listCARTV.carWB_Kosten.push(parseFloat(test_carWB_Kosten))
          var test_carRepair_Kosten=$('#ctl00_m_p_d1_ASPxLabelReperaturkosten').text()
          test_carRepair_Kosten= test_carRepair_Kosten.indexOf('.')>-1 ? parseFloat(test_carRepair_Kosten):parseFloat(test_carRepair_Kosten)/1000
          test_carRepair_Kosten= (!test_carRepair_Kosten) ? 0:test_carRepair_Kosten
          listCARTV.carRepair_Kosten.push(parseFloat(test_carRepair_Kosten))
          var test_carMindesAngebot=$('#ctl00_m_p_d1_ASPxLabelRwaga').text()
          test_carMindesAngebot= test_carMindesAngebot.indexOf('.')>-1 ? parseFloat(test_carMindesAngebot):parseFloat(test_carMindesAngebot)/1000
          test_carMindesAngebot= (!test_carMindesAngebot) ? 0:test_carMindesAngebot
          listCARTV.carMindesAngebot.push(parseFloat(test_carMindesAngebot))
          var carExpirationAblauf=$('#ctl00_m_p_d1_ASPxLabelAblaufdatum').text()
          carExpirationAblauf=carExpirationAblauf.slice(0,carExpirationAblauf.indexOf(' ')).split('.')
          carExpirationAblauf=carExpirationAblauf[2]+'-'+carExpirationAblauf[1]+'-'+carExpirationAblauf[0]
          listCARTV.carExpirationAblauf.push(carExpirationAblauf)
          listCARTV.carServiceID.push($('#ctl00_m_p_d1_ASPxLabelAngebot').text())
          var test_carMotorHubraum=$('#ctl00_m_p_d1_ASPxLabelHubraum').text()
          test_carMotorHubraum= test_carMotorHubraum.indexOf('.')>-1 ? parseFloat(test_carMotorHubraum):parseFloat(test_carMotorHubraum)/1000
          listCARTV.carMotorHubraum.push(Math.floor(parseFloat(test_carMotorHubraum)*10)*100)
          listCARTV.carMotorLeistung.push(parseInt($('#ctl00_m_p_d1_ASPxLabelLeistung').text()))

          console.log('INDEX: ',index);
          console.log(listCARTV.carManufacturer[index])

          try {
            await timeout(1000)
          } catch (error) {
            
          }
          let midPrice=0
          try {
            midPrice=parseFloat(await getMidPriceMobileDE(browser2,index,'ucuz'))
          } catch (error) {
            console.log(error)
          }
          if(!midPrice){console.log('midprice')}
          var makeNewBrowser=false
          // countOfNull=0
          countOfNull+=1
          while(midPrice==-1&&!makeNewBrowser){

            try {
              await timeout(1000) 
            } catch (error) {
              
            }
            makeNewBrowser=true
            try {
              midPrice=parseFloat(await getMidPriceMobileDE(browser2,index,'ucuz'))
            } catch (error) {
              console.log(error)
            }
            try {
              await timeout(1000) 
            } catch (error) {
              
            }
          }

          try {
            await timeout(1000)
          } catch (error) {
            
          }
          var clickedYearAndPriceMet=false
          if (!clickedYearAndPriceMet) {
            var yearim=listCARTV.carIRegYear[index]
            var carRepair_Kostenim=String(listCARTV.carRepair_Kosten[index])
            carRepair_Kostenim= carRepair_Kostenim.indexOf('.')>-1 ? parseFloat(carRepair_Kostenim):parseFloat(carRepair_Kostenim)/1000
            carRepair_Kostenim= (!carRepair_Kostenim) ? 0:carRepair_Kostenim
            var carWB_Kostenim=String(listCARTV.carWB_Kosten[index])
            carWB_Kostenim= carWB_Kostenim.indexOf('.')>-1 ? parseFloat(carWB_Kostenim):parseFloat(carWB_Kostenim)/1000
            carWB_Kostenim= (!carWB_Kostenim) ? 0:carWB_Kostenim
            var carMindesAngebotum=String(listCARTV.carMindesAngebot[index])
            carMindesAngebotum= carMindesAngebotum.indexOf('.')>-1 ? parseFloat(carMindesAngebotum):parseFloat(carMindesAngebotum)/1000
            carMindesAngebotum= (!carMindesAngebotum) ? 0:carMindesAngebotum
            var carMindesAngebotumMet=!(carMindesAngebotum && parseFloat(carMindesAngebotum)>0)
            var carWB_KostenimMet=!((carWB_Kostenim==0) || parseFloat(carWB_Kostenim)*0.4>parseFloat(10))
            var carRepair_KostenimMet=!(carRepair_Kostenim==0)
            var yearimMet=!(parseInt(yearim)<parseInt(2005) || parseInt(yearim)>parseInt(2015))
            clickedYearAndPriceMet=carMindesAngebotumMet&&carWB_KostenimMet&&yearimMet&&carRepair_KostenimMet
            // clickedYearAndPriceMet=true
            console.log(parseInt(yearim),parseFloat(carWB_Kostenim)*0.4,parseFloat(carMindesAngebotum))

          }
          if((midPrice==-2||midPrice==0||midPrice==-1)||(!clickedYearAndPriceMet)){
            try {
              console.log('clickedYearAndPrice DONTMET',listCARTV.carManufacturer[index].trim()) 
            } catch (error) {
              console.log(error);
            }
            // listCARTV.botCanDo[index]=false
            listCARTV.carMobileDEPrice.push(false)
            listCARTV.botCanDo.push(false)
            if(index==listCARTV.carAdId.length-1){
              addToExcel(lastListPageXofX)

              lastListIndexToGo+=1
              if(lastListIndexToGo>(listPageXTotalTemp-1)){
                lastListIndexToGo=0
                canGoTOCARTVagain=true
                try {
                  await browser.close()      
                } catch (error) {
                  console.log(error);
                }
                try {
                  await timeout(1000)
                } catch (error) {
                  
                }
                setTimeout(() => {
                  restartDyno()
                }, 10000);
                return
              }
              // canCallOtherFunc=true
              continue
            }
            canCallOtherFunc=true
            continue 
          }
          else{
            try {
              console.log('clickedYearAndPriceMet',listCARTV.carManufacturer[index].trim()) 
            } catch (error) {
              console.log(error);
            }
            midPrice*=1000
            midPrice=parseInt(midPrice)
            console.log(midPrice)
            listCARTV.carMobileDEPrice.push(midPrice)
            listCARTV.botCanDo.push(clickedYearAndPriceMet)
            if(canBidPrices){
              // console.log('aququ1')
              var firstDamagedPriceInputT='#ctl00_m_a_tccell'+String((lastListPageXofX-1)*100+index)+'_9 > table > tbody > tr > td:nth-child(2) > input[type="text"]'
              var firstDamagedPriceConfirmButtonT='#ctl00_m_a_tccell'+String((lastListPageXofX-1)*100+index)+'_9 > table > tbody > tr > td:nth-child(3) > button'
              try {
                await page.waitForSelector(firstDamagedPriceInputT,{visible:true})
              } catch (error) {
                console.log(error);
              }
              let firstDamagedPriceInputTEL=0
              try {
                firstDamagedPriceInputTEL=await page.$(firstDamagedPriceInputT)
              } catch (error) {
                console.log(error);
              }
              // countOfNull=0
              countOfNull+=1
              while(!firstDamagedPriceInputTEL){

                try {
                  firstDamagedPriceInputTEL=await page.$(firstDamagedPriceInputT)
                } catch (error) {
                  console.log(error);
                }
                try {
                  await timeout(1000)
                } catch (error) {
                  
                }
              }
              try {
                await page.type(firstDamagedPriceInputT,String(midPrice)) 
              } catch (error) {
                console.log(error);
              }
              let firstDamagedPriceConfirmButtonTEL=0
              try {
                firstDamagedPriceConfirmButtonTEL=await page.$(firstDamagedPriceConfirmButtonT)
              } catch (error) {
                console.log(error);
              }
              // countOfNull=0
              countOfNull+=1
              while(!firstDamagedPriceConfirmButtonTEL){

                try {
                  firstDamagedPriceConfirmButtonTEL=await page.$(firstDamagedPriceConfirmButtonT)
                } catch (error) {
                  console.log(error);
                }
                try {
                  await timeout(1000)
                } catch (error) {
                  
                }
              }
              try {
                await page.$eval(firstDamagedPriceConfirmButtonT, el => el.click()) 
              } catch (error) {
                console.log(error);
              }
              try {
                await page.click(firstDamagedPriceConfirmButtonT) 
              } catch (error) {
                console.log(error);
              }

              console.log('price was given')
            }
            if(index==listCARTV.carAdId.length-1){
              addToExcel(lastListPageXofX)

              lastListIndexToGo+=1
              if(lastListIndexToGo>(listPageXTotalTemp-1)){
                lastListIndexToGo=0
                canGoTOCARTVagain=true
                try {
                  await browser.close()      
                } catch (error) {
                  console.log(error);
                }
                try {
                  await timeout(1000)
                } catch (error) {
                  
                }
                setTimeout(() => {
                  restartDyno()
                }, 10000);
                return
              }
              // canCallOtherFunc=true
              continue
            }
            canCallOtherFunc=true
          }
          console.log(listCARTV.botCanDo[index])
  
          console.log('WB and Repair kosten ',listCARTV.carWB_Kosten[index],listCARTV.carRepair_Kosten[index])

  
          console.log('midPrice ',midPrice)
          console.log('BID ',listCARTV.carOfferBID[index],listCARTV.carBidWinningOffer[index])
          console.log(listCARTV.carManufacturer[index],listCARTV.carModel[index])

        }
      }
    }


    return


    var carExpirationAblaufDay=new Date(carExpirationAblauf)
    var today = new Date()
    var timeDiff = Math.abs(carExpirationAblaufDay.getTime() - today.getTime());
    var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)); 
    if(diffDays<2){doBidding=true}

  })();
}

function sendExcel(text){
  // let data=0
  workbook.xlsx.writeBuffer({base64: true})
  .then(async function(xlsx) {

      send_email('file test page: '+text,Buffer.from(xlsx).toString('base64'))

  })
  .catch(error => {
    console.log(error);
  });
  
  workbook.removeWorksheet(worksheet.id)
  worksheet = workbook.addWorksheet('Cars');
  // add column headers
  worksheet.columns = [
    { header: 'Hersteller', key: 'carManufacturer'},
    { header: 'Modell', key: 'carModel'},
    { header: 'Angebot', key: 'carOfferBID'},
    { header: 'Höchstgebot', key: 'carBidWinningOffer'},
    { header: 'Preis Prog.', key: 'carMobileDEPrice'},
    { header: 'WB-Wert', key: 'carWB_Kosten'},
    { header: 'Rep. Kosten', key: 'carRepair_Kosten'},
    { header: 'Mindestgebot', key: 'carMindesAngebot'},
    { header: 'AdId', key: 'carAdId'},
    { header: 'ServiceID', key: 'carServiceID'},
    { header: 'PLZ', key: 'carLocationZipcode'},
    { header: 'Erstzulassung', key: 'carIRegYear'},
    { header: 'Laufleistung', key: 'carMillYol'},
    { header: 'Hubraum', key: 'carMotorHubraum'},
    { header: 'Leistung', key: 'carMotorLeistung'}
  ];
  // return await data
}

const receiverEmail=process.env.receiver_email
function send_email(textim,file){
  // files     : [{filename: 'Report.xlsx', content: file}]
  // const receiverEmail=process.env.receiver_email
  // receiverEmail=String(receiverEmail)
  var msg = {
  to: receiverEmail,
  bcc: ['zurahubii@gmail.com'],
  from: 'qaqulya@qaqulya.com',
  subject: 'Sending is Fun',
  attachments: [
      {
        filename: 'Report.xlsx',
        content: file,
        contentId: 'Report.xlsx',
        disposition: "attachment"
      }
  ],
  text: textim,
  };
  
  // html: '<strong>and easy to do anywhere, even with Node.js</strong>',
  console.log('EMAIL is being sent to: '+String(receiverEmail));

  sgMail.send(msg)
  .then(data => {
    // console.log(data)
    console.log('EMAIL sent');
    // console.log(data);
    // console.log('restart done');
  })
  .catch(error => {
      console.log(error);
  })

}

function addToExcel(text){
  for (let index = 0; index < listCARTV.carAdId.length; index++) {
    if(listCARTV.botCanDo[index]==false)continue
    worksheet.addRow({
      carManufacturer: listCARTV.carManufacturer[index], 
      carModel: listCARTV.carModel[index],
      carOfferBID: listCARTV.carOfferBID[index],
      carBidWinningOffer: listCARTV.carBidWinningOffer[index],
      carMobileDEPrice: listCARTV.carMobileDEPrice[index],
      carWB_Kosten: listCARTV.carWB_Kosten[index],
      carRepair_Kosten: listCARTV.carRepair_Kosten[index],
      carMindesAngebot: listCARTV.carMindesAngebot[index],
      carAdId: listCARTV.carAdId[index],
      carServiceID: listCARTV.carServiceID[index],
      carLocationZipcode: listCARTV.carLocationZipcode[index],
      carIRegYear: listCARTV.carIRegYear[index],
      carMillYol: listCARTV.carMillYol[index],
      carMotorHubraum: listCARTV.carMotorHubraum[index],
      carMotorLeistung: listCARTV.carMotorLeistung[index]
    });

  }

  listCARTV.carOfferBID.length=0
  listCARTV.carBidWinningOffer.length=0
  listCARTV.carAdId.length=0
  listCARTV.carManufacturer.length=0
  listCARTV.carModel.length=0
  listCARTV.carIRegYear.length=0
  listCARTV.carEnginePetrolDiesel.length=0
  listCARTV.carMillYol.length=0
  listCARTV.carLocationZipcode.length=0
  listCARTV.carWB_Kosten.length=0
  listCARTV.carRepair_Kosten.length=0
  listCARTV.carMindesAngebot.length=0
  listCARTV.carExpirationAblauf.length=0
  listCARTV.carServiceID.length=0
  listCARTV.carMotorHubraum.length=0
  listCARTV.carMotorLeistung.length=0

  listCARTV.carMobileDEPrice.length=0
  listCARTV.botCanDo.length=0
  sendExcel(text)
  // let data=0
  // try {
  //   data=await sendExcel(text)
  // } catch (error) {
  //   console.log(error)
  // }
  // return await data
}

async function getMidPriceMobileDE(browser,index,ucuzYaUygun){



  
  // var searchSortRelevanceK='https://suchen.mobile.de/fahrzeuge/search.html?cn=DE&damageUnrepaired=ALSO_DAMAGE_UNREPAIRED&makeModelVariant1.makeId=3500&makeModelVariant1.modelId=6&minCubicCapacity=1900&minFirstRegistrationDate=2009&minMileage=163&minPowerAsArray=150&minPowerAsArray=KW&scopeId=C&sfmr=true&sortOption.sortBy=relevance&sortOption.sortOrder=ASCENDING'
  var searchSortRelevanceO='https://suchen.mobile.de/fahrzeuge/search.html?cn=DE&damageUnrepaired=ALSO_DAMAGE_UNREPAIRED&isSearchRequest=true'
  +'&makeModelVariant1.makeId='+'3500'+'&makeModelVariant1.modelId='+'48'
  +'&maxPowerAsArray=KW&minCubicCapacity='+'2400'+'&minFirstRegistrationDate='+'2008'+
  '&minMileage='+'105'+'&minPowerAsArray='+'160'
  +'&minPowerAsArray=KW&scopeId=C&sfmr=true&sortOption.sortBy=relevance&sortOption.sortOrder=ASCENDING'
  var searchSortAscendingO='https://suchen.mobile.de/fahrzeuge/search.html?cn=DE&damageUnrepaired=ALSO_DAMAGE_UNREPAIRED&isSearchRequest=true'
  +'&makeModelVariant1.makeId='+'3500'+'&makeModelVariant1.modelId='+'48'+'&minCubicCapacity='+'2400'
  +'&minFirstRegistrationDate='+'2008'+'&minMileage='+'105'+'&minPowerAsArray='+'160'
  +'&minPowerAsArray=KW&scopeId=C&sfmr=true&sortOption.sortBy=searchNetGrossPrice&sortOption.sortOrder=ASCENDING'
  var nextPageUrlAdd='&pageNumber='+'2'
  var carMark=-1
  var carModel=-1
  var carMarkString=-1
  var tempChangedCarManufacturer=listCARTV.carManufacturer[index]
  // if(listCARTV.carManufacturer[index]=='VW'){
  //   listCARTV.carManufacturer[index]='Volkswagen'
  // }
  switch (listCARTV.carManufacturer[index].toLowerCase()) {
    case 'vw':
      listCARTV.carManufacturer[index]='Volkswagen'
      break;
    case 'mercedes':
      listCARTV.carManufacturer[index]='Mercedes-Benz'
      break;
    case 'citroen':
      listCARTV.carManufacturer[index]='Citroen'
      break;
    case 'citroën':
      listCARTV.carManufacturer[index]='Citroen'
      break;
  }
  for (const mark in ALLCarMarks) {
    var markLengthMatch=listCARTV.carManufacturer[index].toLowerCase().indexOf(' ')>-1 ? listCARTV.carManufacturer[index].toLowerCase().split(' ')[0].trim():listCARTV.carManufacturer[index].toLowerCase().trim()
    markLengthMatch= markLengthMatch==String(ALLCarMarks[mark]).toLowerCase().trim()
    if(listCARTV.carManufacturer[index].toLowerCase().indexOf(ALLCarMarks[mark].toLowerCase())>-1 && markLengthMatch){
      carMark=mark
      carMarkString=String(ALLCarMarks[mark])
      break
    }
  }
  listCARTV.carManufacturer[index]=tempChangedCarManufacturer
  if(carMark==-1){
    console.log(listCARTV.carManufacturer[index])
    return -2
  }
// !listCARTV.carWB_Kosten[index] || parseFloat(listCARTV.carWB_Kosten[index])==0
  if(listCARTV.carWB_Kosten[index] && parseFloat(listCARTV.carWB_Kosten[index])!=0 && listCARTV.carWB_Kosten[index]!=''){
    var carMindesAngebot=listCARTV.carMindesAngebot[index]
    carMindesAngebot= (carMindesAngebot && parseFloat(carMindesAngebot)!=0) ? parseFloat(carMindesAngebot):0 
    var multiplier=getMultiplier(carMarkString)
    var coefficent=parseFloat(listCARTV.carRepair_Kosten[index])/parseFloat(listCARTV.carWB_Kosten[index])
    var isInRange=coefficent<parseFloat(1.8) && coefficent>parseFloat(0.8)
    var isTotalSchaden=coefficent>parseFloat(1.8)
    var isBischenSchaden=coefficent<parseFloat(0.8)
    var calculatedBidPrice=0
    if(isInRange){calculatedBidPrice=parseFloat(listCARTV.carWB_Kosten[index])*multiplier}
    if(isTotalSchaden){calculatedBidPrice=parseFloat(listCARTV.carWB_Kosten[index])*0.1}
    // if(!isTotalSchaden && !isInRange){calculatedBidPrice=(parseFloat(listCARTV.carWB_Kosten[index])-parseFloat(listCARTV.carRepair_Kosten[index]))*0.4}
    if(!isTotalSchaden && !isInRange){calculatedBidPrice=parseFloat(listCARTV.carWB_Kosten[index])*multiplier}
    // if(isBischenSchaden){calculatedBidPrice=parseFloat(listCARTV.carWB_Kosten[index])*multiplier}
    if(isBischenSchaden) return -2
    if(carMindesAngebot!=0 && calculatedBidPrice>carMindesAngebot){
      calculatedBidPrice=carMindesAngebot*1.1
    }
    return calculatedBidPrice
  }
  return -2
  // carMarkString=carMarkString.charAt(0).toUpperCase() + carMarkString.slice(1).toLowerCase();
  var foundModels=[]
  var foundFirstModelIndex=10000
  for (const model in ALLCarModels[carMarkString]) {
    var dashIndex =ALLCarModels[carMarkString][model].indexOf(' - ')
    var cond1= dashIndex==-1 && listCARTV.carModel[index].toLowerCase().indexOf(ALLCarModels[carMarkString][model].toLowerCase())>-1
    // cond1=cond1&& listCARTV.carModel[index].toLowerCase().slice(listCARTV.carModel[index].toLowerCase().indexOf(ALLCarModels[carMarkString][model].toLowerCase()),ALLCarModels[carMarkString][model].toLowerCase().length)==ALLCarModels[carMarkString][model].toLowerCase()
    // var cond2= dashIndex>-1 && listCARTV.carModel[index].toLowerCase().indexOf(ALLCarModels[carMarkString][model].toLowerCase().slice(0,dashIndex-1))>-1
    var cond3= dashIndex>-1 && listCARTV.carModel[index].toLowerCase().indexOf(ALLCarModels[carMarkString][model].toLowerCase().slice(dashIndex+2,).trim())>-1
    // cond3=cond3&& listCARTV.carModel[index].toLowerCase().slice(ALLCarModels[carMarkString][model].toLowerCase().slice(dashIndex+2,).trim(),ALLCarModels[carMarkString][model].toLowerCase().slice(dashIndex+2,).trim().length)==ALLCarModels[carMarkString][model].toLowerCase().slice(dashIndex+2,).trim()
    var cond4= listCARTV.carModel[index].toLowerCase().indexOf(ALLCarModels[carMarkString][model].toLowerCase().trim())>-1
    // cond4=cond4&& listCARTV.carModel[index].toLowerCase().slice(listCARTV.carModel[index].toLowerCase().indexOf(ALLCarModels[carMarkString][model].toLowerCase().trim()),ALLCarModels[carMarkString][model].toLowerCase().trim().length)==ALLCarModels[carMarkString][model].toLowerCase().trim()
    var condSplit= dashIndex>-1 && listCARTV.carModel[index].toLowerCase().indexOf(ALLCarModels[carMarkString][model].toLowerCase().split(' - ')[1].trim())>-1

    if((cond1||cond3||cond4||condSplit)){
      carModel=model
      break
    }

  }

  if (carModel==-1) {
    for (const model in ALLCarModels[carMarkString]) {
      if((listCARTV.carModel[index].toLowerCase().indexOf("cee'd")>-1 || listCARTV.carModel[index].toLowerCase().indexOf("Cee¿d")>-1) && carMarkString=='Kia'){
        carModel=listCARTV.carModel[index].toLowerCase().indexOf('Sportswagon')==-1 ? '26':'31'
        break
      }
      var dashIndex =ALLCarModels[carMarkString][model].indexOf(' - ')
      var condSpaceMerged= dashIndex>-1 && listCARTV.carModel[index].toLowerCase().replace(' ','').indexOf(ALLCarModels[carMarkString][model].toLowerCase().split(' - ')[1].trim())>-1
      var condSpaceMerged= dashIndex==-1 && listCARTV.carModel[index].toLowerCase().replace(' ','').indexOf(ALLCarModels[carMarkString][model].toLowerCase().trim())>-1
      if(condSpaceMerged){
        carModel=model
        break
      }
    }
  }
  // https://
  var searchSortRelevanceO2='https://suchen.mobile.de/fahrzeuge/search.html?cn=DE&damageUnrepaired=ALSO_DAMAGE_UNREPAIRED&isSearchRequest=true'
  +'&makeModelVariant1.makeId='+carMark+'&makeModelVariant1.modelId='+carModel
  +'&maxPowerAsArray=KW&minCubicCapacity='+listCARTV.carMotorHubraum[index]+'&minFirstRegistrationDate='+listCARTV.carIRegYear[index]+
  '&minMileage='+listCARTV.carMillYol[index]+'&minPowerAsArray='+listCARTV.carMotorLeistung[index]
  +'&minPowerAsArray=KW&scopeId=C&sfmr=true&sortOption.sortBy=relevance&sortOption.sortOrder=ASCENDING'
  var searchSortAscending='https://suchen.mobile.de/fahrzeuge/search.html?cn=DE&damageUnrepaired=ALSO_DAMAGE_UNREPAIRED&isSearchRequest=true'
  +'&makeModelVariant1.makeId='+carMark+'&makeModelVariant1.modelId='+carModel+'&minCubicCapacity='+listCARTV.carMotorHubraum[index]
  +'&minFirstRegistrationDate='+listCARTV.carIRegYear[index]+'&minMileage='+listCARTV.carMillYol[index]+'&minPowerAsArray='+listCARTV.carMotorLeistung[index]
  +'&minPowerAsArray=KW&scopeId=C&sfmr=true&sortOption.sortBy=searchNetGrossPrice&sortOption.sortOrder=ASCENDING'
  var searchSortRelevance='https://suchen.mobile.de/fahrzeuge/search.html?cn=DE&damageUnrepaired=ALSO_DAMAGE_UNREPAIRED&isSearchRequest=true'
  +'&makeModelVariant1.makeId='+carMark+'&makeModelVariant1.modelId='+carModel+'&minCubicCapacity='+listCARTV.carMotorHubraum[index]
  +'&minFirstRegistrationDate='+listCARTV.carIRegYear[index]+'&minMileage='+listCARTV.carMillYol[index]+'&minPowerAsArray='+listCARTV.carMotorLeistung[index]
  +'&minPowerAsArray=KW&scopeId=C&sfmr=true&sortOption.sortBy=relevance&sortOption.sortOrder=ASCENDING'
  cheerioSearchURL=searchSortRelevance

  let response=false

  // (Number(finalPrice/carcount).toFixed(3),carcount)
  datamMobileDE=0
  // await browser.close();
  cheerioSearchURL=searchSortAscending
  cheerioSearchURL= ucuzYaUygun.indexOf('ucuz')>-1 ? searchSortAscending:searchSortRelevance
  // cheerioSearchURL=searchSortRelevance
  let pageMobileDE2 = 0
  try {
    pageMobileDE2=await browser.newPage();
  } catch (error) {
    console.log(error);
    
  }

  response=false
  errorInGoto=false
  try {
    response=await pageMobileDE2.goto(cheerioSearchURL, {
      timeout: 3000000
    });
    // response=await pageMobileDE2.goto(cheerioSearchURL)
  } catch (error) {
    // response=false
    console.log(error)
    errorInGoto=true
  }
  if(errorInGoto){
    return -1
  }
  // datamMobileDE=await response.text()
  // (datamMobileDE)
  var datamMobileDELoaded=false
  var gotoCheerioTimes=0
  var automatedBlock=false
  while (datamMobileDE) {
    console.log(carMark,carModel,carMarkString)
    console.log('uygunluq',ALLCarMarks[carMark],ALLCarModels[carMarkString][carModel])
    if(datamMobileDE.indexOf('Keine Inserate gefunden')>-1){
      // (datamMobileDE)
      try {
        console.log('urlblyat',await response.url()) 
      } catch (error) {
        console.log(error);
      }
      console.log(carMark,carModel,carMarkString)
      for (const key in listCARTV) {
        console.log(key,listCARTV[key][index])
      }
      return -1
    }
    console.log('goto cheerio')
    // await pageMobileDE2._client.send("Page.stopLoading");
    // await page.waitFor(1000)
    var $ = cheerio.load(datamMobileDE)
    $('div.cBox-body--resultitem.dealerAd.rbt-reg.rbt-no-top').each(function(i, element){
      var test_nameMD=$(element).find('.h3.u-text-break-word').text()
      var test_priceMD=$(element).find('.h3.u-block').text()
      console.log(test_priceMD)
      if(test_priceMD){
        datamMobileDELoaded=true
        return false
      }
    })
    if(datamMobileDELoaded){
      // await pageMobileDE2._client.send("Page.stopLoading");
      break
    }
    try {
      await timeout(1000) 
    } catch (error) {
      
    }
    if(datamMobileDELoaded)continue
    if(datamMobileDE.indexOf('Unfortunately, automated access to this page was denied')>-1){
      console.log('automated block')
      automatedBlock=true
      break
      try {
        // response=await pageMobileDE2.goto(cheerioSearchURL, {
        //   timeout: 3000000
        // });
        datamMobileDE=false
        // await pageMobileDE2.evaluate( ()=> window.stop());
        try {
          await pageMobileDE2._client.send("Page.stopLoading");
        } catch (error) {
          console.log(error); 
        }
        try {
          await timeout(1000) 
        } catch (error) {
          
        }
        try {
          response=await pageMobileDE2.goto(cheerioSearchURL) 
        } catch (error) {
          console.log(error);
        }
        // await timeout(1000)
      } catch (error) {
        // response=false
        console.log(error)
      }
    }
    return -1
    try {
      await timeout(1000)
    } catch (error) {
      
    }
  }
  if(automatedBlock){return -1}
  // if(!datamMobileDELoaded){return -1}
  // await timeout(1000)
  if(!datamMobileDE){
    console.log('dataMobileDe nan')
    try {
      await timeout(1000)
    } catch (error) {
      
    }
    return -1
  }
  datamMobileDELoaded=false
  while(!datamMobileDELoaded){
    // ('datamMobileDELoaded 2')
    var $ = cheerio.load(datamMobileDE)
    var finalPrice2=0
    var carcount2=0
    var filterWordsMobileDE=['Beschädigt','Nicht fahrtauglich']
    $('div.cBox-body--resultitem.dealerAd.rbt-reg.rbt-no-top').each(function(i, element){
      var test_nameMD=$(element).find('.h3.u-text-break-word').text()
      var test_priceMD=$(element).find('.h3.u-block').text()
      // (test_priceMD)
      if(test_priceMD){
        datamMobileDELoaded=true
        return false
      }
    })
    if(datamMobileDELoaded){
      try {
        await pageMobileDE2._client.send("Page.stopLoading");
      } catch (error) {
        console.log(error);
      }
    }
    try {
      await timeout(1000) 
    } catch (error) {
      
    }
  }
  var $ = cheerio.load(datamMobileDE)
  var finalPrice2=0
  var carcount2=1
  var filterWordsMobileDE=['Beschädigt','Nicht fahrtauglich']
  $('div.cBox-body--resultitem.dealerAd.rbt-reg.rbt-no-top').each(function(i, element){
    var test_nameMD=$(element).find('.h3.u-text-break-word').text()
    var test_priceMD=$(element).find('.h3.u-block').text()
    var test_descriptionD=$(element).find('.vehicle-data--ad-with-price-rating-label').find(':nth-child(2)').text()
    var beschadigt=''
    if(test_descriptionD.indexOf(filterWordsMobileDE[0])>-1 || test_descriptionD.indexOf(filterWordsMobileDE[1])>-1){
      beschadigt='Beschädigt'
    }
    if(beschadigt==''||true){
      if(test_priceMD.indexOf('.')==-1){
        finalPrice2+=parseFloat(test_priceMD)*0.001
      }
      else{
        finalPrice2+=parseFloat(test_priceMD)
      }
      carcount2+=1
    }

  })

  midPrice=Number(finalPrice2/carcount2).toFixed(3)

  try {
    await pageMobileDE2.close()
  } catch (error) {
    console.log(error);
  }
  return midPrice
}

function getMultiplier(carMarkString){
  var multiplier=0
  switch (carMarkString) {
    case 'Seat':
    case 'Opel':
    case 'Renault':
    case 'Peugeot':
    case 'Volvo':
    case 'Mitsubishi':
    case 'Suzuki':
    case 'Saab':
    case 'Subaru':
    case 'Chevrolet':
    case 'Fiat':
      multiplier=0.3
      break;
    case 'Citroen':
    case 'Dacia':
    case 'Nissan':
    case 'Skoda':
    case 'Ford':
    case 'Honda':
    case 'Hyundai':
    case 'Kia':
      multiplier=0.35
      break;
    case 'Mazda':
    case 'Toyota':
    case 'Volkswagen':
    case 'Mercedes-Benz':
    case 'BMW':
    case 'Audi':
      multiplier=0.4
      break;
  }
  return multiplier
}


function GetSubstringIndex(str, substring, n) {
  var times = 0, index = null;
  while (times < n && index !== -1) {
      index = str.indexOf(substring, index+1);
      times++;
  }
  return index;
}

function timeout(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function restartDyno() {
  heroku.delete('/apps/makasin-does/dynos')
  .then(data => {
          console.log(data);
          console.log('restart done');
  })
  .catch(error => {
          console.log(error);
  })
}

// let browser=0
function schedule() {
  try {
    (async () => {
      // const browser = await puppeteer.launch();
      let browser = 0
      // if(canGoTOCARTVagain){
      try {
        browser=await puppeteer.launch({args: ['--no-sandbox', '--disable-setuid-sandbox']})
      } catch (error) {
        console.log(error)
      }
      // }
      // const browser = await puppeteer.launch({
      //   args: ['--enable-features=NetworkService'],
      //   ignoreHTTPSErrors: true
      // })
      try{
          main(browser)
      }
      catch(error){
          console.log(error)
          try {
            await browser.close();
          } catch (error) {
            console.log(error)
          }
      }
    })();
  } catch (error) {
    
  }
}

function interval(func, wait, times){
  var interv = function(w, t){
      return function(){
          if(typeof t === "undefined" || t-- > 0){
              setTimeout(interv, w);
              try{
                  func.call(null);
              }
              catch(e){
                  t = 0;
                  throw e.toString();
              }
          }
      };
  }(wait, times);

  setTimeout(interv, wait);
};

var setIntervalSynchronous = function (func, delay) {
  var intervalFunction, timeoutId, clear;
  // Call to clear the interval.
  clear = function () {
    clearTimeout(timeoutId);
  };
  intervalFunction = function () {
    func();
    timeoutId = setTimeout(intervalFunction, delay);
  }
  // Delay start.
  timeoutId = setTimeout(intervalFunction, delay);
  // You should capture the returned function for clearing.
  return clear;
};
  
function setTimeoutCheck() {
  if(canCallOtherFunc){
    canCallOtherFunc=false
    schedule()
  }
  else{
    setTimeout(() => {
      setTimeoutCheck()
    }, 60000);
  }
}

function resetConfigVars() {
  try {
      heroku.patch('/apps/makasin-does/config-vars',{body:{'turnoff':' '}})
      .then(data => {
              console.log('resetConfigVars done');
      })
      .catch(error => {
              console.log(error);
      })      
  } catch (error) {
      console.log(error);
  }
}

function ozumuSondur() {
  try {
      heroku.patch('/apps/makasin-does/formation',{body:{updates:[{"quantity":0,"size":"Free","type":"worker"}]}})
      .then(data => {
              console.log('ozun sondurdum done');
      })
      .catch(error => {
              console.log(error);
      })      
  } catch (error) {
      console.log(error);
  }
}


var continueInterval=true
var minutes = 20, the_interval = minutes * 60 * 1000;
setInterval(function() {
  if(continueInterval){
    if(countSecond!=countOfNull){countSecond=countOfNull}
    else{
      console.log('RESTARTING AS IT STUCK');
      restartDyno()
    }

  }
}, the_interval);
setInterval(function() {
  if(continueInterval){
    var sondurumYaYox=process.env.turnoff
    sondurumYaYox=String(sondurumYaYox)
    if(sondurumYaYox && (sondurumYaYox.toLowerCase()=='ok' || sondurumYaYox.trim().length>0)){
        continueInterval=false
        resetConfigVars()
        ozumuSondur()
    }
  }
},10000)
schedule()