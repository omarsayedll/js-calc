let display = document.getElementById("display");
let nums = document.querySelectorAll(".num-btn");

for (let i = 0; i < nums.length; i++) {
  nums[i].onclick = function () {
    if (display.textContent === "0") {
      display.textContent = this.textContent;
    } else if (display.textContent.slice(-2, -1) === "." && display.textContent.slice(-1) === ".") {
      display.textContent += "."
    }
     else if (display.textContent === "Error") {
      display.textContent = this.textContent
      return
    }
    else {
      display.textContent += this.textContent;
    }
  };
}

document.getElementById("btndot").onclick = function() {
  if (display.textContent.slice(-1) !== ".") {
    display.textContent += "."
  }
}

document.getElementById("plus").onclick = function () {
  display.textContent === "Error" ? display.textContent += "" : ["+", "-", "*", "/", "%"].indexOf(display.textContent.slice(-1)) !== -1 ? display.textContent += "" : display.textContent += "+"
};

document.getElementById("times").onclick = function () {
  display.textContent === "Error" ? display.textContent += "" : ["+", "-", "*", "/", "%"].indexOf(display.textContent.slice(-1)) !== -1 ? display.textContent += "" : display.textContent += "*"
};

document.getElementById("minus").onclick = function () {
  display.textContent === "Error" ? display.textContent += "" : ["+", "-", "*", "/", "%"].indexOf(display.textContent.slice(-1)) !== -1 ? display.textContent += "" : display.textContent += "-"
};

document.getElementById("modulus").onclick = function () {
  display.textContent === "Error" ? display.textContent += "" : ["+", "-", "*", "/", "%"].indexOf(display.textContent.slice(-1)) !== -1 ? display.textContent += "" : display.textContent += "%"
};

document.getElementById("divide").onclick = function () {
  display.textContent === "Error" ? display.textContent += "" : ["+", "-", "*", "/", "%"].indexOf(display.textContent.slice(-1)) !== -1 ? display.textContent += "" : display.textContent += "/"
};

document.getElementById("clear").onclick = function () {
  display.textContent = 0;
};

document.getElementById("equal").onclick = function () {
  try {
    display.textContent = +eval(display.textContent).toFixed(3);
  } catch {
    display.textContent = "Error";
  }
};

document.getElementById("del").onclick = function () {
  if (display.textContent.length > 1 && display.textContent !== "Error") {
    display.textContent = display.textContent.slice(0, -1);
  } else {
    display.textContent = "0";
  }
};