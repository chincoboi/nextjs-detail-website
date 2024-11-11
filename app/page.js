import Image from "next/image";
import micImage from "../public/14.jpg";
import headphoneImage from "../public/16.jpg";
import speakerImage from "../public/paul-esch-laurent-YU-OA2TvQRQ-unsplash.jpg";
import richardImage from "../public/rich.jpg";
import danielImage from "../public/rich1.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';

export default function HomePage() {
  return (
    <main>
      <div className="text-box">
        <div className="texts">
          <h1>PLACE OF WORSHIP</h1>
          <p>
            Listening to Great Sounds is different when it's Spirit-filled and
            from the <br />
            <strong>Arena of Worship</strong>
          </p>
          <a href="#" className="hero-btn">
            Stick Around to Know More
          </a>
        </div>
      </div>

      <section className="services">
        <h1>Services We Offer</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
        <div className="row">
          <ServiceCard
            title="Music Production"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta odit veniam aspernatur, nostrum dignissimos, blanditiis consequatur ea perspiciatis dolor at alias facere maxime laborum.."
          />
          <ServiceCard
            title="Sound Set-up"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta odit veniam aspernatur, nostrum dignissimos, blanditiis consequatur ea perspiciatis dolor at alias facere maxime laborum.."
          />
          <ServiceCard
            title="Music Download"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta odit veniam aspernatur, nostrum dignissimos, blanditiis consequatur ea perspiciatis dolor at alias facere maxime laborum.."
          />
        </div>
      </section>

      <section className="offices">
        <h1>Our Offices</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, illo!</p>
        <div className="row">
          <OfficeCard city="ABUJA" imageSrc={micImage} />
          <OfficeCard city="NEW YORK" imageSrc={headphoneImage} />
          <OfficeCard city="MANCHESTER" imageSrc={speakerImage} />
        </div>
      </section>

      <section className="equipments">
        <h1>Our Equipments</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, blanditiis!</p>
        <div className="row">
          <EquipmentCard
            title="Excellent Voice Microphone"
            imageSrc={micImage}
          />
          <EquipmentCard
            title="Quality Sound Headphone"
            imageSrc={headphoneImage}
          />
          <EquipmentCard
            title="Portable Sound Speaker"
            imageSrc={speakerImage}
          />
        </div>
      </section>

      <section className="testimonials">
        <h1>What Our Client Says</h1>
        <p>Lorem ipsum dolor sit amet...</p>
        <div className="row">
          <TestimonialCard
            name="Richard Damilola"
            rating={4.5}
            imageSrc={richardImage}
          />
          <TestimonialCard
            name="Damilola Daniel"
            rating={4}
            imageSrc={danielImage}
          />
        </div>
      </section>

      <section className="cta">
        <h1>
          Enroll For Our Various Services
          <br />
          Anywhere From The World
        </h1>
        <a href="#" className="hero-btn">
          CONTACT US
        </a>
      </section>
    </main>
  );
}

const ServiceCard = ({ title, description }) => (
  <div className="services-col">
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

const OfficeCard = ({ city, imageSrc }) => (
  <div className="offices-col">
    <Image src={imageSrc} alt={city} />
    <div className="layer">
      <h3>{city}</h3>
    </div>
  </div>
);

const EquipmentCard = ({ title, imageSrc }) => (
  <div className="equipments-col">
    <Image src={imageSrc} alt={title} />
    <h3>{title}</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque officia tenetur iusto rem possimus quia laudantium beatae laboriosam quibusdam ab.</p>
  </div>
);

const TestimonialCard = ({ name, rating, imageSrc }) => (
  <div className="testimonial-col">
    <Image src={imageSrc} alt={name} />
    <div>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid dolorum a fugiat nesciunt veniam, eius at? Commodi id doloremque laborum autem nobis aut mollitia quis. Eius corrupti in eos asperiores? Lorem ipsum dolor sit amet.</p>
      <h3>{name}</h3>
      {[...Array(Math.floor(rating))].map((_, i) => (
        <FontAwesomeIcon key={i} className="fa" icon={faStar} />
      ))}
      {rating % 1 !== 0 && <FontAwesomeIcon icon={faStarHalfAlt} className="fa" />}
    </div>
  </div>
);
