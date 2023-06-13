import Link from "next/link"

export const Header = () => {
   return (
        <header>
            <button>
                <img src="/IconMenu.svg" alt="icone de menu"/>
            </button>

            <Link href="/">
                <img src="/LogoLagus.svg" alt="logo de lagus_"/>
            </Link>
            
            <div>
                <Link href="#">
                    <img src="/IconPerson.svg" alt="icone de perfil"/>
                </Link>

                <Link href="/">
                    <img src="/IconCart.svg" alt="icone de carro de compra" />
                </Link>
            </div>

        </header>
   )
}