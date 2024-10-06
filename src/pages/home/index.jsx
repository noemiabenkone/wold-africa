import "./style.css"
import {useNavigate} from "react-router-dom"


export default function Home(){

    const navigate = useNavigate()

    function lindandoComClick(){
        navigate("/lista/pais")


    }
    return(
        <main className="container">
            <header className="content">
                <h1 className="content-text">welcome back</h1>
                <hr/>
            </header>
                <section className="content-cria">
                    <p className="cria-text">ACESSE A SUA CONTA</p>
                    <button onClick={lindandoComClick}>REGISTRE-SE</button>
                </section>
        </main>                
    )
}