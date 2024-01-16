export default function Safety() {
  return (
    <div className="min-h-screen bg-[#383839]">
      <div>
        <div
          className="hero h-[42rem]"
          style={{
            backgroundImage:
              "url(https://backslash.fra1.digitaloceanspaces.com/Subaru/images/Technology%20and%20Engineering/safety_feature_banner_1.opt.webp)",
          }}
        >
          {/* <!-- component --> */}
        </div>
        <div className="absolute top-[40%] left-20 w-[40em] h-48 bg-gradient-to-r from-black from-10% via-black via-25% pl-4 pt-6">
          <h1 className="text-5xl uppercase">
            mitsubishi offers high standards of safety
          </h1>
        </div>
      </div>
      <div className="text-center">
        <p className="p-20 text-[16px] font-sans">
          We believe world-class safety is essential, not an optional extra – so
          our cars are fitted with a host of innovative safety technologies as
          standard. It’s our ambition to eliminate traffic accident deaths
          involving Subaru vehicles by 2030.
        </p>

        <p className="text-3xl font-bold p-4">MULTI-VIEW CAMERA SYSTEM</p>
        <p className="text-[16px] font-sans p-8">
          The available Multi-View Camera System helps reduce blind spots.
          Multiple cameras around the 2024 Outlander Plug-in Hybrid create a
          360° composite of the area around your vehicle, so you can see more of
          what’s going on. Plus, you always get a wide angle view, so you can
          park in tight spots with more confidence.
        </p>
        <div className="ml-[40%]">
        <img
          src="https://www.mitsubishicars.com/content/dam/mitsubishi-motors-us/images/siteimages/cars/outlander-phev/my24/safety/2024-mitsubishi-outlander-phev-multi-view-camera-system.jpg?width=720&auto=webp&quality=70"
          alt="pic"
          className="w-[22rem] h-[20rem]"
        />
        </div>
      </div>


      
        <div className="flex flex-row mt-28">
          <div className="w-[55%]">
            <img
              src="https://www.mitsubishicars.com/content/dam/mitsubishi-motors-us/images/siteimages/cars/outlander-phev/my24/safety/2024-mitsubishi-outlander-phev-white-angled-driving.jpg?width=1440&auto=webp&quality=70"
              alt="pic"
              className="w-[100%] h-[100%]"
            />
          </div>
          <div className="w-[45%] text-center">
            <h1 className="font-bold text-3xl mt-24">MI-PILOT ASSIST</h1>
            <p className="p-16 font-sans">
              Alleviate the stress of long-distance driving with available
              MI-PILOT Assist™, an advanced driver-assist system that helps you
              stay centered in your lane. Using cameras and radar, MI-PILOT
              helps adjust your steering input to reduce speed when navigating
              curves and keep pace in stop-and-go traffic, meaning you can enjoy
              longer and more enjoyable drives.
            </p>
          </div>
        </div>
      
    </div>
  );
}
