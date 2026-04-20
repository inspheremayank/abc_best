export type ProjectSector =
  | 'Hospitals'
  | 'Pharma'
  | 'Hotels & Malls'
  | 'Industrial'
  | 'Power Plants';

export const SECTORS: ProjectSector[] = [
  'Hospitals',
  'Pharma',
  'Hotels & Malls',
  'Industrial',
  'Power Plants',
];

export interface Project {
  client: string;
  project: string;
  location: string;
  sector: ProjectSector;
}

export const PROJECTS: Project[] = [
  // Hospitals
  { client: 'Johnson Medical Singapore', project: 'Central Sterile Supply & OT Complex HVAC', location: 'Delhi NCR', sector: 'Hospitals' },
  { client: 'Max Healthcare', project: 'Modular OT AHU & Clean Room Systems', location: 'New Delhi', sector: 'Hospitals' },
  { client: 'Fortis Hospitals', project: 'AHU & FCU Replacement Programme', location: 'Gurugram, Haryana', sector: 'Hospitals' },
  { client: 'Apollo Hospital', project: 'HVAC Refurbishment – Critical Care Wing', location: 'New Delhi', sector: 'Hospitals' },
  { client: 'AIIMS', project: 'LAF Units & HEPA Filter Housing Supply', location: 'New Delhi', sector: 'Hospitals' },
  { client: 'Medanta Hospital', project: 'Complete HVAC Supply – New Block', location: 'Gurugram', sector: 'Hospitals' },

  // Pharma
  { client: 'Ranbaxy Laboratories', project: 'Clean Room HVAC & Laminar Flow Systems', location: 'Gurgaon', sector: 'Pharma' },
  { client: 'Sun Pharmaceuticals', project: 'AHU & Air Washer Supply', location: 'Baddi, HP', sector: 'Pharma' },
  { client: 'Dr. Reddy\'s Laboratories', project: 'HVAC Upgradation – Manufacturing Block', location: 'Hyderabad', sector: 'Pharma' },
  { client: 'Cipla Ltd', project: 'Precision AHU for Sterile Manufacturing', location: 'Patalganga', sector: 'Pharma' },
  { client: 'Wockhardt Pharma', project: 'Clean Room Equipment & HEPA Housing', location: 'Aurangabad', sector: 'Pharma' },
  { client: 'Cadila Healthcare', project: 'Air Washer & Ventilation Systems', location: 'Ahmedabad', sector: 'Pharma' },

  // Hotels & Malls
  { client: 'Oberoi Hotels', project: 'Guest Room FCU & Lobby AHU Overhaul', location: 'New Delhi', sector: 'Hotels & Malls' },
  { client: 'Radisson Hotels', project: 'HVAC System Supply & Installation', location: 'New Delhi', sector: 'Hotels & Malls' },
  { client: 'Leela Palace', project: 'Precision AHU & Grills Supply', location: 'New Delhi', sector: 'Hotels & Malls' },
  { client: 'ITC Hotels', project: 'Kithen Exhaust & Make-Up Air Units', location: 'Kolkata', sector: 'Hotels & Malls' },
  { client: 'Select Citywalk Mall', project: 'Central Plant AHU & Air Distribution', location: 'Saket, Delhi', sector: 'Hotels & Malls' },
  { client: 'DLF Mall of India', project: 'AHU & Ducting Works – Phase I & II', location: 'Noida', sector: 'Hotels & Malls' },

  // Industrial
  { client: 'Maruti Suzuki India', project: 'Paint Shop Ventilation & Air Washers', location: 'Manesar, Haryana', sector: 'Industrial' },
  { client: 'American Embassy', project: 'AHU & Air Distribution Systems', location: 'New Delhi', sector: 'Industrial' },
  { client: 'Formula 1 Race Circuit', project: 'HVAC & Acoustic Systems – Race Control', location: 'Noida, UP', sector: 'Industrial' },
  { client: 'DMRC Metro Rail', project: 'Tunnel Ventilation Fans & Damper Systems', location: 'Delhi', sector: 'Industrial' },
  { client: 'Bharat Heavy Electricals (BHEL)', project: 'High Temp Dampers & Expansion Joints', location: 'Haridwar', sector: 'Industrial' },
  { client: 'Indian Railways (RDSO)', project: 'Acoustic Enclosures & Drum Testers', location: 'Lucknow, UP', sector: 'Industrial' },

  // Power Plants
  { client: 'NTPC Limited', project: 'Inlet Air Cooling & Water Shower Chambers', location: 'Dadri, UP', sector: 'Power Plants' },
  { client: 'Reliance Power', project: 'High Temp Low Leakage Dampers Supply', location: 'Sasan, MP', sector: 'Power Plants' },
  { client: 'Adani Power', project: 'Fan Silencers & Duct Silencers', location: 'Mundra, Gujarat', sector: 'Power Plants' },
  { client: 'Tata Power', project: 'Acoustic Louvers & Plant Room Ventilation', location: 'Trombay, Mumbai', sector: 'Power Plants' },
  { client: 'Delhi Transco Ltd', project: 'Transformer Cooling & Ventilation Systems', location: 'Delhi', sector: 'Power Plants' },
  { client: 'Sterlite Energy', project: 'Process Cooling Air Washers', location: 'Jharsuguda, Odisha', sector: 'Power Plants' },
];
