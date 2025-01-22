document.addEventListener("DOMContentLoaded", function () {
  const moodsList = document.getElementById("moodsList");
  const responseElement = document.getElementById("response");
  const checkButton = document.getElementById("checkButton");
  const textBox = document.getElementById("textBox");

  const responses = {
      sad: 'Everything will be okay baby girl, I am right here, and I am not going anywhere.',
      happy: 'I love that you are happy baby girl, you are the light of my life, and you being happy makes me happy.',
      hangry: 'Alright let\'s get some food for you then baby girl.',
      chillaxed: 'This is awfully suspicious I hope you\'re not plotting on my death or anything over there...',
      emotional: 'Calm the FyUcK down womAn!',
      tonedeaf: 'That shit is made up so that you can have a reason to be mad. Stop trying to gaslight me!!!',
      noisy: 'ShUt ThE hElL uP!',
      angry: 'Uhhhh idk if you are mad at me then its probably some made up shit... but if its family stuff stay strong... It won\'t be long before you and are togehter and there is some distance between you guys.',
      murderous: 'Please god.. just fuckin type anxious and do that because this is fuckin crazy.',
      anxious: 'Baby just breathe in through your nose.. 2.. 3.. 4.. 5.. and out through your mouth 2.. 3.. 4.. 5.. do this like 3 times and focus on the sound of your breath is it shaky? is it steady? How does it feel in your chest? shaky? smooth? I love you so much you are so strong and you can do this!',
      silly: 'FUUUUUUUUUUUUCK you :)',
      irritated: 'This is one of those times doing the steps listed in anxious would be sooooo fucking helpful, I am the worlds biggest advocate for breathing. But, regardless just know that everyone gets irritated and while that is no excuse for acting crazy, it is another perfect time to practice communication not just with me but with anyone because communicating that will go far! You got this baby girl I believe in you.',
      inpain: '......Deep breaths baby girl you got this push the pain out and focus on 2 things (the first being most important) breathing, and you and me laughing and giggling together. Armed with these two things almost NOTHING can stop you, I love you so much. You GOT this. (if neither of these work I HIGHLY reccomend talking to God about it.)',
      outsidesleepy: 'If you can find time, go get some coffee! I knooooow that will help, but if not just remember at the end of the day, the day gone end... Meaning you got this just hold on a little bit longer and your problems of the day will be over, and you can come home and be with me. :)',
      homesleepy: 'Go to fucking bed.',
      inlove: 'OOOOOOOOOH just know I am feeling the EXACT same way RIGHT FUCKIN NOW baby girl, you are the LOVE of my fucking life. You are my everything baby girl!',
      crazy: 'hahahahahaha this gonna be the most used one, I already KNOW! JuSt BrEaThE because you CLEARLY know you are being crazy.',
      positive: 'Good girl! Keep it up!',
      negative: 'BABY! You are wonderful, amazing, great, awesome, perfect, kind, one-of-a-kind, top tier, out of this world, best thing to eveeeeer happen to me. There is NOTHING to be negative about, NOTHING!!!',
      cute: 'GET IT BABY GIRL YOU ARE BAD ASSS FUUUUUUUCK OH MY GOODNESS YOU ARE SO FUCKING SEXY!',
      ugly: 'I will NOT tolerate this feeling about MY baby girl! You are FIIIIIIINE as fuck.',
      volumptuous: 'let me see, r i g h t  N O W!!!!',
      gay: 'Lemme watch you.',
      giggly: 'Seeeeeend me a video, RIGHT NOW.',
      crackhead: 'hahahah helll yeah go do something crazy!',
      focused: 'Get off of here because that is CLEARLY a damn lie.',
      inquizitive: 'Ask questions, the world is your oyster baby girl, you can do ANYTHING!!',
      lonely: 'Bring that ass here. It pisses me off cause you KNOW I would use my last dollar to be with you for a day. So pick another date.',
      scared: 'There is nothing to be afraid of baby, YOU are STRONG, YOU are BRAVE, and most importantly you CAN do anything!',
      depressed: 'You are the love of my fucking life baby girl you are the greatest thing that has ever happened to me, you make bad days better and good days amazing. thank you for being the light of my life!',
      scandalous: 'if you just typed this and were far away still, show me how horny. ;) If you clicked this and we are together start walking towards me and taking your clothes off. Or come whisper it in my ear or some shit if its a public setting ill get it taken care of for you baby girl. ;)'
  };
 const moods = Object.keys(responses);

  const heading = document.createElement("h3");
  heading.textContent = "Available Moods:";
  moodsList.appendChild(heading);

  moods.forEach(mood => {
      const moodItem = document.createElement("p");
      moodItem.textContent = mood;
      moodsList.appendChild(moodItem);
  });

  checkButton.addEventListener("click", function () {
      const inputMood = textBox.value.trim().toLowerCase();
      if (responses[inputMood]) {
          responseElement.textContent = responses[inputMood];
      } else {
          responseElement.textContent = `HAHAHAHAHAHAH "${inputMood}" is not one of the CLEARLY listed options baby girl...`;
      }
  });
});

console.log