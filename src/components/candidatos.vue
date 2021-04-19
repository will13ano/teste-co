<template>
    <v-container>
        <v-form
            ref="cadastroCandidato"
            v-model="valid"
        >
            <v-text-field
                v-model="nome"
                label="Nome"
                required
            ></v-text-field>

            <v-text-field
                v-model="cep"
                :counter="8 "
                label="Cep"
                :rules="CepRules"
                required
            ></v-text-field>

            <v-text-field
                disabled
                v-model="rua"
                label="Rua"
            ></v-text-field>

            <v-text-field
                disabled
                v-model="bairro"
                label="Bairro"
            ></v-text-field>

            <v-text-field
                disabled
                v-model="cidade"
                label="Cidade"
            ></v-text-field>

            <v-text-field
                disabled
                v-model="estado"
                label="Estado"
            ></v-text-field>

            <v-btn
                :disabled="!valid"
                @click="validate"
            >
                Enviar
            </v-btn>
        </v-form>
    </v-container>
</template>

<script>
import db from '../database/cadidatosdb'

export default {
    data: () => ({
        valid: true,
        nome: '',
        cep: '',
        rua: '',
        numero: '',
        bairro: '',
        cidade: '',
        estado: '',

        CepRules: [
            v => (v && v.length === 8)|| 'CEP precisa ter exatamente 8 digitos!'
        ]
    }),
    methods: {
        validate() {
            if(this.$refs.cadastroCandidato.validate()) {
                fetch(`https://viacep.com.br/ws/${this.cep}/json/`)
                .then( response => { response.json()
                    .then(data => {
                        if(!data.erro){
                            this.rua = data.logradouro;
                            this.bairro = data.bairro;
                            this.cidade = data.localidade;
                            this.estado = data.uf;

                            db.save(this.nome, this.cep);
                        }
                        else{
                            this.valid = false;
                            window.alert("Insira um CEP valido!")
                        }
                    })
                })
                .catch(err => console.log(err.message))
            }
        }
    },
    created: function () {
        db.startDatabase();
    }
}
</script>