import express from 'express';
import {
	addMessage,
	getMessages,
	deleteMessage,
	updateMessage,
} from '../controllers/messages.js';
const router = express.Router();

router.post('/add-message', addMessage);

router.get('/get-messages', getMessages);

router.post('/delete-message', deleteMessage);
router.post('/update-message', updateMessage);
export default router;
