var type_de_master =["Master", "Mastère", "MSc", "MBA", "Diplôme de deuxième cycle"];
var adjectifs = ["Spécialisé", "Diplomant ", "Technique", "expert", "de gestion", "assermenté", "labellisé", "général", "professionalisant "];
var domaines = ["technique", "prospection", "analyse", "études","tactiques","planification","échéances","benchmarking","étude de marché","études stratégiques","business development","gender studies","incubateur","leadership","expertise","médiation","création","communication","industrie","industrie créative","coopération","gestion ","développement","théorie","pratique","critique","champs","domaines","enseignement","apprentissage","formation","sensibilisation" ,"deadline","data" ];
var qualificatif =["de vente", "de médiation", "de communication", "de marketing", "de développement", "de start-up", "de la tech", "de marché", "de la croissance verte", "d'entreprise ", "de genre", "de réseau ", "de terrain", "de projet"]
var adjectifs2 = ["bancaire", "solidaire","sociétal.e", "systémique","général.e", "commercial","effectif.ve", "responsable","humanitaire", "personnel","direct.e", "inclusif.ve","durable", "renouvelable","vert", "intelligent","structurant", "artistique","culturel.le", "innovant.e","alternant", "alternatif","critique", "théorique","pratique", "appliqué.e","structurel", "expertisant","analytique", "analysis" ]
var domaines2 = ["coopération", "interaction", "finance", "responsabilité", "innovation", "action", "management", "coaching", "expertise", "idéologie", "sensibilisation", "agilité", "brainstorming", "agilité", "supply chain", "greentech", "entrepreunariat", "expérience"];
var adjectifs3 = ["bancaire", "solidaire", "sociétal.e", "systémique", "général.e", "commercial", "effectif.ve", "responsable", "humanitaire", "personnel", "direct.e", "inclusif.ve", "durable", "renouvelable", "vert", "intelligent", "structurant", "artistique", "culturel.le", "innovant.e", "alternant", "alternatif", "critique", "théorique", "pratique", "appliqué.e", "structurel", "expertisant", "analytique", "analysis"];


function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


function generateTitle() {

  var adjectif = adjectifs[getRandomInt(0, adjectifs.length - 1)];
  var domaine = domaines[getRandomInt(0, domaines.length - 1)];
  var type_de_masters = type_de_master[getRandomInt(0, type_de_master.length - 1)];
  var qualificatifs = qualificatif[getRandomInt(0, qualificatif.length - 1)];
  var adjectifs2s = adjectifs2[getRandomInt(0, adjectifs2.length - 1)];
  var domaines2s = domaines2[getRandomInt(0, domaines2.length - 1)];
  var adjectifs3s = adjectifs3[getRandomInt(0, adjectifs3.length - 1)];
  
  
  var titre = type_de_masters + " " + adjectif + " en " + domaine + " " + qualificatifs + " " + adjectifs2s + " et " + domaines2s + " " + adjectifs3s;
  

  return titre;
}


var button = document.getElementById("generate");
var title = document.getElementById("title");


button.addEventListener("click", function() {

  var titre = generateTitle();
  

  title.innerHTML = titre;
});
