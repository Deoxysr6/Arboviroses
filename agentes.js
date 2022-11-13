const url = "http://localhost:8001";
const imovel = Vue.createApp({
    data() {
        return {
            _id: '',
            nome: '',
            email: '',
            senha: '',
        }
    },
    methods: {
        submitForm(e) {
           e.preventDefault();
           const data = {
            _id: this._id,
            nome : this.nome,
            email : this.email,
            senha : this.senha
           }
           console.log(data);
           alert('salvo');
         chamado(data);
       }

   }
})
const mountedApp = imovel.mount('#DivPrincipal')
async function chamado(data){
   let body = {data: data};
   let ret = await axios.post(url + '/api/v1/agente', data);
   console.log(ret.data);
}