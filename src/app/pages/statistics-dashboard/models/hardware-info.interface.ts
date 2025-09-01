export interface HardwareInfo {
  id: string;
  name: string;
  type: string;
  status: string;
  usage: number;
  temperature?: number;
  lastUpdate: Date;
  description?: string;
}
