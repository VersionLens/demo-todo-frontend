<script>
	import '../app.css';

	import { setClient } from 'svelte-apollo';
	import client from '$lib/graphql/client';

	setClient(client);
</script>

<slot />
