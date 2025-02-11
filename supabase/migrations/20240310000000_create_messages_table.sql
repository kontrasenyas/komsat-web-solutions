
-- Create messages table
CREATE TABLE messages (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  is_read BOOLEAN DEFAULT false NOT NULL
);

-- Set up row level security
ALTER TABLE messages ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert messages (for the contact form)
CREATE POLICY "Allow public message submission" ON messages
FOR INSERT TO anon
WITH CHECK (true);

-- Only authenticated users can view messages
CREATE POLICY "Only authenticated users can view messages" ON messages
FOR SELECT TO authenticated
USING (true);

-- Allow authenticated users to update messages
CREATE POLICY "Allow authenticated users to update messages" ON messages
FOR UPDATE TO authenticated
USING (true)
WITH CHECK (true);
