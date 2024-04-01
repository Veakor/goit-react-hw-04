import Modal from 'react-modal';

const ImageModal = ({ isOpen, onRequestClose, imageUrl, alt }) => {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel="Image Modal"
        >
            <img src={imageUrl} alt={alt} />
        </Modal>
    );
};

export default ImageModal;