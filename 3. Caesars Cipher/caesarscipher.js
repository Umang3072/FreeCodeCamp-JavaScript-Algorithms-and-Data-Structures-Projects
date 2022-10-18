function rot13(str) {
  const alphabets = "NOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ"

  return str.split("").map((letter) => {
    const index = alphabets.lastIndexOf(letter)
    if (index === -1){
      return letter
    }
    return alphabets[index-13]
  }).join("")
}

rot13("SERR PBQR PNZC");
