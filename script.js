document.addEventListener("DOMContentLoaded", function () {
  const moodsList = document.getElementById("moodsList");
  const responseElement = document.getElementById("response");
  const checkButton = document.getElementById("checkButton");
  const textBox = document.getElementById("textBox");

  const responses = {
      sad: ['Everything will be okay baby girl, I am right here, and I am not going anywhere.', 'It is okay to be sad sometimes, let yourself feel what you have to feel baby, don\'t shut them out baby, and always remember you are loved, and you are strong.', 'everything will be okay gorgeous just breathe, and don\'t you dare forget to hold your chin up. You are amaaaazing. I love you soooo much baby! you got this! WHATEVER "this" may be. It aint got shit on you.' ],
      happy: ['I love that you are happy baby girl, you are the light of my life, and you being happy makes me happy.', 'Let your happiness show baby girl, it brightens up the room!', 'Telllll me about it, theres nothing I enjoy more than listening to you tell me about something you really care about.'],
      hangry: ['Alright let\'s get some food for you then baby girl.', 'You 100% want bbq wings right now I already know are we getting wingstop? or do we want some salsa from applebees with it? Just let me know baby girl!', 'ohhhhhh okay so you are feeling a little hangry today? Well it really only leaves 2 options for us baby girl then doesn\'t it? The real deciding factor here is cookies or no cookies...? Chipotle because its delicious or Subway because its delicious and it comes with fucking COOOKIES!  '],
      chillaxed: ['This is awfully suspicious I hope you\'re not plotting on my death or anything over there...', 'Good baby this isn\'t normal!! So enjoy it while it lasts!!!!', 'I honestly love that you are feeling this way! Don\'t let anyone take that from you either baby girl!'],
      emotional: ['Calm the FyUcK down womAn!', 'I really don\'t have much more to say about this one, like the fact that you are HERE of all places for "emotional" means you need to hear it so... Get over baby you got this. You are strong as fuck so quit acting like a lil puss. (I love you so much ;))'],
      tonedeaf: ['That shit is made up so that you can have a reason to be mad. Stop trying to gaslight me!!!', 'hahhahaha trying for a different response here is crazy too... This shit is still just made the fuck up...'],
      noisy: ['ShUt ThE hElL uP!', 'No but for real please be quiet you are hurting my head.'],
      angry: ['Uhhhh idk if you are mad at me then its probably some made up shit... but if its family stuff stay strong... It won\'t be long before you and are togehter and there is some distance between you guys.', 'If it is me, not that it is justified but I am probably just feeling alone, you not being around makes that feeling 10 times worse for me. Or maybe it has nothing to do with you which is way worse if this is the case I will pre-apologize, because that guy can be kiiiiind of a dick...'],
      murderous: ['Please god.. just fuckin type anxious and do that because this is fuckin crazy.', '...did you think I was gonna justify it...?', 'You know as long as it isn\'t me you are trying to murder I will help you, hell I will even do it so you can stay free.'],
      anxious: ['Baby just breathe in through your nose.. 2.. 3.. 4.. 5.. and out through your mouth 2.. 3.. 4.. 5.. do this like 3 times and focus on the sound of your breath is it shaky? is it steady? How does it feel in your chest? shaky? smooth? I love you so much you are so strong and you can do this!'],
      silly: ['FUUUUUUUUUUUUCK you :)', 'I AM GONNA TICKLE THE FUCK OUTTA YOU SO YOU BETTER NOT BE FEELIN TOOOO SILLY BEFORE I GET BACK!!'],
      irritated: ['This is one of those times doing the steps listed in anxious would be sooooo fucking helpful, I am the worlds biggest advocate for breathing. But, regardless just know that everyone gets irritated and while that is no excuse for acting crazy, it is another perfect time to practice communication not just with me but with anyone because communicating that will go far! You got this baby girl I believe in you.', 'just... breatheeeee....'],
      inpain: ['......Deep breaths baby girl you got this push the pain out of your mind and focus on 2 things (the first being most important) breathing, and the second being you and me laughing and giggling together. Armed with these two things almost NOTHING can stop you, I love you so much. You GOT this. (if neither of these work I HIGHLY reccomend talking to God about it.)'],
      outsidesleepy: ['If you can find time, go get some coffee! I knooooow that will help, but if not just remember at the end of the day, the day gone end... Meaning you got this just hold on a little bit longer and your problems of the day will be over, and you can come home and be with me. :)'],
      homesleepy: ['Go to fucking bed.'],
      inlove: ['OOOOOOOOOH just know I am feeling the EXACT same way RIGHT FUCKIN NOW baby girl, you are the LOVE of my fucking life. You are my everything baby girl!'],
      crazy: ['hahahahahaha this gonna be the most used one, I already KNOW! JuSt BrEaThE because you CLEARLY know you are being crazy.'],
      psychotic: ['hahah I intentionally put this one to be next to crazy because I wanted you to know that you are 100% one of these either psychotic or crazy.... hahahahha'],
      positive: ['Good girl! Keep it up!'],
      negative: ['BABY! You are wonderful, amazing, great, awesome, perfect, kind, one-of-a-kind, top tier, out of this world, best thing to eveeeeer happen to me. There is NOTHING to be negative about, NOTHING!!!'],
      cute: ['GET IT BABY GIRL YOU ARE BAD ASSS FUUUUUUUCK OH MY GOODNESS YOU ARE SO FUCKING SEXY!'],
      ugly: ['I will NOT tolerate this feeling about MY baby girl! You are FIIIIIIINE as fuck.', 'sexy ass mfkr', 'bhad bitch', 'sexy ass', 'fine ass', 'beatiful', 'gorgeous', 'stunning'],
      volumptuous: ['let me see, r i g h t  N O W!!!!', 'Lemme see dem cheeks! I knooooooow they\'re mooooovin!'],
      gay: ['Lemme watch you.'],
      blessed: ['DAMN right you are blessed baby girl, you got God on your side, Me on your side, your still fucking breathing and coherent! I say it all the time, and I will say it again baby girl, you are ONE-OF-A-KIND!!!'],
      giggly: ['Seeeeeend me a video, RIGHT NOW.', 'You have the most beautiful smile, the most absolute cuuuutest giggele and I love it so much.'],
      crackhead: ['hahahah helll yeah go do something crazy!', 'You need to go run some laps or something...', 'Do I need to fuck some of that energy out baby girl??'],
      focused: ['Get off of here because that is CLEARLY a damn lie.', 'hahhahahahahahahaha don\'t liiiiiiie'],
      inquizitive: ['Ask questions, the world is your oyster baby girl, you can do ANYTHING!!', 'Curiosity killed the cat.'],
      lonely: ['Bring that ass here. It pisses me off cause you KNOW I would use my last dollar to be with you for a day. So pick another date.', 'Trust me I am right here with you on that one baby girl.. I miss you so fucking much.'],
      scared: ['There is nothing to be afraid of baby, YOU are STRONG, YOU are BRAVE, and most importantly you CAN do anything!', 'The most important thing for you to realize here is that you aren\'t alone baby girl, not anymore. It is you and me I don\'t care if we are mad, sad, not talking or whatever. I am on your side!'],
      depressed: ['You are the love of my fucking life baby girl you are the greatest thing that has ever happened to me, you make bad days better and good days amazing. thank you for being the light of my life!', 'It may be hard to see right NOW but things willll get better baby girl, you got this just put your head down and get to work, it will be over soon and things will be all good again.', 'The only way to fail is to not get back up.'],
      scandalous: ['if you just typed this and were far away still, show me how horny. ;) If you clicked this and we are together start walking towards me and taking your clothes off. Or come whisper it in my ear or some shit if its a public setting ill get it taken care of for you baby girl. ;)' , 'mmmmmmm the things I will do to you when I see you again... ']
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
          const randomResponse = responses[inputMood][Math.floor(Math.random() * responses[inputMood].length)];
          responseElement.textContent = randomResponse; 
      } else {
          responseElement.textContent = `HAHAHAHAHAHAH "${inputMood}" is not one of the CLEARLY listed options baby girl...`;
      }
  });
});

    const futureUpdates = document.getElementById("updates");
    futureUpdates.addEventListener('click', function() {
        alert('Will implement photos into the response mix.');
    })