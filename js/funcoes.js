var cursos = [{
    "id": "curso-1",
    "titulo": "Desenvolvimento de Soluções"
}, {
    "id": "curso-2",
    "titulo": "Arquitetura Java"
}, {
    "id": "curso-3",
    "titulo": "Arquitetura .NET"
}, {
    "id": "curso-4",
    "titulo": "Projetos Integrados"
}, {
    "id": "curso-5",
    "titulo": "Gestão de Processos"
}, {
    "id": "curso-6",
    "titulo": "Compiladores"
}];

var modalidades = [{
    "id": "mod-1",
    "titulo": "Presencial"
}, {
    "id": "mod-2",
    "titulo": "Online"
}, {
    "id": "mod-3",
    "titulo": "In-Company"
}
];
var listaCursos = document.getElementById("listaCursos");
var listaModalidades = document.getElementById("listarModalidades");

function limparLista(lista) {
    
    while (lista.firstChild) {
        //while( lista.options.length > 0 ) {
        lista.removeChild(lista.firstChild);
    }
}
function exibirCursos() {
    limparLista(listaCursos);

    for (var i = 0; i < cursos.length; i++) {
        var option = document.createElement("option");
        option.textContent = cursos[i].titulo;
        option.setAttribute("value", cursos[i].id);
        listaCursos.appendChild(option);
    }

}

function exibirModalidades() {

    limparLista(listaModalidades);

    for (var i = 0; i < modalidades.length; i++) {
        var option = document.createElement("option");
        option.textContent = modalidades[i].titulo;
        option.setAttribute("value", modalidades[i].id);
        listaModalidades.appendChild(option);
    }
}


exibirCursos();
exibirModalidades();

