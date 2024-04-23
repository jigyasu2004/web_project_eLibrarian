import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    name: { type: String },
    author: { type: String, required: true },
    imageUrl: { type: String, required: true },
    // Adding new fields
    availableQuantity: { type: Number, default: 0 }, // Number of books available
    ISBNCode: { type: String } //  code
});

const bookModel = mongoose.model('Book', bookSchema);
export { bookModel as Book };
