const cars = [
    {
        marca: 'bmw',
        modelo: 'x1',
        ano: 2020,
        combustivel: 'etanol',
        km: 25000 ,
        cambio: 'manual' ,
        cor: 'branco'
    },
    {
        marca: 'bmw',
        modelo: 'i3',
        ano: 2022,
        combustivel: 'diesel',
        km: 51000,
        cambio: 'manual',
        cor: 'preto'
    },
    {
        marca: 'bmw',
        modelo: 'x5',
        ano: 2019,
        combustivel: 'gasolina',
        km: 13000,
        cambio: 'automatico',
        cor: 'azul'
    },
    {
        marca: 'bmw',
        modelo: 'ix',
        ano: 2020,
        combustivel: 'hibrido',
        km: 1030,
        cambio:'manual' ,
        cor: 'preto'
    },
    {
        marca: 'bmw',
        modelo: 'x5',
        ano: 2021,
        combustivel: 'diesel',
        km: 54000 ,
        cambio: 'manual',
        cor: 'azul'
    },
    {
        marca: 'bmw',
        modelo: 'ix3',
        ano: 2018,
        combustivel: 'gasolina',
        km: 34000,
        cambio:'manual' ,
        cor: 'vermelho'
    },
    {
        marca: 'bmw',
        modelo: 'x6M',
        ano: 2021,
        combustivel: 'hibrido',
        km: 0,
        cambio: 'automatico',
        cor: 'branco'
    }
]

let res = document.getElementById('res')

document.getElementById('filter').onclick = () =>{
    res.innerHTML = ''
    const ano = cars.filter((item) =>{
        return item.modelo == 'x5'
    })
    console.log(ano)

    ano.forEach((cambios) =>{
        res.innerHTML += `Bmw ${cambios.cambio}, `
    })
    res.innerText += '  pra mais detalhes, olhe o console'
}
document.getElementById('map').onclick = () =>{
    console.log('Aqui os modelo que tem combustiveis hibridos')
    const combustivel = cars.map(item1 =>{
        if(item1.combustivel === 'hibrido'){
            res.innerHTML = ''
            res.innerHTML = 'olhe o console!'
            console.log(item1)
        }
    })
}

document.getElementById('reduce').onclick = () =>{
    const quilometragem = cars.reduce((prev, next) =>{
        return {km: prev.km + next.km}
    })
    res.innerHTML = 'A soma de todas as quilometragens são : ' + quilometragem.km
    console.log(cars)
}


