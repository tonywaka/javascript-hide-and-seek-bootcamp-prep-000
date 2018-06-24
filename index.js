function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  var rank = document.getElementById("app").querySelectorAll("ul.ranked-list li");
  for(let i = 0; i < rank.length; i++) {
    rank[i].innerHTML = parseInt(rank[i].innerHTML) + n;
  }
}

function deepestChild() {
  var rank = document.getElementById("grand-node").querySelectorAll("div");
  var test;
  for(let i = 0; i < rank.length - 1; i++) {
    test = rank[i].querySelector("div");
  }
return test;
}
