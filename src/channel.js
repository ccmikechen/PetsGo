import { Socket } from 'phoenix';

const SOCKET_URL = 'ws://test.bearlab.io/socket';

export const configureChannel = () => {
  let socket = new Socket(SOCKET_URL, {
    logger: (kind, msg, data) => {
      console.log(`${kind}: ${msg}`, data);
    }
  });

  socket.connect();

  return socket;
};
