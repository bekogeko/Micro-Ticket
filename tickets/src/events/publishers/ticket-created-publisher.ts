import {
  Publisher,
  Subjects,
  TicketCreatedEvent,
} from "@bkgk-microticket/common";

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}
