anotações do bloco 3.3

# Box Model - Modelo de caixas no CSS

### TAGs usadas

`<span>`
`<div>` 

### Termos usados

**Inline** que possui elementos tanto atrás como na frende, mantendo a 
**Inblock** que separo os elementos em bloco, que "não mantém a linha".

### Box Model

![Exemplo de box Model](css-box-mode.png)

1. **width** e height, largura e altura, desconsiderando as bordas, margens e padding.
2. **paddin**, representa o redor do conteúdo, como se fosse uma cobertura.
3. **border**, é a borda. É considerada shorthand, ela serve como um atalho para controlar um conjunto de outras propriedades que poderia ser definidas individualmente, como border-width, border-style e border-color. <br>
`border-width`, controla a largura da borda e seu valor inicial é medium.
`border-style`, controla o estilo da linha e seu valor inicial é none.(por isso não é visivel por padrão)
`border-color`, controla a cor da borda, e tem como valor inicial currentcolor.
4. **margin**, ela fica fora da borda, expandidndo os elementos para além dos campos visíveis.

### Agrupamento de Seletores

É possivel agrupar os seletores com configurações iguais, separos pela vírgula.<br>
Exemplo:
```li, p {

}```
Nesse exemplo todos efeito dentro da chave, serão aplicados nas tags de lista e paragrafo.

### Pseudoclasses

São ações aplicadas em determinadas situações no navegador, como clicar, passar o mouse.<br>
Exemplicação:
```li:hover{
    background-color: green;
}```
link com pseudo-classes: https://developer.mozilla.org/pt-BR/docs/Web/CSS/Pseudo-classes

Na TAG de lista(li), quando for passado o mouse (hover), o fundo do elemento da lista, mudará sua cor para verde. hover é apenas uma das diversas ações, que foi usado como exemplo na aula.

### Novos Seletores Usados

`overflow` define como deve ser apresentado o conteúdo, seja determinando uma limitação de altura ou largura, para não mostra, usar barra de rolagens para visualizar o material que passou do limite determinado.
`position` Usado para determinar a posição, usado absolute como apresentação, a imagem usada fica acima de todo conteúdo.
`z-index` atribui a prioridade para o item aparecer, quando maior, maior sua prioridade.
`top` determina a distancia que o elemento seletor deve ter da parte superior
`left` mesmo que o top, mas referente ao lado esquerdo.
`float` faz o elemento flutuar empurrando conteduo para fora do seu espaço.
