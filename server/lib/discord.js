export async function fetchWithBot(guildId, token) {
  const response = await fetch(
    `https://discord.com/api/v10/guilds/${guildId}?with_counts=true`,
    { headers: { Authorization: `Bot ${token}` } },
  )

  if (!response.ok) return null

  const data = await response.json()
  return {
    available: true,
    source: 'bot',
    members: data.approximate_member_count ?? data.member_count ?? null,
    online: data.approximate_presence_count ?? null,
    name: data.name ?? null,
  }
}

export async function fetchWithWidget(guildId) {
  const response = await fetch(
    `https://discord.com/api/guilds/${guildId}/widget.json`,
  )

  if (!response.ok) return null

  const data = await response.json()
  return {
    available: true,
    source: 'widget',
    members: data.presence_count ?? null,
    online: data.presence_count ?? null,
    name: data.name ?? null,
    widgetEnabled: true,
  }
}

export async function getDiscordStats() {
  const token = process.env.DISCORD_BOT_TOKEN
  const guildId = process.env.DISCORD_GUILD_ID

  if (!guildId) {
    return { available: false, reason: 'missing_guild_id' }
  }

  try {
    if (token) {
      const botData = await fetchWithBot(guildId, token)
      if (botData) return botData
    }

    const widgetData = await fetchWithWidget(guildId)
    if (widgetData) return widgetData

    return { available: false }
  } catch {
    return { available: false }
  }
}

export async function getDiscordWidget() {
  const guildId = process.env.DISCORD_GUILD_ID
  if (!guildId) return { available: false }

  try {
    const widget = await fetchWithWidget(guildId)
    if (!widget) return { available: false }

    return {
      available: true,
      guildId,
      iframeSrc: `https://discord.com/widget?id=${encodeURIComponent(guildId)}&theme=dark`,
    }
  } catch {
    return { available: false }
  }
}
