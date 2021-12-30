import { Telegraf } from "telegraf";
import axios from 'axios'
require("dotenv-safe").config();
const cron = require('node-cron');

class ApiUpCheck {
  public bot: any;
  public cron: any;
  constructor(){
      this.bot = new Telegraf(process.env.BOT_TOKEN)
      this.cron = require('node-cron');
  }
  public async checkStatus() {
    const bot = this.bot
    this.cron.schedule('0 * * * *', async function() {
        console.log('CHECK A CADA 1 HORA REALIZADO!')
        let url:string = `http://${process.env.HOST}:80/last-status`
        const  response = await axios.get(url)
        console.log(response.data[0].text)
        let msg = `CHECK A CADA 1 HORA REALIZADO ✅ API FUNCIONADO A TODO VAPOR 💯 ÚLTIMO STATUS FOI ${response.data[0].text}`;
        let id = [process.env.CHAT_ID, process.env.CHAT_ID2];
        id.map((id) => bot.telegram.sendMessage(id, msg));

      });
  }
  
}

export { ApiUpCheck }