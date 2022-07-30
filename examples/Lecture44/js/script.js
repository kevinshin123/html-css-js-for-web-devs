// Default values
function orderChickenWith(sideDish) {
  // 1)
  // if(sideDish === undefined){
  //   sideDish = "whatever!";
  // }

  // 2
  sideDish = sideDish || "whatever!";
  console.log("Chicken with " + sideDish);
}

orderChickenWith("noodles");
orderChickenWith();
