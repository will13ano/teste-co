const db = openDatabase("MeuBanco", "2.0", "MyDatabase", 4048);

export default{
    startDatabase(){
        db.transaction(function(criar){
            criar.executeSql("CREATE TABLE vagas (cargo TEXT NOT NULL, descricao TEXT NOT NULL)")
        });
    },
    save(cargo, descricao){
        db.transaction(function(salvar){
            salvar.executeSql("INSERT INTO vagas (cargo,descricao) VALUES (?,?)",[cargo, descricao]);
        })
    },
    load(){
        var vagas = [];
        
        db.transaction(function(carregar){
            
            var sql = "SELECT * FROM vagas;"
            
            carregar.executeSql(sql, undefined ,function(carregar, result) {
                var i;
                const len = result.rows.length;
                for(i = 0; i < len; i++) {
                    var {cargo, descricao} = result.rows[i];
                    
                    vagas.push({
                        rowid: i+1,
                        cargo: cargo,
                        descricao: descricao
                    })
                }
            });
        });
        return vagas;

    
    },
    remove(vagaID){
        db.transaction(function(remover){
            var sql = " DELETE FROM vagas WHERE rowid = (?);"
            remover.executeSql(sql, [vagaID]);
        })
    },
    drop(){
        db.transaction(function(drop){
            drop.executeSql("DROP TABLE vagas");
        })
    }
}