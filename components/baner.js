import Link from "next/link";

export default function Baner({ title, coverImage, slug }) {
  const image = (
    <img style={{ width: "100%" }} src={coverImage?.sourceUrl} alt={title} />
  );
  return (
    <div
      className="banerWrapper"
      style={{
        backgroundImage: `url(${coverImage.sourceUrl})`,

        backgroundPosition: "center",
      }}
    >
      <div />
      {/* <div className="banerImg">
        {slug ? (
          <Link as={`/posts/${slug}`} href="/posts/[slug]">
            <a aria-label={title}>{image}</a>
          </Link>
        ) : (
          image
        )}
      </div> */}
      {/* <div className="banerTitle">
        <h1>{title}</h1>
      </div> */}
    </div>
  );
}
