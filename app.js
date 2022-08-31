const labels = document.querySelectorAll('.form-control label');

labels.forEach(label => {
    //applying bunch of array methods
    label.innerHTML = label.innerText   //i.e selected "email"
        .split('')  //splitting the innerText into an array which will put each letter as an item in the array and return it.
        .map((letter, index) => `<span style="transition-delay:${index * 40}ms">${letter}</span>`)   // creates new array with span around each letter (of the array we got from .spilt())
        .join('')  // turning it back into string
})