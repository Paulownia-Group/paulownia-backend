import { createTransport } from 'nodemailer'

const host = 'smtp.yandex.ru'
const port = 465
const sender = 'sender@paulownia-group.me'
const reciever = 'hello@paulownia-group.me'

export function createMailer (pass: string) {
  const transport = createTransport({
    host,
    port,
    secure: true,
    auth: {
      user: sender,
      pass
    }
  })

  return (html: string) => transport.sendMail({
    from: `"Купи Павловнию" <${sender}>`,
    to: reciever,
    subject: 'Заявка с сайта',
    text: 'Используйте HTML версию',
    html
  })
}
