// Optional: If you’re using a JSON config file for extra info (not required by the bot)
const data = require('./index.js');
console.log('Loaded bot metadata:', data);

// Require the necessary discord.js classes
const { Client, Events, GatewayIntentBits } = require('discord.js');

// Import the bot token securely from config.json
const { token } = require('./config.js');

// Create a new client instance with the desired intents
const client = new Client({
	intents: [GatewayIntentBits.Guilds],
});

// This event fires once when the bot is ready
client.once(Events.ClientReady, readyClient => {
	console.log(`✅ Ready! Logged in as ${readyClient.user.tag}`);
});

// Log in to Discord with your client's token
client.login(token).catch(err => {
	console.error('❌ Failed to login:', err);
});
