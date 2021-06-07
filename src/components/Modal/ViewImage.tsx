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
      <ModalContent bgColor="pGray.800" maxWidth={"fit-content"} m={"auto"} >
        <ModalBody p={0}>
          <Image src={imgUrl} maxWidth={"900px"} maxHeight={"600px"} />
        </ModalBody>
        <ModalFooter fontSize={"0.875rem"} mr={"auto"}>
          <Link href={imgUrl} isExternal>
            Abrir original
          </Link>
        </ModalFooter>

      </ModalContent>
    </Modal>
  )
}
