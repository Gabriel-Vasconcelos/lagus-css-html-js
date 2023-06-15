import { Text } from "./Text"

export const ImageItem = ({titleImage, urlImage, altImage}) => {
    return (
        <div className="relative"> 
            <h2 className="font-normal text-base absolute w-full bg-black bg-opacity-75 px-4 pt-[14px] pb-[13px] ">
                Atom in the hand of a robot
            </h2>
            <img 
                src={urlImage} 
                alt={altImage}
                className="rounded-e-lg"
            />
        </div>
    )
}