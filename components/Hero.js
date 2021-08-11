import Button from "./Button";
import Navbar from "./Navbar";

export default function Hero() {
  return (
    <div className="bg-hero 2xl:h-[700px] xl:h-[650px] lg:h-[600px] md:h-[500px]">
      <div className="container mx-auto px-10">
        <Navbar />
        <div className="text-center xl:mt-24 lg:mt-10">
          <h1
            className="text-3xl font-semibold font-mono 2xl:w-6/12 lg:w-10/12 mx-auto leading-relaxed text-white lg:mb-8 mb-2"
            data-aos="fade-down"
            data-aos-delay="200"
          >
            Jerry Andrianto Pangaribuan
          </h1>
          <h1
            className="text-3xl font-semibold font-mono 2xl:w-6/12 lg:w-10/12 text-white xl:w-8/12 w-12/12 mx-auto lg:mb-5 mb-3 leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Saya seorang Mahasiswa Program Studi D4 Teknologi Rekayasa Perangkat
            Lunak
          </h1>
          <p
            className="text-white text-opacity-60 2xl:w-3/12 w-8/12 lg:w-6/12 mx-auto leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Tertarik dengan Web Development, Mobile Development, dan UI/UX
            Design
          </p>
          <Button
            href="#profile"
            variant="yellow"
            className="mt-10 shadow-xl hover:shadow-none"
            pill
            dataAos="zoom-in"
          >
            Pelajari
          </Button>
        </div>
      </div>
    </div>
  );
}
