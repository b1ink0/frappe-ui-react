import { Link } from "lucide-react";

export const title = "Quicklinks";

export const Widget = () => {
  return (
    <div className="flex flex-col gap-1.5">
      <a href="#" className="flex gap-2"> Create Leave Application <span><Link /></span></a>
      <a href="#" className="flex gap-2"> Feedback Received/Given<span><Link /></span></a>
      <a href="#" className="flex gap-2"> Helpdesk<span><Link /></span></a>
      <a href="#" className="flex gap-2"> Handbook<span><Link /></span></a>
    </div>
  )
}
