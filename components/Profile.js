import SectionTitle from "./SectionTitle";

export default function Profile() {
  return (
    <section id="profile">
      <div className="container mx-auto py-28">
        <SectionTitle paragraf="Mengenal saya secara singkat">
          Profile
        </SectionTitle>
        <div className="sm:flex lg:items-center md:items-start mt-10 xl:w-9/12 mx-auto">
          <div className="sm:w-5/12 w-7/12 mx-auto md:p-10 p-3">
            <img
              src="/assets/Foto.png"
              alt="Jerry Andrianto Pangaribuan"
              className="w-full"
              data-aos="fade-right"
              data-aos-delay="200"
            />
          </div>
          <div
            className="sm:w-7/12 p-10 text-justify"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <p className="leading-relaxed">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta
              minima dolorum expedita, eos ratione, blanditiis quam porro
              nostrum, tempore perferendis nulla. Et dolore explicabo
              praesentium possimus ea consequatur sequi eveniet odio eos quod
              deserunt omnis corrupti aspernatur fugiat, cum, tempore quas nemo
              sed quam. Magnam quod culpa similique modi cupiditate!
            </p>
            <p className="mt-4 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis quasi amet inventore ipsum, alias consectetur delectus
              praesentium temporibus laboriosam quas earum iste. Eum ipsum,
              dolores, libero accusantium ipsam quisquam aliquam a doloremque,
              sed perferendis molestias maxime temporibus labore odio fugit quas
              placeat pariatur quasi in! Facilis nesciunt optio accusamus iste!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
