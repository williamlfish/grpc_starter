

import { ServerCredentials } from '@grpc/grpc-js';

import grpcServe from './grpc';

import {logger} from './utils'

grpcServe.bindAsync('0.0.0.0:50051', ServerCredentials.createInsecure(), (err, port)=>{
    if(err){
        logger.error(err)
        process.exit(1)
    }
    if(port){
        logger.info(`listening on ${port}`)
        grpcServe.start();

    }
});
