"use client";

import * as React from "react";
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

import { Card } from "@/components/ui/card";
import { useTheme } from "next-themes";

const data = [
  {
    date: "Jan 22",
    value: 2890,
  },
  {
    date: "Feb 22",
    value: 2756,
  },
  {
    date: "Mar 22",
    value: 3322,
  },
  {
    date: "Apr 22",
    value: 3470,
  },
  {
    date: "May 22",
    value: 3475,
  },
  {
    date: "Jun 22",
    value: 3129,
  },
];

export function Chart() {
  const { theme: mode } = useTheme();

  return (
    <Card className="p-6">
      <ResponsiveContainer width="100%" height={350}>
        <LineChart data={data}>
          <XAxis
            dataKey="date"
            stroke="#888888"
            fontSize={12}
            tickLine={false}
            axisLine={false}
          />
          <YAxis
            stroke="#888888"
            fontSize={12}
            tickLine={false}
            axisLine={false}
            tickFormatter={(value) => `$${value}`}
          />
          <Tooltip
            content={({ active, payload }) => {
              if (active && payload && payload.length) {
                return (
                  <div className="rounded-lg border bg-background p-2 shadow-sm">
                    <div className="grid grid-cols-2 gap-2">
                      <div className="flex flex-col">
                        <span className="text-[0.70rem] uppercase text-muted-foreground">
                          Value
                        </span>
                        <span className="font-bold text-muted-foreground">
                          ${payload[0].value}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              }
              return null;
            }}
          />
          <Line
            type="monotone"
            dataKey="value"
            stroke={mode === "dark" ? "#00FF94" : "#0C4A6E"}
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  );
}