//const Discord = require("discord.js");
//const client = new Discord.Client({ intents: ["Guilds"] });
const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});
const fs = require('fs');

function getRandomLine(filename) {
  const data = fs.readFileSync(filename, 'utf8');

  const lines = data.split('\n').filter(line => line.trim() !== '');

  const randomIndex = Math.floor(Math.random() * lines.length);
  return lines[randomIndex];
}

client.on("ready", () => {
  console.log("Bot is ready!");
});

client.on("messageCreate", (message) => { 
  if (message.content.toLowerCase() === "angelus") {
    message.channel.send("El angel del Señor anuncio a Maria. Y ella concibio por obra y gracia del Espiritu Santo. \nDios te salve Maria...\nHe aqui la esclava del Señor.\nHaganse en mi segun tu palabra\nDios te salve Maria... \nY el verbo se hizo carne. \nY habito entre nosotros\nDios te salve Maria... \nRuega por nosotros santa madre de Dios, para que seamos dignos de alcanzar las nesas y gracia de Nuestro Señor Jesucristo.");
  }
});

var phrasesArr = ["Depositenme a mi BCP oh ctm","Fue mi pene","Oh desahuevate re ctmr ya. Anda duerme imbecil no todo es Clash carajo","Solamente Perú es la mejor gastronomía, pregúntale nomás a los extranjeros","Te apuesto en tu cara a que nunca has terminado tu primaria on","Ya, basta jovenes ya no se pueden dormir en verdad ya","Una vez una tarde llevaba un niño... un pollo :chicken:"];

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isCommand()) return;

  if (interaction.commandName === "random") {
    await interaction.deferReply(); //envia una respuesta temporal para evitar el timeout

    //simula una operación que toma tiempo
    setTimeout(async () => {
      //var phrase = phrasesArr[Math.floor(Math.random() * phrasesArr.length)];
      var phrase = getRandomLine('mensajes.txt');
      await interaction.editReply({ content: phrase });
    }, 9000);
  }

  else if (interaction.commandName === 'promoimage') {
    // URL de la imagen predeterminada
    const imageUrl = getRandomLine('images.txt');

    await interaction.reply({ content: 'recuerdos', files: [imageUrl] });
  }
});

client.login(process.env.TOKEN);