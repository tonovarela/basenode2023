import winston, { format } from 'winston';
const { combine, timestamp, json } = format;

const logger = winston.createLogger({
  level: 'info',
  format: combine(
    timestamp(),
    json()
  ),
  //winston.format.json(),    
  transports: [
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' }),
  ],
});

logger.add(new winston.transports.Console({
  format: winston.format.simple(),
}))

export const buildLogger= (service:string)=> {
  return {
    log: (message:string) => {
      logger.info('info ', { message, service });
    },
    error: (message:string) => {
      logger.error('error ', {
        message,
        service
      });
    }
  }
}

//   if (process.env.NODE_ENV !== 'production') {
//     logger.add(new winston.transports.Console({
//       format: winston.format.simple(),
//     }));
//   }