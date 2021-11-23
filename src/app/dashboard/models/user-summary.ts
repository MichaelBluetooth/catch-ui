import { HzChartData } from "./hz-chart-data";
import { ProjectReport } from "./project-report";
import { SearchHistoryItem } from "./search-history-item";

export interface UserSummary {
    projects: any[];
    current_project: any;
    project_reports: ProjectReport[];
    project_documents: any[];
    search_history: SearchHistoryItem[];
    charts: HzChartData;
    selected_phase: string;
}