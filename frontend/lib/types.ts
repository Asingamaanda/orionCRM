export type Task = {
  id: number;
  title: string;
  priority: "Low" | "Medium" | "High";
  status: "Todo" | "In Progress" | "Done";
  assigned_to: string;
  due_date: string;
};

export type Lead = {
  id: number;
  client_name: string;
  source: string;
  lead_stage: string;
  conversion_probability: number;
  last_contacted: string;
};

export type Note = {
  id: number;
  content: string;
  category: string;
  created_at: string;
};

export type Kpi = {
  active_leads: number;
  pending_tasks: number;
  consultations_booked: number;
  completed_tasks: number;
};

export type Platform = "Facebook" | "Instagram" | "WhatsApp" | "YouTube" | "LinkedIn";

export type ContentItem = {
  id: number;
  title: string;
  platform: Platform;
  campaign: string;
  planned_date: string;
  scheduled_at: string;
  status: "Planned" | "Scheduled" | "Published";
  media_asset_url: string;
  canva_reference: string;
  video_topic?: string;
  hashtags: string[];
  cta: string;
  views: number;
  engagement: number;
  leads_generated: number;
  conversion_source: string;
};

export type SeoEngineeringRequest = {
  id: number;
  business_objective: string;
  seo_issue: string;
  technical_requirements: string;
  priority: "Low" | "Medium" | "High" | "Critical";
  expected_impact: string;
  assigned_developer: string;
  implementation_status: "Backlog" | "In Progress" | "Done";
};
