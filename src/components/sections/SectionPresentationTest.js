import { Text } from "../commons/Text"
import { TitleComponent } from "../commons/TitleComponent"

export const SectionPresentationTest = () => {
    return (
        <section>
            <TitleComponent>
                This page is a HTML/CSS/JS Test!
            </TitleComponent>

            <div className="flex flex-col lg:flex-row gap-y-6 lg:gap-x-8 mt-16 w-fit mx-auto">
                <Text>
                    The objective of this test is to assess your coding and styling skills. It will be considered a good result if you can style all the components of this page. This text also count as a valid component.
                </Text>

                <Text>
                    This second part is a second paragraph of the same component. Both p tags must follow the flow and display side by side, instead of the regular behavior of one on top of the other. only on desktop.
                </Text>
            </div>

            <div className="mx-auto mt-16 lg:mt-24 font-thin text-center text-2xl/[28px] lg:text-[32px]/[38px] max-w-[398px] lg:max-w-[485px]">
                Attention: components must be responsive and use CSS Flex and Grid layouts
            </div>
        </section>
    )
}
