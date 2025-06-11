export interface Config {
    fallbackResourceName: string;
    allowEscapeKey: boolean;
}

export interface DispatchServices {
    [key: string]: boolean;
}

export interface EnabledScenarioGroups {
    [key: string]: boolean;
}

export interface EnabledScenarioTypes {
    [key: string]: boolean;
}
export interface RandomVehicles {
    CreateGarbageTrucks?: boolean;
    CreateRandomCops?: boolean;
    CreateRandomCopsNotOnScenarios?: boolean;
    CreateRandomCopsOnScenarios?: boolean;
    CreateRandomBoats?: boolean;
    CreateVehicleDistantLights?: boolean;
}

export interface SpecialZones {
    Enabled?: boolean;
    Zones?: Array<Zone>;
}

export interface Zone {
    Name?: string;
    Debug?: boolean;
    Coords?: { x: number; y: number; z: number };
    Radius?: number;
    PedLevel?: number;
    VehicleLevel?: number;
    ForceRemovePeds?: boolean;
    ForceRemoveVehicles?: boolean;
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
