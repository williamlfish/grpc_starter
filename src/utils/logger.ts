import {red, blue, yellow} from 'chalk'
type LogggerConstructor = { 
    version:string,
    service:string, 
}
type BaseMessage = {
    timeStamp:string,
    version:string,
    service:string, 
    message:string
}

class Logger {
    readonly baseMessage:BaseMessage;
    protected fullColor:boolean | undefined
    protected noColor:boolean | undefined
    constructor({service, version}:LogggerConstructor){
        this.baseMessage = {
            service,
            version,
        } as BaseMessage
    }
    warn(message :string){
        return console.log(
            yellow(
                JSON.stringify(
                Object.assign(
                    {},
                    this.baseMessage, 
                    {message, timeStamp:new Date().toISOString()}
                    )
                )
            )
        )
    }
    info(message :string){
        return console.log(
            blue(
                JSON.stringify(
                Object.assign(
                    this.baseMessage, 
                    {message, timeStamp:new Date().toISOString()}
                    )
                )
            )
        )
    }
    error(err:Error){
        return console.log(
            red(JSON.stringify(
                Object.assign(
                    this.baseMessage, 
                    {message:err.toString(), 
                    timeStamp:new Date().toISOString()}
                    )
                )
            )
        )
    }
}

export default Logger