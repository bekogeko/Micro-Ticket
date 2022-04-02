import {
  Publisher,
  Subjects,
  TicketUpdatedEvent,
} from "@bkgk-microticket/common";

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
