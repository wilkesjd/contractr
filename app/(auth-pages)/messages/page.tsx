import { FormMessage, Message } from "@/components/form-message";
import Header from '../header';

export default async function Messages(props: { searchParams: Promise<Message> }) {
    const searchParams = await props.searchParams;
  return (
    <div className="flex items-center justify-center h-screen w-screen max-w-screen bg-gradient-to-br from-black to-purple-600">
      < Header/>
    </div>
  );
};
