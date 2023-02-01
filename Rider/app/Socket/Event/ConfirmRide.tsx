import { getSocket } from '../Socket'

// Constants
import { RIDE_CONFIRMED_EVENT } from '@/Constants/SocketEventConstants'

export default (
  accessToken: string,
  customer: string,
  rideHash: string,
  userAgent: string
) => {
  let Socket = getSocket()

  Socket.emit(RIDE_CONFIRMED_EVENT, {
    payload: {
      token: accessToken,
      UID: userAgent,
      data: {
        customer,
        rideHash
      }
    }
  })
}
