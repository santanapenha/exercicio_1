let fruta = ''

fruta = prompt('Digite o nome da fruta')

switch (fruta.toLowerCase()) {
    case 'maça':
        alert("Não vendemos essa fruta aqui")
       break
    case 'kiwi':
        alert("Estamos com escassez de kiwis")
       break
    case 'melancia':
        alert("Aqui está, são 3 reais o quilo")
       break
    default:
        alert("Recarregue a página para outros resultados")
    
}