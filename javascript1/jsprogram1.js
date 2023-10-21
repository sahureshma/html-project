function reverse(sentence) {
    const words = sentence.split(' ');
    const reverse = words.map(word => {
      return word.split('').reverse().join('');
    });
    const reversedSentence = reverse.join(' ');
  
    return reversedSentence;
  }
  const inputSentence = "This is a sunny day";
  const reversedSentence = reverse(inputSentence);
  console.log(reversedSentence);
  
  
  