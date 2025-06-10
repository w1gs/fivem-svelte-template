export interface Config {
    fallbackResourceName: string;
    allowEscapeKey: boolean;
}

export interface ConfigData {
    Debug?: boolean;
    DisablePopulation?: boolean;
    PedPopulationBudget: number;
    VehiclePopulationBudget: number;
    ReduceVehicleModelVariance?: boolean;
    ReducePedModelVariance?: boolean;
    PopulationDisabledBuckets?: Array<number>;
    EnabledDispatchServices?: DispatchServices;
    EnabledScenarioGroups?: EnabledScenarioGroups;
    EnabledScenarioTypes?: EnabledScenarioTypes;
    RandomVehicles?: RandomVehicles;
    SpecialZones?: SpecialZones;
}

interface DispatchServices {
    [key: string]: boolean;
}

interface EnabledScenarioGroups {
    [key: string]: boolean;
}

interface EnabledScenarioTypes {
    [key: string]: boolean;
}
interface RandomVehicles {
    CreateGarbageTrucks?: boolean;
    CreateRandomCops?: boolean;
    CreateRandomCopsNotOnScenarios?: boolean;
    CreateRandomCopsOnScenarios?: boolean;
    CreateRandomBoats?: boolean;
    CreateVehicleDistantLights?: boolean;
}

interface SpecialZones {
    Enabled?: boolean;
    Zones?: Array<Zone>;
}

interface Zone {
    Name?: string;
    Debug?: boolean;
    Coords?: { x: number; y: number; z: number };
    Radius?: number;
    PedLevel?: number;
    VehicleLevel?: number;
    ForceRemovePeds?: boolean;
    ForceRemoveVehicles?: boolean;
}
