export interface Sport {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
}

export interface Team {
  id: string;
  name: string;
  sportId: string;
  logo: string;
  description: string;
}

export interface Match {
  id: string;
  homeTeamId: string;
  awayTeamId: string;
  sportId: string;
  startTime: Date;
  status: 'scheduled' | 'live' | 'completed';
  score?: {
    home: number;
    away: number;
  };
}