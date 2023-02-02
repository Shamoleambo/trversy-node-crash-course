const EventEmitter = require('events')
const uuid = require('uuid')

class Logger extends EventEmitter {
  log(msg) {
    this.emit('message', { id: uuid.v4(), msg })
  }
}

const logger = new Logger()

logger.on('message', data => console.log('Called listener', data))

logger.log('Hello Wolrd')
logger.log('Hello Fren')
logger.log('Hello Mano')
