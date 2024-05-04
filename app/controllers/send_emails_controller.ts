// import type { HttpContext } from '@adonisjs/core/http'
import env from '#start/env'
import { HttpContext } from '@adonisjs/core/http'
import Mailjet from 'node-mailjet'

export default class SendEmailsController {
  async sendEmail({ request }: HttpContext) {
    const data = request.all()
    const { name, email, message } = data
    const mailjet = (Mailjet as any).apiConnect(
      env.get('MAILJET_API_KEY_PUBLIC'),
      env.get('MAILJET_API_KEY_PRIVATE')
    )
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
    })
    sendEmail
      .then((result: any) => {
        console.log('result : ', result.body)
      })
      .catch((err: any) => {
        console.log('error : ', err.statusCode)
      })
  }
}
