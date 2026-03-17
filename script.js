/*Get document by id from document*/
const nouns = document.getElementById("noun");
const adjectives = document.getElementById("adjective");
const verbs = document.getElementById("verb");
const adverbs = document.getElementById("adverb");

/*Create a function to generate the poetry*/
document.querySelector("button").addEventListener("click", function() {
  /* get the value from input*/
  const poem = document.getElementById("result");

  let nounsvalue = nouns.value;
  let adjectivesvalue = adjectives.value;
  let verbsvalue = verbs.value;
  let adverbsvalue = adverbs.value;

  if (nounsvalue == " " || adjectivesvalue == " " || verbsvalue == " " || adverbsvalue == " ") {
    alert("fill the fields with the required words");
    return;
  } else {
    poem.innerHTML = `The ocean ${verbsvalue} in quiet blue,\t
    in waves that fold and start anew.\t
    A restless breath, a drifting song,\t
    where lost ${nounsvalue} still belong.\t
    \t
    The ${nounsvalue} remembers every shore,\t
    each footprint ${adverbsvalue} away once more.\t
    Yet in its rhythm something stays—\t
    a whisper from forgotten days.\t
    \t
    The wind leans close, the water sighs,\t
    ${adjectivesvalue} light on moving skies.\t
    And somewhere deep where shadows roam,\t
    the ${adjectivesvalue} ${nounsvalue} keeps every heart a home. 🌊✨\t `

    //displays the poem in the result div
    poem.style.color = "#1E90FF"; // color
    poem.style.fontSize = "20px" // font-size
    poem.style.fontFamily = "UnifrakturMaguntia"; // font family
  }
});
