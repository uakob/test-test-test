const nodemailer = require("nodemailer");

export class MessageService {
    async sendMessage(email) {
        await nodemailer.sendMail(email)
    }
}
