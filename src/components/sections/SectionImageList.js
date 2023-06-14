import { ImageItem } from "../commons/ImageItem"
import { TitleComponent } from "../commons/TitleComponent"

export const SectionImageList = () => {
    return(
        <section>
            <TitleComponent>
                Image List Component
            </TitleComponent>

            <ImageItem titleImage="Atom in the hand of a robot" urlImage="/images/PicAtom1.svg" />
        </section>
    )
}