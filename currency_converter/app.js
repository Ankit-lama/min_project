const baseUrl = "https://latest.currency-api.pages.dev/v1/currencies";

const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const fromcurr = document.querySelector(".from select");
const tocurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");


 for(let select of dropdowns) {
   for(currCode in countryList) {
        let newoption = document.createElement("option");
        newoption.innerText = currCode;
        newoption.value = currCode;
        if(select.name=="from" && currCode=="USD") {
            newoption.selected = "selected";
        }
        else if(select.name=="to" && currCode=="INR") {
            newoption.selected = "selected";
        } 
        select.append(newoption);
}
    select.addEventListener("change", (e) => {
        flag(e.target);

    });
}

const flag = (element) => {
    let currCode = element.value;
    let countryCode = countryList[currCode];
    let imgTag = element.parentElement.querySelector("img");
    imgTag.src = `https://flagcdn.com/48x36/${countryCode.toLowerCase()}.png`;

}

btn.addEventListener("click", async (e) => {
    e.preventDefault();

    let amount = document.querySelector(".amount input");
    let amtval = amount.value;

    if (amtval == "" || amtval == "0") {
        amount.value = "1";
        amtval = 1;
    }

    const from = fromcurr.value.toLowerCase();
    const to = tocurr.value.toLowerCase();

    const url = `${baseUrl}/${from}.json`;

    try {
        let response = await fetch(url);
        let data = await response.json();

        console.log(data);

        let rate = data[from][to];  
        console.log("Rate:", rate);

        let finalAmount = amtval * rate;
        console.log("Converted:", finalAmount);

        msg.innerText = `${amtval} ${fromcurr.value} = ${finalAmount.toFixed(2)} ${tocurr.value}`;
    } catch (error) {
        console.log("Error:", error);
        msg.innerText = "Error occurred while fetching exchange rate.";
    }
});

const updateRate = async () => {
    let amtval = 1; // default 1 USD

    const from = fromcurr.value.toLowerCase();
    const to = tocurr.value.toLowerCase();

    const url = `${baseUrl}/${from}.json`;

    try {
        let response = await fetch(url);
        let data = await response.json();

        let rate = data[from][to];

        // Show default 1 USD = XX INR
        msg.innerText = `1 ${fromcurr.value} = ${rate.toFixed(2)} ${tocurr.value}`;

    } catch (error) {
        msg.innerText = "Failed to load rate";
        console.log(error);
    }
};
window.addEventListener("load", () => {
    updateRate();
});