# LakeToys

Lake toys is an application allowing users to rent each others lake equipment.

## Tech Used

### Backend
* Express
* Mongoose
* MongoDB
* Jsonwebtoken
* Bcrypt
* Mongoose-unique-validator

### Frontend
* React
* React-router-dom
* Axios
* Http-proxy-middleware


## Notes & Challenges In Process

Developing models, making toys query friendly (categories, available dates based on existing orders)

### Models:

### Toys

```javascript
const toySchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: [{ type: String, enum: ['Fishing', 'Boats', 'Inflatable', 'Childrens'] }],
  description: { type: String, maxlength: 300, required: true },
  location: {
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true }
  },
  rate: { type: Number, required: true },
  reviews: [reviewSchema],
  images: [{ type: String }],
  owner: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }
})
```