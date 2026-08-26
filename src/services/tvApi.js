export async function fetchTvData() {
  const url = `https://tv-scraper-production.up.railway.app/`;

  try {
    const response = await fetch(url);
    const result = await response.json();
    console.log(result.info);
    return result;
  } catch (error) {
    console.error(error);
    return [];
  }
}
export const simpleData = [
  {
    Kanal: "ARD",
    KanalLogo:
      "https://images.tvmovie.de/ard-programm-heute,id=a3d06aed,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Gefragt - Gejagt",
      Start: "18:00",
      End: "18:50",
      Category: "Quiz",
      Link: "https://www.tvmovie.de/tv/gefragt-gejagt-epg-229099264",
      Thumbnail:
        "https://images.tvmovie.de/gefragt-gejagt-2025,id=a5300ee4,b=tvmovie,w=500,ca=44.3,0,100,100,rm=sk.webp",
      Progress: 0,
    },
    after: {
      Program: "Großstadtrevier",
      Start: "18:50",
      End: "19:45",
      Category: "Polizeiserie",
      Link: "https://www.tvmovie.de/tv/grossstadtrevier-epg-229099267",
      Thumbnail:
        "https://images.tvmovie.de/2-xxxviii-f520-grossstadtrevier,id=09819bca,b=tvmovie,w=500,ca=21.14,0,86.86,100,rm=sk.webp",
      Progress: 16,
    },
  },
  {
    Kanal: "ZDF",
    KanalLogo:
      "https://images.tvmovie.de/984b9340-df22-11e5-9740-93b852ac6756-1,id=4bc9948d,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "SOKO Potsdam",
      Start: "18:00",
      End: "19:00",
      Category: "Krimiserie",
      Link: "https://www.tvmovie.de/tv/soko-potsdam-epg-229060052",
      Thumbnail:
        "https://images.tvmovie.de/4c975f58f4611bbdf148e459a15cd4699a835af9,id=20f9a34d,b=tvmovie,w=500,ca=0.00,0.00,65.99,100.00,rm=sk.webp",
      Progress: 98,
    },
    after: {
      Program: "heute",
      Start: "19:00",
      End: "19:20",
      Category: "Nachrichten",
      Link: "https://www.tvmovie.de/tv/heute-epg-229060056",
      Thumbnail:
        "https://images.tvmovie.de/zdf-heute,id=79c7e935,b=tvmovie,w=500,ca=22.88,0,79.13,100,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "RTL",
    KanalLogo:
      "https://images.tvmovie.de/rtl-logo-1,id=ea582ac5,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "RTL Aktuell",
      Start: "18:45",
      End: "19:05",
      Category: "Nachrichten",
      Link: "https://www.tvmovie.de/tv/rtl-aktuell-epg-229196319",
      Thumbnail:
        "https://images.tvmovie.de/062b0ded4dd517ef861b3237a1292bbe5f9df23a,id=0f2e1c1c,b=tvmovie,w=500,ca=0.87,0.00,57.12,100.00,rm=sk.webp",
      Progress: 69,
    },
    after: {
      Program: "Alles was zählt",
      Start: "19:05",
      End: "19:40",
      Category: "Daily Soap",
      Link: "https://www.tvmovie.de/tv/alles-was-zaehlt-epg-229196328",
      Thumbnail:
        "https://images.tvmovie.de/b29bc26c490f675bd7944c343252bd93878d2600,id=a8ecee47,b=tvmovie,w=500,ca=27.86,0.00,84.14,100.00,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "SAT.1",
    KanalLogo:
      "https://images.tvmovie.de/sat1-3d-bm-rgb-1,id=da2e0d7c,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Lenßen übernimmt",
      Start: "18:30",
      End: "19:00",
      Category: "Doku-Soap",
      Link: "https://www.tvmovie.de/tv/lenssen-uebernimmt-epg-229177688",
      Thumbnail:
        "https://images.tvmovie.de/ingo-lenssen,id=bbc46560,b=tvmovie,w=500,ca=16.67,0,83.33,100,rm=sk.webp",
      Progress: 96,
    },
    after: {
      Program: "Die Landarztpraxis - Team Sonnenhof",
      Start: "19:00",
      End: "19:45",
      Category: "Daily Soap",
      Link: "https://www.tvmovie.de/tv/die-landarztpraxis-team-sonnenhof-epg-229177691",
      Thumbnail:
        "https://images.tvmovie.de/die-landarztpraxis-team-sonnenhof,id=0a41fbbb,b=tvmovie,w=500,ca=19.89,0,86.11,100,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "PRO 7",
    KanalLogo:
      "https://images.tvmovie.de/989baf10-df22-11e5-9740-93b852ac6756-1,id=87aefbd7,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Die Simpsons",
      Start: "18:40",
      End: "19:05",
      Category: "Zeichentrickserie",
      Link: "https://www.tvmovie.de/tv/die-simpsons-epg-229250007",
      Thumbnail:
        "https://images.tvmovie.de/4d832db562ebe2d372666ec47450a84e78fd81e7,id=2243b6d2,b=tvmovie,w=500,ca=0.00,0.00,91.63,100.00,rm=sk.webp",
      Progress: 75,
    },
    after: {
      Program: "Galileo",
      Start: "19:05",
      End: "20:15",
      Category: "Wissenschaftsmagazin",
      Link: "https://www.tvmovie.de/tv/galileo-epg-229250014",
      Thumbnail:
        "https://images.tvmovie.de/galileo,id=24723067,b=tvmovie,w=500,ca=21.87,0,78.13,100,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "RTL2",
    KanalLogo:
      "https://images.tvmovie.de/rtlzwei-logo-2019,id=c0b6592e,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Hartz und herzlich - Tag für Tag Rostock",
      Start: "18:05",
      End: "19:05",
      Category: "Doku-Soap",
      Link: "https://www.tvmovie.de/tv/hartz-und-herzlich-tag-fuer-tag-rostock-epg-229196540",
      Thumbnail:
        "https://images.tvmovie.de/3bad0539dab1296461f4d4a06b62f8ac9bab7fd2,id=2edb9cbb,b=tvmovie,w=500,ca=16.86,0.00,73.14,100.00,rm=sk.webp",
      Progress: 90,
    },
    after: {
      Program: "Berlin - Tag & Nacht",
      Start: "19:05",
      End: "20:15",
      Category: "Daily Soap",
      Link: "https://www.tvmovie.de/tv/berlin-tag-und-nacht-epg-229196542",
      Thumbnail:
        "https://images.tvmovie.de/3798e9d9c9756b92d1fc393f467841957e2d5645,id=26618aa2,b=tvmovie,w=500,ca=28.87,0.00,85.13,100.00,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "KABEL 1",
    KanalLogo:
      "https://images.tvmovie.de/k1-2d-bm-rgb-1,id=c8c242d7,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Mein Lokal, Dein Lokal - Der Profi kommt",
      Start: "17:55",
      End: "18:55",
      Category: "Reportage",
      Link: "https://www.tvmovie.de/tv/mein-lokal-dein-lokal-der-profi-kommt-epg-229162168",
      Thumbnail:
        "https://images.tvmovie.de/mein-lokal-dein-lokal,id=7a68fbe9,b=tvmovie,w=500,ca=33.33,0,100,100,rm=sk.webp",
      Progress: 0,
    },
    after: {
      Program: "Achtung Kontrolle! Wir kümmern uns drum",
      Start: "18:55",
      End: "20:15",
      Category: "Doku-Soap",
      Link: "https://www.tvmovie.de/tv/achtung-kontrolle-wir-kuemmern-uns-drum-epg-229162073",
      Thumbnail:
        "https://images.tvmovie.de/achtung-kontrolle-wir-kuemmern-uns-drum,id=658d793b,b=tvmovie,w=500,ca=5.67,0,72.33,100,rm=sk.webp",
      Progress: 5,
    },
  },
  {
    Kanal: "VOX",
    KanalLogo:
      "https://images.tvmovie.de/98b55190-df22-11e5-9740-93b852ac6756-1,id=c2707854,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "First Dates - Ein Tisch für zwei",
      Start: "18:00",
      End: "19:00",
      Category: "Datingshow",
      Link: "https://www.tvmovie.de/tv/first-dates-ein-tisch-fuer-zwei-epg-229208578",
      Thumbnail:
        "https://images.tvmovie.de/epg-16-9,id=62e71af4,b=tvmovie,w=500,ca=21.88,0.00,78.13,100.00,rm=sk.webp",
      Progress: 98,
    },
    after: {
      Program: "Das perfekte Dinner",
      Start: "19:00",
      End: "20:15",
      Category: "Doku-Soap",
      Link: "https://www.tvmovie.de/tv/das-perfekte-dinner-epg-229208581",
      Thumbnail:
        "https://images.tvmovie.de/d5d6d35fab930bf5aeacd936b4d71211ea32f0a2,id=d1b7ec24,b=tvmovie,w=500,ca=25.00,0.00,100.00,100.00,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "ARTE",
    KanalLogo:
      "https://images.tvmovie.de/9c808a60-df22-11e5-9740-93b852ac6756-1,id=ed828617,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Tschechiens rauer Norden - Der Wald in den Wolken",
      Start: "18:30",
      End: "19:20",
      Category: "Dokumentation",
      Link: "https://www.tvmovie.de/tv/tschechiens-rauer-norden-der-wald-in-den-wolken-epg-228636402",
      Thumbnail:
        "https://images.tvmovie.de/3a59ad6812d2723c11ff7d73c1fd34501361cb14,id=989086bd,b=tvmovie,w=500,ca=13.00,0.00,79.00,100.00,rm=sk.webp",
      Progress: 58,
    },
    after: {
      Program: "Arte Journal",
      Start: "19:20",
      End: "19:40",
      Category: "Nachrichten",
      Link: "https://www.tvmovie.de/tv/arte-journal-epg-228636405",
      Thumbnail:
        "https://images.tvmovie.de/journal,id=7cd28a2c,b=tvmovie,w=500,ca=0,0,56.25,100,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "3SAT",
    KanalLogo:
      "https://images.tvmovie.de/3sat-2019,id=74b96f06,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Terra X",
      Start: "18:15",
      End: "19:00",
      Category: "Dokumentation",
      Link: "https://www.tvmovie.de/tv/terra-x-epg-228998225",
      Thumbnail:
        "https://images.tvmovie.de/4c6d7953b0287e135e0b1f48bc9cac2e35b3bc15,id=5dbc7af1,b=tvmovie,w=500,ca=22.88,0.00,79.13,100.00,rm=sk.webp",
      Progress: 97,
    },
    after: {
      Program: "heute",
      Start: "19:00",
      End: "19:18",
      Category: "Nachrichten",
      Link: "https://www.tvmovie.de/tv/heute-epg-228998251",
      Thumbnail:
        "https://images.tvmovie.de/zdf-heute,id=79c7e935,b=tvmovie,w=500,ca=22.88,0,79.13,100,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "Tele 5",
    KanalLogo:
      "https://images.tvmovie.de/tele5-logo-1,id=2cb4ecdd,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Star Trek - Das nächste Jahrhundert",
      Start: "18:10",
      End: "19:05",
      Category: "Science-Fiction-Serie",
      Link: "https://www.tvmovie.de/tv/star-trek-das-naechste-jahrhundert-epg-228999257",
      Thumbnail:
        "https://images.tvmovie.de/83529b825e776af3056c18871499f7941a728a16,id=ffc8fa2f,b=tvmovie,w=500,ca=12.23,0.00,79.77,100.00,rm=sk.webp",
      Progress: 89,
    },
    after: {
      Program: "Star Trek - Das nächste Jahrhundert",
      Start: "19:05",
      End: "20:15",
      Category: "Science-Fiction-Serie",
      Link: "https://www.tvmovie.de/tv/star-trek-das-naechste-jahrhundert-epg-228999258",
      Thumbnail:
        "https://images.tvmovie.de/5eabc0624c0f80560d98b152d878aa84ad26785c,id=77eb3dd9,b=tvmovie,w=500,ca=0.46,0.00,69.54,100.00,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "ZDF neo",
    KanalLogo:
      "https://images.tvmovie.de/zdfneo-logo,id=2d7fa3d9,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Bares für Rares",
      Start: "18:30",
      End: "19:20",
      Category: "Doku-Soap",
      Link: "https://www.tvmovie.de/tv/bares-fuer-rares-epg-229080081",
      Thumbnail:
        "https://images.tvmovie.de/bares-fuer-rares,id=3eecc96c,b=tvmovie,w=500,ca=22.88,0,79.13,100,rm=sk.webp",
      Progress: 58,
    },
    after: {
      Program: "Bares für Rares",
      Start: "19:20",
      End: "20:15",
      Category: "Doku-Soap",
      Link: "https://www.tvmovie.de/tv/bares-fuer-rares-epg-229080022",
      Thumbnail:
        "https://images.tvmovie.de/bares-fuer-rares,id=3eecc96c,b=tvmovie,w=500,ca=22.88,0,79.13,100,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "NITRO",
    KanalLogo:
      "https://images.tvmovie.de/nitro-1,id=c77d1f7d,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "King of Queens",
      Start: "18:20",
      End: "18:50",
      Category: "Sitcom",
      Link: "https://www.tvmovie.de/tv/king-of-queens-epg-229260413",
      Thumbnail:
        "https://images.tvmovie.de/76c8e3290cd1e7329df9db7036497a51a88068d9,id=d9fcd798,b=tvmovie,w=500,ca=18.77,0.00,95.23,100.00,rm=sk.webp",
      Progress: 0,
    },
    after: {
      Program: "King of Queens",
      Start: "18:50",
      End: "19:10",
      Category: "Sitcom",
      Link: "https://www.tvmovie.de/tv/king-of-queens-epg-229260415",
      Thumbnail:
        "https://images.tvmovie.de/0c22c3370f2972298320eb9116fd8bf09317d6fd,id=b264a765,b=tvmovie,w=500,ca=11.88,0.00,68.13,100.00,rm=sk.webp",
      Progress: 44,
    },
  },
  {
    Kanal: "ONE",
    KanalLogo:
      "https://images.tvmovie.de/one-logo,id=80e076a3,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Sturm der Liebe",
      Start: "18:40",
      End: "19:25",
      Category: "Telenovela",
      Link: "https://www.tvmovie.de/tv/sturm-der-liebe-epg-229173068",
      Thumbnail:
        "https://images.tvmovie.de/cc787b6071f2c9b0d17040b3bc62b74ccd9c1510,id=93a89096,b=tvmovie,w=500,ca=4.24,0.00,73.76,100.00,rm=sk.webp",
      Progress: 42,
    },
    after: {
      Program: "Sturm der Liebe",
      Start: "19:25",
      End: "20:15",
      Category: "Telenovela",
      Link: "https://www.tvmovie.de/tv/sturm-der-liebe-epg-229173070",
      Thumbnail:
        "https://images.tvmovie.de/sturm-der-liebe,id=4b989c3e,b=tvmovie,w=500,ca=21.65,0,88.35,100,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "sixx",
    KanalLogo:
      "https://images.tvmovie.de/9937a0f0-df22-11e5-9740-93b852ac6756-1,id=2177231c,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Desperate Housewives",
      Start: "18:30",
      End: "19:25",
      Category: "Dramedyserie",
      Link: "https://www.tvmovie.de/tv/desperate-housewives-epg-229235504",
      Thumbnail:
        "https://images.tvmovie.de/4f415a2c7b51302aa30191038a052daac2ac1069,id=2643aeb6,b=tvmovie,w=500,ca=33.33,0.00,100.00,100.00,rm=sk.webp",
      Progress: 52,
    },
    after: {
      Program: "Desperate Housewives",
      Start: "19:25",
      End: "20:15",
      Category: "Dramedyserie",
      Link: "https://www.tvmovie.de/tv/desperate-housewives-epg-229235502",
      Thumbnail:
        "https://images.tvmovie.de/93583f0e70008c39791701c82f0518d3876292c9,id=ff69bfe3,b=tvmovie,w=500,ca=8.37,0.00,83.63,100.00,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "SAT.1 Gold",
    KanalLogo:
      "https://images.tvmovie.de/sat1gold,id=9cdd0e14,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Diagnose: Mord",
      Start: "18:05",
      End: "19:00",
      Category: "Krimiserie",
      Link: "https://www.tvmovie.de/tv/diagnose-mord-epg-229204066",
      Thumbnail:
        "https://images.tvmovie.de/a3789430e54430d9178e75392ad5abd25a0aacc3,id=dd0b5e12,b=tvmovie,w=500,ca=25.77,0.00,70.23,100.00,rm=sk.webp",
      Progress: 98,
    },
    after: {
      Program: "K 11 - Kommissare im Einsatz",
      Start: "19:00",
      End: "19:20",
      Category: "Doku-Soap",
      Link: "https://www.tvmovie.de/tv/k-11-kommissare-im-einsatz-epg-229204071",
      Thumbnail:
        "https://images.tvmovie.de/k-11-kommissare-im-einsatz,id=234cb2c1,b=tvmovie,w=500,ca=6.66,0,73.34,100,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "RTLup",
    KanalLogo:
      "https://images.tvmovie.de/rtlup-logo,id=b87c671f,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Das Strafgericht",
      Start: "18:30",
      End: "19:25",
      Category: "Gerichtsshow",
      Link: "https://www.tvmovie.de/tv/das-strafgericht-epg-229190564",
      Thumbnail:
        "https://images.tvmovie.de/25425f24602ce2c84d2af2d41c772ea30b6bb922,id=b297048c,b=tvmovie,w=500,ca=27.88,0.00,84.13,100.00,rm=sk.webp",
      Progress: 53,
    },
    after: {
      Program: "Das Strafgericht",
      Start: "19:25",
      End: "20:15",
      Category: "Gerichtsshow",
      Link: "https://www.tvmovie.de/tv/das-strafgericht-epg-229190567",
      Thumbnail:
        "https://images.tvmovie.de/a0390a2d7c153666359aa4a25e0c21c830360fae,id=e7ac85df,b=tvmovie,w=500,ca=22.43,0.00,95.57,100.00,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "Disney Channel",
    KanalLogo:
      "https://images.tvmovie.de/disney-channel-germany,id=8e257482,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Miraculous - Geschichten von Lady Bug und Cat Noir",
      Start: "18:30",
      End: "19:00",
      Category: "Animationsserie",
      Link: "https://www.tvmovie.de/tv/miraculous-geschichten-von-lady-bug-und-cat-noir-epg-229244221",
      Thumbnail:
        "https://images.tvmovie.de/07d600b11536087fdbd3efea0822c65a996bc3cb,id=2bf2cb7c,b=tvmovie,w=500,ca=36.88,0.00,93.13,100.00,rm=sk.webp",
      Progress: 97,
    },
    after: {
      Program: "Big City Greens",
      Start: "19:00",
      End: "19:10",
      Category: "Animationsserie",
      Link: "https://www.tvmovie.de/tv/big-city-greens-epg-229244846",
      Thumbnail:
        "https://images.tvmovie.de/big-city-greens,id=75914b3b,b=tvmovie,w=500,ca=21.88,0,78.13,100,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "Super RTL",
    KanalLogo:
      "https://images.tvmovie.de/super-rtl-logo,id=4a15a5cf,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "ALVINNN!!! und die Chipmunks",
      Start: "18:55",
      End: "19:05",
      Category: "Animationsserie",
      Link: "https://www.tvmovie.de/tv/alvinnn-und-die-chipmunks-epg-229185556",
      Thumbnail:
        "https://images.tvmovie.de/7f16dfc6cc1945cfcb0cae33696990ca54a9fb4c,id=198ba748,b=tvmovie,w=500,ca=0.00,0.00,100.00,100.00,rm=sk.webp",
      Progress: 41,
    },
    after: {
      Program: "ALVINNN!!! und die Chipmunks",
      Start: "19:05",
      End: "19:25",
      Category: "Animationsserie",
      Link: "https://www.tvmovie.de/tv/alvinnn-und-die-chipmunks-epg-229185585",
      Thumbnail:
        "https://images.tvmovie.de/7f16dfc6cc1945cfcb0cae33696990ca54a9fb4c,id=a09b7dfa,b=tvmovie,w=500,ca=0.00,0.00,100.00,100.00,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "Sport1",
    KanalLogo:
      "https://images.tvmovie.de/sport1-logo,id=26d1df06,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Pastewka",
      Start: "18:30",
      End: "19:00",
      Category: "Comedyserie",
      Link: "https://www.tvmovie.de/tv/pastewka-epg-230906326",
      Thumbnail:
        "https://images.tvmovie.de/epg-16-9,id=62e71af4,b=tvmovie,w=500,ca=21.88,0.00,78.13,100.00,rm=sk.webp",
      Progress: 97,
    },
    after: {
      Program: "Bitte Lächeln!",
      Start: "19:00",
      End: "20:15",
      Category: "Comedyshow",
      Link: "https://www.tvmovie.de/tv/bitte-laecheln-epg-230843871",
      Thumbnail:
        "https://images.tvmovie.de/bitte-laecheln,id=f041cd02,b=tvmovie,w=500,ca=17.64,0,84.36,100,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "Eurosport 1",
    KanalLogo:
      "https://images.tvmovie.de/eurosport-1-logo,id=40902d54,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Radsport: Polen-Rundfahrt",
      Start: "18:30",
      End: "20:00",
      Category: "Radsport",
      Link: "https://www.tvmovie.de/tv/radsport-polen-rundfahrt-epg-229325387",
      Thumbnail:
        "https://images.tvmovie.de/radsport,id=495cac23,b=tvmovie,w=500,ca=17.67,0,84.33,100,rm=sk.webp",
      Progress: 32,
    },
    after: {
      Program: "Racing on the Edge - die Sail-GP-Doku",
      Start: "20:00",
      End: "20:30",
      Category: "Segeln",
      Link: "https://www.tvmovie.de/tv/racing-on-the-edge-die-sail-gp-doku-epg-229325401",
      Thumbnail:
        "https://images.tvmovie.de/segeln,id=f25c898f,b=tvmovie,w=500,ca=24.78,0,91.22,100,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "DMAX",
    KanalLogo:
      "https://images.tvmovie.de/9943d5f0-df22-11e5-9740-93b852ac6756-1,id=fea9cf86,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Steel Buddies - Projekt Panther",
      Start: "18:15",
      End: "19:15",
      Category: "Doku-Reihe",
      Link: "https://www.tvmovie.de/tv/steel-buddies-projekt-panther-epg-229166351",
      Thumbnail:
        "https://images.tvmovie.de/1cafa104423e7e157fff8dc39feb4d73f3a3b873,id=e3cf15f9,b=tvmovie,w=500,ca=25.88,0.00,82.13,100.00,rm=sk.webp",
      Progress: 73,
    },
    after: {
      Program: "Steel Buddies - Projekt Panther",
      Start: "19:15",
      End: "20:15",
      Category: "Doku-Reihe",
      Link: "https://www.tvmovie.de/tv/steel-buddies-projekt-panther-epg-229166353",
      Thumbnail:
        "https://images.tvmovie.de/36803038d2fd42f76e000c37afa7b35089b800e7,id=dcea12e8,b=tvmovie,w=500,ca=2.88,0.00,59.13,100.00,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "ProSieben MAXX",
    KanalLogo:
      "https://images.tvmovie.de/9c638c80-df22-11e5-9740-93b852ac6756-1,id=3def6398,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Detektiv Conan",
      Start: "18:55",
      End: "19:20",
      Category: "Animeserie",
      Link: "https://www.tvmovie.de/tv/detektiv-conan-epg-229199467",
      Thumbnail:
        "https://images.tvmovie.de/1ce07cb946dfe0a9e8d422ff71828ef06e511d38,id=8029da91,b=tvmovie,w=500,ca=5.50,0.00,80.50,100.00,rm=sk.webp",
      Progress: 16,
    },
    after: {
      Program: "Futurama",
      Start: "19:20",
      End: "19:45",
      Category: "Zeichentrickserie",
      Link: "https://www.tvmovie.de/tv/futurama-epg-229199469",
      Thumbnail:
        "https://images.tvmovie.de/2a7df8b1b1050e5ba43716fea0f4393efc6f8530,id=a9eb2031,b=tvmovie,w=500,ca=0.00,0.00,67.51,100.00,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "WDR",
    KanalLogo:
      "https://images.tvmovie.de/wdr-logo-1,id=70cbc03f,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Aktuelle Stunde",
      Start: "18:45",
      End: "19:30",
      Category: "Magazin",
      Link: "https://www.tvmovie.de/tv/aktuelle-stunde-epg-229263279",
      Thumbnail:
        "https://images.tvmovie.de/aktuelle-stunde,id=b215e701,b=tvmovie,w=500,ca=7.43,0,64.57,100,rm=sk.webp",
      Progress: 31,
    },
    after: {
      Program: "Lokalzeit",
      Start: "19:30",
      End: "20:00",
      Category: "Magazin",
      Link: "https://www.tvmovie.de/tv/lokalzeit-epg-229262829",
      Thumbnail:
        "https://images.tvmovie.de/1-lokalzeit-screen-koeln,id=8de38e5b,b=tvmovie,w=500,ca=0,0,57.14,100,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "NDR",
    KanalLogo:
      "https://images.tvmovie.de/ndr-dachmarke,id=438e9c89,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "DAS! Rote Sofa",
      Start: "18:45",
      End: "19:30",
      Category: "Gespräch",
      Link: "https://www.tvmovie.de/tv/das-rote-sofa-epg-229086339",
      Thumbnail:
        "https://images.tvmovie.de/1-das-rote-sofa-2026,id=0207361a,b=tvmovie,w=500,ca=17.14,0,82.86,100,rm=sk.webp",
      Progress: 31,
    },
    after: {
      Program: "Ländermagazine",
      Start: "19:30",
      End: "20:00",
      Category: "Magazin",
      Link: "https://www.tvmovie.de/tv/laendermagazine-epg-229086918",
      Thumbnail:
        "https://images.tvmovie.de/laendermagazine,id=3978ed13,b=tvmovie,w=500,ca=0,0,56.26,100,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "MDR",
    KanalLogo:
      "https://images.tvmovie.de/mdr-typogramm-blau-srgb,id=7af54937,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Unser Sandmännchen",
      Start: "18:54",
      End: "19:00",
      Category: "Kinderserie",
      Link: "https://www.tvmovie.de/tv/unser-sandmaennchen-epg-229046215",
      Thumbnail:
        "https://images.tvmovie.de/unser-sandmaennchen,id=d3cd098a,b=tvmovie,w=500,ca=16.56,0,85.44,100,rm=sk.webp",
      Progress: 84,
    },
    after: {
      Program: "MDR Regional",
      Start: "19:00",
      End: "19:30",
      Category: "Magazin",
      Link: "https://www.tvmovie.de/tv/mdr-regional-epg-229046222",
      Thumbnail:
        "https://images.tvmovie.de/1-mdr-sachsenspiegel-sendungsbild-2021,id=0fd0ac01,b=tvmovie,w=500,ca=6.99,0,63.01,100,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "BR Fernsehen",
    KanalLogo:
      "https://images.tvmovie.de/br-230410-rgb,id=4471fada,b=tvmovie,w=100,ca=0,0,100.00,100.00,rm=sk.webp",
    now: {
      Program: "BR24",
      Start: "18:30",
      End: "19:00",
      Category: "Nachrichten",
      Link: "https://www.tvmovie.de/tv/br24-epg-229132954",
      Thumbnail:
        "https://images.tvmovie.de/br24-key-visual,id=7d35714f,b=tvmovie,w=500,ca=23.15,0,78.85,100,rm=sk.webp",
      Progress: 97,
    },
    after: {
      Program: "Gute Nachrichten vom Planeten",
      Start: "19:00",
      End: "19:30",
      Category: "Doku-Reihe",
      Link: "https://www.tvmovie.de/tv/gute-nachrichten-vom-planeten-epg-229132956",
      Thumbnail:
        "https://images.tvmovie.de/ee7555a042239d1d767f2cca4d2798357c105a7d,id=8b6252af,b=tvmovie,w=500,ca=0.00,0.00,56.25,100.00,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "SWR Fernsehen",
    KanalLogo:
      "https://images.tvmovie.de/9cf4d000-df22-11e5-9740-93b852ac6756-1,id=883a316a,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "SWR Landesschau Baden-Württemberg",
      Start: "18:10",
      End: "19:30",
      Category: "Magazin",
      Link: "https://www.tvmovie.de/tv/swr-landesschau-baden-wuerttemberg-epg-229113317",
      Thumbnail:
        "https://images.tvmovie.de/swr-landesschau-baden-wuerttemberg,id=9b428271,b=tvmovie,w=500,ca=20.99,0,77.01,100,rm=sk.webp",
      Progress: 61,
    },
    after: {
      Program: "SWR Aktuell Baden-Württemberg",
      Start: "19:30",
      End: "19:57",
      Category: "Magazin",
      Link: "https://www.tvmovie.de/tv/swr-aktuell-baden-wuerttemberg-epg-229113338",
      Thumbnail:
        "https://images.tvmovie.de/1-swr-aktuell-2017-1,id=e39850fb,b=tvmovie,w=500,ca=16.99,0,73.01,100,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "HR",
    KanalLogo:
      "https://images.tvmovie.de/9d0e2460-df22-11e5-9740-93b852ac6756-1,id=7033da6f,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Die Ratgeber",
      Start: "18:45",
      End: "19:15",
      Category: "Magazin",
      Link: "https://www.tvmovie.de/tv/die-ratgeber-epg-229150627",
      Thumbnail:
        "https://images.tvmovie.de/die-ratgeber,id=ce34dee4,b=tvmovie,w=500,ca=16.40,9.42,64.80,82.98,rm=sk.webp",
      Progress: 47,
    },
    after: {
      Program: "alle wetter",
      Start: "19:15",
      End: "19:30",
      Category: "Wetter",
      Link: "https://www.tvmovie.de/tv/alle-wetter-epg-229150633",
      Thumbnail:
        "https://images.tvmovie.de/wetter,id=02ea4478,b=tvmovie,w=500,ca=18.67,0,85.33,100,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "RBB",
    KanalLogo:
      "https://images.tvmovie.de/rbb-logo,id=2d4f4b3b,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Brisant",
      Start: "18:45",
      End: "19:27",
      Category: "Boulevardmagazin",
      Link: "https://www.tvmovie.de/tv/brisant-epg-229212222",
      Thumbnail:
        "https://images.tvmovie.de/brisant-senjo-eldessouky-ard,id=a7246554,b=tvmovie,w=500,ca=39.99,0,96.01,100,rm=sk.webp",
      Progress: 33,
    },
    after: {
      Program: "rbb wetter",
      Start: "19:27",
      End: "19:30",
      Category: "Wetter",
      Link: "https://www.tvmovie.de/tv/rbb-wetter-epg-229212224",
      Thumbnail:
        "https://images.tvmovie.de/rbb-wetter,id=9473bb03,b=tvmovie,w=500,ca=25.43,0,82.57,100,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "ZDFinfo",
    KanalLogo:
      "https://images.tvmovie.de/9cb296e0-df22-11e5-9740-93b852ac6756-1,id=de87b670,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Die Geschichte des Essens",
      Start: "18:45",
      End: "19:30",
      Category: "Dokumentation",
      Link: "https://www.tvmovie.de/tv/die-geschichte-des-essens-epg-229093228",
      Thumbnail:
        "https://images.tvmovie.de/3aa0072b117126a328a6366c2e8527045ba0e575,id=d73ec067,b=tvmovie,w=500,ca=8.87,0.00,65.13,100.00,rm=sk.webp",
      Progress: 31,
    },
    after: {
      Program: "Die Geschichte des Essens",
      Start: "19:30",
      End: "20:15",
      Category: "Dokumentation",
      Link: "https://www.tvmovie.de/tv/die-geschichte-des-essens-epg-229093229",
      Thumbnail:
        "https://images.tvmovie.de/c396f0040bc3c331558dfd601622a2b901766099,id=655360c6,b=tvmovie,w=500,ca=5.88,0.00,62.13,100.00,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "ARD Alpha",
    KanalLogo:
      "https://images.tvmovie.de/ard-alpha,id=cbb03336,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Einfach genial",
      Start: "18:45",
      End: "19:10",
      Category: "Magazin",
      Link: "https://www.tvmovie.de/tv/einfach-genial-epg-229166409",
      Thumbnail:
        "https://images.tvmovie.de/2-einfach-genial-logo-2024,id=aaece55a,b=tvmovie,w=500,ca=5.99,0,62.01,100,rm=sk.webp",
      Progress: 56,
    },
    after: {
      Program: "Vom Ahorn bis zur Zwiebel",
      Start: "19:10",
      End: "19:15",
      Category: "Doku-Reihe",
      Link: "https://www.tvmovie.de/tv/vom-ahorn-bis-zur-zwiebel-epg-229166410",
      Thumbnail:
        "https://images.tvmovie.de/epg-16-9,id=62e71af4,b=tvmovie,w=500,ca=21.88,0.00,78.13,100.00,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "Phoenix",
    KanalLogo:
      "https://images.tvmovie.de/phoenix-1,id=8fd4deea,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Ein Jahr in Kanadas Wildnis",
      Start: "18:30",
      End: "19:15",
      Category: "Naturdokumentation",
      Link: "https://www.tvmovie.de/tv/ein-jahr-in-kanadas-wildnis-epg-229093488",
      Thumbnail:
        "https://images.tvmovie.de/epg-16-9,id=62e71af4,b=tvmovie,w=500,ca=21.88,0.00,78.13,100.00,rm=sk.webp",
      Progress: 65,
    },
    after: {
      Program: "Ein Jahr in Kanadas Wildnis",
      Start: "19:15",
      End: "20:00",
      Category: "Naturdokumentation",
      Link: "https://www.tvmovie.de/tv/ein-jahr-in-kanadas-wildnis-epg-229093489",
      Thumbnail:
        "https://images.tvmovie.de/epg-16-9,id=62e71af4,b=tvmovie,w=500,ca=21.88,0.00,78.13,100.00,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "KI.KA",
    KanalLogo:
      "https://images.tvmovie.de/kika-logo,id=ff814fa1,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Unser Sandmännchen",
      Start: "18:50",
      End: "19:00",
      Category: "Kinderserie",
      Link: "https://www.tvmovie.de/tv/unser-sandmaennchen-epg-228868620",
      Thumbnail:
        "https://images.tvmovie.de/unser-sandmaennchen,id=d3cd098a,b=tvmovie,w=500,ca=16.56,0,85.44,100,rm=sk.webp",
      Progress: 91,
    },
    after: {
      Program: "Arthur und die Freunde der Tafelrunde",
      Start: "19:00",
      End: "19:25",
      Category: "Animationsserie",
      Link: "https://www.tvmovie.de/tv/arthur-und-die-freunde-der-tafelrunde-epg-228868622",
      Thumbnail:
        "https://images.tvmovie.de/arthur-und-die-freunde-der-tafelrunde,id=b4887c3c,b=tvmovie,w=500,ca=26.88,0,83.13,100,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "Comedy Central",
    KanalLogo:
      "https://images.tvmovie.de/comedy-central-1,id=87f37c59,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Malcolm mittendrin",
      Start: "18:50",
      End: "19:15",
      Category: "Comedyserie",
      Link: "https://www.tvmovie.de/tv/malcolm-mittendrin-epg-231814813",
      Thumbnail:
        "https://images.tvmovie.de/2bca51fc879bbaf4c32e95d92b7d0fe925193c66,id=cc22df1c,b=tvmovie,w=500,ca=5.45,0.00,72.55,100.00,rm=sk.webp",
      Progress: 36,
    },
    after: {
      Program: "Ghosts",
      Start: "19:15",
      End: "19:35",
      Category: "Comedyserie",
      Link: "https://www.tvmovie.de/tv/ghosts-epg-228691245",
      Thumbnail:
        "https://images.tvmovie.de/epg-16-9,id=62e71af4,b=tvmovie,w=500,ca=21.88,0.00,78.13,100.00,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "DF1",
    KanalLogo:
      "https://images.tvmovie.de/df1-1,id=3a4b029d,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "MareTV",
      Start: "18:30",
      End: "19:20",
      Category: "Reisereportage",
      Link: "https://www.tvmovie.de/tv/maretv-epg-230687700",
      Thumbnail:
        "https://images.tvmovie.de/epg-16-9,id=62e71af4,b=tvmovie,w=500,ca=21.88,0.00,78.13,100.00,rm=sk.webp",
      Progress: 58,
    },
    after: {
      Program: "MareTV",
      Start: "19:20",
      End: "20:15",
      Category: "Reisereportage",
      Link: "https://www.tvmovie.de/tv/maretv-epg-230687701",
      Thumbnail:
        "https://images.tvmovie.de/epg-16-9,id=62e71af4,b=tvmovie,w=500,ca=21.88,0.00,78.13,100.00,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "TLC",
    KanalLogo:
      "https://images.tvmovie.de/9c70fa00-df22-11e5-9740-93b852ac6756-1,id=3812a4f3,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Mein Leben mit 300 kg",
      Start: "18:15",
      End: "20:15",
      Category: "Doku-Soap",
      Link: "https://www.tvmovie.de/tv/mein-leben-mit-300-kg-epg-229209498",
      Thumbnail:
        "https://images.tvmovie.de/b66771343b29a6a4680669bcbb650daa4abc60c0,id=bac8572e,b=tvmovie,w=500,ca=6.87,0.00,63.13,100.00,rm=sk.webp",
      Progress: 37,
    },
    after: {
      Program: "Dating ohne Grenzen - Auswandern für die Liebe",
      Start: "20:15",
      End: "21:15",
      Category: "Doku-Soap",
      Link: "https://www.tvmovie.de/tv/dating-ohne-grenzen-auswandern-fuer-die-liebe-epg-229209499",
      Thumbnail:
        "https://images.tvmovie.de/dating-ohne-grenzen-auswandern-fuer-die-liebe,id=356e3c8b,b=tvmovie,w=500,ca=18.88,0,75.13,100,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "VOXup",
    KanalLogo:
      "https://images.tvmovie.de/voxup-logo,id=d5dc63ad,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Lie to me",
      Start: "18:30",
      End: "19:20",
      Category: "Krimiserie",
      Link: "https://www.tvmovie.de/tv/lie-to-me-epg-229273802",
      Thumbnail:
        "https://images.tvmovie.de/33d488c50374d3c8f1cced0c54235db27098d226,id=521c153f,b=tvmovie,w=500,ca=2.54,0.00,77.46,100.00,rm=sk.webp",
      Progress: 58,
    },
    after: {
      Program: "Lie to me",
      Start: "19:20",
      End: "20:15",
      Category: "Krimiserie",
      Link: "https://www.tvmovie.de/tv/lie-to-me-epg-229273803",
      Thumbnail:
        "https://images.tvmovie.de/34868c7f1e98e047ea7d4bd867a92d67e668655a,id=28fd57aa,b=tvmovie,w=500,ca=9.59,0.00,76.41,100.00,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "Kabel eins Doku",
    KanalLogo:
      "https://images.tvmovie.de/e50faa83-38dd-4ae9-afa4-ed485b8dfcb4-1,id=fcf917d0,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Die Drei vom Pfandhaus",
      Start: "18:45",
      End: "19:30",
      Category: "Doku-Soap",
      Link: "https://www.tvmovie.de/tv/die-drei-vom-pfandhaus-epg-229143488",
      Thumbnail:
        "https://images.tvmovie.de/c491e68489399dc4cbaca8a9949fcb5d4796fc03,id=c0e61a4e,b=tvmovie,w=500,ca=0.00,0.00,66.67,100.00,rm=sk.webp",
      Progress: 31,
    },
    after: {
      Program: "Die Drei vom Pfandhaus",
      Start: "19:30",
      End: "20:15",
      Category: "Doku-Soap",
      Link: "https://www.tvmovie.de/tv/die-drei-vom-pfandhaus-epg-229143501",
      Thumbnail:
        "https://images.tvmovie.de/c491e68489399dc4cbaca8a9949fcb5d4796fc03,id=4db520d4,b=tvmovie,w=500,ca=0.00,0.00,66.67,100.00,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "HGTV",
    KanalLogo:
      "https://images.tvmovie.de/hgtv-logo-1,id=39d6dfab,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Die Beckenbauer - Pools der Superlative",
      Start: "18:15",
      End: "19:15",
      Category: "Doku-Reihe",
      Link: "https://www.tvmovie.de/tv/die-beckenbauer-pools-der-superlative-epg-229257272",
      Thumbnail:
        "https://images.tvmovie.de/fcdc7b8916d2f088f3e49219c8e7223c58c7813e,id=cfd5d2a4,b=tvmovie,w=500,ca=33.88,0.00,90.13,100.00,rm=sk.webp",
      Progress: 73,
    },
    after: {
      Program: "Die Beckenbauer - Pools der Superlative",
      Start: "19:15",
      End: "20:15",
      Category: "Doku-Reihe",
      Link: "https://www.tvmovie.de/tv/die-beckenbauer-pools-der-superlative-epg-229257273",
      Thumbnail:
        "https://images.tvmovie.de/49d959ae039f751c5ce935847d47cc56c0e3f7e3,id=a70dc9e3,b=tvmovie,w=500,ca=11.67,0.00,78.33,100.00,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "Sky Cinema Premiere",
    KanalLogo:
      "https://images.tvmovie.de/sky-cinema-premieren,id=ff801a41,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Ballerina",
      Start: "18:05",
      End: "20:15",
      Category: "Actionfilm",
      Link: "https://www.tvmovie.de/tv/ballerina-epg-229165074",
      Thumbnail:
        "https://images.tvmovie.de/4140565a848d73bd7b3b6b087a7a2bab41bcbfa6,id=50e21951,b=tvmovie,w=500,ca=0.00,0.00,66.67,100.00,rm=sk.webp",
      Progress: 42,
    },
    after: {
      Program:
        "Der Mann, der immer kleiner wurde - Die unglaubliche Geschichte des Mr. C",
      Start: "20:15",
      End: "21:55",
      Category: "Science-Fiction",
      Link: "https://www.tvmovie.de/tv/der-mann-der-immer-kleiner-wurde-die-unglaubliche-geschichte-des-mr-c-epg-229165075",
      Thumbnail:
        "https://images.tvmovie.de/8b195f93bb891dae45fbb50ba70adcaf68a090ac,id=282d2fd2,b=tvmovie,w=500,ca=38.71,0.00,81.29,100.00,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "Sky Cinema Action",
    KanalLogo:
      "https://images.tvmovie.de/sky-cinema-action,id=a7177ae5,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Disturbia - Auch Killer haben Nachbarn",
      Start: "18:25",
      End: "20:15",
      Category: "Thriller",
      Link: "https://www.tvmovie.de/tv/disturbia-auch-killer-haben-nachbarn-epg-229134241",
      Thumbnail:
        "https://images.tvmovie.de/00cb577cdb5a2c1963c3d826ceacf04fb27913b7,id=e2f5754e,b=tvmovie,w=500,ca=10.81,0.00,79.19,100.00,rm=sk.webp",
      Progress: 31,
    },
    after: {
      Program: "The Equalizer",
      Start: "20:15",
      End: "22:30",
      Category: "Actionthriller",
      Link: "https://www.tvmovie.de/tv/the-equalizer-epg-229134242",
      Thumbnail:
        "https://images.tvmovie.de/97c6c524990280b32f0fa41ea4c19eafc6c47979,id=3f854bbf,b=tvmovie,w=500,ca=12.67,0.00,79.33,100.00,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "Sky Cinema Classics",
    KanalLogo:
      "https://images.tvmovie.de/sky-logo-cinema-classics-1,id=36ba6b53,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Das Krokodil und sein Nilpferd",
      Start: "18:35",
      End: "20:15",
      Category: "Actionkomödie",
      Link: "https://www.tvmovie.de/tv/das-krokodil-und-sein-nilpferd-epg-229120757",
      Thumbnail:
        "https://images.tvmovie.de/10f709d967e7c1b72b23268049cb84c70faad121,id=acdcdfe6,b=tvmovie,w=500,ca=0.00,0.00,74.80,100.00,rm=sk.webp",
      Progress: 24,
    },
    after: {
      Program: "Vier Fäuste gegen Rio",
      Start: "20:15",
      End: "22:00",
      Category: "Actionkomödie",
      Link: "https://www.tvmovie.de/tv/vier-faeuste-gegen-rio-epg-229120758",
      Thumbnail:
        "https://images.tvmovie.de/69af0ebac5a6aa119e1e99ff95e9874e6002e12d,id=e3e68f45,b=tvmovie,w=500,ca=33.74,0.00,100.00,100.00,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "SKY Cinema Family",
    KanalLogo:
      "https://images.tvmovie.de/sky-cinema-family,id=22fabb97,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Mein Partner mit der kalten Schnauze",
      Start: "18:30",
      End: "20:15",
      Category: "Krimikomödie",
      Link: "https://www.tvmovie.de/tv/mein-partner-mit-der-kalten-schnauze-epg-229130109",
      Thumbnail:
        "https://images.tvmovie.de/3bc57c054cc0965d223f91ed772bffd40995b696,id=d61c539e,b=tvmovie,w=500,ca=24.08,0.00,87.92,100.00,rm=sk.webp",
      Progress: 28,
    },
    after: {
      Program: "Der Dummschwätzer",
      Start: "20:15",
      End: "21:40",
      Category: "Komödie",
      Link: "https://www.tvmovie.de/tv/der-dummschwaetzer-epg-229130110",
      Thumbnail:
        "https://images.tvmovie.de/f0d232d235adf5c1fa752ea103c322e48830ae39,id=29492dec,b=tvmovie,w=500,ca=0.00,0.00,74.06,100.00,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "Sky Atlantic",
    KanalLogo:
      "https://images.tvmovie.de/sky-atlantic-1,id=1e87a3d1,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Domina",
      Start: "18:15",
      End: "19:10",
      Category: "Dramaserie",
      Link: "https://www.tvmovie.de/tv/domina-epg-229180645",
      Thumbnail:
        "https://images.tvmovie.de/5b7f19e42207b263a8e0069a78bca87b7eddca7f,id=41e6ebc4,b=tvmovie,w=500,ca=0.66,0.00,67.34,100.00,rm=sk.webp",
      Progress: 80,
    },
    after: {
      Program: "Domina",
      Start: "19:10",
      End: "20:15",
      Category: "Dramaserie",
      Link: "https://www.tvmovie.de/tv/domina-epg-229179656",
      Thumbnail:
        "https://images.tvmovie.de/d20662dc475ccad7e45058bc1d6db1fef57866fd,id=69e6559d,b=tvmovie,w=500,ca=19.66,0.00,86.34,100.00,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "Warner TV Film",
    KanalLogo:
      "https://images.tvmovie.de/wb-tv-film-1,id=67c24efa,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Space Cowboys",
      Start: "18:00",
      End: "20:15",
      Category: "Abenteuerkomödie",
      Link: "https://www.tvmovie.de/tv/space-cowboys-epg-229147195",
      Thumbnail:
        "https://images.tvmovie.de/4fd05b1ca7599807ca1d3a2b41b10606f723bf45,id=2230b69b,b=tvmovie,w=500,ca=3.33,0.00,70.67,100.00,rm=sk.webp",
      Progress: 44,
    },
    after: {
      Program: "Darjeeling Limited - Express zur Erleuchtung",
      Start: "20:15",
      End: "21:50",
      Category: "Komödie",
      Link: "https://www.tvmovie.de/tv/darjeeling-limited-express-zur-erleuchtung-epg-229147187",
      Thumbnail:
        "https://images.tvmovie.de/e0a31dd34efb2ff8f2640bb8702aebc61dab37ba,id=b4947ba9,b=tvmovie,w=500,ca=8.90,0.00,81.10,100.00,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "Sky Crime",
    KanalLogo:
      "https://images.tvmovie.de/sky-logo-crime-hd-1,id=0ee0cc04,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Inside FBI - Die härtesten Fälle",
      Start: "18:45",
      End: "19:15",
      Category: "Doku-Reihe",
      Link: "https://www.tvmovie.de/tv/inside-fbi-die-haertesten-faelle-epg-1229141842",
      Thumbnail:
        "https://images.tvmovie.de/epg-16-9,id=62e71af4,b=tvmovie,w=500,ca=21.88,0.00,78.13,100.00,rm=sk.webp",
      Progress: 47,
    },
    after: {
      Program: "Inside FBI - Die härtesten Fälle",
      Start: "19:15",
      End: "19:45",
      Category: "Doku-Reihe",
      Link: "https://www.tvmovie.de/tv/inside-fbi-die-haertesten-faelle-epg-1229141848",
      Thumbnail:
        "https://images.tvmovie.de/epg-16-9,id=62e71af4,b=tvmovie,w=500,ca=21.88,0.00,78.13,100.00,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "Sky ONE",
    KanalLogo:
      "https://images.tvmovie.de/sky-one-1,id=b7a080b9,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Bull",
      Start: "18:40",
      End: "19:25",
      Category: "Krimiserie",
      Link: "https://www.tvmovie.de/tv/bull-epg-229142374",
      Thumbnail:
        "https://images.tvmovie.de/bull,id=22c5ffcd,b=tvmovie,w=500,ca=0,0,56.18,100,rm=sk.webp",
      Progress: 42,
    },
    after: {
      Program: "The Rookie",
      Start: "19:25",
      End: "20:15",
      Category: "Krimiserie",
      Link: "https://www.tvmovie.de/tv/the-rookie-epg-229142382",
      Thumbnail:
        "https://images.tvmovie.de/the-rookie,id=d1ca4dc4,b=tvmovie,w=500,ca=39.88,0,96.13,100,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "Sky Krimi",
    KanalLogo:
      "https://images.tvmovie.de/sky-krimi-1,id=66443bb7,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Mord mit Aussicht",
      Start: "18:25",
      End: "19:20",
      Category: "Krimiserie",
      Link: "https://www.tvmovie.de/tv/mord-mit-aussicht-epg-229129857",
      Thumbnail:
        "https://images.tvmovie.de/4e5f538a38c9d7422aa4d26932c347388822f1b5,id=693befb3,b=tvmovie,w=500,ca=18.09,0.00,89.91,100.00,rm=sk.webp",
      Progress: 62,
    },
    after: {
      Program: "Mord mit Aussicht",
      Start: "19:20",
      End: "20:15",
      Category: "Krimiserie",
      Link: "https://www.tvmovie.de/tv/mord-mit-aussicht-epg-229129855",
      Thumbnail:
        "https://images.tvmovie.de/epg-16-9,id=62e71af4,b=tvmovie,w=500,ca=21.88,0.00,78.13,100.00,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "Crime and Investigation",
    KanalLogo:
      "https://images.tvmovie.de/crimeinvestigation-logo-schwarz,id=74d44e54,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Bloodline Detectives - Die DNA der Täter",
      Start: "18:30",
      End: "19:20",
      Category: "Doku-Reihe",
      Link: "https://www.tvmovie.de/tv/bloodline-detectives-die-dna-der-taeter-epg-227362464",
      Thumbnail:
        "https://images.tvmovie.de/bfdb3ec45bd1d4ad9962e1069d55cd16d8c2ce3d,id=7e1b6358,b=tvmovie,w=500,ca=1.90,0.00,72.10,100.00,rm=sk.webp",
      Progress: 58,
    },
    after: {
      Program: "Bloodline Detectives - Die DNA der Täter",
      Start: "19:20",
      End: "20:15",
      Category: "Doku-Reihe",
      Link: "https://www.tvmovie.de/tv/bloodline-detectives-die-dna-der-taeter-epg-227362468",
      Thumbnail:
        "https://images.tvmovie.de/3f3ec57e2428bc4c8259f0017874a72c3dd843b7,id=0ca93c61,b=tvmovie,w=500,ca=21.57,0.00,78.43,100.00,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "Warner TV Serie",
    KanalLogo:
      "https://images.tvmovie.de/wb-tv-serie-1,id=cdfa76aa,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Castle",
      Start: "18:45",
      End: "19:30",
      Category: "Krimiserie",
      Link: "https://www.tvmovie.de/tv/castle-epg-228660600",
      Thumbnail:
        "https://images.tvmovie.de/eff7b78c6ae15e53efe7e16c0e0ebdaf63c31081,id=99d25833,b=tvmovie,w=500,ca=0.00,0.00,66.67,100.00,rm=sk.webp",
      Progress: 31,
    },
    after: {
      Program: "Castle",
      Start: "19:30",
      End: "20:15",
      Category: "Krimiserie",
      Link: "https://www.tvmovie.de/tv/castle-epg-228660602",
      Thumbnail:
        "https://images.tvmovie.de/a97db173df112a27fd471bebd8203ccf01c71cfe,id=8029aa39,b=tvmovie,w=500,ca=31.67,0.00,98.33,100.00,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "RTL Crime",
    KanalLogo:
      "https://images.tvmovie.de/rtlcrime-1,id=6319033e,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Das Böse im Blick - Augenzeuge Kamera",
      Start: "18:40",
      End: "19:30",
      Category: "Doku-Reihe",
      Link: "https://www.tvmovie.de/tv/das-boese-im-blick-augenzeuge-kamera-epg-229176352",
      Thumbnail:
        "https://images.tvmovie.de/e061823966e6931410ac5d367ad57a61eb4388e5,id=1a78dcd7,b=tvmovie,w=500,ca=16.68,0.00,83.33,100.00,rm=sk.webp",
      Progress: 38,
    },
    after: {
      Program: "CSI: Den Tätern auf der Spur",
      Start: "19:30",
      End: "20:15",
      Category: "Krimiserie",
      Link: "https://www.tvmovie.de/tv/csi-den-taetern-auf-der-spur-epg-229176345",
      Thumbnail:
        "https://images.tvmovie.de/2570e7f95302975f341defe3ad0bc19011f1ee0e,id=60f37cbb,b=tvmovie,w=500,ca=0.00,0.00,66.67,100.00,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "13TH STREET",
    KanalLogo:
      "https://images.tvmovie.de/a125cf80-df22-11e5-9740-93b852ac6756-1,id=d41518d9,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Criminal Intent - Verbrechen im Visier",
      Start: "18:40",
      End: "19:25",
      Category: "Krimiserie",
      Link: "https://www.tvmovie.de/tv/criminal-intent-verbrechen-im-visier-epg-229118278",
      Thumbnail:
        "https://images.tvmovie.de/887aed0a9f9135277404eeba393cde0de9ad7d46,id=644ae568,b=tvmovie,w=500,ca=17.68,0.00,84.32,100.00,rm=sk.webp",
      Progress: 42,
    },
    after: {
      Program: "Criminal Intent - Verbrechen im Visier",
      Start: "19:25",
      End: "20:15",
      Category: "Krimiserie",
      Link: "https://www.tvmovie.de/tv/criminal-intent-verbrechen-im-visier-epg-229118281",
      Thumbnail:
        "https://images.tvmovie.de/141a6bf8d5d54e838e64124f1265b8ebed9ba07f,id=1fc1269d,b=tvmovie,w=500,ca=0.00,0.00,77.66,100.00,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "SAT.1 emotions",
    KanalLogo:
      "https://images.tvmovie.de/s1e-logo-rgb-dark-1,id=54dca31e,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "In aller Freundschaft - Die jungen Ärzte",
      Start: "18:40",
      End: "19:30",
      Category: "Arztserie",
      Link: "https://www.tvmovie.de/tv/in-aller-freundschaft-die-jungen-aerzte-epg-229214425",
      Thumbnail:
        "https://images.tvmovie.de/2-iaf-die-jungen-aerzte-logo-2023-1,id=10db5c49,b=tvmovie,w=500,ca=0,0,100,100,rm=sk.webp",
      Progress: 38,
    },
    after: {
      Program: "SOKO Leipzig",
      Start: "19:30",
      End: "20:15",
      Category: "Krimiserie",
      Link: "https://www.tvmovie.de/tv/soko-leipzig-epg-229214426",
      Thumbnail:
        "https://images.tvmovie.de/epg-16-9,id=62e71af4,b=tvmovie,w=500,ca=21.88,0.00,78.13,100.00,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "ProSieben FUN",
    KanalLogo:
      "https://images.tvmovie.de/a8aeac90-df22-11e5-9740-93b852ac6756-1,id=77c332b3,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "It's Always Sunny in Philadelphia",
      Start: "18:50",
      End: "19:10",
      Category: "Sitcom",
      Link: "https://www.tvmovie.de/tv/its-always-sunny-in-philadelphia-epg-229174093",
      Thumbnail:
        "https://images.tvmovie.de/6ad7dc6f84cf5af479605a2b22d81062adf24741,id=687036ef,b=tvmovie,w=500,ca=0.00,0.00,66.67,100.00,rm=sk.webp",
      Progress: 46,
    },
    after: {
      Program: "Community",
      Start: "19:10",
      End: "19:30",
      Category: "Sitcom",
      Link: "https://www.tvmovie.de/tv/community-epg-229173915",
      Thumbnail:
        "https://images.tvmovie.de/6e930639fe13e6b0ff3141fcb9c0c4583ab1957c,id=a6186d63,b=tvmovie,w=500,ca=5.67,0.00,72.33,100.00,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "Syfy",
    KanalLogo:
      "https://images.tvmovie.de/syfy-logo-051717-horizontal-bw-1,id=87d47d23,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Stargate Atlantis",
      Start: "18:40",
      End: "19:25",
      Category: "Science-Fiction-Serie",
      Link: "https://www.tvmovie.de/tv/stargate-atlantis-epg-229118127",
      Thumbnail:
        "https://images.tvmovie.de/aecd0f36712feb5f1cd7cb631a81e62ab75bbd11,id=31c466c1,b=tvmovie,w=500,ca=16.95,0.00,73.05,100.00,rm=sk.webp",
      Progress: 42,
    },
    after: {
      Program: "Stargate Atlantis",
      Start: "19:25",
      End: "20:15",
      Category: "Science-Fiction-Serie",
      Link: "https://www.tvmovie.de/tv/stargate-atlantis-epg-229118128",
      Thumbnail:
        "https://images.tvmovie.de/bcac9190bbcfe8ced00c2fc61d482e60050f98c1,id=af7ab5a8,b=tvmovie,w=500,ca=28.01,0.00,83.99,100.00,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "Universal TV",
    KanalLogo:
      "https://images.tvmovie.de/universal-tv-logo,id=15403b4b,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Bones - Die Knochenjägerin",
      Start: "18:40",
      End: "19:25",
      Category: "Krimiserie",
      Link: "https://www.tvmovie.de/tv/bones-die-knochenjaegerin-epg-1229304109",
      Thumbnail:
        "https://images.tvmovie.de/2d18e8e42620efc6a63a85eb890cad36db6aa345,id=ce6e9f89,b=tvmovie,w=500,ca=22.74,0.00,89.26,100.00,rm=sk.webp",
      Progress: 42,
    },
    after: {
      Program: "Bones - Die Knochenjägerin",
      Start: "19:25",
      End: "20:15",
      Category: "Krimiserie",
      Link: "https://www.tvmovie.de/tv/bones-die-knochenjaegerin-epg-1229304120",
      Thumbnail:
        "https://images.tvmovie.de/fe09e0bd50510a91ee56840bd847892d91ebd835,id=a46fa3b6,b=tvmovie,w=500,ca=0.00,0.00,66.53,100.00,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "RTL Passion",
    KanalLogo:
      "https://images.tvmovie.de/rtlpassion-1,id=ffbb38ad,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Charmed - Zauberhafte Hexen",
      Start: "18:40",
      End: "19:25",
      Category: "Mysteryserie",
      Link: "https://www.tvmovie.de/tv/charmed-zauberhafte-hexen-epg-229190472",
      Thumbnail:
        "https://images.tvmovie.de/6bf9f1bea743eb3fc374eb36dbe1d603eeaaadbc,id=7681a067,b=tvmovie,w=500,ca=0.00,0.00,75.91,100.00,rm=sk.webp",
      Progress: 42,
    },
    after: {
      Program: "Desperate Housewives",
      Start: "19:25",
      End: "20:15",
      Category: "Dramedyserie",
      Link: "https://www.tvmovie.de/tv/desperate-housewives-epg-229190476",
      Thumbnail:
        "https://images.tvmovie.de/a17e0e8b20dbe332b5668857320a676590003a72,id=d705a3f8,b=tvmovie,w=500,ca=8.67,0.00,75.33,100.00,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "Warner TV Comedy",
    KanalLogo:
      "https://images.tvmovie.de/wb-tv-commedy-1,id=00973e7e,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "The Big Bang Theory",
      Start: "18:40",
      End: "19:05",
      Category: "Sitcom",
      Link: "https://www.tvmovie.de/tv/the-big-bang-theory-epg-229082306",
      Thumbnail:
        "https://images.tvmovie.de/76285271f0569be48b1df1b73bbe5e52a29570d8,id=96a5fae7,b=tvmovie,w=500,ca=19.89,0.00,76.11,100.00,rm=sk.webp",
      Progress: 76,
    },
    after: {
      Program: "The Big Bang Theory",
      Start: "19:05",
      End: "19:30",
      Category: "Sitcom",
      Link: "https://www.tvmovie.de/tv/the-big-bang-theory-epg-229082307",
      Thumbnail:
        "https://images.tvmovie.de/22b4fb93b1f8e068ff8c24ccef5ebd90296ccf48,id=982a0640,b=tvmovie,w=500,ca=0.00,0.00,56.25,100.00,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "Romance TV",
    KanalLogo:
      "https://images.tvmovie.de/romance-tv-1,id=b6ca2259,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Familie Dr. Kleist",
      Start: "18:30",
      End: "19:20",
      Category: "Arztserie",
      Link: "https://www.tvmovie.de/tv/familie-dr-kleist-epg-228559932",
      Thumbnail:
        "https://images.tvmovie.de/90515cdb8741a6151cec997e5399a583b11f521c,id=b83345b3,b=tvmovie,w=500,ca=0.00,0.00,68.73,100.00,rm=sk.webp",
      Progress: 58,
    },
    after: {
      Program: "Tierärztin Dr. Mertens",
      Start: "19:20",
      End: "20:15",
      Category: "Tierarztserie",
      Link: "https://www.tvmovie.de/tv/tieraerztin-dr-mertens-epg-228559933",
      Thumbnail:
        "https://images.tvmovie.de/tieraerztin-dr-mertens,id=f81a68bd,b=tvmovie,w=500,ca=21.9,0,94.1,100,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "kabel eins classics",
    KanalLogo:
      "https://images.tvmovie.de/kabel-1-classics-1,id=04bfc0ff,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "MacGyver",
      Start: "18:35",
      End: "19:25",
      Category: "Actionserie",
      Link: "https://www.tvmovie.de/tv/macgyver-epg-229079973",
      Thumbnail:
        "https://images.tvmovie.de/5d85a81eb206315ba4f30dd2af8b0004f8947c17,id=6571f869,b=tvmovie,w=500,ca=35.03,0.00,100.00,100.00,rm=sk.webp",
      Progress: 48,
    },
    after: {
      Program: "MacGyver",
      Start: "19:25",
      End: "20:15",
      Category: "Actionserie",
      Link: "https://www.tvmovie.de/tv/macgyver-epg-229079974",
      Thumbnail:
        "https://images.tvmovie.de/ab1e620d8da57f550b0678298918bdf2ae363655,id=5d2a5c47,b=tvmovie,w=500,ca=0.00,0.00,76.43,100.00,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "Sony Entertainment",
    KanalLogo:
      "https://images.tvmovie.de/a90fdf60-df22-11e5-9740-93b852ac6756-1,id=59b0713d,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Murdoch Mysteries",
      Start: "20:15",
      End: "21:00",
      Category: "Krimiserie",
      Link: "https://www.tvmovie.de/tv/murdoch-mysteries-epg-228184214",
      Thumbnail:
        "https://images.tvmovie.de/faf33f0244edee90589c4018b9ce115be23f4cd4,id=9ff4e653,b=tvmovie,w=500,ca=17.88,0.00,74.13,100.00,rm=sk.webp",
      Progress: 0,
    },
    after: {
      Program: "Houdini and Doyle",
      Start: "22:25",
      End: "23:10",
      Category: "Dramaserie",
      Link: "https://www.tvmovie.de/tv/houdini-and-doyle-epg-228184217",
      Thumbnail:
        "https://images.tvmovie.de/1bb1459db7803408e36c973f4337f8ef16a5feb4,id=bf53885f,b=tvmovie,w=500,ca=11.63,0.00,78.37,100.00,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "Kinowelt TV",
    KanalLogo:
      "https://images.tvmovie.de/kw-logo-blue-rgb-white-scaled,id=dbed69af,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Alle sagen: I Love You",
      Start: "18:35",
      End: "20:15",
      Category: "Musikfilm",
      Link: "https://www.tvmovie.de/tv/alle-sagen-i-love-you-epg-227869933",
      Thumbnail:
        "https://images.tvmovie.de/3492042deda6bc3ac0b1b01bbeec67208252df0d,id=106b424f,b=tvmovie,w=500,ca=28.59,0.00,95.41,100.00,rm=sk.webp",
      Progress: 24,
    },
    after: {
      Program: "Valerian - Die Stadt der Tausend Planeten",
      Start: "20:15",
      End: "22:30",
      Category: "Science-Fiction",
      Link: "https://www.tvmovie.de/tv/valerian-die-stadt-der-tausend-planeten-epg-227869934",
      Thumbnail:
        "https://images.tvmovie.de/a996c7a595e9cf63790ae3b63a7799e77e699100,id=21796c78,b=tvmovie,w=500,ca=31.60,0.00,98.40,100.00,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "Silverline",
    KanalLogo:
      "https://images.tvmovie.de/a2a7dba0-df22-11e5-9740-93b852ac6756-1,id=78cdea93,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Salz auf unserer Haut",
      Start: "18:20",
      End: "20:15",
      Category: "Erotikdrama",
      Link: "https://www.tvmovie.de/tv/salz-auf-unserer-haut-epg-229972809",
      Thumbnail:
        "https://images.tvmovie.de/36ec215f05463da27d40dca6d1573fab23b279cf,id=65416e58,b=tvmovie,w=500,ca=0.00,0.00,100.00,100.00,rm=sk.webp",
      Progress: 34,
    },
    after: {
      Program: "The Calling",
      Start: "20:15",
      End: "21:45",
      Category: "Horrorfilm",
      Link: "https://www.tvmovie.de/tv/the-calling-epg-229972810",
      Thumbnail:
        "https://images.tvmovie.de/f5cfda4a5950beaf00ad28c1a5d160cb17ffc405,id=f4f4e490,b=tvmovie,w=500,ca=0.00,0.00,66.86,100.00,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "AXN White",
    KanalLogo:
      "https://images.tvmovie.de/axnwhite-1,id=8a118c08,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Murdoch Mysteries",
      Start: "18:40",
      End: "19:25",
      Category: "Krimiserie",
      Link: "https://www.tvmovie.de/tv/murdoch-mysteries-epg-228184212",
      Thumbnail:
        "https://images.tvmovie.de/1bd50d69114f166b05d14d2ad7381f867c3cafe2,id=2ea43e15,b=tvmovie,w=500,ca=0.00,0.00,66.63,100.00,rm=sk.webp",
      Progress: 43,
    },
    after: {
      Program: "Murdoch Mysteries",
      Start: "19:25",
      End: "20:15",
      Category: "Krimiserie",
      Link: "https://www.tvmovie.de/tv/murdoch-mysteries-epg-228184213",
      Thumbnail:
        "https://images.tvmovie.de/1bd50d69114f166b05d14d2ad7381f867c3cafe2,id=46690527,b=tvmovie,w=500,ca=0.00,0.00,66.63,100.00,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "AXN Black",
    KanalLogo:
      "https://images.tvmovie.de/axn-black-1,id=91c9a20b,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Hudson & Rex",
      Start: "18:45",
      End: "19:30",
      Category: "Krimiserie",
      Link: "https://www.tvmovie.de/tv/hudson-und-rex-epg-228183928",
      Thumbnail:
        "https://images.tvmovie.de/f5c618416a3bcf40b66cd2aa58213a7062fe1445,id=73b9a925,b=tvmovie,w=500,ca=0.00,0.00,66.67,100.00,rm=sk.webp",
      Progress: 31,
    },
    after: {
      Program: "Hudson & Rex",
      Start: "19:30",
      End: "20:15",
      Category: "Krimiserie",
      Link: "https://www.tvmovie.de/tv/hudson-und-rex-epg-228183930",
      Thumbnail:
        "https://images.tvmovie.de/431d3e9822d03365e6932038945ef690394c3476,id=c364e037,b=tvmovie,w=500,ca=0.00,0.00,66.67,100.00,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "Sky Nature",
    KanalLogo:
      "https://images.tvmovie.de/sky-nature-programm,id=767d8f38,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Taronga Zoo Hautnah",
      Start: "18:35",
      End: "19:25",
      Category: "Doku-Reihe",
      Link: "https://www.tvmovie.de/tv/taronga-zoo-hautnah-epg-229133132",
      Thumbnail:
        "https://images.tvmovie.de/epg-16-9,id=62e71af4,b=tvmovie,w=500,ca=21.88,0.00,78.13,100.00,rm=sk.webp",
      Progress: 48,
    },
    after: {
      Program: "Taronga Zoo Hautnah",
      Start: "19:25",
      End: "20:15",
      Category: "Doku-Reihe",
      Link: "https://www.tvmovie.de/tv/taronga-zoo-hautnah-epg-229133136",
      Thumbnail:
        "https://images.tvmovie.de/epg-16-9,id=62e71af4,b=tvmovie,w=500,ca=21.88,0.00,78.13,100.00,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "Sky Documentaries",
    KanalLogo:
      "https://images.tvmovie.de/sky-documentaries-programm,id=7b0b7722,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Terra X",
      Start: "18:30",
      End: "19:20",
      Category: "Doku-Reihe",
      Link: "https://www.tvmovie.de/tv/terra-x-epg-229232116",
      Thumbnail:
        "https://images.tvmovie.de/64c487c3a794aafb87fa252c5243edc2bc7cdc8a,id=2a1703f6,b=tvmovie,w=500,ca=0.00,0.00,55.30,100.00,rm=sk.webp",
      Progress: 58,
    },
    after: {
      Program: "Terra X",
      Start: "19:20",
      End: "20:10",
      Category: "Doku-Reihe",
      Link: "https://www.tvmovie.de/tv/terra-x-epg-229232121",
      Thumbnail:
        "https://images.tvmovie.de/epg-16-9,id=62e71af4,b=tvmovie,w=500,ca=21.88,0.00,78.13,100.00,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "Sky Cinema Highlights HD",
    KanalLogo:
      "https://images.tvmovie.de/sky-cinema-programm,id=ebb9b78b,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Jack Reacher: Kein Weg zurück",
      Start: "18:15",
      End: "20:15",
      Category: "Actionfilm",
      Link: "https://www.tvmovie.de/tv/jack-reacher-kein-weg-zurueck-epg-1229204823",
      Thumbnail:
        "https://images.tvmovie.de/1dd2a088e8ab664b22883ebb4ee8602671c297d2,id=82f783fc,b=tvmovie,w=500,ca=10.34,0.00,73.66,100.00,rm=sk.webp",
      Progress: 37,
    },
    after: {
      Program: "Bad Boys for Life",
      Start: "20:15",
      End: "22:15",
      Category: "Actionkomödie",
      Link: "https://www.tvmovie.de/tv/bad-boys-for-life-epg-1229204824",
      Thumbnail:
        "https://images.tvmovie.de/16febc51cab473bda39cc5d778b86a64acd6a379,id=9d2e83ba,b=tvmovie,w=500,ca=0.00,0.00,61.52,100.00,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "Sky Showcase",
    KanalLogo:
      "https://images.tvmovie.de/sky-showcase-programm,id=406e922b,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Blue Bloods - Crime Scene New York",
      Start: "18:45",
      End: "19:30",
      Category: "Krimiserie",
      Link: "https://www.tvmovie.de/tv/blue-bloods-crime-scene-new-york-epg-229207361",
      Thumbnail:
        "https://images.tvmovie.de/36b9ad7db37a44418e23564b8e11a33c8cc826e0,id=c840d0b8,b=tvmovie,w=500,ca=0.00,0.00,100.00,100.00,rm=sk.webp",
      Progress: 31,
    },
    after: {
      Program: "Magnum P.I.",
      Start: "19:30",
      End: "20:15",
      Category: "Actionabenteuer",
      Link: "https://www.tvmovie.de/tv/magnum-pi-epg-229207363",
      Thumbnail:
        "https://images.tvmovie.de/magnum-pi,id=6ca761ff,b=tvmovie,w=500,ca=28.88,0,85.13,100,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "nickelodeon",
    KanalLogo:
      "https://images.tvmovie.de/nickelodeon-2023-logo-outline,id=1e5006c8,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Willkommen bei den Louds",
      Start: "18:45",
      End: "19:10",
      Category: "Zeichentrickserie",
      Link: "https://www.tvmovie.de/tv/willkommen-bei-den-louds-epg-228695034",
      Thumbnail:
        "https://images.tvmovie.de/80f08bd9dd05fc311672f731702309fff6ef6e99,id=c4ed5926,b=tvmovie,w=500,ca=33.88,0.00,90.13,100.00,rm=sk.webp",
      Progress: 57,
    },
    after: {
      Program: "Willkommen bei den Louds",
      Start: "19:10",
      End: "19:35",
      Category: "Zeichentrickserie",
      Link: "https://www.tvmovie.de/tv/willkommen-bei-den-louds-epg-228695039",
      Thumbnail:
        "https://images.tvmovie.de/729221f5564af1f3b34393508a62e7d329515ea9,id=24c01b4c,b=tvmovie,w=500,ca=3.87,0.00,60.13,100.00,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "TOGGO Plus",
    KanalLogo:
      "https://images.tvmovie.de/toggoplus-logo,id=8316fde4,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Monster Loving Maniacs",
      Start: "18:50",
      End: "19:00",
      Category: "Animationsserie",
      Link: "https://www.tvmovie.de/tv/monster-loving-maniacs-epg-230196739",
      Thumbnail:
        "https://images.tvmovie.de/db93ebaaed094862e44cbc6dbead350c946b12ef,id=a149624f,b=tvmovie,w=500,ca=17.88,0.00,74.12,100.00,rm=sk.webp",
      Progress: 92,
    },
    after: {
      Program: "Monster Loving Maniacs",
      Start: "19:00",
      End: "19:15",
      Category: "Animationsserie",
      Link: "https://www.tvmovie.de/tv/monster-loving-maniacs-epg-230196741",
      Thumbnail:
        "https://images.tvmovie.de/db93ebaaed094862e44cbc6dbead350c946b12ef,id=a1fa84fb,b=tvmovie,w=500,ca=17.88,0.00,74.12,100.00,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "Nick jr.",
    KanalLogo:
      "https://images.tvmovie.de/nick-jr-logo-2023-outline,id=ec09942f,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: 'Dora: Sag "Hallo" zum Abenteuer',
      Start: "18:50",
      End: "19:00",
      Category: "Animationsserie",
      Link: "https://www.tvmovie.de/tv/dora-sag-hallo-zum-abenteuer-epg-228673074",
      Thumbnail:
        "https://images.tvmovie.de/52efe6c9eba378965caf05725bb035b535f58149,id=c54380ad,b=tvmovie,w=500,ca=36.88,0.00,93.13,100.00,rm=sk.webp",
      Progress: 92,
    },
    after: {
      Program: "Santiago auf hoher See",
      Start: "19:00",
      End: "19:25",
      Category: "Animationsserie",
      Link: "https://www.tvmovie.de/tv/santiago-auf-hoher-see-epg-228673075",
      Thumbnail:
        "https://images.tvmovie.de/ed3ef6356532e6580eb65ce7474e4beb1839ac4f,id=0e21c3bf,b=tvmovie,w=500,ca=19.87,0.00,76.13,100.00,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "Fix und Foxi",
    KanalLogo:
      "https://images.tvmovie.de/a39ebec0-df22-11e5-9740-93b852ac6756-1,id=034818d7,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Dragon Hunters - Die Drachenjäger",
      Start: "18:35",
      End: "19:00",
      Category: "Zeichentrickserie",
      Link: "https://www.tvmovie.de/tv/dragon-hunters-die-drachenjaeger-epg-228826130",
      Thumbnail:
        "https://images.tvmovie.de/8b8277e175b510b387b561eacd72321be73e3d1d,id=748f4a12,b=tvmovie,w=500,ca=20.96,0.00,99.04,100.00,rm=sk.webp",
      Progress: 97,
    },
    after: {
      Program: "Geschichten aus der Gruft",
      Start: "19:00",
      End: "19:22",
      Category: "Zeichentrickserie",
      Link: "https://www.tvmovie.de/tv/geschichten-aus-der-gruft-epg-228826129",
      Thumbnail:
        "https://images.tvmovie.de/4b9f831204e87b50986707fd8ab3221ef74f41d7,id=2aabebf0,b=tvmovie,w=500,ca=13.50,0.00,88.50,100.00,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "Cartoon Network",
    KanalLogo:
      "https://images.tvmovie.de/a20de590-df22-11e5-9740-93b852ac6756-1,id=e6f46cde,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Bunnicula",
      Start: "18:55",
      End: "19:10",
      Category: "Zeichentrickserie",
      Link: "https://www.tvmovie.de/tv/bunnicula-epg-228673151",
      Thumbnail:
        "https://images.tvmovie.de/9c99cb501eeebd428a5f825aa59d6fd7a2dda2d2,id=61200b98,b=tvmovie,w=500,ca=16.88,0.00,73.13,100.00,rm=sk.webp",
      Progress: 28,
    },
    after: {
      Program: "Bunnicula",
      Start: "19:10",
      End: "19:20",
      Category: "Zeichentrickserie",
      Link: "https://www.tvmovie.de/tv/bunnicula-epg-228673153",
      Thumbnail:
        "https://images.tvmovie.de/520f4a61544666e1153640c6dc1d7c404fdbd929,id=f0956bc9,b=tvmovie,w=500,ca=13.87,0.00,70.13,100.00,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "Cartoonito",
    KanalLogo:
      "https://images.tvmovie.de/cartoonito-1,id=cdec7517,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Ben 10",
      Start: "18:55",
      End: "19:05",
      Category: "Zeichentrickserie",
      Link: "https://www.tvmovie.de/tv/ben-10-epg-228677466",
      Thumbnail:
        "https://images.tvmovie.de/epg-16-9,id=62e71af4,b=tvmovie,w=500,ca=21.88,0.00,78.13,100.00,rm=sk.webp",
      Progress: 42,
    },
    after: {
      Program: "Ben 10",
      Start: "19:05",
      End: "19:25",
      Category: "Zeichentrickserie",
      Link: "https://www.tvmovie.de/tv/ben-10-epg-228677468",
      Thumbnail:
        "https://images.tvmovie.de/epg-16-9,id=62e71af4,b=tvmovie,w=500,ca=21.88,0.00,78.13,100.00,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "SPORT1+",
    KanalLogo:
      "https://images.tvmovie.de/98c7a110-df22-11e5-9740-93b852ac6756-1,id=337db3e9,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Baseball: Major League Baseball",
      Start: "17:15",
      End: "20:00",
      Category: "Baseball",
      Link: "https://www.tvmovie.de/tv/baseball-major-league-baseball-epg-229866260",
      Thumbnail:
        "https://images.tvmovie.de/baseball,id=54d5ed32,b=tvmovie,w=500,ca=7.87,0,64.13,100,rm=sk.webp",
      Progress: 63,
    },
    after: {
      Program: "American Football: European Football Alliance",
      Start: "20:00",
      End: "22:45",
      Category: "American Football",
      Link: "https://www.tvmovie.de/tv/american-football-european-football-alliance-epg-229866249",
      Thumbnail:
        "https://images.tvmovie.de/american-football-american-football-league-europe,id=de97ea5c,b=tvmovie,w=500,ca=13,0,63,100,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "Eurosport 2",
    KanalLogo:
      "https://images.tvmovie.de/eurosport2-1,id=74f316c1,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Sportklettern: World Series",
      Start: "19:00",
      End: "20:00",
      Category: "Fun- u. Extremsport",
      Link: "https://www.tvmovie.de/tv/sportklettern-world-series-epg-230062680",
      Thumbnail:
        "https://images.tvmovie.de/sportklettern,id=7033ca9b,b=tvmovie,w=500,ca=31.67,0,98.33,100,rm=sk.webp",
      Progress: 0,
    },
    after: {
      Program: "Radsport: Tour de France der Damen",
      Start: "20:00",
      End: "21:00",
      Category: "Radsport",
      Link: "https://www.tvmovie.de/tv/radsport-tour-de-france-der-damen-epg-230062888",
      Thumbnail:
        "https://images.tvmovie.de/radsport,id=495cac23,b=tvmovie,w=500,ca=17.67,0,84.33,100,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "Sky Sport News",
    KanalLogo:
      "https://images.tvmovie.de/skysportnewshd-1,id=262b60dc,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Sky Sport News",
      Start: "19:00",
      End: "20:30",
      Category: "Sportnachrichten",
      Link: "https://www.tvmovie.de/tv/sky-sport-news-epg-231517394",
      Thumbnail:
        "https://images.tvmovie.de/epg-16-9,id=62e71af4,b=tvmovie,w=500,ca=21.88,0.00,78.13,100.00,rm=sk.webp",
      Progress: 0,
    },
    after: {
      Program: "Sky Sport News",
      Start: "20:30",
      End: "21:00",
      Category: "Sportnachrichten",
      Link: "https://www.tvmovie.de/tv/sky-sport-news-epg-229292144",
      Thumbnail:
        "https://images.tvmovie.de/epg-16-9,id=62e71af4,b=tvmovie,w=500,ca=21.88,0.00,78.13,100.00,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "Sky Sport F1",
    KanalLogo:
      "https://images.tvmovie.de/sky-logo-sport-f1-hd-1,id=07d51df1,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Benetton Formula",
      Start: "18:25",
      End: "20:00",
      Category: "Dokumentarfilm",
      Link: "https://www.tvmovie.de/tv/benetton-formula-epg-229224360",
      Thumbnail:
        "https://images.tvmovie.de/epg-16-9,id=62e71af4,b=tvmovie,w=500,ca=21.88,0.00,78.13,100.00,rm=sk.webp",
      Progress: 36,
    },
    after: {
      Program: "Rallye: FIA-Weltmeisterschaft",
      Start: "20:00",
      End: "21:30",
      Category: "Motorsport",
      Link: "https://www.tvmovie.de/tv/rallye-fia-weltmeisterschaft-epg-229224362",
      Thumbnail:
        "https://images.tvmovie.de/epg-16-9,id=62e71af4,b=tvmovie,w=500,ca=21.88,0.00,78.13,100.00,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "Sky Sport Bundesliga",
    KanalLogo:
      "https://images.tvmovie.de/sky-sportbundesliga-programm,id=016a2418,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Fußball - 2. Liga",
      Start: "14:00",
      End: "16:00",
      Category: "Fußball",
      Link: "https://www.tvmovie.de/tv/fussball-2-liga-epg-1231083597",
      Thumbnail:
        "https://images.tvmovie.de/fussball,id=ce229ea8,b=tvmovie,w=500,ca=23.89,0,76.11,100,rm=sk.webp",
      Progress: 0,
    },
    after: {
      Program: "Fußball - 2. Liga",
      Start: "14:00",
      End: "16:00",
      Category: "Fußball",
      Link: "https://www.tvmovie.de/tv/fussball-2-liga-epg-1231083598",
      Thumbnail:
        "https://images.tvmovie.de/fussball,id=ce229ea8,b=tvmovie,w=500,ca=23.89,0,76.11,100,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "More Than Sports TV",
    KanalLogo:
      "https://images.tvmovie.de/morethansportstv-1,id=eb08b392,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "FIM X-Trial World Championship",
      Start: "18:20",
      End: "20:00",
      Category: "Motorrad",
      Link: "https://www.tvmovie.de/tv/fim-x-trial-world-championship-epg-229411692",
      Thumbnail:
        "https://images.tvmovie.de/epg-16-9,id=62e71af4,b=tvmovie,w=500,ca=21.88,0.00,78.13,100.00,rm=sk.webp",
      Progress: 39,
    },
    after: {
      Program: "Rugby: Super League",
      Start: "20:00",
      End: "21:50",
      Category: "Rugby",
      Link: "https://www.tvmovie.de/tv/rugby-super-league-epg-229411690",
      Thumbnail:
        "https://images.tvmovie.de/rugby,id=98ba8a29,b=tvmovie,w=500,ca=0,0,66.43,100,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "Auto Motor Sport",
    KanalLogo:
      "https://images.tvmovie.de/a32f3410-df22-11e5-9740-93b852ac6756-1,id=d3b1cde0,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Bloch erklärt",
      Start: "19:00",
      End: "19:45",
      Category: "Automagazin",
      Link: "https://www.tvmovie.de/tv/bloch-erklaert-epg-230738465",
      Thumbnail:
        "https://images.tvmovie.de/epg-16-9,id=62e71af4,b=tvmovie,w=500,ca=21.88,0.00,78.13,100.00,rm=sk.webp",
      Progress: 0,
    },
    after: {
      Program: "Garage 21",
      Start: "19:45",
      End: "20:15",
      Category: "Automagazin",
      Link: "https://www.tvmovie.de/tv/garage-21-epg-230738444",
      Thumbnail:
        "https://images.tvmovie.de/epg-16-9,id=62e71af4,b=tvmovie,w=500,ca=21.88,0.00,78.13,100.00,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "Sky Sport Austria 1",
    KanalLogo:
      "https://images.tvmovie.de/skysportaustria-1,id=9d4c1874,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Fußball: Champions League",
      Start: "18:15",
      End: "19:15",
      Category: "Fußball",
      Link: "https://www.tvmovie.de/tv/fussball-champions-league-epg-230862946",
      Thumbnail:
        "https://images.tvmovie.de/fussball,id=ce229ea8,b=tvmovie,w=500,ca=23.89,0,76.11,100,rm=sk.webp",
      Progress: 74,
    },
    after: {
      Program: "Fußball: Österreichische Bundesliga",
      Start: "19:15",
      End: "20:00",
      Category: "Fußballmagazin",
      Link: "https://www.tvmovie.de/tv/fussball-oesterreichische-bundesliga-epg-230490988",
      Thumbnail:
        "https://images.tvmovie.de/epg-16-9,id=62e71af4,b=tvmovie,w=500,ca=21.88,0.00,78.13,100.00,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "Sportdigital Fußball",
    KanalLogo:
      "https://images.tvmovie.de/sportdigitalfusball-1,id=8f53a177,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Fußball: Champions-League-Qualifikation",
      Start: "17:45",
      End: "19:45",
      Category: "Fußball",
      Link: "https://www.tvmovie.de/tv/fussball-champions-league-qualifikation-epg-231494910",
      Thumbnail:
        "https://images.tvmovie.de/f51590d165b38056ae5ba2b4fcc9f090d4046b92,id=06ffd3b5,b=tvmovie,w=500,ca=38.88,0.00,95.13,100.00,rm=sk.webp",
      Progress: 62,
    },
    after: {
      Program: "90in30",
      Start: "19:45",
      End: "20:15",
      Category: "Fußballmagazin",
      Link: "https://www.tvmovie.de/tv/90in30-epg-229876934",
      Thumbnail:
        "https://images.tvmovie.de/epg-16-9,id=62e71af4,b=tvmovie,w=500,ca=21.88,0.00,78.13,100.00,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "DAZN",
    KanalLogo:
      "https://images.tvmovie.de/dazn-programm,id=bf296d67,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Radsport: Tour de France der Damen",
      Start: "15:35",
      End: "19:35",
      Category: "Radsport",
      Link: "https://www.tvmovie.de/tv/radsport-tour-de-france-der-damen-epg-230957230",
      Thumbnail:
        "https://images.tvmovie.de/radsport,id=495cac23,b=tvmovie,w=500,ca=17.67,0,84.33,100,rm=sk.webp",
      Progress: 85,
    },
    after: {
      Program: "Fußball: Afrika-Cup der Frauen",
      Start: "21:50",
      End: "00:20",
      Category: "Fußball",
      Link: "https://www.tvmovie.de/tv/fussball-afrika-cup-der-frauen-epg-231545433",
      Thumbnail:
        "https://images.tvmovie.de/fussball,id=ce229ea8,b=tvmovie,w=500,ca=23.89,0,76.11,100,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "MagentaSport",
    KanalLogo:
      "https://images.tvmovie.de/magenta-spor-programm,id=939792a3,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Golf: US PGA Tour",
      Start: "12:45",
      End: "17:45",
      Category: "Golf",
      Link: "https://www.tvmovie.de/tv/golf-us-pga-tour-epg-230802347",
      Thumbnail:
        "https://images.tvmovie.de/golfsport,id=377fb37c,b=tvmovie,w=500,ca=24.87,0,81.13,100,rm=sk.webp",
      Progress: 0,
    },
    after: {
      Program: "Golf: US PGA Tour",
      Start: "12:45",
      End: "18:30",
      Category: "Golf",
      Link: "https://www.tvmovie.de/tv/golf-us-pga-tour-epg-230802348",
      Thumbnail:
        "https://images.tvmovie.de/golfsport,id=377fb37c,b=tvmovie,w=500,ca=24.87,0,81.13,100,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "Sky Sport Top Event HD",
    KanalLogo:
      "https://images.tvmovie.de/sky-sport-top-event-programm,id=34b299f2,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Tennis: ATP und WTA Tour",
      Start: "17:00",
      End: "03:30",
      Category: "Tennis",
      Link: "https://www.tvmovie.de/tv/tennis-atp-und-wta-tour-epg-1229224121",
      Thumbnail:
        "https://images.tvmovie.de/tennis,id=e46384de,b=tvmovie,w=500,ca=30.99,0,89.01,100,rm=sk.webp",
      Progress: 19,
    },
    after: {
      Program: "Basketball: WNBA",
      Start: "03:30",
      End: "06:00",
      Category: "Basketball",
      Link: "https://www.tvmovie.de/tv/basketball-wnba-epg-1229224122",
      Thumbnail:
        "https://images.tvmovie.de/basketball,id=814be6d7,b=tvmovie,w=500,ca=0,0,74.35,100,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "Sky Sport Mix HD",
    KanalLogo:
      "https://images.tvmovie.de/sky-sport-mix-programm,id=ba534f91,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Basketball: WNBA",
      Start: "19:00",
      End: "21:00",
      Category: "Basketball",
      Link: "https://www.tvmovie.de/tv/basketball-wnba-epg-1229236639",
      Thumbnail:
        "https://images.tvmovie.de/basketball,id=814be6d7,b=tvmovie,w=500,ca=0,0,74.35,100,rm=sk.webp",
      Progress: 0,
    },
    after: {
      Program: "MotoGP: Großer Preis von Deutschland",
      Start: "21:00",
      End: "22:00",
      Category: "Motorrad",
      Link: "https://www.tvmovie.de/tv/motogp-grosser-preis-von-deutschland-epg-1229236641",
      Thumbnail:
        "https://images.tvmovie.de/motogp,id=1352efca,b=tvmovie,w=500,ca=7.67,0,74.33,100,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "Sky Sport Premier League",
    KanalLogo:
      "https://images.tvmovie.de/sky-sport-premier-league-programm,id=24e25d9c,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "90in30",
      Start: "18:30",
      End: "19:00",
      Category: "Fußballmagazin",
      Link: "https://www.tvmovie.de/tv/90in30-epg-229166268",
      Thumbnail:
        "https://images.tvmovie.de/epg-16-9,id=62e71af4,b=tvmovie,w=500,ca=21.88,0.00,78.13,100.00,rm=sk.webp",
      Progress: 97,
    },
    after: {
      Program: "PL Rewind",
      Start: "19:00",
      End: "19:30",
      Category: "Fußballmagazin",
      Link: "https://www.tvmovie.de/tv/pl-rewind-epg-229166270",
      Thumbnail:
        "https://images.tvmovie.de/epg-16-9,id=62e71af4,b=tvmovie,w=500,ca=21.88,0.00,78.13,100.00,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "Sky Sport Tennis HD",
    KanalLogo:
      "https://images.tvmovie.de/sky-sport-tennis-programm,id=286e6633,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Tennis: ATP und WTA Tour",
      Start: "17:00",
      End: "05:00",
      Category: "Tennis",
      Link: "https://www.tvmovie.de/tv/tennis-atp-und-wta-tour-epg-1229220916",
      Thumbnail:
        "https://images.tvmovie.de/tennis,id=e46384de,b=tvmovie,w=500,ca=30.99,0,89.01,100,rm=sk.webp",
      Progress: 17,
    },
    after: {
      Program: "Tennis: ATP 500",
      Start: "05:00",
      End: "06:00",
      Category: "Tennis",
      Link: "https://www.tvmovie.de/tv/tennis-atp-500-epg-1229220918",
      Thumbnail:
        "https://images.tvmovie.de/tennis,id=e46384de,b=tvmovie,w=500,ca=30.99,0,89.01,100,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "Sky Sport Golf",
    KanalLogo:
      "https://images.tvmovie.de/sky-sport-golf-programm,id=28c619f0,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Golf: Women's Open",
      Start: "18:00",
      End: "21:00",
      Category: "Golf",
      Link: "https://www.tvmovie.de/tv/golf-womens-open-epg-229229711",
      Thumbnail:
        "https://images.tvmovie.de/golfsport,id=377fb37c,b=tvmovie,w=500,ca=24.87,0,81.13,100,rm=sk.webp",
      Progress: 33,
    },
    after: {
      Program: "Golf: Women's Open",
      Start: "21:00",
      End: "00:00",
      Category: "Golf",
      Link: "https://www.tvmovie.de/tv/golf-womens-open-epg-229229756",
      Thumbnail:
        "https://images.tvmovie.de/golfsport,id=377fb37c,b=tvmovie,w=500,ca=24.87,0,81.13,100,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "Dyn Highlights",
    KanalLogo:
      "https://images.tvmovie.de/dyn-highlights-programm,id=732a420d,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Tischtennis: Champions Yokohama",
      Start: "04:00",
      End: "07:00",
      Category: "Tischtennis",
      Link: "https://www.tvmovie.de/tv/tischtennis-champions-yokohama-epg-229861566",
      Thumbnail:
        "https://images.tvmovie.de/epg-16-9,id=62e71af4,b=tvmovie,w=500,ca=21.88,0.00,78.13,100.00,rm=sk.webp",
      Progress: 0,
    },
    after: {
      Program: "Tischtennis: World Tour",
      Start: "04:00",
      End: "04:00",
      Category: "Tischtennis",
      Link: "https://www.tvmovie.de/tv/tischtennis-world-tour-epg-231659360",
      Thumbnail:
        "https://images.tvmovie.de/epg-16-9,id=62e71af4,b=tvmovie,w=500,ca=21.88,0.00,78.13,100.00,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "Prime Sports Highlights DE",
    KanalLogo:
      "https://images.tvmovie.de/prime-sports-programm,id=315a79e6,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Basketball: WNBA",
      Start: "01:00",
      End: "03:00",
      Category: "Basketball",
      Link: "https://www.tvmovie.de/tv/basketball-wnba-epg-226309802",
      Thumbnail:
        "https://images.tvmovie.de/basketball,id=814be6d7,b=tvmovie,w=500,ca=0,0,74.35,100,rm=sk.webp",
      Progress: 0,
    },
    after: {
      Program: "Basketball: WNBA",
      Start: "03:00",
      End: "05:00",
      Category: "Basketball",
      Link: "https://www.tvmovie.de/tv/basketball-wnba-epg-226309803",
      Thumbnail:
        "https://images.tvmovie.de/basketball,id=814be6d7,b=tvmovie,w=500,ca=0,0,74.35,100,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "ANIMAL PLANET",
    KanalLogo:
      "https://images.tvmovie.de/animal-planet-1,id=f7293557,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Tierarzt Dr. Jeff",
      Start: "17:55",
      End: "18:40",
      Category: "Doku-Reihe",
      Link: "https://www.tvmovie.de/tv/tierarzt-dr-jeff-epg-229240530",
      Thumbnail:
        "https://images.tvmovie.de/0932c7135c6d9a9bed7785212e467fd20471e590,id=6e172289,b=tvmovie,w=500,ca=5.88,0.00,62.13,100.00,rm=sk.webp",
      Progress: 0,
    },
    after: {
      Program: "Lone Star Law - Die Gesetzeshüter von Texas",
      Start: "18:40",
      End: "19:30",
      Category: "Doku-Reihe",
      Link: "https://www.tvmovie.de/tv/lone-star-law-die-gesetzeshueter-von-texas-epg-229240531",
      Thumbnail:
        "https://images.tvmovie.de/6553f9c23e0c0c4fcfa039bccd323c85e138c769,id=50b7fd47,b=tvmovie,w=500,ca=30.85,0.00,87.15,100.00,rm=sk.webp",
      Progress: 38,
    },
  },
  {
    Kanal: "ANIXE",
    KanalLogo:
      "https://images.tvmovie.de/9d49cdd0-df22-11e5-9740-93b852ac6756-1,id=1f54340e,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Reppa Münzengalerie",
      Start: "18:30",
      End: "19:00",
      Category: "Verkaufsshow",
      Link: "https://www.tvmovie.de/tv/reppa-muenzengalerie-epg-230092810",
      Thumbnail:
        "https://images.tvmovie.de/epg-16-9,id=62e71af4,b=tvmovie,w=500,ca=21.88,0.00,78.13,100.00,rm=sk.webp",
      Progress: 97,
    },
    after: {
      Program: "Kochen mit Anixe",
      Start: "19:00",
      End: "19:15",
      Category: "Show",
      Link: "https://www.tvmovie.de/tv/kochen-mit-anixe-epg-230120817",
      Thumbnail:
        "https://images.tvmovie.de/epg-16-9,id=62e71af4,b=tvmovie,w=500,ca=21.88,0.00,78.13,100.00,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "ATV",
    KanalLogo:
      "https://images.tvmovie.de/a729e150-df22-11e5-9740-93b852ac6756-1,id=8d29184f,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "The Rookie",
      Start: "17:55",
      End: "18:50",
      Category: "Krimiserie",
      Link: "https://www.tvmovie.de/tv/the-rookie-epg-229890595",
      Thumbnail:
        "https://images.tvmovie.de/e9a7654ee23d83f348dfad7153318aced029bc7e,id=24fee856,b=tvmovie,w=500,ca=9.67,0.00,76.33,100.00,rm=sk.webp",
      Progress: 0,
    },
    after: {
      Program: "The Mentalist",
      Start: "18:50",
      End: "19:50",
      Category: "Krimiserie",
      Link: "https://www.tvmovie.de/tv/the-mentalist-epg-229890605",
      Thumbnail:
        "https://images.tvmovie.de/6fe86f417843a5ba21de94af9007c881fd808e1b,id=7fac5719,b=tvmovie,w=500,ca=23.67,0.00,90.33,100.00,rm=sk.webp",
      Progress: 15,
    },
  },
  {
    Kanal: "Baby TV",
    KanalLogo:
      "https://images.tvmovie.de/a30abc20-df22-11e5-9740-93b852ac6756-1,id=ebcd01af,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Guessing Games with the Cuddlies & Friends",
      Start: "18:30",
      End: "19:00",
      Category: "NN",
      Link: "https://www.tvmovie.de/tv/guessing-games-with-the-cuddlies-und-friends-epg-229935599",
      Thumbnail:
        "https://images.tvmovie.de/epg-16-9,id=62e71af4,b=tvmovie,w=500,ca=21.88,0.00,78.13,100.00,rm=sk.webp",
      Progress: 97,
    },
    after: {
      Program: "Family Fun Time & Rhymes",
      Start: "19:00",
      End: "19:30",
      Category: "NN",
      Link: "https://www.tvmovie.de/tv/family-fun-time-und-rhymes-epg-229935527",
      Thumbnail:
        "https://images.tvmovie.de/epg-16-9,id=62e71af4,b=tvmovie,w=500,ca=21.88,0.00,78.13,100.00,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "BBC World",
    KanalLogo:
      "https://images.tvmovie.de/9d9f40d0-df22-11e5-9740-93b852ac6756-1,id=367de499,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Focus on Africa",
      Start: "18:30",
      End: "19:00",
      Category: "NN",
      Link: "https://www.tvmovie.de/tv/focus-on-africa-epg-230335940",
      Thumbnail:
        "https://images.tvmovie.de/epg-16-9,id=62e71af4,b=tvmovie,w=500,ca=21.88,0.00,78.13,100.00,rm=sk.webp",
      Progress: 97,
    },
    after: {
      Program: "The World Today with Maryam Moshiri",
      Start: "19:00",
      End: "19:30",
      Category: "NN",
      Link: "https://www.tvmovie.de/tv/the-world-today-with-maryam-moshiri-epg-231064258",
      Thumbnail:
        "https://images.tvmovie.de/epg-16-9,id=62e71af4,b=tvmovie,w=500,ca=21.88,0.00,78.13,100.00,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "Beate-Uhse.TV",
    KanalLogo:
      "https://images.tvmovie.de/beate-uhse-tv-logo,id=a2c499ee,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Sendepause",
      Start: "05:45",
      End: "20:15",
      Category: "Sendeschluss",
      Link: "https://www.tvmovie.de/tv/sendepause-epg-229131648",
      Thumbnail:
        "https://images.tvmovie.de/sendepause,id=c128ac34,b=tvmovie,w=500,ca=14.67,0,81.33,100,rm=sk.webp",
      Progress: 91,
    },
    after: {
      Program: "Yoga Retreat",
      Start: "20:15",
      End: "20:35",
      Category: "Erotikserie",
      Link: "https://www.tvmovie.de/tv/yoga-retreat-epg-229131651",
      Thumbnail:
        "https://images.tvmovie.de/epg-16-9,id=62e71af4,b=tvmovie,w=500,ca=21.88,0.00,78.13,100.00,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "Bergblick",
    KanalLogo:
      "https://images.tvmovie.de/bergblick-1,id=7b21a2aa,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Bergwelten",
      Start: "18:30",
      End: "19:20",
      Category: "Dokumentation",
      Link: "https://www.tvmovie.de/tv/bergwelten-epg-229402713",
      Thumbnail:
        "https://images.tvmovie.de/b2a3d55fb8d88b449aab9fa811b877b81cb42af1,id=05fec95e,b=tvmovie,w=500,ca=11.66,0.00,78.34,100.00,rm=sk.webp",
      Progress: 58,
    },
    after: {
      Program: "Bergwelten",
      Start: "19:20",
      End: "20:15",
      Category: "Dokumentation",
      Link: "https://www.tvmovie.de/tv/bergwelten-epg-229402715",
      Thumbnail:
        "https://images.tvmovie.de/94c1be4d4ed73da565f8b5d7918e344913b5e3b9,id=152eddb5,b=tvmovie,w=500,ca=0.00,0.00,56.25,100.00,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "Bibel-TV",
    KanalLogo:
      "https://images.tvmovie.de/9dd6a480-df22-11e5-9740-93b852ac6756-1,id=b9a60dbe,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Avonlea - Das Mädchen aus der Stadt",
      Start: "18:30",
      End: "19:15",
      Category: "Abenteuerserie",
      Link: "https://www.tvmovie.de/tv/avonlea-das-maedchen-aus-der-stadt-epg-228664021",
      Thumbnail:
        "https://images.tvmovie.de/927941ffcc58346e703d06bea777b0e7947be1c0,id=9b6bb5c2,b=tvmovie,w=500,ca=28.87,0.00,85.13,100.00,rm=sk.webp",
      Progress: 65,
    },
    after: {
      Program: "Ein Hauch von Himmel",
      Start: "19:15",
      End: "20:00",
      Category: "Fantasyserie",
      Link: "https://www.tvmovie.de/tv/ein-hauch-von-himmel-epg-228664025",
      Thumbnail:
        "https://images.tvmovie.de/a705dec6bcee0bced29d1a1e17d35c98b2e2146f,id=5086b6d6,b=tvmovie,w=500,ca=11.88,0.00,68.13,100.00,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "BonGusto",
    KanalLogo:
      "https://images.tvmovie.de/a2d79e30-df22-11e5-9740-93b852ac6756-1,id=49a7da08,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Smaklig Måltid - Schweden kulinarisch",
      Start: "19:00",
      End: "19:30",
      Category: "Doku-Soap",
      Link: "https://www.tvmovie.de/tv/smaklig-maltid-schweden-kulinarisch-epg-229865890",
      Thumbnail:
        "https://images.tvmovie.de/epg-16-9,id=62e71af4,b=tvmovie,w=500,ca=21.88,0.00,78.13,100.00,rm=sk.webp",
      Progress: 0,
    },
    after: {
      Program: "Deutschland grillt - Feuer und Flamme für grenzenlosen Genuss!",
      Start: "19:30",
      End: "20:00",
      Category: "Kochshow",
      Link: "https://www.tvmovie.de/tv/deutschland-grillt-feuer-und-flamme-fuer-grenzenlosen-genuss-epg-229865889",
      Thumbnail:
        "https://images.tvmovie.de/610ec07e82c2bb7159ef6726b334ee507b1e43be,id=a6646339,b=tvmovie,w=500,ca=0.00,0.00,79.20,100.00,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "Classica",
    KanalLogo:
      "https://images.tvmovie.de/a233e420-df22-11e5-9740-93b852ac6756-1,id=1597f74d,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Tripelkonzert: Op. 56 & Symphonie Fantastique",
      Start: "17:48",
      End: "19:29",
      Category: "Konzert",
      Link: "https://www.tvmovie.de/tv/tripelkonzert-op-56-und-symphonie-fantastique-epg-230449644",
      Thumbnail:
        "https://images.tvmovie.de/62e2a914f22baf3c7a07834fd48e78168794fa8a,id=f24036a5,b=tvmovie,w=500,ca=6.66,0.00,73.34,100.00,rm=sk.webp",
      Progress: 71,
    },
    after: {
      Program: "Saint-Saëns - 3. Sinfonie: op. 78",
      Start: "19:29",
      End: "20:06",
      Category: "Konzert",
      Link: "https://www.tvmovie.de/tv/saint-saens-3-sinfonie-op-78-epg-230449649",
      Thumbnail:
        "https://images.tvmovie.de/0a8f7f0c60aa21b03a45a230b033baecdea1644e,id=080030ee,b=tvmovie,w=500,ca=23.64,0.00,90.36,100.00,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "CNN",
    KanalLogo:
      "https://images.tvmovie.de/9dacfc70-df22-11e5-9740-93b852ac6756-1,id=967f9f90,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Amanpour",
      Start: "19:00",
      End: "20:00",
      Category: "NN",
      Link: "https://www.tvmovie.de/tv/amanpour-epg-230037213",
      Thumbnail:
        "https://images.tvmovie.de/epg-16-9,id=62e71af4,b=tvmovie,w=500,ca=21.88,0.00,78.13,100.00,rm=sk.webp",
      Progress: 0,
    },
    after: {
      Program: "Isa Soares Tonight",
      Start: "20:00",
      End: "21:00",
      Category: "NN",
      Link: "https://www.tvmovie.de/tv/isa-soares-tonight-epg-228368600",
      Thumbnail:
        "https://images.tvmovie.de/epg-16-9,id=62e71af4,b=tvmovie,w=500,ca=21.88,0.00,78.13,100.00,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "Curiosity Channel",
    KanalLogo:
      "https://images.tvmovie.de/curiositychannel-color-pos-1,id=20d7b5b7,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Das geheime Leben der Raubkatzen",
      Start: "18:40",
      End: "19:10",
      Category: "Doku-Reihe",
      Link: "https://www.tvmovie.de/tv/das-geheime-leben-der-raubkatzen-epg-228540176",
      Thumbnail:
        "https://images.tvmovie.de/epg-16-9,id=62e71af4,b=tvmovie,w=500,ca=21.88,0.00,78.13,100.00,rm=sk.webp",
      Progress: 64,
    },
    after: {
      Program: "Das geheime Leben der Raubkatzen",
      Start: "19:10",
      End: "19:40",
      Category: "Doku-Reihe",
      Link: "https://www.tvmovie.de/tv/das-geheime-leben-der-raubkatzen-epg-228540179",
      Thumbnail:
        "https://images.tvmovie.de/f24356106d7d7638628510e74f49a75b2a1df4f0,id=fa0949c0,b=tvmovie,w=500,ca=0.00,0.00,56.25,100.00,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "DELUXE MUSIC TV",
    KanalLogo:
      "https://images.tvmovie.de/9d6bd4c0-df22-11e5-9740-93b852ac6756-1,id=aea08f60,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Countdown Deluxe",
      Start: "19:00",
      End: "20:00",
      Category: "Musik",
      Link: "https://www.tvmovie.de/tv/countdown-deluxe-epg-229332657",
      Thumbnail:
        "https://images.tvmovie.de/epg-16-9,id=62e71af4,b=tvmovie,w=500,ca=21.88,0.00,78.13,100.00,rm=sk.webp",
      Progress: 0,
    },
    after: {
      Program: "ALBUM CHARTS TOP 25",
      Start: "20:00",
      End: "22:00",
      Category: "Musikmagazin",
      Link: "https://www.tvmovie.de/tv/album-charts-top-25-epg-229332670",
      Thumbnail:
        "https://images.tvmovie.de/epg-16-9,id=62e71af4,b=tvmovie,w=500,ca=21.88,0.00,78.13,100.00,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "Discovery Channel",
    KanalLogo:
      "https://images.tvmovie.de/a340c040-df22-11e5-9740-93b852ac6756-1,id=dd0097cf,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Expedition ins Unbekannte",
      Start: "18:40",
      End: "19:25",
      Category: "Doku-Reihe",
      Link: "https://www.tvmovie.de/tv/expedition-ins-unbekannte-epg-229255301",
      Thumbnail:
        "https://images.tvmovie.de/f0e71fea88c6b7da19474aa478a72a767313a1f1,id=7fd50c22,b=tvmovie,w=500,ca=11.88,0.00,68.13,100.00,rm=sk.webp",
      Progress: 43,
    },
    after: {
      Program: "Expedition ins Unbekannte",
      Start: "19:25",
      End: "20:15",
      Category: "Doku-Reihe",
      Link: "https://www.tvmovie.de/tv/expedition-ins-unbekannte-epg-229255302",
      Thumbnail:
        "https://images.tvmovie.de/f0e71fea88c6b7da19474aa478a72a767313a1f1,id=9f1e166b,b=tvmovie,w=500,ca=11.88,0.00,68.13,100.00,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "EURONEWS",
    KanalLogo:
      "https://images.tvmovie.de/9db783c0-df22-11e5-9740-93b852ac6756-1,id=78252f70,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Europa im blickpunkt",
      Start: "19:00",
      End: "19:15",
      Category: "Nachrichten",
      Link: "https://www.tvmovie.de/tv/europa-im-blickpunkt-epg-231076990",
      Thumbnail:
        "https://images.tvmovie.de/epg-16-9,id=62e71af4,b=tvmovie,w=500,ca=21.88,0.00,78.13,100.00,rm=sk.webp",
      Progress: 0,
    },
    after: {
      Program: "Europa im blickpunkt",
      Start: "19:15",
      End: "19:30",
      Category: "Nachrichten",
      Link: "https://www.tvmovie.de/tv/europa-im-blickpunkt-epg-231077018",
      Thumbnail:
        "https://images.tvmovie.de/epg-16-9,id=62e71af4,b=tvmovie,w=500,ca=21.88,0.00,78.13,100.00,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "fashiontv",
    KanalLogo:
      "https://images.tvmovie.de/a272c1e0-df22-11e5-9740-93b852ac6756-1,id=875a7566,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Most Watched",
      Start: "19:00",
      End: "19:30",
      Category: "NN",
      Link: "https://www.tvmovie.de/tv/most-watched-epg-230698515",
      Thumbnail:
        "https://images.tvmovie.de/epg-16-9,id=62e71af4,b=tvmovie,w=500,ca=21.88,0.00,78.13,100.00,rm=sk.webp",
      Progress: 0,
    },
    after: {
      Program: "Most Watched",
      Start: "19:30",
      End: "20:00",
      Category: "NN",
      Link: "https://www.tvmovie.de/tv/most-watched-epg-230698523",
      Thumbnail:
        "https://images.tvmovie.de/epg-16-9,id=62e71af4,b=tvmovie,w=500,ca=21.88,0.00,78.13,100.00,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "Goldstar TV",
    KanalLogo:
      "https://images.tvmovie.de/a1e4d9c0-df22-11e5-9740-93b852ac6756-1,id=0394ce98,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "SchlagerBox",
      Start: "19:00",
      End: "20:00",
      Category: "Clips",
      Link: "https://www.tvmovie.de/tv/schlagerbox-epg-231113466",
      Thumbnail:
        "https://images.tvmovie.de/epg-16-9,id=62e71af4,b=tvmovie,w=500,ca=21.88,0.00,78.13,100.00,rm=sk.webp",
      Progress: 0,
    },
    after: {
      Program: "Hitcocktail",
      Start: "20:00",
      End: "21:00",
      Category: "Clips",
      Link: "https://www.tvmovie.de/tv/hitcocktail-epg-231113778",
      Thumbnail:
        "https://images.tvmovie.de/epg-16-9,id=62e71af4,b=tvmovie,w=500,ca=21.88,0.00,78.13,100.00,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "Gute Laune TV",
    KanalLogo:
      "https://images.tvmovie.de/a2b681a0-df22-11e5-9740-93b852ac6756-1,id=6acdf1e1,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Schlager aktuell!",
      Start: "19:00",
      End: "21:00",
      Category: "Musikmagazin",
      Link: "https://www.tvmovie.de/tv/schlager-aktuell-epg-227227304",
      Thumbnail:
        "https://images.tvmovie.de/epg-16-9,id=62e71af4,b=tvmovie,w=500,ca=21.88,0.00,78.13,100.00,rm=sk.webp",
      Progress: 0,
    },
    after: {
      Program: "Schlager-Express",
      Start: "21:00",
      End: "22:00",
      Category: "Musikmagazin",
      Link: "https://www.tvmovie.de/tv/schlager-express-epg-227227312",
      Thumbnail:
        "https://images.tvmovie.de/epg-16-9,id=62e71af4,b=tvmovie,w=500,ca=21.88,0.00,78.13,100.00,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "Heimatkanal",
    KanalLogo:
      "https://images.tvmovie.de/a1eca1f0-df22-11e5-9740-93b852ac6756-1,id=dc36ff60,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Die seltsamen Methoden des Franz Josef Wanninger",
      Start: "18:55",
      End: "19:25",
      Category: "Krimiserie",
      Link: "https://www.tvmovie.de/tv/die-seltsamen-methoden-des-franz-josef-wanninger-epg-228156543",
      Thumbnail:
        "https://images.tvmovie.de/epg-16-9,id=62e71af4,b=tvmovie,w=500,ca=21.88,0.00,78.13,100.00,rm=sk.webp",
      Progress: 14,
    },
    after: {
      Program: "Die Schwarzwaldklinik",
      Start: "19:25",
      End: "20:15",
      Category: "Arztserie",
      Link: "https://www.tvmovie.de/tv/die-schwarzwaldklinik-epg-228156544",
      Thumbnail:
        "https://images.tvmovie.de/epg-16-9,id=62e71af4,b=tvmovie,w=500,ca=21.88,0.00,78.13,100.00,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "History",
    KanalLogo:
      "https://images.tvmovie.de/history-logo,id=46d7053b,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Ancient Aliens - Unerklärliche Phänomene",
      Start: "18:40",
      End: "19:30",
      Category: "Doku-Reihe",
      Link: "https://www.tvmovie.de/tv/ancient-aliens-unerklaerliche-phaenomene-epg-228085930",
      Thumbnail:
        "https://images.tvmovie.de/46d79afde29915220eb7c83b9304ce9a44acb087,id=ae9d7cb0,b=tvmovie,w=500,ca=33.34,0.00,100.00,100.00,rm=sk.webp",
      Progress: 39,
    },
    after: {
      Program: "Ancient Aliens - Unerklärliche Phänomene",
      Start: "19:30",
      End: "20:15",
      Category: "Doku-Reihe",
      Link: "https://www.tvmovie.de/tv/ancient-aliens-unerklaerliche-phaenomene-epg-228085933",
      Thumbnail:
        "https://images.tvmovie.de/9cfb11023dd3381629d8b0b0d5a185d1ea46b890,id=11e3de78,b=tvmovie,w=500,ca=25.57,0.00,66.42,100.00,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "HSE",
    KanalLogo:
      "https://images.tvmovie.de/hse-tv-1,id=ef44853f,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Dr. Peter Hartig: Für Ihre Gesundheit",
      Start: "19:00",
      End: "20:00",
      Category: "Verkaufsshow",
      Link: "https://www.tvmovie.de/tv/dr-peter-hartig-fuer-ihre-gesundheit-epg-228988669",
      Thumbnail:
        "https://images.tvmovie.de/epg-16-9,id=62e71af4,b=tvmovie,w=500,ca=21.88,0.00,78.13,100.00,rm=sk.webp",
      Progress: 0,
    },
    after: {
      Program: "Diamond Collection Diamanten in Gold",
      Start: "20:00",
      End: "21:00",
      Category: "Verkaufsshow",
      Link: "https://www.tvmovie.de/tv/diamond-collection-diamanten-in-gold-epg-228988672",
      Thumbnail:
        "https://images.tvmovie.de/epg-16-9,id=62e71af4,b=tvmovie,w=500,ca=21.88,0.00,78.13,100.00,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "Jukebox",
    KanalLogo:
      "https://images.tvmovie.de/a2c32bd0-df22-11e5-9740-93b852ac6756-1,id=3791f918,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Logout",
      Start: "18:00",
      End: "20:00",
      Category: "Musikmagazin",
      Link: "https://www.tvmovie.de/tv/logout-epg-229332846",
      Thumbnail:
        "https://images.tvmovie.de/epg-16-9,id=62e71af4,b=tvmovie,w=500,ca=21.88,0.00,78.13,100.00,rm=sk.webp",
      Progress: 49,
    },
    after: {
      Program: "Jukebox Top 50 Mix",
      Start: "20:00",
      End: "22:00",
      Category: "Musikmagazin",
      Link: "https://www.tvmovie.de/tv/jukebox-top-50-mix-epg-229332831",
      Thumbnail:
        "https://images.tvmovie.de/epg-16-9,id=62e71af4,b=tvmovie,w=500,ca=21.88,0.00,78.13,100.00,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "K-TV",
    KanalLogo:
      "https://images.tvmovie.de/a7366470-df22-11e5-9740-93b852ac6756-1,id=31809960,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Brennpunkt Weltkirche",
      Start: "19:00",
      End: "19:30",
      Category: "Magazin",
      Link: "https://www.tvmovie.de/tv/brennpunkt-weltkirche-epg-231786307",
      Thumbnail:
        "https://images.tvmovie.de/brennpunkt-logo,id=320cce51,b=tvmovie,w=500,ca=20,0,86,100,rm=sk.webp",
      Progress: 0,
    },
    after: {
      Program: "GranDios",
      Start: "19:30",
      End: "20:00",
      Category: "Gespräch",
      Link: "https://www.tvmovie.de/tv/grandios-epg-231786313",
      Thumbnail:
        "https://images.tvmovie.de/epg-16-9,id=62e71af4,b=tvmovie,w=500,ca=21.88,0.00,78.13,100.00,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "LUST PUR",
    KanalLogo:
      "https://images.tvmovie.de/a317db80-df22-11e5-9740-93b852ac6756-1,id=387e62ff,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Sendepause",
      Start: "06:00",
      End: "20:00",
      Category: "Sendeschluss",
      Link: "https://www.tvmovie.de/tv/sendepause-epg-230199961",
      Thumbnail:
        "https://images.tvmovie.de/sendepause,id=c128ac34,b=tvmovie,w=500,ca=14.67,0,81.33,100,rm=sk.webp",
      Progress: 93,
    },
    after: {
      Program: "Heidi Heida II",
      Start: "20:00",
      End: "21:30",
      Category: "Erotikfilm",
      Link: "https://www.tvmovie.de/tv/heidi-heida-ii-epg-230199962",
      Thumbnail:
        "https://images.tvmovie.de/epg-16-9,id=62e71af4,b=tvmovie,w=500,ca=21.88,0.00,78.13,100.00,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "LUXE TV",
    KanalLogo:
      "https://images.tvmovie.de/a8a70b70-df22-11e5-9740-93b852ac6756-1,id=7679e69a,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Vintage 20th Anniversary Of Luxe.tv",
      Start: "19:00",
      End: "20:00",
      Category: "NN",
      Link: "https://www.tvmovie.de/tv/vintage-20th-anniversary-of-luxetv-epg-230839288",
      Thumbnail:
        "https://images.tvmovie.de/epg-16-9,id=62e71af4,b=tvmovie,w=500,ca=21.88,0.00,78.13,100.00,rm=sk.webp",
      Progress: 0,
    },
    after: {
      Program: "Vintage 20th Anniversary Of Luxe.tv",
      Start: "20:00",
      End: "21:00",
      Category: "NN",
      Link: "https://www.tvmovie.de/tv/vintage-20th-anniversary-of-luxetv-epg-230839262",
      Thumbnail:
        "https://images.tvmovie.de/epg-16-9,id=62e71af4,b=tvmovie,w=500,ca=21.88,0.00,78.13,100.00,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "MEZZO",
    KanalLogo:
      "https://images.tvmovie.de/a8c6a160-df22-11e5-9740-93b852ac6756-1,id=16f10d83,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program:
        "Berliner Philharmoniker, Pierre Boulez: Ravel, Mozart, Bartók, Debussy",
      Start: "18:29",
      End: "20:30",
      Category: "NN",
      Link: "https://www.tvmovie.de/tv/berliner-philharmoniker-pierre-boulez-ravel-mozart-bartok-debussy-epg-229975730",
      Thumbnail:
        "https://images.tvmovie.de/ed58686d06b27ba0866120a84a7c250f93bada24,id=4118221f,b=tvmovie,w=500,ca=0.00,0.00,62.50,100.00,rm=sk.webp",
      Progress: 25,
    },
    after: {
      Program: "Dietrich Fischer-Dieskau: Last Words",
      Start: "20:30",
      End: "21:23",
      Category: "Porträt",
      Link: "https://www.tvmovie.de/tv/dietrich-fischer-dieskau-last-words-epg-229975731",
      Thumbnail:
        "https://images.tvmovie.de/epg-16-9,id=62e71af4,b=tvmovie,w=500,ca=21.88,0.00,78.13,100.00,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "MOTORVISION TV",
    KanalLogo:
      "https://images.tvmovie.de/a16fd0d0-df22-11e5-9740-93b852ac6756-1,id=6d21a922,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Rallye: Belgische Meisterschaft",
      Start: "18:40",
      End: "19:10",
      Category: "Motorsport",
      Link: "https://www.tvmovie.de/tv/rallye-belgische-meisterschaft-epg-229961454",
      Thumbnail:
        "https://images.tvmovie.de/epg-16-9,id=62e71af4,b=tvmovie,w=500,ca=21.88,0.00,78.13,100.00,rm=sk.webp",
      Progress: 64,
    },
    after: {
      Program: "Rallye: Britische Meisterschaft",
      Start: "19:10",
      End: "20:00",
      Category: "Motorsport",
      Link: "https://www.tvmovie.de/tv/rallye-britische-meisterschaft-epg-229961455",
      Thumbnail:
        "https://images.tvmovie.de/epg-16-9,id=62e71af4,b=tvmovie,w=500,ca=21.88,0.00,78.13,100.00,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "MTV",
    KanalLogo:
      "https://images.tvmovie.de/a23ac1f0-df22-11e5-9740-93b852ac6756-1,id=71babba3,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Catfish: The TV Series",
      Start: "18:20",
      End: "19:10",
      Category: "Doku-Soap",
      Link: "https://www.tvmovie.de/tv/catfish-the-tv-series-epg-229139077",
      Thumbnail:
        "https://images.tvmovie.de/80678faa7e83c1eff60dd1e01fe9aadabbf8c97c,id=5e5d09af,b=tvmovie,w=500,ca=24.88,0.00,81.12,100.00,rm=sk.webp",
      Progress: 79,
    },
    after: {
      Program: "Catfish: The TV Series",
      Start: "19:10",
      End: "19:50",
      Category: "Doku-Soap",
      Link: "https://www.tvmovie.de/tv/catfish-the-tv-series-epg-229139080",
      Thumbnail:
        "https://images.tvmovie.de/1f9a08ccc2968c5d5fb432d5711986c01a57b635,id=4719dc07,b=tvmovie,w=500,ca=8.87,0.00,65.13,100.00,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "N24 Doku",
    KanalLogo:
      "https://images.tvmovie.de/96d3c06d-e034-4628-a3a1-c28f35460ac0-1,id=f9271c50,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Border Patrol USA - Einsatz an Mexikos Grenze",
      Start: "18:30",
      End: "19:20",
      Category: "Doku-Reihe",
      Link: "https://www.tvmovie.de/tv/border-patrol-usa-einsatz-an-mexikos-grenze-epg-229272935",
      Thumbnail:
        "https://images.tvmovie.de/border-patrol-usa-einsatz-an-mexikos-grenze,id=7e68b85a,b=tvmovie,w=500,ca=28.77,0,77.22,100,rm=sk.webp",
      Progress: 59,
    },
    after: {
      Program: "Border Patrol USA - Einsatz an Mexikos Grenze",
      Start: "19:20",
      End: "20:15",
      Category: "Doku-Reihe",
      Link: "https://www.tvmovie.de/tv/border-patrol-usa-einsatz-an-mexikos-grenze-epg-229272938",
      Thumbnail:
        "https://images.tvmovie.de/border-patrol-usa-einsatz-an-mexikos-grenze,id=7e68b85a,b=tvmovie,w=500,ca=28.77,0,77.22,100,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "Nat Geo Wild",
    KanalLogo:
      "https://images.tvmovie.de/a17faf50-df22-11e5-9740-93b852ac6756-1,id=2b1d0ec5,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Der unglaubliche Dr. Pol",
      Start: "18:40",
      End: "19:25",
      Category: "Doku-Soap",
      Link: "https://www.tvmovie.de/tv/der-unglaubliche-dr-pol-epg-228668563",
      Thumbnail:
        "https://images.tvmovie.de/aa685edf41523d239b4a2281be5003b64f7b2879,id=5eca253a,b=tvmovie,w=500,ca=0.00,0.00,74.90,100.00,rm=sk.webp",
      Progress: 43,
    },
    after: {
      Program: "Der unglaubliche Dr. Pol",
      Start: "19:25",
      End: "20:15",
      Category: "Doku-Soap",
      Link: "https://www.tvmovie.de/tv/der-unglaubliche-dr-pol-epg-228668566",
      Thumbnail:
        "https://images.tvmovie.de/de3062062fc89c92a9a3ca634d07e4c0fad19761,id=f9fe8ed8,b=tvmovie,w=500,ca=0.66,0.00,67.34,100.00,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "National Geographic",
    KanalLogo:
      "https://images.tvmovie.de/a17723d0-df22-11e5-9740-93b852ac6756-1,id=33fc4061,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Sekunden vor dem Unglück",
      Start: "18:25",
      End: "19:20",
      Category: "Doku-Reihe",
      Link: "https://www.tvmovie.de/tv/sekunden-vor-dem-unglueck-epg-228668993",
      Thumbnail:
        "https://images.tvmovie.de/c3d9b93ec79fae322a5bffc86b3df11afbccd37a,id=963bb35e,b=tvmovie,w=500,ca=0.00,0.00,69.31,100.00,rm=sk.webp",
      Progress: 62,
    },
    after: {
      Program: "Sekunden vor dem Unglück",
      Start: "19:20",
      End: "20:15",
      Category: "Doku-Reihe",
      Link: "https://www.tvmovie.de/tv/sekunden-vor-dem-unglueck-epg-228668995",
      Thumbnail:
        "https://images.tvmovie.de/4205f1c0962bec7e41c1c65aa3453e6857ad00e5,id=e44289a7,b=tvmovie,w=500,ca=0.00,0.00,66.65,100.00,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "NTV",
    KanalLogo:
      "https://images.tvmovie.de/ntv-logo-rgb-1,id=39e05126,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Nachrichten",
      Start: "19:00",
      End: "19:15",
      Category: "Nachrichten",
      Link: "https://www.tvmovie.de/tv/nachrichten-epg-229291401",
      Thumbnail:
        "https://images.tvmovie.de/43e614db275845546e75dae3d28cf2753e5b2bf4,id=c0095e50,b=tvmovie,w=500,ca=6.88,0.00,63.13,100.00,rm=sk.webp",
      Progress: 0,
    },
    after: {
      Program: "ntv Wirtschaft",
      Start: "19:15",
      End: "19:30",
      Category: "Wirtschaftsmagazin",
      Link: "https://www.tvmovie.de/tv/ntv-wirtschaft-epg-229291402",
      Thumbnail:
        "https://images.tvmovie.de/a6c5beec0fb2f3243a95fe7ca3d1f461ce4f554e,id=d6e36f2d,b=tvmovie,w=500,ca=0.00,0.00,56.25,100.00,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "OKTO TV",
    KanalLogo:
      "https://images.tvmovie.de/a7418800-df22-11e5-9740-93b852ac6756-1,id=663820ce,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Democracy Now!",
      Start: "19:00",
      End: "20:35",
      Category: "Politmagazin",
      Link: "https://www.tvmovie.de/tv/democracy-now-epg-231198198",
      Thumbnail:
        "https://images.tvmovie.de/epg-16-9,id=62e71af4,b=tvmovie,w=500,ca=21.88,0.00,78.13,100.00,rm=sk.webp",
      Progress: 0,
    },
    after: {
      Program: "Mein Weg",
      Start: "20:35",
      End: "22:10",
      Category: "Interview",
      Link: "https://www.tvmovie.de/tv/mein-weg-epg-231198200",
      Thumbnail:
        "https://images.tvmovie.de/epg-16-9,id=62e71af4,b=tvmovie,w=500,ca=21.88,0.00,78.13,100.00,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "ORF 1",
    KanalLogo:
      "https://images.tvmovie.de/orf1-1,id=ba560ff0,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Q1 Ein Hinweis ist falsch",
      Start: "18:45",
      End: "19:30",
      Category: "Quiz",
      Link: "https://www.tvmovie.de/tv/q1-ein-hinweis-ist-falsch-epg-229861830",
      Thumbnail:
        "https://images.tvmovie.de/171b426663d883c9383c475ceb597472ac110765,id=88b4a9a4,b=tvmovie,w=500,ca=13.14,0.00,78.86,100.00,rm=sk.webp",
      Progress: 32,
    },
    after: {
      Program: "Zeit im Bild",
      Start: "19:30",
      End: "19:51",
      Category: "Nachrichten",
      Link: "https://www.tvmovie.de/tv/zeit-im-bild-epg-229861829",
      Thumbnail:
        "https://images.tvmovie.de/d724afd8152eebd9da3bcbcaaf7d0b6da1cc65d2,id=42ff07d3,b=tvmovie,w=500,ca=21.30,0.00,86.70,100.00,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "ORF 2",
    KanalLogo:
      "https://images.tvmovie.de/orf2-1,id=72ad6875,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Bundesland heute",
      Start: "19:00",
      End: "19:30",
      Category: "Nachrichtenmagazin",
      Link: "https://www.tvmovie.de/tv/bundesland-heute-epg-229894493",
      Thumbnail:
        "https://images.tvmovie.de/epg-16-9,id=62e71af4,b=tvmovie,w=500,ca=21.88,0.00,78.13,100.00,rm=sk.webp",
      Progress: 0,
    },
    after: {
      Program: "Zeit im Bild",
      Start: "19:30",
      End: "19:51",
      Category: "Nachrichten",
      Link: "https://www.tvmovie.de/tv/zeit-im-bild-epg-229894495",
      Thumbnail:
        "https://images.tvmovie.de/d724afd8152eebd9da3bcbcaaf7d0b6da1cc65d2,id=81d80cde,b=tvmovie,w=500,ca=21.30,0.00,86.70,100.00,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "PULS 4",
    KanalLogo:
      "https://images.tvmovie.de/a73049f0-df22-11e5-9740-93b852ac6756-1,id=06b1a5f3,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Two and a Half Men",
      Start: "18:55",
      End: "19:20",
      Category: "Sitcom",
      Link: "https://www.tvmovie.de/tv/two-and-a-half-men-epg-229765233",
      Thumbnail:
        "https://images.tvmovie.de/dcf74f0d1edc6c07df1df9d1a86c906cea3b843a,id=5f5cbeb4,b=tvmovie,w=500,ca=7.42,0.00,72.58,100.00,rm=sk.webp",
      Progress: 17,
    },
    after: {
      Program: "Two and a Half Men",
      Start: "19:20",
      End: "19:50",
      Category: "Sitcom",
      Link: "https://www.tvmovie.de/tv/two-and-a-half-men-epg-229765234",
      Thumbnail:
        "https://images.tvmovie.de/2a62a10914c74837f04a716b5e0de1a25db5ef66,id=1393c1da,b=tvmovie,w=500,ca=15.42,0.00,80.58,100.00,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "QVC",
    KanalLogo:
      "https://images.tvmovie.de/qvc-1,id=d70e34bd,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Kipling Taschen",
      Start: "19:00",
      End: "20:00",
      Category: "Verkaufsshow",
      Link: "https://www.tvmovie.de/tv/kipling-taschen-epg-228330054",
      Thumbnail:
        "https://images.tvmovie.de/epg-16-9,id=62e71af4,b=tvmovie,w=500,ca=21.88,0.00,78.13,100.00,rm=sk.webp",
      Progress: 0,
    },
    after: {
      Program: "Beauty Night",
      Start: "20:00",
      End: "21:00",
      Category: "Verkaufsshow",
      Link: "https://www.tvmovie.de/tv/beauty-night-epg-228330064",
      Thumbnail:
        "https://images.tvmovie.de/epg-16-9,id=62e71af4,b=tvmovie,w=500,ca=21.88,0.00,78.13,100.00,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "RTL Living",
    KanalLogo:
      "https://images.tvmovie.de/rtlliving-1,id=5af93524,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Jamies 30-Minuten-Menüs genial geplant",
      Start: "18:55",
      End: "19:25",
      Category: "Kochshow",
      Link: "https://www.tvmovie.de/tv/jamies-30-minuten-menues-genial-geplant-epg-229203932",
      Thumbnail:
        "https://images.tvmovie.de/39afa64c22b9e3962250ce01065be756ad0c2dc6,id=6d7801b2,b=tvmovie,w=500,ca=12.50,0.00,87.50,100.00,rm=sk.webp",
      Progress: 14,
    },
    after: {
      Program: "Simply Jamie: Jeden Tag was Gutes",
      Start: "19:25",
      End: "20:15",
      Category: "Magazin",
      Link: "https://www.tvmovie.de/tv/simply-jamie-jeden-tag-was-gutes-epg-229203933",
      Thumbnail:
        "https://images.tvmovie.de/epg-16-9,id=62e71af4,b=tvmovie,w=500,ca=21.88,0.00,78.13,100.00,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "Sonnenklar.TV",
    KanalLogo:
      "https://images.tvmovie.de/a2cf60d0-df22-11e5-9740-93b852ac6756-1,id=2d65d0ff,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Reisecharts",
      Start: "19:00",
      End: "19:15",
      Category: "NN",
      Link: "https://www.tvmovie.de/tv/reisecharts-epg-230239369",
      Thumbnail:
        "https://images.tvmovie.de/epg-16-9,id=62e71af4,b=tvmovie,w=500,ca=21.88,0.00,78.13,100.00,rm=sk.webp",
      Progress: 0,
    },
    after: {
      Program: "Urlaub für ALLE",
      Start: "19:15",
      End: "19:30",
      Category: "Reisemagazin",
      Link: "https://www.tvmovie.de/tv/urlaub-fuer-alle-epg-230239377",
      Thumbnail:
        "https://images.tvmovie.de/epg-16-9,id=62e71af4,b=tvmovie,w=500,ca=21.88,0.00,78.13,100.00,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "Spiegel Geschichte",
    KanalLogo:
      "https://images.tvmovie.de/spiegel-geschichte,id=aff8e711,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Inside New York",
      Start: "18:55",
      End: "19:25",
      Category: "Doku-Reihe",
      Link: "https://www.tvmovie.de/tv/inside-new-york-epg-228532185",
      Thumbnail:
        "https://images.tvmovie.de/epg-16-9,id=62e71af4,b=tvmovie,w=500,ca=21.88,0.00,78.13,100.00,rm=sk.webp",
      Progress: 14,
    },
    after: {
      Program: "Inside New York",
      Start: "19:25",
      End: "19:50",
      Category: "Doku-Reihe",
      Link: "https://www.tvmovie.de/tv/inside-new-york-epg-228532182",
      Thumbnail:
        "https://images.tvmovie.de/epg-16-9,id=62e71af4,b=tvmovie,w=500,ca=21.88,0.00,78.13,100.00,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "SRF 1",
    KanalLogo:
      "https://images.tvmovie.de/9d911000-df22-11e5-9740-93b852ac6756-1,id=fe13ccb7,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Schweiz aktuell",
      Start: "19:00",
      End: "19:25",
      Category: "Nachrichtenmagazin",
      Link: "https://www.tvmovie.de/tv/schweiz-aktuell-epg-229299954",
      Thumbnail:
        "https://images.tvmovie.de/epg-16-9,id=62e71af4,b=tvmovie,w=500,ca=21.88,0.00,78.13,100.00,rm=sk.webp",
      Progress: 0,
    },
    after: {
      Program: "SRF Börse",
      Start: "19:25",
      End: "19:30",
      Category: "Nachrichten",
      Link: "https://www.tvmovie.de/tv/srf-boerse-epg-229299959",
      Thumbnail:
        "https://images.tvmovie.de/ee569f8c3cf17fcf8bc463fb89f138c30ede1bb5,id=649ff8dd,b=tvmovie,w=500,ca=33.35,0.00,100.00,100.00,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "SRF zwei",
    KanalLogo:
      "https://images.tvmovie.de/9d98d830-df22-11e5-9740-93b852ac6756-1,id=f4407a13,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Life@SRF",
      Start: "18:55",
      End: "19:30",
      Category: "Magazin",
      Link: "https://www.tvmovie.de/tv/lifesrf-epg-229353309",
      Thumbnail:
        "https://images.tvmovie.de/epg-16-9,id=62e71af4,b=tvmovie,w=500,ca=21.88,0.00,78.13,100.00,rm=sk.webp",
      Progress: 12,
    },
    after: {
      Program: "Tagesschau",
      Start: "19:30",
      End: "20:00",
      Category: "Nachrichten",
      Link: "https://www.tvmovie.de/tv/tagesschau-epg-229353311",
      Thumbnail:
        "https://images.tvmovie.de/1-tagesschau,id=7c808a81,b=tvmovie,w=500,ca=23.43,0,80.57,100,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "tagesschau24",
    KanalLogo:
      "https://images.tvmovie.de/tagesschau24-logo,id=7999de56,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Tagesschau in Einfacher Sprache",
      Start: "19:00",
      End: "19:08",
      Category: "Nachrichten",
      Link: "https://www.tvmovie.de/tv/tagesschau-in-einfacher-sprache-epg-229311335",
      Thumbnail:
        "https://images.tvmovie.de/1-tagesschau,id=7c808a81,b=tvmovie,w=500,ca=23.43,0,80.57,100,rm=sk.webp",
      Progress: 0,
    },
    after: {
      Program: "Tagesschau-Nachrichten",
      Start: "19:08",
      End: "20:00",
      Category: "Nachrichten",
      Link: "https://www.tvmovie.de/tv/tagesschau-nachrichten-epg-229311337",
      Thumbnail:
        "https://images.tvmovie.de/1-tagesschau,id=7c808a81,b=tvmovie,w=500,ca=23.43,0,80.57,100,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "TRACE",
    KanalLogo:
      "https://images.tvmovie.de/a3851c40-df22-11e5-9740-93b852ac6756-1,id=c0116da0,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Hits Non Stop",
      Start: "14:00",
      End: "20:00",
      Category: "NN",
      Link: "https://www.tvmovie.de/tv/hits-non-stop-epg-229888647",
      Thumbnail:
        "https://images.tvmovie.de/epg-16-9,id=62e71af4,b=tvmovie,w=500,ca=21.88,0.00,78.13,100.00,rm=sk.webp",
      Progress: 83,
    },
    after: {
      Program: "Urban Hit 10",
      Start: "20:00",
      End: "20:45",
      Category: "NN",
      Link: "https://www.tvmovie.de/tv/urban-hit-10-epg-229888645",
      Thumbnail:
        "https://images.tvmovie.de/epg-16-9,id=62e71af4,b=tvmovie,w=500,ca=21.88,0.00,78.13,100.00,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "WELT",
    KanalLogo:
      "https://images.tvmovie.de/welt-logo-1,id=54b02434,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Die Welt am Abend",
      Start: "18:55",
      End: "19:20",
      Category: "Nachrichten",
      Link: "https://www.tvmovie.de/tv/die-welt-am-abend-epg-229200116",
      Thumbnail:
        "https://images.tvmovie.de/epg-16-9,id=62e71af4,b=tvmovie,w=500,ca=21.88,0.00,78.13,100.00,rm=sk.webp",
      Progress: 17,
    },
    after: {
      Program: "Die Welt am Abend",
      Start: "19:20",
      End: "19:30",
      Category: "Nachrichten",
      Link: "https://www.tvmovie.de/tv/die-welt-am-abend-epg-229200125",
      Thumbnail:
        "https://images.tvmovie.de/epg-16-9,id=62e71af4,b=tvmovie,w=500,ca=21.88,0.00,78.13,100.00,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "Wetter Fernsehen",
    KanalLogo:
      "https://images.tvmovie.de/a3945e80-df22-11e5-9740-93b852ac6756-1,id=6ebd350c,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Deutschland Wetter",
      Start: "19:00",
      End: "19:02",
      Category: "Wetter",
      Link: "https://www.tvmovie.de/tv/deutschland-wetter-epg-228948964",
      Thumbnail:
        "https://images.tvmovie.de/epg-16-9,id=62e71af4,b=tvmovie,w=500,ca=21.88,0.00,78.13,100.00,rm=sk.webp",
      Progress: 0,
    },
    after: {
      Program: "Österreich Wetter",
      Start: "19:02",
      End: "19:05",
      Category: "Wetter",
      Link: "https://www.tvmovie.de/tv/oesterreich-wetter-epg-228948970",
      Thumbnail:
        "https://images.tvmovie.de/epg-16-9,id=62e71af4,b=tvmovie,w=500,ca=21.88,0.00,78.13,100.00,rm=sk.webp",
      Progress: 0,
    },
  },
];
