const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');
import { IsString, IsDate } from 'class-validator';

class Message extends Model {
    @IsString()
    name: string

    @IsDate()
    creeatedAt: Date
}
Message.init({
    name: DataTypes.STRING,
    createdAt: DataTypes.DATE
}, { sequelize, modelName: 'message' });
