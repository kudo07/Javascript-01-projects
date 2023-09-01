// // DOM Manipulation

// // GetElementById()
// // const title = document.getElementById("main-heading");
// // console.log(title);
// // // GetElementByClassName
// // const listItem = document.getElementsByClassName("list-items");
// // console.log(listItem);
// // // GetElementByTagName()
// // const TagItem = document.getElementsByTagName("li");
// // console.log(TagItem);
// // // querySelector
// // // same id same tagname first one to across all
// // const container = document.querySelector("div");
// // console.log(container);
// // // id attribute,div tag
// // // querySeletorAll()
// // // if wanted to selelct the all the div then go with the querySelectorALl
// // const containerr = document.querySelectorAll("div");
// // console.log(containerr);
// // selecting all the div tag
// // ------------------------------------------------------------------
// // const title = document.querySelector("#main-heading");
// // title.style.color = "blue";

// // const listItems = document.querySelectorAll(".list-items");
// // listItems.style.fontSize = "2rem";
// // for (i = 0; i < listItems.length; i++) {
// //   listItems[i].style.fontSize = "1000px";
// // }

// // in js use camel in functions as it is in jssd

// // Creating Elements

// const ul = document.querySelector("ul");
// const li = document.createElement("li");
// // adding elements
// ul.append(li);

// // Modifying the text
// // const firstListItem = document.querySelector(".list-items");
// // console.log(firstListItem.innerText);
// // console.log(firstListItem.textContent);
// // console.log(firstListItem.innerHTML);

// li.innerText = "X-men";
// // // Modifying the text
// // li.setAttribute("class", "list-items");
// // // li.removeAttribute("class");
// // const title = document.querySelector("#main-heading");
// // console.log(title.getAttribute("id"));

// // li.classList.add("list-items");
// // console.log(li.classList.contains("list-items"));

// // Remove Elements
// // li.remove();

// different ways to traverse the DOM
// DOM Manipulation
// traverse the dom
// parent Node traversal
// let ul = document.querySelector("ul");
// console.log(ul);
// console.log(ul.parentElement);
// console.log(ul.parentNode.parentNode);
// console.log(ul.parentElement.parentElement);

// const html = document.documentElement;
// console.log(html);
// console.log(html.parentNode);
// console.log(html.parentElement);

// child Node  Traversal
// let ul = document.querySelector("ul");
// console.log(ul.childNodes);
// console.log(ul.firstchild);
// console.log(ul.lastchild);
// // ul.firstChild.style.backgroundColor = "blue";
// ul.childNodes[1].style.backgroundColor = "blue";

// let ul = document.querySelector("ul");
// console.log(ul.children);
// console.log(ul.firstElementChild);
// console.log(ul.children);

// Sibling Node Traversal
// let ul = document.querySelector("ul");
// const div = document.querySelector;

// console.log(ul);
// console.log(ul.previousSibling);
// console.log(ul.nextSibling);
// console.log(ul.previousElementSibling);
// console.log(ul.nextElementSibling);

// 4) DOM MANIPULATION
// a) EVENT LISTENERS

// element.addEventListener("click",function,boolean(t/f))
// const buttonTwo = document.querySelector("#btn-2");
// function altertBtn() {
//   alert("I love Javascript");
// }

// buttonTwo.addEventListener("click", altertBtn);

// //b) MouseOver
// const newBackround = document.querySelector("#box-1");
// function changeBackround() {
//   newBackround.style.backgroundColor = "blue";
// }

// newBackround.addEventListener("mouseover", changeBackround);

// 5)DOM MANIPULATION
// a)REVEAL EVENT
// const revealBtn = document.querySelector(".list-items");
// const hiddenContent = document.querySelector(".hidden-content");
// function revealContent() {
//   if (hiddenContent.classList.contains("list-items")) {
//     hiddenContent.classList.remove("list-items");
//   } else {
//     hiddenContent.classList.add("list-items");
//   }
// }

// revealBtn.addEventListener("click", revealContent);

// 6) EVENT PROPAGATION
// 3PHASES -
//   A) EVENT CAPTURING
//   B) TARGET
//   C) EVENT BUBBLING

// EVENT PROPAGATION

// window.addEventListener(
//   "click",
//   function () {
//     console.log("window");
//   },
//   true
// );

// window.addEventListener(
//   "click",
//   function () {
//     console.log("Document");
//   },
//   true
// );

// document.querySelector(".div2").addEventListener(
//   "click",
//   function () {
//     console.log("DIV 2");
//   },
//   true
// );

// document.querySelector(".div1").addEventListener(
//   "click",
//   function () {
//     console.log("DIV 1");
//   },
//   true
// );
// document.querySelector("button").addEventListener(
//   "click",
//   function (e) {
//     console.log((e.target.innerText = "clicked"));
//     // e is the event and target is the property
//   },
//   true
// );

// // if true=> false then the sequenced is changed into the reversed manner
// // if i change button into anchor tag then the the page is refreshed and the item displayed in the console is refreshed also so we make e.prevenrDefault() in the .button class block code

// 7) EVENT DELEGAATION
// DOM MANIPULATION
// IT ALLOWS USERS TO APPEND A SINGLE EVENT LISTNER TO A PARENT ELELEMT THAT ADDS IT TO ALL OF ITS PRESENT AND FUTURE DESCENDANTS THAT MATCH A SELECTOR

// document.querySelector("#football").addEventListener("click", function (e) {
//   crossOriginIsolated.log("football is ckicked");
//   const target = e.target;
//   if (target.matches("li")) {
//     target.style.backgroundColor = "lightgrey";
//   }
// });
// it sets the lightgrey color for the clixked thingh for example football its background color changes into the lighgrey color

// document.querySelector("#sports").addEventListener("click", function (e) {
//   console.log(e.target.getAttribute("id") + "is clicked");
//   const target = e.target;
//   if (target.matches("li")) {
//     target.style.backgrounColor = "lightgrey";
//   }
// });

// // it means we select the individual things and it got selected seperately that the even p delegation as sport is the calss div of the unordered list of the 5 subject football,cricked ....
// //

// const sport=document.querySelector(#sports);
// const newSport=document.createElement('li')
// newSport.innerText='rugby'
// newSport.setAttribute('id','rugby')
// sports.appendChild(newSport)
// // rugby is the new subject added that the meaning after the AND sparts in the definition
