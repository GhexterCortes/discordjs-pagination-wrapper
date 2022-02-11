const paginationBase = require('@acegoal07/discordjs-pagination');
const { Interaction, Message } = require('discord.js');

module.exports = class Pagination {
    constructor() {
        this.interaction = null;
        this.message = null;
        this.pageList = [];
        this.buttonList = [];
        this.timeout = 12000;
        this.replyMessage = false;
        this.autoDelete = false;
        this.privateReply = false;
        this.progressBar = false;
        this.proSlider = "▣";
        this.proBar = "▢";
        this.authorIndependent = false;
        this.pagination = null;
    }

    /**
     * 
     * @param {Interaction} interaction - Interaction
     * @returns {Pagination}
     */
    setInteraction(interaction) {
        if(!interaction) throw new Error("Interaction is required");
        if(!interaction?.applicationId) throw new Error("Invalid interaction");
        if(message) throw new Error("Message is already set");

        this.interaction = interaction;
        return this;
    }

    /**
     * 
     * @param {Message} message - Message
     * @returns {Pagination}
     */
    setMessage(message) {
        if(!message) throw new Error("Message is required");
        if(!message?.channel) throw new Error("Invalid message");
        if(interaction) throw new Error("Interaction is already set");

        this.message = message;
        return this;
    }

    /**
     * 
     * @param {Object[]} pageList - Page list
     * @returns {Pagination}
     */
    setPageList(pageList) {
        if(!pageList) throw new Error("Page list is required");
        if(!Array.isArray(pageList)) throw new Error("Invalid page list");
        if(!pageList.length) throw new Error("Page list is empty");

        this.pageList = pageList;
        return this;
    }

    /**
     * 
     * @param {Object[]} buttonList - Button list
     * @returns {Pagination}
     */
    setButtonList(buttonList) {
        if(!buttonList) throw new Error("Button list is required");
        if(!Array.isArray(buttonList)) throw new Error("Invalid button list");
        if(!buttonList.length) throw new Error("Button list is empty");

        this.buttonList = buttonList;
        return this;
    }

    /**
     * 
     * @param {Number} timeout - Timeout in milliseconds
     * @returns {Pagination}
     */
    setTimeout(timeout) {
        if(!timeout) throw new Error("Timeout is required");
        if(typeof timeout !== "number") throw new Error("Invalid timeout");
        if(timeout < 1000) throw new Error("Timeout must be greater than 1000ms");

        this.timeout = timeout;
        return this;
    }

    /**
     * 
     * @param {Boolean} replyMessage - Reply message
     * @returns {Pagination}
     */
    setReplyMessage(replyMessage) {
        if(typeof replyMessage !== "boolean") throw new Error("Invalid reply message");

        this.replyMessage = replyMessage;
        return this;
    }

    /**
     * 
     * @param {Boolean} replyMessage - Reply message
     * @returns {Pagination}
     */
    setAutoDelete(autoDelete) {
        if(typeof autoDelete !== "boolean") throw new Error("Auto delete is required and must be a boolean");

        this.autoDelete = autoDelete;
        return this;
    }

    /**
     * 
     * @param {Boolean} replyMessage - Reply message
     * @returns {Pagination}
     */
    setPrivateReply(privateReply) {
        if(typeof privateReply !== "boolean") throw new Error("Private reply is required and must be a boolean");

        this.privateReply = privateReply;
        return this;
    }

    /**
     * 
     * @param {Object[]} options - Options for progress bar
     * @param {Boolean} options.progressBar - Progress bar
     * @param {String} [options.proSlider="▣"] - Progress slider
     * @param {String} [options.proBar="▢"] - Progress bar
     * @returns {Pagination}
     */
    setProgressBar({progressBar, proSlider, proBar}) {
        if(typeof progressBar !== "boolean") throw new Error("Progress bar is required and must be a boolean");
        if(proSlider) this.proSlider = proSlider;
        if(proBar) this.proBar = proBar;

        this.progressBar = progressBar;
        return this;
    }

    /**
     * 
     * @param {Boolean} replyMessage - Reply message
     * @returns {Pagination}
     */
    setAuthorIndependent(authorIndependent) {
        if(typeof authorIndependent !== "boolean") throw new Error("Author independent is required and must be a boolean");

        this.authorIndependent = authorIndependent;
        return this;
    }

    /**
     * 
     * @returns {Pagination}
     */
    async paginate() {
        this.pagination = await paginationBase(this);

        return this;
    }
}
