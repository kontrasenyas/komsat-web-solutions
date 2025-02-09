
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/components/ui/use-toast";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";

interface Message {
  id: string;
  name: string;
  email: string;
  message: string;
  created_at: string;
  is_read: boolean;
}

const Admin = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  const fetchMessages = async () => {
    try {
      const { data, error } = await supabase
        .from("messages")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      setMessages(data || []);
    } catch (error) {
      console.error("Error fetching messages:", error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to load messages. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  const markAsRead = async (id: string) => {
    try {
      const { error } = await supabase
        .from("messages")
        .update({ is_read: true })
        .eq("id", id);

      if (error) throw error;

      setMessages((prevMessages) =>
        prevMessages.map((msg) =>
          msg.id === id ? { ...msg, is_read: true } : msg
        )
      );

      toast({
        title: "Success",
        description: "Message marked as read",
      });
    } catch (error) {
      console.error("Error marking message as read:", error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to mark message as read. Please try again.",
      });
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  if (loading) {
    return (
      <div className="container mx-auto p-8">
        <div className="text-center">Loading messages...</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard - Messages</h1>
      {messages.length === 0 ? (
        <p className="text-center text-gray-500">No messages found.</p>
      ) : (
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
                <TableRow key={message.id}>
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
                        onClick={() => markAsRead(message.id)}
                        variant="outline"
                      >
                        Mark as Read
                      </Button>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}
    </div>
  );
};

export default Admin;
