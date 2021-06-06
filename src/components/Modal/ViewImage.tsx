import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Image,
  Link,
} from '@chakra-ui/react';

interface ModalViewImageProps {
  isOpen: boolean;
  onClose: () => void;
  imgUrl: string;
}

export function ModalViewImage({
  isOpen,
  onClose,
  imgUrl,
}: ModalViewImageProps): JSX.Element {
  // TODO MODAL WITH IMAGE AND EXTERNAL LINK
  
  return (
    <Modal onClose={onClose} isOpen={isOpen} >
      <ModalOverlay />
      <ModalContent>
        <ModalBody bgColor="pGray.800" p={0}>
          <Image src={imgUrl} maxWidth={"900px"} maxHeight={"600px"}/>
          <ModalFooter w={"100%"} fontSize={"14px"}>
            <Link href={imgUrl} isExternal>
            Abrir original
            </Link>
          </ModalFooter>
        </ModalBody>

      </ModalContent>
    </Modal>
  )
  
}
