var li = document.getElementsByTagName('li')
var cont = document.getElementById('content')

console.log('hello')

li[0].onclick = () => {
    console.log('hello onload')
    let request = new XMLHttpRequest;
    request.open('GET', 'odin.html', true)
    request.send()
    request.onreadystatechange = function () {
        if (request.readyState === 4 && request.status === 200) {
            console.log(request.responseText)
            cont.innerHTML=request.responseText
        }
    }
}

li[1].onclick = () => {
  console.log('hello onload')
  let request = new XMLHttpRequest;
  request.open('GET', 'dva.html', true)
  request.send()
  request.onreadystatechange = function () {
    if (request.readyState === 4 && request.status === 200) {
      console.log(request.responseText)
      cont.innerHTML=request.responseText
  }
  }
}

li[2].onclick = () => {
  console.log('hello onload')
  let request = new XMLHttpRequest;
  request.open('GET', 'tri.html', true)
  request.send()
  request.onreadystatechange = function () {
    if (request.readyState === 4 && request.status === 200) {
      console.log(request.responseText)
      cont.innerHTML=request.responseText
  }
  }
}