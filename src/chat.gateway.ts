import {
  ConnectedSocket,
  MessageBody,
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from "@nestjs/websockets";

import { Socket } from "socket.io";
import { PrismaService } from "./prisma.service";
import { getSubByToken } from "./util/token";

@WebSocketGateway(81, {
  namespace: "chat",
  transports: ["websocket"],
  upgradeTimeout: false,
})
export class ChatGateway implements OnGatewayConnection, OnGatewayDisconnect {
  constructor(private prisma: PrismaService) {}

  @WebSocketServer()
  server;

  async handleConnection(
    @MessageBody() data: string,
    @ConnectedSocket() client: Socket
  ) {
    const [token] = data;
    const sub: string = getSubByToken(token);
    const user = await this.prisma.user.findFirst({ where: { sub } });
    const roomIdList = await this.prisma.chattingParticipant.findMany({
      select: { chattingId: true },
      where: { userId: user.id },
    });

    roomIdList.map((room) => {
      client.join(String(room.chattingId));
    });
  }

  @SubscribeMessage("join")
  async connectSomeone(
    @MessageBody() data: string,
    @ConnectedSocket() client: Socket
  ) {
    const [token, roomId] = data;
    const user = await this.prisma.user.findUnique({
      where: { sub: getSubByToken(token) },
    });
    await this.prisma.chattingParticipant.create({
      data: { chattingId: Number(roomId), userId: user.id },
    });
    client.join(roomId);
    const entryMessage = `${user.name}`;
    client.broadcast.to(roomId).emit("entryUser", entryMessage);
  }

  @SubscribeMessage("sendMessage")
  async sendMessage(
    @MessageBody() data: string,
    @ConnectedSocket() client: Socket
  ) {
    const [token, roomId, message] = data;
    const clientUser = await this.prisma.user.findUnique({
      where: { sub: getSubByToken(token) },
    });
    client.broadcast
      .to(roomId)
      .emit("sendMessage", [clientUser.name, clientUser.profileImg, message]);
  }

  @SubscribeMessage("leave")
  async leaveChattingChanel(
    @MessageBody() data: string,
    @ConnectedSocket() client: Socket
  ) {
    const [token, roomId] = data;
    const sub: string = getSubByToken(token);
    const user = await this.prisma.user.findFirst({ where: { sub } });
    await this.prisma.chattingParticipant.deleteMany({
      where: { userId: user.id, chattingId: Number(roomId) },
    });
    client.leave(roomId);
  }

  async handleDisconnect(@ConnectedSocket() client: Socket) {
    client.disconnect();
  }
}
