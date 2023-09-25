function toggleMode() {
  const html = document.documentElement
  /* essa função aqui pode ser representada de forma reduzida conforme linha 10
  if (html.classList.contains("light")) {
    html.classList.remove("light")
  } else {
    html.classList.add("light")
  }
  pode ser reproduzida conforme essa função aqui:*/

  /*função reduzida*/
  html.classList.toggle("light")

  //pegar a tag img
  const img = document.querySelector("#profile img")
  //substituir a imagem
  //se tiver light mode, adicionar a imagem light
  if (html.classList.contains("light")) {
    //se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/avatar2.png")
    img.setAttribute("alt", "Foto Usuário Lightmode")
  } else {
    //se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/avatar3.png")
    img.setAttribute("alt", "Foto Usuário Darkmode")
  }
}
