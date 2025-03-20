import { Logger, NestMiddleware } from "@nestjs/common";

export class LoggerMiddLeware implements NestMiddleware {
    private readonly logger = new Logger(LoggerMiddLeware.name);
    use(req: Request, next: (error?: any) => void) {
        switch(req.method) {
            case 'POST':
            case 'PUT':
                this.logger.log(
                    'loggerMidLeware | Request [${req.method}] | Request Body ${JSON.stringfy(reg.body)}',
                );
                break;
                case 'GET':
                case 'DELETE':
                    this.logger.log('LoggerMidLeware | Request [${req.method}]');
                    break;
                    default:
                        this.logger.log(
                            'LoggerMidleware | Request [${req.method}] default logging' ,
                        );
        }
        next;
    }

}