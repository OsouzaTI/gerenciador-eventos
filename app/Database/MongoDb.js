import mongoose from 'mongoose';
import UserSchema from '../models/UserSchema.js';
import AdminSchema from '../models/UserSchema.js';
import EventSchema from '../models/EventSchema.js';
import EventoParticipanteSchema from '../models/EventoParticipantesSchema.js';

(function(){
    mongoose.connect('mongodb+srv://root:pass@cluster0.queuqsn.mongodb.net/?retryWrites=true&w=majority')
        .then(()=>console.log('Conectado com mongodb'))
        .catch(()=>console.log('Nao foi possivel conectar ao mongodb'));
})();