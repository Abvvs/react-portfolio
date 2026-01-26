const navLinks =[
    {href: "#about", label:"About"},
    {href: "#projects", label:"Projects"},
    {href: "#experience", label:"Experience"},
    {href: "#contact", label:"Contact"},
]
const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 bg-transparent py-5 right-0">
        <nav className="container mx-auto px-6 flex items-center justify-between ">
            <a href="#" className="text-xl font-bold tracking-tight hover:text-primary">ABVVS<span className="text-primary">.</span></a>
            {/* Desktop Nav */}
            <div>
                <div>
                    {navLinks.map((link, index) =>(
                        <a href={link.href} key={index}>{link.label}</a>
                    ))}
                </div>
            </div>
        </nav>
    </header>
  )
}

export default Navbar