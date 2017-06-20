import { Socket } from 'phoenix';

const SOCKET_URL = 'ws://test.bearlab.io/socket';

const configureChannel = () => {
  let socket = new Socket(SOCKET_URL, {
    logger: (kind, msg, data) => {
    }
  });

  socket.connect();

  return socket;
};

let socket = configureChannel();

export const postChannel = socket.channel('post');
