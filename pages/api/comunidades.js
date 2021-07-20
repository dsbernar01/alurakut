import { SiteClient } from 'datocms-client';

export default async function recebedorDeRequests(request, response) {

    if(request.method === 'POST') {
        const TOKEN = '51c3c4e75e9dd860f22856e43ffd99';
        const client = new SiteClient(TOKEN);

        const registroCriado = await client.items.create({
            itemType: "976892",  //ID do model de "comunities" criado pelo Dato
            ...request.body,
           // title: "Comunidade de Teste",
           // imageUrl: "https://github.com/dsbernar01.png",
           // creatorSlug: "dsbernar01"
        })

        response.json({
            dados: 'Algum dado qualquer',
            registroCriado: registroCriado,
        })

        return;
    }

    response.status(404).json({
        message: 'Ainda não temos nada no GET, mas no POST tem!'
    })
}