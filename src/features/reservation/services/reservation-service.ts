import type { ReservationRequestType, ReservationResponseType } from "@/features";

export const assignTableService = async (
    data: ReservationRequestType): Promise<ReservationResponseType> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                tableId: crypto.randomUUID(),
                waitTime: 15,
                tableNumber: 5,
                tableType: data.guests > 4 ? 'HIGH' : 'LOW'
            })
        }, 800);
    })
}