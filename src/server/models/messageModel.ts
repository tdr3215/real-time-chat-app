import mongoose from 'mongoose';
/*
?  Properties 
* body
* chat
* sender
 

 */
const messageSchema = mongoose.Schema(
  {
    body: { type: 'String', trim: true },
    sender: { type: Schema.Types.ObjectId, ref: 'User' },
    chat: { type: Schema.Types.ObjectId, ref: 'Chat' },
  },
  { timestamps: true }
);

const Message = mongoose.model('Message', messageSchema);
export { Message };
