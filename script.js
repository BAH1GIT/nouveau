// let ElementDiv=document.getElementsByTagName("div")
// console.log(ElementDiv);
// ElementDiv[0].innerText="text"
// let ElementDiv2=document.getElementsByClassName("div2")
// console.log(ElementDiv2);
// ElementDiv2[0].innerText="content"
// let ElementUl=document.getElementById("menu")
// console.log(ElementUl);

// // creation de l'element Service
// let ElementLi=document.createElement("li")
// let Service=document.createTextNode("Services")
// ElementLi.appendChild(Service)
// ElementUl.appendChild(ElementLi)
// // creation de l'element Conctact
// let ElementLi1=document.createElement("li")
// let Contact=document.createTextNode("Contact")
// ElementLi1.appendChild(Contact)
// ElementUl.appendChild(ElementLi1)
// ElementLi.style.color="red"
// ElementLi1.style.color="blue"
// console.log(ElementLi);
let ElementGp=document.createElement("div")
let main=document.getElementById("main")
let ElementImg=document.createElement("img")
let ElementDivP=document.createElement("div")
let ElementH5=document.createElement("h5")
let ElementP=document.createElement("p")
let ElementA=document.createElement("a")
let tex1= document.createTextNode("Card title")
let tex2= document.createTextNode("Some quick example text to build on the card title and make up the bulk of the card’s content.")
let tex3= document.createTextNode("Go somewhere")

main.appendChild(ElementGp)
ElementA.appendChild(tex3)
ElementP.appendChild(tex2)
ElementH5.appendChild(tex1)
ElementGp.appendChild(ElementImg)
ElementGp.appendChild(ElementDivP)
ElementDivP.appendChild(ElementH5)
ElementDivP.appendChild(ElementP)
ElementDivP.appendChild(ElementA)

console.log(main);
console.log(ElementDivP);

ElementGp.style.width="230px"
ElementGp.style.height="390px"
ElementGp.style.display="flex"
ElementGp.style.flexDirection="column"
ElementGp.style.alignItems="end"
ElementGp.style.fontSize="20px"
ElementGp.style.fontSize="20px"
ElementGp.style.backgroundColor="#2c2b2bff"

ElementImg.style.height="50%"
ElementImg.style.width="100%"
// ElementImg.style.border="1px solid black"
ElementImg.src="image/undraw_developer-avatar.png"
ElementImg.style.alt="image"
ElementImg.style.backgroundColor="#b82a2aff"

ElementDivP.style.padding="20px"
ElementDivP.style.fontSize="16px"
ElementDivP.style.color="#dee2e6"

ElementH5.style.color="orange"
ElementH5.style.justifyContent="center"
ElementH5.style.fontSize="20px"
ElementH5.style.margin="0 0 8px"

ElementP.style.fontSize="medium"
ElementP.style.margin="0 0 16px"

ElementA.style.color="white"
ElementA.style.padding="6px 12px"
ElementA.style.borderRadius="5px"
ElementA.style.backgroundColor="#0d6efd"
ElementA.style.cursor="pointer"








