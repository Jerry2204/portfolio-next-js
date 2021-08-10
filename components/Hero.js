import Button from "./Button";
import Navbar from "./Navbar";

export default function Hero() {
  return (
    <div className="bg-hero h-[650px]">
      <div className="container mx-auto">
        <Navbar />
        <div className="text-center mt-24">
          <h1 className="text-3xl font-semibold font-mono text-white mb-8">
            Jerry Andrianto Pangaribuan
          </h1>
          <h1 className="text-3xl font-semibold font-mono text-white w-8/12 mx-auto mb-5 leading-relaxed">
            Saya seorang Mahasiswa Program Studi D4 Teknologi Rekayasa Perangkat
            Lunak
          </h1>
          <p className="text-white text-opacity-60 w-5/12 mx-auto leading-relaxed">
            Tertarik dengan Web Development, Mobile Development, dan UI/UX
            Design
          </p>
          <Button variant="yellow" className="mt-10">
            Pelajari
          </Button>
        </div>
      </div>
    </div>
  );
}
