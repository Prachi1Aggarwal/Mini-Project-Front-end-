const BASE_URL = `const BASE_URL = "https://v6.exchangerate-api.com/v6/3585a1345d35c5a829f96c4b/latest/USD`;

const dropdown = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const fromCurrency = document.querySelector(".from select");
const toCurrency = document.querySelector(".to select");
const output = document.querySelector(".output");

//https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD
const updateFlag = (ele)=>{
    let currCode = ele.value;
    let countryCode = countryList[currCode];
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = ele.parentElement.querySelector("img");
    img.src = newSrc;
};

for(let select of dropdown){
    for(currCode in countryList){
        let newOption = document.createElement("option");
        newOption.innerText=currCode;
        newOption.value = currCode;
        if(select.name=="from" && currCode=="USD"){
            newOption.selected = "selected";
        }else if(select.name=="to" && currCode=="INR"){
            newOption.selected = "selected";
        }
        select.append(newOption);
    }
    select.addEventListener("change",(e)=>{
        updateFlag(e.target);
    });
}

const updateExchangeRate = async ()=>{
    let amount = document.querySelector(".input-container input");
    let amtValue = amount.value;
    if(amtValue==='' || amtValue<1){
        amtValue=1;
        amount.value = "1";
    }
    const URL =  `https://v6.exchangerate-api.com/v6/3585a1345d35c5a829f96c4b/latest/${fromCurrency.value}`;
    let response = await fetch(URL);
    let data = await response.json();
    let rate = data.conversion_rates[toCurrency.value];
    let outputAmount = (amtValue*rate).toFixed(2);
    output.innerText = `${amtValue} ${fromCurrency.value} = ${outputAmount} ${toCurrency.value}`;
};

btn.addEventListener("click",(e)=>{
    e.preventDefault();
    updateExchangeRate();
});

window.addEventListener("load",()=>{
    updateExchangeRate();
});