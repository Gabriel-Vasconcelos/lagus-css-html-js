import { Header } from "./Header"
import { Roboto } from 'next/font/google'

const roboto = Roboto({
    subsets: ['latin'],
    weight: ['100', '400', '700'],
})

export const Layout = ( {children}) => {
    return (
        <div className={roboto.className}>
            <Header />

            {children}
        </div>
        
    )
}