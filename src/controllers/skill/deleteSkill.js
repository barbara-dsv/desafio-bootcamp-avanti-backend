import prisma from "../../PrismaCliente.js";

const deleteSkill = async (req, res) => {
    const { id } = req.params;
    const loggedPersonId = req.loggedPersonId;

    try {
        const skill = await prisma.conhecimento.findUnique({ where: { id: Number(id) } });

        if (!skill) {
            return res.status(404).json("Conhecimento não encontrado.");
        };

        if (skill.pessoa_id !== loggedPersonId) {

            return res.status(403).json({
                mensagem: "Você não tem permissão para excluir uma oferta que não é sua."
            });
        };

        await prisma.conhecimento.delete({ where: { id: Number(id) } });

        return res.status(204).send();
    } catch (error) {
        console.log(error);
        return res.status(500).json({ mensagem: 'Erro interno do servidor.' });
    }
};

export default deleteSkill;