import Image from "next/image";
import Footer from "@/components/Footer";

import bgImage01 from "../public/images/mhm-mobile-background-001.png";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div>
      <main>
        <Image
          className={`object-cover h-screen w-screen fixed top-0 left-0`}
          src={bgImage01}
          width={1024}
          alt="background image "
        />
        <Navbar />
      </main>
      <Footer />
    </div>
  );
}
