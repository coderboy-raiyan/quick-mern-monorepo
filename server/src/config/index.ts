import { config as dotEnvConfig } from 'dotenv'
import path from 'path'

dotEnvConfig({ path: path.resolve(process.cwd(), '.env') })

const config = {
  port: process.env.PORT || 5000,
  node_env: process.env.NODE_ENV as 'development' | 'production',
  db_uri: process.env.DB_URI,
}

export default config
