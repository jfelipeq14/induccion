(() => {
    const itemsSidebar = [
        {
            role: 'Administrator',
            items: [
                "Gestionar Usuarios",
                "Vehiculos",
                "Facturacion",
                "Reportes",
            ]
        },
        {
            role: 'Employed',
            items: [
                "Vehiculos",
                "Reportes",
            ]
        },
    ]

    const mostrarItems = (array) => {
        array.forEach(element => {
            console.log(element);
            $itemsList.innerHTML += `<li class="list-group-item btn btn-primary">${element}</li>`
        });
    }

    const $titleArticle = document.getElementById('titleArticle')
    const $contentArticle = document.getElementById('contentArticle')
    const $itemsList = document.getElementById('itemsList')

    itemsSidebar.forEach(element => {
        if (element.role === 'Administrator') {
            $titleArticle.textContent = `${element.role}`
            $contentArticle.textContent = `Descripcion for ${element.role}`
            mostrarItems(element.items)
        }
    })

})()