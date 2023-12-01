import mongoose from 'mongoose';
/*

?  Properties 
* name
* email
* password
* pic
 
 */
const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    pic: {
      type: String,
      required: true,
      default:
        'https://images.unsplash.com/photo-1610478506025-8110cc8f1986?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=2787',
    },
  },
  { timestamps: true }
);

const User = mongoose.model('User', userSchema);
export { User };
