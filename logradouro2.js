const url = "http://localhost:8001";

const bairro = Vue.createApp({
    data() {
        return {
            _id: '',
            decricao:'',
            logradouro: [],
        }
    },
    methods: {
         submitForm(e) {
            e.preventDefault();
            const data = {
                decricao: this.decricao,
            }
          chamado(data);
          alert('salvo');
        },
        buscar(){
         axios.get(url + '/api/v1/logradouro' ).then((result) => {
           console.log(result.data);
           this.logradouro = result.data; 
         }).catch((err) => {
             console.log(err);
         }); 
         },
         deletar(id){
             console.log(id);
             axios.delete(url + `/api/v1/logradouro/${id}`).then(alert('deletado'));
         },
         editar(id){
             console.log(id);
             axios.put(url + `/api/v1/logradouro/${id}`).then(alert('editado'));
         }

    }
})
const mountedApp = bairro.mount('#DivPrincipal')
async function chamado(data){
    let body = {data: data};
    let ret = await axios.post(url + '/api/v1/logradouro', data);
    console.log(ret.data);
}