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
     
    ]

    return (
        <>
            < Head title="Hamburgueres" description="Os melhores Hamburgueres das galaxias!"/>

            <SnackTitles>Burgueres</SnackTitles>
            <Snacks snacks={data}></Snacks>
        </>
    )
}