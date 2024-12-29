import React, {useState} from 'react';  
import { Modal, ModalOverlay, ModalContent, ModalBody, Button } from '@chakra-ui/react'
import { FaPhotoVideo } from 'react-icons/fa';
import './CreatePostModal.css';
import { GrEmoji } from 'react-icons/gr';
import { GoLocation } from 'react-icons/go';

const CreatePostModal = ({onClose, isOpen}) => {

    const [file, setFile] = useState()
    const [isDragOver, setIsDragOver] = useState(false)
    const [caption, setCaption] = useState('')

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
        if(file && (file.type.startsWith('image/') || file.type.startsWith('video/'))) {
            setFile(file)
            console.log("File:",  file)
        }
        else{
            setFile(null)
            alert('Please select a valid file(Image/Video)')
        }
    }

    const handleCaption = (event) => {
        setCaption(event.target.value)
    }

    return (
        <div>
        <Modal size={"4xl"} isOpen={isOpen} onClose={onClose} isCentered>
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
                <div className='h-[70vh] justify-between flex pb-5'>
                    <div className='w-[50%]'>
                        {!file && <div 
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
                        </div>}
                        {file && <img className='max-h-full' src={URL.createObjectURL(file)} alt=''/>}
                    </div>

                    <div className='w-[1px] border h-full'></div>

                    <div className='w-[50%]'>
                        <div className='flex items-center px-2'>
                            <img className='w-7 h-7 rounded-full' src='https://cdn.pixabay.com/photo/2024/11/23/08/18/christmas-9218404_1280.jpg' alt=''/>
                            <p className='font-semibold ml-4'>User Name</p>
                        </div>

                        <div className='px-3'>
                            <textarea 
                                placeholder='write a caption' 
                                className='captionInput' 
                                name='caption' 
                                rows="8"
                                onChange={handleCaption}
                            ></textarea>
                        </div>

                        <div className='flex justify-between px-2'>
                            <GrEmoji/>
                            <p className='opacity-70'> {caption?.length} /2,200 </p>
                        </div>
                        <hr/>

                        <div className='pd-2 flex justify-between items-center'> 
                            <input className='locationInput' type='text' placeholder='Location' name='location'/>
                            <GoLocation/>
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