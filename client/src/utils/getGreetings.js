import { IoSunnyOutline, IoMoonOutline } from "react-icons/io5";
import { BsSunrise, BsSunset } from "react-icons/bs";

export const getGreetings = () => {
  const hour = new Date().getHours();

  if (hour < 12) {
    return {
      icon: BsSunrise,
      greeting: "Good morning",
      subtext: "Plan your day ahead",
    };
  }

  if (hour < 18) {
    return {
      icon: IoSunnyOutline,
      greeting: "Good afternoon",
      subtext: "Keep your momentum going",
    };
  }

  if (hour < 21) {
    return {
      icon: BsSunset,
      greeting: "Good evening",
      subtext: "Time to wrap things up",
    };
  }

  return {
    icon: IoMoonOutline,
    greeting: "Good evening",
    subtext: "Focus mode active",
  };
};