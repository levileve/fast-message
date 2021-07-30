import mongoose from 'mongoose';

import Constants from '../utilities/constants';

mongoose.connect(Constants.database.host, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.Promise = global.Promise;

export default mongoose;
