<script lang="ts">
    import DebugImage from '@utils/debug/DebugImage.svelte';
    import { InitialiseDebugSenders } from '@utils/debug/init';
    import { InitialiseDebugReceivers } from '@utils/debug/receivers';
    import { onMount } from 'svelte';

    onMount(() => {
        InitialiseDebugSenders();
        InitialiseDebugReceivers();
    });

</script>

<div class="w-fit h-fit flex flex-col z-[9999999]">
    <div
        class="absolute w-screen bg-cover bg-no-repeat bg-center h-screen top-0 left-0 dev-image grid place-items-center"
    >
        <DebugImage />
    </div>
</div>
