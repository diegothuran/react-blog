import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarDays, CloudSun, MapPin } from "lucide-react";

interface Event {
  title: string;
  date: string;
  location: string;
}

interface Weather {
  temperature: string;
  condition: string;
  high: string;
  low: string;
}

interface SidebarWidgetProps {
  upcomingEvents?: Event[];
  weatherForecast?: Weather;
}

const SidebarWidget = ({
  upcomingEvents = [
    {
      title: "Farmers Market",
      date: "Saturday, 9:00 AM",
      location: "Town Square",
    },
    {
      title: "Town Hall Meeting",
      date: "Monday, 6:00 PM",
      location: "City Hall",
    },
    {
      title: "Local Music Festival",
      date: "Next Weekend",
      location: "Community Park",
    },
  ],
  weatherForecast = {
    temperature: "72°F",
    condition: "Partly Cloudy",
    high: "78°F",
    low: "65°F",
  },
}: SidebarWidgetProps) => {
  return (
    <div className="space-y-6 w-full bg-background p-4">
      {/* Weather Widget */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CloudSun className="h-5 w-5" />
            Weather Forecast
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-3xl font-bold">
                {weatherForecast.temperature}
              </span>
              <span className="text-muted-foreground">
                {weatherForecast.condition}
              </span>
            </div>
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>H: {weatherForecast.high}</span>
              <span>L: {weatherForecast.low}</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Upcoming Events Widget */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CalendarDays className="h-5 w-5" />
            Upcoming Events
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {upcomingEvents.map((event, index) => (
              <div
                key={index}
                className="border-b last:border-0 pb-3 last:pb-0"
              >
                <h3 className="font-medium">{event.title}</h3>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                  <CalendarDays className="h-4 w-4" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                  <MapPin className="h-4 w-4" />
                  <span>{event.location}</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SidebarWidget;
