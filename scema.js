const recipeSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true,
    },
    ingredients: {
      type: [String],
      required: true,
    },
    instructions: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    createdDate: {
      type: Date,
      default: Date.now,
    },
  });
  
const Recipe = mongoose.model('Recipe', recipeSchema);
  
    module.exports = Recipe;
  