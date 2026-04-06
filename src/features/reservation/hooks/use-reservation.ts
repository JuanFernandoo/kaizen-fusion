import { useState } from "react"
import { useAssignTableMutation } from "@/features"

export const useReservation = () => {

  const [guests, setGuests] = useState(2)

  const { mutate, isPending, data, error, reset } = useAssignTableMutation()

  const handleAssign = () => {
    if (guests <= 0) return

    mutate({ guests })
  }

  return {
    guests,
    setGuests,
    handleAssign,
    resetReservation: reset,
    isAssigning: isPending,
    reservation: data,
    reservationError: error
  }
}