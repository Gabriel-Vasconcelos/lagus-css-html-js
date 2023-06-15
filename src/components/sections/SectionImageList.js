import { ImageItem } from "../commons/ImageItem"
import { TitleComponent } from "../commons/TitleComponent"

export const SectionImageList = () => {
    return(
        <section>
            <TitleComponent>
                Image List Component
            </TitleComponent>

            <div className="mt-8 lg:mt-12 grid grid-cols-1 lg:grid-cols-3 place-items-center gap-y-[14px] max-w-5xl mx-auto bg-red-500">
                <ImageItem 
                    titleImage="Atom in the hand of a robot" 
                    urlImage="/images/PicAtom1.svg" 
                    altImage="imagem de um átomo pairando sobre uma mão robótica"
                    styleCard={'lg:col-span-1'}
                />

                <ImageItem 
                    titleImage="Person working on a website" 
                    urlImage="/images/PicManCode1.svg" 
                    altImage="imagem de um homem olhanado para um computador"
                    styleCard={'lg:col-span-2'}
                    widthImage={''}
                />

                <ImageItem 
                    titleImage="Women working in styles and ESLint configurations" 
                    urlImage="/images/PicWomanCode1.svg" 
                    altImage="imagem de uma mulher com fone de ouvido sorrindo"
                    styleCard={'lg:col-span-3'}
                />

            </div>
        </section>
    )
}