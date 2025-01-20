
document.getElementById("checkButton").addEventListener("click", function() {
    const input = document.getElementById("textBox").value.trim();
    const response = document.getElementById("response");
    function moodSwings(mood) {
      if (typeof mood !== 'string') {
        return 'Please tell me what you put to get this message, because you must have REALLY fucked up... LMAOOOOOO!!!'
      }
      const responses = {
        sad: 'Everythinig will be okay baby girl, I am right here, and I am not going anywhere.',
        happy: 'I love that you are happy baby girl, you are the light of my life, and you being happy makes me happy.',
        hangry: 'Alright let\'s get some food for you then baby girl.',
        chillaxed: 'This is awfully suspicious I hope you\'re not plotting on my death or anything over there...',
        emotional: 'Calm the FyUcK down womAn!',
        itsAToneThingForMe: 'That shit is made up so that you can have a reason to be mad. Stop trying to gaslight me!!!',
        noisy: 'ShUt ThE hElL uP!',
        silly: 'FUUUUUUUUUUUUCK you :)',
        depressed: 'You are the love of my fucking life baby girl you are the greatest thing that has ever happened to me, you make bad days better and good days amazing. thank you for being the light of my life!',
        horny: 'if you just typed this and were far away still, show me how horny. ;) If you clicked this and we are together start walking towards me and taking your clothes off. Or come whisper it in my ear or some shit if its a public setting ill get it taken care of for you baby girl. ;)'
      };
      if (responses[mood]){    
        return responses[mood];
      }
      return `The emotional state known as "${mood}" is currently unsupported by this operating system. Please check back later for updated content!`;
    }
    response.textContent = moodSwings(input.toLowerCase());
  });
  