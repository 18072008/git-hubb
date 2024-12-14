
var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex> slides.length) {slideIndex = 1}
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 2000);
}

///
const products =[
    {
        imgUrl:
        "https://tse4.mm.bing.net/th?id=OIP.f8rYDzYNUsWGsS2-W6Dt8wHaHa&pid=Api&P=0&h=220",
        name:"Bộ quần áo len",
        price:"300.000đ",
    },
    {
        imgUrl:
        "https://tse4.mm.bing.net/th?id=OIP.Mjg7HUcxKfDGLEmj3pRB0wHaHa&pid=Api&P=0&h=220",
        name:"Áo khoác nam",
        price:"300.000đ",
    },
    {
        imgUrl:
        "https://tse2.mm.bing.net/th?id=OIP.HYDIJQG1SIm3OsmWqS_VQwHaJd&pid=Api&P=0&h=220",
        name:"Áo ngoài mỏng",
        price:"300.000đ",
    },
    {
        imgUrl:
        "https://tse2.mm.bing.net/th?id=OIP.AtFc6nIOsH_gRlcRzVxDlAHaHa&pid=Api&P=0&h=220",
        name:"Bộ quần áo adidas",
        price:"300.000đ",
    },
    {
        imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtXsRLivZMN6JSrQO4vsulzfv5t8HNw-Wl8g&s",
        name:"Bộ quần áo in đi ngủ",
        price:"300.000đ",
    },
    {
        imgUrl:
        "https://tse3.mm.bing.net/th?id=OIP.bi5aeXWDmLV-HRkWbJbkQwAAAA&pid=Api&P=0&h=220",
        name:"Áo khoác cam",
        price:"300.000đ",
    },
    {
        imgUrl:
        "https://tse3.mm.bing.net/th?id=OIP.eqJefi8D38e7f0pa05fi3QAAAA&pid=Api&P=0&h=220",
        name:"Áo liền thân ",
        price:"300.000đ",
    },
    {
        imgUrl:
        "https://tse1.mm.bing.net/th?id=OIP.Rgt_eyPgWd6lteoYRw1WGAHaHa&pid=Api&P=0&h=220",
        name:"Bộ quần áo có mũ",
        price:"300.000đ",
    },
    {
        imgUrl:
        "https://tse4.mm.bing.net/th?id=OIP.m6zWPrCp5_bA5BbLo7sp5gHaJh&pid=Api&P=0&h=220",
        name:" Áo len cổ tròn",
        price:"300.000đ",
    },
    {
        imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNhXvXzdTBYYDk-9j8Vw2DuBIoLHRG_2uAQw&s",
        name:"Bộ quần áo rồng",
        price:"300.000đ",
    },
    {
        imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZeP4Vag30TnXo_tV8cpXyPBqDOWP7d7bOKA&s",
        name:"Áo khoác phao",
        price:"300.000đ",
    },
    {
        imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiIzCvjLSyXiJ9qHq1BiABrJkm4UksVDeEyg&s",
        name:"Áo khoác phao dài",
        price:"300.000đ",
    },
    {
        imgUrl:
        "https://tse2.mm.bing.net/th?id=OIP.4xHll9rS2EePr_j8pmKhsQHaHa&pid=Api&P=0&h=220",
        name:"Bộ quần áo dài thời trang",
        price:"300.000đ",
    },
    {
        imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8pqtwZqCIGPvuC4KdxU0lwctDmHoa2nAliQ&s",
        name:"Bộ quần áo len nữ",
        price:"300.000đ",
    },
    {
        imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQei2w7PmVD9zXJohtwUxtnu3z6qx0CppGjtw&s",
        name:"Áo khoác phao",
        price:"300.000đ",
    },
];
function renderProduct() {
    const productlist = document.getElementById("product-list");

    products.forEach((product) =>{
        const divElement = document.createElement("div");
        divElement.className = "product";
        divElement.innerHTML=`
        <img src="${product.imgUrl}" alt="">
        <p>${product.name}</p>
        <p>${product.price} VNĐ</p>
        <button>thêm vào giỏ hàng</button>
        `;
    productlist.appendChild(divElement);    
    })
}

renderProduct();

///
let mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}