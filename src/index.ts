import {
  Discord,
  Command,
  CommandMessage,
  CommandNotFound,
  On,
  ArgsOf,
} from "@typeit/discord";

@Discord("!")
export class AppDiscord {
  @Command("hello")
  private hello(message: CommandMessage) {
    message.reply("hello!");
  }

  @Command("trivia")
  private trivia(message: CommandMessage) {
    const filter = (m) => m.author.id === message.author.id;
    message.reply(
      "Qual é o meu nome?```1 - Marcelo```\n```2 - Matheus```"
    );
    message.channel
      .awaitMessages(filter, {
        max: 1,
        time: 10000,
      })
      .then(async (collected) => {
        if (collected.first().content == "2") {
          message.reply("sua resposta está errada!");
        }
        message.reply("resposta correta!");
      });
  }

  @Command("commandlist")
  private commandlist(message: CommandMessage) {
    message.reply(
      "Os comandos disponíveis são:```!hello: devolve uma mensagem de boas-vindas em resposta ao usuário\n\n!trivia: inicia um jogo de quiz com o usuário```"
    );
  }

  @CommandNotFound()
  private notFound(message: CommandMessage) {
    return message.reply("this command does not exist.");
  }
}
