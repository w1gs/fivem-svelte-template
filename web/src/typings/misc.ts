export interface Config {
    fallbackResourceName: string;
    allowEscapeKey: boolean;
}

export interface ConfigData {
    Debug?: boolean;
    DisablePopulation?: boolean;
    PedPopulationBudget?: Number;
    VehiclePopulationBudget?: Number;
    ReduceVehicleModelVariance?: boolean;
    ReducePedModelVariance?: boolean;
    PopulationDisabledBuckets?: Array<Number>;
    EnabledDispatchServices?: DispatchServices;
}

export interface DispatchServices {
    PoliceAutomobile?: boolean;
    PoliceHelicopter?: boolean;
    FireDepartment?: boolean;
    SwatAutomobile?: boolean;
    AmbulanceDepartment?: boolean;
    PoliceRiders?: boolean;
    PoliceVehicleRequest?: boolean;
    PoliceRoadBlock?: boolean;
    PoliceAutomobileWaitPulledOver?: boolean;
    PoliceAutomobileWaitCruising?: boolean;
    Gangs?: boolean;
    SwatHelicopter?: boolean;
    PoliceBoat?: boolean;
    ArmyVehicle?: boolean;
    BikerBackup?: boolean;
}