const banks = [
    {
        label: "BMULTIVA",
        id: "132",
    },
    {
        label: "ACTINVER",
        id: "133",
    },
    {
        label: "WAL-MART",
        id: "134",
    },
    {
        label: "NAFIN",
        id: "135",
    },
    {
        label: "INTERBANCO",
        id: "136",
    },
    {
        label: "BANCOPPEL",
        id: "137",
    },
    {
        label: "ABC CAPITAL",
        id: "138",
    },
    {
        label: "UBS BANK",
        id: "139",
    },
    {
        label: "CONSUBANCO",
        id: "140",
    },
    {
        label: "VOLKSWAGEN",
        id: "141",
    },
    {
        label: "CIBANCO",
        id: "143",
    },
    {
        label: "BBASE",
        id: "145",
    },
    {
        label: "BANSEFI",
        id: "166",
    },
    {
        label: "HIPOTECARIAFEDERAL",
        id: "168",
    },
    {
        label: "MONEXCB",
        id: "600",
    },
    {
        label: "GBM",
        id: "601",
    },
    {
        label: "MASARI",
        id: "602",
    },
    {
        label: "VALUE",
        id: "605",
    },
    {
        label: "ESTRUCTURADORES",
        id: "606",
    },
    {
        label: "TIBER",
        id: "607",
    },
    {
        label: "VECTOR",
        id: "608",
    },
    {
        label: "B&B",
        id: "610",
    },
    {
        label: "ACCIVAL",
        id: "614",
    },
    {
        label: "MERRILL LYNCH",
        id: "615",
    },
    {
        label: "FINAMEX",
        id: "616",
    },
    {
        label: "VALMEX",
        id: "617",
    },
    {
        label: "UNICA",
        id: "618",
    },
    {
        label: "MAPFRE",
        id: "619",
    },
    {
        label: "PROFUTURO",
        id: "620",
    },
    {
        label: "CB ACTINVER",
        id: "621",
    },
    {
        label: "OACTIN",
        id: "622",
    },
    {
        label: "SKANDIA",
        id: "623",
    },
    {
        label: "CBDEUTSCHE",
        id: "626",
    },
    {
        label: "ZURICH",
        id: "627",
    },
    {
        label: "ZURICHVI",
        id: "628",
    },
    {
        label: "SU CASITA",
        id: "629",
    },
    {
        label: "CB INTERCAM",
        id: "630",
    },
    {
        label: "CI BOLSA",
        id: "631",
    },
    {
        label: "BULLTICK CB",
        id: "632",
    },
    {
        label: "STERLING",
        id: "633",
    },
    {
        label: "FINCOMUN",
        id: "634",
    },
    {
        label: "HDI SEGUROS",
        id: "636",
    },
    {
        label: "ORDER",
        id: "637",
    },
    {
        label: "AKALA",
        id: "638",
    },
    {
        label: "CB JPMORGAN",
        id: "640",
    },
    {
        label: "REFORMA",
        id: "642",
    },
    {
        label: "STP",
        id: "646",
    },
    {
        label: "TELECOMM",
        id: "647",
    },
    {
        label: "EVERCORE",
        id: "648",
    },
    {
        label: "SEGMTY",
        id: "651",
    },
    {
        label: "ASEA",
        id: "652",
    },
    {
        label: "KUSPIT",
        id: "653",
    },
    {
        label: "SOFIEXPRESS",
        id: "655",
    },
    {
        label: "UNAGRA",
        id: "656",
    },
    {
        label: "OPCIONES EMPRESARIALES DEL NOROESTE",
        id: "659",
    },
    {
        label: "LIBERTAD",
        id: "670",
    },
    {
        label: "CLS",
        id: "901",
    },
    {
        label: "INDEVAL",
        id: "902",
    },
    {
        label: "BANAMEX",
        id: "2",
    },
    {
        label: "BANCOMEXT",
        id: "6",
    },
    {
        label: "BANOBRAS",
        id: "9",
    },
    {
        label: "BBVA BANCOMER",
        id: "12",
    },
    {
        label: "SANTANDER",
        id: "14",
    },
    {
        label: "BANJERCITO",
        id: "19",
    },
    {
        label: "HSBC",
        id: "21",
    },
    {
        label: "BAJIO",
        id: "30",
    },
    {
        label: "IXE",
        id: "32",
    },
    {
        label: "INBURSA",
        id: "36",
    },
    {
        label: "INTERACCIONES",
        id: "37",
    },
    {
        label: "MIFEL",
        id: "42",
    },
    {
        label: "SCOTIABANK",
        id: "44",
    },
    {
        label: "BANREGIO",
        id: "58",
    },
    {
        label: "INVEX",
        id: "59",
    },
    {
        label: "BANSI",
        id: "60",
    },
    {
        label: "AFIRME",
        id: "62",
    },
    {
        label: "BANORTE",
        id: "72",
    },
    {
        label: "THE ROYAL BANK",
        id: "102",
    },
    {
        label: "AMERICAN EXPRESS",
        id: "103",
    },
    {
        label: "BAMSA",
        id: "106",
    },
    {
        label: "TOKYO",
        id: "108",
    },
    {
        label: "JP MORGAN",
        id: "110",
    },
    {
        label: "BMONEX",
        id: "112",
    },
    {
        label: "VE POR MAS",
        id: "113",
    },
    {
        label: "ING",
        id: "116",
    },
    {
        label: "DEUTSCHE",
        id: "124",
    },
    {
        label: "CREDIT SUISSE",
        id: "126",
    },
    {
        label: "AZTECA",
        id: "127",
    },
    {
        label: "AUTOFIN",
        id: "128",
    },
    {
        label: "BARCLAYS",
        id: "129",
    },
    {
        label: "COMPARTAMOS",
        id: "130",
    },
    {
        label: "BANCO FAMSA",
        id: "131",
    },
];

export default banks;