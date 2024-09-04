import mongoose from "mongoose";

// mini model for items
// yeh model bass order schema mei use hoga, isiliye isko separate file mei banane ki need nahi hai aur export bhi nahi karwayege,aur ismei timestamps likhne ki bhi need nahi hai, woh orderSchema mei already mentioned hai, redundant code ho jaayega.
// eg: 2 glasses, 3 sets of mobile phones are items inside order, which will store name of the item and quantity of the items ordered
// fields:
// productId- product ko refer karegi, yeh id mongoDB generate karega
// quantity
const orderItemSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
    },
    quantity: {
        type: Number,
        required: true,
    },
});
// schema: Order schema will be interesting
const orderSchema = new mongoose.Schema({
    // fields: orderPrice, orderItems, subModel-item, orderStatus- ["PENDING", "CANCELLING", "DELIVERED"], address, ref- User
    // order status bilkul same rahege jaise defined kare gaye hai, wahi same spelling ke saath, isiliye isko restructions ke saath define karna hoga, sirf type: String se kaam nahi banega yaha par
    // item: name, quantity
    orderPrice: {
        type: Number,
        required: true,
    },
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    address: {
        type: String,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    // sub model
    orderItems: {
        // custom type aise dete hai, yeh ek array hogi aur array ke har item ka schema 'orderItemSchema' se liya jaayega
        type: [orderItemSchema],
        /*
        aise bhi kar sakte hai
        type: [
        {
            yaha pr bhi directly define kar sakta hai bina submodel banaye
        }
    ]
*/
    },
    orderStatus: {
        // enum/enumeration is used to restrict a field to a predefined set of values, is array mei se koi value choose kar sakte hai, baaki kuch nahi.
        // eg, plane ticket booking, order status, priority of tasks in task schema, jaha par pre-defined values hi exists karti hai.
        type: String,
        enum: ["PENDING", "CANCELLED", "DELIVERED"],
        // default to pending
        default: "PENDING",
    },
}, { timestamps: true });

// model
export const Order = mongoose.model("Order", orderSchema);