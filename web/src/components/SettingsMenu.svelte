<script lang="ts">
    import { Receive, Send } from '@enums/events';
    import { CONFIG_DATA } from '@stores/stores';
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
        Select,
    } from 'flowbite-svelte';

    // Settings state variables
    let debugMode = $state($CONFIG_DATA.Debug);
    let disablePopulation = $state($CONFIG_DATA.DisablePopulation);
    let zoneRadius = $state(0);
    let clearAreaSize = $state(250);
    let pedPopBudget = $state($CONFIG_DATA.PedPopulationBudget);
    let vehPopBudget = $state($CONFIG_DATA.VehiclePopulationBudget);
    // Store the original zones data for reference
    const originalZones = $CONFIG_DATA.SpecialZones?.Zones || [];
    
    // Format zone data for the Select component
    let zoneOptions = $state($CONFIG_DATA.SpecialZones?.Zones ? 
        $CONFIG_DATA.SpecialZones.Zones.map(zone => ({
            name: zone.Name || 'Unnamed Zone',
            value: zone.Name || 'Unnamed Zone',
            // Store the original zone object as custom data
            data: zone
        })).filter(zone => Boolean(zone.name)) : 
        []);
    
    let selectedZone = $state('');
    
    // Function to update radius when a zone is selected
     // Use Svelte's $effect rune to update radius when selected zone changes
     $effect(() => {
        if (selectedZone) {
            // Find the selected zone in the original data
            const selectedZoneData = originalZones.find(zone => zone.Name === selectedZone);
            if (selectedZoneData && selectedZoneData.Radius) {
                // Update the zone radius with the value from the selected zone
                zoneRadius = selectedZoneData.Radius;
                console.log(`Updated zone radius to ${zoneRadius} from zone ${selectedZone}`);
            }
        }
    });

    function saveSettings() {
        // Prepare settings object to send back to the client
        const settings = {
            Debug: debugMode,
            DisablePopulation: disablePopulation,
            PedPopulationBudget: pedPopBudget,
            VehiclePopulationBudget: vehPopBudget,
            ZoneRadius: zoneRadius,
            ClearAreaSize: clearAreaSize,
            SelectedZone: selectedZone
        };
        
        // Log settings for debugging
        console.log('Saving settings:', settings);
        
        // Send settings back to the client
        // SendEvent(Send.saveSettings, settings)
        //     .then(() => console.log('Settings saved successfully'))
        //     .catch(err => console.error('Error saving settings:', err));
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

<style>
    /* Completely prevent disabled icon from showing */
    :global(.no-disabled-icon:disabled),
    :global(.no-disabled-icon:disabled:hover),
    :global(.no-disabled-icon:disabled:focus),
    :global(.no-disabled-icon:disabled:active) {
        cursor: default !important;
        opacity: 1 !important;
        background-color: #374151 !important;
        pointer-events: none !important;
    }
    
    /* Additional selectors to override any potential tooltip or icon */
    :global(.no-disabled-icon:disabled::before),
    :global(.no-disabled-icon:disabled::after),
    :global(.no-disabled-icon:disabled *::before),
    :global(.no-disabled-icon:disabled *::after) {
        display: none !important;
        opacity: 0 !important;
        content: none !important;
    }
</style>

<div class="fixed right-0 top-1/2 transform -translate-y-1/2 m-4 z-50">
    <Card
        class="w-[516px] h-[824px] pt-5 bg-gray-700 shadow-lg overflow-hidden p-0 border-0"
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
            <!-- Population Budget Controls in a row -->
            <div class="space-y-2">
                <div class="flex justify-between gap-4">
                    <!-- Ped Population Budget -->
                    <div class="flex-1 space-y-2">
                        <Label for="ped-pop-budget" class="text-white"
                            >Ped Population Budget</Label
                        >
                        <div class="flex items-center">
                            <Button
                                color="alternative"
                                class="bg-[#2c3440] border border-gray-600 text-white rounded-l-lg px-3 py-2"
                                onclick={() =>
                                    (pedPopBudget = Math.max(
                                        0,
                                        pedPopBudget - 1,
                                    ))}
                            >
                                −
                            </Button>
                            <Input
                                id="ped-pop-budget"
                                type="number"
                                disabled
                                bind:value={pedPopBudget}
                                min={0}
                                max={3}
                                class="w-20 bg-gray-700 border-y border-gray-600 text-white text-center no-disabled-icon"
                            />
                            <Button
                                color="alternative"
                                class="bg-[#2c3440] border border-gray-600 text-white rounded-r-lg px-3 py-2"
                                onclick={() =>
                                    (pedPopBudget = Math.min(
                                        3,
                                        pedPopBudget + 1,
                                    ))}
                            >
                                +
                            </Button>
                        </div>
                    </div>

                    <!-- Vehicle Population Budget -->
                    <div class="flex-1 space-y-2">
                        <Label for="veh-pop-budget" class="text-white"
                            >Vehicle Population Budget</Label
                        >
                        <div class="flex items-center">
                            <Button
                                color="alternative"
                                class="bg-[#2c3440] border border-gray-600 text-white rounded-l-lg px-3 py-2"
                                onclick={() =>
                                    (vehPopBudget = Math.max(
                                        0,
                                        vehPopBudget - 1,
                                    ))}
                            >
                                −
                            </Button>
                            <Input
                                id="veh-pop-budget"
                                type="number"
                                disabled
                                bind:value={vehPopBudget}
                                min={0}
                                max={3}
                                class="w-20 bg-gray-700 border-y border-gray-600 text-white text-center no-disabled-icon"
                            />
                            <Button
                                color="alternative"
                                class="bg-[#2c3440] border border-gray-600 text-white rounded-r-lg px-3 py-2"
                                onclick={() =>
                                    (vehPopBudget = Math.min(
                                        3,
                                        vehPopBudget + 1,
                                    ))}
                            >
                                +
                            </Button>
                        </div>
                    </div>
                </div>
                <!-- Zone Radius Slider -->
                <div class="space-y-2">
                    <Label for="zone-select" class="text-white">Special Zones</Label>
                    <Select 
                        id="zone-select" 
                        class="bg-gray-700 text-white border-gray-600" 
                        items={zoneOptions} 
                        placeholder="Select a zone"
                        bind:value={selectedZone}
                    />
                </div>
                <div class="space-y-2">
                    <Label for="zone-radius" class="text-white"
                        >Zone Radius: <p class="flex text-lg text-gray-400">{zoneRadius}</p></Label
                    >
                    <Range
                        id="zone-radius"
                        min="0"
                        max="350"
                        bind:value={zoneRadius}
                        color="blue"
                    />
                    <div
                        class="flex justify-between text-xs text-gray-400 mt-1"
                    >
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
        </div></Card
    >
</div>
