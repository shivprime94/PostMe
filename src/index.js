import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'

ReactDOM.render(<App />, document.getElementById('root'))

const container = document.querySelector('.container')
var inputValue = document.querySelector('.input')
const add = document.querySelector('.add')
// const likes_div = document.querySelector('.likes')
// const dislikes_div = document.querySelector('.dislikes')

var arr = []

if (window.localStorage.getItem('todos') === undefined) {
  var todos = []
  window.localStorage.setItem('todos', JSON.stringify(todos))
}

var todosEX = window.localStorage.getItem('todos')
todos = JSON.parse(todosEX)
// console.log(todos)

for (var i = 0; i < todos.length; i++) {
  // console.log(todos[i]);
  arr.push({
    key: todos[i],
    value: [0, 0, 0, 0], // [0]like_done [1]likes [2]dislike_done [3]dislikes
  })
  //Do something
}
console.log(arr)

class item {
  constructor(name) {
    this.createItem(name)
  }
  createItem(name) {
    var itemBox = document.createElement('div')
    itemBox.classList.add('item')

    var input = document.createElement('input')
    input.type = 'text'
    input.disabled = true
    input.value = name
    console.log(name)
    input.classList.add('item_input')

    var edit = document.createElement('button')
    edit.classList.add('edit')
    edit.innerHTML = `<i class="fas fa-edit"></i>`
    edit.addEventListener('click', () => {
      input.classList.toggle('editing')
      input.classList.toggle('textbox')
      if (input.classList.contains('editing')) {
        edit.innerHTML = `<i class="fas fa-save" style="color:blue"></i>`
      } else {
        edit.innerHTML = `<i class="fas fa-edit"></i>`
      }
      this.editfunc(input, name)
    })

    var remove = document.createElement('button')
    remove.classList.add('remove')
    remove.innerHTML = `<i class="fas fa-trash-alt"></i>`
    remove.addEventListener('click', () => this.remove(itemBox, name))

    var likes_and_share = document.createElement('div')
    likes_and_share.classList.add('likes_and_share')

    var like_dislike = document.createElement('div')
    var like = document.createElement('div')
    var dislike = document.createElement('div')
    like.classList.add('like')
    dislike.classList.add('dislike')

    var share = document.createElement('div')
    like_dislike.classList.add('like_dislike')
    share.classList.add('share')
    share.innerHTML = `<i class="fas fa-share"></i>`

    like.innerHTML = `<i class="far fa-thumbs-up"></i><div class="likes">0</div>`
    dislike.innerHTML = `<i class="far fa-thumbs-down"></i><div class="dislikes">0</div>`

    var DIV = document.createElement('div')
    container.appendChild(itemBox)
    itemBox.appendChild(DIV)
    itemBox.appendChild(likes_and_share)

    likes_and_share.appendChild(like_dislike)
    likes_and_share.appendChild(share)

    like_dislike.appendChild(like)
    like_dislike.appendChild(dislike)

    DIV.appendChild(input)
    DIV.appendChild(edit)
    DIV.appendChild(remove)
    // DIV.appendChild(likes_and_share)
  }

  editfunc(input, name) {
    if (input.disabled === true) {
      input.disabled = !input.disabled
    } else {
      input.disabled = !input.disabled
      let indexof = todos.indexOf(name)
      todos[indexof] = input.value
      window.localStorage.setItem('todos', JSON.stringify(todos))
    }
  }

  remove(itemBox, name) {
    itemBox.parentNode.removeChild(itemBox)
    let index = todos.indexOf(name)
    todos.splice(index, 1)
    // console.log(todos.value)
    window.localStorage.setItem('todos', JSON.stringify(todos))
  }
}

add.addEventListener('click', check)
window.addEventListener('keydown', (e) => {
  if (e.which === 13) {
    check()
  }
})

function check() {
  if (inputValue.value !== '') {
    new item(inputValue.value)
    todos.push(inputValue.value)
    arr.push(inputValue.value)
    // console.log(arr)
    window.localStorage.setItem('todos', JSON.stringify(todos))
    inputValue.value = ''
  }
}

for (var v = 0; v < todos.length; v++) {
  new item(todos[v])
}

function LIKE(j) {
  let like = document.querySelectorAll('.like')
  let dislike = document.querySelectorAll('.dislike')
  if (arr[j].value[0] === 0) {
    arr[j].value[0] = 1
    if (arr[j].value[2] === 1) {
      arr[j].value[3] -= 1
    }
    arr[j].value[2] = 0
    arr[j].value[1] += 1
    like[
      j
    ].innerHTML = `<i class="fas fa-thumbs-up"></i><div class="likes">${arr[j].value[1]}</div>`
    dislike[
      j
    ].innerHTML = `<i class="far fa-thumbs-down"></i><div class="dislikes">${arr[j].value[3]}</div>`
  }
}
function DISLIKE(j) {
  let like = document.querySelectorAll('.like')
  let dislike = document.querySelectorAll('.dislike')
  if (arr[j].value[2] === 0) {
    arr[j].value[2] = 1
    if (arr[j].value[0] === 1) {
      arr[j].value[1] -= 1
    }
    arr[j].value[0] = 0
    arr[j].value[3] += 1
    dislike[
      j
    ].innerHTML = `<i class="fas fa-thumbs-down"></i><div class="dislikes">${arr[j].value[3]}</div>`
    like[
      j
    ].innerHTML = `<i class="far fa-thumbs-up"></i><div class="likes">${arr[j].value[1]}</div>`
  }
}

for (let j = 0; j < arr.length; j++) {
  // console.log(arr[j].value[0]);
  // arr.push({
  //   key:   todos[j],
  //   value: [0,0]  // [0]like_done [1]likes [2]dislike_done [3]dislikes
  // })

  // console.log(arr[j].value[0])
  // let likes = 0, dislikes = 0;
  //   let like_done = 0, dislike_done=0;
  let like = document.querySelectorAll('.like')
  let dislike = document.querySelectorAll('.dislike')
  like[j].addEventListener('click', () => {
    LIKE(j)
  })
  dislike[j].addEventListener('click', () => {
    DISLIKE(j)
  })
}
