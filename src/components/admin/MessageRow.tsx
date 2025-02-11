
import { Button } from "@/components/ui/button";
import { TableCell, TableRow } from "@/components/ui/table";
import { format } from "date-fns";

interface Message {
  id: string;
  name: string;
  email: string;
  message: string;
  created_at: string;
  is_read: boolean;
}

interface MessageRowProps {
  message: Message;
  onMarkAsRead: (id: string) => void;
}

export const MessageRow = ({ message, onMarkAsRead }: MessageRowProps) => {
  return (
    <TableRow>
      <TableCell>
        {format(new Date(message.created_at), "PPp")}
      </TableCell>
      <TableCell>{message.name}</TableCell>
      <TableCell>{message.email}</TableCell>
      <TableCell className="max-w-md truncate">
        {message.message}
      </TableCell>
      <TableCell>
        <span
          className={`px-2 py-1 rounded-full text-sm ${
            message.is_read
              ? "bg-green-100 text-green-800"
              : "bg-yellow-100 text-yellow-800"
          }`}
        >
          {message.is_read ? "Read" : "Unread"}
        </span>
      </TableCell>
      <TableCell>
        {!message.is_read && (
          <Button
            size="sm"
            onClick={() => onMarkAsRead(message.id)}
            variant="outline"
          >
            Mark as Read
          </Button>
        )}
      </TableCell>
    </TableRow>
  );
};
