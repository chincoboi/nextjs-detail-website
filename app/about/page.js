import Image from "next/image";
import aboutImage from "../../public/4.jpg";

export default function AboutPage() {
  return (
    <main className="about">
      <section className="sub-header">
        <h1>About Us</h1>
      </section>
      <section className="about-us">
        <div className="row">
          <div className="about-col">
            <h1>We are the World's Largest Music Brand</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque
              tenetur impedit cum voluptatibus, aspernatur laboriosam quam eius
              enim, recusandae perspiciatis quasi alias neque non! Sunt id non
              aut similique quasi libero impedit nihil voluptate ipsum unde
              maxime explicabo numquam, illo ex, laudantium eligendi quam velit,
              quod ipsa eos praesentium voluptatibus. Sapiente molestias
              consequuntur excepturi rerum!
            </p>
            <a href="" className="hero-btn red-btn">
              EXPLORE NOW
            </a>
          </div>
          <div className="about-col">
            <Image src={aboutImage} alt="hbdzacjdk" />
          </div>
        </div>
      </section>
    </main>
  );
}
