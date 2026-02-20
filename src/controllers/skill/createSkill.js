import prisma from "../../PrismaCliente.js";

const createSkill = async (req, res) => {

    const loggedPersonId = req.loggedPersonId;
    const { titulo, descricao, categoria, nivel } = req.body;
    const niveisPermitidos = ['Iniciante', 'Intermediario', 'Avancado'];

    try {
        if (!niveisPermitidos.includes(nivel)) {
            return res.status(400).json({
                mensagem: "Nível inválido. Você deve escolher entre: Iniciante, Intermediario ou Avancado."
            });
        }

        const skill = await prisma.conhecimento.create({
            data: { titulo, descricao, categoria, nivel, pessoa_id: loggedPersonId }
        });

        return res.status(201).json(skill);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ mensagem: 'Erro interno do servidor.' });
    }
}

export default createSkill;