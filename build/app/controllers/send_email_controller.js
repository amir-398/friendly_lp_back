import Mailjet from 'node-mailjet';
export default class EmailsController {
    async sendEmail({ request }) {
        const data = request.all();
        const { name, email, message } = data;
        const mailjet = Mailjet.apiConnect(process.env.MAILJET_API_KEY_PUBLIC, process.env.MAILJET_API_KEY_PRIVATE);
        const sendEmail = mailjet.post('send', { version: 'v3.1' }).request({
            Messages: [
                {
                    From: {
                        Email: 'frienddly.outremer@gmail.com',
                        Name: 'Frienddly contact',
                    },
                    To: [
                        {
                            Email: 'frienddly.outremer@gmail.com',
                            Name: 'Frienddly contact',
                        },
                    ],
                    Subject: 'Nouveau message de contact',
                    TextPart: 'Vous avez reçu un nouveau message de contact',
                    HTMLPart: `
          <h3>Informations de contact</h3>
          <ul>
            <li>Nom: ${name}</li>
            <li>Email: ${email}</li>
          </ul>
          <h3>Message</h3>
          <p>${message}</p>
      `,
                    CustomID: 'AppGettingStartedTest',
                },
            ],
        });
        sendEmail
            .then((result) => {
            console.log('result : ', result.body);
        })
            .catch((err) => {
            console.log('error : ', err.statusCode);
        });
    }
}
//# sourceMappingURL=send_email_controller.js.map