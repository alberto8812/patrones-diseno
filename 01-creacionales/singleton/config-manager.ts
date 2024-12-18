class ConfigManager {

    private config: Record<string, string> = {};
    public setconfig(key: string, value: string): void {
        this.config[key] = value;
    }
    public getconfig(key: string): string | null {
        return this.config[key];
    }

    public getAllconfig(): Record<string, string> {
        return { ...this.config };
    }

}

export const configManager = new ConfigManager();