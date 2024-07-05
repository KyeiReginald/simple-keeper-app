function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="fixed bottom-0 left-0 z-20 bg-gray-100 w-full mx-auto max-w-screen-xl p-4 flex items-center justify-center">
      <div className="">
        <p className="text-sm text-gray-400 ">Copyright © {year}</p>
      </div>
    </footer>
  );
}
export default Footer;
