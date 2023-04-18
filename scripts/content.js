const main = () => {
  const button = document.querySelector('[aria-label="Claim Bonus"]');
  if (button) {
    button.click();
    console.log("clicked!");
    x = localStorage.getItem("clicked_n") || 0;
    localStorage.setItem("clicked_n", x + 1);
    console.log("current pickups: " + x + 1);
  } else {
    console.log("not found");
  }
};

setInterval(main, 10000); // every thirty seconds
