import { getDiscordWidget } from '../../server/lib/discord.js'

export default async function handler(_req, res) {
  res.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate=120')
  res.status(200).json(await getDiscordWidget())
}
