import { app } from '../initializers/bolt'
import echo from '../slack/commands/echo'
import cem_register from '../slack/commands/cem_register'
import cem_new from '../slack/commands/cem_new'
import cem_publish from '../slack/commands/cem_publish'
import cem_delete from '../slack/commands/cem_delete'
import cem_review from '../slack/commands/cem_review'
import res_cem_new from '../slack/listeners/res_cem_new'
import res_cem_delete from '../slack/listeners/res_cem_delete'
import res_cem_review_challenge from '../slack/listeners/res_cem_review_challenge'
import res_cem_review_all from '../slack/listeners/res_cem_review_all'

import remind from '../slack/requests/remind'
import deploy from '../slack/requests/deploy'
;(() => {
  // Start your app
  // const server = await app.start(process.env.PORT || 3000)
  app.receiver.app.set(`view engine`, `pug`)
  console.log(`⚡️ Bolt app is running!`)
})()
echo()
cem_register()
cem_new()
cem_publish()
cem_review()
cem_delete()
res_cem_new()
res_cem_delete()
res_cem_review_challenge()
res_cem_review_all()
remind()
deploy()
module.exports = app.receiver.app