import Link from "next/link"
import { useState } from "react"

export const Header = () => {
   const [clicked, setClicked] = useState(0)

   

    return (
        <header className="bg-background-secondary">
            <div className="mx-auto max-w-5xl flex justify-between items-center py-3 px-4"> 
                <button className="lg:hidden">
                    <img 
                        src="/IconMenu.svg" 
                        alt="icone de menu"
                        width="20px"
                    />

                </button>

                <button 
                    className="hidden lg:inline text-center font-normal text-base border rounded py-1 px-6 hover:bg-white hover:text-background-secondary hover:transition-colors duration-200" 
                    onClick={() => setClicked(clicked + 1)}
                >
                    clicked {clicked} times
                </button>

                <Link href="/">
                    <img 
                        src="/LogoLagus.svg" 
                        alt="logo de lagus_"
                        width="118px"
                        height="48px"
                    />
                </Link>
                
                <div className="flex gap-x-4">
                    <Link href="#">
                        <img 
                            src="/IconPerson.svg" 
                            alt="icone de perfil"
                            width="18px"
                        />
                    </Link>

                    <Link href="/">
                        <img 
                            src="/IconCart.svg" 
                            alt="icone de carro de compra" 
                            width="24px"
                        />
                    </Link>
                </div>

            </div>

        </header>
   )
}