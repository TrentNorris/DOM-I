const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Logo Img
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);
//Header Img
let codeImg = document.getElementById("cta-img");
codeImg.setAttribute('src', 'img/header-img.png');
//Middle Img
let middle_img = document.getElementById("middle-img");
middle_img.setAttribute('src', siteContent["main-content"]["middle-img-src"]);


//Nav
let nav = document.querySelector('body > div > header > nav');
var new_a = document.createElement('a')
var new_a2 = document.createElement('a');

nav.appendChild(new_a);
nav.prepend(new_a2);

let nav_a = document.querySelectorAll('nav > a');


for (let i = 0; i < nav_a.length; i++) {
  const e = nav_a[i];
  e.style = 'color: green;';
  const a_values = ['Services', 'Product', 'Vision', 'Features', 'About', 'Contact', 'Articles', 'Settings'];
  document.querySelector('body > div > header > nav > a:nth-child(' + (i + 1) + ')').innerHTML = a_values[i];
}

//CTA 
let cta_button = document.querySelector('body > div > section.cta > .cta-text > button');
let cta_h1 = document.querySelector('body > div > section.cta > .cta-text > h1');
cta_button.innerHTML = siteContent["cta"]["button"];
cta_h1.innerHTML = siteContent["cta"]["h1"];


//Main Content 


//top content

//features
let features_h4 = document.querySelector('body > div > section.main-content > div.top-content > div:nth-child(1) > h4');
let features_p = document.querySelector('body > div > section.main-content > div.top-content > div:nth-child(1) > p');
features_h4.innerHTML = siteContent["main-content"]["features-h4"];
features_p.innerHTML = siteContent["main-content"]["features-content"];

//about 
let about_h4 = document.querySelector('body > div > section.main-content > div.top-content > div:nth-child(2) > h4');
let about_p = document.querySelector('body > div > section.main-content > div.top-content > div:nth-child(2) > p');
about_h4.innerHTML = siteContent["main-content"]["about-h4"];
about_p.innerHTML = siteContent["main-content"]["about-content"];

//bottom content

//services
let services_h4 = document.querySelector('body > div > section.main-content > div.bottom-content > div:nth-child(1) > h4');
let services_p = document.querySelector('body > div > section.main-content > div.bottom-content > div:nth-child(1) > p');
services_h4.innerHTML = siteContent["main-content"]["services-h4"];
services_p.innerHTML = siteContent["main-content"]["services-content"];

//product
let product_h4 = document.querySelector('body > div > section.main-content > div.bottom-content > div:nth-child(2) > h4');
let product_p = document.querySelector('body > div > section.main-content > div.bottom-content > div:nth-child(2) > p');
product_h4.innerHTML = siteContent["main-content"]["product-h4"];
product_p.innerHTML = siteContent["main-content"]["product-content"];

//vision
let vision_h4 = document.querySelector('body > div > section.main-content > div.bottom-content > div:nth-child(3) > h4');
let vision_p = document.querySelector('body > div > section.main-content > div.bottom-content > div:nth-child(3) > p');
vision_h4.innerHTML = siteContent["main-content"]["vision-h4"];
vision_p.innerHTML = siteContent["main-content"]["vision-content"];

//Contact
let contact_h4 = document.querySelector('body > div > section.contact > h4');
let contact_p1 = document.querySelector('body > div > section.contact > p:nth-child(2)');
let contact_p2 = document.querySelector('body > div > section.contact > p:nth-child(3)');
let contact_p3 = document.querySelector('body > div > section.contact > p:nth-child(4)');
contact_h4.innerHTML = siteContent["contact"]["contact-h4"];
contact_p1.innerHTML = siteContent["contact"]["address"];
contact_p2.innerHTML = siteContent["contact"]["phone"];
contact_p3.innerHTML = siteContent["contact"]["email"];

let footer = document.getElementsByTagName('footer');
footer[0].innerHTML = siteContent["footer"]["copyright"];