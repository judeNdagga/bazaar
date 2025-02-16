
import MobileNavbar2 from "@/app/components/MobileNavbar2";

export default function Services() {
  return (
    <div className="min-h-screen">
      <MobileNavbar2 />
      <div>
      
        <div
          className="hero sm:h-[42rem] h-[28em]"
          style={{
            backgroundImage:
              "url(https://images.pexels.com/photos/4489749/pexels-photo-4489749.jpeg)",
          }}
        >
          
          {/* <!-- component --> */}
        </div>
        
        <div className="absolute text-white top-48 sm:top-[20%] left-20 sm:w-[40em] w-[16em] h-48 bg-gradient-to-r from-black from-10% via-black via-25% pl-4 pt-6">
          <h1 className="text-2xl sm:text-5xl uppercase">
            OPT FOR SERVICING BY MITSUBISHI EXPERTS
          </h1>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row">
        <div className="sm:w-[60%] text-center text-black bg-gray-100">
          <h1 className="font-bold text-2xl sm:mt-24 mt-16">
            WHY CHOOSE MITSUBISHI SERVICING
          </h1>
          <p className="sm:p-16 p-8">
            Take your vehicle to your MITSUBISHI dealer for its servicing
            requirements and you’ll be giving it the best possible care. That’s
            because our authorised MITSUBISHI service centres have dedicated
            tools and diagnostic equipment specifically designed to fix, repair
            and maintain your MITSUBISHI. We also provide a parts and labour
            warranty for all MITSUBISHI Original Equipment fitted by our trained
            technicians.
          </p>
        </div>
        <div className="sm:w-[40%]">
          <img
            src="https://images.pexels.com/photos/9702349/pexels-photo-9702349.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="pic"
            className="w-[100%] h-[38rem]"
          />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row">
        <div className="sm:w-[55%]">
          <img
            src="https://images.pexels.com/photos/12765629/pexels-photo-12765629.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="pic"
            className="w-[100%] h-[100%]"
          />
        </div>
        <div className="sm:w-[45%] text-center text-black bg-gray-100">
          <h1 className="font-bold text-2xl sm:mt-24 mt-16">
          A SOLID MITSUBISHI SERVICE WARRANTY
          </h1>
          <p className="sm:p-16 p-8">
            All genuine parts supplied by MITSUBISHI UK and fitted by a MITSUBISHI
            dealer’s service centre, excluding wear and tear, benefit from a 3
            year/60,000 mile parts and labour warranty. This guarantees that
            both the parts and the service practices used conform to MITSUBISHI’s
            rigorous safety, reliability and maintenance standards. They also
            fully satisfy your vehicle’s manufacturer warranty requirements.
            Authorised MITSUBISHI dealers and authorised service centres are the
            only servicing outlets to have the specific tools, equipment and
            electronic media to be able to fully support your MITSUBISHI. This
            includes access to manufacturer training, and direct contact to
            MITSUBISHI UK‘s technical support personnel. Routine servicing by your
            MITSUBISHI dealer ensures that your vehicle’s software (and any other
            components) are regularly checked, updated or changed to maintain
            the best reliability and performance.
          </p>
        </div>
      </div>
    </div>
  );
}