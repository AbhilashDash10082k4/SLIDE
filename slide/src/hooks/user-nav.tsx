// It returns the current pathname of the URL as a string.
import { usePathname } from "next/navigation";

export const usePath = () => {
    //This fetches the current pathname
    const pathName = usePathname();

    //The pathname string is split by / into an array of segments.
    //For example, "/blog/post-1" becomes ["", "blog", "post-1"].
    //path === last segment of url
    const path = pathName.split('/');
    let page = path[path.length-1];

    //pathName === entire path name
    return {page, pathName}
}