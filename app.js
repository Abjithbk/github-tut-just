
    const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
    let index = 0;
    const btn = document.getElementById("myBtn");

    // change color every second
    setInterval(() => {
      btn.style.backgroundColor = colors[index];

      // set text color for contrast
      if (colors[index] === "yellow" || colors[index] === "orange") {
        btn.style.color = "black";
      } else {
        btn.style.color = "white";
      }

      index = (index + 1) % colors.length;
    }, 100);