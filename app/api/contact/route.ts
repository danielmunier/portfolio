import { NextRequest, NextResponse } from 'next/server'

interface ContactFormData {
  name: string
  email: string
  message: string
}

export async function POST(request: NextRequest) {
  try {
    // Parse do corpo da requisição
    const body: ContactFormData = await request.json()
    
    // Capturar metadados do usuário
    const userAgent = request.headers.get('user-agent') || 'Desconhecido'
    const acceptLanguage = request.headers.get('accept-language') || 'Desconhecido'
    const referer = request.headers.get('referer') || 'Acesso direto'
    
    // Capturar IP e localização
    const forwarded = request.headers.get('x-forwarded-for')
    const realIP = request.headers.get('x-real-ip')
    const clientIP = forwarded ? forwarded.split(',')[0] : realIP || 'Desconhecido'
    
    // Tentar obter localização geográfica baseada no IP
 
    
    // Validação dos campos obrigatórios
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { error: 'Todos os campos são obrigatórios' },
        { status: 400 }
      )
    }

    // Validação básica de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: 'Email inválido' },
        { status: 400 }
      )
    }

    // Validação do tamanho da mensagem
    if (body.message.length < 10) {
      return NextResponse.json(
        { error: 'A mensagem deve ter pelo menos 10 caracteres' },
        { status: 400 }
      )
    }

    // Enviar para webhook do Discord
    const discordWebhookUrl = process.env.DISCORD_WEBHOOK_URL
    console.log(discordWebhookUrl)
    
    if (discordWebhookUrl) {
      try {
        const discordMessage = {
          embeds: [{
            title: "📧 Nova Mensagem de Contato",
            color: 0x00ff00, // Verde
            fields: [
              {
                name: "👤 Nome",
                value: body.name,
                inline: true
              },
              {
                name: "📧 Email",
                value: body.email,
                inline: true
              },
              {
                name: "💬 Mensagem",
                value: body.message.length > 1024 
                  ? body.message.substring(0, 1021) + "..." 
                  : body.message
              },
              {
                name: "⏰ Data/Hora",
                value: new Date().toLocaleString('pt-BR', {
                  timeZone: 'America/Sao_Paulo',
                  day: '2-digit',
                  month: '2-digit',
                  year: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit'
                }),
                inline: true
              }
            ],
            footer: {
              text: "Portfólio - Daniel Munier"
            },
            timestamp: new Date().toISOString()
          }]
        }

        // Adicionar informações técnicas em um segundo embed
        const technicalEmbed = {
          title: "🔧 Informações Técnicas",
          color: 0x0099ff, // Azul
          fields: [
            {
              name: "🌐 IP",
              value: clientIP,
              inline: true
            },
            {
              name: "📱 Dispositivo",
              value: userAgent.includes('Mobile') ? '📱 Mobile' : '💻 Desktop',
              inline: true
            },
            {
              name: "🌍 Idioma",
              value: acceptLanguage.split(',')[0] || 'Desconhecido',
              inline: true
            },
            {
              name: "🔗 Origem",
              value: referer !== 'Acesso direto' ? referer : 'Acesso direto',
              inline: false
            }
          ],
          footer: {
            text: "Metadados do usuário"
          },
          timestamp: new Date().toISOString()
        }

        // Adicionar informações de localização se disponível
      

        discordMessage.embeds.push(technicalEmbed)

        const discordResponse = await fetch(discordWebhookUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(discordMessage)
        })

        if (!discordResponse.ok) {
          console.warn('Erro ao enviar para Discord:', discordResponse.statusText)
        } else {
          console.log('Mensagem enviada para Discord com sucesso!')
        }
      } catch (discordError) {
        console.warn('Erro ao enviar para Discord:', discordError)
        // Não falha o envio se o Discord der erro
      }
    }

    // Log local também
    console.log('Nova mensagem recebida:', {
      name: body.name,
      email: body.email,
      message: body.message,
      timestamp: new Date().toISOString()
    })

    // Retornar sucesso
    return NextResponse.json(
      { 
        message: 'Mensagem enviada com sucesso!',
        success: true 
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('Erro ao processar mensagem:', error)
    
    return NextResponse.json(
      { 
        error: 'Erro interno do servidor',
        success: false 
      },
      { status: 500 }
    )
  }
}

// Método GET para verificar se a API está funcionando
export async function GET() {
  return NextResponse.json(
    { 
      message: 'API de contato funcionando!',
      status: 'active',
      timestamp: new Date().toISOString()
    },
    { status: 200 }
  )
}
