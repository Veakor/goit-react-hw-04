import style from './LoadMoreBtn.module.css';

const LoadMoreBtn = ({ onClick, hasMoreImages }) => {

    if (!hasMoreImages) {
        return null; 
    }

    return (
        <button className={style.loadMoreButton} onClick={onClick}>Load more</button>
    );
};

export default LoadMoreBtn;