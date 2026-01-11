const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    return sequelize.define('Task', {
        titlu: { type: DataTypes.STRING, allowNull: false },
        descriere: { type: DataTypes.TEXT, allowNull: false },
        status: { 
            type: DataTypes.ENUM('OPEN', 'PENDING', 'COMPLETED', 'CLOSED'), 
            defaultValue: 'OPEN' 
        }
    });
};