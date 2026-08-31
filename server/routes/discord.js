import { Router } from 'express'
import { getDiscordStats, getDiscordWidget } from '../lib/discord.js'

const router = Router()

router.get('/stats', async (_req, res) => {
  res.json(await getDiscordStats())
})

router.get('/widget', async (_req, res) => {
  res.json(await getDiscordWidget())
})

export default router
