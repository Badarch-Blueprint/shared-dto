export enum TeamType {
  TRANSLATION = 'translation',
  SCANNING = 'scanning',
  UPLOADING = 'uploading',
  MIXED = 'mixed',
}

export enum TeamStatus {
  ACTIVE = 'active',
  SUSPENDED = 'suspended',
  INACTIVE = 'inactive',
  UNDER_REVIEW = 'under_review',
}

export class CreateTeamDto {
  readonly team_name!: string;
  readonly team_slug!: string;
  readonly leader_id!: number;
  readonly description?: string;
  readonly logo_url?: string;
  readonly team_type?: TeamType;
  readonly supported_languages?: string[];
  readonly specializations?: string[];
  readonly website_url?: string;
  readonly discord_url?: string;
}

export class UpdateTeamDto {
  readonly team_name?: string;
  readonly team_slug?: string;
  readonly description?: string;
  readonly logo_url?: string;
  readonly team_type?: TeamType;
  readonly status?: TeamStatus;
  readonly supported_languages?: string[];
  readonly specializations?: string[];
  readonly website_url?: string;
  readonly discord_url?: string;
}

export class TeamResponseDto {
  readonly team_id!: number;
  readonly team_name!: string;
  readonly team_slug!: string;
  readonly description?: string;
  readonly logo_url?: string;
  readonly leader_id!: number;
  readonly team_type!: TeamType;
  readonly status!: TeamStatus;
  readonly supported_languages?: string[];
  readonly specializations?: string[];
  readonly is_verified!: boolean;
  readonly total_uploads!: number;
  readonly approved_uploads!: number;
  readonly quality_rating!: number;
  readonly website_url?: string;
  readonly discord_url?: string;
  readonly created_at!: Date;
  readonly updated_at!: Date;
}
