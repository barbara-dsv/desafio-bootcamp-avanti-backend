import prisma from "../../PrismaCliente.js";

const deleteSkill = async (req, res) => {
    const { id } = req.params;
    try {
        const skill = await prisma.conhecimento.findUnique({ where: { id: Number(id) } });

        if (!skill) {
            return response.status(404).json("Conhecimento não encontrado.");
        };

        await prisma.conhecimento.delete({ where: { id: Number(id) } });

        return res.status(204).send();
    } catch (error) {
        console.log(error);
        return res.status(500).json({ mensagem: 'Erro interno do servidor.' });
    }
};

export default deleteSkill;