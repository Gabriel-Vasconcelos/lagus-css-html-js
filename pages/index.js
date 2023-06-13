import { SectionImageList } from "@/src/components/sections/SectionImageList";
import { SectionPresentationTest } from "@/src/components/sections/SectionPresentationTest";
import Head from "next/head";

const Home = () => {
  return (
    <>
      <Head> 
        <title>Lagus_</title>
      </Head>

      <main>
          <SectionPresentationTest />
          
          <SectionImageList />
      </main>
    </>
  )
}

export default Home;
