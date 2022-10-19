const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Commande = new Schema(
  {
    total_Sellings: { type: Number, required: [true, 'Total Sellings field is required'] },
    product_list: { type: String, required: [true, 'product list field is required'] },
    client: { type: String, required: [true, 'client field is required'] },
    todos: [{ type: Schema.Types.ObjectId, ref: 'products' }],
  },
  {
    timestamps: true,
    versionKey: false
  }
)
const commande = mongoose.model('commande', Commande, 'commande');
module.exports = commande;