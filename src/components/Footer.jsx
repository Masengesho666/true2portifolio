const Footer = () => {
    const currentYear = new Date () .getFullYear();
  return (
    <footer className="bg-gray-800 text-white flex flex-col gap-2 
    items-center justify-center h-[100px] rounded-tl-[30%] rounded-tr-[30%] z-0">
        <p className="font-bold"> Cadeau MASENGESHO</p>
        <p>&copy; All rights reserved {currentYear}</p>

    </footer>
  )
}

export default Footer;