<template>
    <v-container>
        <v-row v-for="candidato in candidatos" :key="candidato.id">
            <v-col>
                    <v-card elevation="20">
                        <v-card-title>
                            {{candidato.nome}}
                        </v-card-title>
                        <v-card-subtitle>
                            {{candidato.cep}}
                        </v-card-subtitle>
                    </v-card>
                </v-col>
            </v-row>
    </v-container>
</template>

<script>
import db from '../database/cadidatosdb'

export default {
    data: () => ({
        candidatos: []
    }),
    created: function() {
        this.candidatos = db.load()
    }
}
</script>