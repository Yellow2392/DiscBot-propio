const { REST,Routes,SlashCommandBuilder } = require("discord.js");
const botID = process.env.BOTID;
const serverID = process.env.SERVERID;
const botToken = process.env.TOKEN;

const rest = new REST().setToken(botToken);

const slashRegister = async () =>{
  try {
    // Endpoint que toma para el registro de los comandos
    await rest.put(Routes.applicationGuildCommands(botID,serverID),{
      body: [
        new SlashCommandBuilder()
        .setName("random")
        .setDescription("Obten una frase intelectual random"),
        new SlashCommandBuilder()
        .setName("promoimage")
        .setDescription("Obten una imagen de la promoción")
      ]
    })
  } catch (error) {
    console.error(error)
  }
}

slashRegister();