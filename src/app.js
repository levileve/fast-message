import './setup';
import './db/database';
import server from './server';
import Constants from './utilities/constants';

server.listen(Constants.port, Constants.host);

// eslint-disable-next-line no-console
console.log(`Server listening on port: ${Constants.port}`);
