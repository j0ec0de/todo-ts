import express from 'express';

import { createTodo, deleteTodo, getTodo, updateTodo } from '../controllers/todo.controller';

import { validateBody } from '../middlewares/validateBody';

const router = express.Router();

router.post('/', validateBody({ title: "string" }), createTodo);
router.get('/', getTodo);
router.put('/:id', validateBody({ title: "string", completed: "boolean" }) ,updateTodo);
router.delete('/:id', deleteTodo);
export default router;

