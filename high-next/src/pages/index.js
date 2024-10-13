import Head from "next/head";
import Image from "next/image";
import localFont from "next/font/local";
import styles from "@/styles/Home.module.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
    <>
    <head>
      <title>constante</title>
    </head>
    
    <body>
       <header>
         <nav className='navigation'>
             <a href="#" className='logo'>C<span>o</span>nstante Wavess</a>
               <ul className='nav-menu'>
                 <li className='nav-item'><a href="#">Home</a></li>
                 <li className='nav-item'><a href="#">Quem somos</a></li>
                 <li className='nav-item'><a href="#">Feedbacks</a></li>
                 <li className='nav-item'><a href="#">Serviços</a></li>
                 <li className='nav-item'><a href="#">Contatos</a></li>
                 <li className='nav-item'><a href="#">Politica de privacidade</a></li>
                 <div className='nav-back-put'>
                 <li className='nav-put'><input type="search" name="search" id="search" placeholder='   search  '/></li>
               <button className='butum'>
                 <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAd5JREFUSEu11cvLTWEUx/HPGxnIpSiXiZAwcIuSAQpFL2XqUgxIURhQBv4AMiEhDCgk5Q+Q0VsImSAlopTIgFwi9+uz6nl1HO/e5xnssya7zn7O+j5rrd9v7R5djp4u51cHmIB1WInZ+SJ3cAkX8LzkcgMBRuAcVtck+I2L2IRPdaB2wFDcwgx8xUkcxpOcZDJ2YQuG5LOL8L0K0g44iw14hhV4UPHHWbicLjAeB7G7BDAT9/Aj9Xk+ot91sRhX8A2T8GKgw60VHMF2HMWOkgHiPNYnyF7s7wR4jCm5//cLAUvQh2vpGRX9F60VfEQMeRB+FQJGpWpf4w1GdwK8x3AMQ8BKIs5+wCuM6QS4mw01L3ngdkn2pKQFSW03c5uWdQIcSKbZgxPYVgg4kzyyMbUnBLKzE2AqHuJnoUzDYFdz0sqq2412Ktv/KZYnCT6qqGRONtrY7PatJUaLM62r4guO41B2dryPKmNVbMbgnDRmEK6PYdfKtP/lyGygVTVzeJd20b7U0rWYm12/FPH7P1G3ridml/Yids/nrK4bOIa3CB+E0WKdhwpDSeGJv9HEBycg1zEdsQ0W4mU/oQlA5AqThaKm5fmcbhoQ+cal9b4mfz8abVGtJ5tqUSWk64A/OxFWGSrrSC8AAAAASUVORK5CYII=" className='bot'/>
               </button>
                 </div>
              </ul>
              <div className="div-sig-cad">
               <button className='button-log'><a href="#" className="text-button-log">Entre</a></button>
               <button className='button-cad'><a href="#" className="text-button-cad">Cadastre-se</a></button>
          </div>
    
                 <div className='menu'>
                   <span className='bar'></span>
                   <span className='bar'></span>
                   <span className='bar'></span>
                   <span className='bar'></span>
              </div>
         </nav>
       </header>
       <main>
        <section className='home'>
          <div className='home-text'>
            <h4 className='text-h4'>Welcome to Constante Waves</h4>
            <h1 className='text-h1'>Uma onda de inovação</h1>
            <p>Embarque na inovação online para a sua empresa</p>
            <a href="#" className='home-button'>À sua disposição</a>
          </div>

        </section>
       </main>
    
           <footer className='footeer'>
             <div className='footeer-div'>
    <h3 className='footeer-end'>end of site, thanks for coming here</h3>
             </div>
           </footer>
    </body>
    </>
  );
}
