import { SimpleGrid, useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';
import { Card } from './Card';
import { ModalViewImage } from './Modal/ViewImage';

interface Card {
  title: string;
  description: string;
  url: string;
  ts: number;
  id: string;
}

interface CardsProps {
  cards: Card[];
}

export function CardList({ cards }: CardsProps): JSX.Element {
  // TODO MODAL USEDISCLOSURE
  const { isOpen, onOpen, onClose,  } = useDisclosure()

  // TODO SELECTED IMAGE URL STATE
  const [imgUrl, setImgUrl] = useState('');

  // TODO FUNCTION HANDLE VIEW IMAGE
  function handleOpenModalViewImage (url: string){
    console.log('Modal ' + url)
    setImgUrl(url);
    onOpen();
  }

  
  return (
    <>
      <SimpleGrid columns={3} spacing={10}>
        {/* TODO CARD GRID */}
        {cards.map(card => <Card key={card.id} data={card} viewImage={handleOpenModalViewImage}/> )}
        {/* TODO MODALVIEWIMAGE */}
        <ModalViewImage imgUrl={imgUrl} isOpen={isOpen} onClose={onClose}/>
      </SimpleGrid>
    </>
  );
}
