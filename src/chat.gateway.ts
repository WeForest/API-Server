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
})
export class ChatGateway implements OnGatewayConnection, OnGatewayDisconnect {
  constructor(private prisma: PrismaService) {}

  @WebSocketServer()
  server;

  async handleConnection(@ConnectedSocket() client: Socket) {
    console.log("client", client);
  }

  @SubscribeMessage("setting")
  async connectSocket(
    @MessageBody() data: string,
    @ConnectedSocket() client: Socket
  ) {
    console.log("setting");
    console.log(data);
    const { token } = data;
    const sub: string = getSubByToken(token);
    const user = await this.prisma.user.findFirst({ where: { sub } });
    const roomIdList = await this.prisma.chattingParticipant.findMany({
      select: { chattingId: true },
      where: { userId: user.id },
    });

    roomIdList.map((room) => {
      client.join(String(room.chattingId));
    });
    client.emit("setting", roomIdList);
  }

  @SubscribeMessage("join")
  async connectSomeone(
    @MessageBody() data: string,
    @ConnectedSocket() client: Socket
  ) {
    console.log("join");
    console.log(data);
    const { token, roomId } = JSON.parse(data);
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
    console.log("sendMessage");
    console.log(data);
    const { token, roomId, message } = JSON.parse(data);
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
    console.log("leave");
    console.log(data);
    const { token, roomId } = JSON.parse(data);
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
