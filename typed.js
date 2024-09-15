function onload() {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    startTyping();
    clearTimeout(c);
  }, 1000);
}

function startTyping() {
  var typed = new Typed('#say_hi', {
    strings: ["hallo cantik..", "kamu tau ngga?","bedanya kamu sama tv apa?", "klo tv buat ditonton", "klo kamu buat aku aja,, hehe"],
    typeSpeed: 70,
    backSpeed: 40,
    loop: false,
    onComplete: (self) => {
      setTimeout(() => {
        kangenTyping()
      }, 800);
    }
  });
}

function kangenTyping(){
  var typed = new Typed('#hadiah',{
    strings: ["btw, aku punya sesuatu lhoo buat kamu👉👈"],
    typeSpeed: 40,
    loop: false,
    onComplete: (self) => {
      present.style = "transition:all .8s ease;opacity:1;transform:translateY(20px)";
    }
  })
}