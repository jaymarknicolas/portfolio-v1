import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award } from "lucide-react";

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
    <Card className="glass-card glass-card-hover h-full group">
      <CardContent className="p-5">
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-2 flex-1">
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-lg bg-[#FF4D00]/10 group-hover:bg-[#FF4D00]/20 transition-colors">
                <Award className="w-4 h-4 text-[#FF4D00]" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground group-hover:text-[#FF4D00] transition-colors">
                  {certification.title}
                </h3>
                <p className="text-muted-foreground text-sm mt-0.5">
                  {certification.issuer}
                </p>
              </div>
            </div>
            {certification.credential && (
              <p className="text-xs text-[#FF4D00]/80 ml-11">
                ID: {certification.credential}
              </p>
            )}
          </div>
          <Badge
            variant="outline"
            className="shrink-0 border-[#FF4D00]/20 bg-[#FF4D00]/5 text-[#FF4D00] text-xs"
          >
            {certification.date}
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
}
