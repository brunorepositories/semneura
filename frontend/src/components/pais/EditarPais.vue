<template>
    <div>        
        
        <v-btn @click="buscarPais()" class="mr-4 icon-blue" icon="mdi-pencil" size="small"></v-btn> 
        
        <v-dialog v-model="showModal" width="800">
            <v-card>
                <v-form>
                    <v-card-title class="pa-6">
                        <span class="text-h5">Cadastrar pais teste</span>
                    </v-card-title>
                    <v-card-text>
                        <v-container class="pa-0">
                            <v-card-text class="pa-0">
                                <v-container class="pa-0">
                                    <v-row>
                                        <v-col cols="2">
                                            <v-text-field v-model="pais.id" variant="outlined" label="Código" disabled style="color: black" />
                                        </v-col>
                                        
                                        <v-col cols="6">
                                            <v-text-field v-model="pais.pais" variant="outlined" label="País" required />
                                        </v-col>
                                        
                                        <v-col cols="2">
                                            <v-text-field v-model="pais.sigla" variant="outlined" label="Sigla" required />
                                        </v-col>
                                        
                                        <v-col cols="2">
                                            <v-text-field v-model="pais.ddi" variant="outlined" label="DDI" type="number" required />
                                        </v-col>
                                    </v-row>
                                </v-container>
                            </v-card-text>
                        </v-container>
                    </v-card-text>
                    <v-card-actions class="pa-6">
                        <v-spacer></v-spacer>
                        <v-btn type="submit" @click.prevent="salvarPais" color="success" variant="flat">
                            Salvar
                        </v-btn>
                        <v-btn @click="fecharModal" class="ml-6" variant="tonal">
                            Cancelar
                        </v-btn>
                    </v-card-actions>
                    
                </v-form>
                
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
import ServicePais from '@/services/servicePais'

export default {
    name: "CadastrarPais",
    props: [
        "idPais"
    ],
    emits: [
        "fecharModal", 
        "paisCadastrado"
    ],
    data: () => ({
        pais: {
            id: null,
            pais: "",
            sigla: "",
            ddi: "",
            ativo: true,
            dt_criacao: "",
            dt_atualizacao: "",
        },
        showModal: false
    }),
    methods: {
        async buscarPais() {
            try {                
                const dadosPais = ServicePais.buscarPais(this.idPais)
                
                this.pais = dadosPais
                
                return this.showModal = true 
            } catch (e) {
                console.log("Erro ao buscar pais por ID", e)
            }
        }, 
        fecharModal() {
            this.showModal = false
            
            this.pais = {
                id: null,
                pais: "",
                sigla: "",
                ddi: "",
                ativo: true,
                dt_criacao: "",
                dt_atualizacao: "",
            }
            
            this.$emit('fecharModal')
        },
        async salvarPais() {            
            try {
                await ServicePais.cadastrarPais(this.pais)
                
                
                this.fecharModal()
                this.$emit('paisCadastrado')

            } catch (e) {
                console.log(e)

                alert('Houve um erro! Por favor tente novamente.')
                
                this.fecharModal()
            }
        }
    }
}
</script>
