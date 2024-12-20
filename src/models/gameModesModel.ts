export interface GameMode {
    uuid:                  string;
    displayName:           string;
    description:           string;
    duration:              string;
    economyType:           null;
    allowsMatchTimeouts:   boolean;
    isTeamVoiceAllowed:    boolean;
    isMinimapHidden:       boolean;
    orbCount:              number;
    roundsPerHalf:         number;
    teamRoles:             null;
    gameFeatureOverrides:  null;
    gameRuleBoolOverrides: GameRuleBoolOverride[];
    displayIcon:           string;
    listViewIconTall:      string;
    assetPath:             string;
}

export interface GameRuleBoolOverride {
    ruleName: string;
    state:    boolean;
}