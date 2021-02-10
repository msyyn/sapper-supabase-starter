<script>
  import { supabase } from '../config/supabase';
  import { onMount } from 'svelte';

  /* 
    this code below gets run when account page is rendered.
    if user got dropped out for some reason, we are redirecting him to frontpage. 
    otherwise we load the user details into a variable.
  */
 
  let user;
  onMount(async () => {
    try {
      user = await supabase.auth.user();
      if (!user) { window.top.location = '/' };
      console.dir(user)
    } catch(error) {
      console.error(error);
    };
  });
</script>

{#if user}
  <main>
    <h1>Hello 👋</h1>
    <p>You're logged in as <b>{user.email}</b> and your last login was at {new Date(user.last_sign_in_at).toLocaleDateString('en-GB')}.</p>
  </main>
{/if}

<style>
  main{
    width:500px;
    margin:0 auto 0;
  }
</style>