import prisma from '../../database/PrismaCliente.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const login = async (req, res) => {

    const { email, senha } = req.body;
    try {
        const person = await prisma.pessoa.findUnique({
            where: { email }
        });

        if (!person) {
            return res.status(400).json({ mensagem: 'Email não cadastrado.' });
        };

        const passwordCorrect = await bcrypt.compare(senha, person.senha);
        if (!passwordCorrect) return res.status(400).json({ mensagem: 'Email ou senha incorretos.' })

        const token = jwt.sign({ id: person.id }, process.env.HASH, { expiresIn: '8h' });

        return res.status(200).json({
            person: {
                id: person.id,
                nome: person.nome,
                email: person.email
            },
            token
        });

    } catch (error) {
        console.log(error)
        return res.status(500).json({ mensagem: 'Erro interno do servidor' });
    }
};

export default login;