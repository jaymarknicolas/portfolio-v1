import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";

import { useState } from "react";

interface Certification {
  title: string;
  issuer: string;
  date: string;
  credential?: string;
}

interface CertificationCardProps {
  certification: Certification;
}

export function CertificationCard({ certification }: CertificationCardProps) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Card className="bg-[#1A1A1A] border-[#2A2A2A] hover:bg-[#1A1A1A]/80 transition-colors">
        <CardContent className="p-6">
          <div className="flex items-start justify-between">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-[#FF4D00]" />
                <h3 className="font-bold text-white">{certification.title}</h3>
              </div>
              <p className="text-gray-300">{certification.issuer}</p>
              {certification.credential && (
                <p className="text-sm text-[#FF4D00]">
                  Credential ID: {certification.credential}
                </p>
              )}
            </div>
            <Badge
              variant="outline"
              className="border-[#2A2A2A] bg-[#2A2A2A] text-gray-300"
            >
              {certification.date}
            </Badge>
          </div>
        </CardContent>
      </Card>
      <Drawer open={open} onOpenChange={setOpen}>
        <DrawerContent>
          <DrawerHeader className="text-left">
            <DrawerTitle>Edit profile</DrawerTitle>
            <DrawerDescription>
              Make changes to your profile here. Click save when you're done.
            </DrawerDescription>
          </DrawerHeader>
          <DrawerFooter className="pt-2">
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
