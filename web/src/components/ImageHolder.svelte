<script lang="ts">
    import { Receive } from '@enums/events';
    import { ReceiveEvent } from '@utils/eventsHandlers';
    import {
        Button,
        Label,
        Toggle,
        Range,
        Input,
        Card,
        P,
        CloseButton,
        Heading,
        Secondary,
    } from 'flowbite-svelte';

    let size: number = $state(40);
    let colInvert: boolean = $state(true);
    let defaultModal = $state(false);

    // Settings state variables
    let debugMode = $state(false);
    let disablePopulation = $state(false);
    let zoneRadius = $state(150);
    let clearAreaSize = $state(999);

    ReceiveEvent(Receive.imageResize, (value: number) => {
        size = value;
    });

    ReceiveEvent(Receive.imageInvert, (bool: boolean) => {
        console.log('CLOSE');
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

    function decrementClearAreaSize() {
        clearAreaSize = Math.max(0, clearAreaSize - 1);
    }

    function incrementClearAreaSize() {
        clearAreaSize = Math.min(9999, clearAreaSize + 1);
    }
</script>

<div class="fixed right-0 top-0 m-4 z-50">
    <Card
        class="w-[516px] h-[894px] bg-gray-700 shadow-lg overflow-hidden p-0"
    >
        <!-- Header with close button -->
        <div
            class="flex justify-between items-center p-4 border-b border-gray-400"
        >
            <P
                size="2xl"
                weight="normal"
                space="normal"
                class="dark:text-white justify-center text-white"
                >NControl Settings</P
            >
            <CloseButton class="text-gray-400 hover:text-red-400" />
        </div>

        <!-- Settings Content -->
        <div class="p-4 space-y-6 border-b border-gray-700">
            <!-- Debug Mode Toggle -->
            <div class="flex items-center justify-between">
                <Label class="text-white">Debug Mode</Label>
                <Toggle bind:checked={debugMode} color="blue" />
            </div>

            <!-- Disable Population Toggle -->
            <div class="flex items-center justify-between">
                <Label class="text-white">Disable Population</Label>
                <Toggle bind:checked={disablePopulation} color="blue" />
            </div>

            <!-- Zone Radius Slider -->
            <div class="space-y-2">
                <Label for="zone-radius" class="text-white">Zone Radius</Label>
                <Range
                    id="zone-radius"
                    min="0"
                    max="350"
                    bind:value={zoneRadius}
                    color="blue"
                />
                <div class="flex justify-between text-xs text-gray-400 mt-1">
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

            <!-- Clear Area Size -->
            <div class="space-y-2">
                <Label for="clear-area-size" class="text-white"
                    >Clear Area Size</Label
                >
                <div class="flex items-center justify-between">
                    <div class="flex items-center">
                        <Button
                            color="alternative"
                            class="bg-[#2c3440] border border-gray-600 text-white rounded-l-lg px-3 py-2"
                            onclick={() => decrementClearAreaSize()}
                        >
                            −
                        </Button>
                        <Input
                            id="clear-area-size"
                            type="number"
                            bind:value={clearAreaSize}
                            min={0}
                            max={9999}
                            class="w-20 bg-[#2c3440] border-y border-gray-600 text-white text-center"
                        />
                        <Button
                            color="alternative"
                            class="bg-[#2c3440] border border-gray-600 text-white rounded-r-lg px-3 py-2"
                            onclick={() => incrementClearAreaSize()}
                        >
                            +
                        </Button>
                    </div>
                    <Button
                        color="blue"
                        class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2"
                        onclick={() => clearNow()}
                    >
                        Clear Now
                    </Button>
                </div>
            </div>
        </div>

        <!-- Save Button -->
        <div class="p-4">
            <Button
                color="blue"
                class="w-full bg-blue-600 hover:bg-blue-700 text-white py-3"
                onclick={() => saveSettings()}
            >
                Save
            </Button>
        </div>
    </Card>
</div>
