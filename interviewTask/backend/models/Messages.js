import Sequelize from 'sequelize';
import sequelize from '../utils/database.js';
const Message = sequelize.define('Messages', {
	id: {
		type: Sequelize.INTEGER,
		autoIncrement: true,
		primaryKey: true,
		allowNull: false,
	},
	message: { type: Sequelize.CHAR },
});
export default Message