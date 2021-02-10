<script>
    import { supabase } from '../config/supabase';
    
    let email = '';
    let password = '';
  
    async function loginUser() {
      // add double-checking here that all fields are filled out and exit early if not.
      if (email.length == 0 || password.length == 0) return;
  
      // okay, passwords should match and everything is filled out. let's proceed by creating user account!
      try {
        const { user, session, error } = await supabase.auth.signIn({ 
          email: email, 
          password: password
        });

        console.dir(user)

        // let's add some error handling here. 
        // typical error users will get is that email is not verified.
        // so our alert will display this message if user is trying to login with unverified email.
        if (error) { 
          alert(error.message);
          return;
        }; 
  
        // that's it, we now have user object available if everything went as expected!
        // let's direct the user to frontpage
        window.top.location = '/';
      } catch(error) {
        console.error(error);
      };
    };
  </script>
  
  <form on:submit|preventDefault={loginUser}>
    <label for="email">Email address</label>
    <input id="email" bind:value={email} type="email" placeholder="Enter your email" required/>
  
    <label for="password">Enter password</label>
    <input id="password" bind:value={password} type="password" placeholder="Secret word" required/>
  
  
    <!-- Enable submit if all fields are filled, and passwords match. -->
    {#if email.length > 0 && password.length}
      <button type="submit">Log in</button>
    {:else}
      <button type="button" disabled>Log in</button>
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