import Fastify from 'fastify'
import { formatDescription } from './modules/html'
import { createMailer } from './modules/mail'

interface MailRequest {
  name: string
  email: string
  number: string
  message: string
}

const host = '0.0.0.0'
const port = 3000

export function main (pass: string) {
  const server = Fastify({ logger: true })
  const sendMail = createMailer(pass)

  server.post('/api/mail', (request, reply) => {
    const { name, email, number, message } = request.body as MailRequest

    const html = formatDescription([
      ['Имя', name],
      ['Почта', email],
      ['Номер телефона', number],
      ['Сообщение', message]
    ])
    return sendMail(html)
      .then(() => reply.send({ res: 'ok' }))
  })

  server.listen(port, host, (err, address) => {
    console.log(address)
    if (err) throw err
  })
}
