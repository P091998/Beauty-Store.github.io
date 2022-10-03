const formname=document.querySelector('#searchBrands');
const res=document.querySelector('#tableResult');
const displayImage=document.querySelector('#displayImage');
console.log("formName"+formname);
formname.addEventListener('click',getDetails);

var i=0;

function getDetails()
{
    // e.preventDefault();
    // displayImage.style.display="flex";
    // res.style.display="flex";
    const display=document.querySelector('#display');
    display.style.display="flex";

    const order=document.querySelector('#order');
    order.style.display="block";

    change.style.display="block"

    const colour_bg=document.querySelector('#colour_bg');
    colour_bg.style.display="none";
    formname.style.display="none";

    const quantity=document.querySelector('#quantity');
    quantity.style.display="flex";

    i=0;

    const brandName=formname.value; console.log("brandName"+brandName);
    fetchBrandDetails(brandName,i);
}

var rcopy=undefined;

const fetchBrandDetails=async(brandName,i)=>{
    const r=await axios.get(`http://makeup-api.herokuapp.com/api/v1/products.json?brand=${brandName}`);
    rcopy=r;
    console.log(r);

    const brand=r.data[i].brand;
    const category=r.data[i].category;
    const name=r.data[i].name;
    const price=r.data[i].price;
    const image=r.data[i].image_link;
    
    displayImage.innerHTML=`<img src=${image} class="img-fluid" alt="Image"/>`;

    res.innerHTML=
    `<tr style="font-weight:600;">
        <td style="font-weight:bolder; text-decoration: underline;">Property</td>
        <td style="font-weight:bolder; text-decoration: underline;">Value</td>
    </tr>
    <tr>
        <td>Brand:</td>
        <td>${brand}</td>
    </tr>
    <tr>
        <td>Category:</td>
        <td>${category}</td>
    </tr>
    <tr>
        <td>Name:</td>
        <td>${name}</td>
    </tr>
    <tr>
        <td>Price:</td>
        <td>$${price}</td>
    </tr>
    </tr>`
}

const next=document.querySelector('#next');
next.addEventListener('click',nextPage);

function nextPage()
{
    if(i<rcopy.data.length-1)
    {
        i++;
        const brandName=formname.value;
        fetchBrandDetails(brandName,i);
    }
}
   
const previous=document.querySelector('#previous');
previous.addEventListener('click',previousPage);
   
function previousPage()
{
    if(i>0)
    {
        
        i--;
        const brandName=formname.value;
        fetchBrandDetails(brandName,i);
    }
}

const order=document.querySelector('#order');
order.addEventListener('click',displayQuantity);

function displayQuantity()
{
    const quantity=document.querySelector('#quantity');
    quantity.style.display="flex";
}

const count=document.querySelector('#count');

const increase=document.querySelector('#increase');
increase.addEventListener('click',increaseQuantity);

function increaseQuantity()
{
    var i=count.innerHTML; console.log("iIQ="+i);
    i++;
    count.innerHTML=i;
}

const decrease=document.querySelector('#decrease');
decrease.addEventListener('click',decreaseQuantity);

function decreaseQuantity()
{
    var i=count.innerHTML;
    if(i>1)
    {
        i--;
        count.innerHTML=i;
    }
}

// const save=document.querySelector('#save');
// save.addEventListener('click',saveAndContinue);

// function saveAndContinue()
// {checkout.style.display="none";
//     const myTimeout = setTimeout(addressSaved, 1000);console.log(myTimeout)
//     function addressSaved()
//     {
//         `<div style="background-color: peachpuff;">
//             <p>Address saved successfully.</p>
//         </div>`
//     }
//     // displayImage.style.display="none";
//     // tableResult.style.display="none";
//     // order.style.display="none";
//     // address.style.display="none";

//     // const searchBrands=document.querySelector('#searchBrands');
//     // const orderNowText=document.querySelector('#orderNowText');

//     // formname.style.display="none";
//     // orderNowText.style.display="none";

//     // const orderPlaced=document.querySelector('#orderPlaced');
//     // orderPlaced.style.display="flex";

//     // const continueBrowsing=document.querySelector('#continueBrowsing');
//     // continueBrowsing.style.display="flex";
// }

const buyNow=document.querySelector('#buyNow');
buyNow.addEventListener('click',buyDetails);

function buyDetails()
{
    quantity.style.display="none";
    change.style.display="none";
    display.style.display="none";
    buyNow.style.display="none";

    // const colourpop_top=document.querySelector('#colourpop_top');
    // colourpop_top.style.display="none";

    address.style.display="block";

    const orderItems=document.querySelector('#orderItems');
    orderItems.style.display="flex";

    const footer=document.querySelector('#footer');
    footer.style.display="block";

    orderDetails=document.querySelector('#orderDetails');

    var j=count.innerText;

    const brand=rcopy.data[i].brand; orderDetails.innerHTML=brand;
    const category=rcopy.data[i].category;
    const name=rcopy.data[i].name;
    const price=rcopy.data[i].price;

    // var j=i+1;

    var totalPrice=undefined;
    totalPrice=eval("price*j");

    orderDetails.innerHTML=
    `<tr>
        <td>Order details:</td>
        <td></td>
    </tr>
    <tr>
        <td>Brand</td>
        <td>${brand}</td>
    </tr>
    <tr>
        <td>Category</td>
        <td>${category}</td>
    </tr>
    <tr>
        <td>Name</td>
        <td>${name}</td>
    </tr>
    <tr>
        <td>Price</td>
        <td>$${totalPrice}</td>
    </tr>
    </tr>`

    address.style.display="block";
}

const checkout=document.querySelector('#checkout');
checkout.addEventListener('click',saveAndContinue);

function saveAndContinue()
{
    var j=count.innerText;

    const brand=rcopy.data[i].brand; orderDetails.innerHTML=brand;
    const category=rcopy.data[i].category;
    const name=rcopy.data[i].name;
    const price=rcopy.data[i].price;

    // var j=i+1;

    const orderDetailsPayment=document.querySelector('#orderDetailsPayment');
    orderDetailsPayment.style.display="flex";

    const paymentOption=document.querySelector('#paymentOption');
    paymentOption.style.display="flex";

    var totalPrice=undefined;
    totalPrice=eval("price*j");

    orderDetailsPayment.innerHTML=
    `<tr>
        <td>Order details:</td>
        <td></td>
    </tr>
    <tr>
        <td>Brand</td>
        <td>${brand}</td>
    </tr>
    <tr>
        <td>Category</td>
        <td>${category}</td>
    </tr>
    <tr>
        <td>Name</td>
        <td>${name}</td>
    </tr>
    <tr>
        <td>Price</td>
        <td>$${totalPrice}</td>
    </tr>
    </tr>`

    address.style.display="none";

    checkout.style.display="none";

    const footer=document.querySelector('#footer');
    footer.style.display="none";

    const backs1=document.querySelector('#back1');
    backs1.style.display="flex";
}

const continuePayment=document.querySelector('#continue');
continuePayment.addEventListener('click',continueWithPayment);

function continueWithPayment()
{
    const radioBtns=document.querySelectorAll('#radioBtn');console.log("radioBtn"+radioBtn[0]);
    if(radioBtns[0].checked==true || radioBtns[1].checked==true || radioBtns[2].checked==true)
    {
        const netBanking=document.querySelector('#netBanking');
        netBanking.style.display="flex";

        const payment=document.querySelector('#payment');
        payment.style.display="flex";
    }
    else
    {
        const confirmPayment=document.querySelector('#confirmPayment');
        confirmPayment.style.display="flex";
    }
}

const payments=document.querySelector('#payment');
payments.addEventListener('click',proceedWithPayment);

function proceedWithPayment()
{
    const netBankingDetails=document.querySelectorAll('#netBankings');
    if(netBankingDetails[0].checked==true || netBankingDetails[1].checked==true || netBankingDetails[2].checked==true)
    {
        const bankDetail=document.querySelector('#bankDetails');
        bankDetail.style.display="block";

        const resets=document.querySelector('#reset');
        resets.style.display="flex";

        payments.style.display="none";

        const confirmPayment=document.querySelector('#confirmPayment');
        confirmPayment.style.display="flex";
    }
    else
    {
        const bankDetailsOther=document.getElementById('bankDetailsOthers');
        bankDetailsOther.style.display="block";

        const resets=document.querySelector('#reset');
        resets.style.display="flex";

        payments.style.display="none";

        const confirmPayment=document.querySelector('#confirmPayment');
        confirmPayment.style.display="flex";
    }
}

const resets=document.querySelector('#reset');
resets.addEventListener('click',resetPaymentMethod);

function resetPaymentMethod()
{
    resets.style.display="none";
    payments.style.display="flex";

    const bankDetailsOther=document.querySelector('#bankDetailsOthers');
    bankDetailsOther.style.display="none;"

    const bankDetail=document.querySelector('#bankDetails');
    bankDetail.style.display="none";

    const confirmPayment=document.querySelector('#confirmPayment');
    confirmPayment.style.display="none";
}

// const continues=document.getElementById('continue');
// continues.addEventListener('click',bankDetailOption);

// function bankDetailOption()
// {
//     const bankOption=document.querySelector('#bankOption');
//     bankOption.style.display="flex";
// }