import Avatar from "../components/avatar";
import Date from "../components/date";
import CoverImage from "../components/cover-image";
import Link from "next/link";

export default function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  return (
    <section>
      <Link as={`/posts/${slug}`} href="/posts/[slug]">
        <div
          className="hero-card"
          style={{
            backgroundImage: `url(${coverImage.sourceUrl})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <div>
            {/* <img
            style={{ width: 500 }}
            src={coverImage?.sourceUrl}
            alt={title}
          ></img> */}
            {/* {coverImage && (
            <CoverImage title={title} coverImage={coverImage} slug={slug} />
          )} */}
          </div>
          <div style={{ position: "relative", bottom: "-15%" }}>
            <div className="hero-card-title">
              <h3
                style={{ color: "black", fontWeight: 600 }}
                className="text-2xl mb-1"
              >
                <Link as={`/posts/${slug}`} href="/posts/[slug]">
                  <a
                    className="hover:underline"
                    dangerouslySetInnerHTML={{ __html: title }}
                  />
                </Link>
              </h3>
              {/* <div className="mb-4 md:mb-0 text-lg">
              <Date dateString={date} />
            </div> */}
            </div>
            <div>
              <div
                className="text-lg leading-relaxed mb-4"
                dangerouslySetInnerHTML={{ __html: excerpt }}
              />
              <Avatar author={author} />
            </div>
          </div>
        </div>
      </Link>
    </section>
  );
}
