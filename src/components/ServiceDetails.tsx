import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";
import { Calendar, Clock, MapPin, Phone, Star, User } from "lucide-react";

interface ServiceDetailsProps {
  isOpen?: boolean;
  onClose?: () => void;
  service?: {
    id: string;
    title: string;
    category: string;
    description: string;
    price: string;
    rating: number;
    provider: {
      name: string;
      phone: string;
      address: string;
    };
    availability: string;
    image: string;
  };
}

const ServiceDetails = ({
  isOpen = true,
  onClose = () => {},
  service = {
    id: "1",
    title: "Business Setup Consultation",
    category: "Investment",
    description:
      "Professional consultation services for new business setup, including legal requirements, market analysis, and financial planning. Our experts will guide you through the entire process of establishing your business in the region.",
    price: "Starting from 500 SAR",
    rating: 4.8,
    provider: {
      name: "Business Solutions Inc.",
      phone: "+966 12 345 6789",
      address: "King Fahd Road, Riyadh",
    },
    availability: "Sunday - Thursday, 9:00 AM - 5:00 PM",
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80",
  },
}: ServiceDetailsProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-[900px] max-h-[90vh] overflow-y-auto bg-white">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className="text-2xl font-bold">
              {service.title}
            </DialogTitle>
            <Badge
              variant="outline"
              className="bg-blue-50 text-blue-700 border-blue-200"
            >
              {service.category}
            </Badge>
          </div>
          <DialogDescription className="text-gray-500">
            Service ID: {service.id}
          </DialogDescription>
        </DialogHeader>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          <div className="space-y-4">
            <div className="rounded-lg overflow-hidden h-64 bg-gray-100">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex items-center space-x-2">
              <div className="flex items-center text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${i < Math.floor(service.rating) ? "fill-amber-500" : "fill-gray-200"}`}
                  />
                ))}
              </div>
              <span className="text-gray-700 font-medium">
                {service.rating}/5
              </span>
            </div>

            <div className="p-4 border rounded-lg bg-gray-50">
              <h3 className="font-semibold text-lg mb-2">
                Provider Information
              </h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <User className="w-5 h-5 text-gray-500" />
                  <span>{service.provider.name}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-5 h-5 text-gray-500" />
                  <span>{service.provider.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-gray-500" />
                  <span>{service.provider.address}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-lg mb-2">Description</h3>
              <p className="text-gray-700">{service.description}</p>
            </div>

            <Separator />

            <div>
              <h3 className="font-semibold text-lg mb-2">Pricing</h3>
              <p className="text-gray-700">{service.price}</p>
            </div>

            <Separator />

            <div>
              <h3 className="font-semibold text-lg mb-2">Availability</h3>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-gray-500" />
                <Clock className="w-5 h-5 text-gray-500" />
                <span className="text-gray-700">{service.availability}</span>
              </div>
            </div>

            <div className="p-4 border rounded-lg bg-blue-50 mt-6">
              <h3 className="font-semibold text-lg mb-2">Book This Service</h3>
              <p className="text-gray-700 mb-4">
                Fill out the form below to request this service or book an
                appointment.
              </p>
              <div className="space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <Button variant="outline" className="w-full">
                    Request Quote
                  </Button>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    Book Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <DialogFooter className="flex justify-between items-center mt-6">
          <Button variant="outline" onClick={onClose}>
            Close
          </Button>
          <Button
            variant="outline"
            className="text-blue-600 border-blue-200 hover:bg-blue-50"
          >
            Save to Favorites
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ServiceDetails;
