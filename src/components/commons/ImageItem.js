import { Text } from "./Text"

export const ImageItem = ({titleImage, urlImage, altImage, styleImage}) => {
    return (
        <div className={`relative w-fit ${styleImage}`}> 
            <h2 className="font-normal text-base absolute w-full bg-black bg-opacity-75 px-4 pt-[14px] pb-[13px] rounded-t-lg ">
                {titleImage}
            </h2>
            <img 
                src={urlImage} 
                alt={altImage}
                className="rounded-lg"
            />
        </div>
    )
}