import "../styles/components/Form.sass"
import SocialNetworks from "./SocialNetworks"
const Form = () => {
    return (
        <section id="contact">
            <div className="title">
                <h1>
                    Entre em contato!
                </h1>
                <p>Envie um email para <a href="mailto:idanielmunier@gmail.com">idanielmunier@gmail.com</a> ou entre em contato por outras plataformas</p>
                    <SocialNetworks flexDirection="flex-row" color="#7159C1"/>
            </div>
            <div className="form">
                <form action="#" method="post">
                    <input required placeholder="Nome" type="text" name="name" id="" />
                    <input required placeholder="Email" type="email" name="email" id="" />
                    <textarea required cols="30" rows="10" placeholder="Mensagem" type="text" name="message" id="" />
                    <button className="form-button" type="submit">Enviar</button>
                </form>

            </div>
        </section>
    )
}


export default Form