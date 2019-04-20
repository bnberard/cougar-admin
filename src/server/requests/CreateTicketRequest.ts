export interface CreateTicketRequest
{
    ticketDate: string;
    spots: number;
    betAmount: number;
    numbers: number;
    startGame: number;
    endGame: string;
}