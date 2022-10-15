import { createGtm } from '@gtm-support/vue-gtm'
import { type UserModule } from '@/types'
import { IDENTITIES } from '@/constants/app'

export const install: UserModule = ({ app }) => {
  app.use(createGtm({ id: IDENTITIES.GOOGLE_TAG_MANAGER_ID }))
}
