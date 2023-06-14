export const ImageItem = ({titleImage, urlImage}) => {
    return (
        <div> 
            <h2> {titleImage} </h2>
            <img src={urlImage} />
        </div>
    )
}