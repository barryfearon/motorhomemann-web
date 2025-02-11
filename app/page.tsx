import Image from "next/image";
import Navbar from "@/components/Navbar";

import bgImage01 from "../public/images/mhm-mobile-background-001.png";
import camperVan from "../public/images/mhm-van-001.png";
import mceaLogo from "../public/images/MCEA-logo.png";

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

        <div className="grid w-screen justify-items-end align-bottom fixed bottom-0 right-10 left-10">
          <Image
            className="object-cover"
            src={camperVan}
            width={400}
            alt={`motorhome mann campervan`}
          />
        </div>
        <Navbar />
        <div className="overscroll-auto">
          <div className="z-0 grid grid-cols-1 justify-items-center content-start mt-[120px] w-screen min-h-screen">
            <div className="relative mt-5 w-[90%] bg-white/90 rounded-[20px] border-4 border-[#f2dea1] p-4">
              <div className="text-center text-[#d83232] text-[2rem]/[2rem] font-black font-['Aleo'] mb-2">
                <h1>Welcome to Motorhome Mann</h1>
              </div>
              <div className="text-[#1e1e1e] text-[1rem]/[1.45rem] font-normal font-['Aleo'] mb-4">
                Your trusted provider of motorhome and campervan repairs on the
                Isle of Man.
                <br />
                With over 10 years of experience in motorhome and campervan
                repair, we specialize in habitation services, maintenance, and
                upgrades to keep your vehicle in top condition. <br />
                We have been operating professionally for 6 years and are
                certified by the Mobile Caravan Engineers Association
              </div>

              <div className="grid justify-items-center">
                <Image
                  src={mceaLogo}
                  width={140}
                  height={65}
                  alt={`MCEA Logo`}
                />
              </div>
            </div>
          </div>
          <div className="z-0 grid grid-cols-1 justify-items-center content-start mt-[120px] w-screen min-h-screen">
            <div className="relative mt-5 w-[90%] bg-white/90 rounded-[20px] border-4 border-[#f2dea1] p-4">
              <div className="text-center text-[#d83232] text-[2rem]/[2rem] font-black font-['Aleo'] mb-2">
                <h1>Welcome to Motorhome Mann</h1>
              </div>
              <div className="text-[#1e1e1e] text-base font-normal font-['Aleo'] leading-normal">
                Your trusted provider of motorhome and campervan repairs on the
                Isle of Man.
                <br />
                With over 10 years of experience in motorhome and campervan
                repair, we specialize in habitation services, maintenance, and
                upgrades to keep your vehicle in top condition. <br />
                We have been operating professionally for 6 years and are
                certified by the Mobile Caravan Engineers Association
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
