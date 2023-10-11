<template>
<div>

  <div class="py-5 d-flex justify-space-between">
      <h1> Cidades </h1>
      <v-btn @click="modal = true" variant="flat" color="primary" > Nova cidade</v-btn>
  </div>

  <v-table>
    <thead>
        <tr>
          <th class="text-left">
            Name
          </th>
          <th class="text-left">
            Calories
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in desserts"
          :key="item.name"
        >
        <td>{{ item.name }}</td>
        <td>{{ item.calories }}</td>
      </tr>
      </tbody>
    </v-table>

     <!-- MODAL -->
     <v-dialog v-model="modal" width="800">
    <v-card>
      <v-card-title class="pa-6">
        <span class="text-h5">Cadastrar cidade</span>
      </v-card-title>
      <v-card-text>
        <v-container class="pa-0">
          <v-row>
            
            <v-col cols="2">
              <v-text-field variant="outlined" label="Código" disabled/>
            </v-col>

            <v-col cols="8">
              <v-text-field variant="outlined" label="Cidade" required/>
            </v-col>

            <v-col cols="2">
              <v-text-field variant="outlined" label="DDD" type="number" required />
            </v-col>

            <v-col cols="2">
              <v-text-field variant="outlined" label="Código" type="number" min="0"/>
            </v-col>

            <v-col cols="10">
              <v-select
                :items="['Brasil', 'Paraguai', 'Argentina', 'Estados Unidos']"
                variant="outlined"
                label="Estado"
                required
              />
            </v-col>

          </v-row>
        </v-container>
      </v-card-text>

      <v-card-actions class="pa-6">
        <v-spacer></v-spacer>
        <v-btn @click="dialog = false" class="mr-3" variant="tonal"> Cancelar </v-btn>
        <v-btn @click="dialog = false" color="success" variant="flat"> Salvar </v-btn>
      </v-card-actions>
      
    </v-card>
  </v-dialog>

</div>
</template>

<script>
  export default {
    name: 'ListarCidades',
    data () {
      return {
        modal: false,
        desserts: [
          {
            name: 'Cidades',
            calories: 159,
          },
          {
            name: 'Cidades',
            calories: 237,
          },
          {
            name: 'Cidades',
            calories: 262,
          },
          {
            name: 'Cidades',
            calories: 305,
          },
          {
            name: 'Cidades',
            calories: 356,
          },
          {
            name: 'Cidades bean',
            calories: 375,
          },
          {
            name: 'Cidades',
            calories: 392,
          },
          {
            name: 'Cidades',
            calories: 408,
          },
          {
            name: 'Cidades',
            calories: 452,
          },
          {
            name: 'Cidades',
            calories: 518,
          },
        ],
      }
    },
  }
</script>