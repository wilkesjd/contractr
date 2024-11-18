import { createClient } from "@/utils/supabase/server";

interface Props {
    email: string
}

export const lockAccount = async (props: Props) => {

    const supabase = await createClient();

    const { data: users, error: userError } = await supabase
      .from('users')
      .select('id, email')
      .eq('email', props.email);

    if (userError) {
      console.error(`Error fetching user: ${userError.code} - ${userError.message}`);
      return;
    }

    // Ensure at least one user is found
    if (!users || users.length === 0) {
      console.error('No user found with the given email');
      return;
    }

    // Get the user ID (assuming a single result)
    const user = users[0];
    console.log(`User ID: ${user.id}`);

    // Update the profile to lock the account
    const { data: profiles, error: profilesError } = await supabase
      .from('profiles')
      .update({ isLocked: true }) // Use `true` as a boolean value
      .eq('id', user.id)
      .select();

    if (profilesError) {
      console.error(`Error updating profile: ${profilesError.code} - ${profilesError.message}`);
      return;
    }

    console.log('Profile successfully updated:', profiles);
};

    