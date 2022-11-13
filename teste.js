const url = "http://localhost:8001";

const teste = Vue.createApp({
    data() {
        return {
            _id: '',
            decricao:'',
            bairros: [],
        }
    },
    methods: {
         submitForm(e) {
            e.preventDefault();
                const data = {
                    decricao: this.decricao,
                }
          chamado(data);
        },
        buscar(){
            axios.get(url + '/api/v1/bairro' ).then((result) => {
              console.log(result.data);
              this.bairros = result.data; 
            }).catch((err) => {
                console.log(err);
            }); 
            },
            deletar(id){
                console.log(id);
                axios.delete(url + `/api/v1/bairro/${id}`).then(alert('deletado'));
            },
            editar(id){
                console.log(id);
                axios.put(url + `/api/v1/bairro/${id}`).then(alert('editado'));
            }

    }
})
const mountedApp = teste.mount('#teste')
async function chamado(data){
    let body = {data: data};
    let ret = await axios.post(url + '/api/v1/bairro', data);
    console.log(ret.data);
}