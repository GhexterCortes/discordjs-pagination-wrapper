const paginationBase = require('@acegoal07/discordjs-pagination');

modules.exports = class Pagination {
    constructor({
        interaction,
        message,
        pageList,
        buttonList,
        timeout,
        replyMessage,
        autoDelete,
        privateReply,
        progressBar,
        proSlider,
        proBar,
        authorIndependent
    }) {
        this.interaction = interaction || null;
        this.message = message || null;
        this.pageList = pageList || [];
        this.buttonList = buttonList || [];
        this.timeout = timeout || 12000;
        this.replyMessage = replyMessage || false;
        this.autoDelete = autoDelete || false;
        this.privateReply = privateReply || false;
        this.progressBar = progressBar || false;
        this.proSlider = proSlider || "▣";
        this.proBar = proBar || "▢";
        this.authorIndependent = authorIndependent || false;
        this.pagination = null;
    }

    setInteraction(interaction) {
        if(!interaction) throw new Error("Interaction is required");
        if(!interaction?.applicationId) throw new Error("Invalid interaction");
        if(message) throw new Error("Message is already set");

        this.interaction = interaction;
        return this;
    }

    setMessage(message) {
        if(!message) throw new Error("Message is required");
        if(!message?.channel) throw new Error("Invalid message");
        if(interaction) throw new Error("Interaction is already set");

        this.message = message;
        return this;
    }

    setPageList(pageList) {
        if(!pageList) throw new Error("Page list is required");
        if(!Array.isArray(pageList)) throw new Error("Invalid page list");
        if(!pageList.length) throw new Error("Page list is empty");

        this.pageList = pageList;
        return this;
    }

    setButtonList(buttonList) {
        if(!buttonList) throw new Error("Button list is required");
        if(!Array.isArray(buttonList)) throw new Error("Invalid button list");
        if(!buttonList.length) throw new Error("Button list is empty");

        this.buttonList = buttonList;
        return this;
    }

    setTimeout(timeout) {
        if(!timeout) throw new Error("Timeout is required");
        if(typeof timeout !== "number") throw new Error("Invalid timeout");
        if(timeout < 1000) throw new Error("Timeout must be greater than 1000ms");

        this.timeout = timeout;
        return this;
    }

    setReplyMessage(replyMessage) {
        if(!replyMessage) throw new Error("Reply message is required");
        if(typeof replyMessage !== "boolean") throw new Error("Invalid reply message");

        this.replyMessage = replyMessage;
        return this;
    }

    setAutoDelete(autoDelete) {
        if(!autoDelete) throw new Error("Auto delete is required");
        if(typeof autoDelete !== "boolean") throw new Error("Invalid auto delete");

        this.autoDelete = autoDelete;
        return this;
    }

    setPrivateReply(privateReply) {
        if(!privateReply) throw new Error("Private reply is required");
        if(typeof privateReply !== "boolean") throw new Error("Invalid private reply");

        this.privateReply = privateReply;
        return this;
    }

    setProgressBar({progressBar, proSlider, proBar}) {
        if(!progressBar) throw new Error("Progress bar is required");
        if(typeof progressBar !== "boolean") throw new Error("Invalid progress bar");
        if(proSlider) this.proSlider = proSlider;
        if(proBar) this.proBar = proBar;

        this.progressBar = progressBar;
        return this;
    }

    setAuthorIndependent(authorIndependent) {
        if(!authorIndependent) throw new Error("Author independent is required");
        if(typeof authorIndependent !== "boolean") throw new Error("Invalid author independent");

        this.authorIndependent = authorIndependent;
        return this;
    }

    async paginate() {
        this.pagination = await paginationBase({
            interaction: this.interaction,
            message: this.message,
            pageList: this.pageList,
            buttonList: this.buttonList,
            timeout: this.timeout,
            replyMessage: this.replyMessage,
            autoDelete: this.autoDelete,
            privateReply: this.privateReply,
            progressBar: this.progressBar,
            proSlider: this.proSlider,
            proBar: this.proBar,
            authorIndependent: this.authorIndependent
        });

        return this;
    }
}