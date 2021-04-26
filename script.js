// crea 10 oggetti che rappresentano una zucchina, indicandone per ognuno varietà, peso e lunghezza. calcola quanto pesano tutte le zucchine
var cassetta = [
    {
        variety: "nero di Milano",
        weight: 20,
        length: 10
    },
    {
        variety: "zucchino romanesco",
        weight: 21,
        length: 11
    },
    {
        variety: "ortolano di Faenza",
        weight: 22,
        length: 12
    },
    {
        variety: "lunga fiorentina",
        weight: 23,
        length: 13
    },
    {
        variety: "zucchino siciliano",
        weight: 24,
        length: 14
    },
    {
        variety: "striata di Napoli",
        weight: 25,
        length: 15
    },
    {
        variety: "bianca triestina",
        weight: 26,
        length: 16
    },
    {
        variety: "rigata pugliese",
        weight: 27,
        length: 17
    },
    {
        variety: "tondo di Piacenza",
        weight: 28,
        length: 18
    },
    {
        variety: "tondo di Nizza",
        weight: 29,
        length: 19
    }
];

var peso = 0;

for (i = 0; i < cassetta.length; i++) {
    var currentWeight = cassetta[i].weight;
    peso += currentWeight;
}

console.log(peso);
//dividi in due array separati le zucchine che misurano meno o più di 15 cm.
var cassettaShort = [];
var cassettaLong = [];

for (i = 0; i < cassetta.length; i++) {
    if (cassetta[i].length <= 15){
        cassettaShort.push(cassetta[i]);
    } else {
        cassettaLong.push(cassetta[i]);
    }
}

// infine stampa separatamente quanto pesano i due gruppi di zucchine.
var pesoCassettaShort = 0;
var pesoCassettaLong = 0;

for (i = 0; i < cassettaShort.length; i++){
     var currentWeight = cassettaShort[i].weight;
     pesoCassettaShort += currentWeight;
}

console.log(pesoCassettaShort);
