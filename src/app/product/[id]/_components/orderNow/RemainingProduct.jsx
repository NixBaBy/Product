"use client";
import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

export default function RamainingProducts() {
  const [timeLeft, setTimeLeft] = useState({
    seconds: 20,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { seconds } = prev;

        if (seconds === 0) {
          return { seconds: 20 };
        }

        seconds--;
        return { seconds };
      });
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num) => (num < 10 ? `0${num}` : num);

  return (
    <div className="">
      <div className="flex gap-2">
        <Card className="bg-transparent border-transparent text-white text-xl font-bold flex justify-center items-center">
          <CardContent className="p-1">
            <span className="text-white text-[18px] font-semibold">
              {formatNumber(timeLeft.seconds)}
            </span>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
