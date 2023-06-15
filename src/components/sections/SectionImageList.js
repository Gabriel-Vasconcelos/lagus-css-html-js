import { ImageItem } from "../commons/ImageItem"
import { TitleComponent } from "../commons/TitleComponent"

export const SectionImageList = () => {
    return(
        <section>
            <TitleComponent>
                Image List Component
            </TitleComponent>

            <div className="mt-8 grid grid-cols-1 place-items-center gap-[14px]">
                <ImageItem 
                    titleImage="Atom in the hand of a robot" 
                    urlImage="/images/PicAtom1.svg" 
                    altImage="imagem de um átomo pairando sobre uma mão robótica"
                />

                <ImageItem 
                    titleImage="Person working on a website" 
                    urlImage="/images/PicManCode1.svg" 
                    altImage="imagem de um homem olhanado para um computador"
                />

                <ImageItem 
                    titleImage="Women working in styles and ESLint configurations" 
                    urlImage="/images/PicWomanCode1.svg" 
                    altImage="imagem de uma mulher com fone de ouvido sorrindo"
                />

            </div>
        </section>
    )
}