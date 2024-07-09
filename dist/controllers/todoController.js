"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTodo = exports.updateTodo = exports.createTodo = exports.getTodos = void 0;
const app_1 = require("../app");
const getTodos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { data, error } = yield app_1.supabase
        .from('todolist')
        .select('*')
        .order('created_at', { ascending: false });
    if (error)
        return res.status(500).json({ error: error.message });
    res.json(data);
});
exports.getTodos = getTodos;
const createTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, descriptions, isFait, statut } = req.body;
    const { data, error } = yield app_1.supabase
        .from('todolist')
        .insert({ title, descriptions, isFait, statut })
        .select();
    if (error)
        return res.status(500).json({ error: error.message });
    res.status(201).json(data[0]);
});
exports.createTodo = createTodo;
const updateTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { title, descriptions, isFait, statut } = req.body;
    const { data, error } = yield app_1.supabase
        .from('todolist')
        .update({ title, descriptions, isFait, statut })
        .eq('id', id)
        .select();
    if (error)
        return res.status(500).json({ error: error.message });
    res.json(data[0]);
});
exports.updateTodo = updateTodo;
const deleteTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { error } = yield app_1.supabase
        .from('todolist')
        .delete()
        .eq('id', id);
    if (error)
        return res.status(500).json({ error: error.message });
    res.status(204).send();
});
exports.deleteTodo = deleteTodo;
