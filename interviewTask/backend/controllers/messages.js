import Message from '../models/Messages.js';
export const addMessage = async (req, res) => {
	try {
		await Message.create(req.body);
		res.send({ status: 200, message: 'record added successfully' });
	} catch (error) {
		res.status(500).send({
			status: 500,
			message: 'Unable to add record',
			error: error.message,
		});
	}
};
export const getMessages = async (req, res) => {
	try {
		const messages = await Message.findAll();

		res.status(200).send({ status: 200, messages: messages });
	} catch (error) {
		res.status(500).send({
			status: 500,
			message: 'Error retrieving messages',
			error: error.message,
		});
	}
};
export const deleteMessage = async (req, res) => {
	const { id } = req.body;
	try {
		await Message.destroy({ where: { id: id } });
		res.send({ message: 'deleted successfully' });
	} catch (error) {
		res
			.status(400)
			.send({ error: error.message, message: 'Unable to delete message' });
	}
};
export const updateMessage = async (req, res) => {
	const { id } = req.body;
	try {
		const [affectedRows] = await Message.update(req.body.data, {
			where: { id },
		});

		if (affectedRows === 0) {
			return res
				.status(404)
				.send({ message: 'No record updated. Check ID or data.' });
		}

		res.send({ message: 'Updated successfully' });
	} catch (error) {
		res.status(400).send({
			error: error.message,
			message: 'Unable to update message',
		});
	}
};
