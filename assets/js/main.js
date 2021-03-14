function main() {
    const cronometro = document.querySelector('#cronometro');
    let segundos = 0;
    let timer;
    let statusCor = 0;
    const setCorDoCronometro = () => statusCor === 0 ? cronometro.classList.remove('vermelho') : cronometro.classList.add('vermelho');
    const setNomeDoBotao = () => document.querySelector('#iniciar').innerHTML = `${statusCor === 0 ? 'Retonar' : 'parar'}`;
    const setHoraNoCronometro = () => cronometro.innerHTML = `${new Date(segundos * 1000).toLocaleTimeString('pt-BR', { timeZone: 'UTC' })}`;

    const escutar = document.addEventListener('click', (e) => {
        clearTimeout(timer);
        if (e.target === iniciar) {
            setCorDoCronometro();
            statusCor === 0 ? statusCor = 1 : statusCor = 0;
            setNomeDoBotao();
            if (statusCor === 1)
                timer = setInterval(() => {
                    segundos++;
                    setHoraNoCronometro();
                }, 1000);
        }

        if (e.target === zerar) {
            statusCor = 0;
            setCorDoCronometro();
            document.querySelector('#iniciar').innerHTML = 'Iniciar';
            segundos = 0;
            setHoraNoCronometro();
        }
    });
}

main();