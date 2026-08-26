export async function fetchTvData() {
  const url = `https://tv-scraper.onrender.com/`;

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
      Program: "Brisant",
      Start: "17:15",
      End: "18:00",
      Category: "Boulevardmagazin",
      Link: "https://www.tvmovie.de/tv/brisant-epg-230544416",
      Thumbnail:
        "https://images.tvmovie.de/brisant-senjo-eldessouky-ard,id=a7246554,b=tvmovie,w=480,ca=39.99,0,96.01,100,rm=sk.webp",
      Progress: 60,
    },
    after: {
      Program: "Gefragt - Gejagt",
      Start: "18:00",
      End: "18:50",
      Category: "Quiz",
      Link: "https://www.tvmovie.de/tv/gefragt-gejagt-epg-230544418",
      Thumbnail:
        "https://images.tvmovie.de/gefragt-gejagt-2025,id=a5300ee4,b=tvmovie,w=480,ca=44.3,0,100,100,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "ZDF",
    KanalLogo:
      "https://images.tvmovie.de/984b9340-df22-11e5-9740-93b852ac6756-1,id=4bc9948d,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "hallo deutschland",
      Start: "17:10",
      End: "18:05",
      Category: "Boulevardmagazin",
      Link: "https://www.tvmovie.de/tv/hallo-deutschland-epg-230489457",
      Thumbnail:
        "https://images.tvmovie.de/hallo-deutschland,id=4f3d4739,b=tvmovie,w=480,ca=16.88,0,73.13,100,rm=sk.webp",
      Progress: 59,
    },
    after: {
      Program: "SOKO Wismar",
      Start: "18:05",
      End: "18:54",
      Category: "Krimiserie",
      Link: "https://www.tvmovie.de/tv/soko-wismar-epg-230489469",
      Thumbnail:
        "https://images.tvmovie.de/7e6fdfedddb26301687a3d9432c314f059642034,id=b90198c0,b=tvmovie,w=480,ca=5.88,0.00,62.13,100.00,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "RTL",
    KanalLogo:
      "https://images.tvmovie.de/rtl-logo-1,id=ea582ac5,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Ulrich Wetzel - Das Jugendgericht",
      Start: "17:00",
      End: "17:30",
      Category: "Doku-Soap",
      Link: "https://www.tvmovie.de/tv/ulrich-wetzel-das-jugendgericht-epg-230626133",
      Thumbnail:
        "https://images.tvmovie.de/70258377fd8ab3993e2139301ec9ec70d43b05d9,id=3a67fa5c,b=tvmovie,w=480,ca=14.65,0.00,81.35,100.00,rm=sk.webp",
      Progress: 0,
    },
    after: {
      Program: "Unter uns",
      Start: "17:30",
      End: "18:00",
      Category: "Daily Soap",
      Link: "https://www.tvmovie.de/tv/unter-uns-epg-230626134",
      Thumbnail:
        "https://images.tvmovie.de/dfaa630c241532659ade66ac66e73291a3dc982c,id=f227b34c,b=tvmovie,w=480,ca=23.65,0.00,90.35,100.00,rm=sk.webp",
      Progress: 41,
    },
  },
  {
    Kanal: "SAT.1",
    KanalLogo:
      "https://images.tvmovie.de/sat1-3d-bm-rgb-1,id=da2e0d7c,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Notruf",
      Start: "17:00",
      End: "17:30",
      Category: "Reportage",
      Link: "https://www.tvmovie.de/tv/notruf-epg-230602590",
      Thumbnail:
        "https://images.tvmovie.de/notruf,id=e373a7b9,b=tvmovie,w=480,ca=27.66,0,94.34,100,rm=sk.webp",
      Progress: 0,
    },
    after: {
      Program: "Notruf",
      Start: "17:30",
      End: "18:00",
      Category: "Reportage",
      Link: "https://www.tvmovie.de/tv/notruf-epg-230602616",
      Thumbnail:
        "https://images.tvmovie.de/notruf,id=e373a7b9,b=tvmovie,w=480,ca=27.66,0,94.34,100,rm=sk.webp",
      Progress: 41,
    },
  },
  {
    Kanal: "PRO 7",
    KanalLogo:
      "https://images.tvmovie.de/989baf10-df22-11e5-9740-93b852ac6756-1,id=87aefbd7,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "taff",
      Start: "17:00",
      End: "18:00",
      Category: "Boulevardmagazin",
      Link: "https://www.tvmovie.de/tv/taff-epg-230624077",
      Thumbnail:
        "https://images.tvmovie.de/taff,id=abbd2b0f,b=tvmovie,w=480,ca=0.64,0,67.36,100,rm=sk.webp",
      Progress: 70,
    },
    after: {
      Program: "ProSieben :newstime",
      Start: "18:00",
      End: "18:10",
      Category: "Nachrichten",
      Link: "https://www.tvmovie.de/tv/prosieben-newstime-epg-230624085",
      Thumbnail:
        "https://images.tvmovie.de/prosieben-newstime,id=48c65827,b=tvmovie,w=480,ca=14.75,0,81.25,100,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "RTL2",
    KanalLogo:
      "https://images.tvmovie.de/rtlzwei-logo-2019,id=c0b6592e,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Hartz Rot Gold",
      Start: "17:05",
      End: "18:05",
      Category: "Reportage",
      Link: "https://www.tvmovie.de/tv/hartz-rot-gold-epg-230662238",
      Thumbnail:
        "https://images.tvmovie.de/e2a55a385202c12f8133c7306da9d83582b1d3bf,id=b59aec95,b=tvmovie,w=480,ca=33.86,0.00,90.14,100.00,rm=sk.webp",
      Progress: 62,
    },
    after: {
      Program: "Hartz und herzlich - Tag für Tag Benz-Baracken",
      Start: "18:05",
      End: "19:05",
      Category: "Doku-Soap",
      Link: "https://www.tvmovie.de/tv/hartz-und-herzlich-tag-fuer-tag-benz-baracken-epg-230661927",
      Thumbnail:
        "https://images.tvmovie.de/7b0b67c1bc0377e31c56514916190a7faa08a826,id=7a1c379f,b=tvmovie,w=480,ca=28.86,0.00,85.14,100.00,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "KABEL 1",
    KanalLogo:
      "https://images.tvmovie.de/k1-2d-bm-rgb-1,id=c8c242d7,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Abenteuer Leben täglich",
      Start: "17:00",
      End: "18:00",
      Category: "Magazin",
      Link: "https://www.tvmovie.de/tv/abenteuer-leben-taeglich-epg-230610257",
      Thumbnail:
        "https://images.tvmovie.de/abenteuer-leben,id=d8cdfc79,b=tvmovie,w=480,ca=15.67,0,82.33,100,rm=sk.webp",
      Progress: 70,
    },
    after: {
      Program: "Mein Lokal, Dein Lokal - Der Profi kommt",
      Start: "18:00",
      End: "19:00",
      Category: "Reportage",
      Link: "https://www.tvmovie.de/tv/mein-lokal-dein-lokal-der-profi-kommt-epg-230610261",
      Thumbnail:
        "https://images.tvmovie.de/mein-lokal-dein-lokal,id=7a68fbe9,b=tvmovie,w=480,ca=33.33,0,100,100,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "VOX",
    KanalLogo:
      "https://images.tvmovie.de/98b55190-df22-11e5-9740-93b852ac6756-1,id=c2707854,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Zwischen Tüll und Tränen",
      Start: "17:00",
      End: "18:00",
      Category: "Doku-Soap",
      Link: "https://www.tvmovie.de/tv/zwischen-tuell-und-traenen-epg-230638260",
      Thumbnail:
        "https://images.tvmovie.de/cbef456dc5382da958b5e5ad1744190db99dad1f,id=558a2e84,b=tvmovie,w=480,ca=5.72,0.00,72.28,100.00,rm=sk.webp",
      Progress: 70,
    },
    after: {
      Program: "First Dates - Ein Tisch für zwei",
      Start: "18:00",
      End: "19:00",
      Category: "Datingshow",
      Link: "https://www.tvmovie.de/tv/first-dates-ein-tisch-fuer-zwei-epg-230638262",
      Thumbnail:
        "https://images.tvmovie.de/first-dates-ein-tisch-fuer-zwei,id=a6370788,b=tvmovie,w=480,ca=33.33,0,100,100,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "ARTE",
    KanalLogo:
      "https://images.tvmovie.de/9c808a60-df22-11e5-9740-93b852ac6756-1,id=ed828617,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "100 Jahre Route 66 - Highway der Träume?",
      Start: "16:15",
      End: "17:50",
      Category: "Dokumentarfilm",
      Link: "https://www.tvmovie.de/tv/100-jahre-route-66-highway-der-traeume-epg-230107290",
      Thumbnail:
        "https://images.tvmovie.de/81e90087c719617935ee2809d188428791ddd90a,id=14d30c4b,b=tvmovie,w=480,ca=19.60,0.00,86.40,100.00,rm=sk.webp",
      Progress: 92,
    },
    after: {
      Program: "Kanadas Nationalparks",
      Start: "17:50",
      End: "18:35",
      Category: "Doku-Reihe",
      Link: "https://www.tvmovie.de/tv/kanadas-nationalparks-epg-230107292",
      Thumbnail:
        "https://images.tvmovie.de/112e4fe1b0ece6bb1cb2404d0d5b976516309c3e,id=123dcf49,b=tvmovie,w=480,ca=26.00,0.00,92.00,100.00,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "3SAT",
    KanalLogo:
      "https://images.tvmovie.de/3sat-2019,id=74b96f06,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Alaskas Bären",
      Start: "17:00",
      End: "17:45",
      Category: "Tierdokumentation",
      Link: "https://www.tvmovie.de/tv/alaskas-baeren-epg-230399155",
      Thumbnail:
        "https://images.tvmovie.de/47f1da7ef71e5205379bbdb64019d8cb6300cd6e,id=8ee46b7c,b=tvmovie,w=480,ca=13.66,0.00,82.34,100.00,rm=sk.webp",
      Progress: 94,
    },
    after: {
      Program: "Alaskas Bären",
      Start: "17:45",
      End: "18:30",
      Category: "Tierdokumentation",
      Link: "https://www.tvmovie.de/tv/alaskas-baeren-epg-230399201",
      Thumbnail:
        "https://images.tvmovie.de/fd5933ad46ce2e6ded46d2d9d4606d48f0b32380,id=4073d8ac,b=tvmovie,w=480,ca=15.86,0.00,90.14,100.00,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "Tele 5",
    KanalLogo:
      "https://images.tvmovie.de/tele5-logo-1,id=2cb4ecdd,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Sliders - Das Tor in eine fremde Dimension",
      Start: "17:10",
      End: "18:05",
      Category: "Science-Fiction-Serie",
      Link: "https://www.tvmovie.de/tv/sliders-das-tor-in-eine-fremde-dimension-epg-230486279",
      Thumbnail:
        "https://images.tvmovie.de/sliders-das-tor-in-eine-fremde-dimension,id=12fe9493,b=tvmovie,w=480,ca=14.56,0,81.44,100,rm=sk.webp",
      Progress: 59,
    },
    after: {
      Program: "Star Trek - Das nächste Jahrhundert",
      Start: "18:05",
      End: "19:05",
      Category: "Science-Fiction-Serie",
      Link: "https://www.tvmovie.de/tv/star-trek-das-naechste-jahrhundert-epg-230486647",
      Thumbnail:
        "https://images.tvmovie.de/239cac25fbba3a4025fdcf6df24003e9e966967d,id=d2cec01d,b=tvmovie,w=480,ca=8.05,0.00,81.95,100.00,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "ZDF neo",
    KanalLogo:
      "https://images.tvmovie.de/zdfneo-logo,id=2d7fa3d9,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Suits",
      Start: "17:10",
      End: "17:50",
      Category: "Anwaltsserie",
      Link: "https://www.tvmovie.de/tv/suits-epg-230511128",
      Thumbnail:
        "https://images.tvmovie.de/8000defc8a7f14d8c77274185857b7249dc7c63e,id=c98cfc43,b=tvmovie,w=480,ca=33.59,0.00,100.00,100.00,rm=sk.webp",
      Progress: 80,
    },
    after: {
      Program: "Suits",
      Start: "17:50",
      End: "18:30",
      Category: "Anwaltsserie",
      Link: "https://www.tvmovie.de/tv/suits-epg-230511130",
      Thumbnail:
        "https://images.tvmovie.de/0c7ca79df844bc0ef6833f1fcb2cee4e53e9ae19,id=73c4ce5c,b=tvmovie,w=480,ca=0.79,0.00,67.21,100.00,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "NITRO",
    KanalLogo:
      "https://images.tvmovie.de/nitro-1,id=c77d1f7d,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "M.A.S.H.",
      Start: "17:00",
      End: "17:30",
      Category: "Comedyserie",
      Link: "https://www.tvmovie.de/tv/mash-epg-230661270",
      Thumbnail:
        "https://images.tvmovie.de/dc7d74e02967784e86769c867d69d18ba43d0e9b,id=19e47124,b=tvmovie,w=480,ca=10.40,0.00,100.00,100.00,rm=sk.webp",
      Progress: 0,
    },
    after: {
      Program: "M.A.S.H.",
      Start: "17:30",
      End: "17:55",
      Category: "Comedyserie",
      Link: "https://www.tvmovie.de/tv/mash-epg-230661597",
      Thumbnail:
        "https://images.tvmovie.de/8ccfb9cccc60e780fd385a84e526d555ea5ba76e,id=e1e299fe,b=tvmovie,w=480,ca=3.29,0.00,76.71,100.00,rm=sk.webp",
      Progress: 49,
    },
  },
  {
    Kanal: "ONE",
    KanalLogo:
      "https://images.tvmovie.de/one-logo,id=80e076a3,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Rote Rosen",
      Start: "17:05",
      End: "17:50",
      Category: "Telenovela",
      Link: "https://www.tvmovie.de/tv/rote-rosen-epg-230618373",
      Thumbnail:
        "https://images.tvmovie.de/rote-rosen,id=8b3ef27d,b=tvmovie,w=480,ca=0,0,66,100,rm=sk.webp",
      Progress: 83,
    },
    after: {
      Program: "Rote Rosen",
      Start: "17:50",
      End: "18:40",
      Category: "Telenovela",
      Link: "https://www.tvmovie.de/tv/rote-rosen-epg-230618377",
      Thumbnail:
        "https://images.tvmovie.de/rote-rosen,id=8b3ef27d,b=tvmovie,w=480,ca=0,0,66,100,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "sixx",
    KanalLogo:
      "https://images.tvmovie.de/9937a0f0-df22-11e5-9740-93b852ac6756-1,id=2177231c,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Desperate Housewives",
      Start: "16:40",
      End: "17:35",
      Category: "Dramedyserie",
      Link: "https://www.tvmovie.de/tv/desperate-housewives-epg-230624065",
      Thumbnail:
        "https://images.tvmovie.de/37342d486571b05b2fd6fb3577a13998caca09c0,id=91a5839f,b=tvmovie,w=480,ca=0.00,0.00,66.67,100.00,rm=sk.webp",
      Progress: 0,
    },
    after: {
      Program: "Desperate Housewives",
      Start: "17:35",
      End: "18:30",
      Category: "Dramedyserie",
      Link: "https://www.tvmovie.de/tv/desperate-housewives-epg-230624178",
      Thumbnail:
        "https://images.tvmovie.de/798bc34c2cd1820f15db34cef3f6aa36498718e4,id=7240a383,b=tvmovie,w=480,ca=2.90,0.00,75.10,100.00,rm=sk.webp",
      Progress: 13,
    },
  },
  {
    Kanal: "SAT.1 Gold",
    KanalLogo:
      "https://images.tvmovie.de/sat1gold,id=9cdd0e14,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Diagnose: Mord",
      Start: "17:05",
      End: "18:05",
      Category: "Krimiserie",
      Link: "https://www.tvmovie.de/tv/diagnose-mord-epg-230608408",
      Thumbnail:
        "https://images.tvmovie.de/843e16b0951d89c6e384ce526843da0d9242ec72,id=a646c3d3,b=tvmovie,w=480,ca=0.35,0.00,73.65,100.00,rm=sk.webp",
      Progress: 62,
    },
    after: {
      Program: "Diagnose: Mord",
      Start: "18:05",
      End: "19:00",
      Category: "Krimiserie",
      Link: "https://www.tvmovie.de/tv/diagnose-mord-epg-230608414",
      Thumbnail:
        "https://images.tvmovie.de/198721743d244def748970fffe040e0874a27ea3,id=a2216286,b=tvmovie,w=480,ca=0.00,0.00,75.00,100.00,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "RTLup",
    KanalLogo:
      "https://images.tvmovie.de/rtlup-logo,id=b87c671f,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Der Blaulicht-Report",
      Start: "16:45",
      End: "17:40",
      Category: "Doku-Soap",
      Link: "https://www.tvmovie.de/tv/der-blaulicht-report-epg-230579391",
      Thumbnail:
        "https://images.tvmovie.de/bf5d86aad2c74fa642c51cf00ce33a67882aa05c,id=b6240ed5,b=tvmovie,w=480,ca=0.00,0.00,56.24,100.00,rm=sk.webp",
      Progress: 0,
    },
    after: {
      Program: "Das Strafgericht",
      Start: "17:40",
      End: "18:30",
      Category: "Gerichtsshow",
      Link: "https://www.tvmovie.de/tv/das-strafgericht-epg-230579385",
      Thumbnail:
        "https://images.tvmovie.de/9424db9cf91a9a36723902b54e9b930b0b5c49b5,id=b38930a4,b=tvmovie,w=480,ca=42.88,0.00,99.13,100.00,rm=sk.webp",
      Progress: 5,
    },
  },
  {
    Kanal: "Disney Channel",
    KanalLogo:
      "https://images.tvmovie.de/disney-channel-germany,id=8e257482,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Bluey",
      Start: "17:35",
      End: "17:45",
      Category: "Animationsserie",
      Link: "https://www.tvmovie.de/tv/bluey-epg-230729484",
      Thumbnail:
        "https://images.tvmovie.de/bluey,id=ea578619,b=tvmovie,w=480,ca=23.88,0,80.13,100,rm=sk.webp",
      Progress: 74,
    },
    after: {
      Program: "Bluey",
      Start: "17:45",
      End: "17:55",
      Category: "Animationsserie",
      Link: "https://www.tvmovie.de/tv/bluey-epg-230729480",
      Thumbnail:
        "https://images.tvmovie.de/bluey,id=ea578619,b=tvmovie,w=480,ca=23.88,0,80.13,100,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "Super RTL",
    KanalLogo:
      "https://images.tvmovie.de/super-rtl-logo,id=4a15a5cf,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Voll zu spät!",
      Start: "17:30",
      End: "17:50",
      Category: "Zeichentrickserie",
      Link: "https://www.tvmovie.de/tv/voll-zu-spaet-epg-230606370",
      Thumbnail:
        "https://images.tvmovie.de/ddaed657884d22f4b03b816a7adc7f3350cdd0d1,id=40e46e3b,b=tvmovie,w=480,ca=0.00,0.00,56.24,100.00,rm=sk.webp",
      Progress: 62,
    },
    after: {
      Program: "Monster Loving Maniacs",
      Start: "17:50",
      End: "18:00",
      Category: "Animationsserie",
      Link: "https://www.tvmovie.de/tv/monster-loving-maniacs-epg-230606386",
      Thumbnail:
        "https://images.tvmovie.de/9a673ff3ebe58fccb298e45d3f6b488d97245fd4,id=df1a9669,b=tvmovie,w=480,ca=38.73,0.00,95.27,100.00,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "Sport1",
    KanalLogo:
      "https://images.tvmovie.de/sport1-logo,id=26d1df06,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Hausmeister Krause - Ordnung muss sein",
      Start: "17:30",
      End: "18:00",
      Category: "Comedyserie",
      Link: "https://www.tvmovie.de/tv/hausmeister-krause-ordnung-muss-sein-epg-232926486",
      Thumbnail:
        "https://images.tvmovie.de/hausmeister-krause-ordnung-muss-sein,id=8660b520,b=tvmovie,w=480,ca=17.72,0,84.28,100,rm=sk.webp",
      Progress: 41,
    },
    after: {
      Program: "Ladykracher",
      Start: "18:00",
      End: "18:30",
      Category: "Sketch",
      Link: "https://www.tvmovie.de/tv/ladykracher-epg-232926483",
      Thumbnail:
        "https://images.tvmovie.de/ladykracher,id=1f3193a0,b=tvmovie,w=480,ca=21.88,0,78.13,100,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "Eurosport 1",
    KanalLogo:
      "https://images.tvmovie.de/eurosport-1-logo,id=40902d54,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Radsport: Vuelta a España",
      Start: "14:45",
      End: "18:00",
      Category: "Radsport",
      Link: "https://www.tvmovie.de/tv/radsport-vuelta-a-espana-epg-230682348",
      Thumbnail:
        "https://images.tvmovie.de/radsport,id=495cac23,b=tvmovie,w=480,ca=17.67,0,84.33,100,rm=sk.webp",
      Progress: 91,
    },
    after: {
      Program: "Mountainbike: Weltcup",
      Start: "18:00",
      End: "19:00",
      Category: "Radsport",
      Link: "https://www.tvmovie.de/tv/mountainbike-weltcup-epg-233599128",
      Thumbnail:
        "https://images.tvmovie.de/mountainbike-sport,id=d6204678,b=tvmovie,w=480,ca=0,0,63,100,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "DMAX",
    KanalLogo:
      "https://images.tvmovie.de/9943d5f0-df22-11e5-9740-93b852ac6756-1,id=fea9cf86,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Border Control: Schwedens Grenzschützer",
      Start: "17:20",
      End: "18:15",
      Category: "Doku-Soap",
      Link: "https://www.tvmovie.de/tv/border-control-schwedens-grenzschuetzer-epg-230626423",
      Thumbnail:
        "https://images.tvmovie.de/2040117a09f5e61044cb5677ee6825f4e792f782,id=64798d32,b=tvmovie,w=480,ca=16.86,0.00,73.14,100.00,rm=sk.webp",
      Progress: 41,
    },
    after: {
      Program: "Steel Buddies - Stahlharte Geschäfte",
      Start: "18:15",
      End: "19:15",
      Category: "Doku-Soap",
      Link: "https://www.tvmovie.de/tv/steel-buddies-stahlharte-geschaefte-epg-231519435",
      Thumbnail:
        "https://images.tvmovie.de/2418a62fe137160423c3e3224962555c749d7c03,id=a4293975,b=tvmovie,w=480,ca=16.66,0.00,83.34,100.00,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "ProSieben MAXX",
    KanalLogo:
      "https://images.tvmovie.de/9c638c80-df22-11e5-9740-93b852ac6756-1,id=3def6398,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Detektiv Conan",
      Start: "17:30",
      End: "18:00",
      Category: "Animeserie",
      Link: "https://www.tvmovie.de/tv/detektiv-conan-epg-230670536",
      Thumbnail:
        "https://images.tvmovie.de/detektiv-conan,id=ea0cf047,b=tvmovie,w=480,ca=23.88,0,80.13,100,rm=sk.webp",
      Progress: 41,
    },
    after: {
      Program: "One Piece",
      Start: "18:00",
      End: "18:25",
      Category: "Animeserie",
      Link: "https://www.tvmovie.de/tv/one-piece-epg-230670539",
      Thumbnail:
        "https://images.tvmovie.de/one-piece,id=3523be2f,b=tvmovie,w=480,ca=5.88,0,62.13,100,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "WDR",
    KanalLogo:
      "https://images.tvmovie.de/wdr-logo-1,id=70cbc03f,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Hier und heute",
      Start: "17:00",
      End: "18:00",
      Category: "Reportage",
      Link: "https://www.tvmovie.de/tv/hier-und-heute-epg-230679857",
      Thumbnail:
        "https://images.tvmovie.de/1-hier-und-heute-2020,id=0fbeb62d,b=tvmovie,w=480,ca=23.99,0,80.01,100,rm=sk.webp",
      Progress: 71,
    },
    after: {
      Program: "WDR aktuell / Lokalzeit",
      Start: "18:00",
      End: "18:15",
      Category: "Nachrichten",
      Link: "https://www.tvmovie.de/tv/wdr-aktuell-lokalzeit-epg-230680051",
      Thumbnail:
        "https://images.tvmovie.de/wdr-aktuell,id=70f706fb,b=tvmovie,w=480,ca=7.43,0,64.57,100,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "NDR",
    KanalLogo:
      "https://images.tvmovie.de/ndr-dachmarke,id=438e9c89,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Leopard, Seebär & Co.",
      Start: "17:10",
      End: "18:00",
      Category: "Doku-Soap",
      Link: "https://www.tvmovie.de/tv/leopard-seebaer-und-co-epg-230515385",
      Thumbnail:
        "https://images.tvmovie.de/leopard-seebaer-co,id=e96dd9dd,b=tvmovie,w=480,ca=22.98,0,79.02,100,rm=sk.webp",
      Progress: 65,
    },
    after: {
      Program: "Ländermagazine",
      Start: "18:00",
      End: "18:15",
      Category: "Magazin",
      Link: "https://www.tvmovie.de/tv/laendermagazine-epg-230515391",
      Thumbnail:
        "https://images.tvmovie.de/laendermagazine,id=3978ed13,b=tvmovie,w=480,ca=0,0,56.26,100,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "MDR",
    KanalLogo:
      "https://images.tvmovie.de/mdr-typogramm-blau-srgb,id=7af54937,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "MDR um vier",
      Start: "17:00",
      End: "17:45",
      Category: "Magazin",
      Link: "https://www.tvmovie.de/tv/mdr-um-vier-epg-230459426",
      Thumbnail:
        "https://images.tvmovie.de/mdr-um-vier,id=3d0060a4,b=tvmovie,w=480,ca=15.43,0,72.57,100,rm=sk.webp",
      Progress: 94,
    },
    after: {
      Program: "MDR aktuell",
      Start: "17:45",
      End: "18:05",
      Category: "Nachrichten",
      Link: "https://www.tvmovie.de/tv/mdr-aktuell-epg-230459428",
      Thumbnail:
        "https://images.tvmovie.de/mdr-aktuell,id=0a3e930e,b=tvmovie,w=480,ca=17.65,0,84.35,100,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "BR Fernsehen",
    KanalLogo:
      "https://images.tvmovie.de/br-230410-rgb,id=4471fada,b=tvmovie,w=100,ca=0,0,100.00,100.00,rm=sk.webp",
    now: {
      Program: "Frankenschau aktuell",
      Start: "17:30",
      End: "18:00",
      Category: "Magazin",
      Link: "https://www.tvmovie.de/tv/frankenschau-aktuell-epg-230551081",
      Thumbnail:
        "https://images.tvmovie.de/frankenschau-aktuell,id=69d47019,b=tvmovie,w=480,ca=13.15,0,68.85,100,rm=sk.webp",
      Progress: 41,
    },
    after: {
      Program: "Abendschau - Das bewegt Bayern heute",
      Start: "18:00",
      End: "18:30",
      Category: "Nachrichtenmagazin",
      Link: "https://www.tvmovie.de/tv/abendschau-das-bewegt-bayern-heute-epg-230551073",
      Thumbnail:
        "https://images.tvmovie.de/abendschau-das-bewegt-bayern-heute,id=24e957d3,b=tvmovie,w=480,ca=22.15,0,77.85,100,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "SWR Fernsehen",
    KanalLogo:
      "https://images.tvmovie.de/9cf4d000-df22-11e5-9740-93b852ac6756-1,id=883a316a,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Kaffee oder Tee",
      Start: "17:05",
      End: "18:00",
      Category: "Ratgeber",
      Link: "https://www.tvmovie.de/tv/kaffee-oder-tee-epg-230582442",
      Thumbnail:
        "https://images.tvmovie.de/kaffee-oder-tee,id=a3e556ec,b=tvmovie,w=480,ca=20.99,0,77.01,100,rm=sk.webp",
      Progress: 68,
    },
    after: {
      Program: "SWR Aktuell Baden-Württemberg",
      Start: "18:00",
      End: "18:10",
      Category: "Magazin",
      Link: "https://www.tvmovie.de/tv/swr-aktuell-baden-wuerttemberg-epg-230582444",
      Thumbnail:
        "https://images.tvmovie.de/1-swr-aktuell-2017-1,id=e39850fb,b=tvmovie,w=480,ca=16.99,0,73.01,100,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "HR",
    KanalLogo:
      "https://images.tvmovie.de/9d0e2460-df22-11e5-9740-93b852ac6756-1,id=7033da6f,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "hallo hessen",
      Start: "17:00",
      End: "17:45",
      Category: "Magazin",
      Link: "https://www.tvmovie.de/tv/hallo-hessen-epg-230575453",
      Thumbnail:
        "https://images.tvmovie.de/hallo-hessen-moderatorenteam,id=ae1a15db,b=tvmovie,w=480,ca=13.81,0,88.19,100,rm=sk.webp",
      Progress: 94,
    },
    after: {
      Program: "hessenschau",
      Start: "17:45",
      End: "17:55",
      Category: "Magazin",
      Link: "https://www.tvmovie.de/tv/hessenschau-epg-230575456",
      Thumbnail:
        "https://images.tvmovie.de/hessenschau-moderatoren,id=1f482349,b=tvmovie,w=480,ca=17,0,83,100,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "RBB",
    KanalLogo:
      "https://images.tvmovie.de/rbb-logo,id=2d4f4b3b,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Panda, Gorilla & Co.",
      Start: "17:05",
      End: "17:53",
      Category: "Reportage",
      Link: "https://www.tvmovie.de/tv/panda-gorilla-und-co-epg-230640432",
      Thumbnail:
        "https://images.tvmovie.de/panda-gorilla-und-co,id=0be0087e,b=tvmovie,w=480,ca=21.1,0,76.9,100,rm=sk.webp",
      Progress: 78,
    },
    after: {
      Program: "Unser Sandmännchen",
      Start: "17:53",
      End: "18:00",
      Category: "Kinderserie",
      Link: "https://www.tvmovie.de/tv/unser-sandmaennchen-epg-230640450",
      Thumbnail:
        "https://images.tvmovie.de/9bb5896512bc24a08b0257faf637b18207e4e3bb,id=73ee50c9,b=tvmovie,w=480,ca=5.00,0.00,79.00,100.00,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "ARD Alpha",
    KanalLogo:
      "https://images.tvmovie.de/ard-alpha,id=cbb03336,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Tobis Urlaubstrip",
      Start: "17:30",
      End: "18:15",
      Category: "Doku-Reihe",
      Link: "https://www.tvmovie.de/tv/tobis-urlaubstrip-epg-230597462",
      Thumbnail:
        "https://images.tvmovie.de/475d7530513f323a54c8ad9d70b5e497ea144bbc,id=d98cb070,b=tvmovie,w=480,ca=0.66,0.00,67.34,100.00,rm=sk.webp",
      Progress: 28,
    },
    after: {
      Program: "Gesundheit!",
      Start: "18:15",
      End: "18:45",
      Category: "Gesundheitsmagazin",
      Link: "https://www.tvmovie.de/tv/gesundheit-epg-230597464",
      Thumbnail:
        "https://images.tvmovie.de/gesundheit,id=ab474d82,b=tvmovie,w=480,ca=41.15,0,96.85,100,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "ZDFinfo",
    KanalLogo:
      "https://images.tvmovie.de/9cb296e0-df22-11e5-9740-93b852ac6756-1,id=de87b670,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Countdown zur Diktatur",
      Start: "17:10",
      End: "17:55",
      Category: "Doku-Reihe",
      Link: "https://www.tvmovie.de/tv/countdown-zur-diktatur-epg-230476342",
      Thumbnail:
        "https://images.tvmovie.de/6a7429e82472af5384140ab90c4eeced1343274a,id=6d80022f,b=tvmovie,w=480,ca=0.00,0.00,73.02,100.00,rm=sk.webp",
      Progress: 72,
    },
    after: {
      Program: "Countdown zur Diktatur",
      Start: "17:55",
      End: "18:45",
      Category: "Doku-Reihe",
      Link: "https://www.tvmovie.de/tv/countdown-zur-diktatur-epg-230476343",
      Thumbnail:
        "https://images.tvmovie.de/7c4040cf696cd47e3261c41cba8f33740fbcb13d,id=13c516a3,b=tvmovie,w=480,ca=7.71,0.00,82.29,100.00,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "Phoenix",
    KanalLogo:
      "https://images.tvmovie.de/phoenix-1,id=8fd4deea,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "phoenix der tag",
      Start: "17:30",
      End: "18:00",
      Category: "Nachrichten",
      Link: "https://www.tvmovie.de/tv/phoenix-der-tag-epg-230470230",
      Thumbnail:
        "https://images.tvmovie.de/epg-16-9,id=62e71af4,b=tvmovie,w=480,ca=21.88,0.00,78.13,100.00,rm=sk.webp",
      Progress: 41,
    },
    after: {
      Program: "Junge Roma heute - Zwischen Herkunft und Zukunft",
      Start: "18:00",
      End: "18:30",
      Category: "Dokumentation",
      Link: "https://www.tvmovie.de/tv/junge-roma-heute-zwischen-herkunft-und-zukunft-epg-233668729",
      Thumbnail:
        "https://images.tvmovie.de/3-junge-roma-heute,id=ab021581,b=tvmovie,w=480,ca=14.14,0,79.86,100,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "KI.KA",
    KanalLogo:
      "https://images.tvmovie.de/kika-logo,id=ff814fa1,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Die Schlümpfe",
      Start: "17:20",
      End: "17:55",
      Category: "Animationsserie",
      Link: "https://www.tvmovie.de/tv/die-schluempfe-epg-230486428",
      Thumbnail:
        "https://images.tvmovie.de/5da7f93f03184e94914af7906b122cfc084361cc,id=6eedae81,b=tvmovie,w=480,ca=36.88,0.00,93.13,100.00,rm=sk.webp",
      Progress: 64,
    },
    after: {
      Program: "Pinocchio im Zauberdorf",
      Start: "17:55",
      End: "18:15",
      Category: "Zeichentrickserie",
      Link: "https://www.tvmovie.de/tv/pinocchio-im-zauberdorf-epg-230486414",
      Thumbnail:
        "https://images.tvmovie.de/epg-16-9,id=62e71af4,b=tvmovie,w=480,ca=21.88,0.00,78.13,100.00,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "Comedy Central",
    KanalLogo:
      "https://images.tvmovie.de/comedy-central-1,id=87f37c59,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Modern Family",
      Start: "17:30",
      End: "17:55",
      Category: "Sitcom",
      Link: "https://www.tvmovie.de/tv/modern-family-epg-230063930",
      Thumbnail:
        "https://images.tvmovie.de/013fc9c5d0d26f6accf76188be53d713d05d512e,id=f8fefb06,b=tvmovie,w=480,ca=33.47,0.00,100.00,100.00,rm=sk.webp",
      Progress: 50,
    },
    after: {
      Program: "Modern Family",
      Start: "17:55",
      End: "18:25",
      Category: "Sitcom",
      Link: "https://www.tvmovie.de/tv/modern-family-epg-230063931",
      Thumbnail:
        "https://images.tvmovie.de/0179e1bfd2f839bb3fc150f254224cb027a4ab99,id=3d337130,b=tvmovie,w=480,ca=6.66,0.00,73.34,100.00,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "DF1",
    KanalLogo:
      "https://images.tvmovie.de/df1-1,id=3a4b029d,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Quizjagd Classics",
      Start: "16:50",
      End: "17:50",
      Category: "Spielshow",
      Link: "https://www.tvmovie.de/tv/quizjagd-classics-epg-232293634",
      Thumbnail:
        "https://images.tvmovie.de/epg-16-9,id=62e71af4,b=tvmovie,w=480,ca=21.88,0.00,78.13,100.00,rm=sk.webp",
      Progress: 87,
    },
    after: {
      Program: "Fußball: Champions League der Frauen",
      Start: "17:50",
      End: "20:00",
      Category: "Fußball",
      Link: "https://www.tvmovie.de/tv/fussball-champions-league-der-frauen-epg-233678958",
      Thumbnail:
        "https://images.tvmovie.de/fussball,id=ce229ea8,b=tvmovie,w=480,ca=23.89,0,76.11,100,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "TLC",
    KanalLogo:
      "https://images.tvmovie.de/9c70fa00-df22-11e5-9740-93b852ac6756-1,id=3812a4f3,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Die Zwangsvollstrecker",
      Start: "17:25",
      End: "18:20",
      Category: "Doku-Soap",
      Link: "https://www.tvmovie.de/tv/die-zwangsvollstrecker-epg-230930658",
      Thumbnail:
        "https://images.tvmovie.de/zwangsvollstrecker,id=f3dc70a5,b=tvmovie,w=480,ca=20.88,0,77.13,100,rm=sk.webp",
      Progress: 32,
    },
    after: {
      Program: "Mein Leben mit 300 kg",
      Start: "18:20",
      End: "20:15",
      Category: "Doku-Soap",
      Link: "https://www.tvmovie.de/tv/mein-leben-mit-300-kg-epg-230604323",
      Thumbnail:
        "https://images.tvmovie.de/epg-16-9,id=62e71af4,b=tvmovie,w=480,ca=21.88,0.00,78.13,100.00,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "VOXup",
    KanalLogo:
      "https://images.tvmovie.de/voxup-logo,id=d5dc63ad,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "CSI: Miami",
      Start: "17:40",
      End: "18:35",
      Category: "Krimiserie",
      Link: "https://www.tvmovie.de/tv/csi-miami-epg-230633208",
      Thumbnail:
        "https://images.tvmovie.de/8a9c74d2979f55cd9f641eff8e9f555a052be929,id=785e4892,b=tvmovie,w=480,ca=15.21,0.00,90.79,100.00,rm=sk.webp",
      Progress: 4,
    },
    after: {
      Program: "Lie to me",
      Start: "18:35",
      End: "19:20",
      Category: "Krimiserie",
      Link: "https://www.tvmovie.de/tv/lie-to-me-epg-230633205",
      Thumbnail:
        "https://images.tvmovie.de/33d488c50374d3c8f1cced0c54235db27098d226,id=c5efcc06,b=tvmovie,w=480,ca=2.54,0.00,77.46,100.00,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "HGTV",
    KanalLogo:
      "https://images.tvmovie.de/hgtv-logo-1,id=39d6dfab,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Bahamas Life - Traumhaus gesucht",
      Start: "17:30",
      End: "17:55",
      Category: "Doku-Soap",
      Link: "https://www.tvmovie.de/tv/bahamas-life-traumhaus-gesucht-epg-230601905",
      Thumbnail:
        "https://images.tvmovie.de/6208a63781f41c50f5197e47710827bdc6ec59fb,id=17e29af8,b=tvmovie,w=480,ca=14.88,0.00,71.13,100.00,rm=sk.webp",
      Progress: 50,
    },
    after: {
      Program: "Bahamas Life - Traumhaus gesucht",
      Start: "17:55",
      End: "18:25",
      Category: "Doku-Soap",
      Link: "https://www.tvmovie.de/tv/bahamas-life-traumhaus-gesucht-epg-230601908",
      Thumbnail:
        "https://images.tvmovie.de/32b33f478977a3b7cc2c86909e8904079bf3a91e,id=006e9270,b=tvmovie,w=480,ca=43.75,0.00,100.00,100.00,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "Kabel eins Doku",
    KanalLogo:
      "https://images.tvmovie.de/e50faa83-38dd-4ae9-afa4-ed485b8dfcb4-1,id=fcf917d0,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Forged in Fire - Wettkampf der Schmiede",
      Start: "17:10",
      End: "17:55",
      Category: "Doku-Reihe",
      Link: "https://www.tvmovie.de/tv/forged-in-fire-wettkampf-der-schmiede-epg-230588268",
      Thumbnail:
        "https://images.tvmovie.de/27a22a1122756c44f7da1817b98b0b088f506f55,id=0cbb13a0,b=tvmovie,w=480,ca=30.87,0.00,87.13,100.00,rm=sk.webp",
      Progress: 72,
    },
    after: {
      Program: "Forged in Fire - Wettkampf der Schmiede",
      Start: "17:55",
      End: "18:40",
      Category: "Doku-Reihe",
      Link: "https://www.tvmovie.de/tv/forged-in-fire-wettkampf-der-schmiede-epg-230588242",
      Thumbnail:
        "https://images.tvmovie.de/5f6965e70703a1f0e754db80d97fda12fd4ece26,id=c308b494,b=tvmovie,w=480,ca=8.87,0.00,65.13,100.00,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "Sky Cinema Premiere",
    KanalLogo:
      "https://images.tvmovie.de/sky-cinema-premieren,id=ff801a41,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Anemone",
      Start: "16:20",
      End: "18:25",
      Category: "Drama",
      Link: "https://www.tvmovie.de/tv/anemone-epg-230154807",
      Thumbnail:
        "https://images.tvmovie.de/584316c7eb30f32f309b8a35ad06c17b7a29e23d,id=c61b75ae,b=tvmovie,w=480,ca=24.22,0.00,65.78,100.00,rm=sk.webp",
      Progress: 66,
    },
    after: {
      Program: "Five Nights at Freddy's 2",
      Start: "18:25",
      End: "20:15",
      Category: "Horrorfilm",
      Link: "https://www.tvmovie.de/tv/five-nights-at-freddys-2-epg-230154809",
      Thumbnail:
        "https://images.tvmovie.de/bc16a749d1b6e57690fce56860d7dd6930099bdf,id=dc22815b,b=tvmovie,w=480,ca=38.88,0.00,95.13,100.00,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "Sky Cinema Action",
    KanalLogo:
      "https://images.tvmovie.de/sky-cinema-action,id=a7177ae5,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Sniper - Der Scharfschütze",
      Start: "16:35",
      End: "18:15",
      Category: "Actionfilm",
      Link: "https://www.tvmovie.de/tv/sniper-der-scharfschuetze-epg-230169442",
      Thumbnail:
        "https://images.tvmovie.de/c6af418dcea86a0dc43814efda5032a2e8a90950,id=b21addd9,b=tvmovie,w=480,ca=11.83,0.00,78.17,100.00,rm=sk.webp",
      Progress: 67,
    },
    after: {
      Program: "47 Ronin",
      Start: "18:15",
      End: "20:15",
      Category: "Fantasyaction",
      Link: "https://www.tvmovie.de/tv/47-ronin-epg-230169358",
      Thumbnail:
        "https://images.tvmovie.de/6b3f99121a78dd87654aa73eaca2ede890863737,id=baecd9cc,b=tvmovie,w=480,ca=0.66,0.00,67.34,100.00,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "Sky Cinema Classics",
    KanalLogo:
      "https://images.tvmovie.de/sky-logo-cinema-classics-1,id=36ba6b53,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Die Unbestechlichen",
      Start: "16:25",
      End: "18:25",
      Category: "Thriller",
      Link: "https://www.tvmovie.de/tv/die-unbestechlichen-epg-230146258",
      Thumbnail:
        "https://images.tvmovie.de/a9af0c1372e5932c35753b8aa091036bcdb5c7df,id=8975a10c,b=tvmovie,w=480,ca=12.72,0.00,67.28,100.00,rm=sk.webp",
      Progress: 65,
    },
    after: {
      Program: "Die Stadt der Verlorenen",
      Start: "18:25",
      End: "20:15",
      Category: "Abenteuerfilm",
      Link: "https://www.tvmovie.de/tv/die-stadt-der-verlorenen-epg-230146205",
      Thumbnail:
        "https://images.tvmovie.de/7473678f59eb42ac6aebb845e09b6bc5c9d7dfb7,id=c70893b1,b=tvmovie,w=480,ca=32.33,0.00,85.67,100.00,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "SKY Cinema Family",
    KanalLogo:
      "https://images.tvmovie.de/sky-cinema-family,id=22fabb97,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Fack ju Göhte 3",
      Start: "16:15",
      End: "18:15",
      Category: "Komödie",
      Link: "https://www.tvmovie.de/tv/fack-ju-goehte-3-epg-230162831",
      Thumbnail:
        "https://images.tvmovie.de/7edfe04e39b987dedc137a896e7b4fc454cbc3f6,id=3f2374fa,b=tvmovie,w=480,ca=12.43,0.00,87.57,100.00,rm=sk.webp",
      Progress: 73,
    },
    after: {
      Program: "Asterix bei den Olympischen Spielen",
      Start: "18:15",
      End: "20:15",
      Category: "Familienfilm",
      Link: "https://www.tvmovie.de/tv/asterix-bei-den-olympischen-spielen-epg-230162834",
      Thumbnail:
        "https://images.tvmovie.de/f488786a83b58129c5629ac48022358c1b1c0581,id=e165ccb6,b=tvmovie,w=480,ca=13.88,0.00,70.12,100.00,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "Sky Atlantic",
    KanalLogo:
      "https://images.tvmovie.de/sky-atlantic-1,id=1e87a3d1,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Grimm",
      Start: "17:10",
      End: "17:55",
      Category: "Fantasyserie",
      Link: "https://www.tvmovie.de/tv/grimm-epg-230334996",
      Thumbnail:
        "https://images.tvmovie.de/da87d9a18b56dfacec2a46c77623771cad0e6f84,id=e526e167,b=tvmovie,w=480,ca=19.67,0.00,86.33,100.00,rm=sk.webp",
      Progress: 72,
    },
    after: {
      Program: "Grimm",
      Start: "17:55",
      End: "18:40",
      Category: "Fantasyserie",
      Link: "https://www.tvmovie.de/tv/grimm-epg-230334998",
      Thumbnail:
        "https://images.tvmovie.de/eca40f475a35e96d6748c2a6de9830ab8adb21dd,id=48233f93,b=tvmovie,w=480,ca=5.67,0.00,72.33,100.00,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "Sky Crime",
    KanalLogo:
      "https://images.tvmovie.de/sky-logo-crime-hd-1,id=0ee0cc04,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Unfall, Selbstmord oder Mord",
      Start: "17:10",
      End: "17:55",
      Category: "Doku-Reihe",
      Link: "https://www.tvmovie.de/tv/unfall-selbstmord-oder-mord-epg-1230192037",
      Thumbnail:
        "https://images.tvmovie.de/3f7723d5de683e406179464d1a2b3c5f7b57b4f0,id=360395f9,b=tvmovie,w=480,ca=3.87,0.00,60.13,100.00,rm=sk.webp",
      Progress: 72,
    },
    after: {
      Program: "Unfall, Selbstmord oder Mord",
      Start: "17:55",
      End: "18:45",
      Category: "Doku-Reihe",
      Link: "https://www.tvmovie.de/tv/unfall-selbstmord-oder-mord-epg-1230192038",
      Thumbnail:
        "https://images.tvmovie.de/3f7723d5de683e406179464d1a2b3c5f7b57b4f0,id=d5fa3e56,b=tvmovie,w=480,ca=3.87,0.00,60.13,100.00,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "Warner TV Film",
    KanalLogo:
      "https://images.tvmovie.de/wb-tv-film-1,id=67c24efa,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "(500) Days of Summer",
      Start: "16:45",
      End: "18:25",
      Category: "Liebesfilm",
      Link: "https://www.tvmovie.de/tv/500-days-of-summer-epg-229160378",
      Thumbnail:
        "https://images.tvmovie.de/3ed470e518763dbd6ef1a99489db872d642686a7,id=bad96612,b=tvmovie,w=480,ca=3.66,0.00,70.34,100.00,rm=sk.webp",
      Progress: 57,
    },
    after: {
      Program: "Während du schliefst",
      Start: "18:25",
      End: "20:15",
      Category: "Liebeskomödie",
      Link: "https://www.tvmovie.de/tv/waehrend-du-schliefst-epg-229160380",
      Thumbnail:
        "https://images.tvmovie.de/8dc863e7862e807b502cae68788b97a49522050d,id=051e3b1e,b=tvmovie,w=480,ca=33.85,0.00,100.00,100.00,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "Crime and Investigation",
    KanalLogo:
      "https://images.tvmovie.de/crimeinvestigation-logo-schwarz,id=74d44e54,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Im Verhörraum",
      Start: "16:50",
      End: "17:45",
      Category: "Doku-Reihe",
      Link: "https://www.tvmovie.de/tv/im-verhoerraum-epg-227364009",
      Thumbnail:
        "https://images.tvmovie.de/8f5e97bec988a6e6facefc826f51ca5ba55f409b,id=b81dffad,b=tvmovie,w=480,ca=17.87,0.00,74.13,100.00,rm=sk.webp",
      Progress: 95,
    },
    after: {
      Program: "Im Verhörraum",
      Start: "17:45",
      End: "18:35",
      Category: "Doku-Reihe",
      Link: "https://www.tvmovie.de/tv/im-verhoerraum-epg-227364012",
      Thumbnail:
        "https://images.tvmovie.de/99436cef3283f955e6afe81ac898251b5a7f9439,id=d6709188,b=tvmovie,w=480,ca=22.87,0.00,79.13,100.00,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "Sky ONE",
    KanalLogo:
      "https://images.tvmovie.de/sky-one-1,id=b7a080b9,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Bull",
      Start: "17:10",
      End: "17:55",
      Category: "Krimiserie",
      Link: "https://www.tvmovie.de/tv/bull-epg-230251678",
      Thumbnail:
        "https://images.tvmovie.de/3045cce603566aea02848e173d674fd6d0d17874,id=0dc56e3b,b=tvmovie,w=480,ca=0.87,0.00,57.12,100.00,rm=sk.webp",
      Progress: 72,
    },
    after: {
      Program: "Bull",
      Start: "17:55",
      End: "18:40",
      Category: "Krimiserie",
      Link: "https://www.tvmovie.de/tv/bull-epg-230251680",
      Thumbnail:
        "https://images.tvmovie.de/4c8459ddd5ef433c9dfffd362ee1e8506dd92ee3,id=2f224524,b=tvmovie,w=480,ca=36.87,0.00,93.13,100.00,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "Sky Krimi",
    KanalLogo:
      "https://images.tvmovie.de/sky-krimi-1,id=66443bb7,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "WaPo Bodensee",
      Start: "16:45",
      End: "17:35",
      Category: "Krimiserie",
      Link: "https://www.tvmovie.de/tv/wapo-bodensee-epg-230240469",
      Thumbnail:
        "https://images.tvmovie.de/007fd784123861470606138c8429fad354ce86e8,id=bbe0ef8d,b=tvmovie,w=480,ca=19.87,0.00,76.13,100.00,rm=sk.webp",
      Progress: 0,
    },
    after: {
      Program: "WaPo Bodensee",
      Start: "17:35",
      End: "18:30",
      Category: "Krimiserie",
      Link: "https://www.tvmovie.de/tv/wapo-bodensee-epg-230240471",
      Thumbnail:
        "https://images.tvmovie.de/wapo-bodensee,id=7fdd4837,b=tvmovie,w=480,ca=22.15,0,77.85,100,rm=sk.webp",
      Progress: 14,
    },
  },
  {
    Kanal: "RTL Crime",
    KanalLogo:
      "https://images.tvmovie.de/rtlcrime-1,id=6319033e,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Renegade - Gnadenlose Jagd",
      Start: "17:15",
      End: "18:00",
      Category: "Actionserie",
      Link: "https://www.tvmovie.de/tv/renegade-gnadenlose-jagd-epg-230588463",
      Thumbnail:
        "https://images.tvmovie.de/f71503a289835a547e29bb10e4449373291a8356,id=5398d374,b=tvmovie,w=480,ca=27.14,0.00,96.86,100.00,rm=sk.webp",
      Progress: 61,
    },
    after: {
      Program: "Cold Justice - Verdeckte Spuren",
      Start: "18:00",
      End: "18:45",
      Category: "Doku-Reihe",
      Link: "https://www.tvmovie.de/tv/cold-justice-verdeckte-spuren-epg-230588462",
      Thumbnail:
        "https://images.tvmovie.de/d2f4c912ad0662edf10b83b2c776a2e6c9ec8a08,id=110a0478,b=tvmovie,w=480,ca=0.00,0.00,65.13,100.00,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "Warner TV Serie",
    KanalLogo:
      "https://images.tvmovie.de/wb-tv-serie-1,id=cdfa76aa,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Navy CIS",
      Start: "17:15",
      End: "17:55",
      Category: "Krimiserie",
      Link: "https://www.tvmovie.de/tv/navy-cis-epg-228666354",
      Thumbnail:
        "https://images.tvmovie.de/e55e842ca3fdfdbd6e238b65fb1e2af90036ddc0,id=d9c8ea9b,b=tvmovie,w=480,ca=3.76,0.00,70.24,100.00,rm=sk.webp",
      Progress: 69,
    },
    after: {
      Program: "Navy CIS",
      Start: "17:55",
      End: "18:45",
      Category: "Krimiserie",
      Link: "https://www.tvmovie.de/tv/navy-cis-epg-228666447",
      Thumbnail:
        "https://images.tvmovie.de/e55e842ca3fdfdbd6e238b65fb1e2af90036ddc0,id=c507fa31,b=tvmovie,w=480,ca=3.76,0.00,70.24,100.00,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "13TH STREET",
    KanalLogo:
      "https://images.tvmovie.de/a125cf80-df22-11e5-9740-93b852ac6756-1,id=d41518d9,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Criminal Intent - Verbrechen im Visier",
      Start: "17:10",
      End: "17:55",
      Category: "Krimiserie",
      Link: "https://www.tvmovie.de/tv/criminal-intent-verbrechen-im-visier-epg-230143493",
      Thumbnail:
        "https://images.tvmovie.de/9a26d00eb8279306c926129992b5af70b99d57a8,id=25032c89,b=tvmovie,w=480,ca=0.00,0.00,75.02,100.00,rm=sk.webp",
      Progress: 72,
    },
    after: {
      Program: "Criminal Intent - Verbrechen im Visier",
      Start: "17:55",
      End: "18:40",
      Category: "Krimiserie",
      Link: "https://www.tvmovie.de/tv/criminal-intent-verbrechen-im-visier-epg-230143526",
      Thumbnail:
        "https://images.tvmovie.de/8d6b282acbf059163916fb75a29ca8d9a794af08,id=88f738ed,b=tvmovie,w=480,ca=24.93,0.00,100.00,100.00,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "SAT.1 emotions",
    KanalLogo:
      "https://images.tvmovie.de/s1e-logo-rgb-dark-1,id=54dca31e,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Die Landarztpraxis",
      Start: "17:15",
      End: "17:50",
      Category: "Arztserie",
      Link: "https://www.tvmovie.de/tv/die-landarztpraxis-epg-230623679",
      Thumbnail:
        "https://images.tvmovie.de/die-landarztpraxis,id=c86a990c,b=tvmovie,w=480,ca=21.66,0,88.34,100,rm=sk.webp",
      Progress: 78,
    },
    after: {
      Program: "Velvet",
      Start: "17:50",
      End: "18:35",
      Category: "Dramaserie",
      Link: "https://www.tvmovie.de/tv/velvet-epg-230623603",
      Thumbnail:
        "https://images.tvmovie.de/5f3a29262ec58cd031d343ecf333c221064b283b,id=74fe3156,b=tvmovie,w=480,ca=36.73,0.00,99.27,100.00,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "Syfy",
    KanalLogo:
      "https://images.tvmovie.de/syfy-logo-051717-horizontal-bw-1,id=87d47d23,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Stargate",
      Start: "17:05",
      End: "17:50",
      Category: "Science-Fiction-Serie",
      Link: "https://www.tvmovie.de/tv/stargate-epg-230142977",
      Thumbnail:
        "https://images.tvmovie.de/9629165256aab734ccbae9bfe5a0ea8ed6d29bb8,id=54e9e89d,b=tvmovie,w=480,ca=0.00,0.00,74.94,100.00,rm=sk.webp",
      Progress: 83,
    },
    after: {
      Program: "Stargate",
      Start: "17:50",
      End: "18:40",
      Category: "Science-Fiction-Serie",
      Link: "https://www.tvmovie.de/tv/stargate-epg-230142980",
      Thumbnail:
        "https://images.tvmovie.de/4b45449acfb7c998ea2f3b68eb397fbf05274db8,id=0108af2b,b=tvmovie,w=480,ca=9.65,0.00,76.35,100.00,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "ProSieben FUN",
    KanalLogo:
      "https://images.tvmovie.de/a8aeac90-df22-11e5-9740-93b852ac6756-1,id=77c332b3,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Chaos City",
      Start: "17:25",
      End: "17:45",
      Category: "Sitcom",
      Link: "https://www.tvmovie.de/tv/chaos-city-epg-230597083",
      Thumbnail:
        "https://images.tvmovie.de/014e2a3297e8f3080560ac53831d681eca43510e,id=a0d40083,b=tvmovie,w=480,ca=0.00,0.00,66.15,100.00,rm=sk.webp",
      Progress: 87,
    },
    after: {
      Program: "Chaos City",
      Start: "17:45",
      End: "18:10",
      Category: "Sitcom",
      Link: "https://www.tvmovie.de/tv/chaos-city-epg-230597081",
      Thumbnail:
        "https://images.tvmovie.de/7888e077cfeb247b6cbccac675edb836e9cb1049,id=f911db3d,b=tvmovie,w=480,ca=15.64,0.00,80.36,100.00,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "Universal TV",
    KanalLogo:
      "https://images.tvmovie.de/universal-tv-logo,id=15403b4b,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Hawaii Five-0",
      Start: "17:10",
      End: "18:00",
      Category: "Krimiserie",
      Link: "https://www.tvmovie.de/tv/hawaii-five-0-epg-1230274144",
      Thumbnail:
        "https://images.tvmovie.de/75389941d77d9f07ecc903d3bf1481717deee6b5,id=bf84d830,b=tvmovie,w=480,ca=0.00,0.00,66.21,100.00,rm=sk.webp",
      Progress: 65,
    },
    after: {
      Program: "Hawaii Five-0",
      Start: "18:00",
      End: "18:45",
      Category: "Krimiserie",
      Link: "https://www.tvmovie.de/tv/hawaii-five-0-epg-1230274145",
      Thumbnail:
        "https://images.tvmovie.de/ab0b136351534c1f7cc02fdb914c848b08edabef,id=878a6a37,b=tvmovie,w=480,ca=33.59,0.00,100.00,100.00,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "RTL Passion",
    KanalLogo:
      "https://images.tvmovie.de/rtlpassion-1,id=ffbb38ad,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Alles was zählt",
      Start: "17:20",
      End: "17:50",
      Category: "Daily Soap",
      Link: "https://www.tvmovie.de/tv/alles-was-zaehlt-epg-230594288",
      Thumbnail:
        "https://images.tvmovie.de/79c0865f672337c2451951095a930265cd819fd4,id=afe1fb48,b=tvmovie,w=480,ca=0.00,0.00,66.55,100.00,rm=sk.webp",
      Progress: 75,
    },
    after: {
      Program: "Heartland - Paradies für Pferde",
      Start: "17:50",
      End: "18:40",
      Category: "Familienserie",
      Link: "https://www.tvmovie.de/tv/heartland-paradies-fuer-pferde-epg-230594515",
      Thumbnail:
        "https://images.tvmovie.de/18cb5ceb72ef98727c6086d16d724a4a3e51d282,id=061724ea,b=tvmovie,w=480,ca=0.00,0.00,66.44,100.00,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "Warner TV Comedy",
    KanalLogo:
      "https://images.tvmovie.de/wb-tv-commedy-1,id=00973e7e,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "King of Queens",
      Start: "17:20",
      End: "17:45",
      Category: "Sitcom",
      Link: "https://www.tvmovie.de/tv/king-of-queens-epg-229084744",
      Thumbnail:
        "https://images.tvmovie.de/c262977ac976b03187b4c1878c46f766a167faa8,id=104aa51b,b=tvmovie,w=480,ca=23.55,0.00,100.00,100.00,rm=sk.webp",
      Progress: 90,
    },
    after: {
      Program: "2 Broke Girls",
      Start: "17:45",
      End: "18:10",
      Category: "Sitcom",
      Link: "https://www.tvmovie.de/tv/2-broke-girls-epg-229084746",
      Thumbnail:
        "https://images.tvmovie.de/7ebc2ec6f8fdf16ccfaabd04a39a295133055b02,id=d7db2be5,b=tvmovie,w=480,ca=0.00,0.00,70.15,100.00,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "Romance TV",
    KanalLogo:
      "https://images.tvmovie.de/romance-tv-1,id=b6ca2259,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Katie Fforde: Warum hab ich ja gesagt?",
      Start: "17:00",
      End: "18:35",
      Category: "Melodram",
      Link: "https://www.tvmovie.de/tv/katie-fforde-warum-hab-ich-ja-gesagt-epg-228622612",
      Thumbnail:
        "https://images.tvmovie.de/epg-16-9,id=62e71af4,b=tvmovie,w=480,ca=21.88,0.00,78.13,100.00,rm=sk.webp",
      Progress: 45,
    },
    after: {
      Program: "Familie Dr. Kleist",
      Start: "18:35",
      End: "19:25",
      Category: "Arztserie",
      Link: "https://www.tvmovie.de/tv/familie-dr-kleist-epg-228622615",
      Thumbnail:
        "https://images.tvmovie.de/epg-16-9,id=62e71af4,b=tvmovie,w=480,ca=21.88,0.00,78.13,100.00,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "kabel eins classics",
    KanalLogo:
      "https://images.tvmovie.de/kabel-1-classics-1,id=04bfc0ff,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Die Waffen der Frauen",
      Start: "16:45",
      End: "18:35",
      Category: "Komödie",
      Link: "https://www.tvmovie.de/tv/die-waffen-der-frauen-epg-230650650",
      Thumbnail:
        "https://images.tvmovie.de/556f58e09699de8c000903d97570cff3e73e1b26,id=f1ca2f8c,b=tvmovie,w=480,ca=0.00,0.00,66.38,100.00,rm=sk.webp",
      Progress: 52,
    },
    after: {
      Program: "MacGyver",
      Start: "18:35",
      End: "19:25",
      Category: "Actionserie",
      Link: "https://www.tvmovie.de/tv/macgyver-epg-230650651",
      Thumbnail:
        "https://images.tvmovie.de/a6ae92dbb3373924cf8f034e35f38f69a212bc6b,id=2ef963b0,b=tvmovie,w=480,ca=9.18,0.00,76.82,100.00,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "Sony Entertainment",
    KanalLogo:
      "https://images.tvmovie.de/a90fdf60-df22-11e5-9740-93b852ac6756-1,id=59b0713d,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Candice Renoir",
      Start: "17:10",
      End: "18:00",
      Category: "Krimiserie",
      Link: "https://www.tvmovie.de/tv/candice-renoir-epg-228208361",
      Thumbnail:
        "https://images.tvmovie.de/bc0ccae61b66deb8345bae518010bc180004f8fc,id=aae112f8,b=tvmovie,w=480,ca=14.62,0.00,81.38,100.00,rm=sk.webp",
      Progress: 65,
    },
    after: {
      Program: "Cedar Cove",
      Start: "18:00",
      End: "18:45",
      Category: "Dramaserie",
      Link: "https://www.tvmovie.de/tv/cedar-cove-epg-228208366",
      Thumbnail:
        "https://images.tvmovie.de/0eb52e57c270fe4347ccc256146e06777adbb330,id=e3d76e21,b=tvmovie,w=480,ca=0.00,0.00,88.38,100.00,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "Kinowelt TV",
    KanalLogo:
      "https://images.tvmovie.de/kw-logo-blue-rgb-white-scaled,id=dbed69af,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Diese Liebe",
      Start: "17:05",
      End: "18:45",
      Category: "Drama",
      Link: "https://www.tvmovie.de/tv/diese-liebe-epg-229000833",
      Thumbnail:
        "https://images.tvmovie.de/4664bb50985dfd994eebbba46354a1d308473359,id=08e94531,b=tvmovie,w=480,ca=0.00,0.00,64.22,100.00,rm=sk.webp",
      Progress: 38,
    },
    after: {
      Program: "Porco Rosso",
      Start: "18:45",
      End: "20:15",
      Category: "Animationsfilm",
      Link: "https://www.tvmovie.de/tv/porco-rosso-epg-229000834",
      Thumbnail:
        "https://images.tvmovie.de/0c0aa97c5e2dc93f29d68b0be79506775aa0297a,id=04bfd118,b=tvmovie,w=480,ca=0.00,0.00,73.76,100.00,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "Silverline",
    KanalLogo:
      "https://images.tvmovie.de/a2a7dba0-df22-11e5-9740-93b852ac6756-1,id=78cdea93,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Fire Syndrome",
      Start: "16:50",
      End: "18:30",
      Category: "Horrorthriller",
      Link: "https://www.tvmovie.de/tv/fire-syndrome-epg-230073305",
      Thumbnail:
        "https://images.tvmovie.de/672853227606472d449cfdb3e7d3ae09b1fbcac1,id=4af8c46a,b=tvmovie,w=480,ca=42.87,0.00,99.12,100.00,rm=sk.webp",
      Progress: 53,
    },
    after: {
      Program: "A Chinese Tall Story",
      Start: "18:30",
      End: "20:15",
      Category: "Actionkomödie",
      Link: "https://www.tvmovie.de/tv/a-chinese-tall-story-epg-230073306",
      Thumbnail:
        "https://images.tvmovie.de/75a97540185fa153a17c8e8dd0fa4707415eb2c5,id=c00ab289,b=tvmovie,w=480,ca=22.88,0.00,79.13,100.00,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "AXN White",
    KanalLogo:
      "https://images.tvmovie.de/axnwhite-1,id=8a118c08,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Murdoch Mysteries",
      Start: "18:45",
      End: "19:30",
      Category: "Krimiserie",
      Link: "https://www.tvmovie.de/tv/murdoch-mysteries-epg-228208045",
      Thumbnail:
        "https://images.tvmovie.de/562f60778b3f25ccecf72e0f62e90b28a4eba88b,id=48aaf33e,b=tvmovie,w=480,ca=11.88,0.00,68.13,100.00,rm=sk.webp",
      Progress: 0,
    },
    after: {
      Program: "Murdoch Mysteries",
      Start: "19:30",
      End: "20:15",
      Category: "Krimiserie",
      Link: "https://www.tvmovie.de/tv/murdoch-mysteries-epg-228208049",
      Thumbnail:
        "https://images.tvmovie.de/8c0c9a130dac2c6487befca821128a9240ebc824,id=01b4e69e,b=tvmovie,w=480,ca=16.88,0.00,73.13,100.00,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "AXN Black",
    KanalLogo:
      "https://images.tvmovie.de/axn-black-1,id=91c9a20b,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Sea Patrol",
      Start: "17:20",
      End: "18:05",
      Category: "Abenteuerserie",
      Link: "https://www.tvmovie.de/tv/sea-patrol-epg-228237490",
      Thumbnail:
        "https://images.tvmovie.de/b39d3ca7c5cbed0e8e151e947862ab9666a861a9,id=c68dbadf,b=tvmovie,w=480,ca=16.68,0.00,83.32,100.00,rm=sk.webp",
      Progress: 50,
    },
    after: {
      Program: "Hudson & Rex",
      Start: "18:05",
      End: "18:45",
      Category: "Krimiserie",
      Link: "https://www.tvmovie.de/tv/hudson-und-rex-epg-228237486",
      Thumbnail:
        "https://images.tvmovie.de/hudson-rex,id=4775302e,b=tvmovie,w=480,ca=28.88,0,85.13,100,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "Sky Nature",
    KanalLogo:
      "https://images.tvmovie.de/sky-nature-programm,id=767d8f38,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Afrika: Kiefer und Klauen",
      Start: "16:55",
      End: "17:45",
      Category: "Doku-Reihe",
      Link: "https://www.tvmovie.de/tv/afrika-kiefer-und-klauen-epg-230176538",
      Thumbnail:
        "https://images.tvmovie.de/c37c0db68c55ae3a04773abfac74d533b1c17448,id=5e5212c0,b=tvmovie,w=480,ca=12.73,0.00,79.27,100.00,rm=sk.webp",
      Progress: 95,
    },
    after: {
      Program: "Afrika: Kiefer und Klauen",
      Start: "17:45",
      End: "18:35",
      Category: "Doku-Reihe",
      Link: "https://www.tvmovie.de/tv/afrika-kiefer-und-klauen-epg-230176544",
      Thumbnail:
        "https://images.tvmovie.de/4c0e887f7462192e294e3942eb6a670abc2f5cfd,id=9cd6e7d4,b=tvmovie,w=480,ca=9.68,0.00,76.33,100.00,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "Sky Documentaries",
    KanalLogo:
      "https://images.tvmovie.de/sky-documentaries-programm,id=7b0b7722,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Feuer & Flamme",
      Start: "17:00",
      End: "17:45",
      Category: "Doku-Reihe",
      Link: "https://www.tvmovie.de/tv/feuer-und-flamme-epg-230323371",
      Thumbnail:
        "https://images.tvmovie.de/3097fc6152dd6a1aa5d65ce9c88a71de0cb18026,id=a9505a0c,b=tvmovie,w=480,ca=34.00,0.00,100.00,100.00,rm=sk.webp",
      Progress: 94,
    },
    after: {
      Program: "Mythbusters - Die Wissensjäger",
      Start: "17:45",
      End: "19:20",
      Category: "Doku-Reihe",
      Link: "https://www.tvmovie.de/tv/mythbusters-die-wissensjaeger-epg-230323372",
      Thumbnail:
        "https://images.tvmovie.de/d58d339ca8a401610309d66a16d72ad690c286dd,id=1727bc78,b=tvmovie,w=480,ca=0.00,0.00,75.00,100.00,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "Sky Cinema Highlights HD",
    KanalLogo:
      "https://images.tvmovie.de/sky-cinema-programm,id=ebb9b78b,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "xXx: Die Rückkehr des Xander Cage",
      Start: "16:40",
      End: "18:30",
      Category: "Actionfilm",
      Link: "https://www.tvmovie.de/tv/xxx-die-rueckkehr-des-xander-cage-epg-1230156056",
      Thumbnail:
        "https://images.tvmovie.de/0016a8cb7e595c5b53fdaaf0aa011e41c6936aea,id=4779cb68,b=tvmovie,w=480,ca=0.00,0.00,66.80,100.00,rm=sk.webp",
      Progress: 57,
    },
    after: {
      Program: "Minecraft",
      Start: "18:30",
      End: "20:15",
      Category: "Abenteuerfilm",
      Link: "https://www.tvmovie.de/tv/minecraft-epg-1230156057",
      Thumbnail:
        "https://images.tvmovie.de/minecraft,id=bc8e9dc6,b=tvmovie,w=480,ca=19.88,0,76.13,100,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "Sky Showcase",
    KanalLogo:
      "https://images.tvmovie.de/sky-showcase-programm,id=406e922b,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Mord mit Aussicht",
      Start: "17:05",
      End: "18:00",
      Category: "Krimiserie",
      Link: "https://www.tvmovie.de/tv/mord-mit-aussicht-epg-230310411",
      Thumbnail:
        "https://images.tvmovie.de/1da11b36fbae611fb7b23681bd0954e797b24245,id=5b425f74,b=tvmovie,w=480,ca=0.00,0.00,68.99,100.00,rm=sk.webp",
      Progress: 68,
    },
    after: {
      Program: "Blue Bloods - Crime Scene New York",
      Start: "18:00",
      End: "18:40",
      Category: "Krimiserie",
      Link: "https://www.tvmovie.de/tv/blue-bloods-crime-scene-new-york-epg-230310420",
      Thumbnail:
        "https://images.tvmovie.de/80bf19a533adfd233c3e5643b7efb7d396f30e7c,id=485446eb,b=tvmovie,w=480,ca=25.90,0.00,100.00,100.00,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "nickelodeon",
    KanalLogo:
      "https://images.tvmovie.de/nickelodeon-2023-logo-outline,id=1e5006c8,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Pinky Malinky​",
      Start: "17:05",
      End: "17:30",
      Category: "Animationsserie",
      Link: "https://www.tvmovie.de/tv/pinky-malinky-epg-229111667",
      Thumbnail:
        "https://images.tvmovie.de/9dc14257897d149ff9b153c0e52fff054f4dd2cd,id=e2819cff,b=tvmovie,w=480,ca=24.88,0.00,81.12,100.00,rm=sk.webp",
      Progress: 0,
    },
    after: {
      Program: "Willkommen bei den Louds",
      Start: "17:30",
      End: "17:55",
      Category: "Zeichentrickserie",
      Link: "https://www.tvmovie.de/tv/willkommen-bei-den-louds-epg-229111858",
      Thumbnail:
        "https://images.tvmovie.de/a32b70f4fc22d2f2b78a93d09f9830f8a0885dbf,id=ee0735c3,b=tvmovie,w=480,ca=21.88,0.00,78.13,100.00,rm=sk.webp",
      Progress: 50,
    },
  },
  {
    Kanal: "TOGGO Plus",
    KanalLogo:
      "https://images.tvmovie.de/toggoplus-logo,id=8316fde4,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Pokémon Horizons: Die Serie",
      Start: "17:05",
      End: "17:30",
      Category: "Animationsserie",
      Link: "https://www.tvmovie.de/tv/pokemon-horizons-die-serie-epg-231687544",
      Thumbnail:
        "https://images.tvmovie.de/pokemon-horizons-die-serie,id=1ad22de4,b=tvmovie,w=480,ca=5.5,0,80.5,100,rm=sk.webp",
      Progress: 0,
    },
    after: {
      Program: "Willkommen bei den Louds",
      Start: "17:30",
      End: "17:40",
      Category: "Zeichentrickserie",
      Link: "https://www.tvmovie.de/tv/willkommen-bei-den-louds-epg-231687545",
      Thumbnail:
        "https://images.tvmovie.de/e74dd8afe76f0b17f91eeb59a8444df479a4fc85,id=722561a2,b=tvmovie,w=480,ca=43.76,0.00,100.00,100.00,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "Nick jr.",
    KanalLogo:
      "https://images.tvmovie.de/nick-jr-logo-2023-outline,id=ec09942f,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Rubble und Crew",
      Start: "17:20",
      End: "17:30",
      Category: "Zeichentrickserie",
      Link: "https://www.tvmovie.de/tv/rubble-und-crew-epg-229456964",
      Thumbnail:
        "https://images.tvmovie.de/41cbf0f678991a65dfc3b5ccbc4f4aea41d9010b,id=97d18b88,b=tvmovie,w=480,ca=22.88,0.00,79.13,100.00,rm=sk.webp",
      Progress: 0,
    },
    after: {
      Program: "Mr. Crocodile",
      Start: "17:30",
      End: "17:55",
      Category: "Animationsserie",
      Link: "https://www.tvmovie.de/tv/mr-crocodile-epg-229457004",
      Thumbnail:
        "https://images.tvmovie.de/314d338cfe8836711084dd6302ed1b7c72fd47a6,id=6d6cd77e,b=tvmovie,w=480,ca=0.00,0.00,56.25,100.00,rm=sk.webp",
      Progress: 50,
    },
  },
  {
    Kanal: "Cartoon Network",
    KanalLogo:
      "https://images.tvmovie.de/a20de590-df22-11e5-9740-93b852ac6756-1,id=e6f46cde,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Craig of the Creek - Im Wald der Abenteuer",
      Start: "17:20",
      End: "17:35",
      Category: "Animationsserie",
      Link: "https://www.tvmovie.de/tv/craig-of-the-creek-im-wald-der-abenteuer-epg-229088901",
      Thumbnail:
        "https://images.tvmovie.de/79c19ef1f13e66afe51ce899f4fcec71be5170c0,id=6e9b0556,b=tvmovie,w=480,ca=21.88,0.00,78.13,100.00,rm=sk.webp",
      Progress: 0,
    },
    after: {
      Program: "Craig of the Creek - Im Wald der Abenteuer",
      Start: "17:35",
      End: "17:45",
      Category: "Animationsserie",
      Link: "https://www.tvmovie.de/tv/craig-of-the-creek-im-wald-der-abenteuer-epg-229088902",
      Thumbnail:
        "https://images.tvmovie.de/109a12d7de17ea36ba94582103951d851f3a2b1d,id=bfcaa9c3,b=tvmovie,w=480,ca=30.87,0.00,87.13,100.00,rm=sk.webp",
      Progress: 75,
    },
  },
  {
    Kanal: "Fix und Foxi",
    KanalLogo:
      "https://images.tvmovie.de/a39ebec0-df22-11e5-9740-93b852ac6756-1,id=034818d7,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Drone Cats",
      Start: "17:15",
      End: "17:27",
      Category: "Animationsserie",
      Link: "https://www.tvmovie.de/tv/drone-cats-epg-230753985",
      Thumbnail:
        "https://images.tvmovie.de/epg-16-9,id=62e71af4,b=tvmovie,w=480,ca=21.88,0.00,78.13,100.00,rm=sk.webp",
      Progress: 0,
    },
    after: {
      Program: "Drone Cats",
      Start: "17:27",
      End: "17:40",
      Category: "Animationsserie",
      Link: "https://www.tvmovie.de/tv/drone-cats-epg-230753991",
      Thumbnail:
        "https://images.tvmovie.de/epg-16-9,id=62e71af4,b=tvmovie,w=480,ca=21.88,0.00,78.13,100.00,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "Cartoonito",
    KanalLogo:
      "https://images.tvmovie.de/cartoonito-1,id=cdec7517,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Mr. Bean - Die Cartoon-Serie",
      Start: "17:20",
      End: "17:30",
      Category: "Zeichentrickserie",
      Link: "https://www.tvmovie.de/tv/mr-bean-die-cartoon-serie-epg-229499698",
      Thumbnail:
        "https://images.tvmovie.de/b48ec928300e88c0bba9b44f3d39a27df9ba7e3e,id=6704c980,b=tvmovie,w=480,ca=19.88,0.00,76.13,100.00,rm=sk.webp",
      Progress: 0,
    },
    after: {
      Program: "Mr. Bean - Die Cartoon-Serie",
      Start: "17:30",
      End: "17:50",
      Category: "Zeichentrickserie",
      Link: "https://www.tvmovie.de/tv/mr-bean-die-cartoon-serie-epg-229500004",
      Thumbnail:
        "https://images.tvmovie.de/b48ec928300e88c0bba9b44f3d39a27df9ba7e3e,id=dce4b7d7,b=tvmovie,w=480,ca=19.88,0.00,76.13,100.00,rm=sk.webp",
      Progress: 63,
    },
  },
  {
    Kanal: "SPORT1+",
    KanalLogo:
      "https://images.tvmovie.de/98c7a110-df22-11e5-9740-93b852ac6756-1,id=337db3e9,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "scooore Libertadores! Alle Tore",
      Start: "17:00",
      End: "17:50",
      Category: "Fußballmagazin",
      Link: "https://www.tvmovie.de/tv/scooore-libertadores-alle-tore-epg-230662011",
      Thumbnail:
        "https://images.tvmovie.de/epg-16-9,id=62e71af4,b=tvmovie,w=480,ca=21.88,0.00,78.13,100.00,rm=sk.webp",
      Progress: 85,
    },
    after: {
      Program: "scooore Libertadores! Alle Tore",
      Start: "17:50",
      End: "18:40",
      Category: "Fußballmagazin",
      Link: "https://www.tvmovie.de/tv/scooore-libertadores-alle-tore-epg-230662009",
      Thumbnail:
        "https://images.tvmovie.de/epg-16-9,id=62e71af4,b=tvmovie,w=480,ca=21.88,0.00,78.13,100.00,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "Eurosport 2",
    KanalLogo:
      "https://images.tvmovie.de/eurosport2-1,id=74f316c1,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Sportklettern: World Series",
      Start: "16:26",
      End: "18:01",
      Category: "Fun- u. Extremsport",
      Link: "https://www.tvmovie.de/tv/sportklettern-world-series-epg-233601940",
      Thumbnail:
        "https://images.tvmovie.de/sportklettern,id=7033ca9b,b=tvmovie,w=480,ca=31.67,0,98.33,100,rm=sk.webp",
      Progress: 81,
    },
    after: {
      Program: "Olympische Spiele: Hall of Fame",
      Start: "18:01",
      End: "18:59",
      Category: "Sportmagazin",
      Link: "https://www.tvmovie.de/tv/olympische-spiele-hall-of-fame-epg-231124319",
      Thumbnail:
        "https://images.tvmovie.de/olympische-spiele-hall-of-fame,id=04dee9ad,b=tvmovie,w=480,ca=22.64,0,89.36,100,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "Sky Sport News",
    KanalLogo:
      "https://images.tvmovie.de/skysportnewshd-1,id=262b60dc,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Dein Zweitligatalk - HvK & Tusche",
      Start: "17:00",
      End: "17:30",
      Category: "Talkshow",
      Link: "https://www.tvmovie.de/tv/dein-zweitligatalk-hvk-und-tusche-epg-230549494",
      Thumbnail:
        "https://images.tvmovie.de/epg-16-9,id=62e71af4,b=tvmovie,w=480,ca=21.88,0.00,78.13,100.00,rm=sk.webp",
      Progress: 0,
    },
    after: {
      Program: "Gesagt. Gemeint",
      Start: "17:30",
      End: "18:00",
      Category: "Sportmagazin",
      Link: "https://www.tvmovie.de/tv/gesagt-gemeint-epg-230720336",
      Thumbnail:
        "https://images.tvmovie.de/epg-16-9,id=62e71af4,b=tvmovie,w=480,ca=21.88,0.00,78.13,100.00,rm=sk.webp",
      Progress: 42,
    },
  },
  {
    Kanal: "Sky Sport F1",
    KanalLogo:
      "https://images.tvmovie.de/sky-logo-sport-f1-hd-1,id=07d51df1,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Formel 1: Großer Preis der Niederlande",
      Start: "16:00",
      End: "18:00",
      Category: "Formel 1",
      Link: "https://www.tvmovie.de/tv/formel-1-grosser-preis-der-niederlande-epg-230527999",
      Thumbnail:
        "https://images.tvmovie.de/formel-1,id=16c528b1,b=tvmovie,w=480,ca=28,0,78,100,rm=sk.webp",
      Progress: 85,
    },
    after: {
      Program: "Motorsport: IndyCar Series",
      Start: "18:00",
      End: "20:00",
      Category: "Motorsport",
      Link: "https://www.tvmovie.de/tv/motorsport-indycar-series-epg-230528001",
      Thumbnail:
        "https://images.tvmovie.de/epg-16-9,id=62e71af4,b=tvmovie,w=480,ca=21.88,0.00,78.13,100.00,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "Sky Sport Bundesliga",
    KanalLogo:
      "https://images.tvmovie.de/sky-sportbundesliga-programm,id=016a2418,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Fußball: 2. Bundesliga",
      Start: "17:40",
      End: "18:00",
      Category: "Fußball",
      Link: "https://www.tvmovie.de/tv/fussball-2-bundesliga-epg-1230464003",
      Thumbnail:
        "https://images.tvmovie.de/fussball,id=ce229ea8,b=tvmovie,w=480,ca=23.89,0,76.11,100,rm=sk.webp",
      Progress: 0,
    },
    after: {
      Program: "Fußball: 2. Bundesliga",
      Start: "17:40",
      End: "18:00",
      Category: "Fußball",
      Link: "https://www.tvmovie.de/tv/fussball-2-bundesliga-epg-1233261356",
      Thumbnail:
        "https://images.tvmovie.de/fussball,id=ce229ea8,b=tvmovie,w=480,ca=23.89,0,76.11,100,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "More Than Sports TV",
    KanalLogo:
      "https://images.tvmovie.de/morethansportstv-1,id=eb08b392,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Top Speed Classic",
      Start: "16:50",
      End: "17:25",
      Category: "Motorsport",
      Link: "https://www.tvmovie.de/tv/top-speed-classic-epg-229518492",
      Thumbnail:
        "https://images.tvmovie.de/epg-16-9,id=62e71af4,b=tvmovie,w=480,ca=21.88,0.00,78.13,100.00,rm=sk.webp",
      Progress: 0,
    },
    after: {
      Program:
        "Faultless - The riders, their horses, and the pursuit of excellence",
      Start: "17:25",
      End: "18:20",
      Category: "Doku-Reihe",
      Link: "https://www.tvmovie.de/tv/faultless-the-riders-their-horses-and-the-pursuit-of-excellence-epg-232337974",
      Thumbnail:
        "https://images.tvmovie.de/epg-16-9,id=62e71af4,b=tvmovie,w=480,ca=21.88,0.00,78.13,100.00,rm=sk.webp",
      Progress: 32,
    },
  },
  {
    Kanal: "Auto Motor Sport",
    KanalLogo:
      "https://images.tvmovie.de/a32f3410-df22-11e5-9740-93b852ac6756-1,id=d3b1cde0,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Garagen-Gold",
      Start: "17:15",
      End: "17:45",
      Category: "Doku-Reihe",
      Link: "https://www.tvmovie.de/tv/garagen-gold-epg-231786731",
      Thumbnail:
        "https://images.tvmovie.de/epg-16-9,id=62e71af4,b=tvmovie,w=480,ca=21.88,0.00,78.13,100.00,rm=sk.webp",
      Progress: 92,
    },
    after: {
      Program: "Echte Typen",
      Start: "17:45",
      End: "18:00",
      Category: "Automagazin",
      Link: "https://www.tvmovie.de/tv/echte-typen-epg-231786705",
      Thumbnail:
        "https://images.tvmovie.de/epg-16-9,id=62e71af4,b=tvmovie,w=480,ca=21.88,0.00,78.13,100.00,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "Sky Sport Austria 1",
    KanalLogo:
      "https://images.tvmovie.de/skysportaustria-1,id=9d4c1874,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Fußball: Champions-League-Qualifikation",
      Start: "16:15",
      End: "18:15",
      Category: "Fußball",
      Link: "https://www.tvmovie.de/tv/fussball-champions-league-qualifikation-epg-233263028",
      Thumbnail:
        "https://images.tvmovie.de/fussball,id=ce229ea8,b=tvmovie,w=480,ca=23.89,0,76.11,100,rm=sk.webp",
      Progress: 73,
    },
    after: {
      Program: "Die UEFA Champions League am Dienstag",
      Start: "18:15",
      End: "18:30",
      Category: "Fußballmagazin",
      Link: "https://www.tvmovie.de/tv/die-uefa-champions-league-am-dienstag-epg-230514405",
      Thumbnail:
        "https://images.tvmovie.de/epg-16-9,id=62e71af4,b=tvmovie,w=480,ca=21.88,0.00,78.13,100.00,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "Sportdigital Fußball",
    KanalLogo:
      "https://images.tvmovie.de/sportdigitalfusball-1,id=8f53a177,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Fußball: Eredivisie",
      Start: "15:45",
      End: "17:45",
      Category: "Fußball",
      Link: "https://www.tvmovie.de/tv/fussball-eredivisie-epg-230995566",
      Thumbnail:
        "https://images.tvmovie.de/fb94164b6f16d1cc687cf2bcf539c12aaa3fb4ad,id=1f16a7b1,b=tvmovie,w=480,ca=13.88,0.00,70.13,100.00,rm=sk.webp",
      Progress: 98,
    },
    after: {
      Program: "scooore Niederlande! Alle Tore",
      Start: "17:45",
      End: "18:15",
      Category: "Fußballmagazin",
      Link: "https://www.tvmovie.de/tv/scooore-niederlande-alle-tore-epg-230995567",
      Thumbnail:
        "https://images.tvmovie.de/epg-16-9,id=62e71af4,b=tvmovie,w=480,ca=21.88,0.00,78.13,100.00,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "DAZN",
    KanalLogo:
      "https://images.tvmovie.de/dazn-programm,id=bf296d67,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Radsport: Vuelta a España",
      Start: "14:35",
      End: "18:35",
      Category: "Radsport",
      Link: "https://www.tvmovie.de/tv/radsport-vuelta-a-espana-epg-230973498",
      Thumbnail:
        "https://images.tvmovie.de/radsport,id=495cac23,b=tvmovie,w=480,ca=17.67,0,84.33,100,rm=sk.webp",
      Progress: 78,
    },
    after: {
      Program: "DAZN Transfer by Fabrizio Romano",
      Start: "19:57",
      End: "22:27",
      Category: "Sportmagazin",
      Link: "https://www.tvmovie.de/tv/dazn-transfer-by-fabrizio-romano-epg-233901821",
      Thumbnail:
        "https://images.tvmovie.de/epg-16-9,id=62e71af4,b=tvmovie,w=480,ca=21.88,0.00,78.13,100.00,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "MagentaSport",
    KanalLogo:
      "https://images.tvmovie.de/magenta-spor-programm,id=939792a3,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Golf: US PGA Tour",
      Start: "20:00",
      End: "01:00",
      Category: "Golf",
      Link: "https://www.tvmovie.de/tv/golf-us-pga-tour-epg-230811495",
      Thumbnail:
        "https://images.tvmovie.de/golfsport,id=377fb37c,b=tvmovie,w=480,ca=24.87,0,81.13,100,rm=sk.webp",
      Progress: 0,
    },
    after: {
      Program: "Golf: DP World Tour",
      Start: "13:30",
      End: "18:30",
      Category: "Golf",
      Link: "https://www.tvmovie.de/tv/golf-dp-world-tour-epg-230812317",
      Thumbnail:
        "https://images.tvmovie.de/golfsport,id=377fb37c,b=tvmovie,w=480,ca=24.87,0,81.13,100,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "Sky Sport Top Event HD",
    KanalLogo:
      "https://images.tvmovie.de/sky-sport-top-event-programm,id=34b299f2,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Motorsport: IndyCar Series",
      Start: "15:45",
      End: "17:45",
      Category: "Motorsport",
      Link: "https://www.tvmovie.de/tv/motorsport-indycar-series-epg-1230656209",
      Thumbnail:
        "https://images.tvmovie.de/epg-16-9,id=62e71af4,b=tvmovie,w=480,ca=21.88,0.00,78.13,100.00,rm=sk.webp",
      Progress: 98,
    },
    after: {
      Program: "Fußball: DFB-Pokal",
      Start: "17:45",
      End: "19:45",
      Category: "Fußballmagazin",
      Link: "https://www.tvmovie.de/tv/fussball-dfb-pokal-epg-1233351719",
      Thumbnail:
        "https://images.tvmovie.de/epg-16-9,id=62e71af4,b=tvmovie,w=480,ca=21.88,0.00,78.13,100.00,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "Sky Sport Mix HD",
    KanalLogo:
      "https://images.tvmovie.de/sky-sport-mix-programm,id=ba534f91,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "scooore Polen! Alle Tore",
      Start: "17:00",
      End: "17:30",
      Category: "Fußball",
      Link: "https://www.tvmovie.de/tv/scooore-polen-alle-tore-epg-1231673852",
      Thumbnail:
        "https://images.tvmovie.de/epg-16-9,id=62e71af4,b=tvmovie,w=480,ca=21.88,0.00,78.13,100.00,rm=sk.webp",
      Progress: 0,
    },
    after: {
      Program: "scooore Portugal! Alle Tore",
      Start: "17:30",
      End: "18:00",
      Category: "Fußballmagazin",
      Link: "https://www.tvmovie.de/tv/scooore-portugal-alle-tore-epg-1231673906",
      Thumbnail:
        "https://images.tvmovie.de/epg-16-9,id=62e71af4,b=tvmovie,w=480,ca=21.88,0.00,78.13,100.00,rm=sk.webp",
      Progress: 42,
    },
  },
  {
    Kanal: "Sky Sport Premier League",
    KanalLogo:
      "https://images.tvmovie.de/sky-sport-premier-league-programm,id=24e25d9c,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Fußball: Premier League",
      Start: "16:55",
      End: "17:25",
      Category: "Fußball",
      Link: "https://www.tvmovie.de/tv/fussball-premier-league-epg-230456144",
      Thumbnail:
        "https://images.tvmovie.de/fussball,id=ce229ea8,b=tvmovie,w=480,ca=23.89,0,76.11,100,rm=sk.webp",
      Progress: 0,
    },
    after: {
      Program: "90in30",
      Start: "17:25",
      End: "17:55",
      Category: "Fußballmagazin",
      Link: "https://www.tvmovie.de/tv/90in30-epg-230456143",
      Thumbnail:
        "https://images.tvmovie.de/epg-16-9,id=62e71af4,b=tvmovie,w=480,ca=21.88,0.00,78.13,100.00,rm=sk.webp",
      Progress: 59,
    },
  },
  {
    Kanal: "Sky Sport Tennis HD",
    KanalLogo:
      "https://images.tvmovie.de/sky-sport-tennis-programm,id=286e6633,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Tennis: US Open",
      Start: "14:00",
      End: "18:00",
      Category: "Tennis",
      Link: "https://www.tvmovie.de/tv/tennis-us-open-epg-1230548963",
      Thumbnail:
        "https://images.tvmovie.de/tennis,id=e46384de,b=tvmovie,w=480,ca=30.99,0,89.01,100,rm=sk.webp",
      Progress: 93,
    },
    after: {
      Program: "Tennis",
      Start: "18:00",
      End: "20:00",
      Category: "Tennis",
      Link: "https://www.tvmovie.de/tv/tennis-epg-1230548916",
      Thumbnail:
        "https://images.tvmovie.de/tennis,id=e46384de,b=tvmovie,w=480,ca=30.99,0,89.01,100,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "Sky Sport Golf",
    KanalLogo:
      "https://images.tvmovie.de/sky-sport-golf-programm,id=28c619f0,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Golf: LPGA Tour",
      Start: "15:30",
      End: "18:30",
      Category: "Golf",
      Link: "https://www.tvmovie.de/tv/golf-lpga-tour-epg-230654066",
      Thumbnail:
        "https://images.tvmovie.de/golfsport,id=377fb37c,b=tvmovie,w=480,ca=24.87,0,81.13,100,rm=sk.webp",
      Progress: 74,
    },
    after: {
      Program: "Golf: US Women's Open",
      Start: "18:30",
      End: "21:30",
      Category: "Golf",
      Link: "https://www.tvmovie.de/tv/golf-us-womens-open-epg-230654067",
      Thumbnail:
        "https://images.tvmovie.de/golfsport,id=377fb37c,b=tvmovie,w=480,ca=24.87,0,81.13,100,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "Dyn Highlights",
    KanalLogo:
      "https://images.tvmovie.de/dyn-highlights-programm,id=732a420d,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Tischtennis: Bundesliga",
      Start: "18:10",
      End: "20:45",
      Category: "Tischtennis",
      Link: "https://www.tvmovie.de/tv/tischtennis-bundesliga-epg-231087168",
      Thumbnail:
        "https://images.tvmovie.de/tischtennis,id=242168e4,b=tvmovie,w=480,ca=27.61,0,94.39,100,rm=sk.webp",
      Progress: 0,
    },
    after: {
      Program: "Tischtennis: Bundesliga",
      Start: "18:25",
      End: "21:00",
      Category: "Tischtennis",
      Link: "https://www.tvmovie.de/tv/tischtennis-bundesliga-epg-231087171",
      Thumbnail:
        "https://images.tvmovie.de/tischtennis,id=242168e4,b=tvmovie,w=480,ca=27.61,0,94.39,100,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "Prime Sports Highlights DE",
    KanalLogo:
      "https://images.tvmovie.de/prime-sports-programm,id=315a79e6,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Basketball: WNBA",
      Start: "02:00",
      End: "04:00",
      Category: "Basketball",
      Link: "https://www.tvmovie.de/tv/basketball-wnba-epg-226311894",
      Thumbnail:
        "https://images.tvmovie.de/basketball,id=814be6d7,b=tvmovie,w=480,ca=0,0,74.35,100,rm=sk.webp",
      Progress: 0,
    },
    after: {
      Program: "Basketball: WNBA",
      Start: "04:00",
      End: "06:00",
      Category: "Basketball",
      Link: "https://www.tvmovie.de/tv/basketball-wnba-epg-226311895",
      Thumbnail:
        "https://images.tvmovie.de/basketball,id=814be6d7,b=tvmovie,w=480,ca=0,0,74.35,100,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "ANIMAL PLANET",
    KanalLogo:
      "https://images.tvmovie.de/animal-planet-1,id=f7293557,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Die Irwins - Crocodile Hunter Family",
      Start: "17:10",
      End: "17:55",
      Category: "Naturdokumentation",
      Link: "https://www.tvmovie.de/tv/die-irwins-crocodile-hunter-family-epg-230673869",
      Thumbnail:
        "https://images.tvmovie.de/4c7ef1588d9f8c678d38237c57edf6d92e0eadbf,id=18eefd8f,b=tvmovie,w=480,ca=21.88,0.00,78.13,100.00,rm=sk.webp",
      Progress: 72,
    },
    after: {
      Program: "Die Irwins - Crocodile Hunter Family",
      Start: "17:55",
      End: "18:40",
      Category: "Naturdokumentation",
      Link: "https://www.tvmovie.de/tv/die-irwins-crocodile-hunter-family-epg-230673862",
      Thumbnail:
        "https://images.tvmovie.de/84bd20a103663a41fbdee7f5cb467b683a054d59,id=2a885aaa,b=tvmovie,w=480,ca=16.88,0.00,73.13,100.00,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "ANIXE",
    KanalLogo:
      "https://images.tvmovie.de/9d49cdd0-df22-11e5-9740-93b852ac6756-1,id=1f54340e,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Infomercial",
      Start: "17:00",
      End: "17:30",
      Category: "Werbung",
      Link: "https://www.tvmovie.de/tv/infomercial-epg-230570970",
      Thumbnail:
        "https://images.tvmovie.de/infomercial,id=dd8154ad,b=tvmovie,w=480,ca=25.67,0,92.33,100,rm=sk.webp",
      Progress: 0,
    },
    after: {
      Program: "Vier Frauen und ein Todesfall",
      Start: "17:30",
      End: "18:30",
      Category: "Krimiserie",
      Link: "https://www.tvmovie.de/tv/vier-frauen-und-ein-todesfall-epg-230570971",
      Thumbnail:
        "https://images.tvmovie.de/epg-16-9,id=62e71af4,b=tvmovie,w=480,ca=21.88,0.00,78.13,100.00,rm=sk.webp",
      Progress: 21,
    },
  },
  {
    Kanal: "ATV",
    KanalLogo:
      "https://images.tvmovie.de/a729e150-df22-11e5-9740-93b852ac6756-1,id=8d29184f,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Hawaii Five-0",
      Start: "16:55",
      End: "17:50",
      Category: "Krimiserie",
      Link: "https://www.tvmovie.de/tv/hawaii-five-0-epg-230963106",
      Thumbnail:
        "https://images.tvmovie.de/2e62967bba611c6fd40034eb8bcc8db2583adce9,id=75bac328,b=tvmovie,w=480,ca=38.90,0.00,100.00,100.00,rm=sk.webp",
      Progress: 86,
    },
    after: {
      Program: "ATV Aktuell",
      Start: "17:50",
      End: "17:55",
      Category: "Nachrichten",
      Link: "https://www.tvmovie.de/tv/atv-aktuell-epg-230963108",
      Thumbnail:
        "https://images.tvmovie.de/epg-16-9,id=62e71af4,b=tvmovie,w=480,ca=21.88,0.00,78.13,100.00,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "Baby TV",
    KanalLogo:
      "https://images.tvmovie.de/a30abc20-df22-11e5-9740-93b852ac6756-1,id=ebcd01af,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Welcome to the Island",
      Start: "17:00",
      End: "17:30",
      Category: "Zeichentrickserie",
      Link: "https://www.tvmovie.de/tv/welcome-to-the-island-epg-229940667",
      Thumbnail:
        "https://images.tvmovie.de/epg-16-9,id=62e71af4,b=tvmovie,w=480,ca=21.88,0.00,78.13,100.00,rm=sk.webp",
      Progress: 0,
    },
    after: {
      Program: "Exploring with Songs & Rhymes",
      Start: "17:30",
      End: "18:00",
      Category: "NN",
      Link: "https://www.tvmovie.de/tv/exploring-with-songs-und-rhymes-epg-229940619",
      Thumbnail:
        "https://images.tvmovie.de/epg-16-9,id=62e71af4,b=tvmovie,w=480,ca=21.88,0.00,78.13,100.00,rm=sk.webp",
      Progress: 42,
    },
  },
  {
    Kanal: "BBC World",
    KanalLogo:
      "https://images.tvmovie.de/9d9f40d0-df22-11e5-9740-93b852ac6756-1,id=367de499,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Verified Live",
      Start: "17:00",
      End: "17:30",
      Category: "NN",
      Link: "https://www.tvmovie.de/tv/verified-live-epg-233005719",
      Thumbnail:
        "https://images.tvmovie.de/epg-16-9,id=62e71af4,b=tvmovie,w=480,ca=21.88,0.00,78.13,100.00,rm=sk.webp",
      Progress: 0,
    },
    after: {
      Program: "Business Today",
      Start: "17:30",
      End: "17:45",
      Category: "NN",
      Link: "https://www.tvmovie.de/tv/business-today-epg-231776686",
      Thumbnail:
        "https://images.tvmovie.de/epg-16-9,id=62e71af4,b=tvmovie,w=480,ca=21.88,0.00,78.13,100.00,rm=sk.webp",
      Progress: 84,
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
      Link: "https://www.tvmovie.de/tv/sendepause-epg-230155264",
      Thumbnail:
        "https://images.tvmovie.de/sendepause,id=c128ac34,b=tvmovie,w=480,ca=14.67,0,81.33,100,rm=sk.webp",
      Progress: 82,
    },
    after: {
      Program: "Zeit für Sinnlichkeit 8",
      Start: "20:15",
      End: "21:45",
      Category: "Erotikfilm",
      Link: "https://www.tvmovie.de/tv/zeit-fuer-sinnlichkeit-8-epg-230155267",
      Thumbnail:
        "https://images.tvmovie.de/epg-16-9,id=62e71af4,b=tvmovie,w=480,ca=21.88,0.00,78.13,100.00,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "Bergblick",
    KanalLogo:
      "https://images.tvmovie.de/bergblick-1,id=7b21a2aa,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Bergwelten",
      Start: "16:45",
      End: "17:35",
      Category: "Naturdokumentation",
      Link: "https://www.tvmovie.de/tv/bergwelten-epg-230554054",
      Thumbnail:
        "https://images.tvmovie.de/223066422354ed42f8fddbf15a4d006458e32785,id=929f4fa6,b=tvmovie,w=480,ca=0.00,0.00,56.25,100.00,rm=sk.webp",
      Progress: 0,
    },
    after: {
      Program: "Planet Weltweit",
      Start: "17:35",
      End: "18:30",
      Category: "Reisereportage",
      Link: "https://www.tvmovie.de/tv/planet-weltweit-epg-230554057",
      Thumbnail:
        "https://images.tvmovie.de/63ae400e7972248b3c80ebbdb0990a2baebd56fb,id=8c20694d,b=tvmovie,w=480,ca=24.51,0.00,99.49,100.00,rm=sk.webp",
      Progress: 14,
    },
  },
  {
    Kanal: "Bibel-TV",
    KanalLogo:
      "https://images.tvmovie.de/9dd6a480-df22-11e5-9740-93b852ac6756-1,id=b9a60dbe,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Erlebt-TV",
      Start: "17:00",
      End: "17:30",
      Category: "Magazin",
      Link: "https://www.tvmovie.de/tv/erlebt-tv-epg-229373744",
      Thumbnail:
        "https://images.tvmovie.de/epg-16-9,id=62e71af4,b=tvmovie,w=480,ca=21.88,0.00,78.13,100.00,rm=sk.webp",
      Progress: 0,
    },
    after: {
      Program: "Joyce Meyer - Das Leben genießen",
      Start: "17:30",
      End: "18:00",
      Category: "Gespräch",
      Link: "https://www.tvmovie.de/tv/joyce-meyer-das-leben-geniessen-epg-229373747",
      Thumbnail:
        "https://images.tvmovie.de/13a8c41ad521fe2828f53a58c4d17dc4293fd878,id=d1044e73,b=tvmovie,w=480,ca=8.87,0.00,65.13,100.00,rm=sk.webp",
      Progress: 42,
    },
  },
  {
    Kanal: "BonGusto",
    KanalLogo:
      "https://images.tvmovie.de/a2d79e30-df22-11e5-9740-93b852ac6756-1,id=49a7da08,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Genuss Weltweit",
      Start: "17:00",
      End: "17:55",
      Category: "Reportage",
      Link: "https://www.tvmovie.de/tv/genuss-weltweit-epg-230088684",
      Thumbnail:
        "https://images.tvmovie.de/8c0a41e73d0f843b2e78a7c03444509356fe21da,id=75558fdc,b=tvmovie,w=480,ca=0.00,0.00,75.00,100.00,rm=sk.webp",
      Progress: 77,
    },
    after: {
      Program: "Kräutergarten",
      Start: "17:55",
      End: "18:00",
      Category: "Magazin",
      Link: "https://www.tvmovie.de/tv/kraeutergarten-epg-230088686",
      Thumbnail:
        "https://images.tvmovie.de/c13aa8e5358201e9009998e38b3b18300ba12b23,id=ca59f40a,b=tvmovie,w=480,ca=0.00,0.00,61.70,100.00,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "Classica",
    KanalLogo:
      "https://images.tvmovie.de/a233e420-df22-11e5-9740-93b852ac6756-1,id=1597f74d,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Barenboim: 50 Years on Stage",
      Start: "17:10",
      End: "19:16",
      Category: "Konzert",
      Link: "https://www.tvmovie.de/tv/barenboim-50-years-on-stage-epg-230468728",
      Thumbnail:
        "https://images.tvmovie.de/3772c7be347c41eddc612f841f831820211a88a5,id=b0b6ddca,b=tvmovie,w=480,ca=33.32,0.00,100.00,100.00,rm=sk.webp",
      Progress: 26,
    },
    after: {
      Program: "Beethoven - Violinkonzert, opus 61",
      Start: "19:16",
      End: "19:59",
      Category: "Konzert",
      Link: "https://www.tvmovie.de/tv/beethoven-violinkonzert-opus-61-epg-230468733",
      Thumbnail:
        "https://images.tvmovie.de/62e2a914f22baf3c7a07834fd48e78168794fa8a,id=f1189ebe,b=tvmovie,w=480,ca=6.66,0.00,73.34,100.00,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "CNN",
    KanalLogo:
      "https://images.tvmovie.de/9dacfc70-df22-11e5-9740-93b852ac6756-1,id=967f9f90,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "One World",
      Start: "17:00",
      End: "18:00",
      Category: "NN",
      Link: "https://www.tvmovie.de/tv/one-world-epg-230572886",
      Thumbnail:
        "https://images.tvmovie.de/epg-16-9,id=62e71af4,b=tvmovie,w=480,ca=21.88,0.00,78.13,100.00,rm=sk.webp",
      Progress: 71,
    },
    after: {
      Program: "One World",
      Start: "18:00",
      End: "19:00",
      Category: "NN",
      Link: "https://www.tvmovie.de/tv/one-world-epg-230572891",
      Thumbnail:
        "https://images.tvmovie.de/epg-16-9,id=62e71af4,b=tvmovie,w=480,ca=21.88,0.00,78.13,100.00,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "Curiosity Channel",
    KanalLogo:
      "https://images.tvmovie.de/curiositychannel-color-pos-1,id=20d7b5b7,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "42 - Die Antwort auf fast alles",
      Start: "17:10",
      End: "17:40",
      Category: "Doku-Reihe",
      Link: "https://www.tvmovie.de/tv/42-die-antwort-auf-fast-alles-epg-230369493",
      Thumbnail:
        "https://images.tvmovie.de/77e3660bdc4f51588bf381b4da8d3bc3e346c2c1,id=c4be255b,b=tvmovie,w=480,ca=14.88,0.00,71.13,100.00,rm=sk.webp",
      Progress: 0,
    },
    after: {
      Program: "42 - Die Antwort auf fast alles",
      Start: "17:40",
      End: "18:05",
      Category: "Doku-Reihe",
      Link: "https://www.tvmovie.de/tv/42-die-antwort-auf-fast-alles-epg-230369504",
      Thumbnail:
        "https://images.tvmovie.de/42-die-antwort-auf-fast-alles,id=53754aba,b=tvmovie,w=480,ca=6.88,0,63.13,100,rm=sk.webp",
      Progress: 10,
    },
  },
  {
    Kanal: "DELUXE MUSIC TV",
    KanalLogo:
      "https://images.tvmovie.de/9d6bd4c0-df22-11e5-9740-93b852ac6756-1,id=aea08f60,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "YOU DELUXE",
      Start: "17:00",
      End: "19:00",
      Category: "Musikmagazin",
      Link: "https://www.tvmovie.de/tv/you-deluxe-epg-229332797",
      Thumbnail:
        "https://images.tvmovie.de/epg-16-9,id=62e71af4,b=tvmovie,w=480,ca=21.88,0.00,78.13,100.00,rm=sk.webp",
      Progress: 36,
    },
    after: {
      Program: "Countdown Deluxe",
      Start: "19:00",
      End: "20:00",
      Category: "Musik",
      Link: "https://www.tvmovie.de/tv/countdown-deluxe-epg-229332809",
      Thumbnail:
        "https://images.tvmovie.de/epg-16-9,id=62e71af4,b=tvmovie,w=480,ca=21.88,0.00,78.13,100.00,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "Discovery Channel",
    KanalLogo:
      "https://images.tvmovie.de/a340c040-df22-11e5-9740-93b852ac6756-1,id=dd0097cf,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Border Control: Schwedens Grenzschützer",
      Start: "16:40",
      End: "17:20",
      Category: "Doku-Soap",
      Link: "https://www.tvmovie.de/tv/border-control-schwedens-grenzschuetzer-epg-230616616",
      Thumbnail:
        "https://images.tvmovie.de/33f5b0e4d33f0a0e9f4b780321ba24def49c24f7,id=b3eb78cb,b=tvmovie,w=480,ca=16.86,0.00,73.14,100.00,rm=sk.webp",
      Progress: 0,
    },
    after: {
      Program: "Border Control: Schwedens Grenzschützer",
      Start: "17:20",
      End: "18:05",
      Category: "Doku-Soap",
      Link: "https://www.tvmovie.de/tv/border-control-schwedens-grenzschuetzer-epg-230616617",
      Thumbnail:
        "https://images.tvmovie.de/33f5b0e4d33f0a0e9f4b780321ba24def49c24f7,id=352f9c43,b=tvmovie,w=480,ca=16.86,0.00,73.14,100.00,rm=sk.webp",
      Progress: 50,
    },
  },
  {
    Kanal: "EURONEWS",
    KanalLogo:
      "https://images.tvmovie.de/9db783c0-df22-11e5-9740-93b852ac6756-1,id=78252f70,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Europa im blickpunkt",
      Start: "17:15",
      End: "17:30",
      Category: "Nachrichten",
      Link: "https://www.tvmovie.de/tv/europa-im-blickpunkt-epg-231077218",
      Thumbnail:
        "https://images.tvmovie.de/epg-16-9,id=62e71af4,b=tvmovie,w=480,ca=21.88,0.00,78.13,100.00,rm=sk.webp",
      Progress: 0,
    },
    after: {
      Program: "Europa im blickpunkt",
      Start: "17:30",
      End: "18:00",
      Category: "Nachrichten",
      Link: "https://www.tvmovie.de/tv/europa-im-blickpunkt-epg-231077481",
      Thumbnail:
        "https://images.tvmovie.de/epg-16-9,id=62e71af4,b=tvmovie,w=480,ca=21.88,0.00,78.13,100.00,rm=sk.webp",
      Progress: 42,
    },
  },
  {
    Kanal: "fashiontv",
    KanalLogo:
      "https://images.tvmovie.de/a272c1e0-df22-11e5-9740-93b852ac6756-1,id=875a7566,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Fashion Films",
      Start: "17:00",
      End: "17:30",
      Category: "NN",
      Link: "https://www.tvmovie.de/tv/fashion-films-epg-230701070",
      Thumbnail:
        "https://images.tvmovie.de/epg-16-9,id=62e71af4,b=tvmovie,w=480,ca=21.88,0.00,78.13,100.00,rm=sk.webp",
      Progress: 0,
    },
    after: {
      Program: "Fashion Films",
      Start: "17:30",
      End: "18:00",
      Category: "NN",
      Link: "https://www.tvmovie.de/tv/fashion-films-epg-230701042",
      Thumbnail:
        "https://images.tvmovie.de/epg-16-9,id=62e71af4,b=tvmovie,w=480,ca=21.88,0.00,78.13,100.00,rm=sk.webp",
      Progress: 42,
    },
  },
  {
    Kanal: "Goldstar TV",
    KanalLogo:
      "https://images.tvmovie.de/a1e4d9c0-df22-11e5-9740-93b852ac6756-1,id=0394ce98,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "SoftHits",
      Start: "17:00",
      End: "18:00",
      Category: "Clips",
      Link: "https://www.tvmovie.de/tv/softhits-epg-231113348",
      Thumbnail:
        "https://images.tvmovie.de/epg-16-9,id=62e71af4,b=tvmovie,w=480,ca=21.88,0.00,78.13,100.00,rm=sk.webp",
      Progress: 71,
    },
    after: {
      Program: "Schlager & Co.",
      Start: "18:00",
      End: "19:00",
      Category: "Musikmagazin",
      Link: "https://www.tvmovie.de/tv/schlager-und-co-epg-231113350",
      Thumbnail:
        "https://images.tvmovie.de/epg-16-9,id=62e71af4,b=tvmovie,w=480,ca=21.88,0.00,78.13,100.00,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "Gute Laune TV",
    KanalLogo:
      "https://images.tvmovie.de/a2b681a0-df22-11e5-9740-93b852ac6756-1,id=6acdf1e1,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Schmankerl der Volksmusik",
      Start: "16:00",
      End: "19:00",
      Category: "Musik",
      Link: "https://www.tvmovie.de/tv/schmankerl-der-volksmusik-epg-227227900",
      Thumbnail:
        "https://images.tvmovie.de/epg-16-9,id=62e71af4,b=tvmovie,w=480,ca=21.88,0.00,78.13,100.00,rm=sk.webp",
      Progress: 57,
    },
    after: {
      Program: "Schlager aktuell!",
      Start: "19:00",
      End: "21:00",
      Category: "Musikmagazin",
      Link: "https://www.tvmovie.de/tv/schlager-aktuell-epg-227227912",
      Thumbnail:
        "https://images.tvmovie.de/epg-16-9,id=62e71af4,b=tvmovie,w=480,ca=21.88,0.00,78.13,100.00,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "Heimatkanal",
    KanalLogo:
      "https://images.tvmovie.de/a1eca1f0-df22-11e5-9740-93b852ac6756-1,id=dc36ff60,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Steiners Theaterstadl",
      Start: "16:25",
      End: "18:05",
      Category: "Schwank",
      Link: "https://www.tvmovie.de/tv/steiners-theaterstadl-epg-230103460",
      Thumbnail:
        "https://images.tvmovie.de/a00b726b096f4d65e465893b968bc2ecc7275cdb,id=6d325262,b=tvmovie,w=480,ca=0.00,0.00,81.22,100.00,rm=sk.webp",
      Progress: 78,
    },
    after: {
      Program: "Ein Heim für Tiere",
      Start: "18:05",
      End: "18:55",
      Category: "Tierarztserie",
      Link: "https://www.tvmovie.de/tv/ein-heim-fuer-tiere-epg-230103527",
      Thumbnail:
        "https://images.tvmovie.de/epg-16-9,id=62e71af4,b=tvmovie,w=480,ca=21.88,0.00,78.13,100.00,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "History",
    KanalLogo:
      "https://images.tvmovie.de/history-logo,id=46d7053b,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Ancient Aliens - Unerklärliche Phänomene",
      Start: "17:10",
      End: "17:55",
      Category: "Doku-Reihe",
      Link: "https://www.tvmovie.de/tv/ancient-aliens-unerklaerliche-phaenomene-epg-229779855",
      Thumbnail:
        "https://images.tvmovie.de/ceb40966a72e1eec642bbc44f6cbad43ef7c8d15,id=db100716,b=tvmovie,w=480,ca=33.87,0.00,90.13,100.00,rm=sk.webp",
      Progress: 72,
    },
    after: {
      Program: "Ancient Aliens - Unerklärliche Phänomene",
      Start: "17:55",
      End: "18:40",
      Category: "Doku-Reihe",
      Link: "https://www.tvmovie.de/tv/ancient-aliens-unerklaerliche-phaenomene-epg-229779857",
      Thumbnail:
        "https://images.tvmovie.de/203b3b89cb908a1fbd794fb41b210ff24bd5e072,id=51202593,b=tvmovie,w=480,ca=24.87,0.00,81.13,100.00,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "HSE",
    KanalLogo:
      "https://images.tvmovie.de/hse-tv-1,id=ef44853f,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Harry Ivens Faszination Edelsteine",
      Start: "17:00",
      End: "18:00",
      Category: "Verkaufsshow",
      Link: "https://www.tvmovie.de/tv/harry-ivens-faszination-edelsteine-epg-230435537",
      Thumbnail:
        "https://images.tvmovie.de/epg-16-9,id=62e71af4,b=tvmovie,w=480,ca=21.88,0.00,78.13,100.00,rm=sk.webp",
      Progress: 71,
    },
    after: {
      Program: "Marvin Kuliks Schmuckwelten",
      Start: "18:00",
      End: "19:00",
      Category: "Verkaufsshow",
      Link: "https://www.tvmovie.de/tv/marvin-kuliks-schmuckwelten-epg-230435541",
      Thumbnail:
        "https://images.tvmovie.de/epg-16-9,id=62e71af4,b=tvmovie,w=480,ca=21.88,0.00,78.13,100.00,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "Jukebox",
    KanalLogo:
      "https://images.tvmovie.de/a2c32bd0-df22-11e5-9740-93b852ac6756-1,id=3791f918,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Jukebox Trends",
      Start: "14:00",
      End: "18:00",
      Category: "Magazin",
      Link: "https://www.tvmovie.de/tv/jukebox-trends-epg-229333431",
      Thumbnail:
        "https://images.tvmovie.de/epg-16-9,id=62e71af4,b=tvmovie,w=480,ca=21.88,0.00,78.13,100.00,rm=sk.webp",
      Progress: 93,
    },
    after: {
      Program: "Logout",
      Start: "18:00",
      End: "20:00",
      Category: "Musikmagazin",
      Link: "https://www.tvmovie.de/tv/logout-epg-229333433",
      Thumbnail:
        "https://images.tvmovie.de/epg-16-9,id=62e71af4,b=tvmovie,w=480,ca=21.88,0.00,78.13,100.00,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "K-TV",
    KanalLogo:
      "https://images.tvmovie.de/a7366470-df22-11e5-9740-93b852ac6756-1,id=31809960,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Abschied und Aufbruch",
      Start: "17:00",
      End: "17:30",
      Category: "Vortrag",
      Link: "https://www.tvmovie.de/tv/abschied-und-aufbruch-epg-231795828",
      Thumbnail:
        "https://images.tvmovie.de/epg-16-9,id=62e71af4,b=tvmovie,w=480,ca=21.88,0.00,78.13,100.00,rm=sk.webp",
      Progress: 0,
    },
    after: {
      Program: "Gebt acht, dass euch niemand mit falschen Lehren verführt",
      Start: "17:30",
      End: "18:30",
      Category: "Vortrag",
      Link: "https://www.tvmovie.de/tv/gebt-acht-dass-euch-niemand-mit-falschen-lehren-verfuehrt-epg-231795830",
      Thumbnail:
        "https://images.tvmovie.de/epg-16-9,id=62e71af4,b=tvmovie,w=480,ca=21.88,0.00,78.13,100.00,rm=sk.webp",
      Progress: 21,
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
      Link: "https://www.tvmovie.de/tv/sendepause-epg-230206588",
      Thumbnail:
        "https://images.tvmovie.de/sendepause,id=c128ac34,b=tvmovie,w=480,ca=14.67,0,81.33,100,rm=sk.webp",
      Progress: 84,
    },
    after: {
      Program: "Sexy Nerds",
      Start: "20:00",
      End: "21:25",
      Category: "Erotikfilm",
      Link: "https://www.tvmovie.de/tv/sexy-nerds-epg-230206590",
      Thumbnail:
        "https://images.tvmovie.de/epg-16-9,id=62e71af4,b=tvmovie,w=480,ca=21.88,0.00,78.13,100.00,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "LUXE TV",
    KanalLogo:
      "https://images.tvmovie.de/a8a70b70-df22-11e5-9740-93b852ac6756-1,id=7679e69a,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Luxe.this Month",
      Start: "17:00",
      End: "18:00",
      Category: "NN",
      Link: "https://www.tvmovie.de/tv/luxethis-month-epg-230843258",
      Thumbnail:
        "https://images.tvmovie.de/epg-16-9,id=62e71af4,b=tvmovie,w=480,ca=21.88,0.00,78.13,100.00,rm=sk.webp",
      Progress: 71,
    },
    after: {
      Program: "Vintage 20th Anniversary Of Luxe.tv",
      Start: "18:00",
      End: "19:00",
      Category: "NN",
      Link: "https://www.tvmovie.de/tv/vintage-20th-anniversary-of-luxetv-epg-230843151",
      Thumbnail:
        "https://images.tvmovie.de/epg-16-9,id=62e71af4,b=tvmovie,w=480,ca=21.88,0.00,78.13,100.00,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "MEZZO",
    KanalLogo:
      "https://images.tvmovie.de/a8c6a160-df22-11e5-9740-93b852ac6756-1,id=16f10d83,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program:
        "Magic Moments of Music: Sergiu Celibidache & the Berliner Philharmoniker",
      Start: "16:14",
      End: "17:30",
      Category: "NN",
      Link: "https://www.tvmovie.de/tv/magic-moments-of-music-sergiu-celibidache-und-the-berliner-philharmoniker-epg-231727798",
      Thumbnail:
        "https://images.tvmovie.de/75a35eeed64e13d16c6166185a47a25db1497b4e,id=02c673a0,b=tvmovie,w=480,ca=24.75,0.00,87.25,100.00,rm=sk.webp",
      Progress: 0,
    },
    after: {
      Program:
        "Ravel : Exhibition by Sidi Larbi Cherkaoui and Ma mère l'Oye by Jeroen Verbruggen",
      Start: "17:30",
      End: "18:50",
      Category: "NN",
      Link: "https://www.tvmovie.de/tv/ravel-exhibition-by-sidi-larbi-cherkaoui-and-ma-mere-loye-by-jeroen-verbruggen-epg-231727810",
      Thumbnail:
        "https://images.tvmovie.de/752c52332b5f4db04b1ac7305495905b72af3946,id=e36949a0,b=tvmovie,w=480,ca=0.00,0.00,62.48,100.00,rm=sk.webp",
      Progress: 16,
    },
  },
  {
    Kanal: "MOTORVISION TV",
    KanalLogo:
      "https://images.tvmovie.de/a16fd0d0-df22-11e5-9740-93b852ac6756-1,id=6d21a922,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "FastZone",
      Start: "17:10",
      End: "17:40",
      Category: "Motorsport",
      Link: "https://www.tvmovie.de/tv/fastzone-epg-230838727",
      Thumbnail:
        "https://images.tvmovie.de/epg-16-9,id=62e71af4,b=tvmovie,w=480,ca=21.88,0.00,78.13,100.00,rm=sk.webp",
      Progress: 0,
    },
    after: {
      Program: "Perfect Ride",
      Start: "17:40",
      End: "18:05",
      Category: "Automagazin",
      Link: "https://www.tvmovie.de/tv/perfect-ride-epg-230838730",
      Thumbnail:
        "https://images.tvmovie.de/epg-16-9,id=62e71af4,b=tvmovie,w=480,ca=21.88,0.00,78.13,100.00,rm=sk.webp",
      Progress: 11,
    },
  },
  {
    Kanal: "MTV",
    KanalLogo:
      "https://images.tvmovie.de/a23ac1f0-df22-11e5-9740-93b852ac6756-1,id=71babba3,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Ink Master: Redemption",
      Start: "17:15",
      End: "17:40",
      Category: "Doku-Soap",
      Link: "https://www.tvmovie.de/tv/ink-master-redemption-epg-230066916",
      Thumbnail:
        "https://images.tvmovie.de/ad8af5c0affa724be79fe8625a70b1207591ee7f,id=3db83fac,b=tvmovie,w=480,ca=25.00,0.00,100.00,100.00,rm=sk.webp",
      Progress: 0,
    },
    after: {
      Program: "Ink Master: Redemption",
      Start: "17:40",
      End: "18:00",
      Category: "Doku-Soap",
      Link: "https://www.tvmovie.de/tv/ink-master-redemption-epg-233828807",
      Thumbnail:
        "https://images.tvmovie.de/epg-16-9,id=62e71af4,b=tvmovie,w=480,ca=21.88,0.00,78.13,100.00,rm=sk.webp",
      Progress: 13,
    },
  },
  {
    Kanal: "N24 Doku",
    KanalLogo:
      "https://images.tvmovie.de/96d3c06d-e034-4628-a3a1-c28f35460ac0-1,id=f9271c50,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Stahl-Gigant auf Reisen - Schwertransport mit Hindernissen",
      Start: "16:45",
      End: "17:40",
      Category: "Dokumentation",
      Link: "https://www.tvmovie.de/tv/stahl-gigant-auf-reisen-schwertransport-mit-hindernissen-epg-230665112",
      Thumbnail:
        "https://images.tvmovie.de/be85be96127a05a63acf6058846eca6662bbf0f8,id=86940dfb,b=tvmovie,w=480,ca=16.88,0.00,73.13,100.00,rm=sk.webp",
      Progress: 0,
    },
    after: {
      Program: "Megakrane - Giganten aus Stahl",
      Start: "17:40",
      End: "18:35",
      Category: "Dokumentation",
      Link: "https://www.tvmovie.de/tv/megakrane-giganten-aus-stahl-epg-230665117",
      Thumbnail:
        "https://images.tvmovie.de/21812074c37ab8d8bb55956e1efa351b5ac0ecae,id=34fe7616,b=tvmovie,w=480,ca=30.87,0.00,87.13,100.00,rm=sk.webp",
      Progress: 5,
    },
  },
  {
    Kanal: "Nat Geo Wild",
    KanalLogo:
      "https://images.tvmovie.de/a17faf50-df22-11e5-9740-93b852ac6756-1,id=2b1d0ec5,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Der unglaubliche Dr. Pol",
      Start: "17:10",
      End: "17:55",
      Category: "Doku-Soap",
      Link: "https://www.tvmovie.de/tv/der-unglaubliche-dr-pol-epg-229379811",
      Thumbnail:
        "https://images.tvmovie.de/6104e08006cff8a0f55a82c07e03b0a15e0ea59d,id=9e0029d4,b=tvmovie,w=480,ca=25.00,0.00,100.00,100.00,rm=sk.webp",
      Progress: 73,
    },
    after: {
      Program: "Der unglaubliche Dr. Pol",
      Start: "17:55",
      End: "18:40",
      Category: "Doku-Soap",
      Link: "https://www.tvmovie.de/tv/der-unglaubliche-dr-pol-epg-229379816",
      Thumbnail:
        "https://images.tvmovie.de/3aa013f6089fd7b99086bf6778b05035c0c941da,id=ddfabb10,b=tvmovie,w=480,ca=0.00,0.00,56.25,100.00,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "National Geographic",
    KanalLogo:
      "https://images.tvmovie.de/a17723d0-df22-11e5-9740-93b852ac6756-1,id=33fc4061,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Der Zweite Weltkrieg von oben",
      Start: "17:00",
      End: "17:50",
      Category: "Doku-Reihe",
      Link: "https://www.tvmovie.de/tv/der-zweite-weltkrieg-von-oben-epg-228921433",
      Thumbnail:
        "https://images.tvmovie.de/dd23323e7960fa34363bddd20da0cc59a604dd5c,id=06bd423f,b=tvmovie,w=480,ca=0.00,0.00,56.67,100.00,rm=sk.webp",
      Progress: 85,
    },
    after: {
      Program: "Mysterien der Menschheit: Auf Yetis Spuren",
      Start: "17:50",
      End: "18:35",
      Category: "Reportage",
      Link: "https://www.tvmovie.de/tv/mysterien-der-menschheit-auf-yetis-spuren-epg-228921863",
      Thumbnail:
        "https://images.tvmovie.de/epg-16-9,id=62e71af4,b=tvmovie,w=480,ca=21.88,0.00,78.13,100.00,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "NTV",
    KanalLogo:
      "https://images.tvmovie.de/ntv-logo-rgb-1,id=39e05126,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "ntv Wirtschaft",
      Start: "17:15",
      End: "17:30",
      Category: "Wirtschaftsmagazin",
      Link: "https://www.tvmovie.de/tv/ntv-wirtschaft-epg-230693349",
      Thumbnail:
        "https://images.tvmovie.de/epg-16-9,id=62e71af4,b=tvmovie,w=480,ca=21.88,0.00,78.13,100.00,rm=sk.webp",
      Progress: 0,
    },
    after: {
      Program: "News Spezial",
      Start: "17:30",
      End: "18:00",
      Category: "Nachrichten",
      Link: "https://www.tvmovie.de/tv/news-spezial-epg-230693368",
      Thumbnail:
        "https://images.tvmovie.de/epg-16-9,id=62e71af4,b=tvmovie,w=480,ca=21.88,0.00,78.13,100.00,rm=sk.webp",
      Progress: 42,
    },
  },
  {
    Kanal: "OKTO TV",
    KanalLogo:
      "https://images.tvmovie.de/a7418800-df22-11e5-9740-93b852ac6756-1,id=663820ce,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "African Diaspora TV",
      Start: "17:00",
      End: "17:30",
      Category: "Magazin",
      Link: "https://www.tvmovie.de/tv/african-diaspora-tv-epg-233003834",
      Thumbnail:
        "https://images.tvmovie.de/epg-16-9,id=62e71af4,b=tvmovie,w=480,ca=21.88,0.00,78.13,100.00,rm=sk.webp",
      Progress: 0,
    },
    after: {
      Program: "Der Wal",
      Start: "17:30",
      End: "18:00",
      Category: "Kulturmagazin",
      Link: "https://www.tvmovie.de/tv/der-wal-epg-233003836",
      Thumbnail:
        "https://images.tvmovie.de/epg-16-9,id=62e71af4,b=tvmovie,w=480,ca=21.88,0.00,78.13,100.00,rm=sk.webp",
      Progress: 42,
    },
  },
  {
    Kanal: "ORF 1",
    KanalLogo:
      "https://images.tvmovie.de/orf1-1,id=ba560ff0,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "SOKO Wien",
      Start: "16:59",
      End: "17:45",
      Category: "Krimireihe",
      Link: "https://www.tvmovie.de/tv/soko-wien-epg-231047261",
      Thumbnail:
        "https://images.tvmovie.de/744edff24b0c303e32ec389a3b226551ad00aa6a,id=98f6c210,b=tvmovie,w=480,ca=25.02,0.00,100.00,100.00,rm=sk.webp",
      Progress: 95,
    },
    after: {
      Program: "ZIB Flash",
      Start: "17:45",
      End: "17:52",
      Category: "Nachrichten",
      Link: "https://www.tvmovie.de/tv/zib-flash-epg-231047263",
      Thumbnail:
        "https://images.tvmovie.de/epg-16-9,id=62e71af4,b=tvmovie,w=480,ca=21.88,0.00,78.13,100.00,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "ORF 2",
    KanalLogo:
      "https://images.tvmovie.de/orf2-1,id=72ad6875,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Aktuell nach fünf",
      Start: "17:08",
      End: "17:30",
      Category: "Magazin",
      Link: "https://www.tvmovie.de/tv/aktuell-nach-fuenf-epg-231052050",
      Thumbnail:
        "https://images.tvmovie.de/200e347ffff8ff68c8aa51bc1064152c1a89a7d0,id=23baa500,b=tvmovie,w=480,ca=11.67,0.00,78.33,100.00,rm=sk.webp",
      Progress: 0,
    },
    after: {
      Program: "Studio 2",
      Start: "17:30",
      End: "18:29",
      Category: "Magazin",
      Link: "https://www.tvmovie.de/tv/studio-2-epg-231052053",
      Thumbnail:
        "https://images.tvmovie.de/epg-16-9,id=62e71af4,b=tvmovie,w=480,ca=21.88,0.00,78.13,100.00,rm=sk.webp",
      Progress: 21,
    },
  },
  {
    Kanal: "PULS 4",
    KanalLogo:
      "https://images.tvmovie.de/a73049f0-df22-11e5-9740-93b852ac6756-1,id=06b1a5f3,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "The Big Bang Theory",
      Start: "17:20",
      End: "17:50",
      Category: "Sitcom",
      Link: "https://www.tvmovie.de/tv/the-big-bang-theory-epg-230943582",
      Thumbnail:
        "https://images.tvmovie.de/1f653bc64709c2aa14af58e0d686ea4b76f96c29,id=a82f7d82,b=tvmovie,w=480,ca=2.46,0.00,77.54,100.00,rm=sk.webp",
      Progress: 75,
    },
    after: {
      Program: "The Big Bang Theory",
      Start: "17:50",
      End: "18:10",
      Category: "Sitcom",
      Link: "https://www.tvmovie.de/tv/the-big-bang-theory-epg-230943581",
      Thumbnail:
        "https://images.tvmovie.de/1f653bc64709c2aa14af58e0d686ea4b76f96c29,id=6c8f9af9,b=tvmovie,w=480,ca=2.46,0.00,77.54,100.00,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "QVC",
    KanalLogo:
      "https://images.tvmovie.de/qvc-1,id=d70e34bd,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Diamour Luxury Diamonds",
      Start: "17:00",
      End: "18:00",
      Category: "Verkaufsshow",
      Link: "https://www.tvmovie.de/tv/diamour-luxury-diamonds-epg-228329969",
      Thumbnail:
        "https://images.tvmovie.de/epg-16-9,id=62e71af4,b=tvmovie,w=480,ca=21.88,0.00,78.13,100.00,rm=sk.webp",
      Progress: 71,
    },
    after: {
      Program: "Luxuriöse Schmuckstücke",
      Start: "18:00",
      End: "19:00",
      Category: "Verkaufsshow",
      Link: "https://www.tvmovie.de/tv/luxurioese-schmuckstuecke-epg-228329978",
      Thumbnail:
        "https://images.tvmovie.de/epg-16-9,id=62e71af4,b=tvmovie,w=480,ca=21.88,0.00,78.13,100.00,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "RTL Living",
    KanalLogo:
      "https://images.tvmovie.de/rtlliving-1,id=5af93524,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Shopping Queen",
      Start: "17:15",
      End: "18:05",
      Category: "Doku-Soap",
      Link: "https://www.tvmovie.de/tv/shopping-queen-epg-230615350",
      Thumbnail:
        "https://images.tvmovie.de/71608c5e6f016bfdc1f28741c6aefc18ebc1f59d,id=f9bccb37,b=tvmovie,w=480,ca=6.88,0.00,63.13,100.00,rm=sk.webp",
      Progress: 55,
    },
    after: {
      Program: "Zwischen Tüll und Tränen",
      Start: "18:05",
      End: "18:55",
      Category: "Doku-Soap",
      Link: "https://www.tvmovie.de/tv/zwischen-tuell-und-traenen-epg-230615352",
      Thumbnail:
        "https://images.tvmovie.de/5d3919a0da47c8c6faab2134b1ac32bdf1bf7268,id=9ec3b281,b=tvmovie,w=480,ca=0.00,0.00,56.25,100.00,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "Sonnenklar.TV",
    KanalLogo:
      "https://images.tvmovie.de/a2cf60d0-df22-11e5-9740-93b852ac6756-1,id=2d65d0ff,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Meeresrauschen",
      Start: "17:15",
      End: "17:30",
      Category: "Reisemagazin",
      Link: "https://www.tvmovie.de/tv/meeresrauschen-epg-230235732",
      Thumbnail:
        "https://images.tvmovie.de/epg-16-9,id=62e71af4,b=tvmovie,w=480,ca=21.88,0.00,78.13,100.00,rm=sk.webp",
      Progress: 0,
    },
    after: {
      Program: "Die AdW Show - Das Angebot der Woche",
      Start: "17:30",
      End: "18:00",
      Category: "Reisemagazin",
      Link: "https://www.tvmovie.de/tv/die-adw-show-das-angebot-der-woche-epg-230235752",
      Thumbnail:
        "https://images.tvmovie.de/epg-16-9,id=62e71af4,b=tvmovie,w=480,ca=21.88,0.00,78.13,100.00,rm=sk.webp",
      Progress: 42,
    },
  },
  {
    Kanal: "Spiegel Geschichte",
    KanalLogo:
      "https://images.tvmovie.de/spiegel-geschichte,id=aff8e711,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Protokoll einer Katastrophe",
      Start: "17:05",
      End: "17:55",
      Category: "Doku-Reihe",
      Link: "https://www.tvmovie.de/tv/protokoll-einer-katastrophe-epg-230339181",
      Thumbnail:
        "https://images.tvmovie.de/bd20797faf57f107464e64080d1b7689a62d0206,id=f0085d16,b=tvmovie,w=480,ca=0.00,0.00,56.25,100.00,rm=sk.webp",
      Progress: 75,
    },
    after: {
      Program: "Protokoll einer Katastrophe",
      Start: "17:55",
      End: "18:40",
      Category: "Doku-Reihe",
      Link: "https://www.tvmovie.de/tv/protokoll-einer-katastrophe-epg-230339183",
      Thumbnail:
        "https://images.tvmovie.de/ba2fadabe01e9b2619bd249b9996a7c8c7ab1375,id=599536f6,b=tvmovie,w=480,ca=20.76,0.00,85.24,100.00,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "SRF 1",
    KanalLogo:
      "https://images.tvmovie.de/9d911000-df22-11e5-9740-93b852ac6756-1,id=fe13ccb7,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Rosamunde Pilcher: Von Tee und Liebe",
      Start: "15:55",
      End: "17:30",
      Category: "Liebesdrama",
      Link: "https://www.tvmovie.de/tv/rosamunde-pilcher-von-tee-und-liebe-epg-230748664",
      Thumbnail:
        "https://images.tvmovie.de/cf72593cd5d2f23e0ee80824c0112570919c6f14,id=d3d38cc9,b=tvmovie,w=480,ca=31.87,0.00,88.13,100.00,rm=sk.webp",
      Progress: 0,
    },
    after: {
      Program: "Guetnachtgschichtli",
      Start: "17:30",
      End: "17:40",
      Category: "Animationsserie",
      Link: "https://www.tvmovie.de/tv/guetnachtgschichtli-epg-230748667",
      Thumbnail:
        "https://images.tvmovie.de/93a6993888716e324ee69f490d2fc3b8671d7bc6,id=f8dc4ceb,b=tvmovie,w=480,ca=33.35,0.00,100.00,100.00,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "SRF zwei",
    KanalLogo:
      "https://images.tvmovie.de/9d98d830-df22-11e5-9740-93b852ac6756-1,id=f4407a13,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Chicago Fire",
      Start: "16:35",
      End: "17:25",
      Category: "Dramaserie",
      Link: "https://www.tvmovie.de/tv/chicago-fire-epg-233359963",
      Thumbnail:
        "https://images.tvmovie.de/d3e1eaf29c4df9fe13da8fb9bbfaa03541dd488b,id=7c3a4bc0,b=tvmovie,w=480,ca=6.67,0.00,73.33,100.00,rm=sk.webp",
      Progress: 0,
    },
    after: {
      Program: "Leichtathletik: Diamond League",
      Start: "17:25",
      End: "19:35",
      Category: "Leichtathletik",
      Link: "https://www.tvmovie.de/tv/leichtathletik-diamond-league-epg-230818877",
      Thumbnail:
        "https://images.tvmovie.de/leichtathletik,id=7a00e2e7,b=tvmovie,w=480,ca=30.26,0,91.74,100,rm=sk.webp",
      Progress: 14,
    },
  },
  {
    Kanal: "tagesschau24",
    KanalLogo:
      "https://images.tvmovie.de/tagesschau24-logo,id=7999de56,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "Tagesschau-Nachrichten",
      Start: "14:00",
      End: "19:00",
      Category: "Nachrichten",
      Link: "https://www.tvmovie.de/tv/tagesschau-nachrichten-epg-230745877",
      Thumbnail:
        "https://images.tvmovie.de/1-tagesschau,id=7c808a81,b=tvmovie,w=480,ca=23.43,0,80.57,100,rm=sk.webp",
      Progress: 74,
    },
    after: {
      Program: "Tagesschau in Einfacher Sprache",
      Start: "19:00",
      End: "19:08",
      Category: "Nachrichten",
      Link: "https://www.tvmovie.de/tv/tagesschau-in-einfacher-sprache-epg-230745839",
      Thumbnail:
        "https://images.tvmovie.de/1-tagesschau,id=7c808a81,b=tvmovie,w=480,ca=23.43,0,80.57,100,rm=sk.webp",
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
      Link: "https://www.tvmovie.de/tv/hits-non-stop-epg-229888376",
      Thumbnail:
        "https://images.tvmovie.de/epg-16-9,id=62e71af4,b=tvmovie,w=480,ca=21.88,0.00,78.13,100.00,rm=sk.webp",
      Progress: 62,
    },
    after: {
      Program: "Urban Hit 10",
      Start: "20:00",
      End: "20:45",
      Category: "NN",
      Link: "https://www.tvmovie.de/tv/urban-hit-10-epg-229888296",
      Thumbnail:
        "https://images.tvmovie.de/epg-16-9,id=62e71af4,b=tvmovie,w=480,ca=21.88,0.00,78.13,100.00,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "WELT",
    KanalLogo:
      "https://images.tvmovie.de/welt-logo-1,id=54b02434,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "WELT-Spezial",
      Start: "17:15",
      End: "17:45",
      Category: "Nachrichten",
      Link: "https://www.tvmovie.de/tv/welt-spezial-epg-230634459",
      Thumbnail:
        "https://images.tvmovie.de/epg-16-9,id=62e71af4,b=tvmovie,w=480,ca=21.88,0.00,78.13,100.00,rm=sk.webp",
      Progress: 92,
    },
    after: {
      Program: "Börse am Abend",
      Start: "17:45",
      End: "18:00",
      Category: "Nachrichtenmagazin",
      Link: "https://www.tvmovie.de/tv/boerse-am-abend-epg-230634469",
      Thumbnail:
        "https://images.tvmovie.de/epg-16-9,id=62e71af4,b=tvmovie,w=480,ca=21.88,0.00,78.13,100.00,rm=sk.webp",
      Progress: 0,
    },
  },
  {
    Kanal: "Wetter Fernsehen",
    KanalLogo:
      "https://images.tvmovie.de/a3945e80-df22-11e5-9740-93b852ac6756-1,id=6ebd350c,b=tvmovie,w=100,rm=sk.webp",
    now: {
      Program: "wetter.com Livecams",
      Start: "17:06",
      End: "17:29",
      Category: "Wetter",
      Link: "https://www.tvmovie.de/tv/wettercom-livecams-epg-230560738",
      Thumbnail:
        "https://images.tvmovie.de/wetter,id=02ea4478,b=tvmovie,w=480,ca=18.67,0,85.33,100,rm=sk.webp",
      Progress: 0,
    },
    after: {
      Program: "Wettertrend",
      Start: "17:29",
      End: "17:32",
      Category: "Wetter",
      Link: "https://www.tvmovie.de/tv/wettertrend-epg-230560764",
      Thumbnail:
        "https://images.tvmovie.de/wetter,id=02ea4478,b=tvmovie,w=480,ca=18.67,0,85.33,100,rm=sk.webp",
      Progress: 0,
    },
  },
];
