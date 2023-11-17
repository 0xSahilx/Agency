import monitor from "../assets/image/monitor.png";
import mobile from "../assets/image/mobile.png";
import ux from "../assets/image/ux.png";

const Services = () => {
  return (
    <div className="bg-[#0B1926] w-full h-[85vh] ">
      <div className="max-w-[1040px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-20">
          {/* Service 1 */}
          <div className="text-center flex flex-col items-center">
            <div className="rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 w-[100px] h-[100px] flex items-center justify-center">
              <img src={monitor} alt="Monitor Icon" />
            </div>
            <div className="mt-3 text-white">
              <div className="text-[#01F38D] font-darker-grotesque text-2xl font-black">
                Web Design
              </div>
              <div className="font-normal text-sm leading-6 p-1">
                Crafting websites that convert and grow your business
              </div>
            </div>
          </div>

          {/* Service 2 */}
          <div className="text-center flex flex-col items-center">
            <div className="rounded-full bg-[#003128] w-[100px] h-[100px] flex items-center justify-center">
              <img src={mobile} alt="Mobile Icon" />
            </div>
            <div className="mt-3 text-white">
              <div className="text-[#01F38D] font-darker-grotesque text-2xl font-black">
                App Design
              </div>
              <div className="font-normal text-sm leading-6 p-1">
                Beautifully designed apps that your users will love to use
              </div>
            </div>
          </div>

          {/* Service 3 */}
          <div className="text-center flex flex-col items-center">
            <div className="rounded-full bg-[#003128] w-[100px] h-[100px] flex items-center justify-center">
              <img src={ux} alt="UX Icon" />
            </div>
            <div className="mt-3 text-white">
              <div className="text-[#01F38D] font-darker-grotesque text-2xl font-black">
                UX Audit
              </div>
              <div className="font-normal text-sm leading-6 p-1">
                Get a detailed UX report on your marketing website
              </div>
            </div>
          </div>
          {/* {service 4} */}
          <div className="text-center flex flex-col items-center">
            <div className="rounded-full bg-[#003128] w-[100px] h-[100px] flex items-center justify-center">
              <img src={ux} alt="UX Icon" />
            </div>
            <div className="mt-3 text-white">
              <div className="text-[#01F38D] font-darker-grotesque text-2xl font-black">
                SEO
              </div>
              <div className="font-normal text-sm leading-6 p-1">
                Get a detailed UX report on your marketing website
              </div>
            </div>
          </div>
          {/* {service 5} */}
          <div className="text-center flex flex-col items-center">
            <div className="rounded-full bg-[#003128] w-[100px] h-[100px] flex items-center justify-center">
              <img src={ux} alt="UX Icon" />
            </div>
            <div className="mt-3 text-white">
              <div className="text-[#01F38D] font-darker-grotesque text-2xl font-black">
                Content Creators
              </div>
              <div className="font-normal text-sm leading-6 p-1">
                Get a detailed UX report on your marketing website
              </div>
            </div>
          </div>
          {/* {service 6} */}
          <div className="text-center flex flex-col items-center">
            <div className="rounded-full bg-[#003128] w-[100px] h-[100px] flex items-center justify-center">
              <img src={ux} alt="UX Icon" />
            </div>
            <div className="mt-3 text-white">
              <div className="text-[#01F38D] font-darker-grotesque text-2xl font-black">
                Video Editing
              </div>
              <div className="font-normal text-sm leading-6 p-1">
                Get a detailed UX report on your marketing website
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
