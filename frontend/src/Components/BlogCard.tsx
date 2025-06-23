import { Link } from "react-router-dom";

export interface BlogCardProps {
  id?: number;
  authorName: string;
  titile: string;
  content: string;
  publishedDate: string;
}
export const BlogCard = ({
  id,
  authorName,
  titile,
  content,
  publishedDate,
}: BlogCardProps) => {
  return (
    <Link to={`/blog/${id}`}>
    <div className="border-b border-slate-200 pb-4 px-4 w-screen max-w-screen-md mt-4 cursor-pointer">
      <div className="flex">
        <div className="flex justify-center flex">
          <Avatar authorName={authorName[0].toUpperCase()} />
        </div>
        <div className="font-extralight text-md flex justify-center flex-col">
          {authorName}
        </div>
        <div className="flex justify-center flex-col pl-2">
          <Circle />
        </div>
        <div className="pl-2 font-thin text-slate-400 text-sm flex justify-center flex-col">
          {" "}
          {publishedDate}
        </div>
      </div>
      <div className="text-2xl font-semibold pt-2">{titile}</div>
      <div className="text-md font-thin">{content.slice(0, 100) + ".."}</div>
      <div className="text-slate-500 text-sm font-thin pt-4">{`${Math.ceil(
        content.length / 100
      )} minutes read`}</div>
    </div>
    </Link>
  );
};
export function Circle() {
  return <div className="w-2 h-2 rounded-full bg-slate-500"></div>;
}
export function Avatar({
  authorName,
  size = "small",
}: {
  authorName: string;
  size?: string;
}) {
  return (
    <div
      className={`relative inline-flex items-center justify-center overflow-hidden bg-gray-100 mt-1 mr-2 rounded-full dark:bg-gray-600 ${
        size === "small" ? "w-6 h-6" : "w-10 h-10"
      }`}
    >
      <span
        className={`${
          size === "small" ? "text-xs" : "text-lg"
        } text-gray-600 pb-1 dark:text-gray-300`}>
        {authorName}
      </span>
    </div>
  );
}
