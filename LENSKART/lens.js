// popup signin signup


function openPopup()
{
    var popup = document.getElementById('popup');
    popup.style.display = 'block';
    document.getElementById("overlay").style.display = "block";
}
function closePopup()
{
    var popup = document.getElementById('popup');
    popup.style.display = 'none';
    document.getElementById("overlay").style.display = "none";
    error5.innerHTML='';
}

function openPopup2()
{
    var popup = document.getElementById('popup2');
    popup.style.display = 'block';
    document.getElementById("overlay").style.display = "block";
}
function closePopup2()
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
function openPopup3()
{
    var popup = document.getElementById('product');
    popup.style.display = 'block';
}
function closePopup3()
{
    var popup = document.getElementById('product');
    popup.style.display = 'none';
}

// eyebrow

const carousel = document.querySelector(".carousel"),
         firstImg = carousel.querySelectorAll(".img1")[0],
          arrowIcons = document.querySelectorAll(".wrapper i");
const showHideIcons = () => 
{
   let scrollWidth = carousel.scrollWidth - carousel.clientWidth; // getting max scrollable width
   arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
   arrowIcons[1].style.display = carousel.scrollLeft == scrollWidth ? "none" : "block";


}
arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => 
    {
          let firstImgWidth = firstImg.clientWidth; // getting first img width & adding 14 margin value
           carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
            setTimeout(() => showHideIcons(), 520); // calling showHideIcons after 60ms
            console.log(firstImgWidth);
            console.log(carousel.scrollLeft);
            console.log(icon.id);

    });
});

// // Eyeglasses

// const div1 = document.getElementById('men');
// const div2 = document.getElementById('classic');
// const div3 = document.getElementById('women');
// const div4 = document.getElementById('ks');
// const div5 = document.getElementById('premium');
// const div6 = document.getElementById('computer');
// const div7= document.getElementById('eeee');
// const div8 = document.getElementById('e1-id');
// const div20 = document.getElementById('e1-id2');
// const div21= document.getElementById('e1-id3');
         
// div1.addEventListener('mouseover', () => {
//              div1.style.backgroundColor = "#F3E9E2";
//              div2.style.backgroundColor = "#F3E9E2";
//              div4.style.backgroundColor = 'transparent';
//              div3.style.backgroundColor = 'transparent';
//              div5.style.display='block';
//              div6.style.display='block';
//              div7.style.display='block';
//              div8.style.display='none';
// });
// div3.addEventListener('mouseover', () => {
//              div3.style.backgroundColor = "#F3E9E2";
//              div2.style.backgroundColor = "#F3E9E2";
//              div4.style.backgroundColor = 'transparent';
//              div1.style.backgroundColor = 'transparent';
//              div5.style.display='block';
//              div6.style.display='block';
//              div7.style.display='block';
//              div8.style.display='none';
// });
// div4.addEventListener('mouseover', () => {
//              div4.style.backgroundColor = '#F3E9E2';
//              div2.style.backgroundColor = '#F3E9E2';
//              div1.style.backgroundColor = 'transparent';
//              div3.style.backgroundColor = 'transparent';
//              div5.style.display='none';
//              div6.style.display='none';
//              div7.style.display='none';
//              div8.style.display='block';
             
// });
// div2.addEventListener('mouseover', () => {
//         div2.style.backgroundColor = '#F3E9E2';
//         div5.style.backgroundColor = 'transparent';
//         div6.style.backgroundColor = 'transparent';
//         div7.style.display='block';
//         div8.style.display='none';
//         div20.style.display='none';
//         div21.style.display='none';
// });
// div5.addEventListener('mouseover', () => 
// {
//     div2.style.backgroundColor = 'transparent';
//     div5.style.backgroundColor = '#F3E9E2';
//     div6.style.backgroundColor = 'transparent';
//     div20.style.display='block';
//     div8.style.display='none';
//     div21.style.display='none';
//     div7.style.display='none';
// });
// div6.addEventListener('mouseover', () => {
//     div2.style.backgroundColor = 'transparent';
//     div5.style.backgroundColor = 'transparent';
//     div6.style.backgroundColor = '#F3E9E2';
//     div21.style.display='block';
//     div8.style.display='none';
//     div20.style.display='none';
//     div7.style.display='none';
// });





// // Select Category

// const div9 = document.getElementById('men-1');
// const div10 = document.getElementById('classic-1');
// const div11 = document.getElementById('women-1');
// const div12 = document.getElementById('ks-1');
// const div13 = document.getElementById('premium-1');

// div9.addEventListener('mouseover', () => {
//     div9.style.backgroundColor = '#F3E9E2';
//     div10.style.backgroundColor = '#F3E9E2';
//     div11.style.backgroundColor = 'transparent';
//     div12.style.backgroundColor = 'transparent';
//     div10.style.display='block';
//     div13.style.display='none';
// });
// div11.addEventListener('mouseover', () => {
//     div11.style.backgroundColor = '#F3E9E2';
//     div10.style.backgroundColor = '#F3E9E2';
//     div9.style.backgroundColor = 'transparent';
//     div12.style.backgroundColor = 'transparent';
//     div10.style.display='block';
//     div13.style.display='none';
// });
// div12.addEventListener('mouseover', () => {
//     div12.style.backgroundColor = '#F3E9E2';
//     div10.style.backgroundColor = 'transparent';
//     div11.style.backgroundColor = 'transparent';
//     div9.style.backgroundColor = 'transparent';
//     div10.style.display='block';
//     div13.style.display='block';
// });

// // sunglasses

// const div14 = document.getElementById('men4');
// const div15 = document.getElementById('classic4');
// const div16 = document.getElementById('women4');
// const div17 = document.getElementById('premium4');
// const div18 = document.getElementById('eee2');
// const div19 = document.getElementById('e2-id');

// div14.addEventListener('mouseover', () => {
//     div14.style.backgroundColor = '#F3E9E2';
//     div15.style.backgroundColor = '#F3E9E2';
//     div16.style.backgroundColor = 'transparent';

// });
// div16.addEventListener('mouseover', () => {
//     div16.style.backgroundColor = '#F3E9E2';
//     div15.style.backgroundColor = '#F3E9E2';
//     div14.style.backgroundColor = 'transparent';

// });
// div15.addEventListener('mouseover', () => {
//    div18.style.display='block';
//    div19.style.display='none';

// });
// div17.addEventListener('mouseover', () => {
//     div18.style.display='none';
//     div19.style.display='block';
//     div15.style.backgroundColor = 'transparent';

// });





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


