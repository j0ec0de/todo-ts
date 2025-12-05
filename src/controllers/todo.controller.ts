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

export async function getTodo(req: Request, res: Response) {
    try {
        const todo = await prisma.todo.findMany();
        res.json(todo);
    } catch (err: any) {
        return res.status(500).json({ error: err.message })
    }
};

export async function updateTodo(req: Request, res: Response) {
    try {
        const id = Number(req.params.id);
        const { title, completed } = req.body;

        const todo = await prisma.todo.update({
            where: { id },
            data: {
                title: title,
                completed: completed
            }
        });

        return res.json(todo);

    } catch (err: any) {
        return res.status(500).json({ error: err.message });
    }
};

export async function deleteTodo(req: Request, res: Response) {
    try {
        const id = Number(req.params.id);
        const todo = await prisma.todo.delete({
            where: { id }
        })

        return res.json({ message: "Deleted" });
    } catch (err: any) {
        return res.status(500).json({ error: err.message });
    }
}

