import { Discord, Command, CommandMessage, CommandNotFound } from "@typeit/discord";

@Discord("!")
export class AppDiscord {
  @Command("hello")
  private hello(message: CommandMessage) {
    message.reply("hello!");
  }

  @CommandNotFound()
  private notFoundA(message: CommandMessage) {
    message.reply("this command does not exist.");
  }
}


