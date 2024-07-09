import { Request, Response } from 'express';
import { supabase } from '../app';

export const getTodos = async (req: Request, res: Response) => {
    const { data, error } = await supabase
        .from('todolist')
        .select('*')
        .order('created_at', { ascending: false });
    if (error) return res.status(500).json({ error: error.message });
    res.json(data);
};

export const createTodo = async (req: Request, res: Response) => {
    const { title, descriptions, isFait, statut } = req.body;
    const { data, error } = await supabase
        .from('todolist')
        .insert({ title, descriptions, isFait, statut })
        .select();
    if (error) return res.status(500).json({ error: error.message });
    res.status(201).json(data[0]);
};

export const updateTodo = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { title, descriptions, isFait, statut } = req.body;
    const { data, error } = await supabase
        .from('todolist')
        .update({ title, descriptions, isFait, statut })
        .eq('id', id)
        .select();
    if (error) return res.status(500).json({ error: error.message });
    res.json(data[0]);
};

export const deleteTodo = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { error } = await supabase
        .from('todolist')
        .delete()
        .eq('id', id);
    if (error) return res.status(500).json({ error: error.message });
    res.status(204).send();
};
