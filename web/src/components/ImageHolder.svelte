<script lang="ts">
    import { Receive } from '@enums/events';
    import { ReceiveEvent } from '@utils/eventsHandlers';
    import { Button, Modal, P } from "flowbite-svelte";

    let size: number = $state(40);
    let colInvert: boolean = $state(true);
    let text: string = $state('Byte Labs');
    let defaultModal = $state(false);

    ReceiveEvent(Receive.imageResize, (value: number) => {
        size = value;
    });

    ReceiveEvent(Receive.imageInvert, (bool: boolean) => {
        colInvert = bool;
    });

    ReceiveEvent(Receive.changeText, (newtext: string) => {
        text = newtext;
    });

    ReceiveEvent(Receive.resetText, () => {
        text = 'Byte Labs';
    });
</script>

<div class="w-screen h-screen absolute top-0 left-0">
    
    <h2
        style="color: {colInvert ? 'white' : 'black'}; font-size: {size / 10}vw"
        class="text-center text-black font-semibold bottom-[25vh] left-1/2 font-[Pixeboy] -translate-x-1/2 h-fit absolute"
    >
        {text}
    </h2>
    <Button class="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-fit absolute bg-accent" size="lg" style="width: {size}vw" onclick={() => (defaultModal = true)}>NControl Settings</Button>
    <Modal title="NControl Settings" bind:open={defaultModal} class="bg-gray-700 text-base" style="width: 516px; height: 894px;" autoclose>
        
        <p class="text-base leading-relaxed text-primary dark:text-gray-400">With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.</p>
        <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">The European Union's General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.</p>
      
        {#snippet footer()}
          <Button onclick={() => alert('Handle "success"')}>I accept</Button>
          <Button color="alternative">Decline</Button>
        {/snippet}
      </Modal>
</div>
