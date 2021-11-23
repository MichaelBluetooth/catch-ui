export interface HzChartElement {
  cnt: number;
  label: string;
}

export interface HzChartData {
  current_importjobid: number;
  afunc_cnt: number;
  afunc_stats: HzChartElement[];
  amat_cnt: number;
  amat_stats: HzChartElement[];
  aname_cnt: number;
  aname_stats: HzChartElement[];
  apanel_cnt: number;
  apanel_stats: HzChartElement[];
  ascope_cnt: number;
  ascope_stats: HzChartElement[];
  aslice_cnt: number;
  aslice_stats: HzChartElement[];
}
