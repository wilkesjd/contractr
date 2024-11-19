import { addJobAction } from "@/app/actions";
import { FormMessage, Message } from "@/components/form-message";
import { SubmitButton } from "@/components/submit-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default async function AddJob(props: { searchParams: Promise<Message> }) {
  const searchParams = await props.searchParams;

  return (
    <div className="flex items-center justify-center h-screen w-screen max-w-screen bg-gradient-to-br from-black to-purple-600">
      <form className="bg-gray-100 p-6 rounded-lg shadow-md w-full max-w-md space-y-4">
        <h1 className="text-2xl font-medium text-center">Add Job</h1>
        <div className="space-y-4">
          <div>
            <Label htmlFor="title">Job Title</Label>
            <Input name="title" placeholder="Ex: Landscaper" required />
          </div>
          <div>
            <Label htmlFor="description">Job Description</Label>
            <textarea
              name="description"
              placeholder="Looking for a landscaper to redo bushes and flowers."
              className="flex h-30 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              rows={4}
              required
            ></textarea>
          </div>
          <div>
            <Label htmlFor="text">Location</Label>
            <Input
              name="location"
              placeholder="163 Coming St"
              required
            />
          </div>
          <div>
            <Label htmlFor="float">Budget</Label>
            <Input
              name="budget"
              placeholder="$200"
              required
            />
          </div>
          <div className="flex justify-center">
            <SubmitButton pendingText="Adding Job..." formAction={addJobAction}>
              Add Job
            </SubmitButton>
          </div>
        </div>
        <FormMessage message={searchParams}/>
      </form>
    </div>
  );
}