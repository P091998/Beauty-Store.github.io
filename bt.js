// const form=document.querySelector('#searchBrands');
// const res=document.querySelector('#tableResult');
// const displayImage=document.querySelector('#displayImage');

// var i=0;

// form.addEventListener('submit',(e)=>{
//     e.preventDefault();

//     displayImage.style.display="flex";
//     res.style.display="flex";
//     order.style.display="block";
//     change.style.display="flex"

//     i=0;

//     const brandName=form.elements.brandName.value;
//     fetchBrandDetails(brandName,i);
// })

// var rcopy=undefined;

// const fetchBrandDetails=async(brandName,i)=>{
//     const r=await axios.get(`http://makeup-api.herokuapp.com/api/v1/products.json?brand=${brandName}`);
//     rcopy=r;
//     console.log(r);

//     const brand=r.data[i].brand;
//     const category=r.data[i].category;
//     const name=r.data[i].name;
//     const price=r.data[i].price;
//     const image=r.data[i].image_link;
    
//     displayImage.innerHTML=`<img src=${image} class="img-fluid" alt="Image"/>`;

//     res.innerHTML=
//     `<tr style="float:left font-weight:600;">
//         <td style="font-weight:bolder">Property</td>
//         <td>Value</td>
//     </tr>
//     <tr>
//         <td>Brand</td>
//         <td>${brand}</td>
//     </tr>
//     <tr>
//         <td>Category</td>
//         <td>${category}</td>
//     </tr>
//     <tr>
//         <td>Name</td>
//         <td>${name}</td>
//     </tr>
//     <tr>
//         <td>Price</td>
//         <td>$${price}</td>
//     </tr>
//     </tr>`
// }

// const next=document.querySelector('#next');
// next.addEventListener('click',nextPage);

// function nextPage()
// {
//     if(i<rcopy.data.length-1)
//     {
//         i++;
//         const brandName=form.elements.brandName.value;
//         fetchBrandDetails(brandName,i);
//     }
// }
   
// const previous=document.querySelector('#previous');
// previous.addEventListener('click',previousPage);
   
// function previousPage()
// {
//     if(i>0)
//     {
        
//         i--;
//         const brandName=form.elements.brandName.value;
//         fetchBrandDetails(brandName,i);
//     }
// }

// const order=document.querySelector('#order');
// order.addEventListener('click',displayQuantity);

// function displayQuantity()
// {
//     const quantity=document.querySelector('#quantity');
//     quantity.style.display="flex";
// }

// const count=document.querySelector('#count');

// const increase=document.querySelector('#increase');
// increase.addEventListener('click',increaseQuantity);

// function increaseQuantity()
// {
//     var i=count.innerHTML;
//     i++;
//     count.innerHTML=i;
// }

// const decrease=document.querySelector('#decrease');
// decrease.addEventListener('click',decreaseQuantity);

// function decreaseQuantity()
// {
//     var i=count.innerHTML;
//     if(i>1)
//     {
//         i--;
//         count.innerHTML=i;
//     }
// }

// const checkout=document.querySelector('#checkout');
// checkout.addEventListener('click',proceedsToCheckout);

// function proceedsToCheckout()
// {
//     orderDetails=document.querySelector('#orderDetails');

//     var j=count.innerText;

//     const brand=rcopy.data[i].brand; orderDetails.innerHTML=brand;
//     const category=rcopy.data[i].category;
//     const name=rcopy.data[i].name;
//     const price=rcopy.data[i].price;

//     // var j=i+1;

//     var totalPrice=undefined;
//     totalPrice=eval("price*j");

//     orderDetails.innerHTML=
//     `<tr style="float:left font-weight:600;">
//         <td style="font-weight:bolder">Property</td>
//         <td>Value</td>
//     </tr>
//     <tr>
//         <td>Brand</td>
//         <td>${brand}</td>
//     </tr>
//     <tr>
//         <td>Category</td>
//         <td>${category}</td>
//     </tr>
//     <tr>
//         <td>Name</td>
//         <td>${name}</td>
//     </tr>
//     <tr>
//         <td>Price</td>
//         <td>$${totalPrice}</td>
//     </tr>
//     </tr>`

//     address.style.display="block";
// }

// const save=document.querySelector('#save');
// save.addEventListener('click',saveAndContinue);

// function saveAndContinue()
// {
//     displayImage.style.display="none";
//     tableResult.style.display="none";
//     order.style.display="none";
//     address.style.display="none";

//     const searchBrands=document.querySelector('#searchBrands');
//     const orderNowText=document.querySelector('#orderNowText');

//     form.style.display="none";
//     orderNowText.style.display="none";

//     const orderPlaced=document.querySelector('#orderPlaced');
//     orderPlaced.style.display="flex";

//     const continueBrowsing=document.querySelector('#continueBrowsing');
//     continueBrowsing.style.display="flex";
// }

// const continueBrowsing=document.querySelector('#continueBrowsing');
// continueBrowsing.addEventListener('click',reload);

// function reload()
// {
//     location.reload()
// }