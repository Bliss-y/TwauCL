const main = () => {
  const button = document.querySelector('[aria-label="Claim Bonus"]');
  if (button) {
    button.click();
    console.log(button);
    console.log("clicked!");
  } else {
    console.log("not found");
  }
};

setInterval(main, 30000); // every thirty seconds
