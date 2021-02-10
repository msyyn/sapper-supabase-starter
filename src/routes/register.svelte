<script>
  import { supabase } from '../config/supabase';

  let email = '';
  let passwordA = '';
  let passwordB = '';

  async function createUser() {
    // add double-checking here that all fields are filled out and exit early if not.
    if (email.length == 0 || passwordA.length == 0 || passwordB.length == 0 || (passwordA != passwordB)) return;

    // okay, passwords should match and everything is filled out. let's proceed by creating user account!
    try {
      const { user, session, error } = await supabase.auth.signUp({ 
        email: email, 
        password: passwordA
      });

      // now let's ask the user to verify their email because supabase is requiring it.
      alert('Please verify your email to log in.');
    } catch(error) {
      console.error(error);
    };
  };
</script>

<form on:submit|preventDefault={createUser}>
  <label for="email">Email address</label>
  <input id="email" bind:value={email} type="email" placeholder="Enter your email" required/>

  <label for="password">Enter password</label>
  <input id="password" bind:value={passwordA} type="password" placeholder="Secret word" required/>

  <label for="password-repeat">Repeat password</label>
  <input id="password-repeat" bind:value={passwordB} type="password" placeholder="Secret word" required/>

  <!-- Basic checking if passwords match. -->
  {#if (passwordA.length > 0 && passwordB.length > 0) && (passwordA != passwordB)}
    <span style="color: red">Passwords do not match</span>
  {/if}

  <!-- Enable submit if all fields are filled, and passwords match. -->
  {#if email.length > 0 && passwordA.length > 0 && passwordB.length > 0 && (passwordA == passwordB)}
    <button type="submit">Register</button>
  {:else}
    <button type="button" disabled>Register</button>
  {/if}
</form>

<style>
  form{
    width:500px;
    margin:0 auto 0;
  }

  label,input,span {
    display:block;
    width:100%;
  }
  input {
    margin-bottom:20px;
    padding:12px 8px;
  }
  button {
    padding:12px 24px;
  }
</style>