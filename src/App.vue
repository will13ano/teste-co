<template>
  <v-app>
    <v-app-bar app>
        <div>
          <router-link to="/"><v-btn><v-icon>mdi-home</v-icon></v-btn></router-link>
        </div>
        <v-spacer></v-spacer>
        <div class="d-flex justify-space-around">
          <router-link to="/newCandidato"><v-btn>Novo Candidato</v-btn></router-link>
          <router-link to="/vaga"><v-btn>Nova Vaga</v-btn></router-link>
        </div>
    </v-app-bar>

    <v-main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>

  </v-app>
</template>