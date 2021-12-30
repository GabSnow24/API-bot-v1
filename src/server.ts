import { serverHttp } from "./app";
import { ApiUpCheck } from "./cronjobs/apiUpCheck";
require("dotenv-safe").config();
const hostname: any = process.env.HOST
const port: any = process.env.PORT
const check_api = new ApiUpCheck()
check_api.checkStatus()
serverHttp.listen(port, '0.0.0.0', () => {
    console.log(`🃏 Server running on PORT ${port} an HOST ${hostname} `);
})