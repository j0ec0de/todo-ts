import express from 'express';

import { createTodo } from '../controllers/todo.controller';

import { validateBody } from '../middlewares/validateBody';

const router = express.Router();

router.post('/', validateBody({ title: "string" }), createTodo);

export default router;

