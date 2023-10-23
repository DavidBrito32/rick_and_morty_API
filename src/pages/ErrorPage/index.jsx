import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <>
            <h1>Desculpe, essa pagina não existe</h1>

            <Link to="/">Voltar</Link>
        </>
    )
}

export default ErrorPage;