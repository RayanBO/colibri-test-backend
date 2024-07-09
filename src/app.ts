// app.ts
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { createClient } from '@supabase/supabase-js';
import todoRoutes from './routes/todoRoutes';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

export const supabase = createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_API_KEY!);

app.use(cors({
    origin: '*'
}));
app.use(express.json());

app.use('/api/todos', todoRoutes);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
