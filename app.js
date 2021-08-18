function updateProductNumber(product,productCost, incressing){
    const productInput = document.getElementById(product + '-input')
    let productTotal = productInput.value
    if(incressing){
        productTotal = parseInt(productTotal) + 1
    }else if(productTotal > 0){
        productTotal = parseInt(productTotal) - 1
    }
    productInput.value = productTotal
    // update caste total
    const productTotalField = document.getElementById(product + '-total')
    productTotalField.innerText = productTotal * productCost

    //  caculate total
    calculateTotal()

}

function getInputValue (product){
    const productInput = document.getElementById(product + '-input')
    const productNumberTxt = productInput.value
    const productNumber = parseInt(productNumberTxt)
    return productNumber
}
function calculateTotal (){
    const phoneTotal = getInputValue('phone') * 1289
    const caseTotal = getInputValue('case') * 59
    const subTotal = phoneTotal + caseTotal
    const tax = subTotal / 10
    document.getElementById('sub-total').innerText = subTotal
    document.getElementById('tax-amount').innerText = tax
    document.getElementById('total-amount').innerText = subTotal + tax
}
    
//handle phone
document.getElementById('phone-plus-button').addEventListener('click', function(){
    updateProductNumber('phone',1289 ,true)
})
document.getElementById('phone-minus-button').addEventListener('click' ,function(){
    updateProductNumber('phone' , 1289, false)
})
//handle Case 
document.getElementById('case-plus-button').addEventListener('click' , function(){
   updateProductNumber('case', 59, true)
})
document.getElementById('case-minus-btn').addEventListener('click' , function(){
    updateProductNumber('case', 59,false)
})