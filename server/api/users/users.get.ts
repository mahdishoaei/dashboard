import { applicationPath } from "../../../services/applicationPath"
import { errorToast } from '@/utils/toasMessage'

export default defineEventHandler(async (event) => {
   try {
      const response = await $fetch(`${applicationPath.BASE_URL}${applicationPath.USERS.GET}`)
      return response
   }
   catch(error) {
      errorToast('bottom-right', 'Reaquest has been error and your network is slow please try again!!!')
      return error
   }
})
