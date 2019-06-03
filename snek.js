const gameData = require('./game_data.js');

module.exports = class Snek{
    constructor() {
        return this;
    }

    /**
     * 
     * @param {gameData} setup 
     */
    init(setup) {
        return {
            "color": "#736CCB",
            "headType": "beluga",
            "tailType": "curled"
        };
    }
    
    /**
     * 
     * @param {gameData} gameState 
     */
    move(gameState) {
        return {
            move: 'right', // one of: ['up','down','left','right']
        };
    }
};