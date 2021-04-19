const db = openDatabase("MeuBanco", "2.0", "MyDatabase", 4048);
const candidatoSQL = import('./cadidatosdb');

export default {
    startDatabase(){
        db.transaction(function(start){
            var sql = "CREATE TABLE vaga_candidato (candidato_ID NUMBER, vaga_ID NUMBER)";
            start.executeSql(sql);
        });
    },
    save(candidatoID, vagaID){
        db.transaction(function (salvar){
            salvar.executeSql("INSERT INTO vaga_candidato (candidato_ID, vaga_ID) VALUES (?,?)",[candidatoID, vagaID]);
        });
    },
    load(vagaID){
        var candidatosID = [];

        db.transaction(function(carregar){
            var sql = 'SELECT candidato_ID FROM vaga_candidato WHERE vaga_ID = (?)';
            carregar.executeSql(sql,[vagaID], function(carregar, result) {
                for(var i = 0; i < result.rows.length; i++){
                    var {candidatoID} = result.rows[i];
                    candidatosID.push( candidatoSQL.loadById(candidatoID) );
                }
            }); 
        });
        console.log(candidatosID);
        return candidatosID;
    }
}