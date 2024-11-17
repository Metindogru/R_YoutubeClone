import { IoIosSearch } from "react-icons/io";
import { FaBell } from "react-icons/fa";
import { IoMdVideocam } from "react-icons/io";
import { MdVideoLibrary } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  //! Navigate kullanılmadan önce kurulum yapılmalıdır.
  //*Navigate kurulum
  const navigate = useNavigate();

  //*Form gönderildiğinde arama sayfasına yönlendir.

  const handleSubmit = (e) => {
    e.preventDefault();

    //*Aratılan kelimeye ulaş
    const text = e.target[0].value;

    //*Kullanıcıyı arana sonuçları sayfasına yönlendir

    navigate(`/results?search_query=${text}`);
  };

  return (
    <header className="flex justify-between items-center px-2 py-4 sm:px-4">
      <Link to={"/"} className="flex items-center gap-2 ">
        <img className="w-10 sm:w-12" src="/youtube.png" />
        <h1 className="text-xl sm:text-2xl font-mono">YouTube</h1>
      </Link>
      <form
        onSubmit={handleSubmit}
        className="flex border border-gray-400 rounded-[20px] overflow-hidden"
      >
        <input
          className="bg-black outline-none px-2 sm:px-5 py-1 sm:py-2  rounded-l-[20px] border border-transparent focus:border-blue-500"
          type="text"
        />

        <button className="px-3 sm:px-4 sm:text-2xl bg-zinc-800 hover:bg-zinc-600 transition duration-300">
          <IoIosSearch />
        </button>
      </form>
      <div className="flex gap-3 text-lg cursor-pointer max-sm:hidden">
        <i>
          <FaBell className="hover:text-gray-400 transition" />
        </i>
        <i>
          <IoMdVideocam className="hover:text-gray-400 transition" />
        </i>
        <i>
          <MdVideoLibrary className="hover:text-gray-400 transition" />
        </i>
      </div>
    </header>
  );
};
export default Header;
