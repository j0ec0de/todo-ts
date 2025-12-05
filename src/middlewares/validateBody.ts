import { Request, Response, NextFunction } from "express";

export function validateBody(required: Record<string, "string" | "boolean">) {
  return (req: Request, res: Response, next: NextFunction) => {
    const body = req.body;

    for (const key in required) {
      if (!(key in body)) {
        return res.status(400).json({ error: `${key} is required` });
      }

      if (typeof body[key] !== required[key]) {
        return res.status(400).json({
          error: `${key} must be a ${required[key]}`,
        });
      }
    }

    next();
  };
}
