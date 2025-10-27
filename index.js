/*** VSCodeEDU preview fix ***/
html, body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    scroll-padding-top: 80px;
    font-family: Tahoma, sans-serif;
}

/*** Body ***/
body {
    font-size: 16px;
    color: var(--text-color);
    padding: 30px;
    background-color: var(--bg-color);
    transition: background-color 0.3s, color 0.3s;
}

/* Dark Mode */
body.dark-mode {
    background-color: var(--bg-color-dark-mode);
    color: var(--text-color-dark-mode);
}

/*** Text Styles ***/
h1 {
    font-family: 'Just Another Hand', cursive;
    font-size: 48px;
    font-weight: normal;
    color: black; 
    margin: 0;
    text-align: center;
}

h2 {
    font-family: 'Indie Flower', cursive;
    font-size: 16px;
    color: #695C5C;
    text-align: center;
}

h3, h4 {
    font-family: 'Indie Flower', cursive;
    font-size: 24px;
    color: black;
    text-align: center;
}

h5 {
    font-family: 'Indie Flower', cursive;
    font-size: 16px;
    color: #695C5C;
    text-align: center;
}

p {
    font-family: 'Imprima', cursive;
    font-size: 16px;
    color: #2E2828;
    max-width: 700px;
    margin: 20px auto;
    line-height: 1.5;
    text-align: left;
}

button {
    font-size: 13px;
    padding: 5px 10px;
    margin: 20px;
    background-color: #E2E2E2;
    color: black;
    border: 1px solid;
    border-radius: 5px;
    cursor: pointer;
}

button:hover {
    background-color: #D9D8D8;
}

img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    max-width: 100%;
}

#header-img {
    width: 100%;
    height: 150px; 
    object-fit: cover;
}

/* UL Style */
ul {
    display: table;
    margin: 0 auto;
    padding: 0;
    list-style-position: outside;
}

ul li {
    text-align: left;
    display: list-item;
}

ul li b {
    font-family: 'Indie Flower', cursive;
    font-size: 16px;
    font-weight: bold;
}

ul li i {
    font-family: 'Imprima', cursive;
}

/*** Navbar ***/
.navbar ul {
    z-index: 1000;
    list-style: none;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: #E5D1FF;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 5px;
    margin: 0;
}

.navbar ul li a {
    text-decoration: none;
    display: block;
    font-family: 'Imprima', cursive;
    color: black;
    font-size: 14px;
    transition: background-color 0.3s;
}

.navbar ul li a:hover {
    text-decoration: underline;
}

.navbar ul li button {
    font-family: 'Imprima', cursive;
    color: white;
    font-size: 14px;
    padding: 5px 10px;
    border-radius: 5px;
    border: none;
    background-color: #4A66A3;
    cursor: pointer;
    transition: background-color 0.3s;
}

.navbar ul li button:hover {
    background-color: #7f75d2;
}

/*** RSVP Section ***/
.rsvp-container {
    display: flex; 
    justify-content: center;
    flex-direction: row; 
    gap: 20px; 
    width: 100%;
    padding-bottom: 50px; 
}

.rsvp-para {
    width: 55%; 
    padding-left: 30px;
    padding-right: 10px; 
}

.rsvp-participants {
    width: 45%; 
    padding-left: 20px;
}

.form-container {
    display: flex;
    justify-content: center;
    align-items: center;
}

#rsvp-form {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    flex-wrap: wrap;
    max-width: 1000px;
    width: 100%;
}

#rsvp-button {
    font-family: 'Imprima', cursive;
    color: white;
    font-size: 14px;
    padding: 5px 10px;
    border-radius: 5px;
    border: none;
    background-color: #4A66A3;
    cursor: pointer;
    transition: background-color 0.3s;
}

#rsvp-button:hover {
    background-color: #7f75d2;
}

.error {
    border: 2px solid rgb(193, 86, 86);
    background-color: pink;
}

/*** Success Modal ***/
.modal {
    display: none;
    position: fixed;
    z-index: 2;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%; 
    background-color: rgba(0,0,0,0.4);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.modal-container {
    padding: 20px;
    width: 40%;
    background-color: #F7E0F4;
    color: black;
    text-align: center;
    font-size: 14px;
    font-family: 'Imprima', cursive;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.modal-item {
    margin-bottom: 20px;
}

/*** Dark Mode Customization ***/
body.dark-mode .navbar ul {
    background-color: #9B9AE2;
}

body.dark-mode .navbar ul li a {
    color: white;
}

body.dark-mode h1, body.dark-mode h2, body.dark-mode h3, body.dark-mode h4, body.dark-mode h5, body.dark-mode p {
    color: white;
}

body.dark-mode a:visited * {
    color: white;
}

/*** Custom Colors ***/
:root {
    --bg-color: #EED1F1;
    --text-color: #231942;
    --bg-color-dark-mode: #a6a0cf;
    --text-color-dark-mode: #fff;
    --accent-color-light: #d2cff5;
    --accent-color-medium: #684fb5;
    --accent-color-dark: #482f95;
    --accent-color-darkest: #231942;
    --accent-color-green: #28eb76;
    --error-color: #f8bbd0;
    --error-color-border: #e63946;
}
