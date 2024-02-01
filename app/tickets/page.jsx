import { Suspense } from "react";
import TicketList from "./TicketList";
import Loading from "../loading";

export default function Tickets() {
  return (
    <main>
        <nav>
          <div>
            <h2>Tickets</h2>
            <p><small>Currently open tickets.</small></p>
          </div>
        </nav>
        
{/* La partie loading ne conserne que la partie TicketList et non toute la page */}
        <Suspense fallback={<Loading/>}>
          <TicketList/>
        </Suspense>
    </main>
  )
}

