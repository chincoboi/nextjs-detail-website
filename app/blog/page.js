import Image from "next/image";
import blogImage1 from "../../public/3.jpg";
import ServicesImage2 from "../../public/16.jpg";
import ServicesImage3 from "../../public/paul-esch-laurent-YU-OA2TvQRQ-unsplash.jpg";

export default function BlogPage() {
  return (
    <main className="">
      <section className="sub-header">
        <h1>Our Job & Events for 2024</h1>
      </section>

      <section className="blog-content">
        <div className="row">
          <div className="blog-left">
            <Image src={blogImage1} alt="Jobs and Events" />
            <h2>Our Job & Events for 2024</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad
              pariatur provident commodi, cumque tempora totam sint ducimus
              sapiente magnam, fugit molestiae iste quaerat porro beatae rem
              quo. Aperiam, quibusdam illum. Corporis, hic! Accusantium,
              voluptatibus illo. Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Perspiciatis, minima! Lorem ipsum, dolor sit
              amet consectetur adipisicing elit. Cum, mollitia.
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus rem
              nisi nulla officiis facere necessitatibus numquam modi labore?
              Perferendis, qui excepturi. Molestias eum nemo tempora quae
              nesciunt, atque eius sequi at fugit nam sunt dignissimos totam
              perferendis, labore maiores. Atque modi illum aut asperiores eos
              magnam libero distinctio at molestias. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Doloribus adipisci magni quasi?
              Doloribus soluta ratione vero sint aut eaque ipsam aliquam
              repellat fugit impedit dolor autem, repudiandae, quaerat
              consequatur nobis! Lorem ipsum dolor sit amet. Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Itaque, dolorum?
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi
              perferendis quae veritatis nobis repellendus eligendi, doloremque
              similique, ipsam, consectetur natus asperiores. Quisquam cum quae
              reiciendis recusandae est similique dolores dolorum earum commodi,
              tenetur voluptatibus ipsa pariatur a minus neque, provident odit
              officiis saepe non inventore voluptas ullam fuga aliquid. Atque,
              voluptatem! At dolor aut officia repudiandae ratione harum
              molestias eligendi fugit dicta ullam eos, vero cum quis minima,
              error accusantium. At aspernatur alias dolore molestias. Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Praesentium,
              error.
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
              consequatur, adipisci sapiente eius quaerat mollitia vero modi.
              Quae reprehenderit, deserunt eveniet corporis a repellendus
              accusantium! Laudantium totam fugiat esse sunt natus, minus
              aperiam soluta rerum architecto dicta quisquam vitae asperiores
              ipsum possimus error perspiciatis tempore ipsam ut! Aliquam, ab, a
              aspernatur eius eveniet hic libero modi quia rem, quisquam
              sapiente ex et! Aliquam rerum nobis ducimus iste quae, itaque
              libero dignissimos commodi omnis laborum voluptates cupiditate
              aspernatur ad sequi illum laudantium incidunt eos modi. Quod
              itaque rem voluptates aperiam quos!
            </p>

            <div className="comment-box">
              <h3>Leave a comment</h3>

              <form className="comment-form">
                <input type="text" placeholder="Enter Name" />
                <input type="email" placeholder="Enter Email" />
                <textarea
                  rows="5"
                  placeholder="Your comment"
                  style={{ resize: 'none' }}
                ></textarea>
                <button type="submit" className="hero-btn red-btn">
                  POST COMMENT
                </button>
              </form>
            </div>
          </div>
          <div className="blog-right">
            <h3>Post Categories</h3>
            <div>
              <span>Audio</span>
              <span>23</span>
            </div>
            <div>
              <span>Video</span>
              <span>30</span>
            </div>
            <div>
              <span>Sermon</span>
              <span>35</span>
            </div>
            <div>
              <span>Devotional</span>
              <span>45</span>
            </div>
            <div>
              <span>Books</span>
              <span>50</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
