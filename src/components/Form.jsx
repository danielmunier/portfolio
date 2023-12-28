import "../styles/components/Form.sass"

const Form = () => {
    return (
        <section id="contact">
            <div className="title">
                <h1>
                    Contact
                </h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi minus veniam sapiente rem voluptatibus culpa. Soluta vero consequatur, quaerat similique a consectetur neque laboriosam voluptates beatae inventore quae fugiat? Eaque.</p>
            </div>
            <div className="form">
                <form action="#" method="post">
                    <input required placeholder="Nome" type="text" name="name" id="" />
                    <input required placeholder="Email" type="email" name="email" id="" />
                    <textarea required cols="30" rows="10" placeholder="Mensagem" type="text" name="message" id="" />
                    <button type="submit">Enviar</button>
                </form>

            </div>
        </section>
    )
}


export default Form