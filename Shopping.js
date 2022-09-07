const listRemove = document.body.querySelectorAll(".delete");
const listSub = document.querySelectorAll(".minus");
const listAdd = document.querySelectorAll(".plus");
const totalPrice = document.querySelector("#totalPrice");
const totalDiscount = document.querySelector("#totalDiscount");
const totalTax = document.querySelector("#totalTax");

listRemove.forEach((e) => {
  e.addEventListener("click", () => {
    if (confirm("Bạn có muốn xóa sản phẩm?")) {
      e.parentElement.parentElement.parentElement.remove();
    }
  });
});

listAdd.forEach((e) => {
  e.addEventListener("click", () => {
    const input = e.parentElement.querySelector(".quantity");
    input.value = Number(input.value) + 1;
  });
});
listSub.forEach((e) => {
  e.addEventListener("click", () => {
    const input = e.parentElement.querySelector(".quantity");
    Number(input.value) <= 1 ? (input.value = 1) : (input.value -= 1);
  });
});

// function update(e){
//   let quantity=Number(e.parentElement.querySelector('.quantity').value);
//   let price=e.parentElement.parentElement.parentElement.querySelector('.price').textContent;
//   let discount =e.parentElement.parentElement.parentElement.querySelector('.discount').textContent;
//   var tax=e.parentElement.parentElement.parentElement.querySelector('.tax');
//   var total=e.parentElement.parentElement.parentElement.querySelector('.total');
//    discount ==="-"?(discount=0): discount;
//    tax.textContent=`$${Math.round(
//     quantity*formatMoney(price*10)/100
//    )}.00`;

// }
