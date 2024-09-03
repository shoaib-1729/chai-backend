
# Defining Data Models in Mongoose - 3 Steps

When defining data models in Mongoose, follow these steps:

## 1. Import Mongoose Package

```javascript
const mongoose = require("mongoose");
```

## 2. Define Schema
```

- **Schema**: Outline the data points or fields.
- **Timestamps**: Add `{ timestamps: true }` to include `createdAt` and `updatedAt` fields automatically.

```javascript
const ExampleSchema = new mongoose.Schema(
  {
    fieldName: { type: String, required: true },
    // Other fields...
  },
  { timestamps: true }
);
```
## 3. Export Models


- **Model Name**: The name used inside the database.
- **Schema Reference**: The schema the model is based on.

```javascript
const ExampleModel = mongoose.model("Example", ExampleSchema);
```

## Notes

### 1. Common Fields

- **Timestamps**: Use `{ timestamps: true }` when defining schemas to automatically include `createdAt` and `updatedAt` fields.

```javascript
const ExampleSchema = new mongoose.Schema(
  {
    // Fields...
  },
  { timestamps: true }
);
```

### 2. MongoDB Model Naming Convention

- **Naming**: Models are stored in lowercase and pluralized form in MongoDB. For example, a model named `User` will be stored as `users`, and `Todo` will be stored as `todos`.

### 3. Referring to Another Schema

- **Reference Type**: Use `mongoose.Schema.Types.ObjectId` for referencing.
- **Reference Name**: The reference name should match the name used when defining the model.
- **Naming Convention**: Use Pascal Case for model names, i.e., start each word with a capital letter.

```javascript
const TaskSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // Reference name must match the model name
  },
  // Other fields...
});
```
This `README.md` file provides clear instructions and code examples for defining data models in Mongoose, adhering to common conventions and best practices.

