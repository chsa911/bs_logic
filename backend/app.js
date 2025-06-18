const express = require('express');
const connectDB = require('./config/db');
const books = require('./models/books');
const app = express();
let MongoClient = require('mongodb').MongoClient;
//let url = "mongodb://localhost:27017/";
// Connect Database
connectDB();
app.use(express.json());

//logic to produce Searchqueries for a BMarkdatabase


//Logik um alle möglichen Posicokombinationen zu erzeugen

//const position = ['e', 'o', 'l'];
const posico = ['egk', 'eak', 'ekb', 'eb',  'ekg', 'es',  'eki',
                  'ei',  'eik', 'ek',  'ekn', 'en',  'enk', 'ep',
                  'eg',  'epk', 'ekt', 'et',  'etk', 'eu',  'euk',
                  'eyk', 'ogk', 'oak', 'okb', 'ob',  'okg', 'os',
                  'oki', 'oi',  'oik', 'ok',  'okn', 'on',  'onk',
                  'op',  'og',  'opk', 'okt', 'ot',  'otk', 'ou',
                  'ouk', 'oyk', 'lgk', 'lak', 'lkb', 'lb',  'lkg',
                  'ls',  'lki', 'li',  'lik', 'lk',  'lkn', 'ln',
                  'lnk', 'lp',  'lg',  'lpk', 'lkt', 'lt',  'ltk',
                  'lu',  'luk', 'lyk'
];
/*const colour = [ 'gk', 'ak' ,'kb', 'b',
                                  'kg',
                                  's',
                                  'ki',
                                  'i',
                                   'ik',
                                   'k',
                                   'kn',
                                   'n',
                                   'nk',
                                   'p',
                                   'g',
                                   'pk',
                                   'kt',
                                   't',
                                   'tk',
                                   'u',
                                   'uk',
                                   'yk' ];
*/
const barcode = [,'001','010'
                               ,'100'
                               ,'101'
                               ,'111'
                               ,'011'
                               ,'110'
                               ,'002'
                               ,'020'
                               ,'200'
                               ,'202'
                               ,'222'
                               ,'022'
                               ,'220'
                               ,'003'
                               ,'030'
                               ,'300'
                               ,'303'
                               ,'333'
                               ,'033'
                               ,'330'
                               ,'004'
                               ,'040'
                               ,'400'
                               ,'404'
                               ,'444'
                               ,'044'
                               ,'440'
                               ,'005'
                               ,'050'
                               ,'500'
                               ,'505'
                               ,'555'
                               ,'055'
                               ,'550'
                               ,'112'
                               ,'121'
                               ,'211'
                               ,'212'
                               ,'122'
                               ,'221'
                               ,'113'
                               ,'131'
                               ,'311'
                               ,'313'
                               ,'133'
                               ,'331'
                               ,'114'
                               ,'141'
                               ,'411'
                               ,'414'
                               ,'144'
                               ,'441'
                               ,'115'
                               ,'151'
                               ,'511'
                               ,'515'
                               ,'155'
                               ,'551'
                               ,'223'
                               ,'232'
                               ,'322'
                               ,'323'
                               ,'233'
                               ,'332'
                               ,'224'
                               ,'242'
                               ,'422'
                               ,'424'
                               ,'244'
                               ,'442'
                               ,'225'
                               ,'252'
                               ,'522'
                               ,'525'
                               ,'255'
                               ,'552'
                               ,'334'
                               ,'343'
                               ,'433'
                               ,'434'
                               ,'344'
                               ,'443'
                               ,'335'
                               ,'353'
                               ,'533'
                               ,'535'
                               ,'355'
                               ,'553'
                               ,'445'
                               ,'454'
                               ,'544'
                               ,'545'
                               ,'455'
                               ,'554'
                               ,'012'
                               ,'102'
                               ,'021'
                               ,'120'
                               ,'201'
                               ,'210'
                               ,'013'
                               ,'103'
                               ,'031'
                               ,'130'
                               ,'301'
                               ,'310'
                               ,'014'
                               ,'104'
                               ,'041'
                               ,'140'
                               ,'401'
                               ,'410'
                               ,'015'
                               ,'105'
                               ,'051'
                               ,'150'
                               ,'501'
                               ,'510'
                               ,'023'
                               ,'203'
                               ,'032'
                               ,'230'
                               ,'302'
                               ,'320'
                               ,'024'
                               ,'204'
                               ,'042'
                               ,'240'
                               ,'402'
                               ,'420'
                               ,'025'
                               ,'205'
                               ,'052'
                               ,'250'
                               ,'502'
                               ,'520'
                               ,'034'
                               ,'304'
                               ,'043'
                               ,'340'
                               ,'403'
                               ,'430'
                               ,'035'
                               ,'305'
                               ,'053'
                               ,'350'
                               ,'503'
                               ,'530'
                               ,'045'
                               ,'405'
                               ,'054'
                               ,'450'
                               ,'504'
                               ,'540'
                               ,'123'
                               ,'213'
                               ,'132'
                               ,'231'
                               ,'312'
                               ,'321'
                               ,'124'
                               ,'214'
                               ,'142'
                               ,'241'
                               ,'412'
                               ,'421'
                               ,'125'
                               ,'215'
                               ,'152'
                               ,'251'
                               ,'512'
                               ,'521'
                               ,'134'
                               ,'314'
                               ,'143'
                               ,'341'
                               ,'413'
                               ,'431'
                               ,'135'
                               ,'315'
                               ,'153'
                               ,'351'
                               ,'513'
                               ,'531'
                               ,'145'
                               ,'415'
                               ,'154'
                               ,'451'
                               ,'514'
                               ,'541'
                               ,'234'
                               ,'324'
                               ,'243'
                               ,'342'
                               ,'423'
                               ,'432'
                               ,'235'
                               ,'325'
                               ,'253'
                               ,'352'
                               ,'523'
                               ,'532'
                               ,'245'
                               ,'425'
                               ,'254'
                               ,'452'
                               ,'524'
                               ,'542'
                               ,'345'
                               ,'435'
                               ,'354'
                               ,'453'
                               ,'534'
                               ,'543' ];

const BMark = [];

for (let i = 0; i < posico.length; i++) {
  for (let j = 0; j < barcode.length; j++) {
// for (let k = 0; j < barcode.length; k++) {

    BMark.push(posico[i] + barcode[j]);

 //BMark = Posico + '001';

  }
}

console.log(BMark);

//Logik um Barcodes auf DB abrufen
var key;

/*
let colour = [
]
*/
for (let i = 0; i < BMark.length; i++) {
let BMark = key;
//app.get('/', (req, res) => res.send('Hello world!'));
app.get('/search/:key', async (req, res)  => {
console.log(req.params.key);
let data = await books.find(
{
"$or": [
{BMark: {$regex: req.params.key}}
]
}
);
res.send(data);
console.log(data);

});
if (data = 0) {
MongoClient.connect(url, function(err, db){
  if (err) throw err;
  let dbo = db.db("bx");
  dbo.collection("BM_available").insertOne(BMark, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
console.log(BMark);

  });
});
}
}
const port = process.env.PORT || 5173;

app.listen(port, () => console.log(`Server running on port ${port}`));