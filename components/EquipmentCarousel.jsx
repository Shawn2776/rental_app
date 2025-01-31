"use client";

import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function EquipmentCarousel({ equipment }) {
  const placeholderImage = "https://placehold.co/600x400";
  const plugin = useRef(Autoplay({ delay: 4000, stopOnInteraction: true }));

  return (
    <main className="flex justify-center">
      <Carousel
        plugins={[plugin.current]}
        className="w-full md:max-w-7xl mx-auto"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent className="">
          {equipment.map((item) => (
            <CarouselItem key={item.id} className="md:basis-1/3">
              <Card>
                <div className="w-full max-w-md mx-auto">
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl dark:bg-gray-950">
                    <img
                      src={item.image || "https://placehold.co/600x400"}
                      alt={item.name}
                      width={600}
                      height={400}
                      className="w-full h-64 object-cover"
                      style={{ aspectRatio: "600/400", objectFit: "cover" }}
                    />
                    <CardContent className="p-4 space-y-2">
                      <h3 className="text-xl font-semibold">{item.name}</h3>
                      <p className="text-gray-500 dark:text-gray-400 text-nowrap truncate">
                        {item.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex flex-col w-full">
                          <p
                            className="text-lg font-bold leading-none mb-0 tracking-tight
"
                          >
                            <span>
                              $
                              <span className="text-green-700">
                                {item.price_per_hour.toFixed(2)}
                              </span>
                              <span className=" text-xs">/hour</span>
                            </span>
                            <br />
                            <span className="text-sm text-gray-600">
                              $
                              <span className="">
                                {item.price_per_day.toFixed(2)}
                              </span>
                              <span className=" text-xs">/day</span>
                            </span>
                          </p>
                        </div>
                        <Button>Rent</Button>
                      </div>
                    </CardContent>
                  </div>
                </div>
                {/* <Card className="">
                  <img src={item.image || placeholderImage} className="" />
                  <CardHeader className="">
                    <CardTitle className="">{item.name}</CardTitle>
                    <CardDescription className="">
                      <span>${item.price_per_hour}/ per hour</span>
                      <span>${item.price_per_day}/ per day</span>
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="">
                    <p>{item.description}</p>
                  </CardContent>
                  <CardFooter className="">
                    <Badge variant="" className="">
                      {item.category}
                    </Badge>
                    <Button variant="outline" className="">
                      Rent Now
                    </Button>
                  </CardFooter>
                </Card> */}
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:block" />
        <CarouselNext className="hidden md:block" />
      </Carousel>
    </main>
  );
}
