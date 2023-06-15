import { Text } from "./Text"

export const ImageItem = ({titleImage, urlImage, altImage, styleCard}) => {
    return (
        <div className={`relative w-fit ${styleCard}`}> 
            <h2 className="font-normal text-base absolute w-full bg-black bg-opacity-75 px-4 pt-[14px] pb-[13px] rounded-t-lg ">
                {titleImage}
            </h2>
            <img 
                src={urlImage} 
                alt={altImage}
                className="rounded-lg w-full object-cover"
            />
        </div>
    )
}