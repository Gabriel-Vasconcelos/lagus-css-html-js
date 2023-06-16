import { ImageItem } from "../commons/ImageItem"
import { TitleComponent } from "../commons/TitleComponent"

export const SectionImageList = () => {
    return(
        <section>
            <TitleComponent>
                Image List Component
            </TitleComponent>

            <div className="mt-8 lg:mt-12 grid grid-cols-1 lg:grid-cols-3 place-items-center gap-y-4 lg:gap-y-6 lg:gap-x-6 max-w-5xl mx-auto">
                <ImageItem 
                    titleImage="Atom in the hand of a robot" 
                    urlImage="/images/PicAtom1.svg" 
                    altImage="imagem de um átomo pairando sobre uma mão robótica"
                    styleCard={'lg:col-span-1'}
                    styleImage={'w-[400px] h-[400px] lg:h-[500px]'}
                />

                <ImageItem 
                    titleImage="Person working on a website" 
                    urlImage="/images/PicManCode1.svg" 
                    altImage="imagem de um homem olhanado para um computador"
                    styleCard={'lg:col-span-2'}
                    styleImage={'w-[400px] h-[400px] lg:w-[700px] lg:h-[500px]'}

                />

                <ImageItem 
                    titleImage="Women working in styles and ESLint configurations" 
                    urlImage="/images/PicWomanCode1.svg" 
                    altImage="imagem de uma mulher com fone de ouvido sorrindo"
                    styleCard={'lg:col-span-3'}
                    styleImage={'w-[400px] lg:w-[1024px]'}
                />

            </div>
        </section>
    )
}