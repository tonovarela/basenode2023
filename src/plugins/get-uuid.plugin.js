const { v4: uuidv4 } = require('uuid');

const getUiid = () => {
    return uuidv4();
}
module.exports = {getUiid}