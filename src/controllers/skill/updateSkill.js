import prisma from '../../database/PrismaCliente.js';

const updateSkill = async (req, res) => {
    const { id } = req.params;
    const loggedPersonId = req.loggedPersonId;
    const { titulo, descricao, categoria, nivel } = req.body;
    try {
        const skill = await prisma.conhecimento.findUnique({ where: { id: Number(id) } });

        if (!skill) {
            return res.status(404).json("Conhecimento não encontrado.");
        };

        if (skill.pessoa_id !== loggedPersonId) {
            return res.status(403).json({
                mensagem: "Você não tem permissão para editar uma oferta que não é sua."
            });
        };

        const updateSkill = await prisma.conhecimento.update({
            data: { titulo, descricao, categoria, nivel },
            where: { id: Number(id) }
        });
        return res.status(200).json(updateSkill);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ mensagem: 'Erro interno do servidor.' });
    }
};

export default updateSkill;