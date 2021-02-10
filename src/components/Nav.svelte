<script>
  import { supabase } from '../config/supabase';
  import { onMount } from 'svelte';
  export let segment;
  
  /* 
    this code below gets run when navigation is rendered.
    we are just checking if there is current user or not so we can show correct links based on that (see the HTML at bottom of file)
  */
  let user;
  onMount(async () => {
    try {
      user = await supabase.auth.user();
      console.dir(user);
    } catch(error) {
      console.error(error);
    };
  });

  async function logOut() {
    // this is fairly straightforward. sign the user out, and redirect to frontpage.
    try {
      await supabase.auth.signOut();
      window.top.location = '/'
    } catch(error) {
      console.error(error);
    };
  };
</script>

<nav>
	<ul>
		<li><a aria-current="{segment === undefined ? 'page' : undefined}" href=".">home</a></li>
		<li><a aria-current="{segment === 'about' ? 'page' : undefined}" href="about">about</a></li>
    <li><a rel=prefetch aria-current="{segment === 'blog' ? 'page' : undefined}" href="blog">blog</a></li>
    
		{#if user}
			<li><a aria-current="{segment === 'account' ? 'page' : undefined}" href="account">my account</a></li>
			<li><a aria-current="{segment === 'logout' ? 'page' : undefined}" href="logout" on:click|preventDefault={logOut}>log out</a></li>
		{:else}
      <li><a aria-current="{segment === 'login' ? 'page' : undefined}" href="login">login</a></li>
			<li><a aria-current="{segment === 'register' ? 'page' : undefined}" href="register">register</a></li>
    {/if}
	</ul>
</nav>


<style>
	nav {
		border-bottom: 1px solid rgba(255,62,0,0.1);
		font-weight: 300;
		padding: 0 1em;
	}

	ul {
		margin: 0;
		padding: 0;
	}

	/* clearfix */
	ul::after {
		content: '';
		display: block;
		clear: both;
	}

	li {
		display: block;
		float: left;
	}

	[aria-current] {
		position: relative;
		display: inline-block;
	}

	[aria-current]::after {
		position: absolute;
		content: '';
		width: calc(100% - 1em);
		height: 2px;
		background-color: rgb(255,62,0);
		display: block;
		bottom: -1px;
	}

	a {
		text-decoration: none;
		padding: 1em 0.5em;
		display: block;
	}
</style>