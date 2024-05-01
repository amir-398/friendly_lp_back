/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

const sendEmail = () => import('#controllers/send_email_controller')
import router from '@adonisjs/core/services/router'

router.post('/sendEmail', [sendEmail, 'sendEmail'])
