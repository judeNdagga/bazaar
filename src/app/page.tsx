import Image from "next/image";
import Link from "next/link";
import BackgroundPic from "./components/BackgroundPic";
import AltBackgroundSlider from "./components/AltBackgroundSlider";
interface HomePageProps {
  backgroundpic: string;
}
export default function HomePage() {
  return (
    <div className="overflow-hidden">
      {/* <BackgroundPic/> */}
      <AltBackgroundSlider />
      <div className="bg-white">
        <div className="xl:flex h-[38em]">
          <div className="xl:w-[45%] xl:mt-16">
            <img
              src="https://images.unsplash.com/photo-1628684014602-88da45adfb43?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="pic"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="xl:w-[55%] bg-black xl:mt-16 text-center xl:text-left text-white">
            <h1 className="xl:mt-28 xl:ml-40 text-xs font-semibold tracking-widest">
              REASONS TO LOVE
            </h1>
            <h1 className="mt-4 xl:ml-40 text-5xl font-bold">Built To Last</h1>
            <p className="xl:mr-40 xl:ml-40 mt-4">
              Every Mitsubishi is built with quality parts and precision
              engineering, so you can count on your Mitsubishi vehicle to be
              with you for the long road ahead. This legendary reliability and
              longevity has earned awards from automotive experts and inspired
              loyalty from Subaru drivers everywhere.
            </p>
            <button className="inline-flex xl:ml-40 mt-6 h-12 w-[15em] hover:w-[16em] ml-20 transition-all duration-300 animate-shimmer items-center justify-center rounded-md border-2 border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-white hover:text-red-300 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 focus:ring-offset-red-200">
              START SHOPPING
            </button>
          </div>
        </div>
      </div>
      {/* second div */}
      <div className="bg-white">
        <p className="sm:ml-40 pt-20">
          <h1 className="text-xs font-extrabold text-gray-400 tracking-widest">
            AWARDS & ACCOLADES
          </h1>
          <h1 className="text-black font-bold text-7xl mt-8">
            Winning, winning, <br />
            winning.
          </h1>
          <p className="mt-8 sm:w-[60%]">
            Since their introduction, the 2023 and all-new 2024 Outlander
            Plug-in Hybrid have garnered awards and accolades for their
            exquisite interior and exterior styling, driving dynamics, and
            innovative technology that takes you almost everywhere you want to
            go.
          </p>

          {/* card level */}
          <div className="md:flex gap-8 mt-16">
            <div className="w-96 shadow-xl">
              <figure>
                <img
                  src="https://www.mitsubishicars.com/content/dam/mitsubishi-motors-us/images/siteimages/homepage/awards/outlander_home_iihs_card.jpg?width=720&auto=webp&quality=70"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h1 className="font-extrabold text-3xl">
                  IIHS 2023 TOP SAFETY PICK
                </h1>
                <h1 className="font-bold text-xl">
                  Insurance Institute for Highway Safety
                </h1>
                <p>
                  The 2023 Mitsubishi Outlander Plug-in Hybrid is an IIHS TOP
                  SAFETY PICK, one of its highest safety awards, for models
                  built after May 2023. Now it's joined by the new 2024
                  Mitsubishi Outlander. Both vehicles offer an impressive array
                  of standard and available Advanced Driver Assist Systems
                  (ADAS) to help build driver confidence and passenger safety.
                </p>
              </div>
            </div>

            <div className="w-96 shadow-xl">
              <figure>
                <img
                  src="https://www.mitsubishicars.com/content/dam/mitsubishi-motors-us/images/siteimages/motor-week-drivers-award/phev-new-award.jpg?width=720&auto=webp&quality=70"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h1 className="font-extrabold text-3xl">
                  MotorWeek Drivers’ Choice Award
                </h1>
                <h1 className="font-bold text-xl">MotorWeek</h1>
                <p>
                  The votes are in! The 2024 Outlander Plug-in Hybrid is the
                  winner of the 2024 MotorWeek Drivers' Choice Award for Best
                  Small Utility, further demonstrating our commitment to
                  developing vehicles that perfectly fuse together design,
                  convenience, and innovation.
                </p>
              </div>
            </div>

            <div className="w-96 shadow-xl">
              <figure>
                <img
                  src="https://www.mitsubishicars.com/content/dam/mitsubishi-motors-us/images/siteimages/awards/family-award/Home_EditorialMediumCard.jpg?width=720&auto=webp&quality=70"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h1 className="font-extrabold text-3xl">
                  Family Green Car of the Year
                </h1>
                <h1 className="font-bold text-xl">Green Car Journal</h1>
                <p>
                  Eco-friendly with the award to prove it — the 2025 Outlander
                  Plug-in Hybrid has been named 2025 Family Green Car of the
                  Year™ by Green Car Journal.
                </p>
              </div>
            </div>
          </div>
        </p>
      </div>

      {/* 2024 mirage level */}

      <div className="bg-white">
        <div className="xl:flex h-[38em]">
          <div className="xl:w-[50%] bg-black xl:mt-16 text-center xl:text-left text-white">
            <h1 className="xl:mt-28 xl:ml-40 text-xs font-semibold tracking-widest">
              2024 MIRAGE
            </h1>
            <h1 className="mt-4 xl:ml-40 text-5xl font-bold">
              2024 Mirage: Unbelievable Style
            </h1>
            <p className="xl:mr-40 xl:ml-40 mt-4">
              Design so impressive you won’t believe it until you see it. The
              2024 Mirage is an incredibly efficient compact vehicle prepared
              for fun and adventure. Sporty styling, flexible cargo room and
              loads of standard features make the Mirage stand out.
            </p>
            <button className="inline-flex xl:ml-40 mt-6 h-12 w-[15em] hover:w-[16em] ml-20 transition-all duration-300 animate-shimmer items-center justify-center rounded-md border-2 border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-white hover:text-red-300 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 focus:ring-offset-red-200">
              EXPLORE MIRAGE
            </button>
          </div>
          <div className="xl:w-[50%] xl:mt-16">
            <img
              src="https://www.mitsubishicars.com/content/dam/mitsubishi-motors-us/images/siteimages/homepage/mitsubishi-homepage-2022-mirage.jpg?width=1080&auto=webp&quality=70"
              alt="pic"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* 2024 mirage g4 level */}

      <div className="bg-white">
        <div className="xl:flex h-[38em]">
          <div className="xl:w-[50%]">
            <img
              src="https://www.mitsubishicars.com/content/dam/mitsubishi-motors-us/images/siteimages/cars/mirage-g4/my24/overview/2024-mitsubishi-mirage-g4-sedan-white-driving-fast.jpg?width=1080&auto=webp"
              alt="pic"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="xl:w-[50%] bg-black text-center xl:text-left text-white">
            <h1 className="xl:mt-28 xl:ml-40 text-xs font-semibold tracking-widest">
              2024 MIRAGE G4
            </h1>
            <h1 className="mt-4 xl:ml-40 xl:mr-10 text-5xl font-bold">
              2024 Mirage G4: Your City, Your Way
            </h1>
            <p className="xl:mr-40 xl:ml-40 mt-4">
              The Mirage G4 is a special subcompact that provides comfortable
              control and sophisticated urban style, so you can take on every
              challenge and adventure the city has to offer.
            </p>
            <button className="inline-flex xl:ml-40 mt-6 h-12 w-[15em] hover:w-[16em] ml-20 transition-all duration-300 animate-shimmer items-center justify-center rounded-md border-2 border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-white hover:text-red-300 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 focus:ring-offset-red-200">
              EXPLORE MIRAGE G4
            </button>
          </div>
        </div>
      </div>

      {/* after mirage g4 level */}

      <div className="bg-white">
        <div className="xl:flex h-[28em] items-center">
          <div className="xl:w-[50%] text-center text-black">
            <h1 className="xl:mt-28 text-4xl font-extrabold">
              Talk To Our Customer Support
            </h1>
            <h1 className="mt-4 text-gray-400 font-semibold">
              Get the immediate assistance you need.
            </h1>
            <h1 className="mt-8 underline uppercase text-xs font-extrabold tracking-widest cursor-pointer hover:text-red-400 hover:scale-x-110 transition duration-300">
              Get Support
            </h1>
          </div>
          <div className="xl:w-[50%] text-center text-black">
            <h1 className="xl:mt-28 text-4xl font-extrabold">Be Informed</h1>
            <h1 className="mt-4 text-gray-400 font-semibold">Visit our blog</h1>
            <h1 className="mt-8 underline uppercase text-xs font-extrabold tracking-widest cursor-pointer hover:text-red-400 hover:scale-x-110 transition duration-300">
              See News, pics and Videos
            </h1>
          </div>
        </div>
      </div>

      {/* dealership level */}

      <div className="bg-white">
        <div className="xl:flex h-[38em]">
          <div className="xl:w-[50%] bg-black xl:mt-16 text-center xl:text-left text-white">
            <h1 className="xl:mt-28 xl:ml-40 text-xs font-semibold tracking-widest">
              DEALERS
            </h1>
            <h1 className="mt-4 xl:ml-40 text-5xl font-bold">
              Find Local Dealerships
            </h1>
            <p className="xl:mr-40 xl:ml-40 mt-4">
              With multiple Mitsubishi dealerships across Uganda, there’s
              bound to be a Mitsubishi near you. Stop in for a visit anytime.
            </p>
            <button className="inline-flex xl:ml-40 mt-6 h-12 w-[15em] hover:w-[16em] ml-20 transition-all duration-300 animate-shimmer items-center justify-center rounded-md border-2 border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-white hover:text-red-300 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 focus:ring-offset-red-200">
              FIND A DEALER
            </button>
          </div>
          <div className="xl:w-[50%] xl:mt-16">
            <img
              src="https://www.mitsubishicars.com/content/dam/mitsubishi-motors-us/images/siteimages/homepage/carrousel/mitsubishi-outlander-suv-blue-city.jpg?width=1080&auto=webp&quality=70"
              alt="pic"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
      <div className="bg-white">
        
        <p className="xl:ml-40 xl:mr-40 pt-12">
        <div className="divider"></div>
          <h1 className="font-bold text-gray-400">DISCLAIMER</h1>
          <p className="mt-8 text-gray-400">
            This website is in no way connected to the Ugandan branch of Mitsubishi Motors.
          </p>

        </p>
      </div>
    </div>
  );
}
