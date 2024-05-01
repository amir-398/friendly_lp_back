const sendEmail = () => import('#controllers/send_email_controller');
import router from '@adonisjs/core/services/router';
router.post('/sendEmail', [sendEmail, 'sendEmail']);
//# sourceMappingURL=routes.js.map