import mongoose from mongoose

// schema
const productSchema = new mongoose.Schema({
    // fields: description, name, price, productImage, ref: category, user Schemas 
    /*
     image/pdf store options:
    - DB buffer, overhead aa jaata hai db par
    - khud ke server par aur public url share karte hai
    - third party services - storage buckets wagerah par store karke public url provide karte hai user ko
    */
    // product image ki image cloud services jaise AWS, cloudinary wagerah par store hogi, woh humei uska public url de dega jisse hum us project ki details fetch kar paayege
    // that's why product image ka type string dege
    description: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        // jab kuch nahi hoga tab zero hoga
        default: 0
    },
    stock: {
        type: Number,
        required: true,
        // jab kuch nahi hoga tab zero hoga
        default: 0
    },
    productImage: {
        type: String,
    },
    // product kis category ko belong karte hai, category ko refer karega
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        // other fields bhi specify kar sakte hai
        required: true
    },
    // product kis user ko belong karte hai, user ko refer karega
    user: {
        type: mongoose.Schema.types.ObjectId,
        ref: "User"
    }
}, { timestamps: true })

// model
export const Product = mongoose.models("Product", productSchema)