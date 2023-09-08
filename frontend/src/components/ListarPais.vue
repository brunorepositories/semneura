<template>
  <div>
      <div class="py-5 d-flex justify-space-between">
          <h1> Paises </h1>
          <v-btn @click="modal = true" variant="flat" color="primary"> Novo pais</v-btn>
          
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
        <span class="text-h5">Cadastrar pais</span>
      </v-card-title>
      <v-card-text>

        <v-container class="pa-0">
          <v-row>
            
            <v-col cols="2">
              <v-text-field variant="outlined" label="Código" disabled/>
            </v-col>

            <v-col cols="6">
              <v-text-field variant="outlined" label="País" required/>
            </v-col>
            
            <v-col cols="2">
              <v-text-field variant="outlined" label="Sigla" required />
            </v-col>

            <v-col cols="2">
              <v-text-field variant="outlined" label="DDI" type="number" required />
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

    name: 'ListarPaises',
    
    data () {
      return {
        modal: false,
        

        desserts: [
          {
            name: 'Paises',
            calories: 159,
          },
          {
            name: 'Paises',
            calories: 237,
          },
          {
            name: 'Paises',
            calories: 262,
          },
          {
            name: 'Paises',
            calories: 305,
          },
          {
            name: 'Paises',
            calories: 356,
          },
          {
            name: 'Paises bean',
            calories: 375,
          },
          {
            name: 'Paises',
            calories: 392,
          },
          {
            name: 'Paises',
            calories: 408,
          },
          {
            name: 'Paises',
            calories: 452,
          },
          {
            name: 'Paises',
            calories: 518,
          },
        ],
      }
    },
  }
</script>