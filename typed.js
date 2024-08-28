onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    startAnimation();
    clearTimeout(c);
  }, 1000);
}

function startAnimation() {
  var typed = new Typed('#say_hi', {
    strings: ["hallo cantik..", "kamu tau ngga?", "bedanya kamu sama tv apa?", "klo tv buat ditonton", "klo kamu buat aku aja"],
    typeSpeed: 70,
    backSpeed: 40,
    loop: false,
    onComplete: (self) => {
      window.location.href = 'flower.html'
    }
  });
}

