// Preencher templates de e-mail com dados dinâmicos, etc... WIP
import { prisma } from '../lib/prisma.js';

export async function createTemplate(title: string, subject: string, body: string, authorId: string) {

    const template = await prisma.template.create({
        data: {
            title,
            subject,
            body,
            authorId
        }
    });

    return template;
}

export async function getTemplates( authorId: string) {

    const template = await prisma.template.findMany({
        where: {authorId }

    });

    return template;
}


export async function updateTemplate(id: string, authorId: string, title: string, subject: string, body: string) {

    const template = await prisma.template.update({
        where: {
            id,
            authorId
        },
        data: {
            title,
            subject,
            body
        }
    });

    return template;
}

export async function deleteTemplate(id: string, authorId: string) {

    const template = await prisma.template.delete({
        where: {
            id,
            authorId
        },

    });
    return template;
}   

// Tem outra forma mais elegante — fazer tudo em uma query só:
// typescriptexport async function updateTemplate(id: string, authorId: string, title: string, subject: string, body: string) {
//     return await prisma.template.updateMany({
//         where: { id, authorId },  // ← só atualiza se o id E o authorId baterem
//         data: { title, subject, body }
//     });
// }
// O updateMany com where: { id, authorId } garante que só atualiza se o template pertencer ao usuário. Se não pertencer, simplesmente não atualiza nada.
// Mesma ideia pro delete:
// typescriptexport async function deleteTemplate(id: string, authorId: string) {
//     return await prisma.template.deleteMany({
//         where: { id, authorId }
//     });
// }