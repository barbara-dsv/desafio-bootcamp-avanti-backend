import prisma from '../../PrismaCliente.js';

const deletePerson = async (req, res) => {

    const { id } = req.params;
    const loggedPersonId = req.loggedPersonId;

    try {

        const person = await prisma.pessoa.findUnique({
            where: { id: Number(id) }
        });

        if (!person) {
            return res.status(404).json({ mensagem: 'Pessoa não encontrada.' });
        }

        if (person.id !== loggedPersonId){
            return res.status(403).json({mensagem:'Você não têm permisão para excluir outro usuário'})
        }

        await prisma.conhecimento.deleteMany({
            where: {pessoa_id:Number(id)}
        })

        await prisma.pessoa.delete({
            where: { id: Number(id) }
        });

        return res.status(200).json({ mensagem: 'Pessoa deletada com sucesso.' });

    } catch (error) {
        console.log(error);
        return res.status(500).json({ mensagem: 'Erro interno do servidor.' });
    }

};

export default deletePerson;