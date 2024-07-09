"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.supabase = void 0;
// app.ts
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const supabase_js_1 = require("@supabase/supabase-js");
const todoRoutes_1 = __importDefault(require("./routes/todoRoutes"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
exports.supabase = (0, supabase_js_1.createClient)(process.env.SUPABASE_URL, process.env.SUPABASE_API_KEY);
app.use((0, cors_1.default)({
    origin: '*'
}));
app.use(express_1.default.json());
app.use('/api/todos', todoRoutes_1.default);
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
