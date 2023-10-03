<template>
    <div>
        <div class="py-5 d-flex justify-space-between">
            <h1> Paises </h1>

            <CadastrarPais @fecharModal="modalFechou()" @paisCadastrado="paisCadastrado()" />
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
            <tbody v-if="paises.length">
                <tr v-for="pais in paises" :key="pais.id">
                    <td>{{ pais.id }}</td>
                    <td>{{ pais.pais }}</td>
                    <td>{{ pais.sigla }}</td>
                    <td>{{ pais.ddi }}</td>
                    <td> 
                        <v-btn class="mr-4 icon-blue" icon="mdi-pencil" size="small"></v-btn>
                        <v-btn icon="mdi-delete" size="small"></v-btn>
                    </td>
                </tr>
            </tbody>
            <tbody v-else>
                <tr>
                    <td>Nenhum registro encontrado</td>
                </tr>
            </tbody>
        </v-table>

        <v-snackbar v-model="msgPaisCadastrado" :timeout="2000"> 
            Pais cadastrado com sucesso.

            <template v-slot:actions>
                <v-btn color="blue" variant="text" @click="msgPaisCadastrado = false"> Fechar </v-btn>
            </template>
        </v-snackbar>
    </div>

</template>

<script>
import RestConnection from '@/configs/restConnection'
import { cleanJsonData } from '../../utilities/functions'

import CadastrarPais from './CadastrarPais'

export default {
    name: 'ListarPais',
    components: {
        CadastrarPais
    },
    data: () => ({
        paises: [],
        msgPaisCadastrado: false,
    }),
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
        paisCadastrado() {
            this.msgPaisCadastrado = true

            this.buscarPaises()
        },
        modalFechou() {
            this.buscarPaises()
        }
    }

}
</script>

<style scoped>

</style>