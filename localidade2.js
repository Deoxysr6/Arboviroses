const url = "http://localhost:8001";
const imovel = Vue.createApp({
    data() {
        return {
            _id: '',
            descricao: '',
            categoria: '',
            zona: '',
            extrato: '',
            localidade: [],
        }
    },
    methods: {
        submitForm(e) {
           e.preventDefault();
           const data = {
            _id: this._id,
            descricao : this.descricao,
            categoria : this.categoria,
            zona : this.zona,
            extrato : this.extrato,
           }
           console.log(data);
           alert('salvo');
         chamado(data);
       },
       buscar(){
        axios.get(url + '/api/v1/localidade' ).then((result) => {
          console.log(result.data);
          this.localidade = result.data; 
        }).catch((err) => {
            console.log(err);
        }); 
        },
        deletar(id){
            console.log(id);
            axios.delete(url + `/api/v1/localidade/${id}`).then(alert('deletado'));
        },
        editar(id){
            console.log(id);
            axios.put(url + `/api/v1/localidade/${id}`).then(alert('editado'));
        }

   }
})
const mountedApp = imovel.mount('#DivPrincipal')
async function chamado(data){
   let body = {data: data};
   let ret = await axios.post(url + '/api/v1/localidade', data);
   console.log(ret.data);
}