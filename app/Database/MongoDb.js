import mongoose from 'mongoose';

(function(){
    mongoose.connect('mongodb+srv://root:pass@cluster0.queuqsn.mongodb.net/?retryWrites=true&w=majority')
        .then(()=>console.log('Conectado com mongodb'))
        .catch(()=>console.log('Nao foi possivel conectar ao mongodb'));
})();