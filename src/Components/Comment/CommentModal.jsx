import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay } from '@chakra-ui/react'
import React from 'react'

//This is comment modal
const CommentModal = ({onClose,isOpen}) => {
  return (
    <div>
      <Modal size={"4xl"} onClose={onClose} isOpen={true} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalBody>
            <div className='flex h-[75vh]'>
              <div className='w-[45%] flex flex-col justify-center'>
                <img className='max-h-full w-full' src='https://cdn.pixabay.com/photo/2024/02/14/16/45/leaves-8573845_1280.jpg' alt=''/>
              </div>
              <div className='border w-[55%]'>
                <div className='flex items-center'>
                  <div>
                    <img className='w-9 h-9 rounded-full' 
                    src='https://cdn.pixabay.com/photo/2023/01/08/18/11/plants-7705865_1280.jpg'
                    />
                  </div>
                </div>
              </div>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  )
}

export default CommentModal
