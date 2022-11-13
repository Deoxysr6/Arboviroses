const url = "http://localhost:8001";
const imovel = Vue.createApp({
    data() {
        return {
            _id: '',
            localidade: '',
            quarteirao: '',
            logradouro: '',
            numero: '',
            bairro: '',
            tipoImovel: '',
            complemento: '',
            Sequencia: '',
            telefoneResidencial: '',
            telefoneRecado: '',
            observacao: '',
            imoveis: [],
        }
    },
    methods: {
        submitForm(e) {
           e.preventDefault();
           const data = {
            _id: this._id,
            localidade : this.localidade,
            quarteirao : this.quarteirao,
            logradouro : this.logradouro,
            numero : this.numero,
            bairro : this.bairro,
            tipoImovel : this.tipoImovel,
            complemento : this.complemento,
            Sequencia : this.Sequencia,
            telefoneResidencial : this.telefoneResidencial,
            telefoneRecado : this.telefoneRecado,
            observacao : this.observacao
           }
           console.log(data);
           alert('salvo');
         chamado(data);
       },
       chamado(){
        axios.get(url + '/api/v1/imovel' ).then((result) => {
          console.log(result.data);
          this.imoveis = result.data; 
        }).catch((err) => {
            console.log(err);
        }); 
        },
        deletar(id){
            console.log(id);
            axios.delete(url + `/api/v1/imovel/${id}`).then(alert('deletado'));
        },
        editar(id){
            console.log(id);
            axios.put(url + `/api/v1/imovel/${id}`).then(alert('editado'));
        }

   }
})
const mountedApp = imovel.mount('#DivPrincipal')
async function chamado(data){
   let body = {data: data};
   let ret = await axios.post(url + '/api/v1/imovel', data);
   console.log(ret.data);
}