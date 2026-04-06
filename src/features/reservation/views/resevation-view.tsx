import { ReservationCard, useReservation, } from "@/features"

export function ReservationView() {

    const { guests, setGuests, handleAssign, } = useReservation()

    return (
        <ReservationCard
            value={guests}
            min={1}
            max={10}
            onChange={setGuests}
            onAssign={handleAssign}
        />
    )
}