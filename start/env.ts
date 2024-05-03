/*
|--------------------------------------------------------------------------
| Environment variables service
|--------------------------------------------------------------------------
|
| The `Env.create` method creates an instance of the Env service. The
| service validates the environment variables and also cast values
| to JavaScript data types.
|
*/

import { Env } from '@adonisjs/core/env'

export default await Env.create(new URL('../../', import.meta.url), {
  PORT: Env.schema.number.optional() || 3333,
  APP_KEY: Env.schema.string(),
  MAILJET_API_KEY_PUBLIC: Env.schema.string(),
  MAILJET_API_KEY_PRIVATE: Env.schema.string(),
})
