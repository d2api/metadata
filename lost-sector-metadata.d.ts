import { DamageType } from "bungie-api-ts/destiny2";
declare type ChampionType = "unstoppable" | "barrier" | "overload";
declare type EnemyFaction = "taken" | "vex" | "hive" | "fallen" | "cabal" | "scorn";
declare type EnemyData = {
    champions: ChampionType[];
    faction: EnemyFaction;
};
export declare type LSName = "ConcealedVoid" | "Perdition" | "BunkerE15" | "ExodusGarden2A" | "VelesLabyrinth" | "K1CrewQuarters" | "K1Logistics" | "K1Communion" | "K1Revelation" | "TheEmptyTank" | "TheQuarry" | "ScavengersDen" | "ExcavationSiteXII" | "SkydockIV" | "BayOfDrownedWishes" | "AphelionsRest" | "ChamberOfStarlight" | "TheConflux" | "TheRift" | "Metamorphosis" | "Sepulcher" | "Extraction";
export declare type LSMeta = {
    activityHash: {
        Legend: number;
        Master: number;
    };
    shields: DamageType[];
    enemies: EnemyData[];
};
export declare const lostSectorMeta: Record<LSName, LSMeta>;
export {};
