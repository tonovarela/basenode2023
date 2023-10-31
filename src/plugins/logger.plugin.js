const winston = require('winston');

const  {combine,timestamp,json} = winston.format;

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

  module.exports =function buildLogger(service) {
    return  {
        log: (message)=>{
            logger.info('info ',{message,service});
        },
        error: (message)=>{
          logger.error('error ',{message,
                                service});
        }
    }
  }
    
//   if (process.env.NODE_ENV !== 'production') {
//     logger.add(new winston.transports.Console({
//       format: winston.format.simple(),
//     }));
//   }