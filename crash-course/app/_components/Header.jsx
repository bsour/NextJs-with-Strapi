import Link from "next/link";
import SearchBar from "./SearchBar";

const Header = ({}) => {
  return (
    <div>
      <h3>Header</h3>
      <Link href="/">Homepage</Link>
      <Link href="/blog">Blog</Link>

    </div>
  );
};

export default Header;
