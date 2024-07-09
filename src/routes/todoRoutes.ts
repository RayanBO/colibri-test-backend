import express from 'express';
import { getTodos, createTodo, updateTodo, deleteTodo } from '../controllers/todoController';

const router = express.Router();

// 📥 Route pour récupérer toutes les tâches
router.get('/', getTodos);

// ➕ Route pour créer une nouvelle tâche
router.post('/', createTodo);

// ✏️ Route pour mettre à jour une tâche existante
router.put('/:id', updateTodo);

// ❌ Route pour supprimer une tâche
router.delete('/:id', deleteTodo);

export default router;
