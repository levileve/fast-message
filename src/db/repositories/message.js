import DefaultModelRepository from './default';
import MessageModel from '../models/message';

class MessageRepository extends DefaultModelRepository {
  constructor() { super(MessageModel); }
}

const Message = new MessageRepository();

export default Message;
