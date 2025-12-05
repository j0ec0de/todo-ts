import { Request, Response } from "express";
import { prisma } from "../db/prisma";

export async function createTodo(req: Request, res: Response) {
    try {
        const { title } = req.body;

        const todo = await prisma.todo.create({
            data: {
                title: title,
            },
        });

        return res.json(todo);
    } catch (err: any) {
        return res.status(500).json({ error: err.message })
    }
};



