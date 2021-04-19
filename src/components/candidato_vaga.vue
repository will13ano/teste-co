<template>
    <v-container>
        <v-text-field
            v-model="vagaID"
            label="VagaID"
        ></v-text-field>
        <v-text-field
            v-model="candidatoID"
            label="candidatoID"
        >
        </v-text-field>

        <v-btn
            @click="save"
        >
            Enviar
        </v-btn>
    </v-container>
</template>

<script>
import rel from '../database/vaga_candidatodb';

export default {
    data: () => ({
        vagaID: '',
        candidatoID: ''
    }),
    methods: {
        save(){
            rel.save(this.candidatoID, this.vagaID);
        }
    },
    created: function() {
        rel.startDatabase();
    }
}
</script>