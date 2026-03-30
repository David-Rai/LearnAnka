const numberLists = [
  { num: 1, nepali: "१", word: "एक", roman: "ehkk" },
  { num: 2, nepali: "२", word: "दुई", roman: "dhui" },
  { num: 3, nepali: "३", word: "तीन", roman: "tin" },
  { num: 4, nepali: "४", word: "चार", roman: "char" },
  { num: 5, nepali: "५", word: "पाँच", roman: "pach" },
  { num: 6, nepali: "६", word: "छ", roman: "chha" },
  { num: 7, nepali: "७", word: "सात", roman: "saat" },
  { num: 8, nepali: "८", word: "आठ", roman: "ahth" },
  { num: 9, nepali: "९", word: "नौ", roman: "nau" },
  { num: 10, nepali: "१०", word: "दश", roman: "dash" },

  { num: 11, nepali: "११", word: "एघार", roman: "eh gara" },
  { num: 12, nepali: "१२", word: "बाह्र", roman: "bara" },
  { num: 13, nepali: "१३", word: "तेह्र", roman: "tera" },
  { num: 14, nepali: "१४", word: "चौध", roman: "chaudha" },
  { num: 15, nepali: "१५", word: "पन्ध्र", roman: "panra" },
  { num: 16, nepali: "१६", word: "सोह्र", roman: "sohra" },
  { num: 17, nepali: "१७", word: "सत्र", roman: "shatra" },
  { num: 18, nepali: "१८", word: "अठार", roman: "ahthara" },
  { num: 19, nepali: "१९", word: "उन्नाइस", roman: "unnais" },
  { num: 20, nepali: "२०", word: "बीस", roman: "bis" },

  { num: 21, nepali: "२१", word: "एक्काइस", roman: "ekkais" },
  { num: 22, nepali: "२२", word: "बाइस", roman: "bhais" },
  { num: 23, nepali: "२३", word: "तेइस", roman: "tehis" },
  { num: 24, nepali: "२४", word: "चौबीस", roman: "chaubis" },
  { num: 25, nepali: "२५", word: "पच्चीस", roman: "pachis" },
  { num: 26, nepali: "२६", word: "छब्बीस", roman: "chhabis" },
  { num: 27, nepali: "२७", word: "सत्ताइस", roman: "sat tais" },
  { num: 28, nepali: "२८", word: "अठ्ठाइस", roman: "a thais" },
  { num: 29, nepali: "२९", word: "उनन्तिस", roman: "uhnantis" },
  { num: 30, nepali: "३०", word: "तीस", roman: "tis" },

  { num: 31, nepali: "३१", word: "एकतीस", roman: "ektis" },
  { num: 32, nepali: "३२", word: "बत्तीस", roman: "bhattis" },
  { num: 33, nepali: "३३", word: "तेत्तीस", roman: "the tis" },
  { num: 34, nepali: "३४", word: "चौँतीस", roman: "chau tis" },
  { num: 35, nepali: "३५", word: "पैंतीस", roman: "phai tis" },
  { num: 36, nepali: "३६", word: "छत्तीस", roman: "chha tis" },
  { num: 37, nepali: "३७", word: "सैंतीस", roman: "shai tis" },
  { num: 38, nepali: "३८", word: "अठतीस", roman: "athtis" },
  { num: 39, nepali: "३९", word: "उनन्चालीस", roman: "uhn nanchalis" },
  { num: 40, nepali: "४०", word: "चालीस", roman: "cha lis" },

  { num: 41, nepali: "४१", word: "एकचालीस", roman: "ekchalis" },
  { num: 42, nepali: "४२", word: "बयालीस", roman: "bayalis" },
  { num: 43, nepali: "४३", word: "त्रिचालीस", roman: "tre cha lis" },
  { num: 44, nepali: "४४", word: "चवालीस", roman: "chawa lis" },
  { num: 45, nepali: "४५", word: "पैँतालीस", roman: "phai ta lis" },
  { num: 46, nepali: "४६", word: "छयालीस", roman: "chaya lis" },
  { num: 47, nepali: "४७", word: "सत्चालीस", roman: "satchalis" },
  { num: 48, nepali: "४८", word: "अठचालीस", roman: "ath chalis" },
  { num: 49, nepali: "४९", word: "उनन्चास", roman: "un anchas" },
  { num: 50, nepali: "५०", word: "पचास", roman: "pa chas" },

  { num: 59, nepali: "५९", word: "उनन्साठी", roman: "unnasathi" },
  { num: 60, nepali: "६०", word: "साठी", roman: "sa thi" },

  { num: 69, nepali: "६९", word: "उनन्सत्तरी", roman: "unnasattari" },
  { num: 70, nepali: "७०", word: "सत्तरी", roman: "sattari" },

  { num: 79, nepali: "७९", word: "उनासी", roman: "unasi" },
  { num: 80, nepali: "८०", word: "असी", roman: "asi" },

  { num: 89, nepali: "८९", word: "उनान्नब्बे", roman: "unannabbe" },
  { num: 90, nepali: "९०", word: "नब्बे", roman: "nabbe" },

  { num: 99, nepali: "९९", word: "उनान्सय", roman: "unansaya" },
  { num: 100, nepali: "१००", word: "एक सय", roman: "eksaya" },
];


export default numberLists