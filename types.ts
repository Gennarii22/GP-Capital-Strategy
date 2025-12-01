export interface StressTestResult {
  riskLevel: 'CRITICAL' | 'HIGH' | 'MODERATE' | 'STABLE';
  runwayAnalysis: string;
  survivalProtocol: string;
  gameoverDate: string;
}

export interface StressTestInput {
  monthlyBurn: string;
  cashOnHand: string;
  revenue: string;
  teamSize: string;
}

export enum SectionId {
  HERO = 'hero',
  PROBLEM = 'problem',
  SOLUTION = 'solution',
  PROTOCOL = 'protocol',
  AUTHOR = 'author'
}

export type Language = 'en' | 'it' | 'es';