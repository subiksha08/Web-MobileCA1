// import products from product.json;
var products=[
  {
    "name": "Fitness Tracker Pro",
    "ratings": "4.5 out of 5",
    "price": 79.99,
    "offers": "15% off for a limited time",
    "image": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSfFmJcFBjppverGJpcUZBgEM72Lf6IYq4npoMF_lPYgrHRTSFOVpHPqSRyIkwkABmNF0xuAe_qYOEI2bjdFdttIPJ8U_amMRQ-uO6OigQL5IB4Y6eyHeRERRE6s-SmaCg61eQiHKJK&usqp=CAc"
},
{
    "name": "Adjustable Dumbbells Set",
    "ratings": "4.8 out of 5",
    "price": 199.99,
    "offers": "Free shipping",
    "image": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRBCCgNGvJzh76fuW3jhUuGnDZpabctIRsT94yCEAn2xqbOaRX80raNx0X8pc3B3fZiaBMSJ1hOGmAPRhlyjgGY3PEJVfx-9pPaHfOsTliRTaJ_2MPUTHHyM6EZ_OCE4XkTBMr4ZQ&usqp=CAc"
},
{
    "name": "Yoga Mat",
    "ratings": "4.6 out of 5",
    "price": 9.00,
    "offers": "Buy one, get one 50% off",
    "image": "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRMG8qi2oEgou28iv3WgTFzDlBGFZ4CfOTSyewv9mUHbHkT9_0qoA7AX1Tn6K9ds2vNMiNEDM7Enq-6KE2DKUGEl-TA3M4b9IHbKkzj18-CyBJx72J3SGrwBiJq_NNRB84nPOtBPw&usqp=CAc"
},
{
    "name": "Indoor Cycling Bike",
    "ratings": "4.7 out of 5",
    "price": 449.99,
    "offers": "10% off with code FIT10",
    "image": "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQNlpHlSYw0gN-oR7NHGeBq7uCoOK2Vea-h5NALPGS4S_U_gq5QBdftOunHnvyPtHocIySMIOUCqJYier3KQ0Dl5pIED0HaTFK9pm9UTY_YyfDRtSPGcHzebj4fVAxauynEtYk2Dw&usqp=CAc"
},
{
    "name": "Resistance Bands Set",
    "ratings": "4.4 out of 5",
    "price": 39.99,
    "offers": "Prime Delivery available",
    "image": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTHjeMrV4J3xnA6KTs-b22AIdk3xL4BkM03b96D7oIOvKEO-VnFwJTGz7WumIB7CKAdxeKbfqt7qjNRLSrKudH7OlrJJdocqy1sKxQlstzuDg_GzO4oYswL5MZHTagYbHRbJo4_eQ&usqp=CAc"
},
{
    "name": "Protein Powder",
    "ratings": "4.9 out of 5",
    "price": 29.99,
    "offers": "Subscribe and save 10%",
    "image": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcT649IBGgicpFmd0wmSkbVYOEpykiyAB1a0-fh6CgL-Lh48tA_vsaEItFO1m5iE1oyt86tLXx2nRy8JkdK2TgjrvizYLMuWO_fqtamaKN-dfO6BDWC6QKnB1w&usqp=CAc"
},
{
    "name": "Jump Rope",
    "ratings": "4.5 out of 5",
    "price": 9.99,
    "offers": "Limited time sale",
    "image": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRh6sn0WaD3h6rjMX5w5hd9bmFXiHlUtd2waQxzE0GzjJ6T3lnwfDQ4mZhFFBwJoWZ8cDHYvzaGLZqgbwz7nyYUSJdCACBEJlQhwYkryWEr_lABryQJs4xC3VRBDWZdyok4JVpPjpoEls4&usqp=CAc"
},
{
    "name": "Foam Roller",
    "ratings": "4.6 out of 5",
    "price": 19.99,
    "offers": "Buy 2, get 1 free",
    "image": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQi5QR-MAUaVUQ6Sl8ct_AWam1_i_maSnq4Ym2F65pxQ5KdRE0iULBpqn7VBJ71Oy2V4aldEqilNr9ng-501hQQjfhzGlWMLAujI9SXECjJe3NfH622qOxP&usqp=CAc"
},
{
    "name": "Running Shoes",
    "ratings": "4.7 out of 5",
    "price": 89.99,
    "offers": "Free returns within 30 days",
    "image": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcS1-alDI9kqO1fTxMmuAZs2iO49ecXN9c8E0nrEi3vVyfKAi_k1MJm1-UFsDUqhqh1hij3wQ0s7R7cjfUfshRvBFje6PIFcZemHBl2UWaE0Cj26AuZrFE1Z36bo2wP9o-Erhn_VVQLRNMA&usqp=CAc"
  },
  {
    "name": "Gym Bag",
    "ratings": "4.3 out of 5",
    "price": 34.99,
    "offers": "10% off for new customers",
    "image": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRtuEDjSy4jHyYnc6uXrpsnSP0X-Cc_ovnjP8ffbMBl8EQvEk0pgyGjOY4CJxg_5eqb2n5wELH023DZk_R2wdmyDOLqVUWvNYdMH66GDVxmTseGEFcPt7X_aJ0bE5ejpY21QFdxOQ&usqp=CAc"
  },
  {
    "name": "Smart Water Bottle",
    "ratings": "4.6 out of 5",
    "price": 11.99,
    "offers": "Free shipping on orders over $25",
    "image": "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1673285872-311VlpLQUL._SL500_.jpg?crop=1xw:1.00xh;center,top&resize=980:*"},
  {
    "name": "Protein Bars Variety Pack",
    "ratings": "4.7 out of 5",
    "price": 14.99,
    "offers": "Buy 3, get 1 free",
    "image": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQv-JEImPq4yOXUhdAe0UGYV5cponZvDutWKg87_WEGjEjBE0g7mjo-L8SyDyzp2fPyXwa9v4heAAUiEMG_AQP0MwyNLJDmhJs8R5wKkDCveJC1SQXRJ25v&usqp=CAc"
  },
  {
    "name": "Exercise Ball",
    "ratings": "4.5 out of 5",
    "price": 21.99,
    "offers": "10% off for first-time buyers",
    "image": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTSe_sfcNAGmTU8AZo7Qlr2eOiM1NG__H1I03RT0oFuQX58a7rMcni31Ky-nyUWOlthTzQsoPPqz9lINiFaLh7-hHASBSNdsbH-PEwSgN7Olkb31SY_aYrM&usqp=CAc"
  },
  {
    "name": "Fitness Gloves",
    "ratings": "4.4 out of 5",
    "price": 19.99,
    "offers": "Limited stock, order now",
    "image": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSs1dhMYOeO8CiDt5tdVkBTIToISuYtV-8F_F9lfsidAXmWzS5dUe4TRWYMtqOVtYQo3m5Y0GbOsQdxswAPCZZGVtg_jq_XQ9Hm929W9iB3lfKq1Ae-vV0A0t1O7l5ufw&usqp=CAc"
  },
  {
    "name": "Treadmill",
    "ratings": "4.8 out of 5",
    "price": 1799.99,
    "offers": "Free assembly included",
    "image": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQoR1IgY5It8l1VQUEw_Pw10eMlw6XcJQtAJTCAchABKS06IICXFpLTQD8SPcBRxYYilANJL3UNsGEh6KePNNZuJOFpdXXm7FoDe0w3YqAv81Il9-dslQtaP6SR7lHqUR_VOpb5Qk8&usqp=CAc"
  },
  {
    "name": "Protein Shaker Bottle",
    "ratings": "4.5 out of 5",
    "price": 8.99,
    "offers": "BPA-free, leak-proof design",
    "image": "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSU2tZgd-vErxBB3zxaHzuT0OvHW0XOaBBFXaHUmpUh9_zyI__-q9BgPQqTBqExnM3WYoK2zUsDxt7v2rdrxicmTlXQSOTeRGYes9vH74hkcjBqMN640rf4oWi2onaip2oHaeEiCwwrJQ&usqp=CAc"
  },
  {
    "name": "Weightlifting Gloves",
    "ratings": "4.7 out of 5",
    "price": 10.99,
    "offers": "Durable and comfortable",
    "image": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSXKbG_QLYTkgWjiwbf9tJ_dRjXpdWw11Fr7w9KV4duYMxtafkHrLGN9W2Ff2YltUPM-hhxbAVZyQKd6LsaOzDk5MHysRpyTT5kSIdIDozhSuf0-pP-1smD&usqp=CAc"
  },
  {
    "name": "Running Jacket",
    "ratings": "4.5 out of 5",
    "price": 39.99,
    "offers": "Reflective for night runs",
    "image": "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTkj4EqNajKdOzEubkdBrp1oElmVSUAvBav7ZZhV9ehICOf6VwTd2BtrefroOmcg2BN9iUyxG__Z7roWY6OUgximUy1n0tCpvlvRdTbSLEHwudEDAiankcA7WdFBtfsIMuvsBpNNmg&usqp=CAc"
  },
  {
    "name": "Home Gym System",
    "ratings": "4.8 out of 5",
    "price": 599.99,
    "offers": "All-in-one fitness solution",
    "image": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQwKzlisdSb3lbO5wV3uTKBNqz6t7uYA3UPVtb-4xGCsKg59krVooTpfMC3tl56lh62xl_Smui-12660Gy6mLQ_jaJ6HOsfXctBIgt9O9DaNc1Vx9PLgmoKZJijrze0glSMFNuJQvCQGik&usqp=CAc"
  }
];


    const productContainer = document.querySelector('.products');
    populateData(products);

function populateData(products){
  productContainer.innerHTML = '';
    products.forEach(createItem)
}

function createItem(product){
    var el='<div class="product-list card col-md-6 col-xl-3 col-sm-12 ">'+
    '<img src="'+product.image+'" class="card-img-top">'+
    '<h1 class="card-title">'+product.name+'</h1>'+
    '<h3 class="card-text">'+product.ratings+'</h3>'+
    '<h2 class="card-text">'+"$"+product.price+'</h2>'+
    '<h2 class="card-text offer">'+product.offers+'</h2>'+
    '<a class="card-text  onclick="createRegistrationForm(product.name,product.price )">'+"To Register"+'</a>'+
    '</div>';

    productContainer.innerHTML+= el
}

 const searchInput = document.querySelector('.search-input');
    searchInput.addEventListener('input', searchProducts);

// Function to filter products based on the search input
function searchProducts() {
  const query = searchInput.value.toLowerCase();
  const searchedProducts = products.filter(product => product.name.toLowerCase().includes(query));
  populateData(searchedProducts);
}

 // Function to filter products by price range
 function filterByPriceRange(min, max) {
  const filteredProducts = products.filter(product => product.price >= min && product.price <= max);
  populateData(filteredProducts);
  console.log(filteredProducts);
}

      // Function to dynamically create the registration form
      function createRegistrationForm( productName, productPrice) {
        const form = document.createElement('div');
        form.classList.add('registration-form');
        form.innerHTML = `
            <h2>Product Registration Form</h2>
            <form>
                <label for="fullName">Full Name:</label>
                <input type="text" id="fullName" name="fullName" required>

                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required>

                <!-- Hidden fields to store product details -->
                
                <input type="hidden" id="productName" name="productName" value="${productName}">
                <input type="hidden" id="productPrice" name="productPrice" value="${productPrice}">

                <button type="button" onclick="registerProduct()">Register</button>
                <span class="close-btn" onclick="closeRegistrationForm()">Close</span>
            </form>
        `;
        return form;
    }

    // console.log((createRegistrationForm('dumbells', 200)));

    // Function to open the registration form for a specific product
    function openRegistrationForm(productName, productPrice) {
        const formContainer = document.getElementById('registrationForm');
        formContainer.innerHTML = ''; // Clear previous form

        // Create and append the registration form to the container
        const registrationForm = createRegistrationForm( productName, productPrice);
        formContainer.appendChild(registrationForm);

        // Display the registration form
        formContainer.style.display = 'block';
    }

    // Function to handle product registration
    function registerProduct() {
        // Retrieve form data
        const fullName = document.getElementById('fullName').value;
        const email = document.getElementById('email').value;
        const productName = document.getElementById('productName').value;
        const productPrice = document.getElementById('productPrice').value;

        // Add your registration logic here
        // You can use the retrieved data to process the registration

        // Display a confirmation message
        const confirmationMessage = `Product ${productName} registered successfully for ${fullName} with email ${email}.`;
        alert(confirmationMessage);

        // Close the registration form
        closeRegistrationForm();
    }

    // Function to close the registration form
    function closeRegistrationForm() {
        const formContainer = document.getElementById('registrationForm');
        formContainer.style.display = 'none';
    }

