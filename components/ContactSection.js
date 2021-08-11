import Button from "./Button";
import ContactItem from "./ContactItem";
import Field from "./Field";
import SectionTitle from "./SectionTitle";

export default function ContactSection() {
  return (
    <section className="bg-skill py-28" id="contact">
      <div className="container mx-auto">
        <SectionTitle paragraf="Beberapa cara menghubungi saya">
          Contact
        </SectionTitle>
        <div className="md:flex mt-10">
          <div
            className="md:w-6/12 md:border-r border-gray-300"
            data-aos="fade-down"
            data-aos-delay="200"
          >
            <div className="sm:p-16 p-10">
              <ContactItem
                label="Mail"
                value="jerryandrianto22@gmail.com"
                icon="/assets/mail.svg"
              />
              <ContactItem
                label="Phone"
                value="082276858074"
                icon="/assets/phone.svg"
                className="mt-6"
              />
              <ContactItem
                label="Instagram"
                value="jerryandriantopunkrib"
                icon="/assets/insta.svg"
                className="mt-6"
              />
              <ContactItem
                label="Linkedin"
                value="Jerry Andrianto Pangaribuan"
                icon="/assets/linkedin.svg"
                className="mt-6"
              />
            </div>
          </div>
          <div className="md:w-6/12" data-aos="fade-down" data-aos-delay="200">
            <div className="sm:p-16 p-10">
              <form>
                <div className="flex -mx-4">
                  <div className="w-6/12 px-4">
                    <Field label="Nama" name="Nama" type="text" />
                  </div>
                  <div className="w-6/12 px-4">
                    <Field label="Email" name="Email" type="email" />
                  </div>
                </div>
                <Field label="Subject" name="Subject" type="text" />
                <Field label="Message" name="Message" type="textarea" />
                <div className="text-right">
                  <Button
                    variant="blue"
                    className="rounded shadow-lg hover:shadow-none"
                  >
                    Kirim
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
