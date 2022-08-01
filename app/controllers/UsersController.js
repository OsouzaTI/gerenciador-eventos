import mongoose from 'mongoose';

export function index(req, res) {
    res.render('user/index');
}

export const add = {
    GET: function(req, res) {
        return res.render('user/add');
    },
    POST: async function(req, res) {        
        const { name } = req.body;
        let User = mongoose.model('users');
        let saved = await User({ name: name }).save();
        console.log(saved);
        return res.render('user/add');
    },
};

export async function all(req, res) {
    let users = await mongoose.model('users').find();
    res.send(users);
}