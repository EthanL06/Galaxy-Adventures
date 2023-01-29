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

  // Capitalize the first letter of each breadcrumb
  pathArray.forEach((path) => {
    path.breadcrumb =
      path.breadcrumb.charAt(0).toUpperCase() + path.breadcrumb.slice(1);
  });

  console.log(pathArray);

  return (
    <div className="mb-4 flex gap-x-2">
      {pathArray.map((path, index) => {
        return (
          <div className="flex gap-x-2 font-medium" key={index}>
            <Link href={path.href} legacyBehavior>
              <a className="text-gray-400">{path.breadcrumb}</a>
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
