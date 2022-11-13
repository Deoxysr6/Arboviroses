const url = "http://localhost:8001";

const teste = Vue.createApp({
    data() {
        return {
            _id: '',
            data:'',
            agente:'',
            agentes: [],
        }
    },
    methods: {
         submitForm(e) {
            e.preventDefault();
                const data = {
                    data: this.data,
                    agente: this.agente,
                }
          chamado(data);
        },
        buscar(){
            axios.get(url + '/api/v1/quarteirao' ).then((result) => {
              console.log(result.data);
              this.agentes = result.data; 
            }).catch((err) => {
                console.log(err);
            }); 
            },
            deletar(id){
                console.log(id);
                axios.delete(url + `/api/v1/agendamento/${id}`).then(alert('deletado'));
            },
            editar(id){
                console.log(id);
                axios.put(url + `/api/v1/agendamento/${id}`).then(alert('editado'));
            }

    }
})
const mountedApp = teste.mount('#DivPrincipal')
async function chamado(data){
    let body = {data: data};
    let ret = await axios.post(url + '/api/v1/agendamento', data);
    console.log(ret.data);
 }
