function getFirstSelector (selector){
  return document.querySelector(selector)
}

function nestedTarget () {
  return document.querySelector ('#nested .target')
}

function increaseRankBy (n){
  const rankedLists = document.querySelectorAll('ul.ranked-list')
for (let i = 0, l = rankedLists.length; i < l; ++i ) {
  let children = rankedLists [i].children
  for (let i =0, l = children.length; i < l; ++i){
children [i].innerHTML = parseInt (children [i].innerHTML) + n
}
}
}


function deepestChild (){
  let node = document.getElementById ('grand-node')
  let nextNode = node.children [0]
  while (nextNode){
  node = nextNode
nextNode = node.children [0]
}
return node 
}
