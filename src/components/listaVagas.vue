<template>
    <v-container>
        <v-row v-for="vaga of vagas" :key="vaga.id">
            <v-col>
                    <v-card elevation="15" class="">
                        <div class="d-flex justify-center">
                            <div>
                                <v-card-title>{{vaga.cargo}}</v-card-title>
                                <v-card-subtitle>{{vaga.descricao}}</v-card-subtitle>
                            </div>
                        </div>
                        <v-spacer></v-spacer>
                        <div class="d-flex flex-row-reverse">
                            <v-card-actions>
                                <v-btn
                                    icon
                                    outlined
                                    @click="deletar(vaga.rowid)"
                                ><v-icon>mdi-delete</v-icon></v-btn>
                            </v-card-actions>
                        </div>
                    </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import dbVagas from '../database/vagasdb'


export default {
    data:() =>  ({
        vagas: [],
    }),
    created: function (){
        this.vagas = dbVagas.load();
    },
    methods: {
        deletar(id){
            console.log(id);
            dbVagas.remove(id);
            this.vagas = dbVagas.load();
        }
    }
}
</script>
