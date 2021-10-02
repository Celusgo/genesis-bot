import { Discord, Command, CommandMessage, CommandNotFound, On, ArgsOf } from "@typeit/discord";
import { channel } from "diagnostics_channel";

@Discord()
export class AppDiscord {
  @On("message")
  private onMessage([message]: ArgsOf<"message">){
    return message.channel.id === "893974354105364500" ? console.log(message.content) : "";
  }

  @Command("hello")
  private hello(message: CommandMessage) {
    message.reply("hello!");
  }

  @Command("commandlist")
  private commandlist(message: CommandMessage) {
    message.reply(
      "Os comandos disponíveis são:```!hello: devolve uma mensagem de boas-vindas em resposta ao usuário\n\n!teste: isso é um teste```"
    );
  }


  @CommandNotFound()
  private notFound(message: CommandMessage) {
    message.reply("this command does not exist.");
  }
}


