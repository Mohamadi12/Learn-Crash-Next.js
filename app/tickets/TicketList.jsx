import Link from "next/link"

async function getTickets(){
  // initate delay loading
  await new Promise(resolve => setTimeout(resolve, 3000))
    const res = await fetch ('http://localhost:4000/tickets', {
    //    Les données sont visuel après chaque 30s c'est à dire que les données se charge aprs chaque 30s
       next: {
            revalidate: 30
        }
    })

    return res.json()
}

export default async function TicketList() {
    // Fetching & Revalidating Data
    const tickets = await getTickets()
  return (
    <>
      {tickets.map((ticket) =>(
        <div key={ticket.id} className="card my-5">
          {/* Cet Link permet de naviguer à chaque moment qu'il y a un click */}
          <Link href={`/tickets/${ticket.id}`}>
            <h3>{ticket.title}</h3>
            <p>{ticket.body.slice(0, 200)}...</p>
            <div className={`pill ${ticket.priority}`}>
            {ticket.priority} priority
            </div>
          </Link>
        </div>
      ))}
      {tickets.length ===0 &&(
        <p className="text-center">There are no open tickets</p>
      )}
    </>
  )
}
