import { NextRequest, NextResponse } from 'next/server'

interface ContactFormData {
  name: string
  email: string
  message: string
}

export async function POST(request: NextRequest) {
  try {
    console.log('🚀 === NOVA REQUISIÇÃO DE CONTATO ===')
    console.log('⏰ Timestamp:', new Date().toISOString())
    console.log('🌐 URL:', request.url)
    console.log('📋 Headers:', Object.fromEntries(request.headers.entries()))
    console.log('🔧 Method:', request.method)

    // Parse do corpo da requisição
    const rawBody = await request.text()
    console.log('📄 Raw Body:', rawBody)

    let body: ContactFormData
    try {
      body = JSON.parse(rawBody)
      console.log('📝 Dados parseados:', body)
    } catch (parseError) {
      console.error('❌ Erro ao fazer parse do JSON:', parseError)
      return NextResponse.json(
        { error: 'Formato de dados inválido' },
        { status: 400 }
      )
    }

    // Capturar metadados do usuário
    const userAgent = request.headers.get('user-agent') || 'Desconhecido'
    const acceptLanguage = request.headers.get('accept-language') || 'Desconhecido'
    const referer = request.headers.get('referer') || 'Acesso direto'

    // Capturar IP e localização
    const forwarded = request.headers.get('x-forwarded-for')
    const realIP = request.headers.get('x-real-ip')
    const clientIP = forwarded ? forwarded.split(',')[0] : realIP || 'Desconhecido'

    // Tentar obter localização geográfica baseada no IP


    // Validação mínima - apenas verificar se os campos existem
    console.log('🔍 Verificando campos básicos...')
    console.log('Nome:', body.name || 'Não informado')
    console.log('Email:', body.email || 'Não informado')
    console.log('Mensagem:', body.message || 'Não informada')

    // Apenas verificar se pelo menos o email e mensagem existem
    if (!body.email || !body.message) {
      console.error('❌ Email ou mensagem faltando')
      return NextResponse.json(
        { error: 'Email e mensagem são obrigatórios' },
        { status: 400 }
      )
    }

    console.log('✅ Campos básicos verificados!')

    // Enviar para webhook do Discord
    const discordWebhookUrl = process.env.DISCORD_WEBHOOK_URL
    console.log('🔍 Discord Webhook URL:', discordWebhookUrl ? 'Configurado' : 'NÃO CONFIGURADO')

    if (discordWebhookUrl) {
      console.log('📤 Tentando enviar para Discord...')
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

        console.log('📋 Payload do Discord:', JSON.stringify(discordMessage, null, 2))

        const discordResponse = await fetch(discordWebhookUrl, {
          method: 'post',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(discordMessage)
        })

        console.log('📊 Status da resposta Discord:', discordResponse.status)
        console.log('📊 Headers da resposta:', Object.fromEntries(discordResponse.headers.entries()))

        if (!discordResponse.ok) {
          const errorText = await discordResponse.text()
          console.error('❌ Erro ao enviar para Discord:')
          console.error('Status:', discordResponse.status)
          console.error('Status Text:', discordResponse.statusText)
          console.error('Response Body:', errorText)
        } else {
          const responseText = await discordResponse.text()
          console.log('✅ Mensagem enviada para Discord com sucesso!')
          console.log('Response:', responseText)
        }
      } catch (discordError) {
        console.error('💥 Erro ao enviar para Discord:')
        console.error('Error Type:', typeof discordError)
        console.error('Error Message:', discordError instanceof Error ? discordError.message : String(discordError))
        console.error('Error Stack:', discordError instanceof Error ? discordError.stack : 'No stack trace')
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
