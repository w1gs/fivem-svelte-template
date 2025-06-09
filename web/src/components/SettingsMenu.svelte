<script lang="ts">
    import { Receive, Send } from '@enums/events';
    import { ReceiveEvent, SendEvent } from '@utils/eventsHandlers';
    import {
        Button,
        Label,
        Toggle,
        Range,
        Input,
        Card,
        P,
        CloseButton,
    } from 'flowbite-svelte';

    // Settings state variables
    let debugMode = $state(false);
    let disablePopulation = $state(false);
    let zoneRadius = $state(150);
    let clearAreaSize = $state(250);

    // Listen for config data
    ReceiveEvent(Receive.configData, (config: any) => {
        console.log(config.debugMode);
        // Update state with received config values
        //if (config.debugMode !== undefined) debugMode = config.debugMode;
        // if (config.disablePopulation !== undefined) disablePopulation = config.disablePopulation;
        // if (config.zoneRadius !== undefined) zoneRadius = config.zoneRadius;
        // if (config.clearAreaSize !== undefined) clearAreaSize = config.clearAreaSize;

        console.log('Received config data:', config);
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
    function closeSettings() {
        SendEvent(Send.close);
    }

    function clearNow() {
        // Handle clear area now functionality
        SendEvent(Send.clearArea, { radius: clearAreaSize })
            .then(() => console.log(`Event sent successfully`))
            .catch(err => console.error(`Error sending event:`, err));
    }

    function decrementClearAreaSize() {
        clearAreaSize = Math.max(1, clearAreaSize - 1);
    }

    function incrementClearAreaSize() {
        clearAreaSize = Math.min(500, clearAreaSize + 1);
    }
</script>

<div class="fixed right-0 top-1/2 transform -translate-y-1/2 m-4 z-50">
    <Card
        class="w-[516px] pt-5 bg-gray-700 shadow-lg overflow-hidden p-0 border-0"
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
            <CloseButton
                onclick={closeSettings}
                class="text-gray-400 hover:text-red-400"
            />
        </div>

        <!-- Settings Content -->
        <div class="p-4 space-y-6 border-b border-gray-400">
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
                            min={1}
                            max={500}
                            class="w-20 bg-gray-700 border-y border-gray-600 text-white text-center"
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
                        class="bg-blue-600 hover:bg-blue-900 text-white px-4 py-2"
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
