// sliding
const slider = document.querySelector('.slider');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
let currentPosition = 0;
const maxPosition = -40; // Adjust this value based on your item width

prev.addEventListener('click', () => {
    if (currentPosition < 0) {
        currentPosition += 14.5; // Adjust this value based on your item width
        slider.style.transform = `translateX(${currentPosition}%)`;
    }
});

next.addEventListener('click', () => {
    if (currentPosition > maxPosition) {
        currentPosition -= 14.5; // Adjust this value based on your item width
        slider.style.transform = `translateX(${currentPosition}%)`;
    }
});
// zoom
const container = document.querySelector(".container");
const image = document.querySelector(".image");
const lens = document.querySelector(".lens");
const result = document.querySelector(".result");

container.addEventListener("mouseenter", (e) => {
      lens.style.display='block';
      result.style.display="block";
       container.addEventListener("mousemove", zoomImage);
});

container.addEventListener("mouseleave", (e) => {
      lens.style.display='none';
      result.style.display="none";
});

result.style.backgroundImage = `url(${image.src})`;
function zoomImage(e)
{
        const containerRect = container.getBoundingClientRect();
        const imageRect = image.getBoundingClientRect();
        const lensRect = lens.getBoundingClientRect();
        const { x, y } = getMousePos(e, containerRect, lensRect);
        lens.style.left = x + "px";
        lens.style.top = y + "px";
        // Adjust the zoom factor for more magnification
        const zoomFactor = 2.5; // Increase this value for more zoom
        // Calculate the position of the zoomed image
        const zoomX = -(x * zoomFactor);
        const zoomY = -(y * zoomFactor);
        result.style.backgroundSize = `${imageRect.width * zoomFactor}px ${imageRect.height * zoomFactor}px`;
        result.style.backgroundPosition = `${zoomX}px ${zoomY}px`;
}

function getMousePos(e, containerRect, lensRect) 
{
        let x = e.clientX - containerRect.left - lensRect.width / 2;
        let y = e.clientY - containerRect.top - lensRect.height / 2;
        let minX = 0;
        let minY = 0;
        let maxX = containerRect.width - lensRect.width;
        let maxY = containerRect.height - lensRect.height;
        if (x <= minX) {
            x = minX;
        } else if (x >= maxX) {
            x = maxX;
        }
        if (y <= minY) {
            y = minY;
        } else if (y >= maxY) 
        {
            y = maxY;
        }
        return { x, y };
}
 



// 


var xxx = document.getElementById("zoomer");
const fields = document.querySelectorAll('.im');
const popup = document.getElementById('zoomimg1');
const overlay = document.getElementById("overlay");
var res = document.getElementById("iid");
function openPopup(element) {

    var imgSrc = element.getAttribute("data-img");
    console.log(imgSrc)
    var border = element.getAttribute("getid");
    popup.style.display = 'block';
    popup.classList.remove('zoom-out');
    popup.classList.add('zoom-in');
    var over = document.getElementById("overlay");
    over.style.display = "block";
    over.style.backgroundColor='rgba(0,0,0,0.5)';
    xxx.src = imgSrc;
    result.style.backgroundImage = `url(${ xxx.src})`;
    fields.forEach((fld) => {
        fld.style.borderColor = '';
    });
    console.log(border);
    let borcolor=document.getElementById(border);
    borcolor.style.borderColor = 'rgb(43, 162, 201)';
}

function closePopup() {
    var popup = document.getElementById('zoomimg1');
    popup.classList.remove('zoom-in');
    popup.classList.add('zoom-out');
    var over = document.getElementById("overlay");
    over.style.backgroundColor='transparent';
    setTimeout(function () {
        popup.style.display = 'none';
        over.style.display = "none";
    }, 1200);
}
 
// image click

const divElements = document.querySelectorAll(".im");

divElements.forEach((divElement, index) => {
  const imageUrl = `./imges/z${index + 1}.jpg`;
  divElement.addEventListener("click", () => {
    handleDivClick(divElement, imageUrl);
  });
});
function zoom(images,src)
{
    images.src =src;
    result.style.backgroundImage = `url(${images.src})`;
}

let selectedDiv = null;
function handleDivClick(divElement, imageUrl) 
{
    fields.forEach((fld) => {
        fld.style.borderColor = '';
       });

  if (selectedDiv) {
    selectedDiv.style.borderColor = 'black';
  }
  divElement.style.borderColor = 'rgb(43, 162, 201)';
  selectedDiv = divElement;
  zoom(image, imageUrl);
}


// image slide 

const caro = document.querySelector(".slide"),
firstIm= caro.querySelectorAll(".im2")[0],
arrIcons = document.querySelectorAll(".wrap i");


const showHideIcons = () => 
{
   let scrollWidth = caro.scrollWidth - caro.clientWidth; // getting max scrollable width
   arrIcons[0].style.display = caro.scrollLeft == 0 ? "none" : "block";
   arrIcons[1].style.display = caro.scrollLeft == scrollWidth ? "none" : "block";


}
arrIcons.forEach(icon => {
    icon.addEventListener("click", () => 
    {
          let firstImWidth = firstIm.clientWidth+51; // getting first img width & adding 14 margin value
           caro.scrollLeft += icon.id == "left" ? -firstImWidth : firstImWidth;
            setTimeout(() => showHideIcons(),300);
    });
});

let isDragStart = false, isDragging = false, prevPageX, prevScrollLeft, positionDiff;


const autoSlide = () => {
    // if there is no image left to scroll then return from here
    if(caro.scrollLeft - (caro.scrollWidth - caro.clientWidth) > -1 || caro.scrollLeft <= 0) return;
    positionDiff = Math.abs(positionDiff); // making positionDiff value to positive
    let firstImWidth = firstIm.clientWidth +45;
    // getting difference value that needs to add or reduce from carousel left to take middle img center
    let valDifference = firstImWidth - positionDiff;
    if(caro.scrollLeft > prevScrollLeft) { // if user is scrolling to the right
        return caro.scrollLeft += positionDiff > firstImWidth / 1.2 ? valDifference : -positionDiff;
    }
    // if user is scrolling to the left
    caro.scrollLeft -= positionDiff > firstImWidth /1.5? valDifference : -positionDiff;
}
const dragStart = (e) => {
    // updatating global variables value on mouse down event
    isDragStart = true;
    prevPageX = e.pageX || e.touches[0].pageX;
    prevScrollLeft = caro.scrollLeft;
}
const dragging = (e) => {
    // scrolling images/carousel to left according to mouse pointer
    if(!isDragStart) return;
    e.preventDefault();
    isDragging = true;
    caro.classList.add("dragging");
    positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;

    caro.scrollLeft = prevScrollLeft - positionDiff;
    console.log(caro.scrollLeft);
    let firstImWidth = firstIm.clientWidth +45;
     if(caro.scrollLeft>=230){
        arrIcons[0].style.display='block';
     }
     else{
        arrIcons[0].style.display='none';
     }
     if(caro.scrollLeft<=870){
        arrIcons[1].style.display='block';
     }
     else{
        arrIcons[1].style.display='none';
     }
}
const dragStop = () => {
    isDragStart = false;
    caro.classList.remove("dragging");
    if(!isDragging) return;
    isDragging = false;
    autoSlide();
}
caro.addEventListener("mousedown", dragStart);
caro.addEventListener("touchstart", dragStart);

document.addEventListener("mousemove", dragging);
caro.addEventListener("touchmove", dragging);

document.addEventListener("mouseup", dragStop);
caro.addEventListener("touchend", dragStop);


//Accordian


const toggleButton1 = document.getElementById('toggleButton1');
const accordionContent1 = document.getElementById('accordion-content1');
const rotateDiv1 = document.getElementById("rotateDiv1");

toggleButton1.addEventListener('click', function() {
    toggleAccordion(accordionContent1, rotateDiv1);
});


const toggleButton2 = document.getElementById('toggleButton2');
const accordionContent2 = document.getElementById('accordion-content2');
const rotateDiv2 = document.getElementById("rotateDiv2");

toggleButton2.addEventListener('click', function() {
    toggleAccordion(accordionContent2, rotateDiv2);
});

const toggleButton3 = document.getElementById('toggleButton3');
const accordionContent3 = document.getElementById('accordion-content3');
const rotateDiv3 = document.getElementById("rotateDiv3");

toggleButton3.addEventListener('click', function() {
    toggleAccordion(accordionContent3, rotateDiv3);
});

const toggleButton4 = document.getElementById('toggleButton4');
const accordionContent4 = document.getElementById('accordion-content4');
const rotateDiv4 = document.getElementById("rotateDiv4");

toggleButton4.addEventListener('click', function() {
    toggleAccordion(accordionContent4, rotateDiv4);
});

function toggleAccordion(content, rotateDiv) {
    // Hide all other accordion contents except the clicked one
    const allAccordionContents = document.querySelectorAll('.acc2');
    const rotate = document.querySelectorAll('.arri');
    allAccordionContents.forEach((element) => {
        if (element !== content) {
            element.classList.remove('opened');
        }
    });
    rotate.forEach((element) => {
        if (element !== content) {
            element.classList.remove('rotate180');
        }
    });

    // Toggle the clicked accordion content and rotation
    content.classList.toggle('opened');
    rotateDiv.classList.toggle("rotate180");
}
















// Eyeglasses

const div1 = document.getElementById('men');
const div2 = document.getElementById('classic');
const div3 = document.getElementById('women');
const div4 = document.getElementById('ks');
const div5 = document.getElementById('premium');
const div6 = document.getElementById('computer');
const div7= document.getElementById('eeee');
const div8 = document.getElementById('e1-id');
const div20 = document.getElementById('e1-id2');
const div21= document.getElementById('e1-id3');
         
div1.addEventListener('mouseover', () => {
             div1.style.backgroundColor = "#F3E9E2";
             div2.style.backgroundColor = "#F3E9E2";
             div4.style.backgroundColor = 'transparent';
             div3.style.backgroundColor = 'transparent';
             div5.style.backgroundColor='transparent';
             if(div5.style.backgroundColor == 'transparent'){
                div20.style.display='none'
             }
             div5.style.display='block';
             div6.style.display='block';
             div7.style.display='block';
             div8.style.display='none';
});



div3.addEventListener('mouseover', () => {
             div3.style.backgroundColor = "#F3E9E2";
             div2.style.backgroundColor = "#F3E9E2";
             div4.style.backgroundColor = 'transparent';
             div1.style.backgroundColor = 'transparent';
             div5.style.backgroundColor='transparent'
             div5.style.display='block';
             div6.style.display='block';
             div7.style.display='block';
             div8.style.display='none';
});

div3.addEventListener('mouseout',()=>{
    div2.style.backgroundColor = "#F3E9E2";
    div20.style.display='none';
    div6.style.backgroundColor="transparent";
    div21.style.display='none';

})


div4.addEventListener('mouseover', () => {
             div4.style.backgroundColor = '#F3E9E2';
             div2.style.backgroundColor = '#F3E9E2';
             div1.style.backgroundColor = 'transparent';
             div3.style.backgroundColor = 'transparent';
             div6.style.backgroundColor="transparent";
             div5.style.display='none';
             div6.style.display='none';
             div7.style.display='none';
             div8.style.display='block';
             div21.style.display='none';
             
});

if( div1.style.backgroundColor == "#F3E9E2")
{
  div7.style.backgroundColor = "#F3E9E2";
}

div2.addEventListener('mouseover', () => {
        div2.style.backgroundColor = '#F3E9E2';
        div5.style.backgroundColor = 'transparent';
        div6.style.backgroundColor = 'transparent';
        const div4Color = getComputedStyle(div4).backgroundColor;
        console.log(div4Color);
        if(div4Color =='rgb(243, 233, 226)')
        {



            div8.style.display='block';
            div7.style.display='none';
            div20.style.display='none';
            div21.style.display='none';
        }
        else
        {
            div7.style.display='block';
            div8.style.display='none';
            div20.style.display='none';
            div21.style.display='none';
        }
        // div8.style.display='none';
        
});
div5.addEventListener('mouseover', () => {

    div2.style.backgroundColor = 'transparent';
    div5.style.backgroundColor = '#F3E9E2';
    div6.style.backgroundColor = 'transparent';
    div20.style.display='block';
    div8.style.display='none';
    div21.style.display='none';
    div7.style.display='none';
});

div6.addEventListener('mouseover', () => {
    div2.style.backgroundColor = 'transparent';
    div5.style.backgroundColor = 'transparent';
    div6.style.backgroundColor = '#F3E9E2';
    div21.style.display='block';
    div8.style.display='none';
    div20.style.display='none';
    div7.style.display='none';
});

// coputer glasses

const div9 = document.getElementById('men-1');
const div10 = document.getElementById('classic-1');
const div11 = document.getElementById('women-1');
const div12 = document.getElementById('ks-1');
const div13 = document.getElementById('premium-1');

div9.addEventListener('mouseover', () => {
    div9.style.backgroundColor = '#F3E9E2';
    div10.style.backgroundColor = '#F3E9E2';
    div11.style.backgroundColor = 'transparent';
    div12.style.backgroundColor = 'transparent';
    div10.style.display='block';
    div13.style.display='none';
});
div11.addEventListener('mouseover', () => {
    div11.style.backgroundColor = '#F3E9E2';
    div10.style.backgroundColor = '#F3E9E2';
    div9.style.backgroundColor = 'transparent';
    div12.style.backgroundColor = 'transparent';
    div10.style.display='block';
    div13.style.display='none';
});
div12.addEventListener('mouseover', () => {
    div12.style.backgroundColor = '#F3E9E2';
    div10.style.backgroundColor ='transparent' ;
    div11.style.backgroundColor = 'transparent';
    div9.style.backgroundColor = 'transparent';
    div13.style.backgroundColor = 'transparent';
    div10.style.display='block';
    div13.style.display='block';

});
div10.addEventListener('mouseover', () => {
        div10.style.backgroundColor = '#F3E9E2';
        div13.style.backgroundColor ='transparent';});
div13.addEventListener('mouseover', () => {
            div13.style.backgroundColor = '#F3E9E2';
            div10.style.backgroundColor ='transparent';});

// sunglasses

const div14 = document.getElementById('men4');
const div15 = document.getElementById('classic4');
const div16 = document.getElementById('women4');
const div17 = document.getElementById('premium4');
const div18 = document.getElementById('eee2');
const div19 = document.getElementById('e2-id');

div14.addEventListener('mouseover', () => {
    div14.style.backgroundColor = '#F3E9E2';
    div15.style.backgroundColor = '#F3E9E2';
    div16.style.backgroundColor = 'transparent';
    div17.style.backgroundColor = 'transparent';

});
div16.addEventListener('mouseover', () => {
    div16.style.backgroundColor = '#F3E9E2';
    div15.style.backgroundColor = '#F3E9E2';
    div14.style.backgroundColor = 'transparent';
    div17.style.backgroundColor = 'transparent';
});
div15.addEventListener('mouseover', () => {
   div18.style.display='block';
   div19.style.display='none';
   div15.style.backgroundColor = '#F3E9E2';
   div17.style.backgroundColor = 'transparent';

});
div17.addEventListener('mouseover', () => {
    div18.style.display='none';
    div19.style.display='block';
    div15.style.backgroundColor = 'transparent';
    div17.style.backgroundColor = '#F3E9E2';

});
// search
let search1=document.getElementById('search-con');
let search2=document.getElementById('search');
let ss=document.getElementById('bdy');
search2.addEventListener('click',(e)=>{
  search1.style.display='block';
  e.stopPropagation();
});
document.body.addEventListener('click',()=>{
  search1.style.display='none';
  
});


// popup signin signup


function openPop()
{
    var popup = document.getElementById('popup');
    popup.style.display = 'block';
    var over=document.getElementById("overlay");
    over.style.display = "block";
    over.style.backgroundColor='rgba(0,0,0,0.5)';
}
function closePop()
{
    var popup = document.getElementById('popup');
    popup.style.display = 'none';
    document.getElementById("overlay").style.display = "none";
    error5.innerHTML='';
}

function openPop2()
{
    var popup = document.getElementById('popup2');
    popup.style.display = 'block';
    var over=document.getElementById("overlay");
    over.style.display = "block";
    over.style.backgroundColor='rgba(0,0,0,0.5)';
}
function closePop2()
{
    var popup = document.getElementById('popup2');
    popup.style.display = 'none';
    document.getElementById("overlay").style.display = "none";
    error.innerHTML='';
    error1.innerHTML='';
    error2.innerHTML='';
    error3.innerHTML='';
    error4.innerHTML='';
}

// wish List
function openPop3()
{
    var popup = document.getElementById('product');
    popup.classList.remove('slidedown');
    popup.style.display = 'block';
}
function closePop3()
{
    var popup = document.getElementById('product');
    popup.classList.add('slidedown');
    setTimeout(function () {
        popup.style.display = 'none';
    }, 1200);
}


// name
input1.onblur = function() {
    if (this.type === "text" && !isValidName(this.value)) {
      this.classList.add('invalid');
      error.innerHTML = 'This is required';
    }
  };
  
  input1.onfocus = function() {
    if (this.classList.contains('invalid')) {
     this.classList.remove('invalid');
      error.innerHTML = '';
    }
  };

// First Name  
  input2.onblur = function() {
    if (this.type === "text" && !isValidName(this.value)) {
      this.classList.add('invalid');
      error1.innerHTML = 'This is required field';
    }
  };
  
input2.onfocus = function() {
    if (this.classList.contains('invalid')) {
      this.classList.remove('invalid');
      error1.innerHTML = '';
    }
  };
  function isValidName(name) {
    const namePattern = /^[A-Za-z]+$/;
    return namePattern.test(name);
 }
  
// Mobile number
  input3.onblur = function() 
  {
    if (isValidMobileNumber(this.value)) 
    {
      error2.innerHTML = '';
    } 
    else 
    {
      this.classList.add('invalid');
      error2.innerHTML = 'Please enter a valid mobile number.';
    }
  };
  input3.onfocus = function() {
    if (this.classList.contains('invalid')) 
    {
      this.classList.remove('invalid');
      error2.innerHTML = '';
    }
  };
  function isValidMobileNumber(mobileNumber) 
  {
    const mobilePattern = /^\d{10}$/;
    return mobilePattern.test(mobileNumber);
  }
  
  //Email
  input4.onblur = function() {
    if (!input4.value.includes('@')) 
    { 
      input4.classList.add('invalid');
      error3.innerHTML = 'Please enter a correct email.'
    }
  };
  
  input4.onfocus = function() {
    if (this.classList.contains('invalid')) {
     this.classList.remove('invalid');
      error3.innerHTML = "";
    }
  };

//PASSWORD

input5.onblur = function() {
  if (isValidPassword(this.value)) {
    error4.innerHTML = '';
  } else {
    this.classList.add('invalid');
    error4.innerHTML = 'This is a required field.';
  }
};

input5.onfocus = function() {
  if (this.classList.contains('invalid')) {
    this.classList.remove('invalid');
    error4.innerHTML = '';
  }
};
function isValidPassword(password) {
  return password.length >= 6;
}

// sign in
input6.onblur = function() {
    if (!input6.value.includes('@')) {
      this.classList.add('invalid');
      error5.innerHTML = 'This is required';
    }
  };
  
  input6.onfocus = function() {
    if (this.classList.contains('invalid')) {
     this.classList.remove('invalid');
      error5.innerHTML = '';
    }
  };


// function A(){
//   console.log(this);
// }
// A();
