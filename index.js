const toggleDisplay = (element) => {
  if ($(element).css("display") === "none") {
    $(element).css("display", "flex");
    let height = 0;
    const id = setInterval(() => {
      if (height >= 120) {
        clearInterval(id);
        return;
      }
      $(element).css("height", `${height + 30}px`);
      height += 30;
    }, 10);
  } else {
    $(element).css("height", "0");
    setTimeout(() => {
      $(element).css("display", "none");
    }, 300);
  }
};

$(document).ready(function () {
  $(".drop").on("click", function () {
    console.log("hi");
    $(".box").toggleClass("flex");
  });
  let payments = $(".history.flex");
  console.log(payments);

  let detail = $(".history_detail");
  payments.eq(1).on("click", () => {
    toggleDisplay(detail);
  });
});
