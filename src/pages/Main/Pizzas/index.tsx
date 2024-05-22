import Head from "../../../components/Head"
import { Snacks } from "../../../components/Snacks"
import { SnackTitles } from "../../../components/SnanckTitle/SnackTitle"

export default function Pizzas() {
    const data = [
        {
          id: 1,
          snack: 'pizza',
          name: 'Calabresa',
          description:
            'Pizza recheada com calabresa, cebola, mussarela, orégano e azeitona, tendo uma borda recheada com catupiry.',
          price: 25,
          image: 'https://i.imgur.com/5rjJGkV.jpg',
        },
        {
          id: 2,
          snack: 'pizza',
          name: 'Portuguesa',
          description:
            'Pizza recheada com presunto, mussarela, ovo, cebola, azeitona, orégano, tomate e molho de tomate, tendo uma borda recheada com catupiry.',
          price: 28.5,
          image: 'https://i.imgur.com/WCoyGoI.png',
        },
        {
            id: 3,
            snack: 'pizza',
            name: 'Baiana',
            description:
              'Pizza Baiana  é uma iguaria típica do Brasil, conhecida por sua combinação de ingredientes que conferem um sabor picante e marcante, refletindo a culinária da Bahia. Normalmente, essa pizza inclui os seguintes componentes .',
            price: 38.5,
            image: 'https://i.imgur.com/WCoyGoI.png',
          },
      ]
    return (
        <>
            < Head title="Pizzas" description="Os mais variados sabores de Pizzas"/>
            <SnackTitles>Pizzas </SnackTitles>
            <Snacks snacks={data}></Snacks>
        </>
    )
}