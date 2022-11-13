const url = "http://localhost:8001";
const pncd = Vue.createApp({
    data() {
        return {
            _id: '',
            data: '',
            hora: '',
            a1: '',
            a2: '',
            b: '',
            c: '',
            d1: '',
            d2: '',
            e: '',
            tipo01: '',
            quantidade01: '',
            tipo02: '',
            quantidade02: '',
            tipodeImovel:'',
            complemento: '',
            numero: '',
            sequencia: '',
            numerodeMoradores: '',
            telefoneResidencial: '',
            telefoneRecado: '',
            nomeMorador: '',
            cpf: '',
            dataNascimento: '',
            numerodoCartaoSus: '',
            pncd: [],
        }
    },
    methods: {
        submitForm(e) {
           e.preventDefault();
           const cad = {
             _id: this._id,
                data : this.data,
                hora : this.hora,
                a1 : this.a1,
                a2 : this.a2,
                b : this.b,
                c : this.c,
                d1 : this.d1,
                d2 : this.d2,
                e : this.e,
                tipo01 : this.tipo01,
                quantidade01 : this.quantidade01,
                tipo02 : this.tipo02,
                quantidade02 : this.quantidade02,
                tipodeImovel : this.tipodeImovel,
                complemento : this.complemento,
                numero : this.numero,
                sequencia : this.sequencia,
                numerodeMoradores : this.numerodeMoradores,
                telefoneResidencial : this.telefoneResidencial,
                telefoneRecado : this.telefoneRecado,
                nomeMorador : this.nomeMorador,
                cpf : this.cpf,
                dataNascimento : this.dataNascimento,
                numerodoCartaoSus : this.numerodoCartaoSus
            }
           console.log(cad);
           alert('salvo');
         chamado(cad);
       },
       buscar(){
        axios.get(url + '/api/v1/pncd' ).then((result) => {
          console.log(result.data);
          this.pncd = result.data; 
        }).catch((err) => {
            console.log(err);
        }); 
        },
        deletar(id){
            console.log(id);
            axios.delete(url + `/api/v1/pncd/${id}`).then(alert('deletado'));
        },
        editar(id){
            console.log(id);
            axios.put(url + `/api/v1/pncd/${id}`).then(alert('editado'));
        }
   }
})
const mountedApp = pncd.mount('#DivPrincipal')
async function chamado(cad){
   let body = {cad: cad};
   let ret = await axios.post(url + '/api/v1/pncd', cad);
   console.log(ret.cad);
}