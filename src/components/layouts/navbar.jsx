import logo from "../../assets/logo-react.png"

function NavBar() {
    return (
      <header className="bg-[#000062] p-2">
        <div className="flex justify-center items-center gap-3">
          <img src={logo} alt="Logo UBSI Crack" className="w-14" />
          <h2 className="text-white font-semibold text-2xl">UBSI CRACK</h2>
        </div>
      </header>
    )
}

export default NavBar