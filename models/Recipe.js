const { model, Schema } = require('mongoose');

const recipeSchema = new Schema({
    rId: String,
    title: String,
    description: String,
    createdAt: String,
    createdBy: String,
    ingredients: [
        {
            name: String,
            body: String,
            createdAt: String
        }
    ],
    directions: [
        {
            name: String,
            body: String,
            createdAt: String
        }
    ],
    likes: [
        {
            userId: String,
            createdAt: String
        }
    ]
});

module.exports = model( 'Recipe', recipeSchema );