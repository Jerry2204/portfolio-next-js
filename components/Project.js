import ProjectItem from "./ProjectItem";
import SectionTitle from "./SectionTitle";

export default function Project() {
  return (
    <section className="container mx-auto py-28">
      <SectionTitle paragraf="Beberapa project yang pernah saya buat.">
        Projects
      </SectionTitle>
      <div className="flex -mx-4 mt-20 flex-wrap">
        <div className="w-6/12 px-4 pb-8">
          <ProjectItem
            name="Portfolio Website"
            description="Website Portfolio ini dibangun dengan menggunakan HTML, CSS, dan
        Javascript serta menggunakan library aos (animate on scroll)."
            image="/assets/portfolio_website.png"
          />
        </div>
        <div className="w-6/12 px-4 pb-8">
          <ProjectItem
            name="Sistem Informasi BEM IT Del"
            description="Sistem Informasi Badan Eksekutif Mahasiswa IT Del ini dibangun dengan bahasa pemrograman PHP dan menggunakan framework laravel."
            image="/assets/si_bem.png"
          />
        </div>
        <div className="w-6/12 px-4">
          <ProjectItem
            name="Sistem Informasi BEM IT Del"
            description="Sistem Informasi Desa Lintong Nihuta Del ini dibangun dengan bahasa pemrograman PHP dan menggunakan framework laravel."
            image="/assets/lintong_nihuta.png"
          />
        </div>
        <div className="w-6/12 px-4 pb-8">
          <ProjectItem
            name="Portfolio Website"
            description="Website Portfolio ini dibangun dengan menggunakan HTML, CSS, dan
        Javascript serta menggunakan library aos (animate on scroll)."
            image="/assets/Dribbble.png"
          />
        </div>
      </div>
    </section>
  );
}
