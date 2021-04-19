const db = openDatabase("MeuBanco", "2.0", "MyDatabase", 4048);

export default{
    startDatabase(){
        db.transaction(function(criar){
            criar.executeSql("CREATE TABLE candidato (nome TEXT, cep TEXT)")
        });
    },
    save(nome, cep){
        db.transaction(function(salvar){
            salvar.executeSql("INSERT INTO candidato (nome,cep) VALUES (?,?)",[nome,cep]);
        })
    },
    load(){
        var candidatos = [];
        
        db.transaction(function(carregar){
            
            var sql = "SELECT * FROM candidato;"
            
            carregar.executeSql(sql, undefined ,function(carregar, result) {
                var i;
                for(i = 0; i < result.rows.length; i++) {
                    var {nome, cep} = result.rows[i];
                    candidatos.push({
                        rowid: i+1,
                        nome: nome,
                        cep: cep
                    })
                }
            });
        });

        return candidatos;
    },
    loadById(id){
        var candidatos; 

        db.transaction(function(carregar){
            var sql = "SELECT nome FROM candidato WHERE rowid = (?)";
            carregar.executeSql(sql,[id], function(carregar, result){
                var {nome} = result.rows[0];
                candidatos = {
                    nome
                };
            });
        });
        console.log(candidatos);
        return candidatos;
    },
    drop(){
        db.transaction(function(drop){
            drop.executeSql("DROP TABLE candidato");
        })
    }
}