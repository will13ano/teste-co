<template>
    <v-container>
        <v-form
            ref="Vaga"
            v-model="valid"
        >
            <v-text-field
                label="Cargo"
                v-model='cargo'
                :rules="cargoRules"
                required
            ></v-text-field>

            <v-text-field
                label="Descrição"
                v-model='descricao'
                :rules="descricaoRules"
                required
            ></v-text-field>

            <v-btn
                @click='validate'
            >Enviar</v-btn>
        </v-form>
    </v-container>
</template>

<script>
import db from '../database/vagasdb'

export default {
    data: () => ({
        cargo: '',
        cargoRules: [
            v => !!v || 'Cargo não pode ser vazio!'
        ], 
        descricao: '',
        descricaoRules: [
            v => !!v || 'Descrição não pode estar vazia!'
        ],  
        valid: true,

    }),
    created: function(){
        db.startDatabase();
    },
    methods: {
        validate(){
            if(this.$refs.Vaga.validate()){
                db.save(this.cargo, this.descricao);
                this.$refs.Vaga.reset();
                alert("Nova vaga adicionada com sucesso!");
            }
        }
    }
}
</script>