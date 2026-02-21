import { Request, Response } from "express";
import { registerUser } from "../services/registerService.js";
import { ZodError } from "zod";


export const register = async (req: Request, res: Response) => {
    try {
        const { name, email, password } = req.body;
        const user = await registerUser(email, password, name);
        if (user) {
            console.log(`User registered: ${user.email}, ID: ${user.id}, Name: ${user.name}, Created At: ${user.createdAt}`);
            res.status(201).json({ message: "register", user: { id: user.id, email: user.email, name: user.name, createdAt: user.createdAt } });
        }
    } catch (error) {
        if (error instanceof ZodError) {
            res.status(400).json({ error: error.issues });
            return
        }
        if (error instanceof Error) {
            res.status(400).json({ error: error.message });
            return;
        }
        return res.status(500).json({ error: "Internal server error" });
    }
}

export const login = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;
        res.status(200).json({ message: "login", email, password });
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });//preciso tratar os erros de forma mais específica, para retornar mensagens de erro mais claras...
        return;
    }
}   