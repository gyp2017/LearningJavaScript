const sentences = [
  { subject: 'JavaScript', verb: 'is', object: 'great' },
  { subject: 'Elephants', verb: 'are', object: 'large' },
];

function say({ subject, verb, object }) {
  console.log(`${subject} ${verb} ${object}`);
}

for (const sentence of sentences) {
  say(sentence);
}
