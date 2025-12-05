import express, { type Application, type Request, type Response } from 'express';
import todoRoutes from "./routes/todo.routes";


const app: Application = express();
app.use(express.json());

app.use("/todos", todoRoutes);

const PORT = process.env.PORT || 3000;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});