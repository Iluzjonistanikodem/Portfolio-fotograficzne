window.addEventListener("load", () => {
      const intro = document.getElementById("intro");
      const content = document.getElementById("content");

      // sprawdzamy, czy intro już było pokazane
      if (localStorage.getItem("introShown")) {
        // jeśli tak → pomiń intro
        intro.style.display = "none";
        content.style.display = "block";
      } else {
        // jeśli pierwszy raz → pokaż intro
        setTimeout(() => {
          intro.style.opacity = "0";
          setTimeout(() => {
            intro.style.display = "none";
            content.style.display = "block";
            localStorage.setItem("introShown", "true"); // zapisz, że intro było
          }, 1000);
        }, 2000);
      }
    });