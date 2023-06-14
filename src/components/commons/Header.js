import Link from "next/link"

export const Header = () => {
   return (
        <header className="bg-background-secondary flex justify-between items-center py-3 px-4">
            <button>
                <img 
                    src="/IconMenu.svg" 
                    alt="icone de menu"
                    width="20px"
                />
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

        </header>
   )
}