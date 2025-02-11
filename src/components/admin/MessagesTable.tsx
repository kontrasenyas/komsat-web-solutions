
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { MessageRow } from "./MessageRow";

interface Message {
  id: string;
  name: string;
  email: string;
  message: string;
  created_at: string;
  is_read: boolean;
}

interface MessagesTableProps {
  messages: Message[];
  onMarkAsRead: (id: string) => void;
}

export const MessagesTable = ({ messages, onMarkAsRead }: MessagesTableProps) => {
  if (messages.length === 0) {
    return <p className="text-center text-gray-500">No messages found.</p>;
  }

  return (
    <div className="overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Message</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {messages.map((message) => (
            <MessageRow
              key={message.id}
              message={message}
              onMarkAsRead={onMarkAsRead}
            />
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
