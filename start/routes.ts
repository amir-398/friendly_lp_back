/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

const sendEmail = () => import('#controllers/send_emails_controller')
import router from '@adonisjs/core/services/router'

router.post('api/sendEmail', [sendEmail, 'sendEmail'])
