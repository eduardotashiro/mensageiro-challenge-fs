import { Request, Response } from "express";

export const register = async (req: Request, res: Response) => {
    try {
        const { name, email, password } = req.body;
        res.status(200).json({ message: "register", name, email, password });
    } catch (error) {
        res.status(500).json({ error: "Internal server error" }); //preciso tratar os erros de forma mais específica, para retornar mensagens de erro mais claras... WIP
        return; 
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