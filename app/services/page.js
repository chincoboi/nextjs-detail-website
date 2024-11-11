import Image from "next/image";
import ServicesImage1 from "../../public/14.jpg";
import ServicesImage2 from "../../public/16.jpg";
import ServicesImage3 from "../../public/paul-esch-laurent-YU-OA2TvQRQ-unsplash.jpg";

export default function ServicesPage() {
  return (
    <main className="">
      <section className="sub-header">
        <h1>Our Services</h1>
      </section>

      <section className="services">
        <h1>Services We Offer</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, quaerat?
        </p>

        <div className="row">
          <div className="services-col">
            <h3>Music Production</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
              odit veniam aspernatur, nostrum dignissimos, blanditiis
              consequatur ea perspiciatis dolor at alias facere maxime laborum.
              Nihil doloribus nobis quia debitis animi. Lorem ipsum, dolor sit
              amet consectetur adipisicing elit. Accusamus, esse.
            </p>
          </div>
          <div className="services-col">
            <h3>Sound Set-up</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
              odit veniam aspernatur, nostrum dignissimos, blanditiis
              consequatur ea perspiciatis dolor at alias facere maxime laborum.
              Nihil doloribus nobis quia debitis animi. Lorem ipsum, dolor sit
              amet consectetur adipisicing elit. Accusamus, esse.
            </p>
          </div>
          <div className="services-col">
            <h3>Music Download</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
              odit veniam aspernatur, nostrum dignissimos, blanditiis
              consequatur ea perspiciatis dolor at alias facere maxime laborum.
              Nihil doloribus nobis quia debitis animi. Lorem ipsum, dolor sit
              amet consectetur adipisicing elit. Accusamus, esse.
            </p>
          </div>
        </div>
      </section>

      <section className="equipments">
        <h1>Our Equipments</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias,
          blanditiis!
        </p>

        <div className="row">
          <div className="equipments-col">
            <Image src={ServicesImage1} alt="Excellent Voice Microphone" />
            <h3>Excellent Voice Microphone</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
              officia tenetur iusto rem possimus quia laudantium beatae
              laboriosam quibusdam ab.
            </p>
          </div>
          <div className="equipments-col">
            <Image src={ServicesImage2} alt="Quality Sound HeadPhone" />
            <h3>Quality Sound HeadPhone</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
              officia tenetur iusto rem possimus quia laudantium beatae
              laboriosam quibusdam ab.
            </p>
          </div>
          <div className="equipments-col">
            <Image src={ServicesImage3} alt="Portable Sound Speaker" />
            <h3>Portable Sound Speaker</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
              officia tenetur iusto rem possimus quia laudantium beatae
              laboriosam quibusdam ab.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
