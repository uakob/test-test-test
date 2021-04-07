import { plainToClass } from 'class-transformer';
import { MessageService } from "../services/message.service";

export class MessageController {
    static async sendMessage(req, res) {
        const sendMssageDto = plainToClass(SendMessageDto, req.body)
        await validateOrReject(post)
        const message = await Message.create(sendMssageDto)
        const messageService = new MessageService()
        await messageService.sendMessage(req.user.email)
        const messageDto = classToPlain(message)
        res.send(messageDto)
    }
}
