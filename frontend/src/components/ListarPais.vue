<template>
  <div>
      <div class="py-5 d-flex justify-space-between">
          <h1> Paises </h1>
          <v-btn @click="modal = true" variant="flat" color="primary"> Novo pais</v-btn>
          
      </div>
        
  <v-table>
    <thead>
      <tr>
        <th class="text-left"> Código </th>
        <th class="text-left"> Pais </th>
        <th class="text-left"> Sigla </th>
        <th class="text-left"> DDI </th>
        <th class="text-left"> Ações </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="pais in paises" :key="pais.id">
        <td>{{ pais.id }}</td>
        <td>{{ pais.pais }}</td>
        <td>{{ pais.sigla }}</td>
        <td>{{ pais.ddi }}</td>
        <td><v-icon>mdi-pencil</v-icon></td>
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
              <v-text-field v-model="pais.id" variant="outlined" label="Código" disabled/>
            </v-col>

            <v-col cols="6">
              <v-text-field  v-model="pais.pais" variant="outlined" label="País" required/>
            </v-col>
            
            <v-col cols="2">
              <v-text-field  v-model="pais.sigla" variant="outlined" label="Sigla" required />
            </v-col>

            <v-col cols="2">
              <v-text-field  v-model="pais.ddi" variant="outlined" label="DDI" type="number" required />
            </v-col>

          </v-row>
        </v-container>
      </v-card-text>

      <v-card-actions class="pa-6">
        <v-spacer></v-spacer>
        <v-btn @click="fecharModal()" class="mr-3" variant="tonal"> Cancelar </v-btn>
        <v-btn @click="enviarDado()" color="success" variant="flat"> Salvar </v-btn>
      </v-card-actions>
      
    </v-card>
  </v-dialog>


  </div>
  
</template>

<script>
import RestConnection from '@/configs/restConnection'
import { cleanJsonData } from '../utilities/functions'

export default {
    name: 'ListarPaises',
    data () {
      return {
        pais: {
          id: null,
          pais: '',
          sigla: '',
          ddi: '',
          dt_criacao: '',
          dt_atualizacao: ''
        },
        modal: false,
        paises: [],
      }
    },
    created() {
      this.buscarPaises()
    },
    methods: {
      async buscarPaises() {
        try {
          const dados = await RestConnection.get('/paises')

          return this.paises = cleanJsonData(dados)          
        } catch (e) {
          console.log(e)
        }
      },
      fecharModal() {
        this.modal = false;
        // Limpar os campos do formulário quando o modal for fechado
        this.pais = "";
        this.sigla = "";
        this.ddi = "";
      },
      async enviarDado() {
        // Aqui, você pode acessar os valores dos campos do formulário
        const objPais  = {
          pais: this.pais,
          sigla: this.sigla,
          ddi: this.ddi,
        };

        try {
          const dados = await RestConnection.post('/pais', objPais)
          console.log(dados.data)
          alert('Cliente criado com sucesso!')
          // location.reload()
        } catch (e) {
          console.log(e)
          if (e.dados.status === 400) {
            alert(e.dados.data.text_message)
          } else {
            alert('Houve um erro! Por favor tente novamente.')
          }
        }

        // Faça algo com os dados, como enviar para o servidor
        console.log("Dados a serem enviados:", objPais);

        // Feche o modal
        this.fecharModal();
      }
    }

  }
</script>@/utilities/functions@/utilities/functions