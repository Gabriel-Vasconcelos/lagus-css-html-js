import { Text } from "../commons/Text"
import { TitleComponent } from "../commons/TitleComponent"

export const SectionPresentationTest = () => {
    return (
        <section>
            <TitleComponent>
                This page is a HTML/CSS/JS Test!
            </TitleComponent>

            <div className="flex-col space-y-6 mt-16">
                <Text>
                    The objective of this test is to assess your coding and styling skills. It will be considered a good result if you can style all the components of this page. This text also count as a valid component.
                </Text>

                <Text>
                    This second part is a second paragraph of the same component. Both p tags must follow the flow and display side by side, instead of the regular behavior of one on top of the other. only on desktop.
                </Text>
            </div>

            <div className="mt-16 font-thin text-center text-2xl/[28px]">
                Attention: components must be responsive and use CSS Flex and Grid layouts
            </div>
        </section>
    )
}
