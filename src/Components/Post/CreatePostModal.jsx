import React, {useState} from 'react';  
import { Modal, ModalOverlay, ModalContent, ModalBody, Button } from '@chakra-ui/react'
import { FaPhotoVideo } from 'react-icons/fa';
import './CreatePostModal.css';

const CreatePostModal = ({onClose, isOpen}) => {

    const [file, setFile] = useState()
    const [isDragOver, setIsDragOver] = useState(false)

    const handleDrop = (event) => {
        event.preventDefault()
        const droppedFile = event.dataTransfer.file[0];
        if(droppedFile.type.startsWith('image/') || droppedFile.type.startsWith('video/')) {
            setFile(droppedFile)
        }
    }

    const handleDragOver = (event) => {
        event.preventDefault()
        event.dataTranfer.dropEffect="copy";
        setIsDragOver(true)
    }

    const handleDragLeave = () => {
        setIsDragOver(false)
    }

    const handleOnChange = (event) => {
        const file = event.target.files[0]
        if(file&& file.type.startsWith('image/') || file.type.startsWith('video/')) {
            setFile(file)
        }
        else{
            setFile(null)
            alert('Please select a valid file(Image/Video)')
        }
    }

    return (
        <div>
        <Modal size={"4xl"} isOpen={true} onClose={onClose} isCentered>
            <ModalOverlay />
            <ModalContent>
            <div className='flex justify-between py-1 px-10 items-center'>
                <p>Create New Post</p>
                <Button className='' variant={"ghost"} size="sm" colorScheme={"blue"}>
                    Share
                </Button>
            </div>
            <hr/>
            <ModalBody>
                <div>
                    <div className='w-[50%]'>
                        <div 
                            onDrop={handleDrop}
                            onDragOver={handleDragOver}
                            onDragLeave={handleDragLeave}
                            className='drag-drop h-full'
                        >
                            <div>
                                <FaPhotoVideo className='text-3xl'/>
                                <p>Drag Photos/Videos here</p>
                            </div>
                            <label htmlFor='file-upload' className='custom-file-upload'> Select From Computer</label>   
                            <input className='fileInput' type='file' id='file-upload' accept='photo/*, video/*' onChange={handleOnChange}/>
                        </div>
                    </div>
                </div>
            </ModalBody>
            </ModalContent>
      </Modal>
        </div>
    );
};

export default CreatePostModal;