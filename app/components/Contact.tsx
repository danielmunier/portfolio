const Contact = () => {
    return (
        <div className="max-w-4xl mx-auto p-6 bg-component rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-100 mb-4 text-center">
                Entre em Contato
            </h2>
            <p className="text-gray-400 text-center mb-6">
                Estou disponível para colaborações e oportunidades. Entre em contato pelos links abaixo:
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-6">
                <a
                    href="mailto:idanielmunier@gmail.com"
                    className="flex items-center gap-2 text-gray-400 hover:text-blue-500 transition-colors"
                    aria-label="Enviar e-mail"
                >
                    <span className="text-xl">📧</span>
                    <span>idanielmunier@gmail.com</span>
                </a>
                <a
                    href="https://linkedin.com/in/daniel-munier"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-blue-500 transition-colors"
                    aria-label="Perfil no LinkedIn"
                >
                    <span className="text-xl">🔗</span>
                    <span>linkedin.com/in/daniel-munier</span>
                </a>

                <a
                    href="tel:+5511999999999"
                    className="flex items-center gap-2 text-gray-400 hover:text-blue-500 transition-colors"
                    aria-label="Ligar para mim"
                >
                </a>
            </div>
        </div>
    );
};

export default Contact;