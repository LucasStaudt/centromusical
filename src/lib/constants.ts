export const WHATSAPP_NUMBER = '555181027996'
export const WHATSAPP_DEFAULT_MESSAGE =
  'Olá! Gostaria de agendar uma aula experimental.'
export const whatsappUrl = (message = WHATSAPP_DEFAULT_MESSAGE) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
