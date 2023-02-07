import Link from "next/link";
import { useRouter } from "next/router";
type Props = {};

const Breadcrumbs = (props: Props) => {
  const router = useRouter();

  // Get the current route
  const linkPath = router.asPath.split("/");

  // Remove the first empty string
  linkPath.shift();

  const pathArray = linkPath.map((path, i) => {
    return { breadcrumb: path, href: "/" + linkPath.slice(0, i + 1).join("/") };
  });

  // Add home to the beginning of the array
  pathArray.unshift({ breadcrumb: "home", href: "/" });

  // Capitalize the first letter of each word in the breadcrumb
  pathArray.forEach((path) => {
    path.breadcrumb = path.breadcrumb
      .split("%20")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  });

  // Remove hashtag from the last breadcrumb
  pathArray[pathArray.length - 1].breadcrumb =
    pathArray[pathArray.length - 1].breadcrumb.split("#")[0];

  return (
    <div className="mb-4 flex gap-x-2">
      {pathArray.map((path, index) => {
        return (
          <div
            className="flex gap-x-2 font-medium prose-a:no-underline "
            key={index}
          >
            <Link href={path.href} legacyBehavior>
              <a className="text-gray-400 transition-colors hover:text-white">
                {path.breadcrumb}
              </a>
            </Link>

            {index !== pathArray.length - 1 && (
              <span className="text-gray-400">/</span>
            )}
          </div>
        );
      })}
    </div>
  );
};
export default Breadcrumbs;
