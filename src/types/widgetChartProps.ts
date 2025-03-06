import type { WidgetOption } from './widgetOptions.ts';

/**
 * @prop title - Title that will be displayed in the widget header
 * @prop subtitle - Title
 * @prop icon - icon that will be displayed in the top left of the widget, in the header
 * @prop options - chart options, see Chart.js option object
 */
export type WidgetChartProps = {
  title: string;
  subtitle?: string;
  icon?: string;
  options: WidgetOption;
};
