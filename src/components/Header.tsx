function Header() {
  return (
    <nav className="py-2 px-6 dark:bg-yellow-500 fixed w-full z-20 top-0 start-0 shadow-xl">
      <div className=" flex items-center">
        <img src="./src/assets/post-it.png" alt="note" width={40} />
        <p className="text-3xl font-custom font-bold mx-2">Keeper</p>
      </div>
    </nav>
  );
}
export default Header;
