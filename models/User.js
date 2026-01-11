const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    return sequelize.define('User', {
        nume: { type: DataTypes.STRING, allowNull: false },
        email: { type: DataTypes.STRING, allowNull: false, unique: true },
        parola: { type: DataTypes.STRING, allowNull: false },
        rol: { type: DataTypes.ENUM('ADMIN', 'MANAGER', 'EXECUTANT'), allowNull: false },
        managerId: { type: DataTypes.INTEGER, allowNull: true }
    });
};