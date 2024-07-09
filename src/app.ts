import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { createClient } from '@supabase/supabase-js';
import todoRoutes from './routes/todoRoutes';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// 🎛 Initialisation du client Supabase avec les variables d'environnement
export const supabase = createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_API_KEY!);

// 🌐 Configuration du middleware CORS
app.use(cors({
    origin: '*'
}));
app.use(express.json()); // 🚀 Middleware pour le parsing JSON

// 🚦 Définition de la route pour les tâches
app.use('/api/todos', todoRoutes);

// 🚀 Lancement du serveur sur le port spécifié
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
