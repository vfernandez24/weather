const container = document.getElementById('container');

const cargarContanido = (categoria) => {
    const h1 = document.createElement('h1');
    let nombreCat = '';
    switch (categoria) {
        case 1:
            nombreCat = 'Accesorios para Smartphones';
            return;
        case 2:
            nombreCat = 'Tecnología de Salud';
            return;
        case 3:
            nombreCat = 'Hogar Inteligente';
            return;
        case 4:
            nombreCat = 'Electrónica de Entretenimiento';
            return;
        case 5:
            nombreCat = 'Fotografía y Videografía';
            return;
        case 6:
            nombreCat = 'Accesorios para juegos';
            return;
        case 7:
            nombreCat = 'Accesorios para Ordenadores';
            return;
        case 8:
            nombreCat = 'Accesorios para Tablets';
            return;
    }
    h1.innerText = `${nombreCat} :: Productos`
    container.appendChild(h1);

    // Crear el grid
    const grid = document.createElement('div');
    grid.class = 'grid';
    body.appendChild(grid);

        // Crear el left
        const left = document.createElement('div');
        left.id = 'left';
        left.className = 'left';
        grid.appendChild(left);

            // close
            const left__close = document.createElement('button');
            left__close.className = 'close';
            left__close.onclick = function() {
                toggleLeft();
            }
            left.appendChild(left__close);

            // h3
            const left__h3 = document.createElement('h3');
            left__h3.innerText = 'Filtros';
            left.appendChild(left__h3);

            // form 
            const left__form = document.createElement('form');
            left__form.id = 'filtersForm';
            left.appendChild(left__form);

                // oferta
                const form__oferta = document.createElement('div');
                form__oferta.className = 'filter';
                left__form.appenChild(form__oferta);

                    // h4
                    const oferta__h4 = document.createElement('h4');
                    oferta__h4.innerText = 'Oferta';
                    form__oferta.appendChild(oferta__h4);

                    // ul
                    const oferta__ul = document.createElement('ul');
                    oferta__ul.innerHTML = `<li><input type="checkbox" id="smartphones" name="category" value="smartphones"> <label for="smartphones">Con oferta</label></li>
                    <li><input type="checkbox" id="games" name="category" value="games"> <label for="games">Sin oferta</label></li>`;
                    form__oferta.appendChild(oferta__ul);

            // oferta
            const form__Precio = document.createElement('div');
            form__Precio.className = 'filter';
            form__Precio.innerHTML = `<h4>Precio</h4>
                <input type="number" id="minPrice" placeholder="Mínimo"">
                <input type="number" id="maxPrice" placeholder="Máximo"">`;
            left__form.appenChild(form__Precio);

            // submit
            const form__button = document.createElement('button');
            form__button.id = 'applyFilters';
            form__button.type = 'submit';
            form__button.innerText = 'Aplicar filtros';
            left__form.appendChild(form__button);

        // Crear el right
}