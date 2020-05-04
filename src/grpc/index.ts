import {Server, loadPackageDefinition} from '@grpc/grpc-js';
import {loadSync} from '@grpc/proto-loader'

const server = new Server();
import { resolve } from 'path';
import {
  health,
} from './methods';
const PROTO_PATH = resolve(__dirname + '/start.proto');
// Load protobuf
const proto = loadPackageDefinition(
  loadSync(PROTO_PATH, {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true,
  }),
);

//@ts-ignore 
server.addService(proto.starter.StarterGateway.service, {
  health
});
export default server;