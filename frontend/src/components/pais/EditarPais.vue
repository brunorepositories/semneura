<template>
    <div>        
        <v-btn @click="showModal=true" variant="flat" color="primary"> Novo pais</v-btn>

        <v-dialog v-model="showModal" width="800">
            <v-card>
                <v-card-title class="pa-6">
                    <span class="text-h5">Cadastrar pais teste</span>
                </v-card-title>
                <v-card-text>
                    <v-container class="pa-0">
                        <v-card-text>
                            <v-container class="pa-0">
                                <v-row v-if="alterarPais">
                                    <v-col cols="2">
                                        <v-text-field v-model="pais.id" variant="outlined" label="Código" disabled />
                                    </v-col>
    
                                    <v-col cols="6">
                                        <v-text-field v-model="pais.pais" variant="outlined" label="País" required />
                                    </v-col>
    
                                    <v-col cols="2">
                                        <v-text-field v-model="pais.sigla" variant="outlined" label="Sigla" required />
                                    </v-col>
    
                                    <v-col cols="2">
                                        <v-text-field v-model="pais.ddi" variant="outlined" label="DDI" type="number"
                                            required />
                                    </v-col>
                                </v-row>
                                <!-- <v-row v-else>
                                    <v-col cols="2">
                                        <v-text-field v-model="paisProps.id" variant="outlined" label="Código" disabled />
                                    </v-col>
    
                                    <v-col cols="6">
                                        <v-text-field v-model="paisProps.pais" variant="outlined" label="País" required />
                                    </v-col>
    
                                    <v-col cols="2">
                                        <v-text-field v-model="paisProps.sigla" variant="outlined" label="Sigla" required />
                                    </v-col>
    
                                    <v-col cols="2">
                                        <v-text-field v-model="paisProps.ddi" variant="outlined" label="DDI" type="number"
                                            required />
                                    </v-col>
                                </v-row> -->
                            </v-container>
                        </v-card-text>
                    </v-container>
                </v-card-text>
                <v-card-actions class="pa-6">
                    <v-spacer></v-spacer>
                    <v-btn @click="fecharModal()" class="mr-3" variant="tonal">
                        Cancelar
                    </v-btn>
                    <v-btn @click="enviarDado()" color="success" variant="flat">
                        Salvar
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
export default {
    name: "EditarPais",
    emits: ["fecharModal"],     
    data() {
        return {
            pais: {
                id: null,
                pais: "",
                sigla: "",
                ddi: "",
                dt_criacao: "",
                dt_atualizacao: "",
            },
            showModal: false,
            alterarPais: true
        };
    },
    methods: {
        fecharModal() {
            this.showModal = false

            console.log('teste 02 >>>>>>>')
            
            return this.$emit('fecharModal')
        },
        enviarDado() {
            // Lógica para enviar dados aqui
        },
        // Outros métodos do modal aqui
    },
}
</script>
