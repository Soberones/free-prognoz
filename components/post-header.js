import Avatar from "../components/avatar";
import Date from "../components/date";
import CoverImage from "../components/cover-image";
import PostTitle from "../components/post-title";
import Categories from "../components/categories";
import Baner from "../components/baner";

export default function PostHeader({
  title,
  coverImage,
  date,
  author,
  categories,
}) {
  return (
    <>
      <Baner title={title} coverImage={coverImage} />
      {/* <PostTitle>{title}</PostTitle> */}
      {/* <div className="hidden md:block md:mb-12">
        <Avatar author={author} />
      </div> */}
      {/* <div className="container">
        <CoverImage title={title} coverImage={coverImage} />
      </div> */}
      <div className="max-w-2xl mx-auto">
        <div className="block md:hidden mb-6">
          <Avatar author={author} />
        </div>
        <div className="mb-6 text-lg">
          Опубликовано <Date dateString={date} />
          <Categories categories={categories} />
        </div>
      </div>
    </>
  );
}
