import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award } from "lucide-react";

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
  return (
    <>
      <Card className="bg-[#1A1A1A] border-[#2A2A2A] hover:bg-[#1A1A1A]/80 transition-colors h-full">
        <CardContent className="p-6">
          <div className="flex items-start justify-between">
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <Award className="w-5 h-5 text-[#FF4D00] flex-shrink-0" />
                <h3 className="font-bold text-white">{certification.title}</h3>
              </div>
              <p className="text-gray-300 text-base">{certification.issuer}</p>
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
    </>
  );
}
