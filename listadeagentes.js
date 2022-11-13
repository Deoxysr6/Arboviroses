const agente = Vue.createApp({
    data() {
        return {
            agente:'',
        }
    },
    methods: {
         submitForm(e) {
            e.preventDefault();

            // axios.post(url + '/api/v1/bairro', data).then(response => 
            //     this.data = response.data,
            //     console.log(response.data),
            //   )
          chamado(this.agente);
          excluir(this.agente);
        }

    }
})
const mountedApp = agente.mount('#DivPrincipal')
async function chamado(agente){
    let body = {agente: agente};
    let ret = await axios.get(url + '/api/v1/bairro', body);
}
async function excluir(agente){
    let body = {agente: agente};
    let ret = await axios.delete(url + '/api/v1/bairro', body);
}