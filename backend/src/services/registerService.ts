import { prisma } from '../lib/prisma.js';

//lógica para registrar um usuário, criar um novo registro no banco de dados, etc... WIP


async function registerUser(email: string, password: string, name: string) {
    if (!email || !password || !name) {
        throw new Error('Email, password and name are required !');
    }
    if (password.length < 8) {
        throw new Error('Password must be at least 8 characters long !');
    }
    if(!email.includes('@')) {
        throw new Error('Invalid email format !');
    }

    const existingUser = await prisma.user.findUnique({ where: { email } });

    if (existingUser) {
        throw new Error('Email already in use !');
    }

    const user = await prisma.user.create({
        data: {
            email,
            passwordHash: password, //preciso implementar hash de senha, para não armazenar senhas em texto plano no banco de dados... WIP
            name
        }
    });
    return user;

}

export default { registerUser }

//separar cada comportamento em funções menores?
//status code jogo pro controller..
//devo tratar os erros .. vai dar tempo ? 