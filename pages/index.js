import Hero from "../components/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <section>
        <div className="container mx-auto py-28">
          <h2 className="text-2xl font-semibold font-mono text-center">
            Profile
          </h2>
          <p className="text-center text-gray-500">
            Mengenal saya secara singkat
          </p>
          <div className="flex items-center mt-10 w-9/12 mx-auto">
            <div className="w-5/12 p-10">
              <img
                src="/assets/Foto.png"
                alt="Jerry Andrianto Pangaribuan"
                className="w-full"
              />
            </div>
            <div className="w-7/12 p-10 text-justify">
              <p className="leading-relaxed">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta
                minima dolorum expedita, eos ratione, blanditiis quam porro
                nostrum, tempore perferendis nulla. Et dolore explicabo
                praesentium possimus ea consequatur sequi eveniet odio eos quod
                deserunt omnis corrupti aspernatur fugiat, cum, tempore quas
                nemo sed quam. Magnam quod culpa similique modi cupiditate!
              </p>
              <p className="mt-4 leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis quasi amet inventore ipsum, alias consectetur
                delectus praesentium temporibus laboriosam quas earum iste. Eum
                ipsum, dolores, libero accusantium ipsam quisquam aliquam a
                doloremque, sed perferendis molestias maxime temporibus labore
                odio fugit quas placeat pariatur quasi in! Facilis nesciunt
                optio accusamus iste!
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
