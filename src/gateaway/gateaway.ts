import { OnModuleInit } from '@nestjs/common'
import { SubscribeMessage, WebSocketGateway, MessageBody, WebSocketServer } from "@nestjs/websockets";
import { Server } from 'socket.io'

@WebSocketGateway({

    cors: {
  
      origin: '*',
  
      methods: ['GET', 'POST'],
  
      transports: ['websocket', 'polling'],
  
      credentials: false,
  
    },
  
    allowEIO3: true,
  
  })
export class MyGateaway implements OnModuleInit {
    @WebSocketServer()
    server: Server;

    onModuleInit() {
        this.server.on('connection', (socket) => {
            console.log(socket.id)
            console.log('Connected')
        });
    }

    @SubscribeMessage('newMessage')
    onNewMessage(@MessageBody() body: any) {
        console.log(body);
        this.server.emit('onMessage', {
            msg: 'New Message',
            content: body
        })
    }
}