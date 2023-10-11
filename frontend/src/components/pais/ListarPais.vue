<template>
    <div>
        <div class="py-5 d-flex justify-space-between">
            <h1> Paises </h1>
            <CadastrarPais @fechar-modal="modalFechou()" @pais-cadastrado="paisCadastradoMsg()" />
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
            <tbody v-if="paisesPaginados.length">
                <tr v-for="pais in paisesPaginados" :key="pais.id">
                    <td>{{ pais.id }}</td>
                    <td>{{ pais.pais }}</td>
                    <td>{{ pais.sigla }}</td>
                    <td>{{ pais.ddi }}</td>
                    <td>
                        <EditarPais :id-pais="pais.id" @fechar-modal="modalFechou()" @pais-cadastrado="paisCadastradoMsg()"/>
                    </td>
                </tr>
            </tbody>
            <tbody v-else>
                <tr>
                    <td>Nenhum registro encontrado</td>
                </tr>
            </tbody>
        </v-table>

        <v-pagination v-model="currentPage" :length="totalPages" :total-visible="6" class="mt-4"></v-pagination>

        <v-snackbar v-model="msgPaisCadastrado" :timeout="2000">
            Pais cadastrado com sucesso.
            <template v-slot:actions>
                <v-btn color="blue" variant="text" @click="msgPaisCadastrado = false"> Fechar </v-btn>
            </template>
        </v-snackbar>
    </div>
</template>
  
<script>
import ServicePais from '@/services/servicePais';
import CadastrarPais from './CadastrarPais';
import EditarPais from './EditarPais';

export default {
    name: 'ListarPais',
    components: {
        CadastrarPais,
        EditarPais,
    },
    data: () => ({
        paises: [],
        msgPaisCadastrado: false,
        currentPage: 1,
        itemsPerPage: 20,
    }),
    computed: {
        startIndex() {
            return (this.currentPage - 1) * this.itemsPerPage;
        },
        paisesPaginados() {
            return this.paises.slice(this.startIndex, this.startIndex + this.itemsPerPage);
        },
        totalPages() {
            return Math.ceil(this.paises.length / this.itemsPerPage);
        },
    },
    created() {
        this.buscaPaises();
    },
    methods: {
        async buscaPaises() {
            try {
                const listaPaises = await ServicePais.buscarPaises();

                this.paises = listaPaises;
            } catch (e) {
                console.log(e);
            }
        },
        paisCadastradoMsg() {
            this.msgPaisCadastrado = true
        },
        modalFechou() {
            this.buscaPaises();
        }
    },
};
</script>
  
<style scoped>
/* Estilos personalizados, se necessário */
</style>
  