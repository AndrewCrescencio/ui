import enUS from './en-US'
import ptBR from './pt-BR'

export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'pt-BR',
  messages: {
    'en-US': enUS,
    'pt-BR': ptBR,
  },
}))
