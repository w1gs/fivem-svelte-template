<script lang="ts">
    import { Receive } from '@enums/events';
    import { ReceiveEvent } from '@utils/eventsHandlers';
    import {
        Button,
        Label,
        Toggle,
        Range,
        Input,
        Card
    } from 'flowbite-svelte';

    let size: number = $state(40);
    let colInvert: boolean = $state(true);
    let defaultModal = $state(false);

    // Settings state variables
    let debugMode = $state(false);
    let disablePopulation = $state(false);
    let zoneRadius = $state(150);
    let clearAreaSize = $state(999);
    let placement: ModalPlacementType = $state("center-right");

    ReceiveEvent(Receive.imageResize, (value: number) => {
        size = value;
    });

    ReceiveEvent(Receive.imageInvert, (bool: boolean) => {
        console.log("CLOSE")
        colInvert = bool;
    });

    ReceiveEvent(Receive.visible, (bool: boolean) => {
      defaultModal = bool;
    });


    function saveSettings() {
        // Handle saving settings
        console.log({
            debugMode,
            disablePopulation,
            zoneRadius,
            clearAreaSize,
        });
    }

    function clearNow() {
        // Handle clear area now functionality
        console.log('Clearing area with size:', clearAreaSize);
    }
</script>

<Card
    title="NControl Settings"
    class="w-[516px] h-[894px] bg-gray-700 rounded-2xl outline outline-gray-600 justify-start backdrop:bg-transparent"
>
    <div class="px-4 py-2 text-gray-300">
        <div class="flex items-center justify-between mb-4">
            <span class="text-white">Debug Mode</span>
            <Toggle bind:checked={debugMode} class="blue" />
        </div>

        <div class="flex items-center justify-between mb-8">
            <span class="text-white">Disable Population</span>
            <Toggle bind:checked={disablePopulation} color="blue" />
        </div>

        <div class="mb-8">
            <Label class="mb-2 text-white">Zone Radius</Label>
            <Range
                id="zone-radius"
                min="0"
                max="350"
                bind:value={zoneRadius}
                class="mb-1"
            />
            <div class="flex justify-between text-xs text-gray-400">
                <span>0</span>
                <span>50</span>
                <span>100</span>
                <span>150</span>
                <span>200</span>
                <span>250</span>
                <span>300</span>
                <span>350</span>
            </div>
        </div>

        <div class="mb-8">
            <Label class="mb-2 text-white">Clear Area Size</Label>
            <div class="flex items-center gap-4">
                <div class="flex items-center">
                    <div class="flex">
                        <Button
                            color="alternative"
                            class="rounded-r-none px-3"
                            onclick={() =>
                                (clearAreaSize = Math.max(
                                    0,
                                    clearAreaSize - 1,
                                ))}>-</Button
                        >
                        <Input
                            type="number"
                            bind:value={clearAreaSize}
                            min={0}
                            max={9999}
                            class="w-24 border-x-0 rounded-none text-center"
                        />
                        <Button
                            color="alternative"
                            class="rounded-l-none px-3"
                            onclick={() =>
                                (clearAreaSize = Math.min(
                                    9999,
                                    clearAreaSize + 1,
                                ))}>+</Button
                        >
                    </div>
                </div>
                <Button color="blue" class="ml-auto" onclick={() => clearNow()}
                    >Clear Now</Button
                >
            </div>
        </div>
    </div>

    <div class="mt-auto px-4 py-4">
        <Button color="blue" class="w-full" onclick={() => saveSettings()}
            >Save</Button
        >
    </div>
</Card>
