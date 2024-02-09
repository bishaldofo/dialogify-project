import Image from "next/image";
import { ImArrowUp, ImArrowDown } from "react-icons/im";
import { TfiCommentAlt } from "react-icons/tfi";
import { getAllPosts } from "@/utils/getAllPosts";
import Link from "next/link";

export default async function Content() {
  let posts = await getAllPosts();
  console.log(posts);

  // Sort posts by date in descending order
  posts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  // posts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  const renderDescription = (description) => {
    const maxCharacters = 150;
    if (description.length > maxCharacters) {
      return (
        <>
          {`${description.slice(0, maxCharacters)}... `}

            <a className="btn btn-link">Read More</a>

        </>
      );
    } else {
      return description;
    }
  };

  const formatTime = (createdAt) => {
    const date = new Date(createdAt);
    const currentTime = new Date();
    const timeDifference = Math.abs(currentTime - date);

    const seconds = Math.floor(timeDifference / 1000);
    if (seconds < 60) {
      return `${seconds} second${seconds === 1 ? '' : 's'} ago`;
    }

    const minutes = Math.floor(timeDifference / (1000 * 60));
    if (minutes < 60) {
      return `${minutes} minute${minutes === 1 ? '' : 's'} ago`;
    }

    const hours = Math.floor(timeDifference / (1000 * 60 * 60));
    if (hours < 24) {
      return `${hours} hour${hours === 1 ? '' : 's'} ago`;
    }

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    if (days < 365) {
      return `${days} day${days === 1 ? '' : 's'} ago`;
    }

    const years = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 365));
    return `${years} year${years === 1 ? '' : 's'} ago`;
  };


  return (
    <div className="space-y-5">
      {posts.map((post) => (
        <div key={post._id} className="card w-full bg-base-100 rounded-sm shadow-xl">
          <div className="card-body p-3">
            <div className="flex items-center gap-2">
              <div className="w-10 rounded-full">
                <Image
                  width={100}
                  height={100}
                  className="rounded-full"
                  alt="Tailwind CSS Navbar component"
                  src={post?.profileImage}
                />
              </div>
              <div>
                <p className="text-sm font-bold"><Link href="/profile">{post?.name}</Link></p>
              </div>
              <div>
                <small>
                  {formatTime(post?.createdAt)}
                </small>
              </div>
            </div>
            <h2 className="card-title">{post?.title}</h2>
            <p className="text-sm">{renderDescription(post?.description)}</p>
          </div>
          <figure>
            <Image width={600} className="w-full" height={600} src={post?.image} alt="News" />
          </figure>
          <div className="flex items-center">
            <div className="flex items-center p-1 m-2 shadow-sm border-gray-100 bg-gray-100 rounded gap-2">
              <button className="btn py-0 flex items-center gap-2 bg-transparent">
                <ImArrowUp />
                Likes 10
              </button>
              |
              <button className="btn py-0 bg-transparent border-0" title="Dislike">
                <ImArrowDown />
              </button>
            </div>
            <div>
              <button className="btn bg-transparent border-0">
                <TfiCommentAlt />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
