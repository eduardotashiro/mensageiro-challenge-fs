import { Response } from "express";
import { AuthenticatedRequest } from "../middleware/authMiddleware.js";
import { createTemplate, getTemplates, updateTemplate, deleteTemplate } from "../services/templatesService.js";


export const createEmailTemplate = async (req: AuthenticatedRequest, res: Response) => {
    const { title, subject, body } = req.body;
    const idUser = req.user?.id!;
    const template = await createTemplate(title, subject, body, idUser );
    res.status(201).json({ message: "Template created successfully", template });
}//to dizendo que o author id é o id user 

export const getEmailTemplates = async (req: AuthenticatedRequest, res: Response) => {
    const idUser = req.user?.id!;
    const templates = await getTemplates(idUser);
    res.status(200).json({ message: "Templates retrieved successfully", templates });
}

export const updateEmailTemplate = async (req: AuthenticatedRequest, res: Response) => {
    const {id: Templateid } = req.params as { id: string };
    const idUser = req.user?.id!;
    const { title, subject, body } = req.body;
    const template = await updateTemplate(Templateid, idUser, title, subject, body);
    res.status(200).json({ message: "Template updated successfully", template });
}

export const deleteEmailTemplate = async (req: AuthenticatedRequest, res: Response) => {
    const {id: Templateid } = req.params as { id: string };
    // const Templateid = req.params.id as string;
    const idUser = req.user?.id!;
    await deleteTemplate(Templateid, idUser);
    res.status(204).send();
}

// Boa pergunta! Sim, ainda tem esse risco. No update e delete você precisa verificar se o template pertence ao usuário logado antes de editar:
// typescriptexport async function updateTemplate(id: string, authorId: string, title: string, subject: string, body: string) {
//     const template = await prisma.template.findUnique({ where: { id } });
    
//     if (!template) throw new Error('Template not found!');
//     if (template.authorId !== authorId) throw new Error('Not authorized!');
    
//     return await prisma.template.update({
//         where: { id },
//         data: { title, subject, body }
//     });
// }
// E no controller passa o authorId também:
// typescriptconst template = await updateTemplate(id, req.user?.id!, title, subject, body);
// Mesma lógica pro delete. Assim um usuário nunca consegue editar ou deletar template de outro. Agora vai dormir! 😄


