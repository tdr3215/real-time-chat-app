import { Schema, Model } from 'mongoose';
/*
?  Properties 
* body
* chat
* sender
 

 */
const messageSchema = new Schema(
  {
    body: { type: 'String', trim: true },
    sender: { type: Schema.Types.ObjectId, ref: 'User' },
    chat: { type: Schema.Types.ObjectId, ref: 'Chat' },
  },
  { timestamps: true }
);

export const Message = new Model('Message', messageSchema);
