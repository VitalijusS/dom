
export function header(a = false) {
    a ? a = '.' : a = '..';

    const HTML = `    
    <header>
        <nav>
            <a href="${a}/index.html">home</a>
            <a href="${a}/about-us/">about us</a>
            <a href="${a}/products/">products</a>
            <a href="${a}/contact/">contacts</a>
            <a href="${a}/pokemon/">pokemon</a>
            <a href="${a}/sportas/">sportas</a>
            <a href="${a}/chat/">chat</a>
        </nav>
    </header>`;

    document.body.insertAdjacentHTML("afterbegin", HTML);
}

