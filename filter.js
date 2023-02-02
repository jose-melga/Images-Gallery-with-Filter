//data-* .. It can be data-whatever
//children es para que agarre de dentro


let sortBtn = document.querySelector('.filter-menu').children;
let sortItem = document.querySelector('.filter-item').children;


for(let i = 0; i < sortBtn.length; i++){// se ejecuta 4 veces porque solo hay 4 filtros y 
    sortBtn[i].addEventListener('click', function(){//agrega un listening a cada filtro que se disparara cuando recien demos click y 
        //sigue ejecutandose en cada click, se agrega listening en cada click
        
        for(let j = 0; j< sortBtn.length; j++){// se ejecuta 4 veces cada vez que damos click
            sortBtn[j].classList.remove('current');//elimina clase a todos, se repite 4 veces  cada click
        }

        this.classList.add('current');//agrega clase "current" donde dimos click, se ejecuta una vez
        //this or  sortBtn[i]..  the same
        

        //guardandi data-* del filtro que damos click
        let targetData = this.getAttribute('data-target');//guarda en targetdata, el valor del data-* que posee el filtro
        

        for(let k = 0; k < sortItem.length; k++){//se ejecuta igual al numero de imagenes, cada que doy click
            sortItem[k].classList.remove('active');//elimina la clase active a todos en cada click
            sortItem[k].classList.add('delete');//agrega gelete a todos en cada click

            //Por cada click checkaremos este if por cada foto
            if(sortItem[k].getAttribute('data-item') == targetData || targetData == "all"){
                sortItem[k].classList.remove('delete');
                sortItem[k].classList.add('active');
            }
        }
    });
}