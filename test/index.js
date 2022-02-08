const Pagination = require("../");
const { MessageEmbed, MessageButton } = require("discord.js");

const pagination = new Pagination()
    .setPageList([
        new MessageEmbed()
            .setTitle("Page 1")
            .setDescription("This is page 1"),
        new MessageEmbed()
            .setTitle("Page 2")
            .setDescription("This is page 2"),
        new MessageEmbed()
            .setTitle("Page 3")
            .setDescription("This is page 3")
    ])
    .setButtonList([
        new MessageButton()
            .setCustomId('prev')
            .setLabel("Previous")
            .setStyle("PRIMARY"),
        new MessageButton()
            .setCustomId('next')
            .setLabel("Next")
            .setStyle("PRIMARY")
    ])
    .setAuthorIndependent(true)
    .setAutoDelete(true)
    .setProgressBar({
        progressBar: false,
        proBar: "-",
        proSlider: "+"
    });

console.log(pagination);