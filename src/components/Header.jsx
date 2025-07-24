export default function Header() {
    return (
        <header>
            <h1 className="text-center my-3">AZIENDA CINESE CHE SFRUTTA I BAMBINI PER FARE VESTITI</h1>
            <ul className="nav justify-content-between my-3">
                <li className="nav-item">
                    <a className="nav-link link-underline link-underline-opacity-0 text-dark" href="/" aria-current="page">Homepage</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link link-underline link-underline-opacity-0 text-dark" href="/products">Prodotti</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link link-underline link-underline-opacity-0 text-dark" href="/about">Chi Siamo</a>
                </li>
            </ul>
        </header>

    )
}