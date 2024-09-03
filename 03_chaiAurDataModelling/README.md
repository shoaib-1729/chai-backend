# Defining data models in mongoose - 3 steps

1. import mongoose package
2. define schema (data points/ data entries/ data fields)
3. export models

- model name inside DB
- on which schema the model is based

## Notes

1. Common Fields

- createdAt, updatedAt; these fields are added using {timestamps: true} as another parameter when defining schemas.
- Schema(fields: {data_points}, timestamps: {timestamps: true})

2. MongoDB Model Naming Convention

- The models inside the mongoDB is stored in lowercase and in plural form; for e.g, if you defined you model as "User", "Todo", it is stored as "users", "todos" inside mongoDB respectively

3. Referring another Schema

- Firstly, special type is used
- Secondly, Reference of that schema is given, name should be same as defined in the model
- Use Pascal Notation while naming models, i.e. while naming models start every word with a capital letter
