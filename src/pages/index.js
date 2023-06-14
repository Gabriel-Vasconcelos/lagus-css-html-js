import { SectionImageList } from "@/src/components/sections/SectionImageList";
import { SectionPresentationTest } from "@/src/components/sections/SectionPresentationTest";
import Head from "next/head";

const Home = () => {
  return (
    <>
      <Head> 
        <title>Lagus_</title>
      </Head>

      <main className="px-4">
          <SectionPresentationTest />
          
          <SectionImageList />
      </main>
    </>
  )
}

export default Home;
