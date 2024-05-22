import Head from "../../../components/Head"
import { SnackTitles } from "../../../components/SnanckTitle/SnackTitle"
import { Snacks } from "../../../components/Snacks"


export default function Burguers() {
// comentario
    const  data= [
        {
            id:1,
            snack:"burguer",
            name:"Mega",
            description:
            'O artesanal tamanho família recheado com três suculentos, queijos e bacon.',
            price:25.5,
            image:"https://cdn.pixabay.com/photo/2024/05/10/10/51/ai-generated-8752901_1280.jpg"
        },
        {
            id:2,
            snack:"burguer",
            name:"Extra bacon",
            description:
            'Criado para os amantes de bacon, possui em todas as suas comadas bacon bem assadoe ainda queijo e carne',
            price:23.5,
            image:"https://imgur.com/B4J04AJ.jpg"
        },
        {
            id:3,
            snack:"burguer",
            name:"Ultra Burguer",
            description:
            'O Ultra Burguer tem um tamanho super família recheado com cinco suculentos, queijos e bacon.',
            price:35.5,
            image:"https://cdn.pixabay.com/photo/2024/05/10/10/51/ai-generated-8752901_1280.jpg"
        }
    ]

    return (
        <>
            < Head title="Hamburgueres" description="Os melhores Hamburgueres das galaxias!"/>

            <SnackTitles>Burgueres</SnackTitles>
            <Snacks snacks={data}></Snacks>
        </>
    )
}