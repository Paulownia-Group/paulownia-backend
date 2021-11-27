import { main } from './app'

if (process.argv.length < 3) {
  console.log('No SMTP password has been provided')
  process.exit(1)
}

main(process.argv[2])
