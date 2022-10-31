import { useContext, useEffect, useState } from 'react';
import './App.scss';
import { Card } from './components/card/card-component';
import { CreateCard } from './components/create-card/create-card';
import { DeleteCard } from './components/delete-card/delete-card';
import { Header } from './components/header/header';
import { PaginationFooter } from './components/paginationFooter/paginationFooter';
import { useCardContext } from './context/car'



function App() {

  const { isOpenedCardCreation,
    isOpenedCardDeletion,
    setIsOpenedCardCreation, carList, setCreationCardType } = useCardContext()

  return (
    <>

      <div className="App">
        <Header />
      </div>

      <section>
        <div className="cardsTitle">
          <h1>Resultado de Busca</h1>
          <button onClick={() => { setIsOpenedCardCreation(true), setCreationCardType({ tipo: "Criar" }) }} className="createbutton"> Novo card</button>
        </div>

        <div className="carsGrid">

          {
            carList ?
              carList?.cars.map(car => {
                return (
                  <Card car={car} />
                )
              }) : ""
          }
        </div>

        <PaginationFooter />
      </section>
      {
        isOpenedCardCreation ?
          <CreateCard />
          : ""
      }


      {
        isOpenedCardDeletion ?
          <DeleteCard />
          : ""
      }


    </>
  );
}

export default App;
