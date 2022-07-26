/**
 * const name is router name patten: domain/{router name}
 */

const Home = require('./router/homeRouter');
const ToDo = require('./router/todoRouter');

module.exports = { 
    Home,
    ToDo
};