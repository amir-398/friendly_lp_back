import { Env } from '@adonisjs/core/env';
export default await Env.create(new URL('../', import.meta.url), {
    NODE_ENV: Env.schema.enum.optional(['development', 'production', 'test']),
    PORT: Env.schema.number.optional(),
    APP_KEY: Env.schema.string(),
    HOST: Env.schema.string.optional({ format: 'host' }),
    LOG_LEVEL: Env.schema.string.optional(),
    MAILJET_API_KEY_PUBLIC: Env.schema.string(),
    MAILJET_API_KEY_PRIVATE: Env.schema.string(),
});
//# sourceMappingURL=env.js.map