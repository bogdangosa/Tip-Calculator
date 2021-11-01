let TipButtons = document.getElementsByClassName("tip-button");
let CustomTipButton = document.getElementById("custom-tip-button");
let BillInput = document.getElementById("bill-input");
let NrOfPeopleInput = document.getElementById("nr-people-input");
let TipPerPerson = document.getElementById("tip-person");
let TotalPerPerson = document.getElementById("total-person");
let ButtonActivated = 0;

for(let i=0;i<TipButtons.length;i++){
    TipButtons[i].addEventListener('click',()=>{
        if(ButtonActivated!=5)
            TipButtons[ButtonActivated].classList.remove("tip-button-selected");
        else
            CustomTipButton.value=undefined;
        ButtonActivated=i;
        TipButtons[i].classList.add("tip-button-selected");
        UpdateResult();
    });

}

CustomTipButton.addEventListener('change',()=>{
    if(CustomTipButton.value!=undefined){
        TipButtons[ButtonActivated].classList.remove("tip-button-selected");
        ButtonActivated=5;
        console.log("here");
    }
})

let UpdateResult = () =>{
    let percentage ;
    if(ButtonActivated!=5){
        percentage = TipButtons[ButtonActivated].textContent;
        percentage = percentage.substring(0,percentage.length-1);
    }
    else{
        percentage = CustomTipButton.value;
    }
    percentage = parseFloat(percentage);
    let total=0;
    if(NrOfPeopleInput.value!=0)
        total = BillInput.value/NrOfPeopleInput.value;
    TipPerPerson.textContent = ((total*percentage)/100).toFixed(2);
    TotalPerPerson.textContent = (total+(total*percentage)/100).toFixed(2);
}


BillInput.addEventListener('change',()=>{
    if(BillInput.value!=undefined && NrOfPeopleInput!=undefined)
        UpdateResult();

})

NrOfPeopleInput.addEventListener('change',()=>{
    if(BillInput.value!=undefined && NrOfPeopleInput!=undefined)
        UpdateResult();

})




let ResetButton = document.getElementById("reset-button");
ResetButton.addEventListener('click',()=>{
    BillInput.value = undefined;
    NrOfPeopleInput.value = undefined;
    CustomTipButton.value = undefined;
    TipPerPerson.textContent="0.00";
    TotalPerPerson.textContent="0.00";
})