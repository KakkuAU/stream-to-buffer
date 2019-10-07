/// <reference types="node" />
import { Readable } from "stream";
/**
* @Method: Returns the buffer from a read stream
* @Param {ReadStream}
* @Return {Promise<Buffer>}
*/
export declare function streamToBuffer(readStream: Readable): Promise<Buffer>;
