import { ImageItem } from "../commons/ImageItem"
import { TitleComponent } from "../commons/TitleComponent"

export const SectionImageList = () => {
    return(
        <section>
            <TitleComponent>
                Image List Component
            </TitleComponent>

            <div className="mt-8">
                <ImageItem 
                    titleImage="Atom in the hand of a robot" 
                    urlImage="/images/PicAtom1.svg" 
                />

                <ImageItem 
                    titleImage="Atom in the hand of a robot" 
                    urlImage="/images/PicHandCode1.svg" 
                />

                <ImageItem 
                    titleImage="Atom in the hand of a robot" 
                    urlImage="/images/PicWomanCode1.svg" 
                />

            </div>
        </section>
    )
}