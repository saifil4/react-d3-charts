import { TChart } from "react-d3/type";

export type TRevenueSplit = {
  name: string;
  product_sales: number;
  service_revenue: number;
  ad_revenue: number;
};

export const revenueSplitData: TChart<TRevenueSplit> = {
  margin: {
    top: 50,
    right: 50,
    bottom: 50,
    left: 50,
  },
  width: 700,
  height: 250,
  title: "Comparing revenue split of 10 companies",
  data: [
    {
      name: "Company 1",
      product_sales: 70,
      service_revenue: 62,
      ad_revenue: 87,
    },
    {
      name: "Company 2",
      product_sales: 74,
      service_revenue: 67,
      ad_revenue: 57,
    },
    {
      name: "Company 3",
      product_sales: 89,
      service_revenue: 28,
      ad_revenue: 95,
    },
    {
      name: "Company 4",
      product_sales: 79,
      service_revenue: 48,
      ad_revenue: 93,
    },
    {
      name: "Company 5",
      product_sales: 32,
      service_revenue: 56,
      ad_revenue: 25,
    },
    {
      name: "Company 6",
      product_sales: 95,
      service_revenue: 40,
      ad_revenue: 32,
    },
    {
      name: "Company 7",
      product_sales: 44,
      service_revenue: 73,
      ad_revenue: 76,
    },
    {
      name: "Company 8",
      product_sales: 26,
      service_revenue: 57,
      ad_revenue: 96,
    },
    {
      name: "Company 9",
      product_sales: 100,
      service_revenue: 46,
      ad_revenue: 43,
    },
    {
      name: "Company 10",
      product_sales: 87,
      service_revenue: 27,
      ad_revenue: 30,
    },
  ],
};
