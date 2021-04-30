const mongoose = require('mongoose')
const Schema = mongoose.Schema

const penjualanSchema = new Schema({
    JenisIkanCupang: {
        type: String
    },
    usia: {
        type: String
    },
    Size: {
        type: String
    },
    Harga: {
        type: String
    }
    
    
}) 

module.exports = mongoose.model('penjualan', penjualanSchema)