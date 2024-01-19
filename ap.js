let data;
//Essa função está carregando os dados json
function CarregaData(){
    data = require('./broken_database_1.json');
    console.log("dados carregados");

}
CarregaData();

// nessa iremos fazer a comparação e a limpeza
function LimpandoDataNomes(){
    let pegandoNome = data;
    for ( let i in pegandoNome){
        console.log(pegandoNome[i].nome);
        
    }

}

LimpandoDataNomes();

console.log();
// pegando os valores de vendas e percorrendo para fazer conversão
function LimpandoDataVendas(){
    let pegandoVendas = data;
    for ( let j in pegandoVendas){
        console.log(pegandoVendas[j].vendas);
    
    }

}

LimpandoDataVendas();