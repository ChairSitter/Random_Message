//make 4 arrays of words: adjectives, nouns, -ing verbs, adverbs

const adj = ['happy', 'sad', 'funny', 'stupid', 'beautiful',
 'boastful', 'tired', 'self-absorbed', 'scary', 'timid', 'stressed-out',
  'evil', 'ugly', 'thirsty', 'loathsome', 'old', 'striped', 'green', 'sickly', 'bored'];
const noun = ['tree', 'nurse', 'bat', 'cat', 'bulldozer', 'bowl of oatmeal', 'dentist',
'librarian', 'car', 'football', 'television', 'car battery', 'bonsai tree', 'lawyer', 'alien life-form', 
'random message generator', 'painting', 'computer', 'nerd', 'soundcloud rapper'];
const verb = ['lifting', 'licking', 'bothering', 'yelling at', 'scraping', 'slapping', 'removing', 
'chewing on', 'polishing', 'cleaning', 'asking to dinner', 'defeating', 'paying', 'feeding', 
'running away from', 'apoloigizing to', 'partnering up with', 'writing to', 'glaring at', 'laughing at'];
const adv = ['quickly', 'sadly', 'badly', 'sorrowfully', 'happily', 'slowly', 'angrily', 'whinily', 'cordially', 
'secretly', 'eagerly', 'carefully', 'quietly', 'worriedly', 'grimly', 'deeply', 'tomorrow', 'soon', 'too often', 'sloppily'];

//make 6 random numbers labeled a through f 

const a = Math.floor(Math.random()*20);
const b = Math.floor(Math.random()*20);
const c = Math.floor(Math.random()*20);
const d = Math.floor(Math.random()*20);
const e = Math.floor(Math.random()*20);
const f = Math.floor(Math.random()*20);

//function that puts the random words into a sentence using the randomly generated numbers

const makeMessage = () => {
    console.log(`The ${adj[a]} ${noun[b]} is ${verb[c]} the ${adj[d]} ${noun[e]} ${adv[f]}!`);
}

makeMessage();