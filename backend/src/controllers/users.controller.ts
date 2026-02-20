import { Request, Response } from "express";


export const testUserRoute = async (req: Request, res: Response) => {
    try {
        res.status(200).json({ message: "test" });
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
        return;
    }
}

