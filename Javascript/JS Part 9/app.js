// let smallImages = document.getElementsByClassName("oldImg");
// for (i = 0; i < smallImages.length; i++) {
//     smallImages[i].src = "assets/spiderman_img.png";
//     console.log(`value of image no. ${i} is changed`);
// }

//Query Selector
// console.dir(document.querySelector("p"));
// console.dir(document.querySelector(".oldImg"));
// console.dir(document.querySelectorAll("div a")); //This selects all the tags that are there in the html file

//Changing colors for specific tags using JS
let links = document.querySelectorAll(".box a");
//Using normal For loop 
for(i=0;i<links.length;i++) {
    links[i].style.color = "green";
}

// for (link of links) {
//     link.style.color = "yellow";
// }
























let smallImg = document.getElementsByClassName("oldImg");
for(i=0; i<smallImg.length; i++) {
    smallImg[i].src="assets/spiderman_img.png";
    console.log(`value of img no. ${i} is changed`);
}