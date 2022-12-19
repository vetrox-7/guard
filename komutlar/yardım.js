const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = async(client, message, args) => {

        const embed = new Discord.MessageEmbed()
.setAuthor(` Guard Komutları`, client.user.avatarURL())
.setThumbnail(message.author.displayAvatarURL({dynamic : true}))
.setImage('')
.setColor('BLACK')
.addField(`Wést YARDIM MENÜSÜNÜ AÇTINIZ. `, `
:detective:**${prefix}antiraid aç**

:detective:**${prefix}capsengel aç**

:detective:**${prefix}emojikoruma aç**

:detective:**${prefix}everengel aç**

:detective:**${prefix}kanalkoruma aç**

:detective:**${prefix}küfürengel aç**

:detective:**${prefix}modlog #kanal**

:detective:**${prefix}reklamengel aç**

:detective:**${prefix}rolkoruma aç**

:detective:**${prefix}sohbet-aç**

:detective:**${prefix}sohbet-kapat**

:detective:**${prefix}sil-üye @üye miktar**

:detective:**${prefix}sil miktar**

:detective:**${prefix}yavaşmod süre**

:detective:**${prefix}ban @üye sebep**

:detective:**${prefix}kick @üye sebep    ** 

:detective:**${prefix}ping    **`)      
 .setFooter(`${message.author.username} Tarafından istendi.`, message.author.avatarURL())
    
        return message.channel.send(embed);
}

exports.conf = {
	enabled : true,
	guildOnly : false,
	aliases : ['help'],
	permLevel : 4
}
exports.help = {
	name : 'yardım',
	description : 'Komut kategorilerini atar',
	usage : 'yardım'
}
