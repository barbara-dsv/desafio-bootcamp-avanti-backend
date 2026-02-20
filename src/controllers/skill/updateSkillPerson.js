import prisma from "../../PrismaCliente.js";

const updateSkillPerson = async (req, res) => {
    const { id } = req.params;
    const { pessoa_id } = req.params;
    try {
        const skill = await prisma.conhecimento.findUnique({ where: { id: Number(id) } });

        if (!skill) {
            return res.status(404).json("Conhecimento não encontrado.");
        };

        const updateSkillPerson = await prisma.conhecimento.update({
            data: { pessoa_id: Number(pessoa_id) },
            where: { id: Number(id) }
        });

        return res.status(200).json(updateSkillPerson);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ mensagem: 'Erro interno do servidor.' });
    }
};

export default updateSkillPerson;

